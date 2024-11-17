import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,a as e}from"./app-DGa22xKU.js";const t="/assets/image/Post/Computing/OS/Linux/Rocky/Rocky-Mattermost-Install/1.png",n={},l=e(`<h2 id="테스트-환경" tabindex="-1"><a class="header-anchor" href="#테스트-환경"><span>테스트 환경</span></a></h2><h3 id="server" tabindex="-1"><a class="header-anchor" href="#server"><span>Server</span></a></h3><ul><li>Rocky 8.8</li><li>Mattermost 9.3.0</li></ul><h2 id="참고-사항" tabindex="-1"><a class="header-anchor" href="#참고-사항"><span>참고 사항</span></a></h2><h3 id="mattermost-이란" tabindex="-1"><a class="header-anchor" href="#mattermost-이란"><span>Mattermost 이란?</span></a></h3><p><code>Mattermost</code>는 여러 <code>Slack</code>과 같은 형태의 채팅 및 프로젝트 관리 프로그램입니다.</p><p>차이점은 <code>Slack</code>의 경우 라이선스를 기반으로 <code>SaaS</code> 형태로 서비스 사용이 필요하지만,<br><code>Mattermost</code>의 경우 자체 호스팅을 통해 오픈소스 형태로 서비스 사용이 가능합니다.</p><p>현재 국내 기업 중 <code>Samsung</code>에서 일부 도입하여 사용 중인 것으로 알려져있습니다.</p><h3 id="사용-방안" tabindex="-1"><a class="header-anchor" href="#사용-방안"><span>사용 방안</span></a></h3><ul><li><code>Slack</code>의 대안으로 사내 자체 메신저 등의 형태로 프로젝트에 도입 가능합니다.</li></ul><h3 id="참고-자료" tabindex="-1"><a class="header-anchor" href="#참고-자료"><span>참고 자료</span></a></h3><ul><li><a href="https://docs.mattermost.com/install/install-rhel-8.html" target="_blank" rel="noopener noreferrer">Mattermost RHEL 8 설치</a></li><li><a href="https://docs.mattermost.com/install/prepare-mattermost-mysql-database.html" target="_blank" rel="noopener noreferrer">Mattermost MySQL 설정</a></li></ul><h2 id="설치-및-설정-과정" tabindex="-1"><a class="header-anchor" href="#설치-및-설정-과정"><span>설치 및 설정 과정</span></a></h2><h3 id="mattermost-설치" tabindex="-1"><a class="header-anchor" href="#mattermost-설치"><span>Mattermost 설치</span></a></h3><p>서버 내에 <code>Mattermost</code> 관련 소스 코드가 담긴 압축 파일을 다운로드 합니다.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/src/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://releases.mattermost.com/9.3.0/mattermost-9.3.0-linux-amd64.tar.gz</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>대상 압축 파일을 해제한 뒤 <code>/opt/</code> 경로 하위로 파일을 이관합니다.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -xvzf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mattermost</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">.gz</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mv</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mattermost</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /opt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>/opt/mattermost/data</code> 경로를 생성합니다.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mkdir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /opt/mattermost/data</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>mattermost</code> 계정을 생성하고 <code>/opt/mattermost</code> 경로에 대한 권한을 부여합니다.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> useradd</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --system</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --user-group</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mattermost</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> chown</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -R</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mattermost:mattermost</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /opt/mattermost</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> chmod</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -R</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> g+w</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /opt/mattermost</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>서비스 등록을 위해 서비스 파일을 생성하고 내용을 작성합니다.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /lib/systemd/system/mattermost.service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Description</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">Mattermost</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">After</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">network.target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Type</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">notify</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ExecStart</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/opt/mattermost/bin/mattermost</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">TimeoutStartSec</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">3600</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">KillMode</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">mixed</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Restart</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">always</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">RestartSec</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">10</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">WorkingDirectory</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/opt/mattermost</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">User</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">mattermost</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Group</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">mattermost</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">LimitNOFILE</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">49152</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">WantedBy</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">multi-user.target</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>mattermost</code> 서비스가 자동으로 실행될 수 있도록 서비스 상 등록합니다.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mattermost</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>설정 파일을 수정하기 전에 <code>config.json</code> 파일을 백업합니다.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> cp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /opt/mattermost/config/config.json</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /opt/mattermost/config/config.defaults.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="mysql-설치" tabindex="-1"><a class="header-anchor" href="#mysql-설치"><span>MySQL 설치</span></a></h3><p><code>dnf</code>를 이용하여 <code>mysql-server</code> 패키지를 설치합니다.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dnf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql-server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>mysqld</code>를 서비스 상 등록하고 실행합니다.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --now</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysqld</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>MySQL</code>에 접근하여 <code>User</code> 및 <code>Database</code>를 생성합니다.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> CREATE</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> DATABASE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mattermost;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> CREATE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> USER mmuser IDENTIFIED </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">BY</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;&lt;password&gt;&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> GRANT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ALL </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">ON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mattermost.* </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">TO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mmuser;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>MySQL</code> 관련 설정을 <code>Mattermost</code>의 <code>config.json</code> 파일 내 <code>Database</code> 관련 내용을 변경합니다.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vim</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /opt/mattermost/config/config.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">&quot;SqlSettings&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        &quot;DriverName&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;mysql&quot;,</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">        &quot;DataSource&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;mmuser:&lt;password&gt;@tcp(127.0.0.1:3306)/mattermost?charset=utf8mb4,utf8\\u0026writeTimeout=30s&quot;,</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mattermost-시작-및-연결" tabindex="-1"><a class="header-anchor" href="#mattermost-시작-및-연결"><span>Mattermost 시작 및 연결</span></a></h3><p><code>Mattermost</code>를 실행합니다.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mattermost</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>정상적으로 <code>8065</code> 포트가 기동됐는지 확인합니다.</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> netstat</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -nlpt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> | </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">grep</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 8065</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tcp6</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">       0</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> :::8065</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                 :::</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">*</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">                    LISTEN</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">      35555/mattermost</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>대상 서비스 포트에 접근하여 <code>회원가입</code> 후 사용합니다.</p><figure><img src="`+t+'" alt="" width="90%" height="90%" tabindex="0" loading="lazy"><figcaption>회원가입 페이지</figcaption></figure><hr><p>가이드가 도움이 되셨길 바랍니다!<br> 끝까지 포스팅을 읽어주셔서 감사드립니다. 😎</p>',49),h=[l];function r(k,d){return a(),i("div",null,h)}const c=s(n,[["render",r],["__file","Rocky-Mattermost-Install.html.vue"]]),g=JSON.parse('{"path":"/posts/Computing/OS/Linux/Rocky/Rocky-Mattermost-Install.html","title":"[Rocky] Mattermost 설치 방법","lang":"ko-KR","frontmatter":{"title":"[Rocky] Mattermost 설치 방법","categories":["Rocky"],"tags":["Server","Rocky","RHEL","Mattermost","Slack","Self-hosted","Chat","채팅","프로젝트","WebHook","MySQL","오픈소스","OpenSource"],"date":"2024-10-27T00:00:00.000Z","editLink":false,"lastUpdated":true,"description":"테스트 환경 Server Rocky 8.8 Mattermost 9.3.0 참고 사항 Mattermost 이란? Mattermost는 여러 Slack과 같은 형태의 채팅 및 프로젝트 관리 프로그램입니다. 차이점은 Slack의 경우 라이선스를 기반으로 SaaS 형태로 서비스 사용이 필요하지만, Mattermost의 경우...","head":[["meta",{"property":"og:url","content":"https://blog.false.kr/posts/Computing/OS/Linux/Rocky/Rocky-Mattermost-Install.html"}],["meta",{"property":"og:site_name","content":"찬스의 개발 블로그 : Chance Devlog"}],["meta",{"property":"og:title","content":"[Rocky] Mattermost 설치 방법"}],["meta",{"property":"og:description","content":"테스트 환경 Server Rocky 8.8 Mattermost 9.3.0 참고 사항 Mattermost 이란? Mattermost는 여러 Slack과 같은 형태의 채팅 및 프로젝트 관리 프로그램입니다. 차이점은 Slack의 경우 라이선스를 기반으로 SaaS 형태로 서비스 사용이 필요하지만, Mattermost의 경우..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog.false.kr/assets/image/Post/Computing/OS/Linux/Rocky/Rocky-Mattermost-Install/1.png \\"회원가입 페이지\\" =90%x90%"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-10-27T06:08:49.000Z"}],["meta",{"property":"article:author","content":"Chance"}],["meta",{"property":"article:tag","content":"Server"}],["meta",{"property":"article:tag","content":"Rocky"}],["meta",{"property":"article:tag","content":"RHEL"}],["meta",{"property":"article:tag","content":"Mattermost"}],["meta",{"property":"article:tag","content":"Slack"}],["meta",{"property":"article:tag","content":"Self-hosted"}],["meta",{"property":"article:tag","content":"Chat"}],["meta",{"property":"article:tag","content":"채팅"}],["meta",{"property":"article:tag","content":"프로젝트"}],["meta",{"property":"article:tag","content":"WebHook"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:tag","content":"오픈소스"}],["meta",{"property":"article:tag","content":"OpenSource"}],["meta",{"property":"article:published_time","content":"2024-10-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-27T06:08:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"[Rocky] Mattermost 설치 방법\\",\\"image\\":[\\"https://blog.false.kr/assets/image/Post/Computing/OS/Linux/Rocky/Rocky-Mattermost-Install/1.png \\\\\\"회원가입 페이지\\\\\\" =90%x90%\\"],\\"datePublished\\":\\"2024-10-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-27T06:08:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Chance\\",\\"url\\":\\"https://blog.false.kr\\",\\"email\\":\\"chance0432@naver.com\\"}]}"]]},"headers":[{"level":2,"title":"테스트 환경","slug":"테스트-환경","link":"#테스트-환경","children":[{"level":3,"title":"Server","slug":"server","link":"#server","children":[]}]},{"level":2,"title":"참고 사항","slug":"참고-사항","link":"#참고-사항","children":[{"level":3,"title":"Mattermost 이란?","slug":"mattermost-이란","link":"#mattermost-이란","children":[]},{"level":3,"title":"사용 방안","slug":"사용-방안","link":"#사용-방안","children":[]},{"level":3,"title":"참고 자료","slug":"참고-자료","link":"#참고-자료","children":[]}]},{"level":2,"title":"설치 및 설정 과정","slug":"설치-및-설정-과정","link":"#설치-및-설정-과정","children":[{"level":3,"title":"Mattermost 설치","slug":"mattermost-설치","link":"#mattermost-설치","children":[]},{"level":3,"title":"MySQL 설치","slug":"mysql-설치","link":"#mysql-설치","children":[]},{"level":3,"title":"Mattermost 시작 및 연결","slug":"mattermost-시작-및-연결","link":"#mattermost-시작-및-연결","children":[]}]}],"git":{"createdTime":1730009329000,"updatedTime":1730009329000,"contributors":[{"name":"ahs0432","email":"ahs0432@naver.com","commits":1}]},"readingTime":{"minutes":0.83,"words":249},"filePathRelative":"posts/Computing/OS/Linux/Rocky/Rocky-Mattermost-Install.md","localizedDate":"2024년 10월 27일","excerpt":"<h2>테스트 환경</h2>\\n<h3>Server</h3>\\n<ul>\\n<li>Rocky 8.8</li>\\n<li>Mattermost 9.3.0</li>\\n</ul>\\n<h2>참고 사항</h2>\\n<h3>Mattermost 이란?</h3>\\n<p><code>Mattermost</code>는 여러 <code>Slack</code>과 같은 형태의 채팅 및 프로젝트 관리 프로그램입니다.</p>\\n<p>차이점은 <code>Slack</code>의 경우 라이선스를 기반으로 <code>SaaS</code> 형태로 서비스 사용이 필요하지만,<br>\\n<code>Mattermost</code>의 경우 자체 호스팅을 통해 오픈소스 형태로 서비스 사용이 가능합니다.</p>","autoDesc":true}');export{c as comp,g as data};