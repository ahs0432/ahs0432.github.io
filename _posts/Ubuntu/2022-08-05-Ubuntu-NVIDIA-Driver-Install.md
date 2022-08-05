---
title:  "[Ubuntu] NVIDIA Driver & CUDA 설치 방법" 

categories:
  - Ubuntu
tags:
  - Server
  - Ubuntu
  - GPU
  - Driver
  - CUDA

toc: true
toc_sticky: true

date: 2022-08-05
last_modified_at: 2022-08-05
---

## 테스트 환경
- KT Cloud DX-M1
- Ubuntu 18.04 64bit
- 16vCore 80GB / **NVIDIA Tesla A100**

## 진행 배경
- 2021년 12월 외부 클라우드 교육 이후 GPU 자원에 대한 지원이 예정됐고  
KT Cloud를 통해 사용한 **NVIDIA Tesla A100** 자원의 드라이버 설치 방법이다.<br>  
당시 KT Cloud에서 **NVIDIA Tesla A100** 상품을 공식적으로 제공하지 않았기에  
서버 내에 `NVIDIA Driver`와 `CUDA`를 사용자가 확인 후 설치를 진행해야 했었다.<br>  
현재는 이후에 출시된 **NVIDIA Quadro RTX4000** 자원도 별도 OS를 제공하므로,  
당시 미제공되던 자원을 따로 공급받아 사용하여 발생된 점이란 건 참고해야한다.

## 참고 사항
- 기존에는 SSH Password를 기반으로 제공되던 것이 DX-M1에선 KeyPair로 제공된다.
- NVIDIA에서 제공되는 GPU에 대한 드라이버이므로 타사 GPU와는 차이가 존재한다.

## 설치 및 진행 과정

### GPU 설치 여부 확인
```bash
$ lshw -C display
*-display:1 UNCLAIMED 
       description: 3D controller 
       product: NVIDIA Corporation 
       vendor: NVIDIA Corporation 
       physical id: 5 
       bus info: pci@0000:00:05.0 
       version: a1 
       width: 64 bits 
       clock: 33MHz 
       capabilities: pm cap_list 
       configuration: latency=0 
       resources: iomemory:200-1ff iomemory:300-2ff memory:fd000000-fdffffff memory:2000000000-2fffffffff memory:3000000000-3001ffffff
```
- 먼저 `lshw` 명령어를 통해 Display에 대한 장치가 설치됐는지 확인한다.
- 정상적으로 설치된 경우 상위 명시된 것과 같이 GPU에 대한 정보가 명시된다.

### Ubuntu 패키지 업데이트 및 업그레이드
```bash
$ apt-mark hold linux-image-generic linux-headers-generic
$ apt-get update
$ apt-get upgrade
```
- 다수의 클라우드 시스템이 그렇듯 Kernel Upgrade 시 문제가 발생될 수 있다.  
그렇기 때문에 대상에서 Kernel은 제외하고 OS 내 패키지를 Upgrade 한다.

### NVIDIA Driver 설치
```bash
$ apt-get install ubuntu-drivers-common

$ ubuntu-drivers devices 
== /sys/devices/pci0000:00/0000:00:05.0 == 
modalias : pci:v000010DEd000020F1sv000010DEsd0000145Fbc03sc02i00 
vendor   : NVIDIA Corporation 
driver   : nvidia-driver-450-server - distro non-free 
driver   : nvidia-driver-460 - distro non-free 
driver   : nvidia-driver-470 - distro non-free recommended 
driver   : nvidia-driver-460-server - distro non-free 
driver   : nvidia-driver-495 - distro non-free 
driver   : nvidia-driver-470-server - distro non-free 
driver   : xserver-xorg-video-nouveau - distro free builtin 

$ ubuntu-derivers autoinstall 
# recommended(추천)하는 Driver를 권장 설치.

$ apt-get install nvidia-driver-470
# recommended(추천)하는 Driver를 수동 설치
# 당시 A100 GPU의 경우 autoinstall 시 문제가 발생되어 수동 방식으로 진행
```
- `ubuntu-drivers-common` 패키지를 설치하고 현재 인식된 Device의 Driver를 검색한다.
- 권장 버전을 설치하는데 명령어에 따라 오류가 발생될 수 있으니 확인 후 설치한다.

### CUDA 설치
```bash
$ wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/x86_64/cuda-ubuntu1804.pin
$ sudo mv cuda-ubuntu1804.pin /etc/apt/preferences.d/cuda-repository-pin-600

$ wget https://developer.download.nvidia.com/compute/cuda/11.4.1/local_installers/cuda-repo-ubuntu1804-11-4-local_11.4.1-470.57.02-1_amd64.deb
$ sudo dpkg -i cuda-repo-ubuntu1804-11-4-local_11.4.1-470.57.02-1_amd64.deb
$ sudo apt-key add /var/cuda-repo-ubuntu1804-11-4-local/7fa2af80.pub

$ sudo apt-get update
$ sudo apt-get install cuda
```
- CUDA ToolKit을 그래픽카드 호환, 드라이버 버전 호환을 확인한 뒤 설치한다.
  - 사전에 그래픽 카드와 호환되는 ToolKit 버전을 확인한 뒤 진행한다.
  - [NVIDIA Driver 확인 페이지](https://www.nvidia.com/download/index.aspx?lang=en-us)에서 대상 GPU를 검색한 뒤 CUDA Version을 확인한다.
  - [ToolKit Download Archive](https://developer.nvidia.com/cuda-toolkit-archive)에서 NVIDIA Driver Version와의 호환 확인 후 설치한다.
- 당시 **NVIDIA Tesla A100** 자원에 권장 드라이버 기준 `CUDA 11.4.1`을 설치했다.

```bash
$ nvidia-smi

Fri Dec  3 09:56:23 2021        
+-----------------------------------------------------------------------------+ 
| NVIDIA-SMI 470.86       Driver Version: 470.86       CUDA Version: 11.4     | 
|-------------------------------+----------------------+----------------------+ 
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC | 
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. | 
|                               |                      |               MIG M. | 
|===============================+======================+======================| 
|   0  NVIDIA A100-PCI...  On   | 00000000:00:05.0 Off |                    0 | 
| N/A   32C    P0    36W / 250W |      0MiB / 40536MiB |      0%      Default | 
|                               |                      |             Disabled | 
+-------------------------------+----------------------+----------------------+ 
                                                                                
+-----------------------------------------------------------------------------+ 
| Processes:                                                                  | 
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory | 
|        ID   ID                                                   Usage      | 
|=============================================================================| 
|  No running processes found                                                 | 
+-----------------------------------------------------------------------------+
```
- 정상 설치가 완료됐다면 `nvidia-smi` 명령어로 GPU 자원을 확인한다.
- 확인 시 Driver와 CUDA 모두 정상적으로 인식되어 동작하는 것이 확인된다.

### 개인 설정
```bash
$ nvidia-smi --auto-boost-default=0 
# Auto Boost Default 설정을 활성화로 변경합니다.

$ nvidia-smi -pm 1 
# Persistence-M을 활성화 합니다. 

$ nvidia-smi -ac 1215,1410 
# 클럭 동작 속도를 설정합니다.
```
- 개인 설정에 차이가 존재하겠지만 동작 속도 등을 원하는대로 변경한다.

## GPU-Burn을 이용한 스트레스 체크
> GPU-Burn은 GPU에 강제로 부하를 주어 쓰로틀링 발생 등을 확인하는 프로그램이다.  
> GPU에 부하가 올라가는지 확인하기 위해 2개의 세션을 접속한 상태로 진행한다.

### GPU-Burn 설치
```bash
$ git clone https://github.com/wilicc/gpu-burn
$ cd gpu-burn 
$ make
```
- Git에 존재하는 GPU-Burn 소스 파일을 다운받고 컴파일해주면 설치가 완료된다.

### GPU-Burn 체크 진행
```bash
# 1번 세션에서 진행
$ ./gpu_burn
```
- GPU-Burn을 1번 세션에서 진행하면 10초간 GPU에 부하를 일으키게 된다.

```bash
# 2번 세션에서 진행
$ nvidia-smi
 
Fri Dec  3 10:37:23 2021        
+-----------------------------------------------------------------------------+ 
| NVIDIA-SMI 470.86       Driver Version: 470.86       CUDA Version: 11.4     | 
|-------------------------------+----------------------+----------------------+ 
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC | 
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. | 
|                               |                      |               MIG M. | 
|===============================+======================+======================| 
|   0  NVIDIA A100-PCI...  On   | 00000000:00:05.0 Off |                    0 | 
| N/A   49C    P0   252W / 250W |  36550MiB / 40536MiB |    100%      Default | 
|                               |                      |             Disabled | 
+-------------------------------+----------------------+----------------------+ 
                                                                                
+-----------------------------------------------------------------------------+ 
| Processes:                                                                  | 
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory | 
|        ID   ID                                                   Usage      | 
|=============================================================================| 
|    0   N/A  N/A     19228      C   ./gpu_burn                      36547MiB | 
+-----------------------------------------------------------------------------+
```
- 이때 2번 세션에서 확인 시 정상적으로 부하가 들어오고 있는 것이 확인된다.

---

이번 GPU에 대한 드라이버 설치 과정에서 정~말 많은 시행 착오를 겪었다.  

제공받는 데에도 문제가 많았고 드라이버 설치까지 하는 과정에서도 그렇고  
오랜만에 새벽까지 야근을 할 정도로 생각보다 고생을 많이했던 작업이다.

나같이 삽질을 엄청한, 또 고생하는 사람들을 위해서 포스팅을 작성해본다.

Notion이나 Evernote에 운영 관련 매뉴얼이 꽤나 많이 쌓여있는 상태라서  
공개가 가능한 자료에 한해서 이렇게 포스팅으로 작성하려고 생각 중이다.

끝까지 포스팅을 읽어주셔서 감사합니다.