---
title:  "[Windows] Windows Server Update Services 구축" 

categories:
  - Windows
tags:
  - Server
  - Windows
  - Update
  - WSUS

date: 2020-03-17

editLink: false
lastUpdated: true
---

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

## Windows Server Update Services 구축
::: info
해당 작업은 `WSUS` 구축 서버에 진행하는 작업인 점 참고 부탁드립니다.
:::

### Windows Server Update Services 설치

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Set-up/1.png =90%x90%)
- `서버 관리자`에서 `역할 및 기능 추가`를 선택하고 서버 역할 탭까지 `다음(N)`을 클릭합니다.

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Set-up/2.png =80%x80%)
- `서버 역할 선택`에서 `Windows Server Update Services` 역할을 체크합니다.

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Set-up/3.png =50%x50%)
- 필요한 기능이 모두 설치될 수 있도록 `기능 추가`를 클릭하여 기능을 추가합니다.
- 기능 추가 후 `서버 역할 선택` 창에서 `다음(N)`을 클릭하여 넘어갑니다.

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Set-up/4.png =80%x80%)
- `WSUS` 메뉴의 `콘텐츠` 탭으로 이돌하여 업데이트 파일을 저장할 위치를 지정합니다.

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Set-up/5.png =80%x80%)
- `웹 서버 역할`의 경우 기본 설정을 사용하기 때문에 `확인` 탭으로 바로 이동합니다.
- `필요한 경우 자동으로 대상 서버 다시 시작`을 체크하고 `설치(I)`를 클릭합니다.

### Windows Server Update Services 설정

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Set-up/6.png =40%x40%)
- 설치가 완료된 경우 검색을 통해 `Windows Server Update Services`를 확인하고 실행합니다.

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Set-up/7.png =60%x60%)
- 추가적인 사후 구성 및 설치가 진행되는데 이전 저장 위치와 동일한지 확인합니다.
- 만약 이전 설정과 문제가 없는 경우 `실행`을 클릭하여 사후 설치 작업을 진행합니다.

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Set-up/8.png =60%x60%)
- 사후 설치 작업이 완료될 시 `닫기`를 클릭하여 다음 창으로 넘어갑니다.


![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Set-up/9.png =80%x80%)
- 사후 설치가 완료된 후 `Windows Server Update Services` 구성 마법사가 열립니다.
- 여기서 현재 구성 상 문제가 되는 부분은 없는지 사전 체크 후 `다음(N)`을 클릭합니다.

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Set-up/10.png =80%x80%)
- `Microsoft Update 개선 프로그램` 참여 여부 체크 후 `다음(N)`을 클릭합니다.

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Set-up/11.png =80%x80%)
- `Microsoft` Update에서 파일을 동기화할 수 있도록 선택 후 `다음(N)`을 클릭합니다.
- 여기서 기존 구축된 WSUS 서버가 존재할 시 해당 서버를 동기화 대상으로 지정 가능합니다.

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Set-up/12.png =80%x80%)
- 동기화 진행 간 `Proxy 서버`를 통해 Update를 받아오도록 설정할 수 있습니다.
- 제가 테스트하는 환경은 공인망 통신이 가능한 위치에 존재하여 체크를 해제했습니다.

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Set-up/13.png =80%x80%)
- 이전 설정이 완료된 경우 연결 시작을 눌러 `업스트림 서버`에서 Update를 동기화합니다.
- 이 과정에서 `업스트림 서버`의 정보 및 Update 정보, 파일을 가져와 오랜 시간이 소요됩니다.

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Set-up/14.png =80%x80%)
- 정상적으로 `업스트림 서버`에서 Update가 동기화된 경우 `다음(N)`을 클릭합니다.

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Set-up/15.png =80%x80%)
- Update 진행 간에 가져올 언어 정보를 선택하고 `다음(N)`을 클릭합니다.

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Set-up/16.png =80%x80%)
- `WSUS`에서 받아올 Windows, SQL Server 등의 제품과 버전을 선택하고 `다음(N)`을 클릭합니다.

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Set-up/17.png =80%x80%)
- 어떤 등급에 해당되는 Update를 가져와서 제어할지를 선택하고 `다음(N)`을 클릭합니다.

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Set-up/18.png =80%x80%)
- 자동으로 Update를 가져오는 시점을 지정하고 `다음(N)`을 클릭합니다.

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Set-up/19.png =80%x80%)
- 설정이 완료된 후 자동으로 Update를 동기화할지 여부를 선택하고 `다음(N)`을 클릭합니다.
- 이후 설정 점검 후 정상적인 설정이라면 `마침(F)`를 클릭하여 구성을 종료합니다.

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Set-up/20.png =90%x90%)
- 동기화 상태를 확인하기 위해 `업데이트 서비스`에서 자신의 `컴퓨터명`을 선택합니다.

![](/assets/image/Post/Computing/OS/Windows/Windows-Server-Update-Services-Set-up/21.png =90%x90%)
- 동기화 진행 중 상태로 동기화가 완료될 때까지 대기하면 `WSUS` 구축이 완료됩니다.

---
포스팅을 읽어주셔서 감사합니다! :)
