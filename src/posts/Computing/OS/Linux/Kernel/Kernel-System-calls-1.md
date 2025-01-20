---
title:  "[Kernel] Linux Kernel 기초 [1]"

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
  - 하드웨어

date: 2025-01-22

order: 102
editLink: false
lastUpdated: true
---

::: info
📢 개인적인 정리를 위해 가벼운 어투로 내용을 정리하였습니다.
:::

## 🤔 지난 회차까지의 System calls 간단 정리
지난 회차까지의 `System calls`은 `Multi user system`의 특징으로 인해  
다른 사용자의 `I/O`에 함부로 접근하는 일을 방지(`Prevent`)하기 위한 설계다.

이러한 설계로 인해 사용자는 `I/O`를 위해서 `Kernel`의 `Function`을 호출한다.  
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

- C Library
```c
printf(3) // 이전 강의에서 3이라는 Instruction은 C Library에 해당했다.
{
	write(2) // System calls 호출
    ...
}
```

- System calls
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

### 🦾 Wrapper Routine
`TRAP`으로 넘어갈 내용을 준비하고 실질적으로 `TRAP`을 일으키는 공간이다.

`Wrapper Routine`에서는 `$0x80`과 같이 별다른 의미가 없는 문자를 이용하여  
`Machine Instruction`(컴퓨터가 알아듣는 언어)을 주어 `TRAP`을 일으킨다.
- `Machine Instruction`은 `제조사`, `Architecture` 별 차이가 있을 수 있다.

`TRAP`이 발생되기 전에 `Prepare parameter`를 준비하는데 이때 중요한 것이 있다.  
바로 `System call number`이라고 하는 일종의 번호를 갖는 요소를 의미하게 된다.  

이 번호는 `System call function`의 시작 주소를 담는 `Array`의 `Index number`다.  
만약 `file`에 관련된 호출을 할 경우 아래와 같이 번호를 이용해 `Array`에 접근한다.
- Open = 0 / Close = 2 / Read = 3 / Write = 4 ...
  - `System call number`와 대응하는 `System call function table`을 호출한다.
    - `System call function table`
      - 운영체제가 보유한 `System call function`에 대한 정보이다.
      - `제조사`, `Architecture`, `Compiler` 별 차이가 있을 수 있다.
  - 예로, 기존 `System call function table`이 1이었다면 다른 시스템은 2일 수 있다.
    - 이런 경우 당연히 전혀 다른 `System call function`을 호출하니 문제가 된다.
    - 이슈를 방지하기 위해 시스템이 변경되는 경우 `Re-compile`을 권장하게 된다.

#### Wrapper Routine 과정 정리
`C 코드`를 기준으로 알아본 내용과 종합하여 내용을 정리해보면 아래와 같다.

1. `GCC` 등의 `Compiler`로 사용자의 코드를 확인하고 `Library`(3/`printf`)를 호출
2. `Library`에서 `System call`(2/`write`)을 호출하여 `Kernel`의 `Function`을 호출
3. `Wrapper Routine`에서 `write`의 `System call number`를 확인하고 `TRAP`으로 변경
4. `System call number`로 `System call function table`에서 시작 주소에 접근

### 🪣 System calls 과정 정리
1. 사용자의 프로그램에서 `System call`을 호출
2. `Machine Instruction`에서 `TRAP`을 호출
3. `HW`에서 `Mode bit`를 `User`(0) &rarr; `Kernel`(1)로 변경
4. `HW`가 `sys_call()`을 호출하여 `Kernel` 상 `TRAP Handler` 호출
5. `TRAP Handler` 상 `Kernel` 내 `Assembly function`을 수행 (`sys_write`...)
6. 사용자 프로그램의 진행 단계를 저장 (기존의 위치로 돌아가기 위함)
7. `System call number`가 `System call function table`에 대응하는지 확인
8. `System call fucntion`의 시작 주소를 불러오고 작업 수행  
(만약 Debug가 필요한 경우 Debugger를 실행)
9. `System call` 완료 후 사용자 프로그램 상 호출 위치로 리턴  
Mode bit도 `Kernel`(1) &rarr; `User`(0)로 변경