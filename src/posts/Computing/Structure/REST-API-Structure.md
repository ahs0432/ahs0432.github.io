---
title:  "[Network] REST API란? (RESTful API)"

categories:
  - Network
tags:
  - Network
  - REST API
  - API
  - RESTful
  - Structure

date: 2022-08-15

editLink: false
lastUpdated: true
---
::: info
기존 만들었던 `Site Monitor` 시스템 GitHub Public 전환을 위해 이것저것 고민 중이다.  
 
원래는 원하는 테마를 HTML로 만들고 안쪽에 데이터를 뿌려주는 부분만 맞춰주면 됐지만,  
이런 형태도 범용성이나 편의성 부분이 떨어진다고 판단되어 API 형태를 적용하고자 했다.  
 
요새 표준으로 적용되고 있는 REST API를 적용해볼 좋은 기회라고 생각되어 공부를 시작했고  
아직 적용 전이지만 현재까지 공부한 REST API에 대한 지식을 정리하기 위해 포스팅을 작성한다.
:::

# 📖 REST 란?
REST API는 REST 아키텍처 스타일의 디자인을 준수하는 API이므로 REST부터 알아본다.

## 📝 REST의 탄생
HTTP의 주요 저자 중 한 명인 Roy Fielding의 박사 학위 논문에서 최초 소개됐다고 한다.  

Roy Fielding은 당시 HTTP의 설계 우수성에 비해 제대로 사용되지 못하는 모습을 보고서  
이에 안타까움을 느껴 HTTP의 장점을 활용할 수 있는 아키텍처로 REST를 발표했다고 한다.

## 📑 REST의 정의
- **RE**presentational **S**tate **T**ransfer의 약자로 소프트웨어 아키텍처의 형태이다.
- **자원**을 이름으로 구분하여 자원의 **상태**(정보)를 주고 받는 모든 것을 의미하고 있다.
- HTTP를 그대로 이용하기에 Web의 장점을 최대한 활용이 가능한 스타일이다.

## 🔧 REST의 구성 요소
1. 자원(Resource) - URI
- 모든 자원에는 고유한 ID가 부여되고 이 자원은 Server에 존재한다.
- 자원을 구별하는 ID는 `/users/1`과 같은 HTTP URI로 나타내게 된다.
2. 행위(Verb) - HTTP Method
- HTTP에서 지원하고 있는 Method를 사용하여 행위를 나타낸다.
- 기본적으로는 `GET`, `POST`, `PUT`, `DELETE`와 같은 Method를 사용하고 있다.
3. 표현(Representations) - HTTP Message Pay Load
- Client가 상태(정보)에 대한 조작을 요청하면 Server는 적절한 응답을 보낸다.
- 이때 REST에서 상태(정보)는 `JSON`, `XML`, `TEXT`, `RSS` 등의 형태로 표현하게 된다.

## 🧾 REST 디자인 원칙
1. Uniform Interface (인터페이스 일관성)
  - HTTP 표준에 따른다면 어떠한 환경에서도 사용해도 동일한 표현이 가능해야한다.
  - URI로 지정된 리소스에 대한 조작을 통일되고 한정적인 인터페이스로 수행해야한다.
2. Server-Client (서버-클라이언트 구조)
  - Server는 API를 제공, Client는 사용자 인증이나 Context(Session, Login)을 관리한다.
  - 각자의 역할이 구분되므로 개발해야할 내용이 명확해지고 의존성이 줄어들게 된다.
3. Stateless (무상태)
  - 작업을 위한 Session, Cookie 등의 정보를 저장하지 않고 단순 처리를 진행한다.
  - Server에서 불필요한 정보를 관리하지 않기 때문에 구현이 쉽고 단순해진다.
4. Cacheable (캐싱 가능성)
  - HTTP 표준을 그대로 사용하기 때문에 Web에서 사용하는 인프라를 그대로 사용한다.
  - 이를 이용하여 Last-Modified나 E-Tag 등 Tag를 이용하여 Caching 구현이 가능하다.
5. Layered System (계층형 구조)
  - Server, Client가 분리된 구조이므로 Proxy, 암호화 등 중간 매체를 사용할 수 있다.
6. Self-descriptiveness (자체 표현 구조)
  - 출력되는 메시지만 보고도 이를 쉽게 이해할 수 있는 표현 구조로 이뤄진다.

## 📝 즉, REST는?
HTTP URI를 통해 자원을 지정하고 Method(`GET`, `POST`, `PUT`, `DELETE`)를 이용하여  
대상 자원의 상태에 대한 CRUD Operation을 적용하는 것을 의미하고 있다.

### 🔔 CRUD Operation은?
**C**reate(생성), **R**ead(읽기), **U**pdate(갱신), **D**elete(삭제)를 일컫는다.  
각 HTTP Method마다 할당된 CRUD Operation의 역할은 아래와 같이 배정된다.
::: info
Create  : 데이터 생성 (POST)  
Read    : 데이터 조회 (GET)  
Update  : 데이터 수정 (PUT)  
Delete  : 데이터 삭제 (DELETE)
:::

## 🤔 REST의 장/단점
### 😀 장점
- HTTP 구조와 인프라를 사용하므로 별도의 인프라 구축이 불필요하다.
- HTTP 표준을 최대한 활용하여 부가적인 기능에서 이점을 가져간다.
- HTTP를 접속/이용할 수 있는 모든 플랫폼에서 사용 가능하다.
- 출력 메시지를 통해 의도하는 바를 명확하게 파악할 수 있다.
- Server/Client 역할을 명확하게 구분하여 의존성이 줄어든다.

### 😅 단점
- 자체적인 구축 표준이 존재하지 않기 때문에 직접 정의가 필요하다.
- Server/Client 간 상호작용이 필요한 Application 개발에는 적합하지 않다.
- 구형 브라우저(예: IE)에서 일부 Method가 지원되지 않는 경우가 존재한다.
- CRUD로만 제공하고 있기 때문에 이외 처리가 필요한 사항은 표현이 어렵다.
- HTTP에 의존적이기 때문에 다른 Protocol에서의 개발 구현에 어려움이 있다.
- 보안과 통신 규약 등은 다루지 않기 때문에 개발자가 직접 설계, 구현해야한다.


<br>


# 📖 REST API 란?
## 📝 REST API 등장 배경
- 많은 플랫폼과 디바이스가 개발, 등장 함에 따라 하나의 Server를 이용하여  
  Web 뿐만 아닌 다양한 Application과 통신을 맺고 이를 대응할 수 있어야 한다.  
  이때 범용적으로 사용성을 보장하는 아키텍처 스타일이 필요하게 됐기 때문이다.
- 최근에는 OpenAPI나 MSA 개념으로의 서비스 설계 구축 간에 많이 사용한다고 한다.

### 🤔 OpenAPI와 MSA는 무엇인가?
1. OpenAPI?
- 누구나 사용할 수 있도록 공개된 API를 의미하고 있다.
- 우리가 사용하는 서비스에 기능을 서비스에서 끌어다가 사용해야할 때  
  OpenAPI를 제공한다면 이를 이용하여 서비스에 적용하여 사용할 수 있다.
2. MSA?
- **M**icro**S**ervice **A**rchitecture의 약자로 작고 독립적으로 배포가 가능한  
  각각의 기능을 수행하는 서비스로 구성하는 구축 형태를 의미하고있다.
- 예를 들어 사이트가 있다면 여기에 사이트, 회원 관리, 콘텐츠 관리 요소가  
  모두 나눠져 요청에 따라 동작하기에 각 서비스마다 언어가 달라도 문제없다.

## 📑 REST API 설계 목표
1. 컴포넌트 간의 유연한 상호 연동성 확보
2. 범용 인터페이스
3. 각 컴포넌트들의 독립적인 배포
4. 지연 감소, 보안 강화, 레거시 시스템을 캡슐화하는 중간 컴포넌트로의 역할

## 🧾 REST API 중심 규칙
1. URI는 정보의 자원을 표현해야 한다.
- 동사보다는 명사를, 대문자보다는 소문자를 사용한다.
- Document 이름으로는 단수 명사를 사용해야한다.
- Collection 이름으로는 복수 명사를 사용해야한다.
- Store 이름으로는 복수 명사를 사용해야한다. 
2. 자원에 대한 행위는 HTTP Method로 표현한다.

### 📂 참고 자원 원형
- Document : 객체 인스턴스나 데이터베이스 레코드와 유사한 개념이다
- Collection : Server에서 관리하는 Directory를 의미한다.
- Store : Client에서 관리하게 되는 자원 저장소를 의미한다.

### 🙄 중심 규칙에 어긋난 예시
멤버가 존재하고 이를 삭제하는 행위를 만들게 됐을 때가 예시다. (`:id`는 고유 ID 숫자)
```
GET /Member/delete/:id
```
- 1번 규칙에서 제시된 **대문자보다는 소문자를 사용** 규칙에 위배된다. (`Member` &rarr; `member`)
- 또한 Collection 이름은 복수 명사를 사용해야하므로 수정이 필요하다. (`member` &rarr; `members`)
- 마지막으로 2번 규칙에 따라 행위는 HTTP Method로 표현이 필요하다 (`delete/`)
```
DELETE /members/:id
```
잘못된 사항을 수정하면 위와 같이 DELETE Method로 `:id`를 삭제하는 행위를 취한다.

### 🙂 중심 규칙을 지킨 예시들
- 전체 멤버 정보를 가져오는 URI
```
GET /members
```
- `:id` 멤버 정보를 가져오는 URI
```
GET /members/:id
```
- 멤버를 추가하는 URI
```
POST /members
```
- `:id` 멤버 정보를 수정하는 URI
```
PUT /members/:id
```

## 🧾 REST API 설계 규칙
1. Slash 구분자(/)는 계층 관계를 나타내는데 사용한다.
```
GET /members/develop
```
2. URI 마지막 문자로 Slash 구분자(/)는 포함하지 않는다.
```
GET /members/develop/           (X)
GET /members/develop            (O)
```
3. Hyphen 구분자(-)는 URI 가독성을 높이는데 사용한다.
4. Underbar 구분자(_)는 사용하지 않는다. (대신 Hyphen 사용)
```
GET /blog-test                  (O)
GET /blog_test                  (X)
```
5. URI 경로에는 소문자를 입력하도록 한다.
```
GET /Members                    (O)
GET /members                    (X)
```
- 이는 대소문자에 따라 다른 자원으로 인식하게 되기 때문에도 있다.
6. 파일 확장자는 URI에 포함시키지 않는다.
```
GET /members/soccer/:id/1.jpg   (X)
GET /members/soccer/:id/1       (O)
```
- 대신 Accept Header를 사용하여 이를 구분합니다. (`Accept: image/jpg`)

### 💡 자원 간의 연관 관계 표현
REST 자원 간의 연관 관계가 있을 수 있는데 그때는 아래와 같이 표현한다.
```
GET /members/:id/books
(/[자원명]/[ID]/[관계 대상 자원명])
```
만약 관계가 복잡한 경우 서브 자원에 명시적으로 표현하는 방법도 사용한다.  
사용자가 좋아하는 책 목록을 표현해야할 경우 아래와 같은 형태로 사용한다.
```
예) GET /members/:id/likes/books
(/[자원명]/[ID]/[서브 자원]/[관계 대상 자원명])
```

## 🎲 HTTP 상태 코드
규칙에 맞춰 설계하는 것 뿐만 아니라 사용자에게 제대로된 응답을 줘야한다.  
이때 HTTP 상태 코드로 많은 정보를 전달할 수 있어 이를 알아보고자 한다.  

### 📂 기본적인 역할
- 1XX (정보) : 요청을 받았으며 프로세스를 진행한다.
- 200 (성공) : 요청을 성공적으로 받고, 인식하여 수용했다.
- 3XX (리다이렉션) : 요청 완료를 위해 추가 작업 조치가 필요하다.
- 4XX (Client 오류) : 요청한 문법이 잘못됐거나 요청을 처리할 수 없다.
- 5XX (Server 오류) : Server가 응답할 수 없는 상태이다.

### 💼 상세적인 역할

|상태코드|응답|설명|
|:--:|:--:|:--|
|200|OK|Client의 요청을 정상 수행된 상태|
|201|Created|Client의 요청이 정상 수행되어 자원이 생성된 상태|
|301|Moved Permanently|영구적으로 컨텐츠가 이동된 상태|
|302|Found|일시적으로 컨텐츠가 이동된 상태|
|400|Bad Request|Client로부터 잘못된 요청이 수신된 상태|
|401|Unauthorized|인증이 필요한 자원에 인증 없이 접근한 상태|
|||(예를 들어 로그인을 하지 않은 상태에서 로그인이 필요한 자원 요청)|
|403|Forbidden|Servr가 요청을 거부한 상태 (차단 등에 의한..)|
|||(403 자체가 자원이 있다는 뜻으로 400 또는 404 사용 권장)|
|404|Not Found|찾고있는 자원이 존재하지 않는 상태|
|405|Method Not Allowed|Client가 허용되지 않는 HTTP Method로 요청한 상태|
|||(예를 들어 삭제가 불가한 자원에 DELETE 요청을 한 경우..)|
|500|Internal Server Error|Server에서 오류가 발생되어 작업을 수행할 수 없는 상태|


<br>


# 📖 RESTful API란?
REST API를 제공하는 Web 서비스를 RESTful하다고 표현하고 있기도 하고,  
REST를 더 잘(?) 사용하기 위한 방법이고 공식적으로 발표된 것은 아니다.  

## 🧾 RESTful API 개발 원칙
1. 자원을 식별할 수 있어야 한다.
- URL만으로 어떤 자원을 제어하려고 하는지 식별할 수 있어야 하고  
  이를 Server는 JSON, XML 등의 형태로 HTTP Body에 포함하여 전송한다.
2. 행위는 명시적이어야 한다.
- 설계 진행 시 HTTP Method를 이용하여 행위를 수행하도록 해야한다.
- 강제적인 사항은 아니나 이를 위배할 경우 RESTful하다고 볼 수 없다.
3. 자기 서술적이어야 한다.
- 데이터에 대한 메타 정보만으로도 어떤 종류인지 등의 구분이 가능해야한다.
4. HATEOAS(Hypermedia As The Engine Of Application State)
- Client 요청에 응답할 때 추가 정보 제공 링크를 포함할 수 있어야한다.
- 예를 들어 현재 URL의 Self 링크, 다음 포스팅 등을 조회하는 URL을 남긴다.

---

이렇게 REST부터 RESTful API는 무엇인지에 대해서 알아보았습니다.

끝까지 포스팅을 읽어주셔서 감사드리며 혹시나 틀린 내용이 있다면 댓글 부탁드립니다. 😎