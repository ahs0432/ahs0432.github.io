---
title:  "[Artificial Intelligence] 합성곱 신경망의 구조와 예시"

categories:
  - AI
tags:
  - AI
  - 인공지능
  - 합성곱
  - Convolution
  - 합성곱 신경망
  - Convolution Neural Network
  - 신경망
  - Neural Network
  - 레이어
  - 층
  - Layer
  - 커널
  - Kernel
  - 필터
  - Filter
  - 특징 맵
  - Feature Map
  - 패딩
  - Padding
  - 스트라이드
  - Stride
  - 채널
  - Channel
  - 이미지 인식
  - 객체 인식
  - Object Detection
  - LeNet-5
  - GoogLeNet

date: 2024-11-25

order: 302
editLink: false
lastUpdated: true
---
## 📚 합성곱 신경망의 구조
[이전 포스팅](/posts/Computing/AI/Convolution-Neural-Network-Intro)에서는 `합성곱 신경망`을 구성하기 위한 기초 사항에 대해서 알아보았습니다.  

`합성곱 신경망`도 마찬가지로 `깊은 신경망`으로 구성하고 있어 구조 파악이 필요합니다.  
만약 여러 `층`으로 구성된다면 각 층의 `특징 맵`의 `크기`와 `채널`을 미리 파악해야 합니다.

마치 빌딩 블록처럼 `신경망`을 쌓아가고 어떠한 형식으로 쌓아가는지 확인해보겠습니다.

### 📕 구조 확인
![alt text](image.png)

`합성곱 신경망`은 위와 같이 간단하게 쌓아놓은 예제로 상위와 같이 구성될 수 있습니다.  
해당 구성은 간단한 표현을 위한 구성도이나 확인해보면 일정한 특징 확인이 가능합니다.

우선 단일 `커널`의 면의 수, 즉 `채널`은 `입력 텐서(데이터)`의 `채널`과 동일하다는 것과  
`커널`의 개수(`k'`)가 다음 층의 `특징 맵`의 `채널`과 동일하다는 것이 확인되고 있습니다.

이런 특징은 `합성곱 신경망`에서 지속 사용되는 개념이니 미리 이해하는 것이 좋습니다.

## LeNet-5

- - -

끝까지 읽어주셔서 감사드립니다. 😎