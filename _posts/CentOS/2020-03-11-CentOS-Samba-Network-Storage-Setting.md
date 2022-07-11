---
title:  "[CentOS] Samba를 이용한 Network Storage 환경 구축" 

categories:
  - CentOS
tags:
  - Server
  - CentOS
  - Samba
  - NFS
  - CIFS

toc: true
toc_sticky: true

date: 2020-03-11
last_modified_at: 2020-03-11
---

## 테스트 환경
### Samba Server
- CentOS Linux release 7.6.1810 (Core)
- samba-4.8.3-4.el7.x86_64

### Client PC
- Windows 10 Pro 64bit

## 설치 및 설정 과정
### CentOS yum 업데이트 및 버전에 맞는 repo 설치
```bash
$ yum update –y
$ yum clean all
$ yum install –y epel-release
$ yum update –y
```
- 위 과정을 통해 `Samba`를 설치할 환경을 구성합니다.

### 패키지 설치
```bash
$ yum install -y samba
```
- `yum` 명령어를 이용하여 `Samba` 패키지를 설치합니다.

### 계정 생성 및 공유 폴더 권한 설정
```bash
$ smbpasswd -a [Account]
New SMB password: [Password]
Retype new SMB password: [Password]
Failed to add entry for user [Account].
```
- `Samba`에서 사용할 계정을 `smbpasswd` 명령어를 사용하여 생성합니다.
- 생성 과정에서 대상 계정이 존재하지 않는 경우 상위와 같이 실패됩니다.
  
```bash
$ useradd [Account]
```
- 만약 계정이 없어 실패할 시 유저 계정을 상위와 같이 생성 후 진행합니다.

```bash
$ smbpasswd -a [Account]
New SMB password: [Password]
Retype new SMB password: [Password]
Added user [Account].
```
- 계정이 생성됐거나 기존에 계정이 생성된 경우 위와 같이 정상 추가됩니다.

```bash
$ chmod [Permission] [Directory]
# ex) chmod 777 /home
```
- 자신이 사용하고자하는 공유 디렉토리 권한을 설정해줍니다.
- `Samba`에서 사용할 권한이므로 적절하게 설정하는 것이 좋습니다.
- (여기선 모든 권한을 부여하는 조건으로 777로 진행하였습니다.)

### smb.conf 파일 수정 및 서비스 등록/시작
```bash
$ cd /etc/samba
$ vim smb.conf
```
```bash
[share]               # 공유 폴더명을 지정합니다.
comment = share       # 코멘트
path = /home          # 공유 디렉토리의 경로를 설정합니다.
public = no           # guest 접속 허용 여부를 확인합니다.
writable = yes        # 쓰기 여부를 확인합니다.
printable = no        # 프린터 사용 여부를 확인합니다.
write list = root     # 접속할 계정을 선택합니다.
                      # 만약 여러 계정인 경우 띄어쓰기로 구분합니다.​
create mask = 0777    # 생성 권한을 선택합니다.
directory mask = 0777 # 디렉토리 권한을 선택합니다.
```
- `Samba`의 설정 경로로 이동하여 대상 파일을 열어줍니다.
- 대상 공유 폴더 명칭과 대상 경로 및 권한 등 설정을 기입합니다.
- 이외 더 상세한 설정은 [설정 매뉴얼](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) 를 참고 부탁드립니다.

```bash
$ firewall-cmd --permanent --zone=public --add-service-samba
```
- 방화벽 설정에 맞게 설정을 추가하여 `Samba` 통신이 가능하도록 합니다.

> __참고사항__
>- 기본적으로 `ISP`에서 `SMB` 프로토콜 취약성으로 인한 차단 정책이 존재합니다.  
> 이로 인해 외부 방화벽 설정이 이뤄지더라도 외부 통신이 불가할 수 있습니다.  
> 가능하더라도 취약 사항으로 인해 공인망에서의 사용은 권장하지는 않습니다.

```bash
$ systemctl enable smb
$ systemctl start smb
```
- `Samba` 서비스를 자동으로 시작되도록 등록하고 실행합니다.    


## Windows OS 환경에서 Samba 접속
### 접속 대상 Samba 공유 폴더 접근 방법
- 실행 창(`Windows` + `R`)을 열고 실행창에 `\\[Samba Server IP]`를 입력합니다.  

![image](https://blog.false.kr/assets/image/Post/CentOS/CentOS-Samba-Network-Storage-Setting/1.png){: width="50%" height="50%"}{: .align-center}

- 정상적으로 통신된다면 출력되는 로그인 팝업에 설정한 계정/패스워드를 입력합니다.  

![image](https://blog.false.kr/assets/image/Post/CentOS/CentOS-Samba-Network-Storage-Setting/2.png){: width="50%" height="50%"}{: .align-center}

- 정상적으로 로그인된 경우 아래 사진과 같이 공유 폴더가 노출됩니다.

![image](https://blog.false.kr/assets/image/Post/CentOS/CentOS-Samba-Network-Storage-Setting/3.png){: width="90%" height="90%"}{: .align-center}

### Office 군(Word, Excel 등) 동일 파일 다중 오픈 처리 확인
> PC 두 대를 동일한 공유 폴더에 연결하여 동일한 파일을 열었을 때의 테스트입니다.  
> Office 군의 경우 파일이 열려있을 경우 다른 사용자가 접근하지 못하도록 제한합니다.  
> Samba도 NFS, CIFS를 이용한 공유 폴더이기 때문에 동일한 효과를 보이는지 확인합니다.  

- 확인을 위해 공유 폴더 내에 `text.xlsx` 명칭의 파일을 생성하였습니다.

![image](https://blog.false.kr/assets/image/Post/CentOS/CentOS-Samba-Network-Storage-Setting/4.png){: width="90%" height="90%"}{: .align-center}

- 1번 PC에서 `text.xlsx` 파일을 열었고 정상적으로 열리는 것이 확인됩니다.

![image](https://blog.false.kr/assets/image/Post/CentOS/CentOS-Samba-Network-Storage-Setting/5.png){: width="90%" height="90%"}{: .align-center}

- 2번 PC에서 `text.xlsx` 파일을 열었을 때에는 사진과 같이 제한되는 것이 확인됩니다.

![image](https://blog.false.kr/assets/image/Post/CentOS/CentOS-Samba-Network-Storage-Setting/6.png){: width="90%" height="90%"}{: .align-center}

이를 통해 Office 군에서 제공하는 동일 파일 편집 제한 기능이 정상 사용되는 것이 확인됩니다.

---
  
긴 포스팅을 읽어주셔서 감사합니다! :D
