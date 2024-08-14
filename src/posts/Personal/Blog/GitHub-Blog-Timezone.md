---
title:  "[Blog] GitHub timezone 설정 (has a future date 해결)"

categories:
  - Blog
tags:
  - Jekyll
  - timezone
  - has a future date

date: 2022-08-26

editLink: false
lastUpdated: true
---

## 🤔 발생 상황
새벽에 블로그 포스팅하는 도중 정상적으로 포스팅되지 않는 문제가 생겼다.  
당시 문제가 발생됐던 포스팅은 [[Security] WordPress Redirect 취약점 조치](/posts/Computing/Security/WordPress-Redirect-Exploit.html)이다.

## 🔍 문제 분석
아무래도 Security 명칭을 이용하다보니 문제가 됐구나라고 혼자 생각했다.  
그래서 Secure, Securitys 등의 명칭으로 디렉토리, 카테고리 등을 변경했다.

아무리 찾아도 문제될 것이 확인되지 않아 Jekyll Build 상황을 확인하게 됐다.  
Build 사항 중 특이하게 아래와 같이 `has a future date` 오류가 발생됐다.
```
Skipping: _posts/Security/2022-08-23-WordPress-Redirect-Exploit.md has a future date
```

future date라는 문구를 보고 시간 때문에 문제가 됐구나 라는 생각을 하게 됐다.  

GitHub은 국내는 아니어도 태평양이나 외국 표준 시간을 사용하겠구나 싶었고,  
GitHub 블로그는 저마다 사용하는 timezone을 설정할 수 있다는 것을 확인했다.

## 🔧 문제 해결
이 문제는 _config.yml 파일 내 timezone 옵션을 변경하면 간단하게 해결된다!

```yaml
# timezone: # https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
timezone: Asia/Seoul
```

나는 한국에 거주하니까 Asia/Seoul로 서울 표준 시간으로 맞춰서 진행하게 됐다.  
이후 커밋 후 Build 상황을 확인해보니 정상적으로 사이트가 Reading 상태가 됐다.

```
Reading: _posts/Security/2022-08-23-WordPress-Redirect-Exploit.md
```

---
정말 간단하게 해결 가능한 문제인데 확인하는데까지 한 20분은 쏟은거 같다.  
원래 12시 조금 넘어서 잠드는 편인데, 작성도 늦고.. 오류 때문에 1시까지 버텼다..

다른 분들은 나처럼 timezone을 설정하지 않아 문제가 되지 않았으면 해서 작성한다!  
~~(블로그 제작 간에 보고도 무슨 일 있겠어하고 무시해서 발생된 문제이지만.. 😅)~~

끝까지 포스팅을 읽어주셔서 감사드리며, 틀린 내용이 있다면 댓글 부탁드립니다. 😎