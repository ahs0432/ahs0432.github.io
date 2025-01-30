---
title:  "[Kernel] Linux System calls - 1 [2]"

categories:
  - Linux
tags:
  - Linux
  - Kernel
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
  - fork
  - exec
  - Parent process
  - Child process
  - Process management
  - 하드웨어

date: 2025-01-30

order: 102
editLink: false
lastUpdated: true
---

::: info
📢 개인적인 정리를 위해 가벼운 어투로 내용을 정리하였습니다.
:::

## 🤔 지난 회차까지의 System calls 간단 정리
지난 회차까지의 `System calls`은 **Multi user system**의 특징으로 인해  
다른 사용자의 **I/O**에 함부로 접근하는 일을 **방지**(**Prevent**)하기 위한 설계다.

이런 설계로 사용자는 I/O를 위해서 `Kernel`의 **`Function`**을 호출한다.  
이전에 조금 더 딥하게 정리해두었으니 확인하고 싶다면 [여기](/posts/Computing/OS/Linux/Kernel/Kernel-Introducing.html)를 참고해보자.

## 📻 System calls
`System calls`이라는게 어떤 것인지는 알겠는데 그렇다면 과연 어떻게 발생될까?  
아래는 사용자가 작성해둔 `printf()` 함수를 호출하기까지의 과정에서의 코드이다.

### 😀 `User mode`에서 동작
- 사용자 코드
```c
main() 
{
    add();
    sub();
    printf(); // C Library 호출
}
```

- `C Library`
```c
printf(3) // 이전 강의에서 3이라는 Instruction은 C Library에 해당했다.
{
	write(2) // System calls 호출
    ...
}
```

- `System calls`
```c
write(2) // 이전 강의에서 2는 System calls에 해당했다.
{
	prepare parameter // 사전 정의된 파라미터를 사용
	chmodk() // Mode bit를 Kernel(1)로 변경하여 TRAP 발생
}
```

### 🤖 `Kernel mode`에서 동작 (`sys_`로 시작하는 함수 / `System calls`)
- `sys_call()` / `Kernel`의 `TRAP Handler`
```c
sys_call() // Kernel 내에 위치한 TRAP handler
{
	...
	// 사용자 권한 확인 및 해당하는 함수 호출 (sys_write)
}
```

- `sys_write()`
```c
sys_write()
{
	...
}
```

### 🦾 `Wrapper Routine`
`TRAP`으로 넘어갈 내용을 준비하고 실질적으로 `TRAP`을 일으키는 공간**이다.

`Wrapper Routine`에서는 `$0x80`과 같이 별다른 의미가 없는 문자를 이용하여  
`Machine Instruction`(컴퓨터가 알아듣는 언어)을 주어 `TRAP`을 일으킨다.
- `Machine Instruction`은 제조사, Architecture 별 차이가 있을 수 있다.

`TRAP`이 발생되기 전에 `Prepare parameter`를 준비하는데 이때 중요한 것이 있다.  
바로 **`System call number`이라고 하는 일종의 번호를 갖는 요소**를 의미하게 된다.  

이 번호는 **`System call function`의 시작 주소를 담는 Array의 Index number**다.  
만약 File에 관련된 호출을 할 경우 아래와 같이 번호를 이용해 Array에 접근한다.
- Open = 0 / Close = 2 / Read = 3 / Write = 4 ...
  - `System call number`와 대응하는 `System call function table`을 호출한다.
    - `System call function table`
      - 운영체제가 보유한 `System call function`에 대한 정보이다.
      - 제조사, Architecture, Compiler 별 차이가 있을 수 있다.
  - **기존 `System call function table`이 1이었다면 다른 시스템은 2일 수 있다.**
    - 이 경우 당연히 전혀 다른 `System call function`을 호출하니 문제가 된다.
    - 이슈를 방지하기 위해 시스템이 변경되는 경우 `Re-compile`을 권장하게 된다.

#### `Wrapper Routine` 과정 정리
`C 언어`를 기준으로 알아본 내용과 종합하여 내용을 정리해보면 아래와 같다.

1. `GCC` 등의 `Compiler`로 **사용자 코드 확인 후 `Library`(3/`printf`)를 호출**
2. `Library`에서 `System call`(2/`write`)을 호출하여 **`Kernel`의 `Function`을 호출**
3. Wrapper Routine에서 **`write`의 `System call number`를 확인하고 `TRAP`으로 변경**
4. `System call number`로 `System call function table`에서 **시작 주소에 접근**

### 🪣 `System calls` 과정 정리
1. 사용자의 프로그램에서 **`System call`을 호출**
2. `Machine Instruction`에서 **`TRAP`을 호출**
3. 하드웨어에서 **`Mode bit`를 `User`(0) &rarr; `Kernel`(1)로 변경**
4. 하드웨어가 `sys_call()`을 호출하여 `Kernel` 상 **`TRAP Handler` 호출**
5. `TRAP Handler` 상 `Kernel` 내 **`Assembly function`을 수행 (`sys_write`...)**
6. 사용자 프로그램의 **진행 단계를 저장** (기존의 위치로 돌아가기 위함)
7. **`System call number`가 `System call function table`에 대응하는지 확인**
8. `System call fucntion`의 **시작 주소를 불러오고 작업 수행**  
(만약 `Debug`가 필요한 경우 `Debugger`를 실행)
9. `System call` 완료 후 **사용자 프로그램 상 호출 위치로 복귀**  
**`Mode bit`를 `Kernel`(1) &rarr; `User`(0)로 변경**

### ⌨️ `Kernel` `System call function`의 역할
우리가 사용하는 스마트폰과 같은 시스템도 모두 `Linux/Unix`를 이용하고 있다.  
가장 많이 사용되는 `Android`의 경우 `Linux 배포판`의 일종이라 볼 수도 있다.

그렇다면 스마트폰에서 갤러리 App에 사용자가 사진을 저장해뒀다라 가정해보자.  
원하는 사진을 읽어야할 것이고 **이는 `C Library`와 같이 함수로 구현됐을 것**이다.

해당 기능 사용을 위해 **`C Library`를 호출한다면 `System call`이 발생될 것**이다.

`Kernel`은 원하는 사진 파일에 접근하여 `System call` 호출한 사용자에게 전달한다.  
이때 **만약 사용자 영역에 해당 파일이 있다면 `Kernel`은 데이터에 접근**해야할 것이다.  

그렇기에 **`사용자`와 `Kernel`이란 독립 프로그램 간 데이터를 주고 받을 통로가 필요**하다.  
다만, 이런 기능은 **보안적으로 굉장히 위험하기에 `Kernel`만 기능을 보유**하도록 제한한다.

이전 설명한 `Kernel`은 **모든 `Memory`에 접근하여 관리할 수 있다는 점**이 이러한 기능이다.

**`Kernel`이 `사용자`에게 `데이터`를 보내거나 `사용자`의 `데이터`를 읽는 것은 가능**하지만,  
반대로 `사용자`는 `Kernel`에게 `데이터`를 보내거나 `Kernel`의 데이터를 읽지 못한다.

또한 이전 앞에서 알아봤던 것처럼 모든 `I/O Instruction`은 `Kernel`을 통해 이뤄진다.

::: info
추가로 `Kernel`은 `Disk`에 용량을 할당할 경우 미리 지정된 용량에 따라 할당한다.  
`사용자`가 원하는 용량은 일정하지 않고 해소를 위해 `Kernel`이 공간을 만들어 제공한다.
:::

### 🧵 System call number의 상세 기능
`TRAP`을 수행하기 전에 미리 `System call number`를 정해 전달한다는 것은 알게 됐다.  
그렇다면 `System call number`는 도대체 무엇이고 어떠한 역할을 하는지 알아보도록 한다.

`System call table`의 **`Index`로서 `System call function`의 시작 주소를 불러오는 용도**다.  
이전 언급한 것과 같이 이러한 번호는 `Compiler`와 운영체제 제조사 등의 따라 차이가 있다.

그렇다면 만약 내가 원하는 기능이 있어서 이를 `System call` 형태로 만드는 것도 가능할까?  
당연히 가능하고 다른 기타 요소가 빠지기 때문에 성능적으로도 이점을 볼 수 있을 것이다.

하지만, 대부분 사람들은 직접 `System call`을 제작하여 사용하지 않는데 그것은 왜 그럴까? 

그 이유는 `System call number`를 부여한단 점에서 타 시스템과의 차이가 생긴다는데 있다.  
내가 **제작한 기능이 다른 시스템에는 존재하지 않는다는 것**으로 이는 플랫폼 의존적이 된다.

또한 `System call`은 제작하여 추가는 가능하지만 이를 다시 변경/수정하는 것은 불가하다.  
이러한 단점을 안게 된다면 관리자는 시스템 변경 시마다 하나를 더 신경써야하게 될 것이다.

그렇다면 다른 방법은 없을까? 바로 `File Descriptor`라는 기능을 이용하면 가능할 것이다.  
`File Descriptor`는 간단하게 말하면 `File`이나 `Socket`을 편하게 번호로 부르는 것이다.

이를 이용하여 `read()`, `write()`, `ioctl()`과 같은 기존의 제작된 `System call` 호출 간  
`read(fd)`와 같은 형식으로 내가 만든 내용을 기준으로 호출한다면 Clear하게 추가가 된다.  
(보통은 `File Descriptor`는 작은 숫자만 활용되므로 큰 숫자를 이용하여 만들도록 하자.)

## 🧑‍💼 Process Management
`Process Management`는 `Kernel` 수행하는 작업 중 하나로 자원 할당과 관련이 있다.

`Kernel`의 구조를 살펴보면 **사용자 프로그램과 하드웨어 사이를 이어주는 역할**이다.
- `User Program`(`Shell`, `Process 1`...) &rarr; `Kernel` &rarr; `H/W` (`CPU`, `Mem`, `Disk`, `tty` ...)

해당 역할을 수행하기 위해서는 하드웨어와 사용자 프로그램의 적절한 지원이 필요한데,  
효율적인 관리를 위해서 `Kernel`에는 자체적인 `Internal Data Structure`를 갖고 있다.

### 🔖 Kernel Data Structure
![Kernel Data Structure](/assets/image/Post/Computing/OS/Linux/Kernel/Kernel-System-calls-1/1.png)

`Kernel`의 `Data Structure` 안에는 각각의 하드웨어에 대한 정보가 담겨있다.  
`Memory`의 경우 사용된 크기와 사용되는 영역이 어느 정도인지의 정보이다.

또한 하드웨어 뿐만 아닌 사용자 프로그램의 실행체인 **프로세스 관리**를 위해  
**`PCB`**(**`Process Control Block`**)라는 **관리 정보를 담는 데이터 구조체**를 갖는다.

이러한 **고유한 정보들을 담아놓은 구조체를 `Metadata`(`메타데이터`)**라 부른다.

#### Metadata의 구성 요소
`Metadata`에는 어떠한 내용이 담겨있을까? 바로 아래와 같은 내용들이다.

- PID (Process ID) / 프로세스의 ID, 식별 역할
- Priority / 프로세스의 우선순위
- Waiting Event (Disk, KB) / Disk 접근 간의 대기 여부
- Status (Run, Sleep...) / 프로세스의 실행 상태
- Location of image in disk / Disk 내 이미지의 위치
- Location of image in memory / Memory 내 이미지의 위치 (코드 위치)
- Open files / 열린 파일들
- Directory (Execute environment) / 디렉토리 위치 (실행 위치)
- Terminal / 터미널
- State vector save area (PC, R0) / 상태 벡터 저장 공간
- Parent, Child process / 부모 또는 자식 프로세스
- Execution time, ... / 실행 시간

::info
`State vector save area` (상태 벡터 저장 공간)  

만약 먼저 프로세스가 `CPU`를 점유하다가 `Disk` 공간 확인이 필요한 경우  
`Waiting` 상태로 변경을 요청하고 `Disk`가 작업을 끝내기를 기다리게 된다.  

`CPU`는 `Waiting` 상태인 동안 `CPU`를 다른 프로세스에 제공할 수 있는데,  
이 과정에서 기존 프로세스가 수행하던 작업 내용을 `PCB`에 저장하게 된다.

`State vector save area`는 저장 공간을 의미하고 `Register`를 저장한다.  
`Register`는 `State of Flipflop(0과 1)`이 32개 모여있는 집합체이다.
::

#### 프로세스 대기
앞선 내용 중 `Waiting Event`와 `State vector save`라는 요소를 확인했다.  
해당 과정은 간단하게 보면 자원 점유를 대기하는 과정에서 사용하는 용어이다.

자원 점유 대기는 간단하게 보면 다른 자원이 이미 자원을 점유하고 있다면,  
자원을 다 사용할 때까지 기다렸다가 자신이 점유할 수 있도록 하는 것이다.

이러한 과정을 `Data Structure`에 대입하여 확인해보면 아래와 같다.

![Waiting Queue](/assets/image/Post/Computing/OS/Linux/Kernel/Kernel-System-calls-1/2.png)

`프로세스`가 자신의 `PCB`에 사용하고자 하는 하드웨어 자원의 링크를 걸고  
`Waiting Queue`에 들어가고 다른 프로세스가 대기 중이면 다음으로 들어간다.

`Waiting Queue`는 `CPU` 자원을 대기할 경우 `Ready Queue`라고 일컫고  
`Disk` 자원을 대기하면 `Disk I/O queue` 또는 `Disk wait queue`라고 한다.

#### Child Process 생성
`Metadata`에 대해서 알아볼 때 `Parent`와 `Child Process`가 기재됐었다.  
해당 두 가지는 이름과 마찬가지로 서로 가족 프로세스로 묶어서 의미할 수 있다.  

가장 큰 예시로 운영체제가 시작되면 가장 먼저 `Kernel` 프로세스가 실행될 것이다.  
그렇다면 이제 사용자가 접근하여 터미널이 켜진다면 `Shell`이 그 하단에서 실행된다.  

이런 관계가 `Kernel`이란 `Parent` 밑에, `Shell`은 `Child`가 생성된 것을 의미한다.  
그렇다면 `Child Process`는 어떠한 과정을 통해서 생성되고 관리되는지 알아보겠다.

1강에서 이야기한 것과 같이 프로그램은 `User Stack`과 `Kernel Stack`을 갖는다.  

`User Stack`은 프로그램에서 사용되는 `함수`를 사용하는 과정에서 사용되고  
`Kernel Stack`은 `System call`을 통해 `Kernel function`을 사용할 때  
필요한 자료구조로서 필요한 `Local Variable`을 저장하기 위한 공간이다.

만약 자료구조로 가변적인 `Stack`이 아닌 늘 공간을 확보해둔다라고 가정하면,  
**운영 간 필요한 공간이 상당히 낭비될 것이고 이는 비용으로 이어지게 될 것**이다.

`Child process`를 생성하기 위한 과정은 그림에서 나온 것과 같이 이뤄지게 된다.

![Child Process](/assets/image/Post/Computing/OS/Linux/Kernel/Kernel-System-calls-1/3.png)

1. `PCB` 공간을 할당하고 `Parent process`의 `PCB`를 복사한다.  
(이 과정에서 `Parent`의 환경을 상속하고 자원을 공유하여 사용한다.)
2. `Child process`의 `Memory` 공간을 확보하여 할당하고 초기 값을 설정한다.  
(이 과정에서 `Parent process`의 **Image를 복사하여 동일한 코드를 보유한다.**)
3. `Disk`로부터 `Child process`에 대한 **새로운 Image를 가져온다.**
4. 새로 생긴 `Child process`의 `PCB`를 `CPU`에 `Ready queue`에 등록한다.

이렇게 4가지 과정을 통해 `Child process`를 생성하여 운용할 수 있다.  
이 과정을 `System call`에서는 2가지 용어로 정리할 수 있는데 아래와 같다.

1. `fork()`: Step 1과 2의 과정을 통합하여 **`Parent`와 동일한 프로세스 생성**
2. `exec()`: Step 3와 4의 과정을 통합하여 **새로운 이미지로 Child process를 할당**

#### `fork()`
`Fork` 과정은 호출 시 두 번의 Return을 수행하고 이는 후반 파트에서 다룬다고 한다.  

첫 번째 Return은 `Parent`가 본인이 가지고 있는 `Process`의 상태를 복사하고 나서  
`Ready queue`에 `Child process`를 등록시킨 뒤 다시 `Parent`로 복귀하는 과정이다.

그후 `Ready queue`에서 대기 중이던 `Child process`가 `CPU`에 점유하게 될 경우  
`Parent`와 동일한 `PCB`, 즉 같은 `State vector`로 `Fork` 후 다음 시점에 실행된다.

이때 **`Parent`, `Child` 모두 가지고 있는 정보와 진행 상황까지 모두 동일한 상태**가 된다.  
그렇기 때문에 `Child Process`도 `Fork`에서 다시 한번 Return을 수행하게 되는 것이다.

만약 두 번의 Return이 구분되지 않는다면 당연히도 문제가 발생될 것이기에 값을 달리한다.  
Return할 때의 값은 `PID` 값으로 0인 경우 `Child process`를 의미하기에 구분이 가능하다.

```c
main() {
  int pid;
  pid = fork();

  if (pid == 0) { // Child process는 0을 리턴
    printf("I am child\n");
  } else { // Parent process는 고유의 값을 리턴
    printf("I am parent!\n");
  }
}
```

그럼 만약 이 프로그램을 아래와 같이 실행했다고 한다면 아래처럼 실행될 것이다.

```textplain
$ cat fork.c
#include <unistd.h>
#include <stdio.h>

main() {
  int pid;
  pid = fork();

  if (pid == 0) { // Child process는 0을 리턴
    printf("I am child\n");
  } else { // Parent process는 고유의 값을 리턴
    printf("I am parent!\n");
  }
}

$ gcc fork.c
$ ./a.out
I am parent
I am child
```

Return이 두 번 됐기 때문에 각각의 내용이 구분되어 실행된 것이 확인된다.

- - -
`System calls`에 대한 첫 번째 강의에 내용을 정리해보았습니다.  
저도 내용을 이해하고 정리하는데 시간이 상당히 소요가 됐네요.

열심히 내용을 복기하고 배워야겠다 라는 생각이 강하게 드네요.  
설 연휴의 끝이네요. 올 한 해도 새해 복 많이 받으시길 바랍니다.

정말 긴 글인데 끝까지 읽어주셔서 감사합니다! 😀