import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,c as i,d as e,b as l,w as p,e as n,a as o,o as r}from"./app-C7Nk_A05.js";const c="/assets/image/Post/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Private-Connect-MySQL/1.png",d="/assets/image/Post/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Private-Connect-MySQL/2.png",u="/assets/image/Post/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Private-Connect-MySQL/3.png",g={},m={class:"hint-container info"},v=e("p",{class:"hint-container-title"},"정보",-1),h=e("p",null,[n("해당 포스팅은 "),e("code",null,"OpenVPN"),n("으로 사전 구성이 완료되어 연결이 가능한 상황 하에 진행됩니다."),e("br"),n(" 만약 "),e("code",null,"OpenVPN Server"),n("와 "),e("code",null,"Client"),n("를 구축하는 단계부터 진행하길 원하시면 아래 포스팅 참고바랍니다.")],-1),S=o(`<h2 id="테스트-환경" tabindex="-1"><a class="header-anchor" href="#테스트-환경"><span>테스트 환경</span></a></h2><h3 id="openvpn-server" tabindex="-1"><a class="header-anchor" href="#openvpn-server"><span>OpenVPN Server</span></a></h3><ul><li>CentOS Linux release 7.0.1406 (Core)</li><li>OpenVPN 2.4.6 x86_64-redhat-linux-gnu</li><li>easy-rsa 3.0.3</li></ul><h3 id="database-server" tabindex="-1"><a class="header-anchor" href="#database-server"><span>Database Server</span></a></h3><ul><li>CentOS Linux release 7.0.1406 (Core)</li><li>MySQL 5.7.24</li></ul><h3 id="client" tabindex="-1"><a class="header-anchor" href="#client"><span>Client</span></a></h3><ul><li>Eclipse 2019-03</li><li>JAVA 1.8.0_211</li><li>Tomcat 8.5</li></ul><h2 id="사전-준비" tabindex="-1"><a class="header-anchor" href="#사전-준비"><span>사전 준비</span></a></h2><ul><li>기본적으로 <code>Database Server</code>와 <code>OpenVPN Server</code>가 같은 내부망으로 연결됐다는 가정 하에 진행합니다.</li><li>내부망과 VPN 망은 서로 다른 대역을 사용합니다. (포스팅 기준 내부망: <code>172.27.0.0/16</code>, VPN: <code>10.8.0.0/24</code>)</li><li>현재 포스팅의 경우 <code>Client</code> → <code>VPN</code> → <code>MySQL</code> 순으로 통신을 시도하고 접속되는 구조입니다.</li></ul><h2 id="test-code-작성-및-접근-시도" tabindex="-1"><a class="header-anchor" href="#test-code-작성-및-접근-시도"><span>Test Code 작성 및 접근 시도</span></a></h2><h3 id="java-jsp-기준-test-code-작성" tabindex="-1"><a class="header-anchor" href="#java-jsp-기준-test-code-작성"><span>JAVA JSP 기준 Test Code 작성</span></a></h3><div class="language-jsp line-numbers-mode" data-highlighter="shiki" data-ext="jsp" data-title="jsp" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;%@page import=&quot;java.sql.Statement&quot; %&gt;</span></span>
<span class="line"><span>&lt;%@page import=&quot;java.sql.DriverManager&quot; %&gt;</span></span>
<span class="line"><span>&lt;%@page import=&quot;java.sql.Connection&quot; %&gt;</span></span>
<span class="line"><span>&lt;%@page language=&quot;java&quot; contentType=&quot;text/html; charset=UTF-8&quot;</span></span>
<span class="line"><span>  pageEncoding=&quot;UTF-8&quot; %&gt;</span></span>
<span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span>    &lt;title&gt;Test&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;%</span></span>
<span class="line"><span>      Connection conn = null;</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      try {</span></span>
<span class="line"><span>        Class.forName(&quot;com.mysql.jdbc.Driver&quot;);</span></span>
<span class="line"><span>        conn = DriverManager.getConnection(&quot;jdbc:mysql://[DB Server Private IP]:[Port]/[DB Name]&quot;, &quot;[User]&quot;, &quot;[Password]&quot;);</span></span>
<span class="line"><span>        %&gt;&lt;p&gt;DB 연결에 성공하였습니다!&lt;/p&gt;&lt;%</span></span>
<span class="line"><span>      } catch(Exception e) {</span></span>
<span class="line"><span>        %&gt;&lt;p&gt;DB 연결에 실패하였습니다!&lt;/p&gt;&lt;%</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    %&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>상위 Code처럼 JAVA JSP 기준으로 Test Code를 작성하여줍니다.</li><li>[] 로 표기된 내용은 기입된 사항에 맞게 DB 정보를 입력합니다.</li><li>모든 정보를 정상적으로 입력한 경우 <code>Tomcat</code>을 기동 시켜줍니다.</li></ul><h3 id="페이지-접근을-통한-mysql-통신-확인" tabindex="-1"><a class="header-anchor" href="#페이지-접근을-통한-mysql-통신-확인"><span>페이지 접근을 통한 MySQL 통신 확인</span></a></h3><figure><img src="`+c+'" alt="" width="70%" height="70%" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>사진과 같이 <code>VPN</code> 연결을 진행하지 않고 Test Page 접속 시 DB 연결에 실패가 확인됩니다.</li></ul><figure><img src="'+d+'" alt="" width="70%" height="70%" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>이 상태에서 <code>OpenVPN Client</code>를 실행하여 <code>OpenVPN Server</code>로 정상 연결되는지 우선 확인합니다.</li></ul><figure><img src="'+u+'" alt="" width="70%" height="70%" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>정상적으로 <code>VPN</code>에 연결된 이후 Test Page에 접근할 경우 정상적으로 DB와의 통신이 확인됩니다.</li></ul><hr><p>위와 같은 과정을 통해 <code>OpenVPN</code> 설정을 통해 외부망에서 <code>OpenVPN Server</code>가<br> 위치한 <code>eth0</code> 인터페이스의 내부망 간 정상적인 통신이 가능한지 확인하였습니다.</p><p>이전 포스팅 상 확인 가능하듯 <code>eth0</code>를 공용으로 사용할 수 있도록 설정한 이후<br><code>OpenVPN</code>의 망을 <code>eth0</code>를 통하도록 설정했기 때문에 위와 같은 동작을 보입니다.</p><p>모든 구성에서 위와 같은 동작을 보이는 것은 아니오니 자신의 구성을 잘 파악하고<br> 위와 같은 구성을 통해 외부망에서 내부 App을 컨트롤 할 수 있는지 판단해야합니다.</p><p>긴 포스팅을 읽어주셔서 감사합니다! 😄</p>',25);function O(C,P){const t=s("RouteLink");return r(),i("div",null,[e("div",m,[v,h,e("ul",null,[e("li",null,[l(t,{to:"/posts/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Server-Client-Setting.html"},{default:p(()=>[n("[CentOS] OpenVPN 서버 & 클라이언트 설정")]),_:1})])])]),S])}const V=a(g,[["render",O],["__file","CentOS-OpenVPN-Private-Connect-MySQL.html.vue"]]),N=JSON.parse('{"path":"/posts/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Private-Connect-MySQL.html","title":"[CentOS] OpenVPN을 이용한 내부망 MySQL 접근 확인","lang":"ko-KR","frontmatter":{"title":"[CentOS] OpenVPN을 이용한 내부망 MySQL 접근 확인","categories":["CentOS"],"tags":["Server","CentOS","OpenVPN","OpenVPN Client","MySQL"],"date":"2020-03-11T00:00:00.000Z","editLink":false,"lastUpdated":true,"description":"정보 해당 포스팅은 OpenVPN으로 사전 구성이 완료되어 연결이 가능한 상황 하에 진행됩니다. 만약 OpenVPN Server와 Client를 구축하는 단계부터 진행하길 원하시면 아래 포스팅 참고바랍니다. 테스트 환경 OpenVPN Server CentOS Linux release 7.0.1406 (Core) Op...","head":[["meta",{"property":"og:url","content":"https://blog.false.kr/posts/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Private-Connect-MySQL.html"}],["meta",{"property":"og:site_name","content":"찬스의 개발 블로그 : Chance Devlog"}],["meta",{"property":"og:title","content":"[CentOS] OpenVPN을 이용한 내부망 MySQL 접근 확인"}],["meta",{"property":"og:description","content":"정보 해당 포스팅은 OpenVPN으로 사전 구성이 완료되어 연결이 가능한 상황 하에 진행됩니다. 만약 OpenVPN Server와 Client를 구축하는 단계부터 진행하길 원하시면 아래 포스팅 참고바랍니다. 테스트 환경 OpenVPN Server CentOS Linux release 7.0.1406 (Core) Op..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog.false.kr/assets/image/Post/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Private-Connect-MySQL/1.png =70%x70%"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-08-14T14:25:16.000Z"}],["meta",{"property":"article:author","content":"Chance"}],["meta",{"property":"article:tag","content":"Server"}],["meta",{"property":"article:tag","content":"CentOS"}],["meta",{"property":"article:tag","content":"OpenVPN"}],["meta",{"property":"article:tag","content":"OpenVPN Client"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2020-03-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-14T14:25:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"[CentOS] OpenVPN을 이용한 내부망 MySQL 접근 확인\\",\\"image\\":[\\"https://blog.false.kr/assets/image/Post/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Private-Connect-MySQL/1.png =70%x70%\\",\\"https://blog.false.kr/assets/image/Post/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Private-Connect-MySQL/2.png =70%x70%\\",\\"https://blog.false.kr/assets/image/Post/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Private-Connect-MySQL/3.png =70%x70%\\"],\\"datePublished\\":\\"2020-03-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-14T14:25:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Chance\\",\\"url\\":\\"https://blog.false.kr\\",\\"email\\":\\"chance0432@naver.com\\"}]}"]]},"headers":[{"level":2,"title":"테스트 환경","slug":"테스트-환경","link":"#테스트-환경","children":[{"level":3,"title":"OpenVPN Server","slug":"openvpn-server","link":"#openvpn-server","children":[]},{"level":3,"title":"Database Server","slug":"database-server","link":"#database-server","children":[]},{"level":3,"title":"Client","slug":"client","link":"#client","children":[]}]},{"level":2,"title":"사전 준비","slug":"사전-준비","link":"#사전-준비","children":[]},{"level":2,"title":"Test Code 작성 및 접근 시도","slug":"test-code-작성-및-접근-시도","link":"#test-code-작성-및-접근-시도","children":[{"level":3,"title":"JAVA JSP 기준 Test Code 작성","slug":"java-jsp-기준-test-code-작성","link":"#java-jsp-기준-test-code-작성","children":[]},{"level":3,"title":"페이지 접근을 통한 MySQL 통신 확인","slug":"페이지-접근을-통한-mysql-통신-확인","link":"#페이지-접근을-통한-mysql-통신-확인","children":[]}]}],"git":{"createdTime":1657248502000,"updatedTime":1723645516000,"contributors":[{"name":"Chance","email":"ahs0432@naver.com","commits":1}]},"readingTime":{"minutes":0.72,"words":215},"filePathRelative":"posts/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Private-Connect-MySQL.md","localizedDate":"2020년 3월 11일","excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">정보</p>\\n<p>해당 포스팅은 <code>OpenVPN</code>으로 사전 구성이 완료되어 연결이 가능한 상황 하에 진행됩니다.<br>\\n만약 <code>OpenVPN Server</code>와 <code>Client</code>를 구축하는 단계부터 진행하길 원하시면 아래 포스팅 참고바랍니다.</p>\\n<ul>\\n<li><a href=\\"/posts/Computing/OS/Linux/CentOS/CentOS-OpenVPN-Server-Client-Setting.html\\" target=\\"_blank\\">[CentOS] OpenVPN 서버 &amp; 클라이언트 설정</a></li>\\n</ul>\\n</div>","autoDesc":true}');export{V as comp,N as data};
