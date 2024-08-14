---
title:  "[MariaDB] can't create test file lower-test 오류 해결"

categories:
  - MySQL
tags:
  - MariaDB
  - Database
  - Error
  - ProtectHome

date: 2022-08-25

editLink: false
lastUpdated: true
---

## 🎇 테스트 환경
- MariaDB 10.5.17

## 🤔 발생 상황
- MariaDB 경로를 /var/lib/mysql에서 /home/mysql/data로 변경하는 과정에서 오류가 발생됐다.  
- 오류는 `[Warning] can't create test file /[경로]/[hostname].lower-test`로 확인됐다.

## 🔍 오류 분석
- 오류 내용으로 보았을 때 변경한 경로에 파일을 생성할 수 없어 오류가 발생됐다.
- 권한이나 소유자 부분을 살폈는데 문제가 없었고 아래와 같은 내용이 추가 확인됐다.
  - MariaDB 업데이트에 따라 아래 경로에 대한 보호 옵션(ProtectHome)이 만들어졌다.
    - /root
    - /home
    - /run/user
- 이에 따라 대상 디렉토리로 경로를 변경하게 되는 경우 오류가 발생되는 것으로 확인된다.

## 🔧 오류 해결
오류 해결은 생각보다 굉장히 간단하다 systemd에 등록된 service 파일을 수정하면 된다.

```bash
$ vim /usr/lib/systemd/system/mariadb.service

# Prevent accessing /home, /root and /run/user
#ProtectHome=true
ProtectHome=false
```
- `mariadb.service` 파일의 ProtectHome 옵션을 `true` &rarr; `false`로 변경한다.

```bash
$ systemctl daemon-reload
```
- systemd에 반영된 service 설정 파일을 동기화한다.

```bash
$ systemctl restart mariadb
```
- MariaDB를 재시작하면 정상적으로 동작되는 것이 확인된다.

---

평소 몇 번 겪었던 이슈인데 구축 간 10분 정도 멈칫하게 됐다.  
앞으로는 이런 일이 없도록.. 다른 분들도 참고하도록 포스팅으로 남겨본다.

끝까지 포스팅을 읽어주셔서 감사드리며, 틀린 내용이 있다면 댓글 부탁드립니다. 😎