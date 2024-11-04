import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o,a as c}from"./app-B-t1FVRK.js";const a="/assets/image/Post/Computing/AI/Gradient-descent/1.png",d="/assets/image/Post/Computing/AI/Gradient-descent/2.png",n="/assets/image/Post/Computing/AI/Gradient-descent/3.png",i="/assets/image/Post/Computing/AI/Gradient-descent/4.png",r="/assets/image/Post/Computing/AI/Gradient-descent/5.png",s="/assets/image/Post/Computing/AI/Gradient-descent/6.png",p={},g=c('<h2 id="경사하강법-gradient-descent" tabindex="-1"><a class="header-anchor" href="#경사하강법-gradient-descent"><span>경사하강법 (Gradient Descent)?</span></a></h2><p>기계학습 간 최적화 함수의 대표 격인 <code>경사하강법</code>에 대해서 간단하게 소개하고자 합니다.</p><h3 id="기계학습의-간단한-동작-과정" tabindex="-1"><a class="header-anchor" href="#기계학습의-간단한-동작-과정"><span>기계학습의 간단한 동작 과정</span></a></h3><p><code>인공지능</code>은 <code>규칙 기반</code>에서 <code>기계학습</code>을 이용한 <code>데이터 기반</code>까지 지속 발전 중에 있습니다.<br><code>기계학습</code>에서는 기계가 주어진 <code>데이터</code>의 <code>관계</code>를 찾아 <code>규칙</code>을 만드는 것을 목적으로 합니다.</p><p><code>데이터</code>의 관계를 찾는 과정에서 <code>손실</code>(실제 데이터와의 <code>오차</code>)이 최소인 값을 찾는 것이 목표로<br><code>손실</code>은 <code>손실 함수</code>를 이용하여 <code>오차</code>를 계산하고 이를 보완할 값을 찾아 제공합니다.</p><p>보편적으로 <code>손실</code> 계산에서 가장 많이 사용하는 방식은 <code>MSE</code>(Mean Squared Error)입니다.<br><code>MSE</code>는 직역 시 평균 제곱 오차로 <code>오차</code>의 <code>제곱</code>을 모두 더한 값의 <code>평균</code>을 의미합니다.</p><p><code>MSE</code>를 수식으로 표현할 경우 아래와 같이 수식이 작성되는 것을 확인할 수 있습니다.<br><code>M</code>은 전체 개수이며, <code>ŷ</code>는 실제 정답 값, <code>y</code>는 예측한 값을 의미하고 있습니다.</p><figure><img src="'+a+'" alt="" width="50%" height="50%" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>해당 기준의 손실함수를 그래프로 표현할 경우 아래와 같이 표현이 가능합니다.<br> 우리가 찾아야할 값은 <code>오차</code>가 가장 최소가 되는 구간 임을 알 수 있습니다.</p><figure><img src="'+d+'" alt="" width="70%" height="70%" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>이러한 값을 <code>가중치</code>에 반영하여 <code>최적화</code>하는 과정에서 <code>경사하강법</code>을 사용하게 됩니다.</p><h3 id="경사하강법의-동작-과정" tabindex="-1"><a class="header-anchor" href="#경사하강법의-동작-과정"><span>경사하강법의 동작 과정</span></a></h3><p>그래프에서 보면 결국 가장 낮은 값, 즉 최소 <code>오차</code>를 찾아가는 것을 알 수 있습니다.<br> 이러한 특성을 이용해 <code>경사하강법</code>은 그래프의 <code>기울기</code>에 따른 이동을 수행하게 됩니다.</p><figure><img src="'+n+'" alt="" width="70%" height="70%" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>이러한 <code>경사하강법</code>의 학습 규칙을 수식 표현 시 아래와 같이 표현이 가능합니다.</p><figure><img src="'+i+'" alt="" width="50%" height="50%" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>하나의 매개변수를 기반으로 <code>손실함수 J</code>를 <code>wᵢ</code>의 값으로 <code>편미분</code>한 값을 도출하고<br><code>𝜌(rho)</code> 또는 <code>p</code>로 표현하는 <code>학습률</code>을 곱하여 값을 하강할 경사의 값을 조절한 뒤,<br> 최종적으로 <code>wᵢ</code> 가중치 값의 <code>오차</code>를 반영하는 형태로 수식이 전개되고 있습니다.</p><h4 id="학습률-learning-rate" tabindex="-1"><a class="header-anchor" href="#학습률-learning-rate"><span>학습률 (Learning rate)</span></a></h4><p><code>학습률</code>은 <code>오차</code> 값을 기울기에 따라 반영 시 너무 크거나 낮은 값이 이동하는 것을 방지하기 위해<br> 특정 값을 곱하여 학습 간 <code>최적해</code> 방향으로의 접근 값을 줄이는 행위를 의미하고 있습니다.</p><p>일반적으로 <code>0.001</code>, <code>0.0001</code>과 같은 값이 쓰이며 해당 값을 찾는 것도 중요한 요소입니다.</p><figure><img src="'+r+'" alt="" width="90%" height="90%" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>위 사진은 <code>학습률</code> 설정에 따른 <code>최적해</code> 방향으로의 이동 정도를 나타낸 것입니다.</p><p>너무 낮을 경우 학습 반영의 시간이 오래걸리고 <code>Local Minimum</code>에 빠질 수 있으며,<br> 반대로 너무 클 경우 <code>발산</code>을 하여 정확한 값을 찾지 못하는 현상이 발생될 수 있습니다.</p><p>적절한 값을 찾을 경우 속도도 안정적으로 <code>최적해</code>에 도달하는 것을 볼 수 있습니다.</p><h4 id="경사하강법의-문제점" tabindex="-1"><a class="header-anchor" href="#경사하강법의-문제점"><span>경사하강법의 문제점</span></a></h4><p><code>경사하강법</code>은 기본적인 구조 상으로는 좋을 수 있지만 크나큰 문제가 있습니다.</p><p>위에서 언급된 <code>Global Minimum</code>이 아닌 <code>Local Minimum</code>을 찾을 수 있다는 점 때문입니다.</p><p>둘의 차이는 가장 지대가 낮은 구간을 찾았는지 찾지 못했는지의 차이로 볼 수 있으며,<br><code>Global Minimum</code>은 가장 낮은 지대를, <code>Local Minimum</code>은 낮은 지대 중 하나를 의미합니다.</p><figure><img src="'+s+'" alt="" width="70%" height="70%" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><code>경사하강법</code>의 기본 이론으로는 이를 극복하기 어렵기에 추가 고안된 다른 방법을 사용합니다.<br> 다른 방법 중 <code>Stochastic Gradient Descent</code> 방법은 다음 포스팅을 통해 소개하겠습니다.</p><hr><p>끝까지 읽어주셔서 감사드립니다. 😎</p>',32),l=[g];function m(h,u){return o(),t("div",null,l)}const y=e(p,[["render",m],["__file","Gradient-descent.html.vue"]]),_=JSON.parse('{"path":"/posts/Computing/AI/Gradient-descent.html","title":"[Artificial Intelligence] 경사하강법에 대해 알아보자","lang":"ko-KR","frontmatter":{"title":"[Artificial Intelligence] 경사하강법에 대해 알아보자","categories":["AI"],"tags":["AI","인공지능","경사하강법","Gradient Descent","손실함수","손실","오차","편미분","최적해","Global Minimum","Local Minimum"],"date":"2024-11-04T00:00:00.000Z","editLink":false,"lastUpdated":true,"description":"경사하강법 (Gradient Descent)? 기계학습 간 최적화 함수의 대표 격인 경사하강법에 대해서 간단하게 소개하고자 합니다. 기계학습의 간단한 동작 과정 인공지능은 규칙 기반에서 기계학습을 이용한 데이터 기반까지 지속 발전 중에 있습니다. 기계학습에서는 기계가 주어진 데이터의 관계를 찾아 규칙을 만드는 것을 ...","head":[["meta",{"property":"og:url","content":"https://blog.false.kr/posts/Computing/AI/Gradient-descent.html"}],["meta",{"property":"og:site_name","content":"찬스의 개발 블로그 : Chance Devlog"}],["meta",{"property":"og:title","content":"[Artificial Intelligence] 경사하강법에 대해 알아보자"}],["meta",{"property":"og:description","content":"경사하강법 (Gradient Descent)? 기계학습 간 최적화 함수의 대표 격인 경사하강법에 대해서 간단하게 소개하고자 합니다. 기계학습의 간단한 동작 과정 인공지능은 규칙 기반에서 기계학습을 이용한 데이터 기반까지 지속 발전 중에 있습니다. 기계학습에서는 기계가 주어진 데이터의 관계를 찾아 규칙을 만드는 것을 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog.false.kr/assets/image/Post/Computing/AI/Gradient-descent/1.png  =50%x50%"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-11-04T06:47:19.000Z"}],["meta",{"property":"article:author","content":"Chance"}],["meta",{"property":"article:tag","content":"AI"}],["meta",{"property":"article:tag","content":"인공지능"}],["meta",{"property":"article:tag","content":"경사하강법"}],["meta",{"property":"article:tag","content":"Gradient Descent"}],["meta",{"property":"article:tag","content":"손실함수"}],["meta",{"property":"article:tag","content":"손실"}],["meta",{"property":"article:tag","content":"오차"}],["meta",{"property":"article:tag","content":"편미분"}],["meta",{"property":"article:tag","content":"최적해"}],["meta",{"property":"article:tag","content":"Global Minimum"}],["meta",{"property":"article:tag","content":"Local Minimum"}],["meta",{"property":"article:published_time","content":"2024-11-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-04T06:47:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"[Artificial Intelligence] 경사하강법에 대해 알아보자\\",\\"image\\":[\\"https://blog.false.kr/assets/image/Post/Computing/AI/Gradient-descent/1.png  =50%x50%\\",\\"https://blog.false.kr/assets/image/Post/Computing/AI/Gradient-descent/2.png  =70%x70%\\",\\"https://blog.false.kr/assets/image/Post/Computing/AI/Gradient-descent/3.png  =70%x70%\\",\\"https://blog.false.kr/assets/image/Post/Computing/AI/Gradient-descent/4.png  =50%x50%\\",\\"https://blog.false.kr/assets/image/Post/Computing/AI/Gradient-descent/5.png  =90%x90%\\",\\"https://blog.false.kr/assets/image/Post/Computing/AI/Gradient-descent/6.png  =70%x70%\\"],\\"datePublished\\":\\"2024-11-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-04T06:47:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Chance\\",\\"url\\":\\"https://blog.false.kr\\",\\"email\\":\\"chance0432@naver.com\\"}]}"]]},"headers":[{"level":2,"title":"경사하강법 (Gradient Descent)?","slug":"경사하강법-gradient-descent","link":"#경사하강법-gradient-descent","children":[{"level":3,"title":"기계학습의 간단한 동작 과정","slug":"기계학습의-간단한-동작-과정","link":"#기계학습의-간단한-동작-과정","children":[]},{"level":3,"title":"경사하강법의 동작 과정","slug":"경사하강법의-동작-과정","link":"#경사하강법의-동작-과정","children":[]}]}],"git":{"createdTime":1730701988000,"updatedTime":1730702839000,"contributors":[{"name":"Chance","email":"ahs0432@naver.com","commits":5}]},"readingTime":{"minutes":0.35,"words":104},"filePathRelative":"posts/Computing/AI/Gradient-descent.md","localizedDate":"2024년 11월 4일","excerpt":"<h2>경사하강법 (Gradient Descent)?</h2>\\n<p>기계학습 간 최적화 함수의 대표 격인 <code>경사하강법</code>에 대해서 간단하게 소개하고자 합니다.</p>\\n<h3>기계학습의 간단한 동작 과정</h3>\\n<p><code>인공지능</code>은 <code>규칙 기반</code>에서 <code>기계학습</code>을 이용한 <code>데이터 기반</code>까지 지속 발전 중에 있습니다.<br>\\n<code>기계학습</code>에서는 기계가 주어진 <code>데이터</code>의 <code>관계</code>를 찾아 <code>규칙</code>을 만드는 것을 목적으로 합니다.</p>","autoDesc":true}');export{y as comp,_ as data};
