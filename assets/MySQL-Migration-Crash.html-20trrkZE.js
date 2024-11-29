import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as a,a as i}from"./app-zWBho-jB.js";const n={},s=i(`<h2 id="테스트-환경" tabindex="-1"><a class="header-anchor" href="#테스트-환경"><span>테스트 환경</span></a></h2><ul><li>CentOS 5.8 / MySQL 5.1</li><li>CentOS 7.6 / MySQL 5.5</li></ul><h2 id="발생-상황" tabindex="-1"><a class="header-anchor" href="#발생-상황"><span>발생 상황</span></a></h2><ul><li>2021년 사이트 이전, 업그레이드 작업 진행 간 MySQL을 5.1 → 5.5로 변경했다.<br> (아무래도 기존 사용하던 버전이 너무 낮다보니까 거쳐가는 형태로 5.5를 선정했다.)</li><li>Dump 파일로 복원하였으나 일부 Database에 접근 및 쿼리 수행 간 오류가 발생됐다.</li><li>오류는 <code>The table is probably corrupted.</code> 버전 간 차이로 인한 충돌로 볼 수 있다.</li></ul><h2 id="해결-방법" tabindex="-1"><a class="header-anchor" href="#해결-방법"><span>해결 방법</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql_upgrade</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -uroot</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --force</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Enter</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> password:</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> # 패스워드 입력</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MySQL에서 실행 가능한 Upgrade를 강제로 수행하여 이슈를 해소하였다.</li><li>이슈 해소 과정에서 DB 충돌로 인해 문제가 되는 경우도 있기에 테스트는 필수!!</li></ul><hr><p>끝까지 포스팅을 읽어주셔서 감사합니다.</p>`,9),l=[s];function r(o,p){return a(),t("div",null,l)}const d=e(n,[["render",r],["__file","MySQL-Migration-Crash.html.vue"]]),y=JSON.parse('{"path":"/posts/Computing/Database/MySQL/MySQL-Migration-Crash.html","title":"[MySQL] MySQL 버전 변경 간 충돌 오류 해결","lang":"ko-KR","frontmatter":{"title":"[MySQL] MySQL 버전 변경 간 충돌 오류 해결","categories":["MySQL"],"tags":["MySQL","Database","CentOS","Upgrade","Migration"],"date":"2022-08-08T00:00:00.000Z","editLink":false,"lastUpdated":true,"description":"테스트 환경 CentOS 5.8 / MySQL 5.1 CentOS 7.6 / MySQL 5.5 발생 상황 2021년 사이트 이전, 업그레이드 작업 진행 간 MySQL을 5.1 → 5.5로 변경했다. (아무래도 기존 사용하던 버전이 너무 낮다보니까 거쳐가는 형태로 5.5를 선정했다.) Dump 파일로 복원하였으나 일부...","head":[["meta",{"property":"og:url","content":"https://blog.false.kr/posts/Computing/Database/MySQL/MySQL-Migration-Crash.html"}],["meta",{"property":"og:site_name","content":"찬스의 개발 블로그 : Chance Devlog"}],["meta",{"property":"og:title","content":"[MySQL] MySQL 버전 변경 간 충돌 오류 해결"}],["meta",{"property":"og:description","content":"테스트 환경 CentOS 5.8 / MySQL 5.1 CentOS 7.6 / MySQL 5.5 발생 상황 2021년 사이트 이전, 업그레이드 작업 진행 간 MySQL을 5.1 → 5.5로 변경했다. (아무래도 기존 사용하던 버전이 너무 낮다보니까 거쳐가는 형태로 5.5를 선정했다.) Dump 파일로 복원하였으나 일부..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-08-14T14:25:16.000Z"}],["meta",{"property":"article:author","content":"Chance"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:tag","content":"Database"}],["meta",{"property":"article:tag","content":"CentOS"}],["meta",{"property":"article:tag","content":"Upgrade"}],["meta",{"property":"article:tag","content":"Migration"}],["meta",{"property":"article:published_time","content":"2022-08-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-14T14:25:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"[MySQL] MySQL 버전 변경 간 충돌 오류 해결\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-14T14:25:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Chance\\",\\"url\\":\\"https://blog.false.kr\\",\\"email\\":\\"chance0432@naver.com\\"}]}"]]},"headers":[{"level":2,"title":"테스트 환경","slug":"테스트-환경","link":"#테스트-환경","children":[]},{"level":2,"title":"발생 상황","slug":"발생-상황","link":"#발생-상황","children":[]},{"level":2,"title":"해결 방법","slug":"해결-방법","link":"#해결-방법","children":[]}],"git":{"createdTime":1659939908000,"updatedTime":1723645516000,"contributors":[{"name":"Chance","email":"ahs0432@naver.com","commits":1}]},"readingTime":{"minutes":0.19,"words":58},"filePathRelative":"posts/Computing/Database/MySQL/MySQL-Migration-Crash.md","localizedDate":"2022년 8월 8일","excerpt":"<h2>테스트 환경</h2>\\n<ul>\\n<li>CentOS 5.8 / MySQL 5.1</li>\\n<li>CentOS 7.6 / MySQL 5.5</li>\\n</ul>\\n<h2>발생 상황</h2>\\n<ul>\\n<li>2021년 사이트 이전, 업그레이드 작업 진행 간 MySQL을 5.1 → 5.5로 변경했다.<br>\\n(아무래도 기존 사용하던 버전이 너무 낮다보니까 거쳐가는 형태로 5.5를 선정했다.)</li>\\n<li>Dump 파일로 복원하였으나 일부 Database에 접근 및 쿼리 수행 간 오류가 발생됐다.</li>\\n<li>오류는 <code>The table is probably corrupted.</code> 버전 간 차이로 인한 충돌로 볼 수 있다.</li>\\n</ul>","autoDesc":true}');export{d as comp,y as data};