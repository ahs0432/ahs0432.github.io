---
title:  "[Windows] Windows Server 원격 데스크톱 설정" 

categories:
  - Windows
tags:
  - Server
  - Windows
  - Remote Desktop

toc: true
toc_sticky: true

date: 2019-01-29
last_modified_at: 2019-01-29
---

## 테스트 환경
- Windows Server 2016 Standard
  
## 사용 용도
- 외부 환경에서 자신의 컴퓨터나 서버와 같은 환경에 접근해야하는 경우가 종종 생기곤 합니다.  
이때를 대비하여 원격 접근 설정인 `Remote Desktop`(원격 데스크톱) 설정 방법을 소개합니다.
  
## 설정 및 접속 과정
### 서버 관리자 상 원격 데스크톱 설정 활성화
1. 서버 관리자를 열어 좌측 로컬 서버란에 접근하였을 때 속성 상에 원격 데스크톱이 사용 상태인지 확인합니다.
- 만약 사용 상태가 아닌 경우 해당 상태를 사용으로 변경하여 원격 데스크톱을 이용할 수 있도록 변경합니다.

![image](https://blog.false.kr/assets/image/Post/Windows/Windows-Server-RDP-Setting/1.png){: width="90%" height="90%"}{: .align-center}
  
2. 제어판을 열어 시스템 및 보안을 클릭합니다.
- 만약 아래와 같이 표기되지 않는 경우 우측 상단에 `보기 기준`을 `범주`로 변경합니다.

![image](https://blog.false.kr/assets/image/Post/Windows/Windows-Server-RDP-Setting/2.png){: width="90%" height="90%"}{: .align-center}

3. 현재 페이지에서 시스템을 클릭합니다.

![image](https://blog.false.kr/assets/image/Post/Windows/Windows-Server-RDP-Setting/3.png){: width="90%" height="90%"}{: .align-center}

4. 좌측 상단에 위치한 원격 설정을 클릭합니다.

![image](https://blog.false.kr/assets/image/Post/Windows/Windows-Server-RDP-Setting/4.png){: width="90%" height="90%"}{: .align-center}

5. 시스템 속성에서 `이 컴퓨터에 대한 원격 연결 허용(L)`을 체크하고 `확인`을 눌러 저장합니다.

![image](https://blog.false.kr/assets/image/Post/Windows/Windows-Server-RDP-Setting/5.png){: .align-center}

6. 시작 창에서 `firewall` 또는 `방화벽`을 검색하여 `고급 보안이 포함된 Windows Defender 방화벽`을 열어줍니다.
- 인바운드 규칙을 선택한 뒤 `원격 데스크톱 - 사용자 모드`로 명시된 규칙을 각각 클릭하여 열어줍니다.

![image](https://blog.false.kr/assets/image/Post/Windows/Windows-Server-RDP-Setting/6.png){: width="90%" height="90%"}{: .align-center}

7. 대상 정책 설정 창에 같이 규칙에 대해 `사용함(E)` 설정 및 작업에 `연결 허용(L)`로 설정 후 `확인`을 눌러 저장합니다.

![image](https://blog.false.kr/assets/image/Post/Windows/Windows-Server-RDP-Setting/7.png){: .align-center}
![image](https://blog.false.kr/assets/image/Post/Windows/Windows-Server-RDP-Setting/8.png){: .align-center}

---
포스팅을 읽어주셔서 감사합니다! :)
