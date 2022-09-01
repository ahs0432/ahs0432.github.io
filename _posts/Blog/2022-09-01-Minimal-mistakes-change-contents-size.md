---
title:  "[Blog] Minimal mistakes 콘텐츠 영역 크기 변경"

categories:
  - Blog
tags:
  - Jekyll
  - Minimal mistakes
  - Contents area
  - change size

toc: true
toc_sticky: true

date: 2022-09-01
last_modified_at: 2022-09-01
---

## 🤔 고민
Minimal mistakes Jekyll 테마가 많이 사용되는 것 같아 선택하여 사용 중에  
크나 큰 고민이 생겼는데 네이버 블로그보다 콘텐츠 영역이 작다는 것이었다.

콘텐츠가 꽉꽉 차있는 느낌도 있지만 많은 내용을 담을 수 없기에 단점이었다.  
여러 블로그를 참고하여 변경해보았지만 이 방법이 깔끔한거 같아 포스팅한다.

## 😅 먼저 사용했던 방법
처음 사용했던 방법은 사이드바의 사이즈를 줄이는 방식으로 진행하게 됐다.  

`_sass/minimal-mistakes/_variables.scss`에 사이드바 관련 값을 변경했다.

```scss
/* _sass/minimal-mistakes/_variables.scss */

// right sidebar width

//$right-sidebar-width-narrow: 200px !default;
//$right-sidebar-width: 300px !default;
//$right-sidebar-width-wide: 400px !default;

$right-sidebar-width-narrow: 150px !default;
$right-sidebar-width: 200px !default;
$right-sidebar-width-wide: 250px !default;
```

이렇게 변경하고 나니 콘텐츠 영역은 잘 늘었지만.. 네비게이터가 깨지게 되더라..  
깨지는 것은 줄이는 과정에서 콘텐츠 영역이 너무 차지하게 되면 깨지는 것 같았다.

## 🔧 변경한 방법
나는 콘텐츠 영역도 넓기 바랬지만 네이게이터 부분도 깨지기 않기를 원하고 있었다.  
확인해보니 콘텐츠가 반응형으로 작아지게 되는 최소 사이즈를 변경하면 가능했다.

해당 값은 `x-large`로 지정된 변수에 값을 변경하면 됐고 기본 1200px로 설정됐다.

```scss
/* _sass/minimal-mistakes/_variables.scss */

//$x-large: 1280px !default;
$x-large: 1500px !default;
```

이를 1500px 정도로 설정을 변경하니 깨지는 부분 없이 콘텐츠 영역이 확장됐다.

이전보다 더 자연스럽고 콘텐츠 영역이 줄어들 때도 확실히 깔끔해진게 확인됐다.

---

Minimal mistakes 테마를 사용하시는 분들이 많은 만큼 참고가 됐으면 좋겠다.  

2022년의 3분기 마지막 달이 밝았다. 올해는 일에 정신이 없어 한게 없는거 같은데,  
올해도 잘 마무리하고 내 커리어나 이런 부분이 이전보다 발전됐으면 하는 생각이다.

끝까지 포스팅을 읽어주셔서 감사드리며, 틀린 내용이 있다면 댓글 부탁드립니다. 😎