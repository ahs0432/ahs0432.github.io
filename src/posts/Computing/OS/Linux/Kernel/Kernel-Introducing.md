---
title:  "[Kernel] Linux Kernel 기초 [1]"

categories:
  - Linux
tags:
  - Linux
  - Kernel
  - Introduce
  - 커널
  - 리눅스
  - OS
  - 운영체제
  - Operating System
  - 시스템
  - 시스템 프로그래밍
  - 프로그램
  - System
  - System call
  - System calls
  - HW
  - 하드웨어

date: 2025-01-18

order: 101
editLink: false
lastUpdated: true
---

::: info
📢 개인적인 정리를 위해 가벼운 어투로 내용을 정리하였습니다.
:::

## 🌠 2025년 마음가짐
2025년에는 나의 부족한 점을 더 업그레이드 해보자는 마음을 갖게 됐다.  
나는 나름 여러 활동을 통해 얕지만 많은 지식을 갖고 있다고 생각하고 있다.  

하지만, 내가 가장 잘하는 하나의 지식을 뽑아보라고 하면 정하기가 어려운 것 같다.  
중소기업의 장점이자 단점이 여기서 부각되는데 다양한 경험은 있지만 깊지 못하다.

그래서 올해부턴 나한테 물어보면 저는 **이 분야의 전문가입니다** 하도록 노력하려 한다.  
~~(지금은 외부에 나가 이야기할 때 `클라우드 엔지니어`이자 `개발자` 지망생이라 한다.)~~

나는 어렸을 때 `시스템 프로그래머`를 동경했고 지금도 이 부분은 마찬가지인 상태다.  
지금은 기본 Base가 있고 그렇기에 목표에 도달하기에 이보다 더 나은 상태는 없다.

올해 첫 번째 도전으로 그간 겉핥기만 열심히 했던 `Kernel`에 대한 학습을 시작한다.  
솔직히 `Kernel`이라는 요소는 `개발자`, `엔지니어`에게 필수 지식은 아닐 수 있다.

`시스템 프로그래머`에게 있어 `Kernel`에 대한 구조 이해는 기본 중에 기본일 것이고,  
시간이 흘러서 이 지식은 나의 기초 체력이자 큰 원동력으로 작용할 것으로 확신한다.

## 😀 어떻게 공부할 것인가?
먼저 현재는 별세하신 서울대학교의 고건 교수님의 [강의](https://olc.kr/course/course_online_view.jsp?id=35&s_keyword=kernel&x=0&y=0)를 수강할 생각이다.  

이런 강의를 조금 더 빠르게 접했다면 좋았을텐데라는 생각이 강하게 들고 있다.  
무료로 이정도 학식이 높으신 분의 강의를 접할 수 있다는 것이 정말 좋은 듯 하다.

시간 여유가 될 때 강의를 시청하고 계속 돌려보며 나의 지식으로 만들고자 한다.  
치열했던 2024년이 끝났으니 더 치열한 2025년을 살아보자라는 생각을 한다.

여기까지 강의를 듣기 전 나의 서론을 마치겠다. 너무 길어서 지루했을 듯 하다.

## 😎 Introduction
### 💫 배우기 전에
`Kernel`이란 분야는 한 명이 마스터하여 모든 것을 알기란 어려운 분야다.  

`Linux`를 굉장히 잘 다루는 집단으로 유명한 `IBM`과 같은 공룡 기업에서도  
총 250명 정도의 인원으로 각 분야 별 전문가 그룹을 운영하고 있을 정도이다.

그렇기에 기초를 다질 때에는 `Kernel`에 대한 모든 구조를 알겠다라는 것보단  
`Kernel`과 `운영체제`가 어떻게 설계됐고 그에 대한 원리를 이해하도록 하자.

### ☸️ 운영체제
`운영체제`라는 것을 사용자와 컴퓨터 하드웨어 간 중재자 역할을 하는 프로그램이다.  
조금 더 정리해보면 `하드웨어 자원`을 관리하고 사용자에게 지원하는 서비스이다.

::: info
🦾 **하드웨어 자원의 종류?**  
`하드웨어`는 굉장히 다양한 종류가 존재하는데 대표적으로 아래와 같이 이뤄져 있다.  

- `CPU`(`Central Process Unit`, `중앙처리장치`): 기억, 해석, 연산, 제어 수행
- `Memory`(`주기억장치`): `CPU`와 `Disk` 간 속도 차이 해소 / `휘발성` / `RAM`
- `Disk`(`보조기억장치`): 실제 데이터를 저장하는 공간 / `비휘발성` / `SSD`, `HDD`
- `TTY`(`TeleTYpewriter`): `Console` 및 `Terminal` 모드를 의미
  - `TTS`(`TTy Serial`): `Console`을 이용한 물리적인 접근을 지원
  - `PTY`(`Pseudo-Terminal`): Pseudo(가상)의 `Teminal` 모드 (`CLI`)
  - `PTS`(`Pseudo-Terminal Slave`): Pseudo(가상)의 `Teminal` 모드 (`GUI`)

이외에도 다양한 `하드웨어`가 있고 이러한 자원을 `운영체제`에서 관리하게 된다.
:::

#### 목표
`운영체제`의 목표는 간단하게 4가지로 정리하여 설명할 수 있다.
- 사용자의 프로그램을 실행한다.
- 사용자 문제를 더 쉽게 해결할 수 있도록 지원한다.
- 컴퓨터 시스템을 편리하게 사용할 수 있도록 제공한다.
- 하드웨어를 더욱 효율적으로 사용할 수 있도록 한다.

#### 성능 지표
결국 목표에 대한 달성에 대한 부분을 평가하기 위해서는 지표가 필요할 것이다.  
`운영체제`에서 사용하게 되는 지표는 대표적으로 아래의 3가지가 존재할 것이다.

- `처리량`(`Throughput`): 작업/초 (`시스템 중심`)
- `활용도`(`Utilization`): 사용 시간의 비율 (`사용자 중심`)
- `응답시간`(`Response Time`): 작업 당 시간 (`사용자 중심`)

지표는 `사용자 중심`과 `시스템 중심`으로 나눌 수 있는데 서로 충돌될 수 있다.

#### 구조
`사용자` &rarr; `응용 프로그램` &rarr; `운영체제` &rarr; `하드웨어`

구조를 보면 이해할 수 있겠지만 `사용자`가 `응용 프로그램`을 사용하게 될 경우  
`운영체제`를 통해 `하드웨어`를 이용한 요청을 수행한다는 것을 확인할 수 있다.

### 👨‍💻 프로그램
`프로그램`은 어떠한 일을 수행하기 위해 작성된 순서나 목록 등을 의미하게 되는데,  
다양한 기능들의 `함수`(`명령`)를 이용하여 순서나 목록을 작성한 집합체라 볼 수 있다.
- 대표적으로 `C Language`를 이용하여 코드 작성 시 `*.c` 파일을 작성하게 되는데,  
  이를 `컴파일`(`Compile`)한 `a.out`, `a.exe` 등의 목적 파일을 프로그램이라 칭함

#### 프로그램의 비효율성
우리가 많이 사용하는 Microsoft 사에서 개발한 `Office`라는 프로그램을 생각해보자.  

`Office`는 하나의 프로그램이 아닌 `Word`, `Excel`, `Powerpoint` 등으로 분리돼있다.  
**왜 그렇게 분리 해두었을까?** 다양한 이유가 있겠지만 `비효율성`이 클 것이라 생각된다.  
~~(물론 사업적인 목적에서 분리하여 별도로 판매하려는 목적도 있을 것이라 생각한다.)~~

`프로그램`이 커지게 되면 실행하게 될 때 `하드웨어`에 부담되는 `사용량`이 증가한다.  
그렇게 된다면 자원 사용량이 늘어나니 당연하게도 **동작 속도의 저하로 이어지게 된다.**

사람으로 비유해보면 한 사람에게 불필요한 업무까지 모두 전달하는 경우로 볼 수 있다.  

#### 운영체제의 프로그램 분리
`프로그램`이 하나의 큰 요소에서 `비효율성`이 있다면 `운영체제`도 마찬가지일 것이다.  
이러한 `비효율성`을 해소하기 위해 `운영체제`도 여러 요소로 분리하여 제공하고 있다.

대표적인 요소로 `Kernel`, `Utility`, `Shell`, `File`, `Standard File` 정도가 있다.  

### 🏁 Kernel / 커널
`Kernel`은 본질적으로 `C Language`로 만들어진 `프로그램`에 해당하는 요소이다.  
다른 것과 무슨 차이점이 있길래 `Kernel`이라는 별도의 요소로 부르게 된 것일까?

바로 `Memory Resident`하다는 특징을 가지고 있기 때문에 별도로 구분하게 된다.  
`Memory Resident`는 직역하게 되면 `메모리 거주자`(?)정도라고 이야기할 수 있다.

`Kernel`은 다른 `프로그램`과 다르게 `Memory`에 항상 상주(점유)하고 있게 된다.  
그렇기 때문에 무언가 처리가 필요할 때 즉각적으로 대응할 수 있다는 특징이 있다.

그렇다면 `Kernel` 외의 `프로그램`은 어떠한 특징을 가지고 있다고 볼 수 있을까?  
눈치챈 사람도 있겠지만 `Disk Resident`한 특징을 갖고 있다고 이야기할 수 있다.

다른 `프로그램`은 `Disk`에 있다가 필요한 경우 `Memory`에 상주하여 처리한다.  

### 📻 Utility / 유틸리티
`Utility`는 `Kernel`에서 알아본 바와 같이 `Disk Resident`한 특징을 갖는다.  
필요한 경우에 `Disk`에서 `Memory`로 상주시키고 종료되면 회수된다는 것이다.

우리가 `CLI` 환경에서 필요한 경우 호출되고 사용하는 요소가 무엇이 있을까?  
그렇다 바로 `Command`라는 요소가 존재하는데, `Utility`와 동의어로 본다.  
(보통 `Linux`에서 `Command`라는 것은 `/bin/` 경로 하위에 위치하게 된다.)

그리고 이것은 하나의 `Job`(`작업`)이라고도 이야기할 수 있다.  
(`Utility` = `Command` = `Job`이라는 관계로 볼 수 있다.)

### 🖥️ Shell / 쉘
`Shell`은 `Utility`지만 `Job Control`(`작업 제어`)라는 특징을 갖는다.  
이전에 `Utility`는 하나의 `Job`이라고 부를 수 있다고 이야기 했었다.  

`Shell`은 `Utility`를 제어하는 역할을 수행한다고 볼 수 있는 것이다.  
(`Command`마다 처리를 진행하므로 `Interpreter` 역할이라 볼 수 있다.)

주된 역할은 키보드 입력을 읽고 명령을 실행하고 결과를 반환하게 된다.  
`사용자`와 `UNIX/Linux` 간의 인터페이스 역할을 수행한다고 볼 수 있다.

### 📁 File / 파일
`Sequence of Bytes`로 **바이트의 연속체(배열)** 정도로 해석이 가능하다.  
정보의 이름이 지정된 집합체 정도로 블록과 같은 제약이 존재하지 않는다.

또한 `Linux`와 같은 `운영체제`는 **I/O Device**도 `File`로 취급하게 된다.  
`Linux` 시스템 상 `/dev/` 하위에는 **특수 파일(Special files)**이 있다.
- 예) `/dev/xvda`, `/dev/tty0`

### ⌨️ Standard File / 표준 파일
`Linux`와 같은 `운영체제`는 I/O Device도 `File`로 취급한다는 걸 알게 됐다.  

이러한 표준 형식으로 제공되는 요소를 `Standard File`이라고 일컫게 되는데,  
보통은 `표준 입력`, `표준 출력`, `표준 오류`와 같이 3가지 요소로 나누게 된다.

- `표준 입력`(`Standard Input`): 키보드
- `표준 출력`(`Standard Output`): 화면
- `표준 오류`(`Standard Error`): 오류 메시지

### 🧵 Kernel - Shell - Utility 관계
이 세 요소에 대한 관계를 이해하기 위해서는 전개되는 과정을 이해할 필요가 있다.

- `Booting`을 통해 시스템을 실행한다.
  - `Kernel`이 실행되어 `Memory`에 상주한다.
- `Shell`을 이용하여 사용자가 접근하게 된다.
  - `Kernel` 하위에 `Child Process`로 `Shell`이 실행된다.
  - `Shell`도 마찬가지로 `Memory`에 상주하게 된다.
  - `사용자`가 `Command`를 입력할 때까지 대기한다.
- `Utility`(`Command`)를 실행한다.
  - `Shell` 하위에 `Child Process`로 `Utility`가 실행된다.
  - `Utility`도 `Memory`에 상주하고 `Job`이 끝나면 회수된다.
- `사용자`가 모든 작업을 끝내고 `Shell`을 종료한다.
  - `Shell`이 상주했던 `Memory`가 회수된다.

이 과정으로 보면 아래와 같은 Tree 구조 형태를 가지게 된다고 볼 수 있다.

```
Kernel
├── Shell (1)
│   ├── Utility (2-1)
│   └── Utility (2-2)
└── Shell (2)
    ├── Utility (2-1)
    └── Utility (2-2)
```

### 🤔 Windows와 Linux의 관점 차이
그렇다면 최근 사용자들이 사용하는 대표적인 `운영체제` 두 개를 비교해보자.  
당연하게도 개인 사용자가 가장 많은 것은 `Windows` 서버는 `Linux`일 것이다.

#### Windows
`Windows`의 경우 사용자에 초점을 맞춘 `Personal Computer`에 초점을 맞춘다.  
그렇기 때문에 `CPU`, `Memory` 등의 자원은 `단일 사용자`를 위해서 사용되게 된다.

`단일 사용자`에 초점을 맞춰 환경을 제공하기에 편리하도록 `GUI`의 특징을 갖는다.  
(`GUI`(`Graphic User Interface`): 입출력 장치를 이용하여 아이콘 등을 클릭/사용)

이러한 서비스 지향성을 `Single user system` 기반으로 설계됐다고 말할 수 있다.  
이렇게 됐을 때 `Windows`에 대한 주요한 특징은 아래와 같이 3가지로 정리된다.

- 특징
  - `Single user system`
  - 단일 사용자를 위한 설계로 개인 사용자의 편리함을 우선으로 설계
  - 자원 사용량의 경우 개인 사용자를 초점으로 두기에 전반적으로 사용

#### Linux
그렇다면 `Linux`는 어떨까? 일반적으로 `Linux`의 경우 `CLI`를 기반으로 사용한다.  
(`CLI`(`Command Line Interface`): 명령 줄을 기반으로 입력한 결과를 출력/확인)

`Linux`의 경우 방향성 자체가 `다중 사용자` 즉 `Multi user system`을 지향한다.  
다중의 사용자를 위한 것이므로 `자원`의 사용량도 최소화하여 운용할 필요가 있다.

예를 들어 사용자가 3명이 있다고 한다면 1명이 너무 많은 자원을 점유하게 될 경우  
다른 2명의 사용자에 피해를 줄 수 있기 때문에 최대한 빠른 자원 회수가 필요하다.

`Linux`에서 `Windows`와의 차이가 있는 특징으로는 아래와 같이 3가지가 있다.

- 특징
  - `Multi user system`
  - 다중 사용자를 위한 설계로 다른 사용자에게 피해를 주지 않도록 설계
  - 자원 사용량의 경우 다중 사용자를 위해 빠르게 사용하고 회수되도록 제공

`Linux`의 경우 `Multi user system`이라면 과연 `보안`은 어떻게 해결할까?  
같이 사용하는 환경에서 버그나 크래킹이 발생된다면 다른 사용자도 문제가 된다.

이외에 내가 아닌 다른 사용자가 내 파일을 수정/삭제한다면 문제가 있을 것이다.  

이런 현상이 발생된다면 `Memory`나 `Disk`에 쓰였기에 복구가 불가하게 된다.  
그렇기 때문에 `Linux`에서는 `Prevent`(`사전방지`)를 하도록 설계가 진행됐다.

`Linux`는 이런 현상 해소를 위해 사용자의 `I/O Instruction` 자체를 막아버렸다.  

그렇다면 사용자는 과연 `Linux`에서 `I/O` 관련 작업을 어떻게 수행해야할까?  
이에 대해서는 `CPU`를 할당하는 방식에 대해서 먼저 알아보고 알아보도록 하자.

### 🪣 CPU 자원의 할당
컴퓨터에서 두뇌 역할을 하는 `CPU` 자원은 다른 자원에 비해 더욱 한정적이기에  
`운영체제` 내에서 적합하게 자원을 공유하고 나눠서 사용해야하는 특징이 있다.

`CPU` 자원은 하나의 순간(`Clock`)에 하나의 프로세스만 점유가 가능하게 되고,  
최근의 `CPU`는 1초에 40억 번(`4.0 Ghz`) 이상의 연산을 수행할 수 있게 된다.

우리가 `PC`를 사용할 때 마치 `Multi Tasking`을 할 수 있다고 느끼는 이유도  
일반적으로 생각하는 것보다 더 많은 순간을 `PC`가 빠르게 처리하기 때문이다.

이 과정에서 아까 말한 허용되지 않은 사용자의 `I/O`요청이 오면 어떻게 될까?  
당연하게도 그냥 실행된다면 방지 요소가 없기에 시스템 자체에 문제가 될 것이다.

하지만, `Linux`는 사용자가 요청한 것이 확인되면 바로 `CPU` 할당을 해제한다.  
그렇게 `Kernel`만이 `I/O Instruction`을 수행할 수 있도록 환경을 구성한다.

### 😅 Linux의 I/O Instruction 요청기
사용자의 `I/O Instruction`이 제한된다고 한다면 `I/O`는 어떻게 일어날까?  
바로 사용자가 `I/O`를 하는 것이 아니라 `Kernel`에게 별도 요청을 보내게 된다.

`Kernel`에 요청은 미리 정해진 `Function`(`함수`)를 이용하여 전달할 수 있다.  
이러한 과정을 `System calls`라고 부르고 모든 `I/O` 작업은 이를 통한다.

만약 내가 `a.out`이라는 목적 파일을 실행했을 때를 예를 들어 과정을 보겠다.

1. `Instruction`(`명령`): 사용자가 `I/O` 관련 명령을 수행해야 한다.
2. `Function`(`함수`): 요청 위탁을 위해 `System calls`을 발생시킨다.
3. `Process`(`처리`): `Memory`, `File` 등의 `I/O` 요청을 수행한다.

#### Mode bit
이러한 `System calls`의 구분을 위해 `CPU`는 `Mode bit`를 갖고 있다.  
1 bit는 0과 1을 표현할 수 있고 각 숫자는 다음과 같은 의미를 갖게 된다.

- 0 = `User`
  - 사용자에 할당된 `Address space`에만 접근 가능
  - `I/O Instruction`, `특수 레지스터 접근` 등의 제약 존재
    - `Add`, `Sub` 등의 명령에만 접근 가능
- 1 = `Kernel`
  - 모든 `Address space`에 접근할 수 있는 권한 보유
  - 모든 `Instruction`을 수행할 수 있도록 허용

`CPU`는 `Instruction`을 위해서는 `Memory`에 접근이 필요하게 되는데,  
위에서 언급한 `Mode bit` 상태가 무엇인지에 따라 검사 여부를 결정한다.  
(`User`인 경우에는 검사가 필요하지만 `Kernel`인 경우는 불필요하다.)

검사 과정에서 `MMU`(`Memory Management Unit`)이라는 요소가 사용되는데,  
이는 하드웨어에 내장된 장치로 `CPU` &rlarr; `Memory` 사이 `Bus`를 검사하게 된다.

`Instruction` 수행 과정은 아래와 같이 5가지인데 한 번 살펴보도록 하자.

1. `PC`(`Program Counter`)에서 `Memory`에 데이터 요청 (`PC to Memory`)
2. `Instruction` 가져오기 (`Instruction Fetch`)
3. 해독하기 (`Decode`)
4. 실행하기 (`Execute`)
5. `PC`의 Counting 증가 (`Increment PC`)

이 과정에서 두 번의 검사를 수행하는데 먼저 1번 `Memory`에 데이터 요청이다.  
데이터 요청에선 사용자의 접근 가능 `Address space`인지를 판단하게 된다.

다음은 3에서 4로 넘어가는 구간에서 `op-code`를 검사하는 과정이 존재한다.  
사용자 모드에서 허용되지 않는 `op-code`를 시도하는지를 판단하게 된다.

만약 이를 위배하게 되면 `TRAP`을 발생하여 `Instruction`을 멈추게 된다.

#### CPU의 Memory 요청 예시
그렇다면 `CPU`는 과연 어떻게 `Memory`에 요청하고 명령을 실행하게 될까?  
일단 이를 알아보기 전에 `CPU`와 `Memory`가 어떤 요소를 갖고 있는지 봐야한다.

- `CPU`
  - `Control Unit`
    - `PC`(`Program Counter`) / `특수 레지스터`
    - `IR`(`Instruction Register`) / `특수 레지스터`
  - `ALU`(`Arithmetic Logic Unit`, 산술논리장치)
- `Memory`
  - `MAR`(`Memory Address Register`)
  - `MBR`(`Memory Buffer, Register`)

위처럼 `CPU`와 `Memory`가 구성된 상태일 때 데이터를 어떻게 처리하게 될까?

1. `PC`가 `Instruction`에 필요한 `Address`를 `Memory`의 `MAR`에게 전달한다.
2. 이때 읽어들인 `Address`에 할당된 데이터를 `MBR`이 `IR`에게 전달한다.
3. `CPU`는 `op-code`+`operands` 형태를 만들어 `ALU`에 전달한다.
4. `operands`에서 필요한 `Address`를 `Memory`의 `MAR`에 요청한다. (1~2 과정)

이때 `op-code`+`operands`는 아래와 같은 구조를 가지고 있게 된다.

|op-code|operands|operands|
|:--:|:--:|:--:|
|add|i|j|

#### Kernel mode로의 전환 (chmodk)
이제 `CPU`가 `Memory`에 상주된 데이터를 받아오는 방법과 구조를 파악하였다.  
이전 이야기한 것처럼 사용자는 `I/O` 요청을 할 수 없는데 어떻게 진행하게 될까?

바로 `chmodk`(`Change Mode Kernel`)이란 일련의 과정을 이용해서 가능하게된다.

`C Lang`을 이용하여 간단한 `print` 구문을 작성하여 메시지를 출력했다고 하자.  
이 과정에 당연하게도 `I/O`가 발생되는데, **그럼 사용자가 요청한게 아닌가?** 할거다.

하지만 실제 `Compile`이 완료된 `Binary` 파일을 확인할 경우에 `I/O` 요청은 없다.  

`Compile` 하기 전에는 간단하게 `I/O`를 요청하겠다는 구문으로만 작성해보겠지만,  
실제 `Compiler`는 해당 요청을 `chmodk`가 가능하도록 내용을 치환하여 제공한다.  

- 컴파일 이전
  - `I/O Instruction` 내용 기재
- 컴파일 이후
  - `Prepare all parameters` (사전 정의된 파라미터)
    - `Open, Read, Write ...`
  - `Execure chmodk` (`chmodk` 명령 호출)

그렇다면 `chmodk`는 실질적으로 수행되는 과정이 어떻게 되는지 알아보도록 하자.

`chmodk`를 사용자가 호출했다. 생각해보자 해당 `Instruction`도 위험하지 않을까?  
그렇기 때문에 사용자에겐 `chmodk`도 마찬가지로 `privileged instruction` 이다.

만약 사용자가 해당 `Instruction`을 실행할 경우엔 사용자를 `TRAP` 상태로 변경한다.  
`TRAP`이란 `User mode`에서 실행할 수 없도록 `CPU` 권한을 회수하는 것을 의미한다.

:::info
`Interupt`와 `TRAP`의 차이  
- `Interupt`는 `HW`에 의해 생성된 변경되는 흐름이라고 볼 수 있다.
- `TRAP`은 `SW`에 의해 호출된 `Interupt`라 볼 수 있고 `Interupt`보다 작은 개념이다.
  - `TRAP`은 `CPU mode` 및 상태를 변경할 수 있지만 `Interupt`는 상태를 유지한다.
:::

`TRAP` 상태가 된다면 `Kernel`에서 처리하게 되는 `TRAP Handler`에 진입하게 된다.  
이때 `Prepare all parameters`에 정의된 처리하고자 하는 사항이 무엇인지 확인한다.

해당 요청사항에 대해 사용자가 권한(`Permission`)을 보유하고 있는지 확인한 뒤,  
전달받은 `Parameter`와 `Memory` 요청을 수행한 뒤 다시 `TRAP`으로 복귀하게 된다.  

복귀된 `TRAP`은 `프로그램`으로 돌아와 `User mode`로 `CPU mode bit`를 변경한다.  

#### 최종 정리
위에서 설명된 과정과 같이 모든 프로그램은 `User mode`와 `Kernel mode`를 오간다. 

처음 `User mode`에서 `Instruction`을 수행하여 `Kernel mode`가 되어 수행하게 되고  
사용자의 권한을 검증한 뒤 수행이 완료된다면 `TRAP`으로 돌아와 `User mode`가 된다.

이 과정에서 `Function` 실행 간 필요한 `Local variable`이 존재하기 나름일 것이다.  
이 변수를 모두 `Memory`에 미리 상주시켜 놓는 것은 많은 자원 낭비가 발생될 것이다.

그렇기 때문에 `User`, `Kernel` 둘 다 모두 `Stack` 형태로 저장소를 보유하고 있다.

### 🛹 Linux Manual 읽기
`Linux`에서 명령어의 설명을 보고 싶을 때에는 `man` 명령어를 이용하면 된다.  
그런데 여기서 표기되는 정보에 따라 어떤 형태인지 구분하여 확인할 수 있다.

```bash
$ man cat

CAT(1)                           User Commands                          CAT(1)

NAME
       cat - concatenate files and print on the standard output
..


$ man 2 chown

chown(2)                      System Calls Manual                     chown(2)

NAME
       chown, fchown, lchown, fchownat - change ownership of a file

..


$ man 3 sleep

sleep(3)                   Library Functions Manual                   sleep(3)

NAME
       sleep - sleep for a specified number of seconds

..
```

이러한 구분을 `Sections`라고 일컫고 일반적으로 8가지로 구분되어 제공된다.

1. General commands
2. System calls
3. Library functions
4. Special files (Device)
5. Files Format
6. Game & Screensavers
7. Miscellaneous
8. System administration commands and daemons

- - -

아직 이게 1강인게 놀랍습니다. 소개에 대한 부분만 이정도의 분량이 나오게 되네요.  
얼마나 깊고 심오한 세상일까 다시 한번 놀라면서 더 열심히 하자는 생각이 듭니다.

하루 1시간 정도씩 썼지만 1강을 정리하는데에만 약 일주일이 소요됐네요.  
굉장히 긴 내용이다 보니 직접 강의를 들어보시는 것을 추천드립니다.

긴 포스팅을 읽어주셔서 감사합니다! :D
이번 한 해도 파이팅 입니다.