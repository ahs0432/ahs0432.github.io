---
title:  "[Project] \"시간대 별 지하철 승하차 예측\" 프로젝트 회고"

categories:
  - Project
tags:
  - Project
  - 프로젝트
  - 인공지능
  - AI
  - 빅데이터
  - Big Data
  - Regression
  - Random Forest
  - 지하철
  - 승객
  - 예측

date: 2025-01-01

editLink: false
lastUpdated: true
---

::: info
📢 현재 포스팅은 2024년 2학기에 진행한 `개인 프로젝트`에 대한 회고입니다.
:::

## 🎨 프로젝트 개요
저는 `클라우드 서비스`를 제공하는 회사에 근무 중이며 비용에 대한 이슈를 자주 접하게 됩니다.  

가끔 생각나는 내용으로 `비용의 추이`를 미리 예측할 수 있다면 굉장히 좋을텐데라는 고안을 하였는데,  
이런 비용 예측 내용을 `차트` 형태로 만들어 실제 비용과 비교해보면 어떨까라는 생각도 하게 됐습니다.

`딥러닝`에 대해 공부하고 있는 입장으로 어떻게 구현할까란 고민을 하였고 `프로젝트`를 기획했습니다.

## ⌛ 개발 기간
빠르게 `프로젝트`를 수행하고 마무리하기 위해서 기간은 `학습` 시간까지 포함하여 짧게 잡아보았습니다.
- 총 기간: 2024.11.10 ~ 2024.11.20 (약 10일)

## 💻 기술 스택
### 🔧 언어
<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="" loading="lazy" photo-swipe="" style="cursor: zoom-in;">

### 🦴 라이브러리
<img src="https://img.shields.io/badge/Meta_prophet-0467DF?style=for-the-badge&logo=meta&logoColor=white" alt="" loading="lazy" photo-swipe="" style="cursor: zoom-in;">
<img src="https://img.shields.io/badge/pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" alt="" loading="lazy" photo-swipe="" style="cursor: zoom-in;">
<img src="https://img.shields.io/badge/scikitlearn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white" alt="" loading="lazy" photo-swipe="" style="cursor: zoom-in;">
<img src="https://img.shields.io/badge/Tensorflow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="" loading="lazy" photo-swipe="" style="cursor: zoom-in;">

## 🍨 데이터셋 수집 및 분석
`데이터셋`의 경우 비용이다보니 민감 자료로 사내에서 사용하는 비용을 토대로 진행했습니다.  
공개할 수는 없지만 `데이터베이스`에 저장된 내용을 `CSV` 형태로 변환하여 이용하였습니다.

기간으로는 2024.05~2024.10 기간 내의 비용 데이터를 수집하여 학습 간 사용했습니다.

### ✨ 데이터 속성 확인
`데이터셋`의 속성은 `전처리` 과정을 1차적으로 진행한 이후 아래와 같이 남아 이용하였습니다.
|속성 명|설명|
|:--:|:--:|
|BillDate|수집 일자|
|DemandTypeCodeName|상품 대분류|
|DemandTypeCodeDetailName|상품 소분류|
|UseAmount|사용 비용|
|DemandAmount|청구 비용|
|TotalDiscountAmount|할인 비용|

## 🪢 Meta Prophet을 이용한 분석
우선 `Meta` 사에서 제공하고 있는 `Prophet`이라고 하는 시계열 데이터 예측을 이용해보았습니다.  


새해 첫 날 첫 포스팅이네요! 다들 새해 복 많이 받으시고 즐거운 한 해 되세요!  
정말 긴 포스팅 끝까지 읽어주셔서 감사드립니다. 😎