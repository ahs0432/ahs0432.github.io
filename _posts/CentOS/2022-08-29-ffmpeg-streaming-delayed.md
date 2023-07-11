---
title:  "[CentOS] ffmpeg 스트리밍 지연 현상 해소" 

categories:
  - CentOS
tags:
  - FFmpeg
  - Streaming
  - HLS
  - MPEG-TS
  - m3u8

toc: true
toc_sticky: true

date: 2022-08-29
last_modified_at: 2022-08-29
---

## 🎇 테스트 환경
- CentOS Linux release 7.6.1804 (Core)
- FFmpeg 3.2.7

## 🤔 발생 상황
매년 개최되는 대회에서 캠코더와 연결, 스트리밍하고 있는 서비스를 진행 중이다.  
운영 간 문제가 됐었던 두 가지 케이스를 소개하고 어떻게 해소했는지 포스팅해본다.

## 🔍 캠코더 연결 간 사용한 명령어 및 옵션
캠코더에서 사용하는 계정에 해당하는 Profile을 지정 후 대상 .smp 파일에 접근,  
대상 캠코더에 코덱 등을 맞춰 파일을 HLS 형태로 스트리밍 되도록 만들어두었다.

```bash
$ ffmpeg -report -i rtsp://"$CREDENTIAL"@"$CCTVIP"/$PROFILE/media.smp -vcodec copy -an -f hls -hls_time 1 -hls_list_size 2 -hls_allow_cache 0 -hls_flags delete_segments -recover_any_error 1 -attempt_recovery 1 $WEBPATH/web.m3u8
```

이렇게 만든 명령어를 실행하면 `$WEBPATH` 경로에 `web.m3u8` 파일이 생성된다.  
또한 `web$NUM.ts` 형태로 스트리밍 전용 파일로 작은 단위로 쪼개어 재생된다.

## 🔧 실 캠코더와의 네트워크 단절/지연 현상
이 현상은 사실 앞전에 진행하신 선임 분께서 어느정도 해소해두신 상태였다.  
나는 스크립트에 미완성된 부분을 조금 더 보완하고 모니터링을 강화하게 됐다.

이 문제를 해결한 방법은 아래와 같이 세 가지 검사를 진행하고 해소하도록 했다.
  
```bash
PCOUNT=`ps -eaf | grep rtsp | grep -v grep | wc -l`

if [ $PCOUNT -ne 1 ]; then
  # 실행 명령어
fi
# 추가 검사 명령어
```
- FFmpeg 프로세스가 정상 실행된 상태인지 확인한다. 

```bash
PID=`ps -eaf | grep ffmpeg | grep -v grep | awk '{print $2}'`

# web.m3u8 파일 존재 여부 확인
if [ -f $WEBPATH/web.m3u8 ]; then
  # 추가 검사 명령어
else
  # 대상 프로세스 안전 종료
  kill -15 $PID
  ## 실행 명령어
fi
```
- web.m3u8 파일의 생성 여부를 확인한다.  

```bash
# 30초 지연 확인
DELAY=30
# 현재 시간을 UNIX 시간으로 출력
THISTIME=`date "+%s"`
# 파일 최종 수정 시간을 UNIX 시간으로 출력
FILETIME=`stat --format=%Y "$WEBPATH/web.m3u8"`
# 현재 시간과 최종 수정 시간을 빼서 THISTIME 변수에 저장
let "THISTIME -= FILETIME"

if [ ${THISTIME} -ge ${DELAY} ]; then
  # 대상 프로세스 안전 종료
  kill -15 $PID
  ## 실행 명령어
fi
```
- web.m3u8 파일의 최종 수정 시간을 확인한다.  

이렇게 만든 스크립트를 합치면 아래와 같은 형태의 스크립트가 나온다.

```bash
PCOUNT=`ps -eaf | grep rtsp | grep -v grep | wc -l`

if [ $PCOUNT -ne 1 ]; then
  # 실행 명령어
fi
# 추가 검사 명령어

PID=`ps -eaf | grep ffmpeg | grep -v grep | awk '{print $2}'`

# web.m3u8 파일 존재 여부 확인
if [ -f $WEBPATH/web.m3u8 ]; then
  # 30초 지연 확인
  DELAY=30
  # 현재 시간을 UNIX 시간으로 출력
  THISTIME=`date "+%s"`
  # 파일 최종 수정 시간을 UNIX 시간으로 출력
  FILETIME=`stat --format=%Y "$WEBPATH/web.m3u8"`
  # 현재 시간과 최종 수정 시간을 빼서 THISTIME 변수에 저장
  let "THISTIME -= FILETIME"

  if [ ${THISTIME} -ge ${DELAY} ]; then
    # 대상 프로세스 안전 종료
    kill -15 $PID
    ## 실행 명령어
  fi
else
  # 대상 프로세스 안전 종료
  kill -15 $PID
  ## 실행 명령어
fi
```

## 🔧 스트리밍 지연 및 끊김 현상
사실 대회 기간이 짧고 설정하는 등에 대한 시간에 짧아 항상 고치지 못했던 부분이다.  
이번에는 마음 먹고 자동화(~~퇴사 준비~~) 해보자는 생각에 문제의 패턴을 찾기 시작했다.

이렇게 문제 발생 시 발견된 패턴은 web.m3u8 파일에 내용에서 확인할 수 있었다.

```bash
## 정상적으로 수행되는 web.m3u8 파일
$ cat web.m3u8 

#EXTM3U
#EXT-X-VERSION:3
#EXT-X-ALLOW-CACHE:NO
#EXT-X-TARGETDURATION:3
#EXT-X-MEDIA-SEQUENCE:35028
#EXTINF:2.500000,
web35028.ts
#EXTINF:2.499011,
web35029.ts
```

```bash
## 비정상적으로 수행되는 web.m3u8 파일
$ cat web.m3u8 

#EXTM3U
#EXT-X-VERSION:3
#EXT-X-ALLOW-CACHE:NO
#EXT-X-TARGETDURATION:1
#EXT-X-MEDIA-SEQUENCE:36028
#EXTINF:0.000033,
web36028.ts
#EXTINF:0.000033,
web36029.ts
```

두 파일에서 차이점은 보면 알 수 있듯이 `EXT-X-TARGETDURATION`과 `EXTINF`에 있다.

`EXT-X-TARGETDURATION`는 파일 목록에 나열된 각 파일의 최대 재생 시간을 명시하고,  
`EXTINF`는 현재 지시어 다음 명시돼있는 파일의 콘텐츠 재생 시간을 명시하고 있다.

추측할 수 있는 것은 `EXT-X-TARGETDURATION`과 `EXTINF` 시간은 서로 비슷해야한다.  
하지만 확인했듯 비정상적인 파일은 `EXTINF` 값이 0.000033로 낮은 수치를 보인다.

이를 통해 작성한 스크립트는 아래와 같이 작성됐다.

```bash
# TARGETDURATION이 1로 기록돼있는지 확인한다.
DURATION=`cat $WEBPATH/web.m3u8 | grep "EXT-X-TARGETDURATION:1" | wc -l`
# EXTINF 파일에 0.0이 기록된 것이 없는지 확인한다.
INFTIME=`cat $WEBPATH/web.m3u8 | grep "EXTINF:0.0" | wc -l`

# TARGETDURATION이 1인 상태인지, EXTINF 파일에 0.0이 기록된게 0개가 아닌지 확인한다.
if [ $DURATION -eq 1 ] && [ $INFTIME -ne 0 ]; then
  # 대상 프로세스 안전 종료
  kill -15 $PID
  ## 실행 명령어
fi
```

문제를 해결하는 프로세스는 `EXT-X-TARGETDURATION` 값이 최소 값인지 먼저 확인,  
그리고 `EXTINF` 값이 0.0 이하 값을 갖고 있는지 확인하고 참인 경우 재기동한다.

## 📝 최종 스크립트
사실 포스팅 내 스크립트랑 실 사용 중인 스크립트는 다소 차이가 존재한다.  
이유는 스크립트 안쪽에 모니터링 요소나 알람 발생 요소들이 존재하기 때문이다.

따라서 사용 시 오타나 이런 부분이 없는지 한번 더 점검하고 사용하길 바란다.  
포스팅에서 작성한 내용을 모두 종합하여 하나로 만들면 아래 스크립트가 나온다.

```bash
PCOUNT=`ps -eaf | grep rtsp | grep -v grep | wc -l`

if [ $PCOUNT -ne 1 ]; then
  # 실행 명령어
fi
# 추가 검사 명령어

PID=`ps -eaf | grep ffmpeg | grep -v grep | awk '{print $2}'`

# web.m3u8 파일 존재 여부 확인
if [ -f $WEBPATH/web.m3u8 ]; then
  # 30초 지연 확인
  DELAY=30
  # 현재 시간을 UNIX 시간으로 출력
  THISTIME=`date "+%s"`
  # 파일 최종 수정 시간을 UNIX 시간으로 출력
  FILETIME=`stat --format=%Y "$WEBPATH/web.m3u8"`
  # 현재 시간과 최종 수정 시간을 빼서 THISTIME 변수에 저장
  let "THISTIME -= FILETIME"

  if [ ${THISTIME} -ge ${DELAY} ]; then
    # 대상 프로세스 안전 종료
    kill -15 $PID
    ## 실행 명령어
  else
    # TARGETDURATION이 1로 기록돼있는지 확인한다.
    DURATION=`cat $WEBPATH/web.m3u8 | grep "EXT-X-TARGETDURATION:1" | wc -l`
    # EXTINF 파일에 0.0이 기록된 것이 없는지 확인한다.
    INFTIME=`cat $WEBPATH/web.m3u8 | grep "EXTINF:0.0" | wc -l`

    # TARGETDURATION이 1인 상태인지, EXTINF 파일에 0.0이 기록된게 0개가 아닌지 확인한다.
    if [ $DURATION -eq 1 ] && [ $INFTIME -ne 0 ]; then
      # 대상 프로세스 안전 종료
      kill -15 $PID
      ## 실행 명령어
    fi
  fi
else
  # 대상 프로세스 안전 종료
  kill -15 $PID
  ## 실행 명령어
fi
```

첫 번째 문제는 이미 어느정도 해소된 상태였기 때문에 지속 문제가 되진 않았다.  

두 번째 문제는 몇 년간 우리를 괴롭혀왔고 해당 프로젝트(?)에 메인 담당이 되고  
올해 드디어 어느정도 구축 간에 틈이 나서 이렇게 문제점을 해소할 수 있었다.

이 문제 때문에 매일 1시간, 2시간마다 지속적으로 이슈가 없는지 확인해야했다.  
해소하고 나서 이러한 모니터링 요소가 없어져서 굉장히 편하게 진행 중이다.

---

끝까지 포스팅을 읽어주셔서 감사드리며, 틀린 내용이 있다면 댓글 부탁드립니다. 😎
