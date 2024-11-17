---
title:  "[Artificial Intelligence] 이전 가중치를 이용하는 모멘텀"

categories:
  - AI
tags:
  - AI
  - 인공지능
  - 적응적 학습률
  - Adaptive learning rate
  - AdaGrad
  - Adaptive Gradient
  - RMSProp
  - Root Mean Square Propagation
  - Optimizer
  - 확률적 경사하강법
  - SGD
  - 손실
  - Loss
  - 손실함수
  - Loss Function

date: 2024-11-15

editLink: false
lastUpdated: true
---

## 적응적 학습률(Adaptive learning rate)의 개념
`경사하강법`에서 소개한 내용을 토대로 확인 시 `𝜌(rho)`라 불리는 `학습률` 값의 경우  
`가중치`를 갱신하는 과정에서 동일한 값을 이용하여 수행된다는 것을 확인할 수 있습니다.

이렇게 동일한 값을 사용하는 것이 아닌 각 `매개변수` 별 다른 값을 이용하는 것이 고안됐고,  
이러한 방법을 `적응적 학습률(Adaptive learning rate)`이라 표현하고 있습니다.

