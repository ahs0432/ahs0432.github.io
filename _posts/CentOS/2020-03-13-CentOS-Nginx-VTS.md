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


---
  
긴 포스팅을 읽어주셔서 감사합니다! :D
