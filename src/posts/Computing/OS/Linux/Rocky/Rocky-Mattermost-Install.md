---
title:  "[Rocky] Mattermost 설치 방법" 

categories:
  - Rocky
tags:
  - Server
  - Rocky
  - RHEL
  - Mattermost
  - Slack
  - Self-hosted
  - Chat
  - 채팅
  - 프로젝트
  - WebHook
  - MySQL
  - 오픈소스
  - OpenSource

date: 2024-10-27

editLink: false
lastUpdated: true
---

## 테스트 환경
### Server
- Rocky 8.8
- Mattermost 9.3.0

## 참고 사항
### Mattermost 이란?
`Mattermost`는 여러 `Slack`과 같은 형태의 채팅 및 프로젝트 관리 프로그램입니다.  

차이점은 `Slack`의 경우 라이선스를 기반으로 `SaaS` 형태로 서비스 사용이 필요하지만,  
`Mattermost`의 경우 자체 호스팅을 통해 오픈소스 형태로 서비스 사용이 가능합니다.

현재 국내 기업 중 `Samsung`에서 일부 도입하여 사용 중인 것으로 알려져있습니다.

### 사용 방안
- `Slack`의 대안으로 사내 자체 메신저 등의 형태로 프로젝트에 도입 가능합니다.

### 참고 자료
- [Mattermost RHEL 8 설치](https://docs.mattermost.com/install/install-rhel-8.html)
- [Mattermost MySQL 설정](https://docs.mattermost.com/install/prepare-mattermost-mysql-database.html)

## 설치 및 설정 과정
### Mattermost 설치
서버 내에 `Mattermost` 관련 소스 코드가 담긴 압축 파일을 다운로드 합니다.
```bash
$ cd /usr/local/src/
$ wget https://releases.mattermost.com/9.3.0/mattermost-9.3.0-linux-amd64.tar.gz
```

대상 압축 파일을 해제한 뒤 `/opt/` 경로 하위로 파일을 이관합니다.
```bash
$ tar -xvzf mattermost*.gz
$ sudo mv mattermost /opt
```

`/opt/mattermost/data` 경로를 생성합니다.
```bash
$ sudo mkdir /opt/mattermost/data
```

`mattermost` 계정을 생성하고 `/opt/mattermost` 경로에 대한 권한을 부여합니다.
```bash
$ sudo useradd --system --user-group mattermost
$ sudo chown -R mattermost:mattermost /opt/mattermost
$ sudo chmod -R g+w /opt/mattermost
```

서비스 등록을 위해 서비스 파일을 생성하고 내용을 작성합니다.
```bash
$ sudo vim /lib/systemd/system/mattermost.service
```
```bash
[Unit]
Description=Mattermost
After=network.target

[Service]
Type=notify
ExecStart=/opt/mattermost/bin/mattermost
TimeoutStartSec=3600
KillMode=mixed
Restart=always
RestartSec=10
WorkingDirectory=/opt/mattermost
User=mattermost
Group=mattermost
LimitNOFILE=49152

[Install]
WantedBy=multi-user.target
```

`mattermost` 서비스가 자동으로 실행될 수 있도록 서비스 상 등록합니다.
```bash
$ systemctl enable mattermost
```

설정 파일을 수정하기 전에 `config.json` 파일을 백업합니다.
```bash
$ sudo cp /opt/mattermost/config/config.json /opt/mattermost/config/config.defaults.json
```

### MySQL 설치
`dnf`를 이용하여 `mysql-server` 패키지를 설치합니다.
```bash
$ dnf install -y mysql-server
```

`mysqld`를 서비스 상 등록하고 실행합니다.
```bash
$ systemctl enable --now mysqld
```

`MySQL`에 접근하여 `User` 및 `Database`를 생성합니다.
```bash
$ mysql -u root
```
```sql
> CREATE DATABASE mattermost;
> CREATE USER mmuser IDENTIFIED BY '<password>';
> GRANT ALL ON mattermost.* TO mmuser;
```

`MySQL` 관련 설정을 `Mattermost`의 `config.json` 파일 내 `Database` 관련 내용을 변경합니다.
```bash
$ vim /opt/mattermost/config/config.json
```
```bash
"SqlSettings": {
        "DriverName": "mysql",
        "DataSource": "mmuser:<password>@tcp(127.0.0.1:3306)/mattermost?charset=utf8mb4,utf8\u0026writeTimeout=30s",
```

### Mattermost 시작 및 연결
`Mattermost`를 실행합니다.
```bash
$ systemctl start mattermost
```

정상적으로 `8065` 포트가 기동됐는지 확인합니다.
```bash
$ netstat -nlpt | grep 8065
tcp6       0      0 :::8065                 :::*                    LISTEN      35555/mattermost
```

대상 서비스 포트에 접근하여 `회원가입` 후 사용합니다.

![](/assets/image/Post/Computing/OS/Linux/Rocky/Rocky-Mattermost-Install/1.png "회원가입 페이지" =90%x90%)

- - -

가이드가 도움이 되셨길 바랍니다!  
끝까지 포스팅을 읽어주셔서 감사드립니다. 😎