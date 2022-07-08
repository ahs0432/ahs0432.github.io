---
title:  "[CentOS] OpenVPN을 이용한 내부망 MySQL 접근 확인" 

categories:
  - CentOS
tags:
  - Server
  - CentOS
  - OpenVPN
  - OpenVPN Client
  - MySQL

toc: true
toc_sticky: true

date: 2019-03-11
last_modified_at: 2019-03-11
---

## 테스트 환경
### OpenVPN Server
- CentOS Linux release 7.0.1406 (Core)
- OpenVPN 2.4.6 x86_64-redhat-linux-gnu
- easy-rsa 3.0.3

### Database Server
- CentOS Linux release 7.0.1406 (Core)
- MySQL 5.7.24

### Client
- Eclipse 2019-03
- JAVA 1.8.0_211
- Tomcat 8.5
  
  

해당 포스팅은 `OpenVPN`으로 사전 구성이 완료되어 연결이 가능한 상황 하에 진행됩니다.  
만약 `OpenVPN Server`와 `Client`를 구축하는 단계부터 진행하길 원하시면 아래 포스팅 참고바랍니다.  
* [[CentOS] OpenVPN 서버 & 클라이언트 설정](https://blog.false.kr/centos/CentOS-OpenVPN-Server-Client-Setting/)

## 사전 준비
* 기본적으로 `Database Server`와 `OpenVPN Server`가 같은 내부망으로 연결됐다는 가정 하에 진행합니다.
* 내부망과 VPN 망은 서로 다른 대역을 사용합니다. (포스팅 기준 내부망: `172.27.0.0/16`, VPN: `10.0.8.0/24`)
* 현재 포스팅의 경우 `Client` &rarr; `VPN` &rarr; `MySQL` 순으로 통신을 시도하고 접속되는 구조입니다.

## Test Code 작성 및 접근 시도
### JAVA JSP 기준 Test Code 작성
```java
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="java.sql.Connection"%>
<%@page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset=UTF-8">
    <title>Test</title>
  </head>
  <body>
    <%
      Connection conn = null;
      
      try {
        Class.forName("com.mysql.jdbc.Driver");
        conn = DriverManager.getConnection("jdbc:mysql://[DB Server Private IP]:[Port]/[DB Name]", "[User]", "[Password]");
        %><p>DB 연결에 성공하였습니다!</p><%
      } catch(Exception e) {
        %><p>DB 연결에 실패하였습니다!</p><%
      }
    %>
  </body>
</html>
```
* 사진과 같이 JAVA JSP 기준으로 Test Code를 작성하여줍니다.
* [] 로 표기된 내용은 기입된 사항에 맞게 DB 정보를 입력합니다.
* 모든 정보를 정상적으로 입력한 경우 Tomcat을 기동 시켜줍니다.

### 페이지 접근을 통한 MySQL 통신 확인
* 아래 사진과 같이 `VPN` 연결을 진행하지 않고 Test Page 접속 시 DB 연결에 실패가 확인됩니다.
  
![image](https://blog.false.kr/assets/image/Post/CentOS/CentOS-OpenVPN-Private-Connect-MySQL/1.png){: width="70%" height="70%"}{: .align-center}

* 이 상태에서 `OpenVPN Client`를 실행하여 `OpenVPN Server`로 정상 연결되는지 우선 확인합니다.
  
![image](https://blog.false.kr/assets/image/Post/CentOS/CentOS-OpenVPN-Private-Connect-MySQL/2.png){: width="70%" height="70%"}{: .align-center}

* 정상적으로 `VPN`에 접근된 이후 Test Page에 접근할 경우 정상적으로 DB와의 통신이 확인됩니다.
  
![image](https://blog.false.kr/assets/image/Post/CentOS/CentOS-OpenVPN-Private-Connect-MySQL/3.png){: width="70%" height="70%"}{: .align-center}

---

위와 같은 과정을 통해 `OpenVPN` 설정을 통해 외부망에서 `OpenVPN Server`가  
위치한 `eth0` 인터페이스의 내부망 간 정상적인 통신이 가능한지 확인하였습니다.  
  
이전 포스팅 상 확인 가능하듯 `eth0`를 공용으로 사용할 수 있도록 설정한 이후  
`OpenVPN`의 망을 `eth0`를 통하도록 설정했기 때문에 위와 같은 동작을 보입니다.  
  
모든 구성에서 위와 같은 동작을 보이는 것은 아니오니 자신의 구성을 잘 파악하고  
위와 같은 구성을 통해 외부망에서 내부 App을 컨트롤 할 수 있는지 판단해야합니다.  
  
긴 포스팅을 읽어주셔서 감사합니다! :D
