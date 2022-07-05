---
title:  "[CentOS] OpenVPN 서버 & 클라이언트 설정" 

categories:
  - CentOS
tags:
  - Server
  - CentOS
  - OpenVPN

toc: true
toc_sticky: true

date: 2019-01-09
last_modified_at: 2019-01-09
---


## 테스트 환경
- CentOS Linux release 7.0.1406 (Core)
- OpenVPN 2.4.6 x86_64-redhat-linux-gnu
- easy-rsa 3.0.3

## 설치 및 설정 과정

### CentOS yum 업데이트 및 버전에 맞는 repo 설치
```bash
$ yum update –y
$ yum clean all
$ yum install –y epel-release
$ yum update –y
```
* 위 과정을 통해 OpenVPN을 설치할 환경을 구성 합니다.

### 패키지 설치 진행
```bash
$ yum -y install ntp openvpn easy-rsa zip
```
* OpenVPN 설치 진행 간 필요한 패키지 파일을 설치합니다.

### ntpd 설정
```bash
$ timedatectl list-timezones
```
* 자신이 필요로 하는 시간대역이 존재하는지 확인합니다.  

```bash
$ timedatectl set-timezone Asia/Seoul
$ systemctl enable ntpd
$ systemctl start ntpd
```
* 원하는 시간대가 존재할 경우 시간대역을 지정 후 ntpd를 자동으로 재기동되도록 등록 및 실행합니다.


### OpenVPN Server 관련 키 생성
```bash
$ mkdir /etc/openvpn/easy-rsa
$ cp -r /usr/share/easy-rsa/3/* /etc/openvpn/easy-rsa
```
* openvpn 디렉터리 내 easy-rsa 디렉터리를 만들어 패키지 설치 간 생성된 easy-rsa의 share 파일을 복사합니다.
* 여기서 easy-rsa가 생성하는 파일은 pki/ 디렉터리에 기록됩니다. 현재와 동일 설정인 경우 /etc/openvpn/easy-rsa/pki 에 기록됩니다.  

```bash
$ cd /etc/openvpn/easy-rsa
$ ./easyrsa init-pki
```
* 대상 경로로 이동하고 easyrsa의 pki를 초기화하여 CA 및 다른 요청을 사용할 수 있는 상태로 만들어줍니다.  

```bash
$ ./easyrsa build-ca
```
* CA 패스워드와 CA 명을 기입하여 CA를 생성하여줍니다.  

```bash
$ ./easyrsa gen-req [서버명] nopass
```
* `[서버명]`에 자신이 원하는 `[서버명]`으로 변경 후 Enter를 눌러 진행합니다.
* 해당 명령을 통해 파일을 유효하게 만드는 파일을 몇 가지가 생성됩니다.  

```bash
$ ./easyrsa sign-req server [서버명]
```
* 인증서에 서명을 하기 위해 명령어 입력 후 yes로 동의하고 ca의 패스워드를 입력하여 완료해줍니다.  

```bash
$ ./easyrsa gen-dh
```
* Diffle-Hellman 방식의 보안 키를 만들어줍니다.
* (해당 작업은 다른 작업에 비해 많은 시간이 소요됩니다.)  

```bash
$ openvpn --genkey --secret /etc/openvpn/easy-rsa/pki/ta.key
```
* 서버에 관련된 마지막 키인 ta.key를 생성해줍니다.  

### OpenVPN Server 설정 변경
```bash
$ cp /usr/share/doc/openvpn-2.4.6/sample/sample-config-files/server.conf /etc/openvpn
$ vi /etc/openvpn/server.conf
```
* 서버 설정이 담긴 설정(.conf) 파일을 복사하여 수정하기 위해 열어줍니다.  

```bash
ca ca.crt
=> ca /etc/openvpn/easy-rsa/pki/ca.crt

cert server.crt
=> cert /etc/openvpn/easy-rsa/pki/issued/[서버명].crt

key server.key
=> key /etc/openvpn/easy-rsa/pki/private/[서버명].key

dh dh2048.pem
=> dh /etc/openvpn/easy-rsa/pki/dh.pem

tls-auth ta.key 0
=> tls-auth /etc/openvpn/easy-rsa/pki/ta.key 0

;push "redirect-gateway def bypass-dhcp"
=> push "redirect-gateway def bypass-dhcp"

;push "dhcp-option DNS 208.67.220.222"
=> push "dhcp-option DNS 8.8.8.8"

;push "dhcp-option DNS 208.67.220.220"
=> push "dhcp-option DNS 8.8.4.4"

;user nobody
=> user nobody

;group nobody
=> group nobody

;topology subnet
=> topology subnet
```
* 위에 명시된 것과 같이 내용을 변경 후 :wq로 저장 후 파일 수정을 종료합니다.

### 방화벽 설정
```bash
$ firewall-cmd --get-active-zones
$ firewall-cmd --zone=public --change-interface=eth0
```
* 만약 첫번째 명령어를 사용하였을 때 출력이 없다면 아래 명령어를 사용하여 eth0를 공용 네트워크 카드로 변경합니다.
* 그리고 출력을 확인하여 정상적으로 eth0가 출력되는지 확인합니다.  

```bash
$ firewall-cmd --zone=public --add-service openvpn
$ firewall-cmd --zone=public --add-service openvpn --permanent
$ firewall-cmd --add-masquerade
$ firewall-cmd --add-masquerade --permanent
$ firewall-cmd --direct --passthrough ipv4 -t nat -A POSTROUTING -s 10.8.0.0/24 -o eth0 -j MASQUERADE
$ firewall-cmd --permanent --direct --passthrough ipv4 -t nat -A POSTROUTING -s 10.8.0.0/24 -o eth0 -j MASQUERADE
$ firewall-cmd --reload
```
* OpenVPN이 사용하는 포트를 개방하고 NAT를 활성화합니다.  

```bash
$ vi /etc/sysctl.conf
net.ipv4.ip_forward = 1 #Added
```
* sysctl.conf 파일을 열고 `net.ipv4.ip_forward = 1` 행을 추가하고 커널에서 IPv4 트래픽을 전달할 수 있도록 합니다.  

```bash
$ systemctl restart network.service
$ systemctl enable openvpn@server.service
$ systemctl start openvpn@server.service
```
* 앞에서 적용한 설정을 반영하기 위해 네트워크를 재시작 시켜주고 openvpn@server.service를 자동 재기동되도록 등록합니다.

### OpenVPN Client 설정
```bash
$ cd /etc/openvpn/easy-rsa
$ ./easyrsa gen-req 클라이언트명
```
* 클라이언트에 대한 인증키를 생성해줍니다.  

```bash
$ ./easyrsa sign-req client 클라이언트명
```
* 해당 인증서에 서명을 하기 위해 명령을 입력 후 yes로 동의하고 이전에 입력한 ca의 패스워드를 입력하여 완료합니다.  

```bash
$ cp /usr/share/doc/openvpn-2.4.6/sample/sample-config-files/client.conf /etc/openvpn/client.conf
$ vi /etc/openvpn/client.conf
```
* 클라이언트 설정을 위해 샘플로 제공되는 conf 파일을 복사하여 수정합니다.

### OpenVPN Client 설정 변경
```bash
remote my-server-1 1194
=> remote [현재 서버 IP] 1194

cert client.crt
=> cert [클라이언트명].crt

key client.key
=> key 클라이언트명.key
```
* 위와 같이 설정을 모두 변경하였다면 :wq로 저장 후 파일 수정을 종료합니다.

### OpenVPN Client 파일 압축 후 이동
```bash
$ mkdir -p /etc/openvpn/client/[클라이언트명]
$ cp /etc/openvpn/easy-rsa/pki/private/[클라이언트명].key /etc/openvpn/client/[클라이언트명]
$ cp /etc/openvpn/easy-rsa/pki/issued/[클라이언트명].crt /etc/openvpn/client/[클라이언트명]
$ cp /etc/openvpn/easy-rsa/pki/ca.crt /etc/openvpn/client/[클라이언트명]
$ cp /etc/openvpn/easy-rsa/pki/ta.key /etc/openvpn/client/[클라이언트명]
$ cp /etc/openvpn/client.conf /etc/openvpn/client/[클라이언트명]/[클라이언트명].ovpn
$ cd /etc/openvpn/client/[클라이언트명]
$ zip [클라이언트명].zip *
```
* 패키지 설정 간 zip을 설치하였기 때문에 zip을 이용하였습니다.
* 압축된 파일을 FTP나 SFTP 등을 이용하여 사용하고자 하는 PC로 옮기면 됩니다.

## OS별 OpenVPN 접속 방법
### Windows
* OpenVPN 프로그램 중 GUI가 지원되는 버전으로 설치합니다.
	* OpenVPN Page : <https://openvpn.net/community-downloads/>
* `C:\Program Files\OpenVPN\config` 폴더 또는 `[OpenVPN 설치 위치]\config` 폴더로 VPN 설정 파일을 옮깁니다.
* OpenVPN GUI를 실행시켜 자신의 패스워드를 입력하고 확인을 눌러 접속하면 됩니다.

### macOS
* macOS 용에서 사용하는 Tunnelblick을 설치합니다.
	* Tunnelblick : <https://tunnelblick.net/downloads.html>
* `~/Library/Application Support/Tunnelblick/Configurations` 경로로 옮깁니다.
* 파일 설정 교체를 위해 .ovpn 파일을 열고 자신의 mac의 계정, 패스워드를 입력합니다.
* .ovpn 파일이 변환된 경우 Tunnelblick을 실행 후 Client 패스워드를 입력하고 접속합니다.

긴 포스팅을 읽어주셔서 감사합니다! :D
