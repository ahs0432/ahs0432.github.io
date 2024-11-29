import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,o as t,a as c}from"./app-C9yYaQeD.js";const d="/assets/image/Post/Computing/AI/Convolution-Neural-Network-LeNet-5/1.png",a="/assets/image/Post/Computing/AI/Convolution-Neural-Network-LeNet-5/2.png",r="/assets/image/Post/Computing/AI/Convolution-Neural-Network-LeNet-5/3.png",n={},l=c('<h2 id="📚-합성곱-신경망의-구조" tabindex="-1"><a class="header-anchor" href="#📚-합성곱-신경망의-구조"><span>📚 합성곱 신경망의 구조</span></a></h2><p><a href="/posts/Computing/AI/Convolution-Neural-Network-Intro">이전 포스팅</a>에서는 <code>합성곱 신경망</code>을 구성하기 위한 기초 사항에 대해서 알아보았습니다.</p><p><code>합성곱 신경망</code>도 마찬가지로 <code>깊은 신경망</code>으로 구성하고 있어 구조 파악이 필요합니다.<br> 만약 여러 <code>층</code>으로 구성된다면 각 층의 <code>특징 맵</code>의 <code>크기</code>와 <code>채널</code>을 미리 파악해야 합니다.</p><p>마치 빌딩 블록처럼 <code>신경망</code>을 쌓아가고 어떠한 형식으로 쌓아가는지 확인해보겠습니다.</p><h3 id="📕-구조-확인" tabindex="-1"><a class="header-anchor" href="#📕-구조-확인"><span>📕 구조 확인</span></a></h3><figure><img src="'+d+'" alt="" width="80%" height="80%" tabindex="0" loading="lazy"><figcaption>CNN의 예제 구조</figcaption></figure><p><code>합성곱 신경망</code>은 위와 같이 간단하게 쌓아놓은 예제로 상위와 같이 구성될 수 있습니다.<br> 해당 구성은 간단한 표현을 위한 구성도이나 확인해보면 일정한 특징 확인이 가능합니다.</p><p>우선 단일 <code>커널</code>의 면의 수, 즉 <code>채널</code>은 <code>입력 텐서(데이터)</code>의 <code>채널</code>과 동일하다는 것과<br><code>커널</code>의 개수(<code>k&#39;</code>)가 다음 층의 <code>특징 맵</code>의 <code>채널</code>과 동일하다는 것이 확인되고 있습니다.</p><p>이런 특징은 <code>합성곱 신경망</code>에서 지속 사용되는 개념이니 미리 이해하는 것이 좋습니다.</p><h2 id="💫-lenet-5" tabindex="-1"><a class="header-anchor" href="#💫-lenet-5"><span>💫 LeNet-5</span></a></h2><p><code>합성곱 신경망</code>의 구조를 이용하여 필기 숫자인식 문제에서 입증한 알고리즘입니다.</p><p>해당 알고리즘은 지금의 <code>합성곱 신경망</code>을 이용하는 방식에 비해 단순한 구조이지만,<br><code>합성곱 신경망</code>의 기본적인 구조를 이해하는데 도움이 될 것이라 생각하여 소개합니다.</p><figure><img src="'+a+'" alt="" width="80%" height="80%" tabindex="0" loading="lazy"><figcaption>LeNet-5 구조 (<a href="http://vision.stanford.edu/cs598_spring07/papers/Lecun98.pdf" target="_blank" rel="noopener noreferrer"><code>LeCun1998</code></a>)</figcaption></figure><p>첨부해놓은 그림은 <code>LeNet-5</code>가 공개된 <a href="http://vision.stanford.edu/cs598_spring07/papers/Lecun98.pdf" target="_blank" rel="noopener noreferrer"><code>LeCun1998</code></a>이라는 논문의 첨부된 그림입니다.</p><p>해당 그림에서는 <code>Convolutions</code>(<code>합성곱</code>) 과정과 <code>Subsampling</code>로 표현된 <code>풀링</code> 과정,<br><code>Full connection</code>인 <code>완전연결층</code>, 결과 출력의 <code>Gaussian connections</code>가 있습니다.</p><p>각 <code>층</code>을 지나면서 이미지에 대한 <code>데이터 크기</code>와 <code>채널</code>의 변경점을 표현하고 있지만,<br> 이를 조금 더 보완하여 각 층마다 어떠한 <code>파라미터</code>를 갖고 있는지 알아보겠습니다.</p><figure><img src="'+r+'" alt="" width="90%" height="90%" tabindex="0" loading="lazy"><figcaption>LeNet-5 해석</figcaption></figure><p>각 <code>합성곱 층</code>과 <code>풀링 층</code>에서 <code>파라미터</code>와 마지막에 <code>Flat</code>해진 것이 확인되고 있습니다.<br> 이렇게 <code>Flat</code>해진 데이터를 <code>완전연결층</code>을 통해 점차 줄이고 10개의 <code>출력</code>으로 축소됩니다.</p><p><code>Flat</code>의 과정을 <code>Flatten</code>이라고 표현하며 <code>완전연결층</code>에서의 <code>가중치</code>를 줄이기 위해서<br> 최근에는 <code>전역 평균 풀링</code>을 층으로 만들어 <code>Flatten</code> 과정을 수행하기도 하고 있습니다.</p><p>이러한 과정에서 사용된 <code>가중치</code>의 개수를 계산할 수 있는데 아래와 같이 계산되게 됩니다.</p><ul><li>가중치 개수 <ul><li>합성곱 층: (5*5*1+1)*6 + (5*5*6+1)*16 + (5*5*16+1)*120 = 50,692 개</li><li>완전연결층: (120+1)*84 + (84+1)*10 = 11,014 개</li><li>총합: 50,692 + 11,014 = 61,706 개</li></ul></li></ul><p>그렇다면 총 갱신해야하는 <code>가중치</code>의 개수는 61,706개라는 것을 확인할 수 있을 겁니다.</p><h2 id="합성곱-신경망의-특징과-장단점" tabindex="-1"><a class="header-anchor" href="#합성곱-신경망의-특징과-장단점"><span>합성곱 신경망의 특징과 장단점</span></a></h2><h3 id="➡️-손실-함수와-최적화-함수" tabindex="-1"><a class="header-anchor" href="#➡️-손실-함수와-최적화-함수"><span>➡️ 손실 함수와 최적화 함수</span></a></h3><p>이전 <code>MSE</code>나 <a href="/posts/Computing/AI/Cross-entropy"><code>엔트로피</code></a>와 같은 <code>손실 함수</code>와 <a href="/posts/Computing/AI/Gradient-descent"><code>경사하강법</code></a>과 같은 <code>최적화 함수</code>의 개념이<br> 동일하게 적용되며, <code>출력층</code>에 <code>노드</code>는 <code>softmax</code>와 같은 함수로 결과를 표현하게 됩니다.</p><p>기존 <code>완전연결층</code>과 차이가 있다면 <code>노드</code> 간 연결되는 <code>엣지</code>에 대한 <code>가중치</code>를 갱신했다면<br><code>합성곱 신경망</code>은 <code>커널</code>에 존재하는 공용으로 사용되는 <code>가중치</code>가 갱신된다는 것 입니다.</p><p>이렇게 된다면 각각의 <code>데이터</code>, <code>노드</code>가 한 층에서는 같은 <code>가중치</code>를 공유하게 됩니다.<br> 이를 통해 <code>완전연결층</code>의 노드 간 <code>가중치</code>에 비해 갱신이 필요한 가중치가 적어집니다.</p><h3 id="🪣-통째-학습" tabindex="-1"><a class="header-anchor" href="#🪣-통째-학습"><span>🪣 통째 학습</span></a></h3><p>기존의 <code>컴퓨터 비전</code>에서는 <a href="/posts/Computing/AI/Convolution-Neural-Network-Intro#%F0%9F%94%A2-%E1%84%90%E1%85%B3%E1%86%A8%E1%84%8C%E1%85%B5%E1%86%BC-%E1%84%86%E1%85%A2%E1%86%B8-feature-map">지난 포스팅</a>에 표현과 같이 <code>수직 엣지</code>와 <code>수평 엣지</code> 등<br> 구조를 사전 정의하고 파악 후 <code>커널</code>을 사람이 직접 설계해야하는 문제가 있었습니다.</p><p>현재는 <code>딥러닝</code>의 <code>역전파</code> 등의 <code>가중치</code> 갱신 방법을 이용하여 <code>특징 추출</code>을 진행 후<br> 이를 <code>분류</code>까지 진행 후 돌아와 <code>가중치</code>를 갱신하는 형식을 이용하기 시작했습니다.</p><p>이렇게 된다면 <code>특징</code> 파악부터 <code>분류</code>까지 모두 한 번에 진행하는 것을 알 수 있으며,<br><code>특징</code>을 학습한다는 <code>특징 학습</code> 또는 모두 진행의 의미로 <code>통째 학습</code>이라 표현합니다.</p><h3 id="🤔-장점" tabindex="-1"><a class="header-anchor" href="#🤔-장점"><span>🤔 장점</span></a></h3><ul><li><code>통째 학습</code><ul><li>이전 소개한 것처럼 <code>특징 추출</code>부터 <code>분류</code>까지 모든 과정을 제공하고 있습니다.</li></ul></li><li><code>특징 학습</code><ul><li><code>특징 추출</code>에 대한 알고리즘을 <code>학습</code>을 통해 파악하기에 성능 향상이 있습니다.</li></ul></li><li><code>신경망</code>의 깊이 <ul><li><code>가중치 공유</code>를 이용하기 때문에 깊이가 깊어도 <code>학습</code>의 영향도가 적습니다.</li><li>소개한 <code>LeNet-5</code> 이후 <code>신경망</code>은 수십, 수백 층의 깊이로 구성하고 있습니다.</li></ul></li><li><code>데이터</code> 구조 유지 <ul><li>컬러 이미지의 경우 <code>3차원 텐서</code>로 <code>합성곱 층</code> 사용 시 <code>3차원 텐서</code>를 출력합니다.</li><li><code>다층 퍼셉트론</code>의 경우 <code>1차원 벡터</code> 형태로 제공하고 있기에 정보 손실이 있습니다.</li></ul></li><li><code>부분 연결성</code><ul><li>기존의 <code>다층 퍼셉트론</code>은 <code>완전 연결성</code>의 특성으로 모든 <code>노드</code>가 <code>엣지</code>로 연결됩니다.</li><li>반면에 <code>합성곱 신경망</code>은 <code>커널</code>, <code>패딩</code>, <code>스트라이드</code>의 구조로 <code>부분 연결성</code>을 갖습니다.</li></ul></li><li><code>가중치 공유</code><ul><li><code>커널</code> 구조를 이용하기에 <code>가중치 공유</code> 한 층에서의 <code>가중치 갱신</code> 대상이 적습니다.</li></ul></li></ul><h3 id="😥-단점" tabindex="-1"><a class="header-anchor" href="#😥-단점"><span>😥 단점</span></a></h3><ul><li><code>가중치 연산 수</code><ul><li><code>합성곱 신경망</code>의 특성 상 중복되는 영역의 <code>커널</code>을 적용하는 경우가 발생됩니다.<br> 이러한 경우 연산의 수가 폭발적으로 증가한다는 것을 파악하실 수 있을겁니다. <ul><li>예를 들어 5*5의 <code>커널</code>을 이용하여 32*32 이미지를 6개의 <code>채널</code>로 만들 때<br> 5 * 5 * 28 * 28 * 6 = 117,600 번의 <code>가중치</code> 연산을 수행하게 됩니다.</li></ul></li><li><code>합성곱 신경망</code>을 이용하면 기존의 연산에 비해 속도가 느리다는 것을 의미합니다.</li></ul></li></ul><hr><p>다음은 <code>합성곱 신경망</code> 중 다른 <code>신경망</code>의 구조에 대해 알아보도록 하겠습니다.</p><p>끝까지 읽어주셔서 감사드립니다. 😎</p>',38),i=[l];function p(s,g){return t(),o("div",null,i)}const h=e(n,[["render",p],["__file","Convolution-Neural-Network-LeNet-5.html.vue"]]),N=JSON.parse('{"path":"/posts/Computing/AI/Convolution-Neural-Network-LeNet-5.html","title":"[Artificial Intelligence] LeNet-5을 통해 알아보는 합성곱 신경망","lang":"ko-KR","frontmatter":{"title":"[Artificial Intelligence] LeNet-5을 통해 알아보는 합성곱 신경망","categories":["AI"],"tags":["AI","인공지능","합성곱","Convolution","합성곱 신경망","Convolution Neural Network","신경망","Neural Network","레이어","층","Layer","커널","Kernel","필터","Filter","특징 맵","Feature Map","패딩","Padding","스트라이드","Stride","채널","Channel","Flat","Flatten","평면화","이미지 인식","객체 인식","Object Detection","LeNet-5","MNIST","손글씨"],"date":"2024-11-29T00:00:00.000Z","order":302,"editLink":false,"lastUpdated":true,"description":"📚 합성곱 신경망의 구조 이전 포스팅에서는 합성곱 신경망을 구성하기 위한 기초 사항에 대해서 알아보았습니다. 합성곱 신경망도 마찬가지로 깊은 신경망으로 구성하고 있어 구조 파악이 필요합니다. 만약 여러 층으로 구성된다면 각 층의 특징 맵의 크기와 채널을 미리 파악해야 합니다. 마치 빌딩 블록처럼 신경망을 쌓아가고 ...","head":[["meta",{"property":"og:url","content":"https://blog.false.kr/posts/Computing/AI/Convolution-Neural-Network-LeNet-5.html"}],["meta",{"property":"og:site_name","content":"찬스의 개발 블로그 : Chance Devlog"}],["meta",{"property":"og:title","content":"[Artificial Intelligence] LeNet-5을 통해 알아보는 합성곱 신경망"}],["meta",{"property":"og:description","content":"📚 합성곱 신경망의 구조 이전 포스팅에서는 합성곱 신경망을 구성하기 위한 기초 사항에 대해서 알아보았습니다. 합성곱 신경망도 마찬가지로 깊은 신경망으로 구성하고 있어 구조 파악이 필요합니다. 만약 여러 층으로 구성된다면 각 층의 특징 맵의 크기와 채널을 미리 파악해야 합니다. 마치 빌딩 블록처럼 신경망을 쌓아가고 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog.false.kr/assets/image/Post/Computing/AI/Convolution-Neural-Network-LeNet-5/1.png \\"CNN의 예제 구조\\" =80%x80%"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-11-29T12:23:49.000Z"}],["meta",{"property":"article:author","content":"Chance"}],["meta",{"property":"article:tag","content":"AI"}],["meta",{"property":"article:tag","content":"인공지능"}],["meta",{"property":"article:tag","content":"합성곱"}],["meta",{"property":"article:tag","content":"Convolution"}],["meta",{"property":"article:tag","content":"합성곱 신경망"}],["meta",{"property":"article:tag","content":"Convolution Neural Network"}],["meta",{"property":"article:tag","content":"신경망"}],["meta",{"property":"article:tag","content":"Neural Network"}],["meta",{"property":"article:tag","content":"레이어"}],["meta",{"property":"article:tag","content":"층"}],["meta",{"property":"article:tag","content":"Layer"}],["meta",{"property":"article:tag","content":"커널"}],["meta",{"property":"article:tag","content":"Kernel"}],["meta",{"property":"article:tag","content":"필터"}],["meta",{"property":"article:tag","content":"Filter"}],["meta",{"property":"article:tag","content":"특징 맵"}],["meta",{"property":"article:tag","content":"Feature Map"}],["meta",{"property":"article:tag","content":"패딩"}],["meta",{"property":"article:tag","content":"Padding"}],["meta",{"property":"article:tag","content":"스트라이드"}],["meta",{"property":"article:tag","content":"Stride"}],["meta",{"property":"article:tag","content":"채널"}],["meta",{"property":"article:tag","content":"Channel"}],["meta",{"property":"article:tag","content":"Flat"}],["meta",{"property":"article:tag","content":"Flatten"}],["meta",{"property":"article:tag","content":"평면화"}],["meta",{"property":"article:tag","content":"이미지 인식"}],["meta",{"property":"article:tag","content":"객체 인식"}],["meta",{"property":"article:tag","content":"Object Detection"}],["meta",{"property":"article:tag","content":"LeNet-5"}],["meta",{"property":"article:tag","content":"MNIST"}],["meta",{"property":"article:tag","content":"손글씨"}],["meta",{"property":"article:published_time","content":"2024-11-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-29T12:23:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"[Artificial Intelligence] LeNet-5을 통해 알아보는 합성곱 신경망\\",\\"image\\":[\\"https://blog.false.kr/assets/image/Post/Computing/AI/Convolution-Neural-Network-LeNet-5/1.png \\\\\\"CNN의 예제 구조\\\\\\" =80%x80%\\",\\"https://blog.false.kr/assets/image/Post/Computing/AI/Convolution-Neural-Network-LeNet-5/2.png \\\\\\"LeNet-5 구조 ([`LeCun1998`](http://vision.stanford.edu/cs598_spring07/papers/Lecun98.pdf\\",\\"https://blog.false.kr/assets/image/Post/Computing/AI/Convolution-Neural-Network-LeNet-5/3.png \\\\\\"LeNet-5 해석\\\\\\" =90%x90%\\"],\\"datePublished\\":\\"2024-11-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-29T12:23:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Chance\\",\\"url\\":\\"https://blog.false.kr\\",\\"email\\":\\"chance0432@naver.com\\"}]}"]]},"headers":[{"level":2,"title":"📚 합성곱 신경망의 구조","slug":"📚-합성곱-신경망의-구조","link":"#📚-합성곱-신경망의-구조","children":[{"level":3,"title":"📕 구조 확인","slug":"📕-구조-확인","link":"#📕-구조-확인","children":[]}]},{"level":2,"title":"💫 LeNet-5","slug":"💫-lenet-5","link":"#💫-lenet-5","children":[]},{"level":2,"title":"합성곱 신경망의 특징과 장단점","slug":"합성곱-신경망의-특징과-장단점","link":"#합성곱-신경망의-특징과-장단점","children":[{"level":3,"title":"➡️ 손실 함수와 최적화 함수","slug":"➡️-손실-함수와-최적화-함수","link":"#➡️-손실-함수와-최적화-함수","children":[]},{"level":3,"title":"🪣 통째 학습","slug":"🪣-통째-학습","link":"#🪣-통째-학습","children":[]},{"level":3,"title":"🤔 장점","slug":"🤔-장점","link":"#🤔-장점","children":[]},{"level":3,"title":"😥 단점","slug":"😥-단점","link":"#😥-단점","children":[]}]}],"git":{"createdTime":1732883029000,"updatedTime":1732883029000,"contributors":[{"name":"Chance","email":"ahs0432@naver.com","commits":1}]},"readingTime":{"minutes":0.65,"words":195},"filePathRelative":"posts/Computing/AI/Convolution-Neural-Network-LeNet-5.md","localizedDate":"2024년 11월 29일","excerpt":"<h2>📚 합성곱 신경망의 구조</h2>\\n<p><a href=\\"/posts/Computing/AI/Convolution-Neural-Network-Intro\\">이전 포스팅</a>에서는 <code>합성곱 신경망</code>을 구성하기 위한 기초 사항에 대해서 알아보았습니다.</p>\\n<p><code>합성곱 신경망</code>도 마찬가지로 <code>깊은 신경망</code>으로 구성하고 있어 구조 파악이 필요합니다.<br>\\n만약 여러 <code>층</code>으로 구성된다면 각 층의 <code>특징 맵</code>의 <code>크기</code>와 <code>채널</code>을 미리 파악해야 합니다.</p>","autoDesc":true}');export{h as comp,N as data};
