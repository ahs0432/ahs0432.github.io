import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,c as l,d as e,b as a,w as o,e as t,a as p,o as r}from"./app-C7Nk_A05.js";const h="/assets/image/Post/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Client-to-Client/1.png",c="/assets/image/Post/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Client-to-Client/2.png",d="/assets/image/Post/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Client-to-Client/3.png",g="/assets/image/Post/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Client-to-Client/4.png",C={},k={class:"hint-container info"},m=e("p",{class:"hint-container-title"},"정보",-1),u=e("p",null,[t("해당 포스팅은 "),e("code",null,"OpenVPN"),t("으로 사전 구성이 완료되어 연결이 가능한 상황 하에 진행됩니다."),e("br"),t(" 만약 "),e("code",null,"OpenVPN Server"),t("와 "),e("code",null,"Client"),t("를 구축하는 단계부터 진행하길 원하시면 아래 포스팅 참고바랍니다.")],-1),O=p(`<h2 id="테스트-환경" tabindex="-1"><a class="header-anchor" href="#테스트-환경"><span>테스트 환경</span></a></h2><h3 id="openvpn-server" tabindex="-1"><a class="header-anchor" href="#openvpn-server"><span>OpenVPN Server</span></a></h3><ul><li>CentOS Linux release 7.0.1406 (Core)</li><li>OpenVPN 2.4.6 x86_64-redhat-linux-gnu</li><li>easy-rsa 3.0.3</li></ul><h3 id="client-1" tabindex="-1"><a class="header-anchor" href="#client-1"><span>Client 1</span></a></h3><ul><li>Windows 10 64bit</li></ul><h3 id="client-2" tabindex="-1"><a class="header-anchor" href="#client-2"><span>Client 2</span></a></h3><ul><li>macOS 10.14 (Mojave)</li><li>Intellij IDEA 2019.1.3</li><li>JAVA 1.8.0_211</li><li>Tomcat 8.5</li></ul><h2 id="사전-준비" tabindex="-1"><a class="header-anchor" href="#사전-준비"><span>사전 준비</span></a></h2><ul><li><code>OpenVPN Client</code>를 2개 구축하여 1번은 10.8.0.2, 2번은 10.8.0.3 VPN IP를 부여했습니다.</li><li><code>Client 2</code>에서 <code>Tomcat</code>을 기동하여 Test Page를 출력하므로 <code>Client 2</code>에 <code>Tomcat</code>을 구축합니다.</li></ul><h2 id="test-code-작성-및-접근-시도" tabindex="-1"><a class="header-anchor" href="#test-code-작성-및-접근-시도"><span>Test Code 작성 및 접근 시도</span></a></h2><h3 id="html-기준-test-code-작성" tabindex="-1"><a class="header-anchor" href="#html-기준-test-code-작성"><span>HTML 기준 Test Code 작성</span></a></h3><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;!</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">DOCTYPE</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">meta</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> charset</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;UTF-8&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;Client2&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    Client2 웹 페이지에 연결됐습니다!</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>Client 2</code>에서 <code>Client 1</code>에 보여주게될 Test Page Code입니다.</li><li>특별한 기능을 필요로 하는 것이 아니기 때문에 <code>HTML</code>로 간단하게 작성합니다.</li></ul><h3 id="페이지-접근을-통한-client-to-client-통신-확인" tabindex="-1"><a class="header-anchor" href="#페이지-접근을-통한-client-to-client-통신-확인"><span>페이지 접근을 통한 Client to Client 통신 확인</span></a></h3><figure><img src="`+h+'" alt="" width="90%" height="90%" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>두 <code>Client</code> 모두 <code>VPN</code>을 접속하지 않은 상태에서 상대 IP 입력 시 접근되지 않습니다.</li></ul><figure><img src="'+c+'" alt="" width="90%" height="90%" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><code>Windows OS(Client 1)</code>의 <code>VPN</code> 연결을 진행합니다.</li></ul><figure><img src="'+d+'" alt="" width="90%" height="90%" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>이어서 <code>macOS (Client 2)</code>의 <code>VPN</code> 연결을 진행합니다.</li></ul><figure><img src="'+g+'" alt="" width="90%" height="90%" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>정상적으로 <code>VPN</code>에 연결된 경우 <code>Client 1</code> → <code>Client 2</code> 통신 시도 시 사진와 같이 접근됩니다.</li></ul><hr><p><code>OpenVPN</code>에서 동작하는 대역이 마치 하나의 사설망처럼 동작된다는 것을 보여주기 위한 포스팅입니다.<br> 혹시나 <code>VPN</code>을 구축한다거나 <code>OpenVPN</code>을 활용하여 사설망 구축 시 참고 부탁드립니다!</p><p>긴 포스팅을 읽어주셔서 감사합니다! 😃</p>',25);function S(B,P){const i=s("RouteLink");return r(),l("div",null,[e("div",k,[m,u,e("ul",null,[e("li",null,[a(i,{to:"/posts/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Server-Client-Setting.html"},{default:o(()=>[t("[CentOS] OpenVPN 서버 & 클라이언트 설정")]),_:1})])])]),O])}const A=n(C,[["render",S],["__file","CentOS-OpenVPN-Client-to-Client.html.vue"]]),N=JSON.parse('{"path":"/posts/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Client-to-Client.html","title":"[CentOS] OpenVPN을 Client 간 통신 확인","lang":"ko-KR","frontmatter":{"title":"[CentOS] OpenVPN을 Client 간 통신 확인","categories":["CentOS"],"tags":["Server","CentOS","OpenVPN","OpenVPN Client"],"date":"2020-03-11T00:00:00.000Z","editLink":false,"lastUpdated":true,"description":"정보 해당 포스팅은 OpenVPN으로 사전 구성이 완료되어 연결이 가능한 상황 하에 진행됩니다. 만약 OpenVPN Server와 Client를 구축하는 단계부터 진행하길 원하시면 아래 포스팅 참고바랍니다. 테스트 환경 OpenVPN Server CentOS Linux release 7.0.1406 (Core) Op...","head":[["meta",{"property":"og:url","content":"https://blog.false.kr/posts/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Client-to-Client.html"}],["meta",{"property":"og:site_name","content":"찬스의 개발 블로그 : Chance Devlog"}],["meta",{"property":"og:title","content":"[CentOS] OpenVPN을 Client 간 통신 확인"}],["meta",{"property":"og:description","content":"정보 해당 포스팅은 OpenVPN으로 사전 구성이 완료되어 연결이 가능한 상황 하에 진행됩니다. 만약 OpenVPN Server와 Client를 구축하는 단계부터 진행하길 원하시면 아래 포스팅 참고바랍니다. 테스트 환경 OpenVPN Server CentOS Linux release 7.0.1406 (Core) Op..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog.false.kr/assets/image/Post/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Client-to-Client/1.png =90%x90%"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-08-14T14:25:16.000Z"}],["meta",{"property":"article:author","content":"Chance"}],["meta",{"property":"article:tag","content":"Server"}],["meta",{"property":"article:tag","content":"CentOS"}],["meta",{"property":"article:tag","content":"OpenVPN"}],["meta",{"property":"article:tag","content":"OpenVPN Client"}],["meta",{"property":"article:published_time","content":"2020-03-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-14T14:25:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"[CentOS] OpenVPN을 Client 간 통신 확인\\",\\"image\\":[\\"https://blog.false.kr/assets/image/Post/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Client-to-Client/1.png =90%x90%\\",\\"https://blog.false.kr/assets/image/Post/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Client-to-Client/2.png =90%x90%\\",\\"https://blog.false.kr/assets/image/Post/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Client-to-Client/3.png =90%x90%\\",\\"https://blog.false.kr/assets/image/Post/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Client-to-Client/4.png =90%x90%\\"],\\"datePublished\\":\\"2020-03-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-14T14:25:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Chance\\",\\"url\\":\\"https://blog.false.kr\\",\\"email\\":\\"chance0432@naver.com\\"}]}"]]},"headers":[{"level":2,"title":"테스트 환경","slug":"테스트-환경","link":"#테스트-환경","children":[{"level":3,"title":"OpenVPN Server","slug":"openvpn-server","link":"#openvpn-server","children":[]},{"level":3,"title":"Client 1","slug":"client-1","link":"#client-1","children":[]},{"level":3,"title":"Client 2","slug":"client-2","link":"#client-2","children":[]}]},{"level":2,"title":"사전 준비","slug":"사전-준비","link":"#사전-준비","children":[]},{"level":2,"title":"Test Code 작성 및 접근 시도","slug":"test-code-작성-및-접근-시도","link":"#test-code-작성-및-접근-시도","children":[{"level":3,"title":"HTML 기준 Test Code 작성","slug":"html-기준-test-code-작성","link":"#html-기준-test-code-작성","children":[]},{"level":3,"title":"페이지 접근을 통한 Client to Client 통신 확인","slug":"페이지-접근을-통한-client-to-client-통신-확인","link":"#페이지-접근을-통한-client-to-client-통신-확인","children":[]}]}],"git":{"createdTime":1657255215000,"updatedTime":1723645516000,"contributors":[{"name":"Chance","email":"ahs0432@naver.com","commits":1}]},"readingTime":{"minutes":0.58,"words":175},"filePathRelative":"posts/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Client-to-Client.md","localizedDate":"2020년 3월 11일","excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">정보</p>\\n<p>해당 포스팅은 <code>OpenVPN</code>으로 사전 구성이 완료되어 연결이 가능한 상황 하에 진행됩니다.<br>\\n만약 <code>OpenVPN Server</code>와 <code>Client</code>를 구축하는 단계부터 진행하길 원하시면 아래 포스팅 참고바랍니다.</p>\\n<ul>\\n<li><a href=\\"/posts/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Server-Client-Setting.html\\" target=\\"_blank\\">[CentOS] OpenVPN 서버 &amp; 클라이언트 설정</a></li>\\n</ul>\\n</div>","autoDesc":true}');export{A as comp,N as data};
