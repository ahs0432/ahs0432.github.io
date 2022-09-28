---
title:  "[MySQL] MySQL Procedure 검색 및 확인"

categories:
  - MySQL
tags:
  - Database
  - Procedure
  - show

toc: true
toc_sticky: true

date: 2022-09-28
last_modified_at: 2022-09-28
---

## 🎇 테스트 환경
- MySQL 5.7.39

## 🤔 발생 상황 및 사용 방안
- 사용하는 기능 중 일부가 문제가 발생되고 있다고 하여 소스 코드 일부를 확인하였다.  
확인 시 기존 SELECT 쿼리는 주석 처리된 상태로 Call로 Procedure를 호출하고 있었다.
- 이러한 경우 MySQL 전체 Procedure 및 Database를 검색하는 방법을 작성해보고자 한다.

## 🔧 진행 방법
Procedure를 검색하는 방법은 그렇게 어렵지 않고 상세 내용까지 확인할 수 있다.

```bash
$ mysql -u root -p
Password: #패스워드 입력
```
- 우선 MySQL에 로그인 가능한 계정을 이용하여 MySQL에 연결한다.

```sql
> SHOW PROCEDURE STATUS\G;
*************************** 1. row ***************************
                  Db: test
                Name: sp1
                Type: PROCEDURE
             Definer: testuser@localhost
            Modified: 2018-08-08 13:54:11
             Created: 2018-08-08 13:54:11
       Security_type: DEFINER
             Comment:
character_set_client: utf8mb4
collation_connection: utf8mb4_0900_ai_ci
  Database Collation: utf8mb4_0900_ai_ci

*************************** 2. row ***************************
                  Db: test2
                Name: sp1
                Type: PROCEDURE
             Definer: testuser@localhost
            Modified: 2018-08-08 13:54:11
             Created: 2018-08-08 13:54:11
       Security_type: DEFINER
             Comment:
character_set_client: utf8mb4
collation_connection: utf8mb4_0900_ai_ci
  Database Collation: utf8mb4_0900_ai_ci
```
- `SHOW PROCEDURE STATUS` 명령어 사용 시 전체 Procedure를 확인할 수 있다.

```sql
> SHOW PROCEDURE STATUS LIKE 'test'\G;
*************************** 1. row ***************************
                  Db: test
                Name: sp1
                Type: PROCEDURE
             Definer: testuser@localhost
            Modified: 2018-08-08 13:54:11
             Created: 2018-08-08 13:54:11
       Security_type: DEFINER
             Comment:
character_set_client: utf8mb4
collation_connection: utf8mb4_0900_ai_ci
  Database Collation: utf8mb4_0900_ai_ci
```
- 특정 Procedure만 검색하고 싶은 경우 `LIKE <Procedure 명>` 구문을 추가한다.

```sql
> SHOW CREATE PROCEDURE test\G;
*************************** 1. row ***************************
           Procedure: test
            sql_mode: ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,
                      NO_ZERO_IN_DATE,NO_ZERO_DATE,
                      ERROR_FOR_DIVISION_BY_ZERO,
                      NO_ENGINE_SUBSTITUTION
    Create Procedure: CREATE DEFINER=`testuser`@`localhost`
                      PROCEDURE `test`(IN country CHAR(3), OUT cities INT)
                      BEGIN
                        SELECT COUNT(*) INTO cities FROM world.city
                        WHERE CountryCode = country;
                      END
character_set_client: utf8mb4
collation_connection: utf8mb4_0900_ai_ci
  Database Collation: utf8mb4_0900_ai_ci
```
- `SHOW CREATE PROCEDURE <Procedure 명>` 명령어 사용 시 상세 정보 확인이 가능하다.

---

추석 기간부터 코로나19에 감염 되면서 몸 상태도 안 좋고, 최근 업무가 또 많았다..  
포스팅이 뜸 해졌었는데 며칠 전 Procedure 관련 이슈가 생기면서 포스팅을 작성해본다.

최근 마스크 규제가 풀렸다고 하는데 그대로 다들 조심하고 건강한 하루를 보내면 좋겠다.

끝까지 포스팅을 읽어주셔서 감사드리며, 틀린 내용이 있다면 댓글 부탁드립니다. 😎