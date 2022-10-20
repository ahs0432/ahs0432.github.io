---
title:  "[CentOS] Java 여러 개 설치 방법" 

categories:
  - CentOS
tags:
  - Server
  - CentOS
  - OpenJDK
  - Java
  - Multiple
  - YUM
  - alternative

toc: true
toc_sticky: true

date: 2022-08-27
last_modified_at: 2022-08-27
---

## 🎇 테스트 환경
- CentOS Linux release 7.9.2009 (Core)
- OpenJDK 11.0.12
- OpenJDK 1.8.0_302

## 🤔 발생 상황
관리 중인 고객사에서 OpenJDK 버전을 두 개를 설치를 요청하면서 고민하게된 사항이다.

평소 고객 서비스 구축 간 YUM을 이용하여 Java를 설치할 때 두 개의 버전이 필요할 경우   
높은 버전을 기준으로 유지될 것이라고 판단하여 하나는 소스 컴파일 설치를 했었다.  

그렇기에 소스 컴파일로 설치된 버전은 다른 패키지에 비해서 관리에 까다로움이 있었다.

## 🔍 새로운 발견
놀랍게도 나의 개인 테스트 환경에서 OpenJDK 11 버전을 설치할 일이 있어 설치했었다.  
생각해보니 OpenJDK 8 버전이 사전에 설치된 상태였고 두 패키지가 모두 남아있었다.  
~~(포스팅을 작성하는 지금 이렇게 돌아보니 정말 우물 안 개구리가 따로 없다. 😅)~~

고객사에 편의도 있고 하다보니 이번에 설치하면서 이 방법을 이용해보기로 결정했다.  
중요한 건 기본 버전으로 인식하는 OpenJDK를 설정하는 방법이었는데 이걸 소개해본다.

## 🔧 설치 및 설정 과정

```bash
$ yum list *openjdk*
```
- 현재 내가 설치할 수 있는 OpenJDK 버전을 확인하여 설치를 준비한다.

```bash
$ yum install -y java-1.8.0-openjdk java-1.8.0-openjdk-devel java-11-openjdk java-11-openjdk-devel
```
- 나는 OpenJDK 1.8과 11 버전에 대한 설치가 필요했기에 두 버전을 설치하였다.

```bash
$ java -version
openjdk version "1.8.0_302"
OpenJDK Runtime Environment (build 1.8.0_302-b08)
OpenJDK 64-Bit Server VM (build 25.302-b08, mixed mode)
```
- 설치된 OpenJDK의 버전을 확인해보면 OpenJDK 1.8 버전이 기본 버전으로 인식되고 있다.

```bash
$ alternatives --config java

There are 2 programs which provide 'java'.

  Selection    Command
-----------------------------------------------
*+ 1           java-1.8.0-openjdk.x86_64 (/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.302.b08-0.el7_9.x86_64/jre/bin/java)
   2           java-11-openjdk.x86_64 (/usr/lib/jvm/java-11-openjdk-11.0.12.0.7-0.el7_9.x86_64/bin/java)


Enter to keep the current selection[+], or type selection number: 2
```
- 이렇게 동일 역할의 프로그램 중 기본 인식 값은 `alternatives`로 변경 가능하다.
- OpenJDK 1.8이 기본으로 설정된 상태니까 2를 입력하여 11로 변경되도록 했다.  
(시스템에 즉시 반영되오니 변경 전 동작되는 버전 등에 문제가 없는지 꼭 확인하자.)

```bash
$ java -version
openjdk version "11.0.12" 2021-07-20 LTS
OpenJDK Runtime Environment 18.9 (build 11.0.12+7-LTS)
OpenJDK 64-Bit Server VM 18.9 (build 11.0.12+7-LTS, mixed mode, sharing)
```
- `alternatives` 설정을 변경한 뒤 확인해보면 대상 버전이 조회되는 것이 확인된다.

---

정말 IT의 세계에는 모르는 것도, 그리고 배울 것도 굉장히 많다는 것을 또 느낀다.  
운영을 몇 년동안 했으면서도 여기저기서 막히는 것을 보면 개발은 또 어떨까 싶다..

그래도 공부하다 보면 언젠가 내가 원하는 위치에 원하는 직군을 가질 수 있겠지...?

끝까지 포스팅을 읽어주셔서 감사드리며, 틀린 내용이 있다면 댓글 부탁드립니다. 😎
