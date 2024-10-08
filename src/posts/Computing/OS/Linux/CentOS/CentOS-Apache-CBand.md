---
title:  "[CentOS] Apache CBand 설치 및 설정 방법" 

categories:
  - CentOS
tags:
  - Server
  - CentOS
  - Apache
  - CBand
  - Traffic

date: 2020-03-12

editLink: false
lastUpdated: true
---

## 테스트 환경
### Server
- CentOS Linux release 7.2.1511 (Core)
- Apache 2.4.6

## 참고 사항
### 사용 방안
- `Apache` `VirtualHost`마다 접속량 및 트래픽 사용량을 확인할 때 사용할 수 있습니다.
- 어떤 IP가 접근했는지 여부를 확인하거나 대상 사이트의 제한을 두는 것이 가능합니다.

### 주의 사항
- `Apache`에서 지원하던 `Module`이지만 공식 지원이 종료되어 업데이트를 지원하지 않습니다.
- 사용 간에 이슈 또는 보안 상에 문제가 발생될 수 있으니 꼭 필요한 경우에만 사용 바랍니다.

## 설치 및 설정 과정
### CentOS yum을 통한 Apache 다운로드
```bash
$ yum install -y httpd httpd-devel
```
- `httpd`와 `httpd-devel`를 설치하여 `Apache`와 `Apxs`를 설치합니다.

### Apache mod_cband 모듈 설치 및 설정
```bash
$ cd /usr/local/src
$ wget https://fossies.org/linux/www/apache_httpd_modules/old/mod-cband-0.9.7.5.tgz
```
- `wget` 명령어를 이용하여 `mod_cband`의 소스 파일을 다운로드 합니다.
- 만약 해당 파일이 지원 종료될 것을 대비하여 별도 [링크](/assets/downloads/Computing/OS/Linux/CentOS/CentOS-Apache-CBand/mod-cband-0.9.7.5.tgz)를 전달드립니다.

```bash
$ tar -zxvf mod-cband-0.9.7.5.tgz
```
- `mod_cband` 소스 파일의 압축을 해제합니다.

```bash
$ cd mod-cband-0.9.7.5
$ ./configure --with-apxs=/usr/bin/apxs
```
- 압축 해제된 디렉토리로 이동하여 `configure` 명령어로 컴파일링을 진행합니다.

```bash
$ make && make install
```
- 컴파일링이 완료된 경우 `make && make install`을 통해 설치합니다.
::: warning
Apache 버전이 2.4 버전 이상
- make 오류가 발생되므로 소스 수정 후 다시 `make && make install`을 진행하여 설치합니다.  
```bash
$ vim /usr/local/src/mod-cband-0.9.7.5/src/mod_cband.c
```
1. 파일 내 모든 `remote_ip` &rarr; `client_ip` 로 변경
2. `1365 Lines`에 있는 `remote_addr` &rarr; `client_addr` 로 변경
:::


```bash
$ cat /etc/httpd/conf/httpd.conf | grep cband
LoadModule cband_module /usr/lib64/httpd/modules/mod_cband.so
# 또는 LoadModule cband_module modules/mod_cband.so
$ httpd -t
Syntax OK
```
- 정상적으로 설치가 완료된 경우 `httpd.conf` 파일 내 모듈 로드가 정상적인지 확인합니다.

```bash
$ vim /etc/httpd/conf/httpd.conf
```
```bash
<IfModule mod_cband.c>
     <Location /cband-status-me>
          SetHandler cband-status-me
     </Location>

     <Location /~*/cband-status-me>
          SetHandler cband-status-me
     </Location>

     <Location /cband-status>
          SetHandler cband-status
          Order deny,allow
          Deny from all
          Allow from all #all 대신 IP 입력시 해당 IP만 상태페이지 접속 가능
     </Location>
</IfModule>
```
- 정상적으로 모듈이 동작한다면 `httpd.conf` 최하단에 관련 설정을 추가합니다.

```bash
$ vim /etc/httpd/conf.d/httpd-vhosts.conf
```
```bash
<VirtualHost *:80>
  DocumentRoot "웹 소스 위치"
  ServerName 도메인주소
  CBandLimit 300M # 허용 트래픽 양
  CBandPeriod 1D # 몇 일간 적용할 것인지
  CBandExceededURL http://www.naver.com # 차단될 시 이동될 페이지
  # 설정 상 일일 트래픽이 300M을 넘었을 경우 차단되어 http://www.naver.com/ 이동
</VirtualHost>
```
- `mod_cband`를 사용하여 측정을 원하는 `VirtualHost`에 설정을 추가/수정합니다.
- 수정 완료 이후에 `httpd` 프로세스를 재기동한 뒤 정상 동작되는지 확인합니다.


![](/assets/image/Post/Computing/OS/Linux/CentOS/CentOS-Apache-CBand/1.png =90%x90%)
- 설정 완료 후 http://도메인/cband-status 접근 시 설정한 호스트에 대한 정보 확인이 가능합니다.
- 홈페이지에 접속하여 제한을 주었던 사항과 쌓인 트래픽의 총량 등의 사항을 확인할 수 있습니다.

::: note
**페이지 표기 사항 설명**  
 
|대제목|내용|설명|
|:---:|:---:|:---|
|**VirtualHost**|Virtual host name|설정한 VirtualHost 목록|
||reset all/reset|모든 VirtualHost에 대한 기록을 리셋/해당 VirtualHost에 대한 기록을 리셋|
||time to refresh|해당 시간이 지나면 갱신|
||Total Limit/Slice/Used|해당 VirtualHost의 트래픽 제한 / 나눈 기간에 따른 트래픽 / 지정된 기간동안의 트래픽 사용량|
||Class 0 Limit/Slice/Used|해당 IP범위에 대한 트래픽 제한 / 나눈 기간에 따른 트래픽 / 해당 IP범위에서 사용된 트래픽|
||Class 1 Limit/Slice/Used|해당 IP범위에 대한 트래픽 제한 / 나눈 기간에 따른 트래픽 / 해당 IP범위에서 사용된 트래픽|
||Class 2 Limit/Slice/Used|해당 IP범위에 대한 트래픽 제한 / 나눈 기간에 따른 트래픽 / 해당 IP범위에서 사용된 트래픽|
||kbps Limit/Current|초당 최대 전송 속도 / 측정된 전송 속도|
||rps Limit/Current|초당 최대 요청수 / 측정된 요청 수|
||Connections Limit/Current|최대 동시 접속자 수 / 현재 동시 접속자 수|
||user|지정된 유저|
|**Remote Client**|Remote IP|접속자 IP 주소|
||Virtualhost|접속한 VirtualHost 명|
||Connections Limit/Current|해당 IP에 대한 접속자 수 제한 / 해당 IP의 접속자 수|
||Last speed/conn [kbps]|마지막 접속자의 속도|
|**Server summary**|Server uptime|서버의 가동 시간|
||Total virtualhosts|총 VirtualHost의 개수|
||Total users|총 User 수|
||Total connections|총 커넥션의 수|
||Total traffic|총 트래픽|
||Current speed|측정된 속도|
:::

---
  
긴 포스팅을 읽어주셔서 감사합니다! :D
