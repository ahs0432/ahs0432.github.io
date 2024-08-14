---
title:  "[CentOS] OpenVPN을 Client 간 통신 확인" 

categories:
  - CentOS
tags:
  - Server
  - CentOS
  - OpenVPN
  - OpenVPN Client

date: 2020-03-11

editLink: false
lastUpdated: true
---

::: info
해당 포스팅은 `OpenVPN`으로 사전 구성이 완료되어 연결이 가능한 상황 하에 진행됩니다.  
만약 `OpenVPN Server`와 `Client`를 구축하는 단계부터 진행하길 원하시면 아래 포스팅 참고바랍니다.  
* [[CentOS] OpenVPN 서버 & 클라이언트 설정](/posts/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Server-Client-Setting.html)
:::


## 테스트 환경
### OpenVPN Server
- CentOS Linux release 7.0.1406 (Core)
- OpenVPN 2.4.6 x86_64-redhat-linux-gnu
- easy-rsa 3.0.3

### Client 1
- Windows 10 64bit

### Client 2
- macOS 10.14 (Mojave)
- Intellij IDEA 2019.1.3
- JAVA 1.8.0_211
- Tomcat 8.5
  
## 사전 준비
* `OpenVPN Client`를 2개 구축하여 1번은 10.8.0.2, 2번은 10.8.0.3 VPN IP를 부여했습니다.
* `Client 2`에서 `Tomcat`을 기동하여 Test Page를 출력하므로 `Client 2`에 `Tomcat`을 구축합니다.


## Test Code 작성 및 접근 시도
### HTML 기준 Test Code 작성
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Client2</title>
  </head>
  <body>
    Client2 웹 페이지에 연결됐습니다!
  </body>
</html>
```
* `Client 2`에서 `Client 1`에 보여주게될 Test Page Code입니다.
* 특별한 기능을 필요로 하는 것이 아니기 때문에 `HTML`로 간단하게 작성합니다.

### 페이지 접근을 통한 Client to Client 통신 확인
![](/assets/image/Post/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Client-to-Client/1.png =90%x90%)
* 두 `Client` 모두 `VPN`을 접속하지 않은 상태에서 상대 IP 입력 시 접근되지 않습니다.
  
![](/assets/image/Post/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Client-to-Client/2.png =90%x90%)
* `Windows OS(Client 1)`의 `VPN` 연결을 진행합니다.
  
![](/assets/image/Post/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Client-to-Client/3.png =90%x90%)
* 이어서 `macOS (Client 2)`의 `VPN` 연결을 진행합니다.

  
![](/assets/image/Post/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Client-to-Client/4.png =90%x90%)
* 정상적으로 `VPN`에 연결된 경우 `Client 1` &rarr; `Client 2` 통신 시도 시 사진와 같이 접근됩니다.

---

`OpenVPN`에서 동작하는 대역이 마치 하나의 사설망처럼 동작된다는 것을 보여주기 위한 포스팅입니다.  
혹시나 `VPN`을 구축한다거나 `OpenVPN`을 활용하여 사설망 구축 시 참고 부탁드립니다!  
  
긴 포스팅을 읽어주셔서 감사합니다! :)
