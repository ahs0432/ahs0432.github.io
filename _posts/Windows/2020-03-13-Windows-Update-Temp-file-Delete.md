---
title:  "[Windows] Windows 업데이트 임시 파일 삭제" 

categories:
  - Windows
tags:
  - Server
  - Windows
  - Update
  - Temp file

toc: true
toc_sticky: true

date: 2020-03-13
last_modified_at: 2020-03-13
---

## 테스트 환경
- Windows Server 2012 R2
  
## 사용 용도
- `Windows` 환경에서 `Update` 진행 간 발생되는 무한 동기화 현상 해소에 사용됩니다.
- `Update`로 인해 갑작스럽게 증가된 용량 중 임시 파일이 가지고 있던 용량을 확보합니다.
  
## Windows Update 임시 파일 삭제
### 현재 상황

![image](https://blog.false.kr/assets/image/Post/Windows/Windows-Update-Temp-file-Delete/1.png){: width="90%" height="90%"}{: .align-center}
- `Windows Update` 상태가 최신이 아님에도 신규 업데이트를 받아오지 못하는 현상이 확인된다고 가정합니다.

### Windows Update 관련 프로세스 종료
  
![image](https://blog.false.kr/assets/image/Post/Windows/Windows-Update-Temp-file-Delete/2.png){: width="45%" height="45%"}{: .align-center}
- 실행창(`Windows` + `R`)을 열고 실행창에 `services.msc`를 입력하여 서비스 창을 열어줍니다.

![image](https://blog.false.kr/assets/image/Post/Windows/Windows-Update-Temp-file-Delete/3.png){: width="90%" height="90%"}{: .align-center}
- 서비스에서 `Windows Update`와 관련된 3개의 서비스를 중지 처리 합니다.
  - 중지 처리의 경우 대상 서비스 더블 클릭 후 표기되는 팝업에서 중지 클릭 시 가능합니다.
> 1. Background Intelligent Transfer Service
> 2. Cryptographic Services
> 3. Windows Updates

![image](https://blog.false.kr/assets/image/Post/Windows/Windows-Update-Temp-file-Delete/4.png){: width="90%" height="90%"}{: .align-center}
- `C:\Windows` 경로로 이동하여 `SoftwareDistribution` 폴더를 삭제합니다.

![image](https://blog.false.kr/assets/image/Post/Windows/Windows-Update-Temp-file-Delete/5.png){: width="90%" height="90%"}{: .align-center}
- `C:\Windows\System32` 경로에 `catroot2` 폴더를 삭제합니다.
- 해당 폴더 삭제 후 다시 `services.msc` 창으로 돌아와 중지하였던 서비스를 시작합니다.

![image](https://blog.false.kr/assets/image/Post/Windows/Windows-Update-Temp-file-Delete/6.png){: width="60%" height="60%"}{: .align-center}
- 이후 업데이트를 추가 확인할 시 확인하지 못했던 업데이트가 불러와지는 것을 확인할 수 있습니다.

---
포스팅을 읽어주셔서 감사합니다! :D
