import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as e}from"./app-rj3xBpop.js";const n={},t=e(`<h2 id="🎇-테스트-환경" tabindex="-1"><a class="header-anchor" href="#🎇-테스트-환경"><span>🎇 테스트 환경</span></a></h2><ul><li>CentOS Linux release 7.9.2009 (Core)</li><li>OpenJDK 11.0.12</li><li>OpenJDK 1.8.0_302</li></ul><h2 id="🤔-발생-상황" tabindex="-1"><a class="header-anchor" href="#🤔-발생-상황"><span>🤔 발생 상황</span></a></h2><p>관리 중인 고객사에서 OpenJDK 버전을 두 개를 설치를 요청하면서 고민하게된 사항이다.</p><p>평소 고객 서비스 구축 간 YUM을 이용하여 Java를 설치할 때 두 개의 버전이 필요할 경우<br> 높은 버전을 기준으로 유지될 것이라고 판단하여 하나는 소스 컴파일 설치를 했었다.</p><p>그렇기에 소스 컴파일로 설치된 버전은 다른 패키지에 비해서 관리에 까다로움이 있었다.</p><h2 id="🔍-새로운-발견" tabindex="-1"><a class="header-anchor" href="#🔍-새로운-발견"><span>🔍 새로운 발견</span></a></h2><p>놀랍게도 나의 개인 테스트 환경에서 OpenJDK 11 버전을 설치할 일이 있어 설치했었다.<br> 생각해보니 OpenJDK 8 버전이 사전에 설치된 상태였고 두 패키지가 모두 남아있었다.<br><s>(포스팅을 작성하는 지금 이렇게 돌아보니 정말 우물 안 개구리가 따로 없다. 😅)</s></p><p>고객사에 편의도 있고 하다보니 이번에 설치하면서 이 방법을 이용해보기로 결정했다.<br> 중요한 건 기본 버전으로 인식하는 OpenJDK를 설정하는 방법이었는데 이걸 소개해본다.</p><h2 id="🔧-설치-및-설정-과정" tabindex="-1"><a class="header-anchor" href="#🔧-설치-및-설정-과정"><span>🔧 설치 및 설정 과정</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> *</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">openjdk</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>현재 내가 설치할 수 있는 OpenJDK 버전을 확인하여 설치를 준비한다.</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yum</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> java-1.8.0-openjdk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> java-1.8.0-openjdk-devel</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> java-11-openjdk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> java-11-openjdk-devel</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>나는 OpenJDK 1.8과 11 버전에 대한 설치가 필요했기에 두 버전을 설치하였다.</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> java</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -version</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">openjdk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> version</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;1.8.0_302&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">OpenJDK</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Runtime</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Environment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (build </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">1.8.0_302-b08</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">OpenJDK</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 64-Bit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> VM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (build </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">25.302-b08,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mixed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mode</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>설치된 OpenJDK의 버전을 확인해보면 OpenJDK 1.8 버전이 기본 버전으로 인식되고 있다.</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> alternatives</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --config</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> java</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">There</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> are</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> programs</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> which</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> provide</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;java&#39;.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  Selection</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    Command</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-----------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">*+ 1           java-1.8.0-openjdk.x86_64 (</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.302.b08-0.el7_9.x86_64/jre/bin/java</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">   2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">           java-11-openjdk.x86_64</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (/usr/lib/jvm/java-11-openjdk-11.0.12.0.7-0.el7_9.x86_64/bin/java)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Enter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> keep</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> current</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> selection[+],</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> or</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> type</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> selection</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> number:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>이렇게 동일 역할의 프로그램 중 기본 인식 값은 <code>alternatives</code>로 변경 가능하다.</li><li>OpenJDK 1.8이 기본으로 설정된 상태니까 2를 입력하여 11로 변경되도록 했다.<br> (시스템에 즉시 반영되오니 변경 전 동작되는 버전 등에 문제가 없는지 꼭 확인하자.)</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> java</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -version</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">openjdk</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> version</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;11.0.12&quot;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 2021-07-20</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> LTS</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">OpenJDK</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Runtime</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Environment</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 18.9</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (build </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">11.0.12+7-LTS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">OpenJDK</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 64-Bit</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Server</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> VM</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 18.9</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (build </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">11.0.12+7-LTS,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mixed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mode,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sharing</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>alternatives</code> 설정을 변경한 뒤 확인해보면 대상 버전이 조회되는 것이 확인된다.</li></ul><hr><p>정말 IT의 세계에는 모르는 것도, 그리고 배울 것도 굉장히 많다는 것을 또 느낀다.<br> 운영을 몇 년동안 했으면서도 여기저기서 막히는 것을 보면 개발은 또 어떨까 싶다..</p><p>그래도 공부하다 보면 언젠가 내가 원하는 위치에 원하는 직군을 가질 수 있겠지...?</p><p>끝까지 포스팅을 읽어주셔서 감사드리며, 틀린 내용이 있다면 댓글 부탁드립니다. 😎</p>`,24),l=[t];function h(p,k){return a(),s("div",null,l)}const o=i(n,[["render",h],["__file","JAVA-multiple-install.html.vue"]]),c=JSON.parse('{"path":"/posts/Computing/OS/Linux/CentOS/JAVA-multiple-install.html","title":"[CentOS] Java 여러 개 설치 방법","lang":"ko-KR","frontmatter":{"title":"[CentOS] Java 여러 개 설치 방법","categories":["CentOS"],"tags":["Server","CentOS","OpenJDK","Java","Multiple","YUM","alternative"],"date":"2022-08-27T00:00:00.000Z","editLink":false,"lastUpdated":true,"description":"🎇 테스트 환경 CentOS Linux release 7.9.2009 (Core) OpenJDK 11.0.12 OpenJDK 1.8.0_302 🤔 발생 상황 관리 중인 고객사에서 OpenJDK 버전을 두 개를 설치를 요청하면서 고민하게된 사항이다. 평소 고객 서비스 구축 간 YUM을 이용하여 Java를 설치할 때...","head":[["meta",{"property":"og:url","content":"https://blog.false.kr/posts/Computing/OS/Linux/CentOS/JAVA-multiple-install.html"}],["meta",{"property":"og:site_name","content":"찬스의 개발 블로그 : Chance Devlog"}],["meta",{"property":"og:title","content":"[CentOS] Java 여러 개 설치 방법"}],["meta",{"property":"og:description","content":"🎇 테스트 환경 CentOS Linux release 7.9.2009 (Core) OpenJDK 11.0.12 OpenJDK 1.8.0_302 🤔 발생 상황 관리 중인 고객사에서 OpenJDK 버전을 두 개를 설치를 요청하면서 고민하게된 사항이다. 평소 고객 서비스 구축 간 YUM을 이용하여 Java를 설치할 때..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-08-14T14:25:16.000Z"}],["meta",{"property":"article:author","content":"Chance"}],["meta",{"property":"article:tag","content":"Server"}],["meta",{"property":"article:tag","content":"CentOS"}],["meta",{"property":"article:tag","content":"OpenJDK"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"Multiple"}],["meta",{"property":"article:tag","content":"YUM"}],["meta",{"property":"article:tag","content":"alternative"}],["meta",{"property":"article:published_time","content":"2022-08-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-14T14:25:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"[CentOS] Java 여러 개 설치 방법\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-14T14:25:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Chance\\",\\"url\\":\\"https://blog.false.kr\\",\\"email\\":\\"chance0432@naver.com\\"}]}"]]},"headers":[{"level":2,"title":"🎇 테스트 환경","slug":"🎇-테스트-환경","link":"#🎇-테스트-환경","children":[]},{"level":2,"title":"🤔 발생 상황","slug":"🤔-발생-상황","link":"#🤔-발생-상황","children":[]},{"level":2,"title":"🔍 새로운 발견","slug":"🔍-새로운-발견","link":"#🔍-새로운-발견","children":[]},{"level":2,"title":"🔧 설치 및 설정 과정","slug":"🔧-설치-및-설정-과정","link":"#🔧-설치-및-설정-과정","children":[]}],"git":{"createdTime":1661526803000,"updatedTime":1723645516000,"contributors":[{"name":"Chance","email":"ahs0432@naver.com","commits":1}]},"readingTime":{"minutes":0.63,"words":189},"filePathRelative":"posts/Computing/OS/Linux/CentOS/JAVA-multiple-install.md","localizedDate":"2022년 8월 27일","excerpt":"<h2>🎇 테스트 환경</h2>\\n<ul>\\n<li>CentOS Linux release 7.9.2009 (Core)</li>\\n<li>OpenJDK 11.0.12</li>\\n<li>OpenJDK 1.8.0_302</li>\\n</ul>\\n<h2>🤔 발생 상황</h2>\\n<p>관리 중인 고객사에서 OpenJDK 버전을 두 개를 설치를 요청하면서 고민하게된 사항이다.</p>\\n<p>평소 고객 서비스 구축 간 YUM을 이용하여 Java를 설치할 때 두 개의 버전이 필요할 경우<br>\\n높은 버전을 기준으로 유지될 것이라고 판단하여 하나는 소스 컴파일 설치를 했었다.</p>","autoDesc":true}');export{o as comp,c as data};