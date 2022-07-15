---
title:  "[Windows] Windows Server 원격 데스크톱 로그 확인" 

categories:
  - Windows
tags:
  - Server
  - Windows
  - Remote Desktop
  - Logs

toc: true
toc_sticky: true

date: 2019-01-29
last_modified_at: 2019-01-29
---

## 테스트 환경
- Windows Server 2016 Standard
  
## 사용 용도
- 외부 환경에서 자신의 컴퓨터나 서버와 같은 환경에 접근해야하는 경우가 종종 생기곤 합니다.  
이때 원격 데스크톱을 허용하게 되는데 이을 통해 어떤 IP가 접근했는지 확인할 수 있습니다.
  
## 확인 방법
### 이벤트 뷰어를 통한 원격 데스크톱 로그 확인

![image](https://blog.false.kr/assets/image/Post/Windows/Windows-Server-RDP-Log-Check/1.png){: width="45%" height="45%"}{: .align-center}
* 실행 창(`Windows` + `R`)을 열고 실행창에 `eventvwr`를 입력하여 이벤트 뷰어를 열어줍니다.

![image](https://blog.false.kr/assets/image/Post/Windows/Windows-Server-RDP-Log-Check/2.png){: width="90%" height="90%"}{: .align-center}
* 정상적으로 이벤트 뷰어가 열리면 아래와 사진과 같이 Windows 및 프로그램 로그를 확인할 수 있습니다.

![image](https://blog.false.kr/assets/image/Post/Windows/Windows-Server-RDP-Log-Check/3.png){: width="90%" height="90%"}{: .align-center}
* 뷰어 상 아래 경로에 접근할 시 사진처럼 접속 및 원격 데스크톱 특정 이벤트 발생을 확인할 수 있습니다.
  * `응용 프로그램 및 서비스 로그 > Microsoft > Windows > TerminalServices-LocalSessionManager > Operational`

---
포스팅을 읽어주셔서 감사합니다! :)
