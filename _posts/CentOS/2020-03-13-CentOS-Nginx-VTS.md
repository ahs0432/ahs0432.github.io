---
title:  "[CentOS] Nginx VTS 설치 및 설정 방법" 

categories:
  - CentOS
tags:
  - Server
  - CentOS
  - Nginx
  - VTS
  - Traffic

toc: true
toc_sticky: true

date: 2020-03-13
last_modified_at: 2020-03-13
---

## 테스트 환경
### Server
- CentOS Linux release 7.2.1511 (Core)
- Nginx 1.13.2

## 참고 사항
### 사용 방안
- `Nginx` `VirtualHost`마다 접속량 및 트래픽 사용량을 확인할 때 사용할 수 있습니다.
- 어떤 IP가 접근했는지 여부를 확인하거나 대상 사이트의 제한을 두는 것이 가능합니다.

### 주의 사항
- `Yum`을 통해 설치하는 방식이 아니기 때문에 추가 Module 필요 시 다시 `Compile` 해야 합니다.

## 설치 및 설정 과정
### CentOS yum 업데이트 및 버전에 맞는 repo 설치
```bash
$ yum update –y --exclude=kernel*
$ yum clean all
$ yum install –y epel-release
$ yum update –y --exclude=kernel*
```
* 위 과정을 통해 `Nginx` 관련 의존성 파일을 설치할 수 있도록 준비합니다.


### Nginx 의존성 Yum 설치 및 Nginx, Nginx-Module-VTS Source 파일 다운로드
```bash
$ yum install -y perl perl-devel perl-ExtUtils-Embed libxslt libxslt-devel libxml2 libxml2-devel gd gd-devel GeoIP GeoIP-devel wget git
```
- 기본적으로 `Nginx`에서 사용하는 의존성 파일을 `Yum`을 통해 설치합니다.

```bash
$ cd /usr/local/src/
$ wget https://nginx.org/download/nginx-1.13.2.tar.gz && tar zxvf nginx-1.13.2.tar.gz
```
- `Nginx`의 Source를 `wget` 명령어를 통해 다운로드한 뒤 압축을 해제합니다.

```bash
$ git clone git://github.com/vozlt/nginx-module-vts.git
```
- `Nginx-Module-VTS`의 Source를 `Git`을 통해 다운로드 합니다.

```bash
$ cd /usr/local/src/
$ wget https://ftp.pcre.org/pub/pcre/pcre-8.40.tar.gz && tar xzvf pcre-8.40.tar.gz
$ wget https://www.zlib.net/zlib-1.2.11.tar.gz && tar xzvf zlib-1.2.11.tar.gz
$ wget https://www.openssl.org/source/openssl-1.1.0f.tar.gz && tar xzvf openssl-1.1.0f.tar.gz
```
- `Yum` 설치한 의존성을 제외한 추가 필요 의존성의 Source를 다운로드합니다.

### Nginx Compile 설치
```bash
$ cd nginx-1.13.2/
$ ./configure --prefix=/etc/nginx \
   --sbin-path=/usr/sbin/nginx \
   --modules-path=/usr/lib64/nginx/modules \
   --conf-path=/etc/nginx/nginx.conf \
   --error-log-path=/var/log/nginx/error.log \
   --pid-path=/var/run/nginx.pid \
   --lock-path=/var/run/nginx.lock \
   --user=nginx \
   --group=nginx \
   --build=CentOS \
   --builddir=nginx-1.13.2 \
   --with-select_module \
   --with-poll_module \
   --with-threads \
   --with-file-aio \
   --with-http_ssl_module \
   --with-http_v2_module \
   --with-http_realip_module \
   --with-http_addition_module \
   --with-http_xslt_module=dynamic \
   --with-http_image_filter_module=dynamic \
   --with-http_geoip_module=dynamic \
   --with-http_sub_module \
   --with-http_dav_module \
   --with-http_flv_module \
   --with-http_mp4_module \
   --with-http_gunzip_module \
   --with-http_gzip_static_module \
   --with-http_auth_request_module \
   --with-http_random_index_module \
   --with-http_secure_link_module \
   --with-http_degradation_module \
   --with-http_slice_module \
   --with-http_stub_status_module \
   --http-log-path=/var/log/nginx/access.log \
   --http-client-body-temp-path=/var/cache/nginx/client_temp \
   --http-proxy-temp-path=/var/cache/nginx/proxy_temp \
   --http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp \
   --http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp \
   --http-scgi-temp-path=/var/cache/nginx/scgi_temp \
   --with-mail=dynamic \
   --with-mail_ssl_module \
   --with-stream=dynamic \
   --with-stream_ssl_module \
   --with-stream_realip_module \
   --with-stream_geoip_module=dynamic \
   --with-stream_ssl_preread_module \
   --with-compat \
   --with-pcre=../pcre-8.40 \
   --with-pcre-jit \
   --with-zlib=../zlib-1.2.11 \
   --with-openssl=../openssl-1.1.0f \
   --with-openssl-opt=no-nextprotoneg \
   --with-debug \
   --add-module=/usr/local/src/nginx-module-vts/
```
- `Nginx` 설치를 위해 `configure` 명령어를 통해 필요한 Module과 파일을 지정하여 `Compile`합니다.
- 금번 다운로드한 패키지 폴더에 파일을 이용하여 `Nginx_Module_VTS`도 같이 `Compile`합니다.

```bash
$ make && make install
```
- 정상적으로 `Compile`이 완료된 경우 대상 패키지를 설치합니다.

```bash
$ nginx -v
nginx version: nginx/1.13.2(CentOS)
```
- 정상적으로 설치됐는지 확인을 위해 `Nginx` 버전을 확인합니다.

```bash
$ nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: [emerg] mkdir() ~/var/cache/nginx/client_temp failed (2: No such file or directory)
nginx: configuration file /etc/nginx/nginx.conf test failed
```
- `Nginx` Syntax(구문)이 정상적으로 동작되는지 확인 시 위와 같은 오류가 발생됩니다.

```bash
$ mkdir -p /var/cache/nginx
$ nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```
- 해당 오류는 `Nginx` 구문에 명시된 디렉토리가 존재하지 않아 발생되는 문제로 대상 디렉토리를 생성합니다.

```bash
$ vim /usr/lib/systemd/system/nginx.service
```
```bash
[Unit]
Description=nginx - high performance web server
Documentation=https://nginx.org/en/docs/
After=network-online.target remote-fs.target nss-lookup.target
Wants=network-online.target

[Service]
Type=forking
PIDFile=/var/run/nginx.pid
ExecStartPre=/usr/sbin/nginx -t -c /etc/nginx/nginx.conf
ExecStart=/usr/sbin/nginx -c /etc/nginx/nginx.conf
ExecReload=/bin/kill -s HUP $MAINPID
ExecStop=/bin/kill -s TERM $MAINPID

[Install]
WantedBy=multi-user.target
```
- 모든 부분에 이상이 없는 경우 서비스 추가를 위해 상위와 같이 작성한 뒤 저장합니다.

```bash
$ systemctl enable nginx
$ systemctl start nginx
```
- 서비스 등록 명령어와 시작 명령어가 정상적으로 동작되는지 확인합니다.

### Nginx VirtualHost 설정 및 VTS 등록
```bash
$ vim /etc/nginx/conf.d/도메인명.conf
```
```bash
server {
     listen 80;
     server_name 도메인;
     root 웹루트;
     index index.html;
}
```
- `Nginx` 설정 파일에 자신의 도메인에 대한 `VirtualHost` 설정을 기입하고 파일을 저장합니다.

```bash
$ vim /etc/nginx/nginx.conf
```
```bash
http {
      vhost_traffic_status_zone;
      .... (중략)
      include /etc/nginx/conf.d/*.conf
}
```
- `Nginx` 설정 파일 상 `http{}` 구문 최상단에 `VTS` 관련 설정 값을 추가합니다.
- `VirtualHost` 설정을 ./conf.d/ 경로에 생성함에 따라 참조 대상을 추가하였습니다.  
  만약, 제 설정과 동일하게 설정 파일을 생성한 경우 최하단에 `include` 내용 추가합니다.

```bash
$ vim /etc/nginx/conf.d/도메인명.conf
```
```bash
server {
     listen 80;
     server_name 도메인;​
     vhost_traffic_status_display;
     vhost_traffic_status_display_format html;
}
```
- `Nginx` `VTS` 기능 사용 간 모니터링 페이지에 도메인을 지정 설정 후 저장합니다.

```bash
$ systemctl restart nginx
```
- 모든 설정이 완료된 경우 `Nginx`를 재기동 합니다.

### Nginx VTS 적용 페이지 접근 및 확인
 
![image](https://blog.false.kr/assets/image/Post/CentOS/CentOS-Nginx-VTS/1.png){: width="90%" height="90%"}{: .align-center}
- 테스트 진행 간 t1.false.kr로 접근할 수 있도록 설정하였습니다.

![image](https://blog.false.kr/assets/image/Post/CentOS/CentOS-Nginx-VTS/2.png){: width="90%" height="90%"}{: .align-center}
- 테스트 도메인 접근 후 VTS 모니터링 페이지인 vts.false.kr 사이트 접근 시 사진과 같습니다.

```bash
$ vim /etc/nginx/conf.d/도메인명.conf
```
```bash
server {
     listen 80;
     server_name 도메인;
     vhost_traffic_status_limit_traffic in:10K;
     # 들어오는 트래픽을 10KB로 제한
     vhost_traffic_status_limit_traffic out:10K;
     # 나가는 트래픽을 10KB로 제한
}
```
- 만약 테스트 도메인의 트래픽을 제한하고 싶은 경우 상위와 같이 설정을 추가하면 됩니다.
- 이에 대한 상세 설정 방법은 개발자이신 [vozlt님의 GitHub](https://github.com/vozlt/nginx-module-vts)을 참고 부탁드리겠습니다.

> **페이지 표기 사항 설명**  
>  
> |대제목|제목|내용|설명|
> |:---:|:---:|:---:|:---|
> |**Server main**|Host|-|호스트 명|
> ||Version|-|Nginx 버전|
> ||Uptime|-|Nginx VTS의 가동 시간|
> ||Connections|Active|활성 클라이언트의 수|
> |||Reading|읽기 클라이언트의 수|
> |||Writing|쓰기 클라이언트의 수|
> |||Waiting|대기 클라이언트의 수|
> ||Requests|Accepted|승인 클라이언트의 수|
> |||Handled|처리 클라이언트의 수|
> |||Total|클라이언트로 받은 요청 합계|
> |||Req/s|초당 처리 요청 수|
> ||Shared memory|name|공유 메모리 명
> |||maxSize|공유 메모리 최대 크기 제한|
> |||usedSize|공유 메모리 현재 크기|
> |||usedSize|공유 메모리 사용 노드 수|
> |**Server zones**|Zone|-|VirtualHost 설정 확인|
> ||Requests|Total|클라이언트로 받은 요청 합계|
> |||Req/s|초당 처리 요청 수|
> |||Time|요청에 대한 유지 시간|
> ||Responses|1xx|1xx 응답 코드 수|
> |||2xx|2xx 응답 코드 수|
> |||3xx|3xx 응답 코드 수|
> |||4xx|4xx 응답 코드 수|
> |||5xx|5xx 응답 코드 수|
> |||Total|전체 Response 수|
> ||Traffic|Sent|보낸 패킷 수|
> |||Rcvd|받은 패킷 수|
> |||Sent/s|초당 보내는 패킷 수|
> |||Rcvd/s|초당 받는 패킷 수|
> ||Cache|Miss|적중되지 못한 캐시 수|
> |||Bypass|우회된 캐시 수|
> |||Expried|만료된 캐시 수|
> |||Stale|오래된 캐시 수|
> |||Updating|업데이트된 캐시 수|
> |||Revalidated|유효성 재확인된 캐시 수|
> |||Hit|적중된 캐시 수|
> |||Scarce|부족한 캐시 수|
> |||Total|캐시의 총 합계|
> |**Update interval**|-|-|페이지 재갱신 시간|

---
  
긴 포스팅을 읽어주셔서 감사합니다! :)
