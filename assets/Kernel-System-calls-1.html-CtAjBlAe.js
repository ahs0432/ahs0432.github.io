import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,c as t,d as s,e,b as c,w as o,a as i,o as d}from"./app-Cr_3MIis.js";const r="/assets/image/Post/Computing/OS/Linux/Kernel/Kernel-System-calls-1/1.png",p="/assets/image/Post/Computing/OS/Linux/Kernel/Kernel-System-calls-1/2.png",h="/assets/image/Post/Computing/OS/Linux/Kernel/Kernel-System-calls-1/3.png",k={},g=i('<div class="hint-container info"><p class="hint-container-title">정보</p><p>📢 개인적인 정리를 위해 가벼운 어투로 내용을 정리하였습니다.</p></div><h2 id="🤔-지난-회차까지의-system-calls-간단-정리" tabindex="-1"><a class="header-anchor" href="#🤔-지난-회차까지의-system-calls-간단-정리"><span>🤔 지난 회차까지의 System calls 간단 정리</span></a></h2><p>지난 회차까지의 <code>System calls</code>은 <strong>Multi user system</strong>의 특징으로 인해<br> 다른 사용자의 <strong>I/O</strong>에 함부로 접근하는 일을 <strong>방지</strong>(<strong>Prevent</strong>)하기 위한 설계다.</p>',3),m=s("code",null,"Kernel",-1),u=s("code",null,"Function",-1),y=s("br",null,null,-1),b=i(`<h2 id="📻-system-calls" tabindex="-1"><a class="header-anchor" href="#📻-system-calls"><span>📻 System calls</span></a></h2><p><code>System calls</code>이라는게 어떤 것인지는 알겠는데 그렇다면 과연 어떻게 발생될까?<br> 아래는 사용자가 작성해둔 <code>printf()</code> 함수를 호출하기까지의 과정에서의 코드이다.</p><h3 id="😀-user-mode에서-동작" tabindex="-1"><a class="header-anchor" href="#😀-user-mode에서-동작"><span>😀 <code>User mode</code>에서 동작</span></a></h3><ul><li>사용자 코드</li></ul><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    sub</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // C Library 호출</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>C Library</code></li></ul><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // 이전 강의에서 3이라는 Instruction은 C Library에 해당했다.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">	write</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // System calls 호출</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    ...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>System calls</code></li></ul><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">write</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // 이전 강의에서 2는 System calls에 해당했다.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	prepare parameter</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // 사전 정의된 파라미터를 사용</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">	chmodk</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // Mode bit를 Kernel(1)로 변경하여 TRAP 발생</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🤖-kernel-mode에서-동작-sys-로-시작하는-함수-system-calls" tabindex="-1"><a class="header-anchor" href="#🤖-kernel-mode에서-동작-sys-로-시작하는-함수-system-calls"><span>🤖 <code>Kernel mode</code>에서 동작 (<code>sys_</code>로 시작하는 함수 / <code>System calls</code>)</span></a></h3><ul><li><code>sys_call()</code> / <code>Kernel</code>의 <code>TRAP Handler</code></li></ul><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sys_call</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // Kernel 내에 위치한 TRAP handler</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	...</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">	// 사용자 권한 확인 및 해당하는 함수 호출 (sys_write)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>sys_write()</code></li></ul><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sys_write</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">	...</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🦾-wrapper-routine" tabindex="-1"><a class="header-anchor" href="#🦾-wrapper-routine"><span>🦾 <code>Wrapper Routine</code></span></a></h3><p><code>TRAP</code>으로 넘어갈 내용을 준비하고 실질적으로 <code>TRAP</code>을 일으키는 공간**이다.</p><p><code>Wrapper Routine</code>에서는 <code>$0x80</code>과 같이 별다른 의미가 없는 문자를 이용하여<br><code>Machine Instruction</code>(컴퓨터가 알아듣는 언어)을 주어 <code>TRAP</code>을 일으킨다.</p><ul><li><code>Machine Instruction</code>은 제조사, Architecture 별 차이가 있을 수 있다.</li></ul><p><code>TRAP</code>이 발생되기 전에 <code>Prepare parameter</code>를 준비하는데 이때 중요한 것이 있다.<br> 바로 <strong><code>System call number</code>이라고 하는 일종의 번호를 갖는 요소</strong>를 의미하게 된다.</p><p>이 번호는 <strong><code>System call function</code>의 시작 주소를 담는 Array의 Index number</strong>다.<br> 만약 File에 관련된 호출을 할 경우 아래와 같이 번호를 이용해 Array에 접근한다.</p><ul><li>Open = 0 / Close = 2 / Read = 3 / Write = 4 ... <ul><li><code>System call number</code>와 대응하는 <code>System call function table</code>을 호출한다. <ul><li><code>System call function table</code><ul><li>운영체제가 보유한 <code>System call function</code>에 대한 정보이다.</li><li>제조사, Architecture, Compiler 별 차이가 있을 수 있다.</li></ul></li></ul></li><li><strong>기존 <code>System call function table</code>이 1이었다면 다른 시스템은 2일 수 있다.</strong><ul><li>이 경우 당연히 전혀 다른 <code>System call function</code>을 호출하니 문제가 된다.</li><li>이슈를 방지하기 위해 시스템이 변경되는 경우 <code>Re-compile</code>을 권장하게 된다.</li></ul></li></ul></li></ul><h4 id="wrapper-routine-과정-정리" tabindex="-1"><a class="header-anchor" href="#wrapper-routine-과정-정리"><span><code>Wrapper Routine</code> 과정 정리</span></a></h4><p><code>C 언어</code>를 기준으로 알아본 내용과 종합하여 내용을 정리해보면 아래와 같다.</p><ol><li><code>GCC</code> 등의 <code>Compiler</code>로 <strong>사용자 코드 확인 후 <code>Library</code>(3/<code>printf</code>)를 호출</strong></li><li><code>Library</code>에서 <code>System call</code>(2/<code>write</code>)을 호출하여 <strong><code>Kernel</code>의 <code>Function</code>을 호출</strong></li><li>Wrapper Routine에서 <strong><code>write</code>의 <code>System call number</code>를 확인하고 <code>TRAP</code>으로 변경</strong></li><li><code>System call number</code>로 <code>System call function table</code>에서 <strong>시작 주소에 접근</strong></li></ol><h3 id="🪣-system-calls-과정-정리" tabindex="-1"><a class="header-anchor" href="#🪣-system-calls-과정-정리"><span>🪣 <code>System calls</code> 과정 정리</span></a></h3><ol><li>사용자의 프로그램에서 <strong><code>System call</code>을 호출</strong></li><li><code>Machine Instruction</code>에서 <strong><code>TRAP</code>을 호출</strong></li><li>하드웨어에서 <strong><code>Mode bit</code>를 <code>User</code>(0) → <code>Kernel</code>(1)로 변경</strong></li><li>하드웨어가 <code>sys_call()</code>을 호출하여 <code>Kernel</code> 상 <strong><code>TRAP Handler</code> 호출</strong></li><li><code>TRAP Handler</code> 상 <code>Kernel</code> 내 <strong><code>Assembly function</code>을 수행 (<code>sys_write</code>...)</strong></li><li>사용자 프로그램의 <strong>진행 단계를 저장</strong> (기존의 위치로 돌아가기 위함)</li><li><strong><code>System call number</code>가 <code>System call function table</code>에 대응하는지 확인</strong></li><li><code>System call fucntion</code>의 <strong>시작 주소를 불러오고 작업 수행</strong><br> (만약 <code>Debug</code>가 필요한 경우 <code>Debugger</code>를 실행)</li><li><code>System call</code> 완료 후 <strong>사용자 프로그램 상 호출 위치로 복귀</strong><br><strong><code>Mode bit</code>를 <code>Kernel</code>(1) → <code>User</code>(0)로 변경</strong></li></ol><h3 id="⌨️-kernel-system-call-function의-역할" tabindex="-1"><a class="header-anchor" href="#⌨️-kernel-system-call-function의-역할"><span>⌨️ <code>Kernel</code> <code>System call function</code>의 역할</span></a></h3><p>우리가 사용하는 스마트폰과 같은 시스템도 모두 <code>Linux/Unix</code>를 이용하고 있다.<br> 가장 많이 사용되는 <code>Android</code>의 경우 <code>Linux 배포판</code>의 일종이라 볼 수도 있다.</p><p>그렇다면 스마트폰에서 갤러리 App에 사용자가 사진을 저장해뒀다라 가정해보자.<br> 원하는 사진을 읽어야할 것이고 <strong>이는 <code>C Library</code>와 같이 함수로 구현됐을 것</strong>이다.</p><p>해당 기능 사용을 위해 <strong><code>C Library</code>를 호출한다면 <code>System call</code>이 발생될 것</strong>이다.</p><p><code>Kernel</code>은 원하는 사진 파일에 접근하여 <code>System call</code> 호출한 사용자에게 전달한다.<br> 이때 <strong>만약 사용자 영역에 해당 파일이 있다면 <code>Kernel</code>은 데이터에 접근</strong>해야할 것이다.</p><p>그렇기에 <strong><code>사용자</code>와 <code>Kernel</code>이란 독립 프로그램 간 데이터를 주고 받을 통로가 필요</strong>하다.<br> 다만, 이런 기능은 <strong>보안적으로 굉장히 위험하기에 <code>Kernel</code>만 기능을 보유</strong>하도록 제한한다.</p><p>이전 설명한 <code>Kernel</code>은 <strong>모든 <code>Memory</code>에 접근하여 관리할 수 있다는 점</strong>이 이러한 기능이다.</p><p><strong><code>Kernel</code>이 <code>사용자</code>에게 <code>데이터</code>를 보내거나 <code>사용자</code>의 <code>데이터</code>를 읽는 것은 가능</strong>하지만,<br> 반대로 <code>사용자</code>는 <code>Kernel</code>에게 <code>데이터</code>를 보내거나 <code>Kernel</code>의 데이터를 읽지 못한다.</p><p>또한 이전 앞에서 알아봤던 것처럼 모든 <code>I/O Instruction</code>은 <code>Kernel</code>을 통해 이뤄진다.</p><div class="hint-container info"><p class="hint-container-title">정보</p><p>추가로 <code>Kernel</code>은 <code>Disk</code>에 용량을 할당할 경우 미리 지정된 용량에 따라 할당한다.<br><code>사용자</code>가 원하는 용량은 일정하지 않고 해소를 위해 <code>Kernel</code>이 공간을 만들어 제공한다.</p></div><h3 id="🧵-system-call-number의-상세-기능" tabindex="-1"><a class="header-anchor" href="#🧵-system-call-number의-상세-기능"><span>🧵 System call number의 상세 기능</span></a></h3><p><code>TRAP</code>을 수행하기 전에 미리 <code>System call number</code>를 정해 전달한다는 것은 알게 됐다.<br> 그렇다면 <code>System call number</code>는 도대체 무엇이고 어떠한 역할을 하는지 알아보도록 한다.</p><p><code>System call table</code>의 <strong><code>Index</code>로서 <code>System call function</code>의 시작 주소를 불러오는 용도</strong>다.<br> 이전 언급한 것과 같이 이러한 번호는 <code>Compiler</code>와 운영체제 제조사 등의 따라 차이가 있다.</p><p>그렇다면 만약 내가 원하는 기능이 있어서 이를 <code>System call</code> 형태로 만드는 것도 가능할까?<br> 당연히 가능하고 다른 기타 요소가 빠지기 때문에 성능적으로도 이점을 볼 수 있을 것이다.</p><p>하지만, 대부분 사람들은 직접 <code>System call</code>을 제작하여 사용하지 않는데 그것은 왜 그럴까?</p><p>그 이유는 <code>System call number</code>를 부여한단 점에서 타 시스템과의 차이가 생긴다는데 있다.<br> 내가 <strong>제작한 기능이 다른 시스템에는 존재하지 않는다는 것</strong>으로 이는 플랫폼 의존적이 된다.</p><p>또한 <code>System call</code>은 제작하여 추가는 가능하지만 이를 다시 변경/수정하는 것은 불가하다.<br> 이러한 단점을 안게 된다면 관리자는 시스템 변경 시마다 하나를 더 신경써야하게 될 것이다.</p><p>그렇다면 다른 방법은 없을까? 바로 <code>File Descriptor</code>라는 기능을 이용하면 가능할 것이다.<br><code>File Descriptor</code>는 간단하게 말하면 <code>File</code>이나 <code>Socket</code>을 편하게 번호로 부르는 것이다.</p><p>이를 이용하여 <code>read()</code>, <code>write()</code>, <code>ioctl()</code>과 같은 기존의 제작된 <code>System call</code> 호출 간<br><code>read(fd)</code>와 같은 형식으로 내가 만든 내용을 기준으로 호출한다면 Clear하게 추가가 된다.<br> (보통은 <code>File Descriptor</code>는 작은 숫자만 활용되므로 큰 숫자를 이용하여 만들도록 하자.)</p><h2 id="🧑‍💼-process-management" tabindex="-1"><a class="header-anchor" href="#🧑‍💼-process-management"><span>🧑‍💼 Process Management</span></a></h2><p><code>Process Management</code>는 <code>Kernel</code> 수행하는 작업 중 하나로 자원 할당과 관련이 있다.</p><p><code>Kernel</code>의 구조를 살펴보면 <strong>사용자 프로그램과 하드웨어 사이를 이어주는 역할</strong>이다.</p><ul><li><code>User Program</code>(<code>Shell</code>, <code>Process 1</code>...) → <code>Kernel</code> → <code>H/W</code> (<code>CPU</code>, <code>Mem</code>, <code>Disk</code>, <code>tty</code> ...)</li></ul><p>해당 역할을 수행하기 위해서는 하드웨어와 사용자 프로그램의 적절한 지원이 필요한데,<br> 효율적인 관리를 위해서 <code>Kernel</code>에는 자체적인 <code>Internal Data Structure</code>를 갖고 있다.</p><h3 id="🔖-kernel-data-structure" tabindex="-1"><a class="header-anchor" href="#🔖-kernel-data-structure"><span>🔖 Kernel Data Structure</span></a></h3><figure><img src="`+r+'" alt="Kernel Data Structure" tabindex="0" loading="lazy"><figcaption>Kernel Data Structure</figcaption></figure><p><code>Kernel</code>의 <code>Data Structure</code> 안에는 각각의 하드웨어에 대한 정보가 담겨있다.<br><code>Memory</code>의 경우 사용된 크기와 사용되는 영역이 어느 정도인지의 정보이다.</p><p>또한 하드웨어 뿐만 아닌 사용자 프로그램의 실행체인 <strong>프로세스 관리</strong>를 위해<br><strong><code>PCB</code></strong>(<strong><code>Process Control Block</code></strong>)라는 <strong>관리 정보를 담는 데이터 구조체</strong>를 갖는다.</p><p>이러한 **고유한 정보들을 담아놓은 구조체를 <code>Metadata</code>(<code>메타데이터</code>)**라 부른다.</p><h4 id="metadata의-구성-요소" tabindex="-1"><a class="header-anchor" href="#metadata의-구성-요소"><span>Metadata의 구성 요소</span></a></h4><p><code>Metadata</code>에는 어떠한 내용이 담겨있을까? 바로 아래와 같은 내용들이다.</p><ul><li>PID (Process ID) / 프로세스의 ID, 식별 역할</li><li>Priority / 프로세스의 우선순위</li><li>Waiting Event (Disk, KB) / Disk 접근 간의 대기 여부</li><li>Status (Run, Sleep...) / 프로세스의 실행 상태</li><li>Location of image in disk / Disk 내 이미지의 위치</li><li>Location of image in memory / Memory 내 이미지의 위치 (코드 위치)</li><li>Open files / 열린 파일들</li><li>Directory (Execute environment) / 디렉토리 위치 (실행 위치)</li><li>Terminal / 터미널</li><li>State vector save area (PC, R0) / 상태 벡터 저장 공간</li><li>Parent, Child process / 부모 또는 자식 프로세스</li><li>Execution time, ... / 실행 시간</li></ul><p>::info <code>State vector save area</code> (상태 벡터 저장 공간)</p><p>만약 먼저 프로세스가 <code>CPU</code>를 점유하다가 <code>Disk</code> 공간 확인이 필요한 경우<br><code>Waiting</code> 상태로 변경을 요청하고 <code>Disk</code>가 작업을 끝내기를 기다리게 된다.</p><p><code>CPU</code>는 <code>Waiting</code> 상태인 동안 <code>CPU</code>를 다른 프로세스에 제공할 수 있는데,<br> 이 과정에서 기존 프로세스가 수행하던 작업 내용을 <code>PCB</code>에 저장하게 된다.</p><p><code>State vector save area</code>는 저장 공간을 의미하고 <code>Register</code>를 저장한다.<br><code>Register</code>는 <code>State of Flipflop(0과 1)</code>이 32개 모여있는 집합체이다. ::</p><h4 id="프로세스-대기" tabindex="-1"><a class="header-anchor" href="#프로세스-대기"><span>프로세스 대기</span></a></h4><p>앞선 내용 중 <code>Waiting Event</code>와 <code>State vector save</code>라는 요소를 확인했다.<br> 해당 과정은 간단하게 보면 자원 점유를 대기하는 과정에서 사용하는 용어이다.</p><p>자원 점유 대기는 간단하게 보면 다른 자원이 이미 자원을 점유하고 있다면,<br> 자원을 다 사용할 때까지 기다렸다가 자신이 점유할 수 있도록 하는 것이다.</p><p>이러한 과정을 <code>Data Structure</code>에 대입하여 확인해보면 아래와 같다.</p><figure><img src="'+p+'" alt="Waiting Queue" tabindex="0" loading="lazy"><figcaption>Waiting Queue</figcaption></figure><p><code>프로세스</code>가 자신의 <code>PCB</code>에 사용하고자 하는 하드웨어 자원의 링크를 걸고<br><code>Waiting Queue</code>에 들어가고 다른 프로세스가 대기 중이면 다음으로 들어간다.</p><p><code>Waiting Queue</code>는 <code>CPU</code> 자원을 대기할 경우 <code>Ready Queue</code>라고 일컫고<br><code>Disk</code> 자원을 대기하면 <code>Disk I/O queue</code> 또는 <code>Disk wait queue</code>라고 한다.</p><h4 id="child-process-생성" tabindex="-1"><a class="header-anchor" href="#child-process-생성"><span>Child Process 생성</span></a></h4><p><code>Metadata</code>에 대해서 알아볼 때 <code>Parent</code>와 <code>Child Process</code>가 기재됐었다.<br> 해당 두 가지는 이름과 마찬가지로 서로 가족 프로세스로 묶어서 의미할 수 있다.</p><p>가장 큰 예시로 운영체제가 시작되면 가장 먼저 <code>Kernel</code> 프로세스가 실행될 것이다.<br> 그렇다면 이제 사용자가 접근하여 터미널이 켜진다면 <code>Shell</code>이 그 하단에서 실행된다.</p><p>이런 관계가 <code>Kernel</code>이란 <code>Parent</code> 밑에, <code>Shell</code>은 <code>Child</code>가 생성된 것을 의미한다.<br> 그렇다면 <code>Child Process</code>는 어떠한 과정을 통해서 생성되고 관리되는지 알아보겠다.</p><p>1강에서 이야기한 것과 같이 프로그램은 <code>User Stack</code>과 <code>Kernel Stack</code>을 갖는다.</p><p><code>User Stack</code>은 프로그램에서 사용되는 <code>함수</code>를 사용하는 과정에서 사용되고<br><code>Kernel Stack</code>은 <code>System call</code>을 통해 <code>Kernel function</code>을 사용할 때<br> 필요한 자료구조로서 필요한 <code>Local Variable</code>을 저장하기 위한 공간이다.</p><p>만약 자료구조로 가변적인 <code>Stack</code>이 아닌 늘 공간을 확보해둔다라고 가정하면,<br><strong>운영 간 필요한 공간이 상당히 낭비될 것이고 이는 비용으로 이어지게 될 것</strong>이다.</p><p><code>Child process</code>를 생성하기 위한 과정은 그림에서 나온 것과 같이 이뤄지게 된다.</p><figure><img src="'+h+`" alt="Child Process" tabindex="0" loading="lazy"><figcaption>Child Process</figcaption></figure><ol><li><code>PCB</code> 공간을 할당하고 <code>Parent process</code>의 <code>PCB</code>를 복사한다.<br> (이 과정에서 <code>Parent</code>의 환경을 상속하고 자원을 공유하여 사용한다.)</li><li><code>Child process</code>의 <code>Memory</code> 공간을 확보하여 할당하고 초기 값을 설정한다.<br> (이 과정에서 <code>Parent process</code>의 <strong>Image를 복사하여 동일한 코드를 보유한다.</strong>)</li><li><code>Disk</code>로부터 <code>Child process</code>에 대한 <strong>새로운 Image를 가져온다.</strong></li><li>새로 생긴 <code>Child process</code>의 <code>PCB</code>를 <code>CPU</code>에 <code>Ready queue</code>에 등록한다.</li></ol><p>이렇게 4가지 과정을 통해 <code>Child process</code>를 생성하여 운용할 수 있다.<br> 이 과정을 <code>System call</code>에서는 2가지 용어로 정리할 수 있는데 아래와 같다.</p><ol><li><code>fork()</code>: Step 1과 2의 과정을 통합하여 <strong><code>Parent</code>와 동일한 프로세스 생성</strong></li><li><code>exec()</code>: Step 3와 4의 과정을 통합하여 <strong>새로운 이미지로 Child process를 할당</strong></li></ol><h4 id="fork" tabindex="-1"><a class="header-anchor" href="#fork"><span><code>fork()</code></span></a></h4><p><code>Fork</code> 과정은 호출 시 두 번의 Return을 수행하고 이는 후반 파트에서 다룬다고 한다.</p><p>첫 번째 Return은 <code>Parent</code>가 본인이 가지고 있는 <code>Process</code>의 상태를 복사하고 나서<br><code>Ready queue</code>에 <code>Child process</code>를 등록시킨 뒤 다시 <code>Parent</code>로 복귀하는 과정이다.</p><p>그후 <code>Ready queue</code>에서 대기 중이던 <code>Child process</code>가 <code>CPU</code>에 점유하게 될 경우<br><code>Parent</code>와 동일한 <code>PCB</code>, 즉 같은 <code>State vector</code>로 <code>Fork</code> 후 다음 시점에 실행된다.</p><p>이때 <strong><code>Parent</code>, <code>Child</code> 모두 가지고 있는 정보와 진행 상황까지 모두 동일한 상태</strong>가 된다.<br> 그렇기 때문에 <code>Child Process</code>도 <code>Fork</code>에서 다시 한번 Return을 수행하게 되는 것이다.</p><p>만약 두 번의 Return이 구분되지 않는다면 당연히도 문제가 발생될 것이기에 값을 달리한다.<br> Return할 때의 값은 <code>PID</code> 값으로 0인 경우 <code>Child process</code>를 의미하기에 구분이 가능하다.</p><div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" data-title="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pid;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  pid </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> fork</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (pid </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // Child process는 0을 리턴</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;I am child</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // Parent process는 고유의 값을 리턴</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    printf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;I am parent!</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그럼 만약 이 프로그램을 아래와 같이 실행했다고 한다면 아래처럼 실행될 것이다.</p><div class="language-textplain line-numbers-mode" data-highlighter="shiki" data-ext="textplain" data-title="textplain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$ cat fork.c</span></span>
<span class="line"><span>#include &lt;unistd.h&gt;</span></span>
<span class="line"><span>#include &lt;stdio.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main() {</span></span>
<span class="line"><span>  int pid;</span></span>
<span class="line"><span>  pid = fork();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (pid == 0) { // Child process는 0을 리턴</span></span>
<span class="line"><span>    printf(&quot;I am child\\n&quot;);</span></span>
<span class="line"><span>  } else { // Parent process는 고유의 값을 리턴</span></span>
<span class="line"><span>    printf(&quot;I am parent!\\n&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ gcc fork.c</span></span>
<span class="line"><span>$ ./a.out</span></span>
<span class="line"><span>I am parent</span></span>
<span class="line"><span>I am child</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Return이 두 번 됐기 때문에 각각의 내용이 구분되어 실행된 것이 확인된다.</p><hr><p><code>System calls</code>에 대한 첫 번째 강의에 내용을 정리해보았습니다.<br> 저도 내용을 이해하고 정리하는데 시간이 상당히 소요가 됐네요.</p><p>열심히 내용을 복기하고 배워야겠다 라는 생각이 강하게 드네요.<br> 설 연휴의 끝이네요. 올 한 해도 새해 복 많이 받으시길 바랍니다.</p><p>정말 긴 글인데 끝까지 읽어주셔서 감사합니다! 😀</p>`,95);function A(v,B){const n=l("RouteLink");return d(),t("div",null,[g,s("p",null,[e("이런 설계로 사용자는 I/O를 위해서 "),m,e("의 **"),u,e("**을 호출한다."),y,e(" 이전에 조금 더 딥하게 정리해두었으니 확인하고 싶다면 "),c(n,{to:"/posts/Computing/OS/Linux/Kernel/Kernel-Introducing.html"},{default:o(()=>[e("여기")]),_:1}),e("를 참고해보자.")]),b])}const S=a(k,[["render",A],["__file","Kernel-System-calls-1.html.vue"]]),C=JSON.parse('{"path":"/posts/Computing/OS/Linux/Kernel/Kernel-System-calls-1.html","title":"[Kernel] Linux Kernel 기초 [1]","lang":"ko-KR","frontmatter":{"title":"[Kernel] Linux Kernel 기초 [1]","categories":["Linux"],"tags":["Linux","Kernel","커널","리눅스","OS","운영체제","Operating System","시스템","시스템 프로그래밍","프로그램","System","System call","System calls","HW","fork","exec","Parent process","Child process","Process management","하드웨어"],"date":"2025-01-30T00:00:00.000Z","order":102,"editLink":false,"lastUpdated":true,"description":"정보 📢 개인적인 정리를 위해 가벼운 어투로 내용을 정리하였습니다. 🤔 지난 회차까지의 System calls 간단 정리 지난 회차까지의 System calls은 Multi user system의 특징으로 인해 다른 사용자의 I/O에 함부로 접근하는 일을 방지(Prevent)하기 위한 설계다. 이런 설계로 사용자...","head":[["meta",{"property":"og:url","content":"https://blog.false.kr/posts/Computing/OS/Linux/Kernel/Kernel-System-calls-1.html"}],["meta",{"property":"og:site_name","content":"찬스의 개발 블로그 : Chance Devlog"}],["meta",{"property":"og:title","content":"[Kernel] Linux Kernel 기초 [1]"}],["meta",{"property":"og:description","content":"정보 📢 개인적인 정리를 위해 가벼운 어투로 내용을 정리하였습니다. 🤔 지난 회차까지의 System calls 간단 정리 지난 회차까지의 System calls은 Multi user system의 특징으로 인해 다른 사용자의 I/O에 함부로 접근하는 일을 방지(Prevent)하기 위한 설계다. 이런 설계로 사용자..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog.false.kr/assets/image/Post/Computing/OS/Linux/Kernel/Kernel-System-calls-1/1.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2025-01-30T06:59:14.000Z"}],["meta",{"property":"article:author","content":"Chance"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"Kernel"}],["meta",{"property":"article:tag","content":"커널"}],["meta",{"property":"article:tag","content":"리눅스"}],["meta",{"property":"article:tag","content":"OS"}],["meta",{"property":"article:tag","content":"운영체제"}],["meta",{"property":"article:tag","content":"Operating System"}],["meta",{"property":"article:tag","content":"시스템"}],["meta",{"property":"article:tag","content":"시스템 프로그래밍"}],["meta",{"property":"article:tag","content":"프로그램"}],["meta",{"property":"article:tag","content":"System"}],["meta",{"property":"article:tag","content":"System call"}],["meta",{"property":"article:tag","content":"System calls"}],["meta",{"property":"article:tag","content":"HW"}],["meta",{"property":"article:tag","content":"fork"}],["meta",{"property":"article:tag","content":"exec"}],["meta",{"property":"article:tag","content":"Parent process"}],["meta",{"property":"article:tag","content":"Child process"}],["meta",{"property":"article:tag","content":"Process management"}],["meta",{"property":"article:tag","content":"하드웨어"}],["meta",{"property":"article:published_time","content":"2025-01-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-30T06:59:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"[Kernel] Linux Kernel 기초 [1]\\",\\"image\\":[\\"https://blog.false.kr/assets/image/Post/Computing/OS/Linux/Kernel/Kernel-System-calls-1/1.png\\",\\"https://blog.false.kr/assets/image/Post/Computing/OS/Linux/Kernel/Kernel-System-calls-1/2.png\\",\\"https://blog.false.kr/assets/image/Post/Computing/OS/Linux/Kernel/Kernel-System-calls-1/3.png\\"],\\"datePublished\\":\\"2025-01-30T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-30T06:59:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Chance\\",\\"url\\":\\"https://blog.false.kr\\",\\"email\\":\\"chance0432@naver.com\\"}]}"]]},"headers":[{"level":2,"title":"🤔 지난 회차까지의 System calls 간단 정리","slug":"🤔-지난-회차까지의-system-calls-간단-정리","link":"#🤔-지난-회차까지의-system-calls-간단-정리","children":[]},{"level":2,"title":"📻 System calls","slug":"📻-system-calls","link":"#📻-system-calls","children":[{"level":3,"title":"😀 User mode에서 동작","slug":"😀-user-mode에서-동작","link":"#😀-user-mode에서-동작","children":[]},{"level":3,"title":"🤖 Kernel mode에서 동작 (sys_로 시작하는 함수 / System calls)","slug":"🤖-kernel-mode에서-동작-sys-로-시작하는-함수-system-calls","link":"#🤖-kernel-mode에서-동작-sys-로-시작하는-함수-system-calls","children":[]},{"level":3,"title":"🦾 Wrapper Routine","slug":"🦾-wrapper-routine","link":"#🦾-wrapper-routine","children":[]},{"level":3,"title":"🪣 System calls 과정 정리","slug":"🪣-system-calls-과정-정리","link":"#🪣-system-calls-과정-정리","children":[]},{"level":3,"title":"⌨️ Kernel System call function의 역할","slug":"⌨️-kernel-system-call-function의-역할","link":"#⌨️-kernel-system-call-function의-역할","children":[]},{"level":3,"title":"🧵 System call number의 상세 기능","slug":"🧵-system-call-number의-상세-기능","link":"#🧵-system-call-number의-상세-기능","children":[]}]},{"level":2,"title":"🧑‍💼 Process Management","slug":"🧑‍💼-process-management","link":"#🧑‍💼-process-management","children":[{"level":3,"title":"🔖 Kernel Data Structure","slug":"🔖-kernel-data-structure","link":"#🔖-kernel-data-structure","children":[]}]}],"git":{"createdTime":1737384649000,"updatedTime":1738220354000,"contributors":[{"name":"Chance","email":"ahs0432@naver.com","commits":4}]},"readingTime":{"minutes":2.65,"words":795},"filePathRelative":"posts/Computing/OS/Linux/Kernel/Kernel-System-calls-1.md","localizedDate":"2025년 1월 30일","excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">정보</p>\\n<p>📢 개인적인 정리를 위해 가벼운 어투로 내용을 정리하였습니다.</p>\\n</div>\\n<h2>🤔 지난 회차까지의 System calls 간단 정리</h2>\\n<p>지난 회차까지의 <code>System calls</code>은 <strong>Multi user system</strong>의 특징으로 인해<br>\\n다른 사용자의 <strong>I/O</strong>에 함부로 접근하는 일을 <strong>방지</strong>(<strong>Prevent</strong>)하기 위한 설계다.</p>","autoDesc":true}');export{S as comp,C as data};
