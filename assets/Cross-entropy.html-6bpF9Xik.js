import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,o as c,a}from"./app-BA5Pf98V.js";const r="/assets/image/Post/Computing/AI/Cross-entropy/1.png",e="/assets/image/Post/Computing/AI/Cross-entropy/2.png",n="/assets/image/Post/Computing/AI/Cross-entropy/3.png",d="/assets/image/Post/Computing/AI/Cross-entropy/4.png",s="/assets/image/Post/Computing/AI/Cross-entropy/5.png",p="/assets/image/Post/Computing/AI/Cross-entropy/6.png",i="/assets/image/Post/Computing/AI/Cross-entropy/7.png",g="/assets/image/Post/Computing/AI/Cross-entropy/8.png",l="/assets/image/Post/Computing/AI/Cross-entropy/9.png",m={},h=a('<h2 id="교차-엔트로피-cross-entropy" tabindex="-1"><a class="header-anchor" href="#교차-엔트로피-cross-entropy"><span>교차 엔트로피 (Cross Entropy)</span></a></h2><p><code>교차 엔트로피</code>는 <code>인공지능</code>의 <code>분류(Classification)</code> 문제에서 많이 사용되는 <code>함수</code>입니다.<br> 이 <code>함수</code>가 무엇이고 어떠한 역할을 하기에 많이 사용되고 있는지 알아보도록 하겠습니다.</p><h3 id="엔트로피-entropy" tabindex="-1"><a class="header-anchor" href="#엔트로피-entropy"><span>엔트로피 (Entropy)</span></a></h3><p><code>교차 엔트로피</code>를 이해하기 위해서는 먼저 <code>엔트로피</code>에 대한 개념을 이해해야 합니다.<br><code>엔트로피</code>는 간단하게 말하면 <code>확률</code>의 분포에 따른 <code>불확실성</code>을 측정하는 함수입니다.</p><p>예를 들어 어느 하나의 확률이 높지 않은 <code>공정한 6면 주사위</code>가 있다는 가정을 합니다.<br> 이 경우 1부터 6의 모든 숫자가 모두 같은 <code>1/6</code>의 확률을 갖는다는 것을 알 수 있습니다.</p><p>만약 주사위가 찌그러져 1이 나올 확률이 <code>1/2</code>가 되고 다른 면의 확률이 <code>1/10</code>가 됐다면<br> 1의 확률이 높다는 것을 알 수 있고 <code>공정한 주사위</code>보다 <code>불확실성이 낮다</code> 표현합니다.</p><h4 id="엔트로피의-수식" tabindex="-1"><a class="header-anchor" href="#엔트로피의-수식"><span>엔트로피의 수식</span></a></h4><p>이러한 경우의 <code>엔트로피</code>를 각각 계산할 수 있고 기본적인 계산식은 아래와 같습니다.</p><figure><img src="'+r+'" alt="" width="50%" height="50%" tabindex="0" loading="lazy"><figcaption>엔트로피 수식</figcaption></figure><p>수식에서 <code>x</code>는 값을 제공하는 확률 변수를 의미하고 <code>k</code>는 사건에 대해 의미합니다.<br> 주사위는 6개의 각기 다른 사건이 존재하므로 <code>k</code>의 값은 6이 된다고 볼 수 있습니다.</p><p>다음으로 i는 <code>주사위</code>를 기준으로는 1~6의 수가 나오는 사건을 의미할 수 있으며,<br><code>P(eᵢ)</code>는 <code>주사위</code>에서 i 변수의 수가 나오는 각기의 <code>확률</code>을 의미하고 있습니다.</p><p>여기서 <code>log</code>는 밑이 <code>e</code>인 자연로그를 이용해 계산되는 점 참고해주시면 됩니다.<br> 추가로 <code>log</code>는 분자보다 분모가 작을 시 <code>음수</code>가 나오니 <code>-</code>로 양수로 변환합니다.<br> (확률이라는 전제이므로 <code>100%</code>를 초과할 수 없기에 양수가 나올 수 없습니다.)</p><h4 id="엔트로피-계산" tabindex="-1"><a class="header-anchor" href="#엔트로피-계산"><span>엔트로피 계산</span></a></h4><p>설명된 수식을 통해 <code>공정한 주사위</code>의 <code>엔트로피</code>를 계산하면 아래와 같습니다.</p><figure><img src="'+e+'" alt="" width="50%" height="50%" tabindex="0" loading="lazy"><figcaption>공정한 주사위 기준</figcaption></figure><p>다음으로 <code>1이 더 많이 나오는 주사위</code>의 경우 아래와 같이 계산될 수 있습니다.</p><figure><img src="'+n+'" alt="" width="50%" height="50%" tabindex="0" loading="lazy"><figcaption>불공정한 주사위 기준</figcaption></figure><p>각 <code>1.79175</code>와 <code>1.49786</code>의 값이 도출되고 <code>불확실성</code>이 더 낮은 것이 확인됩니다.</p><h3 id="교차-엔트로피란" tabindex="-1"><a class="header-anchor" href="#교차-엔트로피란"><span>교차 엔트로피란?</span></a></h3><p><code>교차 엔트로피</code>는 <code>엔트로피</code>를 이용해 두 확률 분포의 다른 정도를 측정하는 것입니다.</p><p>예로 동일한 <code>공정한 주사위</code> 두 개를 비교했을 때와 다른 주사위의 확률을 비교합니다.<br> 이 경우 당연히 <code>공정한 주사위</code> 두 개를 비교한 것이 차이가 적다는 것을 알 수 있습니다.</p><p>이러한 과정을 수식으로 만들어 서로 간의 차이의 척도를 측정하는 것을 의미하고 있습니다.</p><h4 id="교차-엔트로피의-수식" tabindex="-1"><a class="header-anchor" href="#교차-엔트로피의-수식"><span>교차 엔트로피의 수식</span></a></h4><p><code>교차 엔트로피</code>의 수식은 기본적으로 <code>엔트로피</code>의 수식에서 사용되는 변수 값이 변경됩니다.</p><figure><img src="'+d+'" alt="" width="50%" height="50%" tabindex="0" loading="lazy"><figcaption>교차 엔트로피 수식</figcaption></figure><p>확인 시 제공되는 변수 값이 <code>P</code>와 <code>Q</code>인 것을 볼 수 있고 이는 각각의 <code>확률 분포</code>를 의미합니다.<br> 나머지의 값은 마찬가지로 서로의 동일한 대상에 대한 비교를 하는 것이 목표인 것이 됩니다.</p><h4 id="교차-엔트로피-계산" tabindex="-1"><a class="header-anchor" href="#교차-엔트로피-계산"><span>교차 엔트로피 계산</span></a></h4><p>그렇다면 먼저 <code>교차 엔트로피</code>를 이용하여 <code>공정한 주사위</code> 두 개에 대해 비교해보겠습니다.</p><figure><img src="'+e+'" alt="" width="50%" height="50%" tabindex="0" loading="lazy"><figcaption>공정한 주사위 비교</figcaption></figure><p>당연하게도 <code>P</code>, <code>Q</code>는 같고 처음 계산한 공정한 주사위의 <code>엔트로피</code> 값과 같다는 것이 확인됩니다.</p><p>그렇다면 <code>P</code>를 <code>공정한 주사위</code>로 <code>Q</code>를 <code>1이 더 많이 나오는 주사위</code>로 계산한다면 어떨까요?<br> 이를 수식을 이용하여 계산할 경우 아래와 같이 계산되는 것을 확인하실 수 있습니다.</p><figure><img src="'+s+'" alt="" width="50%" height="50%" tabindex="0" loading="lazy"><figcaption>공정한 주사위와 불공정한 주사위 비교</figcaption></figure><p>확인 시 <code>공정한 주사위</code> 두 개를 서로 비교했을 때보다 더 높은 <code>불확실성</code>을 보입니다.<br> 이를 통해 확인 가능한 것은 두 가지의 차이에 대한 상세한 비교가 가능하다는 것입니다.</p><p><code>기계학습</code>에서는 <code>P</code>에 정답(<code>레이블</code>)을 제공하고 <code>Q</code>에 <code>예측</code>을 제공하여 이용 가능합니다.</p><h4 id="교차-엔트로피-사용-용도" tabindex="-1"><a class="header-anchor" href="#교차-엔트로피-사용-용도"><span>교차 엔트로피 사용 용도</span></a></h4><p>그렇다면 <code>교차 엔트로피</code>를 왜 사용할까에 대한 의문이 들 수 있을 것이라 듭니다.</p><p>우선 <code>MSE(Mean Squared Error)</code>의 경우 <code>제곱</code>이라는 특성을 갖고 있기 때문에,<br> 1 미만의 값은 작아지며 0에 가까워지고 1 이상의 경우 커지면서 차이가 벌어집니다.</p><p>이로 인한 <code>불공정성</code> 문제가 발생되고 <code>분류</code> 문제에서 큰 걸림돌이 될 수 있습니다.</p><p><code>교차 엔트로피</code>는 이러한 부분을 확률 분포의 불확실성을 측정하는 형태로 제공하여<br><code>MSE</code>에서 발생될 수 있는 <code>불공정성</code>의 문제를 해소하고 <code>학습 성능</code>을 높일 수 있습니다.</p><p>예를 들어 숫자 분류 과정에서 아래와 같은 결과가 도출됐을 때 계산에 대한 부분입니다.<br> 0이 정답이고 <code>예측</code>이 정답인 경우와 틀린 경우를 비교할 때 아래와 같이 이뤄집니다.</p><table><thead><tr><th style="text-align:center;">상황</th><th style="text-align:center;">y</th></tr></thead><tbody><tr><td style="text-align:center;">정답</td><td style="text-align:center;">(0, 0, 0, 1, 0, 0, 0, 0, 0, 0)</td></tr><tr><td style="text-align:center;">예측 1 (성공)</td><td style="text-align:center;">(0.9, 0, 0, 0, 0, 0, 0, 0, 0, 0.1)</td></tr><tr><td style="text-align:center;">예측 2 (실패)</td><td style="text-align:center;">(0.1, 0, 0, 0, 0, 0, 0, 0, 0, 0.9)</td></tr></tbody></table><p>먼저 <code>MSE</code>를 이용하여 해당 수식을 계산하여 값을 비교해보면 아래와 같습니다.</p><p><code>예측 1</code> 상황을 <code>MSE</code>로 계산해보면 아래와 같이 전개되고 0.002의 값이 도출됩니다.</p><figure><img src="'+p+'" alt="" width="50%" height="50%" tabindex="0" loading="lazy"><figcaption>MSE 예측 1</figcaption></figure><p><code>예측 2</code> 상황을 <code>MSE</code>로 계산해보면 아래와 같이 전개되고 0.0162의 값이 도출됩니다.</p><figure><img src="'+i+'" alt="" width="50%" height="50%" tabindex="0" loading="lazy"><figcaption>MSE 예측 2</figcaption></figure><p>도출된 값을 보면 확률이기 때문에 0에 점점 가까워지고 있고 차이가 크지 않습니다.</p><p>만약 이를 <code>교차 엔트로피</code>를 이용하여 계산할 경우 아래와 같이 계산 가능합니다.</p><p><code>예측 1</code> 상황을 <code>교차 엔트로피</code>로 계산해보면 아래와 같이 전개되고 0.1053의 값이 도출됩니다.</p><figure><img src="'+g+'" alt="" width="50%" height="50%" tabindex="0" loading="lazy"><figcaption>교차 엔트로피 예측 1</figcaption></figure><p><code>예측 2</code> 상황을 <code>교차 엔트로피</code>로 계산해보면 아래와 같이 전개되고 2.3025의 값이 도출됩니다.</p><figure><img src="'+l+'" alt="" width="50%" height="50%" tabindex="0" loading="lazy"><figcaption>교차 엔트로피 예측 2</figcaption></figure><p>값을 비교해보면 차이가 크고 이는 <code>MSE</code>의 불확실성을 해소하는데 도움이 됩니다.</p><p><code>MSE</code>는 위와 같은 문제로 인해 <code>분류</code> 문제에서는 많이 사용되지 않고 있는 상태이며,<br><code>회귀</code> 문제의 경우 <code>확률</code>이 아닌 <code>값</code>을 비교하는 형태이므로 응용하여 사용됩니다.</p><p>그러므로 <code>분류</code>는 <code>교차 엔트로피</code>, <code>회귀</code>는 <code>MSE/MAE</code> 등을 떠올려주시면 됩니다.</p><hr><p>끝까지 읽어주셔서 감사드립니다. 😎</p>',57),y=[h];function f(u,C){return c(),o("div",null,y)}const _=t(m,[["render",f],["__file","Cross-entropy.html.vue"]]),A=JSON.parse('{"path":"/posts/Computing/AI/Cross-entropy.html","title":"[Artificial Intelligence] 불확실성을 측정하는 교차 엔트로피","lang":"ko-KR","frontmatter":{"title":"[Artificial Intelligence] 불확실성을 측정하는 교차 엔트로피","categories":["AI"],"tags":["AI","인공지능","불확실성","Uncertainty","무작위성","Randomness","확률","확률 변수","엔트로피","교차 엔트로피","Entropy","Cross Entropy","손실함수","손실","Loss","Loss Function"],"date":"2024-11-10T00:00:00.000Z","editLink":false,"lastUpdated":true,"description":"교차 엔트로피 (Cross Entropy) 교차 엔트로피는 인공지능의 분류(Classification) 문제에서 많이 사용되는 함수입니다. 이 함수가 무엇이고 어떠한 역할을 하기에 많이 사용되고 있는지 알아보도록 하겠습니다. 엔트로피 (Entropy) 교차 엔트로피를 이해하기 위해서는 먼저 엔트로피에 대한 개념을 이...","head":[["meta",{"property":"og:url","content":"https://blog.false.kr/posts/Computing/AI/Cross-entropy.html"}],["meta",{"property":"og:site_name","content":"찬스의 개발 블로그 : Chance Devlog"}],["meta",{"property":"og:title","content":"[Artificial Intelligence] 불확실성을 측정하는 교차 엔트로피"}],["meta",{"property":"og:description","content":"교차 엔트로피 (Cross Entropy) 교차 엔트로피는 인공지능의 분류(Classification) 문제에서 많이 사용되는 함수입니다. 이 함수가 무엇이고 어떠한 역할을 하기에 많이 사용되고 있는지 알아보도록 하겠습니다. 엔트로피 (Entropy) 교차 엔트로피를 이해하기 위해서는 먼저 엔트로피에 대한 개념을 이..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog.false.kr/assets/image/Post/Computing/AI/Cross-entropy/1.png \\"엔트로피 수식\\" =50%x50%"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-11-10T08:21:54.000Z"}],["meta",{"property":"article:author","content":"Chance"}],["meta",{"property":"article:tag","content":"AI"}],["meta",{"property":"article:tag","content":"인공지능"}],["meta",{"property":"article:tag","content":"불확실성"}],["meta",{"property":"article:tag","content":"Uncertainty"}],["meta",{"property":"article:tag","content":"무작위성"}],["meta",{"property":"article:tag","content":"Randomness"}],["meta",{"property":"article:tag","content":"확률"}],["meta",{"property":"article:tag","content":"확률 변수"}],["meta",{"property":"article:tag","content":"엔트로피"}],["meta",{"property":"article:tag","content":"교차 엔트로피"}],["meta",{"property":"article:tag","content":"Entropy"}],["meta",{"property":"article:tag","content":"Cross Entropy"}],["meta",{"property":"article:tag","content":"손실함수"}],["meta",{"property":"article:tag","content":"손실"}],["meta",{"property":"article:tag","content":"Loss"}],["meta",{"property":"article:tag","content":"Loss Function"}],["meta",{"property":"article:published_time","content":"2024-11-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-10T08:21:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"[Artificial Intelligence] 불확실성을 측정하는 교차 엔트로피\\",\\"image\\":[\\"https://blog.false.kr/assets/image/Post/Computing/AI/Cross-entropy/1.png \\\\\\"엔트로피 수식\\\\\\" =50%x50%\\",\\"https://blog.false.kr/assets/image/Post/Computing/AI/Cross-entropy/2.png \\\\\\"공정한 주사위 기준\\\\\\" =50%x50%\\",\\"https://blog.false.kr/assets/image/Post/Computing/AI/Cross-entropy/3.png \\\\\\"불공정한 주사위 기준\\\\\\" =50%x50%\\",\\"https://blog.false.kr/assets/image/Post/Computing/AI/Cross-entropy/4.png \\\\\\"교차 엔트로피 수식\\\\\\" =50%x50%\\",\\"https://blog.false.kr/assets/image/Post/Computing/AI/Cross-entropy/2.png \\\\\\"공정한 주사위 비교\\\\\\" =50%x50%\\",\\"https://blog.false.kr/assets/image/Post/Computing/AI/Cross-entropy/5.png \\\\\\"공정한 주사위와 불공정한 주사위 비교\\\\\\" =50%x50%\\",\\"https://blog.false.kr/assets/image/Post/Computing/AI/Cross-entropy/6.png \\\\\\"MSE 예측 1\\\\\\" =50%x50%\\",\\"https://blog.false.kr/assets/image/Post/Computing/AI/Cross-entropy/7.png \\\\\\"MSE 예측 2\\\\\\" =50%x50%\\",\\"https://blog.false.kr/assets/image/Post/Computing/AI/Cross-entropy/8.png \\\\\\"교차 엔트로피 예측 1\\\\\\" =50%x50%\\",\\"https://blog.false.kr/assets/image/Post/Computing/AI/Cross-entropy/9.png \\\\\\"교차 엔트로피 예측 2\\\\\\" =50%x50%\\"],\\"datePublished\\":\\"2024-11-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-10T08:21:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Chance\\",\\"url\\":\\"https://blog.false.kr\\",\\"email\\":\\"chance0432@naver.com\\"}]}"]]},"headers":[{"level":2,"title":"교차 엔트로피 (Cross Entropy)","slug":"교차-엔트로피-cross-entropy","link":"#교차-엔트로피-cross-entropy","children":[{"level":3,"title":"엔트로피 (Entropy)","slug":"엔트로피-entropy","link":"#엔트로피-entropy","children":[]},{"level":3,"title":"교차 엔트로피란?","slug":"교차-엔트로피란","link":"#교차-엔트로피란","children":[]}]}],"git":{"createdTime":1731226914000,"updatedTime":1731226914000,"contributors":[{"name":"Chance","email":"ahs0432@naver.com","commits":1}]},"readingTime":{"minutes":0.71,"words":212},"filePathRelative":"posts/Computing/AI/Cross-entropy.md","localizedDate":"2024년 11월 10일","excerpt":"<h2>교차 엔트로피 (Cross Entropy)</h2>\\n<p><code>교차 엔트로피</code>는 <code>인공지능</code>의 <code>분류(Classification)</code> 문제에서 많이 사용되는 <code>함수</code>입니다.<br>\\n이 <code>함수</code>가 무엇이고 어떠한 역할을 하기에 많이 사용되고 있는지 알아보도록 하겠습니다.</p>\\n<h3>엔트로피 (Entropy)</h3>\\n<p><code>교차 엔트로피</code>를 이해하기 위해서는 먼저 <code>엔트로피</code>에 대한 개념을 이해해야 합니다.<br>\\n<code>엔트로피</code>는 간단하게 말하면 <code>확률</code>의 분포에 따른 <code>불확실성</code>을 측정하는 함수입니다.</p>","autoDesc":true}');export{_ as comp,A as data};
