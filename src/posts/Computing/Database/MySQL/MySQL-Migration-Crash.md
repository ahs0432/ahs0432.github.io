---
title:  "[MySQL] MySQL 버전 변경 간 충돌 오류 해결"

categories:
  - MySQL
tags:
  - MySQL
  - Database
  - CentOS
  - Upgrade
  - Migration

date: 2022-08-08

editLink: false
lastUpdated: true
---

## 테스트 환경
- CentOS 5.8 / MySQL 5.1
- CentOS 7.6 / MySQL 5.5

## 발생 상황
- 2021년 사이트 이전, 업그레이드 작업 진행 간 MySQL을 5.1 &rarr; 5.5로 변경했다.  
  (아무래도 기존 사용하던 버전이 너무 낮다보니까 거쳐가는 형태로 5.5를 선정했다.)
- Dump 파일로 복원하였으나 일부 Database에 접근 및 쿼리 수행 간 오류가 발생됐다.
- 오류는 `The table is probably corrupted.` 버전 간 차이로 인한 충돌로 볼 수 있다.

## 해결 방법
```bash
$ mysql_upgrade -uroot -p --force
Enter password: # 패스워드 입력
```
- MySQL에서 실행 가능한 Upgrade를 강제로 수행하여 이슈를 해소하였다.
- 이슈 해소 과정에서 DB 충돌로 인해 문제가 되는 경우도 있기에 테스트는 필수!!

---

끝까지 포스팅을 읽어주셔서 감사합니다.