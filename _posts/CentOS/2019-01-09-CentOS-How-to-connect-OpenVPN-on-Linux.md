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
__https://blog.false.kr/centos/CentOS-OpenVPN-Server-Client-Setting/__

## 설치 및 접속 과정
### CentOS yum 업데이트 및 버전에 맞는 repo 설치
```bash
$ yum update –y
$ yum clean all
$ yum install –y epel-release
$ yum update –y
```
* 위 과정을 통해 OpenVPN을 설치할 환경을 구성합니다.

