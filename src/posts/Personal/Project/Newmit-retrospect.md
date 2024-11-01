---
title:  "[Project] \"식자재 관리의 새로운 방법을 만나다, 뉴밋\" 프로젝트 회고"

categories:
  - Project
tags:
  - Project
  - 프로젝트
  - 인공지능
  - AI
  - 식자재 관리
  - 뉴밋
  - 객체인식
  - Object Detection
  - LLM
  - 대규모 언어 모델
  - HyperClova X
  - TensorFlow
  - Java
  - Python
  - SpringBoot
  - 대학

date: 2024-11-01

editLink: false
lastUpdated: true
---

::: info
📢 현재 포스팅은 2024년 1학기에 진행한 `팀 프로젝트`에 대한 회고입니다.  
프로젝트의 전체 기한과 제가 수행한 인프라, 인공지능 파트를 소개합니다.
:::

## 프로젝트 개요
보관 폐기, 먹지않은 음식물이 전체 버려지는 식자재 중 13%를 차지할 정도로  
높은 비율을 차지하고 있고 이러운 어려움을 겪는 사용자가 굉장히 많습니다.

식자재가 잘 소비되어 낭비되지 않도록 하는 것을 목표로 프로젝트를 기획했고,  
이를 위해 보관 위치나 소비 기한을 알려주거나 레시피를 제공하는 등의 기능으로  
사용자가 식자재를 보다 쉽게 관리하고 이를 넘어 사용할 수 있는 방안을 제공합니다.

### 프로젝트 참여자
- [강찬](https://github.com/ahs0432) (`Product Manager`)
  > `Image` 데이터 수집 및 가공  
  > `Object Detection` 모델 학습  
  > `LLM` 모델 `Prompt Engineering`  
  > `Cloud Infra` 아키텍처링 및 구축  
  > 팀원 및 프로젝트 일정 조율  
  > 서류 작성 및 제출
- [은영환](https://github.com/yheun03) (`UI/UX Design & Publishing`)
  > `UI/UX` 디자인 작성  
  > `Publishing`을 `UI` 구현  
  > 서류 작성 및 보완  
  > 프로젝트에 대한 추가 아이디어 제안
- [이재용](https://github.com/iJaeDragon) (`Back-End`)
  > `Back-End` 및 `Web` 서비스 연동 개발  
  > `SpringBoot` 기반 서비스 개발  
  > `MySQL` 쿼리 설계 및 연동

## 아이디어 스케치
프로젝트 아이디어는 여러 가지가 존재하였고 최종 의견으로는 두 가지가 남았습니다.  
의견은 아래 두 가지로 상세하진 않지만 간단한 아이디어로는 아래와 같게 구성됩니다.

### 식자재 관리 플랫폼
- 프로젝트 개요
  - 식자재를 관리하는 플랫폼을 제공하여 식자재를 손쉽게 등록하고 이를 소비할 방법 제공
- 주요 기능
  - `객체인식`: 식자재 객체를 인식하고 구분하여 자동으로 내용을 저장
  - 냉장고: 자신만의 식자재 보관 그룹을 만들고 식자재에 대한 데이터 보관
  - 레시피: 자신의 레시피를 다른 사용자와 공유하고 식자재 별 레시피를 추천
    - 인공지능을 이용한 레시피 추천: `LLM`을 이용한 창의적인 레시피를 추천

### 뉴스 키워드 분석을 통한 실시간 순위
- 프로젝트 개요
  - 뉴스의 주요 키워드를 분석하고 최근 화두가 되고 있는 키워드와 숨겨진 키워드를 발견
- 주요 기능
  - 실시간 뉴스 키워드를 `워드클라우드`와 비슷한 형태로 제공
  - 주요 키워드를 이용한 실시간 화제 정보를 정리하여 페이지로 제공
  - 심각도가 높지만 실시간으로 화제가 되지 않고 있는 정보를 숨겨진 키워드로 제공

## 개발 기간
프로젝트 참여 인원이 모두 재직자이자 학생으로 적은 시간으로 참여하게 됐으며,  
실제 프로젝트 기한은 이보다 더 타이트하게 이뤄진 점 참고 부탁드리겠습니다.

- 총 기간: 2024.03.10 ~ 2024.06.04
  - 계획 수립: 2024.03 ~ 2024.03
  - UI/UX 개발/보완: 2024.04 ~ 2024.05
  - 이미지 데이터 수집: 2024.03 ~ 2024.04
  - 객체인식 모델 학습: 2024.04 ~ 2024.05
  - 백엔드 서비스 개발: 2024.05 ~ 2024.06
  - 프롬프트 엔지니어링: 2024.05 ~ 2024.06
  - 최종 발표: 2024.06.08

## 개발 스택
### UI/UX
#### 도구
![](https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![](https://img.shields.io/badge/photoshop-31A8FF?style=for-the-badge&logo=adobephotoshop&logoColor=white)
![](https://img.shields.io/badge/illustrator-FF9A00?style=for-the-badge&logo=adobeillustrator&logoColor=white)

#### 언어
![](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)
![](https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)

#### 프레임워크
![](https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![](https://img.shields.io/badge/materialdesign-757575?style=for-the-badge&logo=materialdesign&logoColor=white)
![](https://img.shields.io/badge/fontawesome-538DD7?style=for-the-badge&logo=fontawesome&logoColor=white)

### 백엔드
#### 도구
![](https://img.shields.io/badge/intellijidea-000000?style=for-the-badge&logo=intellijidea&logoColor=white)

#### 언어
![](https://img.shields.io/badge/openjdk17-000000?style=for-the-badge&logo=openjdk&logoColor=white)
![](https://img.shields.io/badge/springboot3-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)

### 인프라
#### 플랫폼
![](https://img.shields.io/badge/navercloud-03C75A?style=for-the-badge&logo=naver&logoColor=white)

#### OS
![](https://img.shields.io/badge/rockylinux-10B981?style=for-the-badge&logo=rockylinux&logoColor=white)

#### 컨테이너
![](https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

### 인공지능
#### 언어
![](https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white)

#### 프레임워크
![](https://img.shields.io/badge/tensorflow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)

#### LLM
![](https://img.shields.io/badge/Hyperclovax-03C75A?style=for-the-badge&logo=naver&logoColor=white)

## 구분 별 회고
### 객체인식
`객체인식`은 주요 기능이고, 처음 다뤄보는 분야이기에 러닝 커브가 존재했습니다.

최근에는 `YOLO`를 이용한 학습 모델을 구현하는 것이 높은 인식률을 보여줍니다.  
해당 프로젝트에서는 `TensorFlow`를 이용해 개념부터 이해하려고 노력했습니다.

`YOLO`의 경우 `PyTorch`를 기반으로 하기에 여기서는 모델 별 인식률을 확인하고  
결과에 의거하여 최적의 모델을 확인한 뒤 `모델 학습` 및 `Serving` 하였습니다.

#### 모델 선정
사전 학습 모델 선택을 위해 `TensorFlow`에서 제공 중인 [Model zoo](https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/tf2_detection_zoo.md)를 참고했습니다.  

또한 가용할 수 있는 자원이 많지 않기에 모델은 CPU 가동이 가능한가도 평가했습니다.  
이에 평가 기준은 적당한 학습 소요 시간과 점수, 동작 시간, CPU 동작 여부입니다.

|Index|Model name|Speed (ms)<br>(A100 GPU 기준)|COCO mAP|학습 소요 시간(Hour)<br>(RTX4090 기준)|CPU 동작 여부|
|:--:|--|:--:|:--:|:--:|:--:|
|1|SSD MobileNet V1 FPN 640x640|48|29.1|3.3|동작|
|2|SSD MobileNet V2 FPNLite 320x320|22|22.2|1.4|동작|
|3|SSD MobileNet V2 FPNLite 640x640|39|28.2|2.5|동작|
|4|SSD ResNet50 V1 FPN 640x640 (RetinaNet50)|46|34.3|9.3|일부 지연|
|5|Faster R-CNN ResNet50 V1 640x640|53|29.3|7|자원 부족|

표 상으로 가장 높은 성능을 보이는 것은 4번 모델이었지만 학습 소요 시간이 가장 길고,  
모델의 리소스 사용량이 높아 CPU 환경에서 다소 지연되고 문제가 있는 모습을 보였습니다.

선정이 가능한 CPU에서 정상적으로 동작되는 경량화된 모델은 1, 2, 3번 모델이었고,  
성능 기준으로 1번 모델, 학습 시간 기준으로는 2번 모델을 선택하는게 좋아보였습니다.

다만, 여러번 학습을 수행하여야 하기에 이에 중간 정도인 3번 모델을 대상 선정하였습니다.

#### 이미지 수집
이미지 수집은 모델이 내가 원하는 대상을 찾을 수 있도록 학습 시키기 위한 요소로  
처음 데이터를 수집할 때는 Google 검색을 통해 데이터를 수집하여 보관하였습니다.

너무 고된 노역이라는 생각이 들어 Python을 이용한 자동화 스크립트를 작성하게 됐고,  
아래와 같은 간단한 크롤링 스크립트를 통해 키워드 별 데이터를 수집할 수 있었습니다.

- 크롤링 함수 작성 (`Selenium` 이용)
```python
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time 
import urllib.request 
import os

def crawlImages(search, count, saveurl):
    download_list = []
    
    service = Service(executable_path=r'<크롬 드라이버 경로>')

    options = webdriver.ChromeOptions()
    options.headless = True
    
    options.add_argument("window-size=1920x1080")
    options.add_argument("--no-sandbox")
    options.add_argument("--headless")
    options.add_argument("--single-process")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("incognito")

    driver = webdriver.Chrome(service=service, options=options) 
    driver.get("https://www.google.co.kr/imghp?hl=ko&tab=wi&ogbl")
    driver.save_screenshot(f"{search}q1.png")
    elem = driver.find_element(By.NAME, "q") 
    elem.send_keys(search)

    elem.send_keys(Keys.RETURN)

    SCROLL_PAUSE_TIME = 1 
    last_height = driver.execute_script("return document.body.scrollHeight") 

    while True:  
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);") 
        time.sleep(SCROLL_PAUSE_TIME) 

        new_height = driver.execute_script("return document.body.scrollHeight") 
        driver.save_screenshot(f"{search}q2.png")

        if new_height == last_height: 
            try: 
                driver.find_element(By.CSS_SELECTOR, ".LZ4I").click()
            except:
                break

        last_height = new_height

    images = driver.find_elements(By.CSS_SELECTOR, ".Q4LuWd")

    now_count = 1
    i = 0

    while True:
        if len(images)-1 < i:
            print(len(images), i)
            print(search, "검색어에 대한 결과가 부족합니다.")
            break
        
        try: 
            images[i].click() # 이미지 클릭
            time.sleep(1)

            imgUrl = driver.find_element(By.CSS_SELECTOR, ".iPVvYb").get_attribute("src")
            print(imgUrl)
            if ".jpg" in imgUrl:
                if imgUrl in download_list:
                    i += 1
                    continue
                download_list.append(imgUrl)
                urllib.request.urlretrieve(imgUrl, saveurl + str(now_count) + ".jpg")    # 이미지 다운
                now_count += 1

        except:
            pass

        if now_count == count+1:
            break

        i += 1
        
    with open(saveurl + "download_list.txt","w+") as f:
        f.write('\n'.join(download_list))
    driver.close()

import os.path
from os import path
```

- 이미지 수집 및 저장
```python
searchs = [
    # [검색어, 개수, 저장 경로]
    ["채소", 100, ""],
]

for search in searchs:
    if not path.exists(search[2]):
        os.mkdir(search[2])
    print(search[0], "시작")
    crawlImages(search[0], search[1], search[2])
```

이렇게 총 59가지의 종류의 라벨에 대한 2,082개의 이미지를 수집할 수 있었습니다.

#### 이미지 라벨링
이미지 라벨링은 각 이미지 상 어떠한 부분을 무엇으로 구분할지 정답지를 주는 것으로,  
수집된 이미지에 어떠한 항목이 어떤 것인지에 대해 확인 후 작성하는 것을 수행해야합니다.

이 부분은 자동화가 어렵기에 [`LabelImg`](https://github.com/HumanSignal/labelImg)를 이용하여 아래와 같이 라벨링했습니다.  
![](/assets/image/Post/Personal/Newmit-retrospect/1.png  =90%x90%)

#### 모델 학습

### LLM


## 인프라 구축
인프라는 비용적인 부담이 있기에 자체적으로 보유 중인 크레딧이 존재하여  
`네이버 클라우드`를 이용하였고 `객체인식`은 `Docker`로 배포하였습니다.

