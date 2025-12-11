---
title:  "[Azure] Microsoft Azure Developer Associate 취득 후기"

categories:
  - Certified
tags:
  - Microsoft
  - Microsoft Azure
  - MS
  - AZ-204
  - Azure Developer Associate
  - Developer Associate
  - Developer
  - Associate
  - 중급
  - 개발자
  - 개발
  - 취득 후기
  - 취득

date: 2024-08-18

editLink: false
lastUpdated: true
order: 903
---

## 취득 배경
취득 배경은 [[Personal] Microsoft Azure Fundamentals 취득 후기](/posts/Personal/Certified/Azure-Fundamentals-certified.html)와 동일하다.  

2024년 7월 재직 중인 회사에서 `Microsoft Azure` 서비스를 위한 준비를 위해  
사내 인원에 자격증 취득을 권장하는 Promotion을 진행하게 되어 취득을 준비하게 됐다.

필자는 `Infra` 관련 자격을 모두 취득한 이후인 8월 초중순 경 자격을 취득하게 됐다.

## Microsoft Azure Developer Associate 자격
`Microsoft Azure` 개발자로 인정받기 위한 관리를 위한 자격 중 중급 자격증이다.

해당 자격은 `Azure` 환경에서 요구사항 수집, 설계, 개발, 배포 등의 전문 지식을 평가한다.  
`Azure Administrator Associate` 자격과 `Infra`와 `Develop`의 차이로 구분된다.

마찬가지로 코드가 존재하고 `AZ-204`라는 명칭으로 관리되고 있으니 참고하도록 하자.

### 자격 범위
자격 취득을 위한 범위는 아래와 같이 `Microsoft`에서 공식적으로 제공 중인 [문서](https://learn.microsoft.com/ko-kr/credentials/certifications/resources/study-guides/az-204)에 나와있다.

- Azure 컴퓨팅 솔루션 개발(25~30%)
- Azure 스토리지 개발(15~20%)
- Azure 보안 구현(15–20%)
- Azure 솔루션 모니터링, 문제 해결 및 최적화(10–15%)
- Azure 서비스 및 타사 서비스에 연결 및 사용(20–25%)

### 문제 수준
문제는 `Azure`에서 제공 중인 `Infra`의 기초와 `Develop` 솔루션에 대해 평가한다.  
`Infra`에 기존적인 이해와 `PaaS` 형식의 상품 이해가 없다면 취득에는 어려움이 있었다.

또한 `C#`과 `.Net` 기준으로 출제된 일부 언어로 인해 언어적인 부분도 이해를 하고 있어야 한다.  
예를 들어 `SDK`의 제공 함수 명칭을 물어보는 문제라던가 이런 상세적인 요소를 물어보기도 한다.

개인적으로 현재 클라우드 엔지니어로 활동하고 있기 때문에 난이도는 아래와 같이 정리되는 듯 하다.  
`AZ-900` <<< `AZ-104` <= `AZ-305` < `AZ-204` 함수까지 상세적으로 물어보니 부담이 좀 있었다.

그리고 하나 더.. 이건 경험적인 것인데, 필자는 이번 시험을 영문으로 치뤘는데 이건 후술하겠다.

### 문항 종류
문항은 총 60문항 내외로 출제되는 듯하고, 필자의 경우 54문항이 출제되어 문제를 풀었다.

출제되는 문제는 이전 `AZ-104`와 구성 자체는 동일하기 때문에 [이전 게시물](/posts/Personal/Certified/Azure-Administrator-Associate-certified.html)을 참고하는게 좋다.

- 사례 평가 (평가 내 아래와 형식의 문제 출제)
  - 사례 평가는 처음 출제되고 이후 하나 더 출제됐다. 총 2개의 사례를 해석했다.
- 4지 선다 및 Multiple Choice
- Drop Down
  - 순서 배열
  - 필요 요소 선정
- O/X 문제
- 연속 문제
  - 주어진 상황에서 `Solution`이 유효한지 평가
  - 동일 Case에 대해 3~5문제 정도가 출제되어 평가

### 재응시 정책과 합격점
다른 자격과 마찬가지로 재응시를 위한 정책을 제공하고 있는 상태다.

- 1회 탈락: 24시간
- 2회 탈락: 14일
- 12개월 내 동일 시험 5회 이상 응시 불가

그리고 합격점은 `1,000점` 만점에서 `700점` 이상의 점수를 취득하면 합격하게 된다.

## 공부 방법
필자는 `AZ-104`와 마찬가지로 문서적으로만 서비스를 접하고 공부를 하게 됐다.  
실습은 제공되는 것이 일부 있었지만 아무래도 무료로 제공되는 요소는 없었다.

별도로 무료 크레딧 사용 계획을 하고 있어서 실습보단 눈으로 코드를 보고 익혔다.

실습이 가능한 경우 실습을 하는게 무조건 이득이고 이부분은 참고해서 준비하도록 하자.

### Microsoft Learn 페이지
이번에도 마찬가지로 `Microsoft`에서 제공하는 [`Learn`](https://learn.microsoft.com/ko-kr/credentials/certifications/azure-developer/?practice-assessment-type=certification) 페이지를 이용하여 공부하게 됐다.

`시험 준비` 과정에서 `과정 학습`을 통해 자격 관련 문서를 통해 관련 내용 습득이 가능하다.  

![](/assets/image/Post/Personal/Certified/Azure-Developer-Associate-certified/1.png "과정 학습" =90%x90%)

다음은 `시험 실습`으로 제공되고 있는 `지식 평가` 시스템을 이용해서 예제 문제를 풀어볼 수 있다.  

![](/assets/image/Post/Personal/Certified/Azure-Developer-Associate-certified/2.png "시험 실습" =90%x90%)

### Dump 페이지 이용
마찬가지로 추천 하는 방법은 아니지만 자격 취득을 위해서라면 해당 방법이 빠른 방법이긴 하다.  
필자는 특히 개발적인 경험을 접하기 어렵기에 이부분으로 문제의 요지를 익히고 코드도 익혔다.

마찬가지로 이번에도 추천하는 Dump 페이지는 [ExamTopics](https://www.examtopics.com/exams/microsoft/az-305/view/)이니 참고하여 공부하도록 하자.

### 공부 커리큘럼
- 총합 공부에 소요된 시간: `약 23시간`
  - 시험 예약: 2024.08.11(일) 22:15 (2024.08.09(금) 20:06 예약)
  - 시험 입실: 2024.08.11(일) 21:45
- 공부 방법
  - 2024.08.06(화) - 총 1시간 내외
    - `Microsoft Learn` 페이지 `과정 학습` (1시간 내외)
      - AZ-204: Azure App Service 웹앱 구현
  - 2024.08.07(수) - 총 1시간 내외
    - `Microsoft Learn` 페이지 `과정 학습` (1시간 내외)
      - AZ-204: Azure App Service 웹앱 구현
      - AZ-204: Azure Functions 구현
  - 2024.08.08(목) - 총 3시간 내외
    - `Microsoft Learn` 페이지에서 제공되는 `지식 평가`를 이용한 자가 수준 평가
      - 필자의 경우 Try 과정에서 오답이 많아 지속적으로 100%를 만들기 위해 노력했다.
      - 틀리면 아예 문제를 초기화하여 처음부터 다시 푸는 형식으로 100%의 늪을 만들었다.
  - 2024.08.09(금) - 총 4시간 내외
    - `Microsoft Learn` 페이지 `과정 학습` (4시간 내외)
      - AZ-204: Blob Storage를 사용하는 솔루션 개발
      - AZ-204: Azure Cosmos DB를 사용하는 솔루션 개발
      - AZ-204: 컨테이너화된 솔루션 구현
      - AZ-204: 사용자 인증 및 권한 부여 구현
  - 2024.08.03(토) - 총 6시간 내외
    - `Microsoft Learn` 페이지 `과정 학습` (3시간 내외)
      - AZ-204: 사용자 인증 및 권한 부여 구현
      - AZ-204: 안전한 Azure 솔루션 구현
      - AZ-204: API Management 구현
      - AZ-204: 이벤트 기반 솔루션 개발
      - AZ-204: 메시지 기반 솔루션 개발
      - AZ-204: Application Insights를 사용하여 솔루션 문제 해결
      - AZ-204: 솔루션에 대한 캐싱 구현
    - `ExamTopics` 내 150문제 풀이 (3시간 내외)
  - 2024.08.04(일) - 총 8시간 내외
    - `ExamTopics` 내 247문제 풀이 (4시간 내외)
    - `ExamTopics` 내 200문제 재풀이 (4시간 내외)

## 시험 방식
시험 방식은 다른 자격과 차이나지 않기에 [기존 포스팅](/posts/Personal/Certified/Azure-Fundamentals-certified.html)을 참고 부탁한다.

## 결과
시험 결과는 `842점`이라는 성적으로 시험을 합격할 수 있었다.

시험 과정은 굉장히 험난했는데, 나의 실수이긴 하지만 영문으로 시험을 응시해버린 것이다.  

이로 인해 감독관에게 한국인임을 어필하고 한국어 시험으로 변경이 가능한지 물어봤었는데...  
감독관이 조치를 해주겠다고 다시 접속 시키는 등의 조치를 했지만 한국어로 변경은 불가했다.

필자는 `Dump` 문제 풀이 간 번역을 이용하여 문제를 풀었고 영문 문제를 따로 보지 않았다.  
그렇다보니 영문을 읽고 즉시즉시 해석해가면서 케이스를 풀어보고 하는 형식으로 문제를 풀었다.

막판 제출 전에는 거의 자포자기하고 준비를 많이 하지 않은 나를 자책하기도 하며 제출을 하게됐다.  
그런데 시험 결과는 합격이 나와서 당황하기도 하면서 기쁨도 굉장히 컸던 시험이었다는 생각이 든다.

혹시나 시험을 본다면 메일로 수신되는 내용 중 언어가 한국어로 잘 응시됐는지 여부를 확인하도록 하자.

![](/assets/image/Post/Personal/Certified/Azure-Solutions-Architect-Expert-certified/3.png "자격 발급" =90%x90%)

- - -

해당 포스팅을 읽고 자격에 도움이 되셨으면 좋겠습니다.  
끝까지 포스팅을 읽어주셔서 감사드립니다. 😎