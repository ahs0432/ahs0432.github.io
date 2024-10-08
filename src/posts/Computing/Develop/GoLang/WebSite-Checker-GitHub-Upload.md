---
title:  "[GoLang] WebSite Checker 소스 배포"

categories:
  - GoLang
tags:
  - WebSite
  - Monitor
  - Checker
  - Status
  - ChanceWC

date: 2022-08-28

editLink: false
lastUpdated: true
---

## GitHub Repository
- [Core](https://github.com/ahs0432/Chance-WC-Core)
- [Site](https://github.com/ahs0432/Chance-WC-Web-GoLang)

## 역할
- Core
    - Core의 역할은 crontab에 주기를 선택하여 등록하고 각 시점마다 실행되는 역할을 한다.
    - 여기서 사용자의 설정을 인지하고 그 설정에 따라 사이트를 검사하는 사이클을 실행한다.
    - 검사는 비동기로 실행되고 메일 수신자를 확인하여 알람 발생일 경우 메일로 발송한다.
    - 검사 시간은 Timeout 10초 기준, 약 180개 사이트 검사 시 720초정도 소요됐었다.

- Site
    - Core에서 검사된 데이터를 기반으로 웹 사이트를 표현해주는 역할을 수행하고 있다.
    - GoFiber 프레임워크를 기반으로 제작됐으나 나중에 REST API 형태로 변경할 생각이다.
    - 변경한 이후에는 Vue.js 등 요즘 많이 사용하는 프론트엔드 언어로 제작해볼 생각이다.

## 여담
회사에서 쓰는 PHP로 개발된 Web Site Monitor를 대체할까 해서 개인적으로 개발했다.  
하지만 GoLang에 대한 유지 보수 등으로 인해 회사에서 채택되지 못해서 배포하게 됐다.

연습 용도이기도 하고 GoLang을 배우는 입장에서 개발한거라 조금 꼬여있는 건 있지만,  
어느정도 함수나 파일을 구분해둬서 나름(?) 이해하는 데에는 어렵지 않을 것 같다.

## 앞으로의 계획
1. 코드에 대한 해석과 생각을 정리하는 포스팅을 작성
    - 내가 왜 이렇게 작성했는지 회고하면서 포스팅을 작성해볼 생각이다.
2. 미흡한 기능을 추가하거나 보완
    - 솔직히 더 생각해둔 기능이 있는데 구현되지 않은 것이 조금 존재한다.  
    (예를 들어 어떤 상태 코드(200, 300, 400, 500)를 갖는지에 따라 모니터링 구분 등)
3. REST API 기능을 하도록 서비스 GoLang을 이용한 추가 개발 진행
4. Vue.js 등의 기능을 이용하여 REST API를 연계하는 Site 개발 진행

~~(여기에 명시한 것을 바로바로 하고 싶지만 회사 업무 등으로 인해 하하..)~~

---

포스팅 끝까지 읽어주셔서 감사드리며 틀린 내용이 있다면 댓글 부탁드립니다. 😎