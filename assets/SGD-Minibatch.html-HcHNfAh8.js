import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c,o,a as t}from"./app-DGa22xKU.js";const d="/assets/image/Post/Computing/AI/SGD-Minibatch/1.png",a="/assets/image/Post/Computing/AI/SGD-Minibatch/2.png",i="/assets/image/Post/Computing/AI/SGD-Minibatch/3.png",n={},r=t('<div class="hint-container info"><p class="hint-container-title">정보</p><p>📢 2024년 2학기 <code>딥러닝</code> 교과 과정 중 미니 배치의 동작 구조에 대해 궁금해졌습니다.<br> 조사한 내용을 작성한 것으로 틀린 내용이나 추가 내용이 있으면 댓글 부탁드립니다!</p></div><h2 id="📉-확률적-경사하강법-stochastic-gradient-descent" tabindex="-1"><a class="header-anchor" href="#📉-확률적-경사하강법-stochastic-gradient-descent"><span>📉 확률적 경사하강법 (Stochastic Gradient Descent)</span></a></h2><p><a href="/posts/Computing/AI/Gradient-descent">이전 포스팅</a>에서 <code>경사하강법</code>에 대해 알아봤고 문제점에 대해서도 알아봤습니다.</p><p>이를 보완한 <code>확률적(Stochastic) 경사하강법</code>은 무엇이고 어떤 개념이 있는지 알아봅니다.</p><p>우선 이를 알기 위해 <code>경사하강법</code>에서 사용하는 <code>가중치 갱신</code>에 대한 모드를 알아봐야 합니다.<br> 대표적인 모드로는 <code>배치(Batch)</code>, <code>패턴(Pattern)</code>, <code>미니 배치(Mini-Batch)</code>가 존재합니다.</p><h3 id="📚-배치-모드-batch" tabindex="-1"><a class="header-anchor" href="#📚-배치-모드-batch"><span>📚 배치 모드 (Batch)</span></a></h3><p><code>IT 업계</code>에 관심있으신 분들은 <code>Batch</code>라는 단어를 들어봤을 것이라 생각합니다.<br><code>Batch</code>는 영어를 직역하면 <code>일괄</code>이라는 뜻으로 <code>일괄 처리 작업</code>을 일컫고 있습니다.</p><p><code>Batch</code> 작업은 보고서 생성과 같이 <code>정해진 시간에 한 번에 처리되는 일</code>을 의미합니다.<br><code>경사하강법</code>에서의 <code>배치 모드</code>도 다르지 않으며 동작되는 원리는 아래와 같이 진행됩니다</p><p><code>기계학습</code>에서는 전체 <code>학습 데이터</code>를 <code>한 번</code> 전방/역전파 계산한 것을 <code>Epoch</code>라 칭합니다.<br><code>Epoch</code>(에포크)는 <code>세대</code>를 뜻하고 <code>1세대에 대한 학습이 완료</code>됐다는 것도 동일 표현입니다.</p><p><code>기계학습</code>은 <code>데이터</code>의 관계 파악 및 <code>가중치 갱신</code>을 위해 여러 번의 <code>Epoch</code>를 수행하게됩니다.<br> (예를 들어 &quot;<code>Epoch</code>를 100번 수행했다&quot;는 것은 100번의 <code>반복 학습</code>을 수행했다는 것입니다.)</p><p>여기서 <code>가중치 갱신</code>을 <code>배치 모드</code>에서는 <code>1 Epoch</code>에 한 번만 전체적으로 반영하게 됩니다.</p><p><code>배치 모드</code>는 <code>시각화</code>하여 표현할 경우 <code>가중치</code>를 아래와 같이 갱신하게 됩니다.</p><figure><img src="'+d+'" alt="" width="70%" height="70%" tabindex="0" loading="lazy"><figcaption>배치 모드</figcaption></figure><h4 id="🤔-배치-모드의-특징" tabindex="-1"><a class="header-anchor" href="#🤔-배치-모드의-특징"><span>🤔 배치 모드의 특징</span></a></h4><p><code>배치 모드</code>를 사용했을 때의 특징은 대표적으로 3가지가 있다고 볼 수 있습니다.</p><ol><li><code>전체 데이터</code>를 이용하여 학습하기에 후술할 모드 중 <code>가장 갱신 횟수가 적다는 것</code></li><li><code>전체 데이터</code>에 대한 오차 등을 모두 갖고 있어야 하기에 <code>메모리 사용량이 높다는 것</code></li><li><code>전체 데이터</code>를 기반으로 변함없이 이용하기에 <code>발산</code>보다는 <code>수렴</code>하는 형태</li></ol><h4 id="😅-배치-모드의-문제점" tabindex="-1"><a class="header-anchor" href="#😅-배치-모드의-문제점"><span>😅 배치 모드의 문제점</span></a></h4><p>기본적으로 <code>경사하강법</code>의 방식이 <code>배치 모드</code>라고 이해해도 문제가 없을 것 같습니다.</p><ol><li><a href="/posts/Computing/AI/Gradient-descent">이전 포스팅</a>에서 서술한 것과 같이 <code>Local Minimum</code>으로 빠질 확률이 높다는 문제</li><li><code>가중치 갱신</code>이 적기에 정확도의 이슈가 발생될 수 있다는 문제 (가중치 학습의 속도 문제)</li><li><code>전체 데이터</code>가 큰 경우에는 <code>메모리 사용량</code>의 부담이 존재</li></ol><h3 id="🔖-패턴-모드-pattern" tabindex="-1"><a class="header-anchor" href="#🔖-패턴-모드-pattern"><span>🔖 패턴 모드 (Pattern)</span></a></h3><p><code>패턴 모드</code>는 각 <code>데이터</code>마다 <code>학습</code>을 진행한 이후 <code>가중치</code>를 갱신하는 방식입니다.<br><code>확률적 경사하강법</code>은 <code>패턴 모드</code> 자체 또는 <code>미니 배치</code>를 포함하여 표현하게 됩니다.</p><p>간단하게 말해 <code>전체 데이터</code> 하나하나에 대해 학습 간 <code>가중치</code>를 갱신하는 것입니다.<br> 이때 <code>데이터</code>의 순서를 <code>Epoch</code>마다 다르게 뒤섞어 <code>랜덤 샘플링</code>의 효과를 주게 됩니다.</p><p>이렇게 수행할 경우 <code>배치 모드</code>와 달리 데이터의 <code>손실</code> 등의 계산에 차이가 발생됩니다.</p><p>또한 <code>가중치 갱신</code> 횟수도 기존 <code>배치 모드</code>의 경우 <code>1 Epoch</code> 당 1회만 수행하였다면<br><code>패턴 모드</code>는 <code>1 Epoch</code> 당 <code>전체 데이터의 개수</code>만큼 <code>가중치 갱신</code>이 발생됩니다.</p><p><code>데이터</code>가 1,000개고, <code>Epoch</code>가 50번이라면 총 50,000번의 <code>가중치 갱신</code>이 발생됩니다.</p><p><code>패턴 모드</code>는 <code>시각화</code>하여 표현할 경우 <code>가중치</code>를 아래와 같이 갱신하게 됩니다.</p><figure><img src="'+a+'" alt="" width="70%" height="70%" tabindex="0" loading="lazy"><figcaption>패턴 모드</figcaption></figure><h4 id="🤔-패턴-모드의-특징" tabindex="-1"><a class="header-anchor" href="#🤔-패턴-모드의-특징"><span>🤔 패턴 모드의 특징</span></a></h4><p><code>패턴 모드</code>의 가장 큰 특징으로는 아래와 같은 3가지 사항이 존재합니다.</p><ol><li>적은 데이터로도 많은 <code>가중치 갱신</code>을 통한 학습 이점을 가져올 수 있습니다.</li><li><code>랜덤 샘플링</code> 효과로 <code>Local Minimum</code>에 빠질 확률을 줄일 수 있습니다.</li><li><code>데이터</code>마다 수행되므로 <code>가중치 갱신</code>의 메모리 부담과 연산량이 작습니다.</li></ol><h4 id="😅-패턴-모드의-문제점" tabindex="-1"><a class="header-anchor" href="#😅-패턴-모드의-문제점"><span>😅 패턴 모드의 문제점</span></a></h4><p>결국 <code>패턴 모드</code>는 <code>전체 데이터</code>에 대해 각각의 <code>가중치 갱신</code> 작업을 수행하게 됩니다.<br> 이로 인해 발생되는 <code>문제점</code>은 아래와 같고 최근에는 <code>미니 배치</code>를 사용하고 있습니다.</p><ol><li><code>가중치 갱신</code>의 부담은 적지만 <code>1 Epoch</code>의 소요 시간이 오래 걸립니다.</li><li><code>랜덤샘플링</code>으로 인한 <code>발산</code>으로 <code>Global Minimum</code>에 수렴하기는 어렵습니다.</li><li>1개의 <code>데이터</code>마다 <code>가중치 갱신</code>이 이뤄지므로 <code>병렬</code> 처리에 어려움이 있습니다.</li></ol><p>시간은 오래 소요되나 트렌드인 <code>병렬</code> 처리를 이용하기 어렵다는 점이 문제점으로 보입니다.</p><h3 id="🦾-미니-배치-mini-batch" tabindex="-1"><a class="header-anchor" href="#🦾-미니-배치-mini-batch"><span>🦾 미니 배치 (Mini-Batch)</span></a></h3><p><code>미니 배치</code>는 <code>배치 모드</code>와 <code>패턴 모드</code>의 장점을 받아들여 중간점에 있는 방식입니다.<br><code>미니배치 경사하강법</code>이라 칭하기도 하고 <code>확률적 경사하강법</code>에 포함하기도 합니다.</p><p><code>미니 배치</code>는 <code>데이터</code>를 일정 크기의 <code>부분 집합</code>으로 나눠 <code>학습</code> 후 <code>가중치</code>를 갱신합니다.</p><p><code>부분 집합</code>의 크기를 지정하는 매개변수를 <code>배치 크기(Batch size)</code>라 칭하고 있으며,<br> 데이터를 <code>부분 집합</code>으로 분할할 때 <code>랜덤 샘플링</code>을 적용하여 분할하게 됩니다.</p><p>예를 들어 <code>학습 데이터</code>가 1,000개 이고 <code>배치 크기</code> 매개변수를 100으로 지정한 경우<br><code>학습 데이터</code>를 100개씩 보유한 10개의 <code>배치(Batch)</code>를 이용하여 학습을 수행합니다.</p><p>10개의 <code>배치</code>는 <code>1 Epoch</code> 안에서 순차적으로 <code>학습</code> 후 <code>가중치 갱신</code> 작업을 수행합니다.<br> 이 경우 <code>1 Epoch</code> 안에서 10번의 <code>가중치 갱신</code>이 이뤄진 것을 확인할 수 있습니다.</p><p>이렇게 <code>가중치 갱신</code>을 수행하는 횟수를 <code>이터레이션(Iteration)</code>이라 칭합니다.</p><p><code>미니 배치</code>는 <code>시각화</code>하여 표현할 경우 <code>가중치</code>를 아래와 같이 갱신하게 됩니다.</p><figure><img src="'+i+'" alt="" width="70%" height="70%" tabindex="0" loading="lazy"><figcaption>미니 배치</figcaption></figure><h4 id="🤔-미니-배치의-특징" tabindex="-1"><a class="header-anchor" href="#🤔-미니-배치의-특징"><span>🤔 미니 배치의 특징</span></a></h4><p><code>미니 배치</code>의 특징으로는 아래와 같은 사항이 있다고 볼 수 있습니다.</p><ol><li><code>패턴 모드</code>를 <code>부분 집합</code> 단위로 수행하여 <code>배치 모드</code>와 중간점을 이룹니다.</li><li><code>패턴 모드</code>의 <code>발산</code>과 <code>시간</code> 부담을 줄이고 <code>집합</code> 별 <code>병렬</code> 처리가 가능합니다.</li><li><code>배치 모드</code>의 <code>정확성</code> 문제와 <code>메모리</code> 부담을 줄일 수 있다는 점입니다.</li></ol><h4 id="😅-미니-배치의-문제점" tabindex="-1"><a class="header-anchor" href="#😅-미니-배치의-문제점"><span>😅 미니 배치의 문제점</span></a></h4><p><code>미니 배치</code>도 문제점은 다수 존재하며 아래와 같은 문제가 있습니다.</p><ol><li><code>데이터</code>가 <code>배치 크기</code>에 맞지 않는 경우 마지막 <code>배치</code>의 영향력 상승</li><li><code>배치 크기</code>에 따른 학습 성능의 차이가 있기에 적당한 값을 찾는 것이 중요</li></ol><p>2번의 경우 결국 <code>배치 크기</code>가 너무 작은 경우 <code>패턴 모드</code>의 문제점을 일으키고<br> 반대로 너무 큰 경우에는 <code>배치 모드</code>의 문제점에 가까워진다는 것을 알 수 있습니다.</p><h3 id="😏-확률적이라는-표현을-사용하는-이유" tabindex="-1"><a class="header-anchor" href="#😏-확률적이라는-표현을-사용하는-이유"><span>😏 확률적이라는 표현을 사용하는 이유?</span></a></h3><p><code>확률적 경사하강법</code>은 결국 <code>패턴 모드</code> 자체 또는 <code>미니 배치</code>까지를 의미합니다.<br><code>확률적</code>이라는 표현은 각 모드에서의 <code>랜덤샘플링</code>이 적용됐다는 것에 있습니다.</p><p><code>랜덤샘플링</code>이 적용됐기에 <code>Local Minimum</code>을 피하는 데에 도움을 줄 수 있습니다.</p><h2 id="📜-용어-정리" tabindex="-1"><a class="header-anchor" href="#📜-용어-정리"><span>📜 용어 정리</span></a></h2><p><code>세대(Epoch)</code>: <code>기계학습</code>이 수행될 때 반복 학습의 <code>횟수</code>를 일컫는 말<br><code>배치 크기(Batch size)</code>: <code>미니 배치</code>에서 1개의 <code>부분 집합</code>에 포함될 <code>데이터</code>의 개수<br><code>이터레이션(Iteration)</code>: <code>배치 크기</code>로 나눠진 <code>부분 집합</code>의 개수 (or <code>가중치 갱신</code> 횟수)</p><hr><p>끝까지 읽어주셔서 감사드립니다. 😎</p>',57),p=[r];function s(l,h){return o(),c("div",null,p)}const b=e(n,[["render",s],["__file","SGD-Minibatch.html.vue"]]),f=JSON.parse('{"path":"/posts/Computing/AI/SGD-Minibatch.html","title":"[Artificial Intelligence] 확률적 경사하강법과 미니 배치","lang":"ko-KR","frontmatter":{"title":"[Artificial Intelligence] 확률적 경사하강법과 미니 배치","categories":["AI"],"tags":["AI","인공지능","경사하강법","Gradient Descent","확률적 경사하강법","SGD","Stochastic Gradient Descent","배치 모드","배치","Batch","Batch Gradient Descent","패턴 모드","패턴","Pattern","미니 배치","Mini-Batch","Mini-Batch Gradient Descent"],"date":"2024-11-04T00:00:00.000Z","order":201,"editLink":false,"lastUpdated":true,"description":"정보 📢 2024년 2학기 딥러닝 교과 과정 중 미니 배치의 동작 구조에 대해 궁금해졌습니다. 조사한 내용을 작성한 것으로 틀린 내용이나 추가 내용이 있으면 댓글 부탁드립니다! 📉 확률적 경사하강법 (Stochastic Gradient Descent) 이전 포스팅에서 경사하강법에 대해 알아봤고 문제점에 대해서도 ...","head":[["meta",{"property":"og:url","content":"https://blog.false.kr/posts/Computing/AI/SGD-Minibatch.html"}],["meta",{"property":"og:site_name","content":"찬스의 개발 블로그 : Chance Devlog"}],["meta",{"property":"og:title","content":"[Artificial Intelligence] 확률적 경사하강법과 미니 배치"}],["meta",{"property":"og:description","content":"정보 📢 2024년 2학기 딥러닝 교과 과정 중 미니 배치의 동작 구조에 대해 궁금해졌습니다. 조사한 내용을 작성한 것으로 틀린 내용이나 추가 내용이 있으면 댓글 부탁드립니다! 📉 확률적 경사하강법 (Stochastic Gradient Descent) 이전 포스팅에서 경사하강법에 대해 알아봤고 문제점에 대해서도 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog.false.kr/assets/image/Post/Computing/AI/SGD-Minibatch/1.png \\"배치 모드\\" =70%x70%"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-11-17T04:26:12.000Z"}],["meta",{"property":"article:author","content":"Chance"}],["meta",{"property":"article:tag","content":"AI"}],["meta",{"property":"article:tag","content":"인공지능"}],["meta",{"property":"article:tag","content":"경사하강법"}],["meta",{"property":"article:tag","content":"Gradient Descent"}],["meta",{"property":"article:tag","content":"확률적 경사하강법"}],["meta",{"property":"article:tag","content":"SGD"}],["meta",{"property":"article:tag","content":"Stochastic Gradient Descent"}],["meta",{"property":"article:tag","content":"배치 모드"}],["meta",{"property":"article:tag","content":"배치"}],["meta",{"property":"article:tag","content":"Batch"}],["meta",{"property":"article:tag","content":"Batch Gradient Descent"}],["meta",{"property":"article:tag","content":"패턴 모드"}],["meta",{"property":"article:tag","content":"패턴"}],["meta",{"property":"article:tag","content":"Pattern"}],["meta",{"property":"article:tag","content":"미니 배치"}],["meta",{"property":"article:tag","content":"Mini-Batch"}],["meta",{"property":"article:tag","content":"Mini-Batch Gradient Descent"}],["meta",{"property":"article:published_time","content":"2024-11-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-17T04:26:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"[Artificial Intelligence] 확률적 경사하강법과 미니 배치\\",\\"image\\":[\\"https://blog.false.kr/assets/image/Post/Computing/AI/SGD-Minibatch/1.png \\\\\\"배치 모드\\\\\\" =70%x70%\\",\\"https://blog.false.kr/assets/image/Post/Computing/AI/SGD-Minibatch/2.png \\\\\\"패턴 모드\\\\\\" =70%x70%\\",\\"https://blog.false.kr/assets/image/Post/Computing/AI/SGD-Minibatch/3.png \\\\\\"미니 배치\\\\\\" =70%x70%\\"],\\"datePublished\\":\\"2024-11-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-17T04:26:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Chance\\",\\"url\\":\\"https://blog.false.kr\\",\\"email\\":\\"chance0432@naver.com\\"}]}"]]},"headers":[{"level":2,"title":"📉 확률적 경사하강법 (Stochastic Gradient Descent)","slug":"📉-확률적-경사하강법-stochastic-gradient-descent","link":"#📉-확률적-경사하강법-stochastic-gradient-descent","children":[{"level":3,"title":"📚 배치 모드 (Batch)","slug":"📚-배치-모드-batch","link":"#📚-배치-모드-batch","children":[]},{"level":3,"title":"🔖 패턴 모드 (Pattern)","slug":"🔖-패턴-모드-pattern","link":"#🔖-패턴-모드-pattern","children":[]},{"level":3,"title":"🦾 미니 배치 (Mini-Batch)","slug":"🦾-미니-배치-mini-batch","link":"#🦾-미니-배치-mini-batch","children":[]},{"level":3,"title":"😏 확률적이라는 표현을 사용하는 이유?","slug":"😏-확률적이라는-표현을-사용하는-이유","link":"#😏-확률적이라는-표현을-사용하는-이유","children":[]}]},{"level":2,"title":"📜 용어 정리","slug":"📜-용어-정리","link":"#📜-용어-정리","children":[]}],"git":{"createdTime":1730718702000,"updatedTime":1731817572000,"contributors":[{"name":"Chance","email":"ahs0432@naver.com","commits":3},{"name":"ahs0432","email":"ahs0432@naver.com","commits":1}]},"readingTime":{"minutes":0.65,"words":196},"filePathRelative":"posts/Computing/AI/SGD-Minibatch.md","localizedDate":"2024년 11월 4일","excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">정보</p>\\n<p>📢 2024년 2학기 <code>딥러닝</code> 교과 과정 중 미니 배치의 동작 구조에 대해 궁금해졌습니다.<br>\\n조사한 내용을 작성한 것으로 틀린 내용이나 추가 내용이 있으면 댓글 부탁드립니다!</p>\\n</div>\\n<h2>📉 확률적 경사하강법 (Stochastic Gradient Descent)</h2>\\n<p><a href=\\"/posts/Computing/AI/Gradient-descent\\">이전 포스팅</a>에서 <code>경사하강법</code>에 대해 알아봤고 문제점에 대해서도 알아봤습니다.</p>","autoDesc":true}');export{b as comp,f as data};