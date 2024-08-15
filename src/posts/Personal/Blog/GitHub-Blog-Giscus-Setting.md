---
title: "[Blog] GitHub Blog Google Sitemap 설정 방법"

categories:
  - Blog
tags:
  - GitHub
  - Vuepress
  - Comment
  - Comments
  - Giscus
  - utterances

date: 2024-08-16

editLink: false
lastUpdated: true
---

## Giscus 소개
`Giscus`는 `GitHub` 정적 페이지와 여러 블로그 등에서 유용하게 사용되는 댓글 시스템이다.  
(관련 소스 코드가 궁금하다면 [여기](https://github.com/giscus/giscus) `Giscus`에서 제공되는 `Repository`를 확인해보자.)

### Giscus 적용 사유
사실 원래 사용하던 댓글 시스템은 `utterances`를 사용하고 있었고 불만은 딱히 없었다.

하지만 블로그를 `Jekyll` 기반에서 `Vuepress` 기반으로 변경하게 되면서 바꾸게 됐다.  
(블로그 변경에 대한 내용이 궁금하다면 [여기](/posts/Personal/Blog/Migrate-Jekyll-to-Vuepress.html)에서 내용을 한번 확인해보면 좋을 것 같다.)

### utterances와의 차이점
사실 둘 다 모두 `GitHub API`를 통해 제공되고 있기에 차이점이 엄청 크지는 않다.

가장 큰 차이는 `utterances`는 `Issue` 기반, `Giscus`는 `Discussions`를 사용한다.

## Gitcus 설정 방법
관련 가이드는 [여기](https://giscus.app/ko)에 내용이 잘 정리돼있으니 꼭 참고하여 진행하는 것을 추천한다.  
이 포스팅의 내용은 필자가 쓰고자 하는 기준으로 정리하는 것으로 차이가 있을 수 있다.

### GitHub에 Giscus App 설치
자신이 댓글을 적용하기를 원하는 `Repository`를 대상으로 [App을 설치](https://github.com/apps/giscus)합니다.

### 대상 Repository 내 Discussions 기능 활성화
자신이 설정한 `Repository`의 `Settings`로 이동하여 `Features`로 이동한 뒤  
`Discussions`의 체크박스가 비활성 상태라면 활성화하여 기능을 켜주도록 합니다.

![](/assets/image/Post/Blog/GitHub-Blog-Giscus-Setting/1.png =90%x90%)

정상적으로 활성화 됐다면 아래 사진과 같이 `Discussions` 메뉴가 접근 가능한 상태가 됩니다.

![](/assets/image/Post/Blog/GitHub-Blog-Giscus-Setting/2.png =90%x90%)

### Giscus 설정 추가
[Giscus 가이드](https://giscus.app/ko) 페이지에서 제공되는 설정 부분을 이용하여 나에게 맞는 설정을 만들도록 합니다.

- 저장소
  - 제 경우 `ahs0432/ahs0432.github.io`로 설정
  - 각자 설정을 원하시는 `Repository`를 지정해주시면 됩니다.
- 페이지 ↔️ Discussions 연결
  - 제 경우 `pathname`을 기반으로 설정
- Discussion 카테고리
  - 보안을 위해 `Announcements` 카테고리를 사용
- 기능
  - `메인 포스트에 반응 남기기` 외 모두 비활성화

상위와 같이 설정한 뒤 제시된 `Script` 코드 내에서 필요한 내용만 아래와 같이 사용하였습니다.  
(아래 코드 내용은 `Vuepress-theme-hope` 기준으로 사용되는 `TypeScript` 내용입니다.)

```typescript
    comment: {
      provider: "Giscus",
      repo: "{Repository}",
      repoId: "{RepoID}",
      category: "Announcements",
      categoryId: "{CategoryID}",
      mapping: "pathname",
      strict: false,
      reactionsEnabled: true,
    },
```

### 댓글 정상 동작 확인

아래와 같이 정상적으로 각 포스팅 하단에 댓글이 적용된 것을 확인할 수 있었다.

![](/assets/image/Post/Blog/GitHub-Blog-Giscus-Setting/3.png =90%x90%)


## utterances에서 댓글 이관
이관 방법은 어렵지 않지만 귀찮음(?) 동반하는 작업이므로 댓글 존속 여부를 잘 체크하는 것이 좋다.

1. 각 `Issue` 우측 하단에 `Convert to discussions`로 `Discussions`로 이관한다. 
- `Discussions`로 이관 간에 카테고리를 고르는 란이 있으니 댓글 카테고리를 잘 확인하자. 
2. 옮겨진 `Discussions`에 접근하여 변경된 `Path`로 `Title`을 변경해주도록 한다.
- 내 경우 전반을 변경하면서 `Path`가 많이 변경돼서 직접 `Edit`해주어 변경하였다.

사실 나는 댓글이 그렇게 많지 않아서 이관하는 데 어려움이 없었지만 많은 분은 스크립트를 만들자..

- - -

블로그 변경 간 댓글 시스템을 변경하는 과정을 포스팅으로 남기게 됐습니다!  
끝까지 포스팅 읽어주셔서 감사드리며, 혹시나 문제가 있다면 댓글로 남겨주세요! 😎