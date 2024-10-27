---
title:  "[Rocky] GitLab-CE 설치 방법" 

categories:
  - Rocky
tags:
  - Server
  - Rocky
  - RHEL
  - GitLab
  - Community Edition
  - CE
  - Self-hosted
  - 셀프 호스팅
  - 깃
  - 형상관리

date: 2024-10-27

editLink: false
lastUpdated: true
---

## 테스트 환경
### Server
- Rocky 8.8
- GitLab-CE 16.7.0

## 참고 사항
### GitLab 이란?
`GitLab`은 `GitHub`과 같이 `Git` 저장소를 제공하는 솔루션이라 볼 수 있습니다.  
대표적으로 `SaaS` 형태로 제공되는 서비스와 `자체 호스팅`이 가능한 서비스가 있습니다.  

`GitLab CE`는 무료 라이선스로 자체 호스팅이 가능하도록 서비스를 제공하고 있으며,  
해당 서비스 내에서는 `GitLab CI`와 같은 여러 개발 도구도 같이 포함되어 제공됩니다.

### 사용 방안
- `GitLab`에서 제공하는 `Community Edition`을 이용한 `Self-host` 형상 관리 구축을 할 수 있습니다.
- `Private Git`을 구축하여 자체적인 `형상 관리` 서비스 관리가 가능합니다.

## 설치 및 설정 과정
### GitLab 설치
`GitLab` 설치 환경을 만들기 위해 의존성 패키지를 설치합니다.
```bash
$ dnf install -y curl policycoreutils-python-utils openssh-server perl
$ dnf install -y postfix
```

`Postfix`의 경우 `GitLab`의 이메일 발송 기능 이용 간 사용되니 서비스를 시작하고 등록합니다.
```bash
$ systemctl enable --now postfix
```

`GitLab`에서 제공하는 스크립트를 이용하여 `GitLab` 설치 환경을 구성합니다.
```bash
$ curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh | sudo bash
```

환경 구성이 완료됐다면 `GitLab-CE` 패키지를 DNF를 이용하여 패키지 설치합니다.
```bash
$ dnf install -y gitlab-ce
```

`GitLab` 서비스 설치 전 접근할 때 사용할 호스트 이름과 일부 설정을 변경합니다.
```bash
$ vim /etc/gitlab/gitlab.rb
```
- 호스트 이름 변경
```ruby
external_url 'http://<Hostname>'
# 도메인을 갖고 있다면 외부에서 연결할 도메인을 아니라면 IP를 <Hostname>에 작성합니다.
```

- 데이터 경로 변경
  - 변경 전
```ruby
# git_data_dirs({
#   "default" => {
#     "path" => "/mnt/nfs-01/git-data"
#    }
# })
```
  - 변경 후
```ruby
git_data_dirs({
   "default" => {
     "path" => "/data/git-data"
    }
})
```

설정 파일에 반영한 데이터 경로를 생성합니다.
```bash
$ mkdir -p /data/git-data
```

변경 설정을 모두 적용하였다면 `gitlab-ctl`을 이용한 설정 동기화를 수행합니다.
- 추후 `gitlab.rb` 파일의 추가 갱신이 생길 경우에도 이용합니다.
```bash
$ gitlab-ctl reconfigure
```

정상적으로 작업이 완료됐다면 지정한 도메인으로 접근하여 로그인 페이지를 확인합니다.

![](/assets/image/Post/Computing/OS/Linux/Rocky/Rocky-Gitlab-CE-Install/1.png "로그인 페이지" =90%x90%)

로그인의 경우 `root` 계정으로 수행하며 서버 내 발급된 `임시 비밀번호`를 이용하여 로그인합니다.
```bash
$ cat /etc/gitlab/initial_root_password 

# WARNING: This value is valid only in the following conditions
#          1. If provided manually (either via `GITLAB_ROOT_PASSWORD` environment variable or via `gitlab_rails['initial_root_password']` setting in `gitlab.rb`, it was provided before database was seeded for the first time (usually, the first reconfigure run).
#          2. Password hasn't been changed manually, either via UI or via command line.
#
#          If the password shown here doesn't work, you must reset the admin password following https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.

Password: <패스워드>

# NOTE: This file will be automatically deleted in the first reconfigure run after 24 hours.
```

![](/assets/image/Post/Computing/OS/Linux/Rocky/Rocky-Gitlab-CE-Install/2.png "메인 페이지" =90%x90%)

### GitLab 사용자 비밀번호 변경
> 버전에 따른 메뉴 형태는 차이가 있을 수 있어 이부분 유의 부탁드립니다!

우측 상단에 위치한 사용자 아이콘을 클릭하여 드롭다운 메뉴를 오픈합니다.
- 사용자 프로필 등의 설정은 `Edit profile`을 이용합니다.

![](/assets/image/Post/Computing/OS/Linux/Rocky/Rocky-Gitlab-CE-Install/3.png "드롭다운 메뉴" =50%x50%)

현재 단계에서는 간단하게 패스워드 변경만 수행할 것으로 좌측 메뉴에서 `Password`를 선택합니다.

![](/assets/image/Post/Computing/OS/Linux/Rocky/Rocky-Gitlab-CE-Install/4.png "드롭다운 메뉴" =50%x50%)

비밀번호 변경 페이지로 접근됐다면 패스워드를 변경합니다.

![](/assets/image/Post/Computing/OS/Linux/Rocky/Rocky-Gitlab-CE-Install/5.png "드롭다운 메뉴" =50%x50%)

### GitLab 관련 명령

서비스 시작 명령어
```bash
$ gitlab-ctl start
```

서비스 정지 명령어
```bash
$ gitlab-ctl stop
```

서비스 재시작 명령어
```bash
$ gitlab-ctl restart
```

서비스 재설정 명령어
```bash
$ gitlab-ctl reconfigure
```

- - -

가이드가 도움이 되셨길 바랍니다!  
끝까지 포스팅을 읽어주셔서 감사드립니다. 😎