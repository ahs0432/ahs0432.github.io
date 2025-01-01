import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,o,a as t}from"./app-BC02RIMe.js";const a={},c=t('<h2 id="📈-결정-계수-r2-score-r2-squared-란" tabindex="-1"><a class="header-anchor" href="#📈-결정-계수-r2-score-r2-squared-란"><span>📈 결정 계수(R2 Score/R2-Squared) 란?</span></a></h2><p><code>결정계수</code>, <code>R2 Score</code>는 <code>회귀 모델</code>의 <code>적합도</code> 확인을 위해 사용하는 기법입니다.<br><code>회귀 모델</code>의 평가 지표 중 하나로 사용 가능하고 값은 0~1 사이의 값을 갖습니다.</p><p>결과가 1에 가까울수록 성능이 좋다는 것을 의미하고 이는 모델이 추론한 결과가<br> 데이터를 설명하고 있는지에 대한 지표라고 생각하면 내용을 이해하기 쉽습니다.</p><p>보통 0~1 사이의 값이므로 %로 표현하고 0.9인 경우 90%의 설명력이 있다합니다.</p><h3 id="📲-결정계수에서-사용되는-평가-지표" tabindex="-1"><a class="header-anchor" href="#📲-결정계수에서-사용되는-평가-지표"><span>📲 결정계수에서 사용되는 평가 지표</span></a></h3><p><code>결정계수</code>에서 사용되는 <code>지표</code>는 아래와 같고 <code>결정계수</code>의 수식에서 이용됩니다.</p><ul><li><code>SSE</code> (오차제곱합): <code>∑(실제 값 - 예측 값)²</code></li><li><code>SSR</code> (회귀제곱합): <code>∑(예측 값 - 평균 값)²</code></li><li><code>SSR</code> (전체제곱합): <code>∑(실제 값 - 평균 값)²</code></li><li><code>R2</code> (결정계수): <code>SSR / SST</code> = <code>1 - (SSE / SST)</code></li></ul><h2 id="😀-회귀에서의-다른-평가-지표" tabindex="-1"><a class="header-anchor" href="#😀-회귀에서의-다른-평가-지표"><span>😀 회귀에서의 다른 평가 지표</span></a></h2><p><code>회귀</code>에서는 <code>결정계수</code> 외에도 다양한 지표를 사용하고 대표적인 것을 알아봅니다.<br><code>평가 지표</code>의 경우 모델에 적합한 것을 선택이 필요하므로 참고하는 것이 좋습니다.</p><h3 id="🎉-mse-mean-squared-error-평균-제곱-오차" tabindex="-1"><a class="header-anchor" href="#🎉-mse-mean-squared-error-평균-제곱-오차"><span>🎉 MSE(Mean Squared Error) / 평균 제곱 오차</span></a></h3><p><code>인공지능</code>에 대해 배우면서 가장 기초적으로 접하게 되는 오차 함수라고 볼 수 있습니다.</p><p><code>실제 값(y)</code>과 <code>예측 값(o)</code>의 차이를 제곱한 뒤 <code>전체 개수</code>로 나눈 값을 의미합니다.<br> 오차가 적을 경우 <code>MSE</code>의 값은 작아질 것이고 모델의 성능이 높다는 것을 의미합니다.</p><p>이전 소개했던 <a href="%22/posts/Computing/AI/Gradient-descent%22"><code>경사하강법</code></a>에도 해당 지표를 이용하여 <code>손실함수</code>를 설계했었습니다.<br> 이를 수식으로 표현 시 <code>(∑(실제 값 - 예측 값)²) / n(전체 개수)</code>로 표현됩니다.</p><p>제곱을 하기에 <code>오차 값</code>의 크기가 1보다 작은 경우 0에 급격하게 가까워지게 되고<br> 1보다 큰 경우에는 급격히 커지기에 계산된 값의 차이가 있다는 문제가 있습니다.</p><h3 id="✨-rmse-root-mean-squared-error-평균-제곱근-오차" tabindex="-1"><a class="header-anchor" href="#✨-rmse-root-mean-squared-error-평균-제곱근-오차"><span>✨ RMSE(Root Mean Squared Error) / 평균 제곱근 오차</span></a></h3><p><code>MSE</code>로 계산된 지표 값에 제곱근(Root)를 이용하여 값을 축소시킨 지표입니다.<br> 값을 축소시켰지만, <code>MSE</code>를 이용하기에 문제는 동일하게 발생되는 지표입니다.</p><p>수식은 기존의 <code>MSE</code>에서 제곱근을 이용하여 <code>√(MSE)</code>의 형태를 띄게 됩니다.</p><h3 id="🎇-mae-mean-absolute-error-평균-절대-오차" tabindex="-1"><a class="header-anchor" href="#🎇-mae-mean-absolute-error-평균-절대-오차"><span>🎇 MAE(Mean Absolute Error) / 평균 절대 오차</span></a></h3><p><code>MAE</code>는 <code>MSE</code>와 달리 제곱을 이용하는 것이 아닌 절대 값을 이용하는 방식입니다.<br><code>MSE</code>에 비해 작은 값을 띄고, 제곱에서의 급격하게 값의 변화 문제를 방지합니다.</p><p>수식으로 표현 시 <code>(∑|실제 값 - 예측 값|) / n(전체 개수)</code>로 표현됩니다.</p><h3 id="🎆-mape-mean-absolute-percentage-error-평균-절대-백분율-오차" tabindex="-1"><a class="header-anchor" href="#🎆-mape-mean-absolute-percentage-error-평균-절대-백분율-오차"><span>🎆 MAPE(Mean Absolute Percentage Error) / 평균 절대 백분율 오차</span></a></h3><p><code>MAE</code>를 비율로 표현하여 값의 크기에 의존되는 기존 방식을 개선할 수 있습니다.</p><p>수식은 <code>(∑|(실제 값 - 예측 값)/실제 값|) * (100/n(전체 개수))</code>로 표현됩니다.</p><h3 id="🎈-mpe-mean-percentage-error-평균-백분율-오차" tabindex="-1"><a class="header-anchor" href="#🎈-mpe-mean-percentage-error-평균-백분율-오차"><span>🎈 MPE(Mean Percentage Error) / 평균 백분율 오차</span></a></h3><p><code>MAPE</code>에서 절대 값을 제외한 비율 값으로 모델 성능 비교 간 사용하게 됩니다.</p><p>단, 절대 값을 사용하지 않기에 양의 오차와 음의 오차가 상쇄되는 문제가 존재하여<br> 다른 값과 달리 0에 근접하더라도 예측 모델이 정확하다는 것을 의미하지 않습니다.</p><p>수식은 <code>(∑((실제 값 - 예측 값)/실제 값)) * (100/n(전체 개수))</code>로 표현됩니다.</p><p>만약 실제 값에 0이 존재할 경우 계산이 불가하고 0에 근접한 매우 작은 값의 경우<br><code>MPE</code>의 값이 급증하는 문제로 인해 지표 자체가 직관적이지 않다는 문제가 있습니다.</p><hr><p>끝까지 읽어주셔서 감사드립니다. 😎</p>',30),n=[c];function d(p,l){return o(),r("div",null,n)}const m=e(a,[["render",d],["__file","R2-Score.html.vue"]]),h=JSON.parse('{"path":"/posts/Computing/AI/R2-Score.html","title":"[Artificial Intelligence] 결정계수(R2 Score)와 평가지표","lang":"ko-KR","frontmatter":{"title":"[Artificial Intelligence] 결정계수(R2 Score)와 평가지표","categories":["AI"],"tags":["AI","인공지능","모델","Model","선형회귀","회귀","Regression","R2","결정계수","R2 Score","R2-Squared"],"date":"2024-12-22T00:00:00.000Z","order":101,"editLink":false,"lastUpdated":true,"description":"📈 결정 계수(R2 Score/R2-Squared) 란? 결정계수, R2 Score는 회귀 모델의 적합도 확인을 위해 사용하는 기법입니다. 회귀 모델의 평가 지표 중 하나로 사용 가능하고 값은 0~1 사이의 값을 갖습니다. 결과가 1에 가까울수록 성능이 좋다는 것을 의미하고 이는 모델이 추론한 결과가 데이터를 설명...","head":[["meta",{"property":"og:url","content":"https://blog.false.kr/posts/Computing/AI/R2-Score.html"}],["meta",{"property":"og:site_name","content":"찬스의 개발 블로그 : Chance Devlog"}],["meta",{"property":"og:title","content":"[Artificial Intelligence] 결정계수(R2 Score)와 평가지표"}],["meta",{"property":"og:description","content":"📈 결정 계수(R2 Score/R2-Squared) 란? 결정계수, R2 Score는 회귀 모델의 적합도 확인을 위해 사용하는 기법입니다. 회귀 모델의 평가 지표 중 하나로 사용 가능하고 값은 0~1 사이의 값을 갖습니다. 결과가 1에 가까울수록 성능이 좋다는 것을 의미하고 이는 모델이 추론한 결과가 데이터를 설명..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-12-22T14:43:24.000Z"}],["meta",{"property":"article:author","content":"Chance"}],["meta",{"property":"article:tag","content":"AI"}],["meta",{"property":"article:tag","content":"인공지능"}],["meta",{"property":"article:tag","content":"모델"}],["meta",{"property":"article:tag","content":"Model"}],["meta",{"property":"article:tag","content":"선형회귀"}],["meta",{"property":"article:tag","content":"회귀"}],["meta",{"property":"article:tag","content":"Regression"}],["meta",{"property":"article:tag","content":"R2"}],["meta",{"property":"article:tag","content":"결정계수"}],["meta",{"property":"article:tag","content":"R2 Score"}],["meta",{"property":"article:tag","content":"R2-Squared"}],["meta",{"property":"article:published_time","content":"2024-12-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-22T14:43:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"[Artificial Intelligence] 결정계수(R2 Score)와 평가지표\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-12-22T00:00:00.000Z\\",\\"dateModified\\":\\"2024-12-22T14:43:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Chance\\",\\"url\\":\\"https://blog.false.kr\\",\\"email\\":\\"chance0432@naver.com\\"}]}"]]},"headers":[{"level":2,"title":"📈 결정 계수(R2 Score/R2-Squared) 란?","slug":"📈-결정-계수-r2-score-r2-squared-란","link":"#📈-결정-계수-r2-score-r2-squared-란","children":[{"level":3,"title":"📲 결정계수에서 사용되는 평가 지표","slug":"📲-결정계수에서-사용되는-평가-지표","link":"#📲-결정계수에서-사용되는-평가-지표","children":[]}]},{"level":2,"title":"😀 회귀에서의 다른 평가 지표","slug":"😀-회귀에서의-다른-평가-지표","link":"#😀-회귀에서의-다른-평가-지표","children":[{"level":3,"title":"🎉 MSE(Mean Squared Error) / 평균 제곱 오차","slug":"🎉-mse-mean-squared-error-평균-제곱-오차","link":"#🎉-mse-mean-squared-error-평균-제곱-오차","children":[]},{"level":3,"title":"✨ RMSE(Root Mean Squared Error) / 평균 제곱근 오차","slug":"✨-rmse-root-mean-squared-error-평균-제곱근-오차","link":"#✨-rmse-root-mean-squared-error-평균-제곱근-오차","children":[]},{"level":3,"title":"🎇 MAE(Mean Absolute Error) / 평균 절대 오차","slug":"🎇-mae-mean-absolute-error-평균-절대-오차","link":"#🎇-mae-mean-absolute-error-평균-절대-오차","children":[]},{"level":3,"title":"🎆 MAPE(Mean Absolute Percentage Error) / 평균 절대 백분율 오차","slug":"🎆-mape-mean-absolute-percentage-error-평균-절대-백분율-오차","link":"#🎆-mape-mean-absolute-percentage-error-평균-절대-백분율-오차","children":[]},{"level":3,"title":"🎈 MPE(Mean Percentage Error) / 평균 백분율 오차","slug":"🎈-mpe-mean-percentage-error-평균-백분율-오차","link":"#🎈-mpe-mean-percentage-error-평균-백분율-오차","children":[]}]}],"git":{"createdTime":1734878604000,"updatedTime":1734878604000,"contributors":[{"name":"Chance","email":"ahs0432@naver.com","commits":1}]},"readingTime":{"minutes":0.44,"words":132},"filePathRelative":"posts/Computing/AI/R2-Score.md","localizedDate":"2024년 12월 22일","excerpt":"<h2>📈 결정 계수(R2 Score/R2-Squared) 란?</h2>\\n<p><code>결정계수</code>, <code>R2 Score</code>는 <code>회귀 모델</code>의 <code>적합도</code> 확인을 위해 사용하는 기법입니다.<br>\\n<code>회귀 모델</code>의 평가 지표 중 하나로 사용 가능하고 값은 0~1 사이의 값을 갖습니다.</p>\\n<p>결과가 1에 가까울수록 성능이 좋다는 것을 의미하고 이는 모델이 추론한 결과가<br>\\n데이터를 설명하고 있는지에 대한 지표라고 생각하면 내용을 이해하기 쉽습니다.</p>","autoDesc":true}');export{m as comp,h as data};