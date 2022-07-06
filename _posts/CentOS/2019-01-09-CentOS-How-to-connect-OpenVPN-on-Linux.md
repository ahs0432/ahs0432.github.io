---
title:  "[CentOS] OpenVPN 연결 방법 - Linux 환경" 

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
  

해당 포스팅은 `OpenVPN`으로 사전 구성이 완료되어 연결이 가능한 상황 하에 진행됩니다.  
만약 `OpenVPN Server`와 `Client`를 구축하는 단계부터 진행하길 원하시면 아래 포스팅 참고바랍니다.  
* [[CentOS] OpenVPN 서버 & 클라이언트 설정](https://blog.false.kr/centos/CentOS-OpenVPN-Server-Client-Setting/)

## 설치 및 접속 과정
### CentOS yum 업데이트 및 버전에 맞는 repo 설치
```bash
$ yum update –y
$ yum clean all
$ yum install –y epel-release
$ yum update –y
```
* 위 과정을 통해 `OpenVPN`을 설치할 환경을 구성합니다.

### 패키지 설치 진행
```bash
$ yum install -y openvpn
```
* Linux에서 접근 간 사용을 위해 `OpenVPN` 패키지를 설치합니다.

### OpenVPN Client 파일(.ovpn) 실행
자신이 접근하길 원하는 `OpenVPN Server`에서 추출된 `Client` 파일(.ovpn)을 원하는 위치로 옮긴 후 진행합니다.

```bash
$ cd /[OpenVPN Client 파일 경로]
$ openvpn --config [Client명].ovpn
Enter Private Key Password: [Client 패스워드 입력]
```
* `OpenVPN Client` 파일(.ovpn)이 위치한 경로로 이동하여 대상 Client를 실행합니다.
* 정상적으로 실행된 경우 대상 `Client`의 패스워드를 확인하고 입력하여 접근을 진행합니다.

```bash
$ ip addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 02:00:44:f1:01:cc brd ff:ff:ff:ff:ff:ff
    inet 172.27.0.140/16 brd 172.27.255.255 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::44ff:fef1:1cc/64 scope link 
       valid_lft forever preferred_lft forever
3: tun0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UNKNOWN group default qlen 1000
    link/none
    inet 10.8.0.2/24 brd 10.8.0.255 scope global tun0
       valid_lft forever preferred_lft forever
    inet6 fe80::cd90:50c0:caf1:bdb/64 scope link flags 800
       valid_lft forever preferred_lft forever
```
* 접근을 백그라운드로 진행하지 않았기 때문에 새로운 Connetion을 맺어 IP 정보를 확인합니다.
* 정상적으로 연결될 경우 `OpenVPN Server`의 정보에 맞춰 `tun` 또는 `tap` 명칭의 드라이브가 감지됩니다.

긴 포스팅을 읽어주셔서 감사합니다! :D
