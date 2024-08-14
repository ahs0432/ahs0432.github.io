---
title:  "[Windows] Windows Server Update Services Client 설정" 

categories:
  - Windows
tags:
  - Server
  - Windows
  - Update
  - WSUS
  - Client

date: 2020-03-18

editLink: false
lastUpdated: true
---

::: info
현재 포스팅은 `WSUS`의 사전 구성이 완료됐다는 가정 하에 진행됩니다.  
만약 구성되지 않은 경우 아래 포스팅을 참고하시어 구성 부탁드립니다.  
* [[Windows] Windows Server Update Services 구축](/posts/Computing/OS/Windows/Windows-Server-Update-Services-Set-up.html)
:::

## 테스트 환경
- Windows Server 2012 R2
  
## 사용 용도
- 폐쇄적인 통신망에서의 `Windows Update`가 필요한 경우 사용됩니다.
- 사내 PC, 서버에 대한 Update를 중앙에서 관리가 필요할 때 사용됩니다.
- 공인망에서 자신의 Update 서버를 별도로 구축하여 이용할 때 사용됩니다.

## 권장 사양
- CPU: 2.0Ghz 이상의 속도를 가진 1Core 이상의 CPU
- Memory: 2GB 이상의 메모리

::: note
가상 환경 기준 1vCore 2GB의 사양으로 구축했을 때 정상적인 서비스가 어려웠습니다.  
최소 2vCore 4GB부터 관리 대상 수에 따라 서버의 사양을 높이는 것을 권장드립니다.
:::

## 사전 준비
- `Windows Server Update Services`(이하 `WSUS`) 구축 서버 (Windows Server OS 사용)
- 대상 `Client` 서버 (Windows OS를 사용)

## Windows Server Update Services Client 설정
::: info
해당 작업은 `Client` 서버에 진행하는 작업인 점 참고 부탁드립니다.
:::

### 로컬 그룹 정책 변경

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Client-Set-up/1.png =60%x60%)
- 실행창(`Windows` + `R`)을 열고 실행창에 `gpedit.msc`를 입력하여 로컬 그룹 정책 편집기를 열어줍니다.

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Client-Set-up/2.png =90%x90%)
- 로컬 그룹 정책 편집기에서 아래 경로로 이동 및 대상 설정을 더블클릭하여 열어줍니다.  
> `컴퓨터 구성` &rarr; `관리 템플릿` &rarr; `Windows 구성 요소` &rarr; `Windows 업데이트` &rarr; `인트라넷 Microsoft 업데이트 서비스 위치 지정`

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Client-Set-up/3.png =70%x70%)
- `인트라넷 Microsoft 업데이트 서비스 위치 지정` 창이 열렸다면 아래와 같이 설정합니다.
> 1. 구성되지 않음 &rarr; 사용(E)  
> 2. 인트라넷 업데이트 서비스에서 업데이트를 검색하도록 설정
>   - http://\[WSUS서버IP\]:8530
> 3. 인트라넷 통계 서버 설정
>   - http://\[WSUS서버IP\]:8530


![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Client-Set-up/4.png =60%x60%)
- 실행창(`Windows` + `R`)을 열고 실행창에 `gpupdate /force`를 입력하여 설정한 정책을 강제 반영합니다.

### 레지스트리 변경

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Client-Set-up/5.png =60%x60%)
- 실행창(`Windows` + `R`)을 열고 실행창에 `regedit`을 입력하여 레지스트리 편집기를 열어줍니다.

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Client-Set-up/6.png =90%x90%)
- 레지스트리 편집기에서 아래 경로로 이동 후 값이 정상 반영됐는지 확인합니다.
> `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate`

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Client-Set-up/7.png =60%x60%)
- 정상적으로 적용됐을 경우 Windows 업데이트 창으로 이동할 경우
**시스템 관리자가 관리합니다.**라는 메시지를 확인할 수 있습니다.

---
포스팅을 읽어주셔서 감사합니다! :D
