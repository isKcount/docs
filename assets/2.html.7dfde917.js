import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.ca0279c0.js";const t={},l=e(`<h1 id="ansible\u5E38\u7528\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#ansible\u5E38\u7528\u6A21\u5757" aria-hidden="true">#</a> Ansible\u5E38\u7528\u6A21\u5757</h1><blockquote><h3 id="ansible\u5E38\u7528\u6A21\u5757-1" tabindex="-1"><a class="header-anchor" href="#ansible\u5E38\u7528\u6A21\u5757-1" aria-hidden="true">#</a> Ansible\u5E38\u7528\u6A21\u5757</h3></blockquote><h3 id="hostname\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#hostname\u6A21\u5757" aria-hidden="true">#</a> hostname\u6A21\u5757</h3><ul><li><strong>\u7528\u4E8E\u7BA1\u7406\u8FDC\u7A0B\u4E3B\u673A\u7684\u4E3B\u673A\u540D</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>name: \u5FC5\u9009\u9879\uFF0C\u4E3B\u673A\u540D\u79F0

\u66F4\u6539\u4E3B\u673A\u540D
<span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># ansible 192.168.100.20 -m hostname -a &#39;name=node99&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="user\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#user\u6A21\u5757" aria-hidden="true">#</a> user\u6A21\u5757</h3><ul><li><strong>\u7528\u4E8E\u521B\u5EFA\u7528\u6237\u4EE5\u53CA\u4FEE\u6539\u7528\u6237\u7684\u6743\u9650</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>User\uFF1A\u7BA1\u7406\u7528\u6237

   home   \u6307\u5B9A\u5BB6\u76EE\u5F55\u8DEF\u5F84
   system \u6307\u5B9A\u7CFB\u7EDF\u8D26\u53F7
   group  \u6307\u5B9A\u7EC4
   remove \u6E05\u9664\u8D26\u6237
   shell  \u6307\u5B9Ashell\u7C7B\u578B

   ansible websrvs <span class="token parameter variable">-m</span> user <span class="token parameter variable">-a</span> <span class="token string">&#39;name=user1 comment=&quot;test user&quot; uid=2048 home=/app/user1 group=root&#39;</span>
   ansible websrvs <span class="token parameter variable">-m</span> user <span class="token parameter variable">-a</span> <span class="token string">&#39;name=sysuser1 system=yes home=/app/sysuser1&#39;</span>
   ansible websrvs <span class="token parameter variable">-m</span> user <span class="token parameter variable">-a</span> <span class="token string">&#39;name=user1 state=absent remove=yes&#39;</span>  \u6E05\u7A7A\u7528\u6237\u6240\u6709\u6570\u636E
   ansible websrvs <span class="token parameter variable">-m</span> user <span class="token parameter variable">-a</span> <span class="token string">&#39;name=app uid=88 system=yes home=/app groups=root shell=/sbin/nologin password=&quot;$1$zfVojmPy$ZILcvxnXljvTI2PhP2Iqv1&quot;&#39;</span>  \u521B\u5EFA\u7528\u6237
   ansible websrvs <span class="token parameter variable">-m</span> user <span class="token parameter variable">-a</span> <span class="token string">&#39;name=app state=absent&#39;</span>  \u4E0D\u4F1A\u5220\u9664\u5BB6\u76EE\u5F55
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="group\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#group\u6A21\u5757" aria-hidden="true">#</a> group\u6A21\u5757</h3><ul><li><strong>\u7528\u4E8E\u521B\u5EFA\u7EC4\u548C\u4FEE\u6539\u7EC4\u7684\u6743\u9650\u64CD\u4F5C</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Group\uFF1A\u7BA1\u7406\u7EC4

<span class="token assign-left variable">state</span><span class="token operator">=</span>present\u8868\u793A\u521B\u5EFA\u7EC4\uFF0Cstate<span class="token operator">=</span>absent\u65F6\u8868\u793A\u5220\u9664\u7EC4\uFF1B
<span class="token assign-left variable">syste</span><span class="token operator">=</span>yes\u8868\u793A\u521B\u5EFA\u7CFB\u7EDF\u7EC4\uFF0Csystem<span class="token operator">=</span>no\u8868\u793A\u521B\u5EFA\u7684\u4E0D\u662F\u7CFB\u7EDF\u7EC4\uFF1B

	ansible srv <span class="token parameter variable">-m</span> group <span class="token parameter variable">-a</span> <span class="token string">&quot;name=testgroup system=yes&quot;</span>   \u521B\u5EFA\u7EC4
  	ansible srv <span class="token parameter variable">-m</span> group <span class="token parameter variable">-a</span> <span class="token string">&quot;name=testgroup state=absent&quot;</span> \u5220\u9664\u7EC4
  	\u5728test\u7EC4\u5305\u542B\u7684\u88AB\u63A7\u7AEF\u4E0A\u521B\u5EFA\u7EC4testgroup\uFF0C\u7EC4id\u4E3A111
	ansible <span class="token builtin class-name">test</span> <span class="token parameter variable">-m</span> group <span class="token parameter variable">-a</span> <span class="token string">&#39;name =testgroup gid=111 state=present system=yes&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="command\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#command\u6A21\u5757" aria-hidden="true">#</a> command\u6A21\u5757</h3><ul><li><strong>\u5728\u8FDC\u7A0B\u4E3B\u673A\u6267\u884C\u547D\u4EE4\uFF0C\u9ED8\u8BA4\u6A21\u5757\uFF0C\u53EF\u5FFD\u7565-m\u9009\u9879</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> chdir:   \u8FDB\u5165\u5230\u88AB\u7BA1\u7406\u4E3B\u673A\u76EE\u5F55
 creates: \u5982\u679C\u6709\u4E00\u4E2A\u76EE\u5F55\u662F\u5B58\u5728\u7684,\u6B65\u9AA4\u5C06\u4E0D\u4F1A\u8FD0\u884CCommand\u547D\u4EE4
 ansible websrvs <span class="token parameter variable">-a</span> <span class="token string">&#39;chdir=/data/ ls&#39;</span>
 
 <span class="token operator">&gt;</span> ansible srvs <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&#39;service vsftpd start&#39;</span>
 <span class="token operator">&gt;</span> ansible srvs <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-a</span> <span class="token string">&#39;echo adong |passwd --stdin 123456&#39;</span>
 <span class="token comment">#\u6B64\u547D\u4EE4\u4E0D\u652F\u6301 $VARNAME &lt; &gt; | ; &amp; \u7B49,\u7528shell\u6A21\u5757\u5B9E\u73B0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Playbook\u7528\u6CD5</strong></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> return motd to registered var
  <span class="token key atrule">command</span><span class="token punctuation">:</span> cat /etc/motd
  <span class="token key atrule">register</span><span class="token punctuation">:</span> mymotd
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run command if /path/to/database does not exist (without &#39;args&#39; keyword).
  <span class="token key atrule">command</span><span class="token punctuation">:</span> /usr/bin/make_database.sh db_user db_name creates=/path/to/database
<span class="token comment"># &#39;args&#39; is a task keyword, passed at the same level as the module</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run command if /path/to/database does not exist (with &#39;args&#39; keyword).
  <span class="token key atrule">command</span><span class="token punctuation">:</span> /usr/bin/make_database.sh db_user db_name
  <span class="token key atrule">args</span><span class="token punctuation">:</span>
    <span class="token key atrule">creates</span><span class="token punctuation">:</span> /path/to/database
<span class="token comment"># &#39;cmd&#39; is module parameter</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run command if /path/to/database does not exist (with &#39;cmd&#39; parameter).
  <span class="token key atrule">command</span><span class="token punctuation">:</span>
    <span class="token key atrule">cmd</span><span class="token punctuation">:</span> /usr/bin/make_database.sh db_user db_name
    <span class="token key atrule">creates</span><span class="token punctuation">:</span> /path/to/database  
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Change the working directory to somedir/ and run the command as db_owner if /path/to/database does not exist.
  <span class="token key atrule">command</span><span class="token punctuation">:</span> /usr/bin/make_database.sh db_user db_name
  <span class="token key atrule">become</span><span class="token punctuation">:</span> yes
  <span class="token key atrule">become_user</span><span class="token punctuation">:</span> db_owner
  <span class="token key atrule">args</span><span class="token punctuation">:</span>
    <span class="token key atrule">chdir</span><span class="token punctuation">:</span> somedir/
    <span class="token key atrule">creates</span><span class="token punctuation">:</span> /path/to/database
<span class="token comment"># &#39;argv&#39; is a parameter, indented one level from the module</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Use &#39;argv&#39; to send a command as a list <span class="token punctuation">-</span> leave &#39;command&#39; empty
  <span class="token key atrule">command</span><span class="token punctuation">:</span>
    <span class="token key atrule">argv</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /usr/bin/make_database.sh
      <span class="token punctuation">-</span> Username with whitespace
      <span class="token punctuation">-</span> dbname with whitespace     
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> safely use templated variable to run command. Always use the quote filter to avoid injection issues.
  <span class="token key atrule">command</span><span class="token punctuation">:</span> cat <span class="token punctuation">{</span><span class="token punctuation">{</span> myfile<span class="token punctuation">|</span>quote <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token key atrule">register</span><span class="token punctuation">:</span> myoutput
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shell\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#shell\u6A21\u5757" aria-hidden="true">#</a> shell\u6A21\u5757</h3><ul><li><strong>\u548Ccommand\u76F8\u4F3C\uFF0C\u7528shell\u6267\u884C\u547D\u4EE4</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>   \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6,\u4F7Fshell\u4F5C\u4E3A\u9ED8\u8BA4\u6A21\u5757    

       <span class="token function">vim</span> /etc/ansible/ansible.cfg
       module_name <span class="token operator">=</span> shell
       
   <span class="token operator">&gt;</span> ansible all <span class="token parameter variable">-m</span> shell  <span class="token parameter variable">-a</span> <span class="token string">&#39;getenforce&#39;</span>  \u67E5\u770BSELINUX\u72B6\u6001
   <span class="token operator">&gt;</span>  ansible all <span class="token parameter variable">-m</span> shell  <span class="token parameter variable">-a</span> <span class="token string">&quot;sed -i &#39;s/SELINUX=.*/SELINUX=disabled&#39;     	/etc/selinux/config&quot;</span>
   <span class="token operator">&gt;</span> ansible srv <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&#39;echo magedu |passwd \u2013stdin wang&#39;</span>

   \u8C03\u7528bash\u6267\u884C\u547D\u4EE4 \u7C7B\u4F3C <span class="token function">cat</span> /tmp/stanley.md <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">&#39;|&#39;</span> <span class="token string">&#39;{print $1,$2}&#39;</span> <span class="token operator">&amp;&gt;</span> /tmp/example.txt 
   \u8FD9\u4E9B\u590D\u6742\u547D\u4EE4\uFF0C\u5373\u4F7F\u4F7F\u7528shell\u4E5F\u53EF\u80FD\u4F1A\u5931\u8D25\uFF0C
   \u89E3\u51B3\u529E\u6CD5\uFF1A\u5199\u5230\u811A\u672C\u65F6\uFF0Ccopy\u5230\u8FDC\u7A0B\u6267\u884C\uFF0C\u518D\u628A\u9700\u8981\u7684\u7ED3\u679C\u62C9\u56DE\u6267\u884C\u547D\u4EE4\u7684\u673A\u5668 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Playbook\u7528\u6CD5</strong></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Execute the command in remote shell; stdout goes to the specified file on the remote.
  <span class="token key atrule">shell</span><span class="token punctuation">:</span> somescript.sh <span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span> somelog.txt
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Change the working directory to somedir/ before executing the command.
  <span class="token key atrule">shell</span><span class="token punctuation">:</span> somescript.sh <span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span> somelog.txt
  <span class="token key atrule">args</span><span class="token punctuation">:</span>
    <span class="token key atrule">chdir</span><span class="token punctuation">:</span> somedir/
<span class="token comment"># You can also use the &#39;args&#39; form to provide the options.</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> This command will change the working directory to somedir/ and will only run when somedir/somelog.txt doesn&#39;t exist.
  <span class="token key atrule">shell</span><span class="token punctuation">:</span> somescript.sh <span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span> somelog.txt
  <span class="token key atrule">args</span><span class="token punctuation">:</span>
    <span class="token key atrule">chdir</span><span class="token punctuation">:</span> somedir/
    <span class="token key atrule">creates</span><span class="token punctuation">:</span> somelog.txt
<span class="token comment"># You can also use the &#39;cmd&#39; parameter instead of free form format.</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> This command will change the working directory to somedir/.
  <span class="token key atrule">shell</span><span class="token punctuation">:</span>
    <span class="token key atrule">cmd</span><span class="token punctuation">:</span> ls <span class="token punctuation">-</span>l <span class="token punctuation">|</span> grep log
    <span class="token key atrule">chdir</span><span class="token punctuation">:</span> somedir/
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run a command that uses non<span class="token punctuation">-</span>posix shell<span class="token punctuation">-</span>isms (in this example /bin/sh doesn&#39;t handle redirection and wildcards together but bash does)
  <span class="token key atrule">shell</span><span class="token punctuation">:</span> cat &lt; /tmp/<span class="token important">*txt</span>
  <span class="token key atrule">args</span><span class="token punctuation">:</span>
    <span class="token key atrule">executable</span><span class="token punctuation">:</span> /bin/bash
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run a command using a templated variable (always use quote filter to avoid injection)
  <span class="token key atrule">shell</span><span class="token punctuation">:</span> cat <span class="token punctuation">{</span><span class="token punctuation">{</span> myfile<span class="token punctuation">|</span>quote <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token comment"># You can use shell to run other executables to perform actions inline</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run expect to wait for a successful PXE boot via out<span class="token punctuation">-</span>of<span class="token punctuation">-</span>band CIMC
  <span class="token key atrule">shell</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
    set timeout 300
    spawn ssh admin@{{ cimc_host }}
    expect &quot;password:&quot;
    send &quot;{{ cimc_password }}\\n&quot;
    expect &quot;\\n{{ cimc_name }}&quot;
    send &quot;connect host\\n&quot;
    expect &quot;pxeboot.n12&quot;
    send &quot;\\n&quot;
    exit 0</span>
  <span class="token key atrule">args</span><span class="token punctuation">:</span>
    <span class="token key atrule">executable</span><span class="token punctuation">:</span> /usr/bin/expect
  <span class="token key atrule">delegate_to</span><span class="token punctuation">:</span> localhost
<span class="token comment"># Disabling warnings</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Using curl to connect to a host via SOCKS proxy (unsupported in uri). Ordinarily this would throw a warning.
  <span class="token key atrule">shell</span><span class="token punctuation">:</span> curl <span class="token punctuation">-</span><span class="token punctuation">-</span>socks5 localhost<span class="token punctuation">:</span>9000 http<span class="token punctuation">:</span>//www.ansible.com
  <span class="token key atrule">args</span><span class="token punctuation">:</span>
    <span class="token key atrule">warn</span><span class="token punctuation">:</span> no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="copy\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#copy\u6A21\u5757" aria-hidden="true">#</a> copy\u6A21\u5757</h3><ul><li><strong>\u4ECE\u4E3B\u63A7\u7AEF\u590D\u5236\u6587\u4EF6\u5230\u8FDC\u7A0B\u4E3B\u673A</strong></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>   <span class="token key atrule">src</span> <span class="token punctuation">:</span> \u6E90\u6587\u4EF6  \u6307\u5B9A\u62F7\u8D1D\u6587\u4EF6\u7684\u672C\u5730\u8DEF\u5F84  (\u5982\u679C\u6709/ \u5219\u62F7\u8D1D\u76EE\u5F55\u5185\u5BB9<span class="token punctuation">,</span>\u6BD4\u62F7\u8D1D\u76EE\u5F55\u672C\u8EAB)
   <span class="token key atrule">dest</span><span class="token punctuation">:</span> \u6307\u5B9A\u76EE\u6807\u8DEF\u5F84
   <span class="token key atrule">mode</span><span class="token punctuation">:</span> \u8BBE\u7F6E\u6743\u9650
   <span class="token key atrule">backup</span><span class="token punctuation">:</span> \u5907\u4EFD\u6E90\u6587\u4EF6
   <span class="token key atrule">content</span><span class="token punctuation">:</span> \u4EE3\u66FFsrc  \u6307\u5B9A\u672C\u673A\u6587\u4EF6\u5185\u5BB9<span class="token punctuation">,</span>\u751F\u6210\u76EE\u6807\u4E3B\u673A\u6587\u4EF6
   
   <span class="token punctuation">&gt;</span> ansible websrvs <span class="token punctuation">-</span>m copy <span class="token punctuation">-</span>a &quot;src=/root/test1.sh dest=/tmp/test2.showner=wang mode=600 backup=yes&quot;

   \u5982\u679C\u76EE\u6807\u5B58\u5728\uFF0C\u9ED8\u8BA4\u8986\u76D6\uFF0C\u6B64\u5904\u6307\u5B9A\u5148\u5907\u4EFD
   <span class="token punctuation">&gt;</span> ansible websrvs <span class="token punctuation">-</span>m copy <span class="token punctuation">-</span>a &quot;content=&#39;test content\\nxxx&#39; dest=/tmp/test.txt&quot;
   \u6307\u5B9A\u5185\u5BB9\uFF0C\u76F4\u63A5\u751F\u6210\u76EE\u6807\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Playbook\u7528\u6CD5</strong></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Copy file with owner and permissions
  <span class="token key atrule">copy</span><span class="token punctuation">:</span>
    <span class="token key atrule">src</span><span class="token punctuation">:</span> /srv/myfiles/foo.conf
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/foo.conf
    <span class="token key atrule">owner</span><span class="token punctuation">:</span> foo
    <span class="token key atrule">group</span><span class="token punctuation">:</span> foo
    <span class="token key atrule">mode</span><span class="token punctuation">:</span> <span class="token string">&#39;0644&#39;</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Copy file with owner and permission<span class="token punctuation">,</span> using symbolic representation
  <span class="token key atrule">copy</span><span class="token punctuation">:</span>
    <span class="token key atrule">src</span><span class="token punctuation">:</span> /srv/myfiles/foo.conf
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/foo.conf
    <span class="token key atrule">owner</span><span class="token punctuation">:</span> foo
    <span class="token key atrule">group</span><span class="token punctuation">:</span> foo
    <span class="token key atrule">mode</span><span class="token punctuation">:</span> u=rw<span class="token punctuation">,</span>g=r<span class="token punctuation">,</span>o=r
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Another symbolic mode example<span class="token punctuation">,</span> adding some permissions and removing others
  <span class="token key atrule">copy</span><span class="token punctuation">:</span>
    <span class="token key atrule">src</span><span class="token punctuation">:</span> /srv/myfiles/foo.conf
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/foo.conf
    <span class="token key atrule">owner</span><span class="token punctuation">:</span> foo
    <span class="token key atrule">group</span><span class="token punctuation">:</span> foo
    <span class="token key atrule">mode</span><span class="token punctuation">:</span> u+rw<span class="token punctuation">,</span>g<span class="token punctuation">-</span>wx<span class="token punctuation">,</span>o<span class="token punctuation">-</span>rwx
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Copy a new &quot;ntp.conf file into place<span class="token punctuation">,</span> backing up the original if it differs from the copied version
  <span class="token key atrule">copy</span><span class="token punctuation">:</span>
    <span class="token key atrule">src</span><span class="token punctuation">:</span> /mine/ntp.conf
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/ntp.conf
    <span class="token key atrule">owner</span><span class="token punctuation">:</span> root
    <span class="token key atrule">group</span><span class="token punctuation">:</span> root
    <span class="token key atrule">mode</span><span class="token punctuation">:</span> <span class="token string">&#39;0644&#39;</span>
    <span class="token key atrule">backup</span><span class="token punctuation">:</span> yes
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Copy a new &quot;sudoers&quot; file into place<span class="token punctuation">,</span> after passing validation with visudo
  <span class="token key atrule">copy</span><span class="token punctuation">:</span>
    <span class="token key atrule">src</span><span class="token punctuation">:</span> /mine/sudoers
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/sudoers
    <span class="token key atrule">validate</span><span class="token punctuation">:</span> /usr/sbin/visudo <span class="token punctuation">-</span>csf %s
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Copy a &quot;sudoers&quot; file on the remote machine for editing
  <span class="token key atrule">copy</span><span class="token punctuation">:</span>
    <span class="token key atrule">src</span><span class="token punctuation">:</span> /etc/sudoers
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/sudoers.edit
    <span class="token key atrule">remote_src</span><span class="token punctuation">:</span> yes
    <span class="token key atrule">validate</span><span class="token punctuation">:</span> /usr/sbin/visudo <span class="token punctuation">-</span>csf %s
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Copy using inline content
  <span class="token key atrule">copy</span><span class="token punctuation">:</span>
    <span class="token key atrule">content</span><span class="token punctuation">:</span> <span class="token string">&#39;# This file was moved to /etc/other.conf&#39;</span>
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/mine.conf
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> If follow=yes<span class="token punctuation">,</span> /path/to/file will be overwritten by contents of foo.conf
  <span class="token key atrule">copy</span><span class="token punctuation">:</span>
    <span class="token key atrule">src</span><span class="token punctuation">:</span> /etc/foo.conf
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> /path/to/link  <span class="token comment"># link to /path/to/file</span>
    <span class="token key atrule">follow</span><span class="token punctuation">:</span> yes
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> If follow=no<span class="token punctuation">,</span> /path/to/link will become a file and be overwritten by contents of foo.conf
  <span class="token key atrule">copy</span><span class="token punctuation">:</span>
    <span class="token key atrule">src</span><span class="token punctuation">:</span> /etc/foo.conf
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> /path/to/link  <span class="token comment"># link to /path/to/file</span>
    <span class="token key atrule">follow</span><span class="token punctuation">:</span> no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yum-repository\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#yum-repository\u6A21\u5757" aria-hidden="true">#</a> yum_repository\u6A21\u5757</h3><ul><li><strong>\u914D\u7F6Erepo\u7684yum\u6E90\u6A21\u5757</strong></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name\u53C2\u6570</span><span class="token punctuation">:</span>	 		\u5FC5\u987B\u53C2\u6570\uFF0C\u7528\u4E8E\u6307\u5B9A\u8981\u64CD\u4F5C\u7684\u552F\u4E00\u7684\u4ED3\u5E93ID\uFF0C\u4E5F\u5C31\u662F\u201D.repo\u201D\u914D\u7F6E\u6587\u4EF6\u4E2D\u6BCF\u4E2A\u4ED3\u5E93\u5BF9\u5E94\u7684\u201D\u4E2D\u62EC\u53F7\u201D\u5185\u7684\u4ED3\u5E93ID
<span class="token key atrule">baseurl\u53C2\u6570</span><span class="token punctuation">:</span>		\u6B64\u53C2\u6570\u7528\u4E8E\u8BBE\u7F6Eyum\u4ED3\u5E93\u7684baseurl
<span class="token key atrule">description\u53C2\u6570</span><span class="token punctuation">:</span>	\u6B64\u53C2\u6570\u7528\u4E8E\u8BBE\u7F6E\u4ED3\u5E93\u7684\u6CE8\u91CA\uFF0C\u4E5F\u5C31\u662F\u201D.repo\u201D\u914D\u7F6E\u6587\u4EF6\u4E2D\u6BCF\u4E2A\u4ED3\u5E93\u5BF9\u5E94\u7684\u201Dname\u5B57\u6BB5\u201D\u5BF9\u5E94\u7684\u5185\u5BB9\u3002
<span class="token key atrule">file\u53C2\u6570</span><span class="token punctuation">:</span>			\u6B64\u53C2\u6570\u7528\u4E8E\u8BBE\u7F6E\u4ED3\u5E93\u7684\u914D\u7F6E\u6587\u4EF6\u540D\u79F0\uFF0C\u5373\u8BBE\u7F6E\u201D.repo\u201D\u914D\u7F6E\u6587\u4EF6\u7684\u6587\u4EF6\u540D\u524D\u7F00\uFF0C\u5728\u4E0D\u4F7F\u7528\u6B64\u53C2\u6570\u7684\u60C5\u51B5\u4E0B\uFF0C\u9ED8\u8BA4\u4EE5name\u53C2\u6570\u7684\u4ED3\u5E93ID\u4F5C\u4E3A\u201D.repo\u201D\u914D\u7F6E\u6587\u4EF6\u7684\u6587\u4EF6\u540D\u524D\u7F00\uFF0C\u540C\u4E00\u4E2A\u2019.repo\u2019\u914D\u7F6E\u6587\u4EF6\u4E2D\u53EF\u4EE5\u5B58\u5728\u591A\u4E2Ayum\u6E90
<span class="token key atrule">enabled\u53C2\u6570</span><span class="token punctuation">:</span>		\u6B64\u53C2\u6570\u7528\u4E8E\u8BBE\u7F6E\u662F\u5426\u6FC0\u6D3B\u5BF9\u5E94\u7684yum\u6E90\uFF0C\u6B64\u53C2\u6570\u9ED8\u8BA4\u503C\u4E3Ayes\uFF0C\u8868\u793A\u542F\u7528\u5BF9\u5E94\u7684yum\u6E90\uFF0C\u8BBE\u7F6E\u4E3Ano\u8868\u793A\u4E0D\u542F\u7528\u5BF9\u5E94\u7684yum\u6E90\u3002
<span class="token key atrule">gpgcheck\u53C2\u6570</span><span class="token punctuation">:</span>		\u6B64\u53C2\u6570\u7528\u4E8E\u8BBE\u7F6E\u662F\u5426\u5F00\u542Frpm\u5305\u9A8C\u8BC1\u529F\u80FD\uFF0C\u9ED8\u8BA4\u503C\u4E3Ano\uFF0C\u8868\u793A\u4E0D\u542F\u7528\u5305\u9A8C\u8BC1\uFF0C\u8BBE\u7F6E\u4E3Ayes\u8868\u793A\u5F00\u542F\u5305\u9A8C\u8BC1\u529F\u80FD\u3002
<span class="token key atrule">gpgcakey\u53C2\u6570</span><span class="token punctuation">:</span>		\u5F53gpgcheck\u53C2\u6570\u8BBE\u7F6E\u4E3Ayes\u65F6\uFF0C\u9700\u8981\u4F7F\u7528\u6B64\u53C2\u6570\u6307\u5B9A\u9A8C\u8BC1\u5305\u6240\u9700\u7684\u516C\u94A5
<span class="token key atrule">state\u53C2\u6570</span><span class="token punctuation">:</span>			\u9ED8\u8BA4\u503C\u4E3Apresent\uFF0C\u5F53\u503C\u8BBE\u7F6E\u4E3Aabsent\u65F6\uFF0C\u8868\u793A\u5220\u9664\u5BF9\u5E94\u7684yum\u6E90
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum_repository\u6A21\u5757\u7684\u793A\u4F8B\u547D\u4EE4\u5982\u4E0B\uFF1A

<span class="token punctuation">[</span>root@server4 ~<span class="token punctuation">]</span><span class="token comment"># ansible testA -m yum_repository -a &#39;name=rhel7.3 description=&quot;ansible rhel7.3&quot; baseurl=http://172.25.1.250/westos gpgcheck=no enabled=yes&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yum\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#yum\u6A21\u5757" aria-hidden="true">#</a> yum\u6A21\u5757</h3><ul><li><strong>yum\u6E90\u5B89\u88C5rpm\u5305\u7684\u7BA1\u7406\u6A21\u5757</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  state\uFF1A\u72B6\u6001\uFF08present\u5B89\u88C5\uFF0Cabsent\u5378\u8F7D\uFF0Clatest\u6700\u65B0\u7684\uFF09  
  
  ansible websrvs <span class="token parameter variable">-m</span> yum <span class="token parameter variable">-a</span> <span class="token string">&#39;list=httpd&#39;</span>  \u67E5\u770B\u7A0B\u5E8F\u5217\u8868
  ansible websrvs <span class="token parameter variable">-m</span> yum <span class="token parameter variable">-a</span> <span class="token string">&#39;name=httpd state=present&#39;</span> \u5B89\u88C5
  ansible websrvs <span class="token parameter variable">-m</span> yum <span class="token parameter variable">-a</span> <span class="token string">&#39;name=httpd state=absent&#39;</span>  \u5220\u9664
  
  \u53EF\u4EE5\u540C\u65F6\u5B89\u88C5\u591A\u4E2A\u7A0B\u5E8F\u5305
  <span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># ansible test -m yum -a &#39;name=vsftpd,httpd,memcached&#39;</span>
  \u66F4\u65B0\u7F13\u5B58
  <span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># ansible test  -m yum -a &#39;name=dstat update_cache=yes&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Playbook\u7528\u6CD5</strong></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install the latest version of Apache
  <span class="token key atrule">yum</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
    <span class="token key atrule">state</span><span class="token punctuation">:</span> latest
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ensure a list of packages installed
  <span class="token key atrule">yum</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ packages }}&quot;</span>
  <span class="token key atrule">vars</span><span class="token punctuation">:</span>
    <span class="token key atrule">packages</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> httpd
    <span class="token punctuation">-</span> httpd<span class="token punctuation">-</span>tools
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> remove the Apache package
  <span class="token key atrule">yum</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
    <span class="token key atrule">state</span><span class="token punctuation">:</span> absent
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install the latest version of Apache from the testing repo
  <span class="token key atrule">yum</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
    <span class="token key atrule">enablerepo</span><span class="token punctuation">:</span> testing
    <span class="token key atrule">state</span><span class="token punctuation">:</span> present
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install one specific version of Apache
  <span class="token key atrule">yum</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd<span class="token punctuation">-</span>2.2.29<span class="token punctuation">-</span>1.4.amzn1
    <span class="token key atrule">state</span><span class="token punctuation">:</span> present
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> upgrade all packages
  <span class="token key atrule">yum</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;*&#39;</span>
    <span class="token key atrule">state</span><span class="token punctuation">:</span> latest
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> upgrade all packages<span class="token punctuation">,</span> excluding kernel &amp; foo related packages
  <span class="token key atrule">yum</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;*&#39;</span>
    <span class="token key atrule">state</span><span class="token punctuation">:</span> latest
    <span class="token key atrule">exclude</span><span class="token punctuation">:</span> kernel*<span class="token punctuation">,</span>foo*
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install the nginx rpm from a remote repo
  <span class="token key atrule">yum</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//nginx.org/packages/centos/6/noarch/RPMS/nginx<span class="token punctuation">-</span>release<span class="token punctuation">-</span>centos<span class="token punctuation">-</span>6<span class="token punctuation">-</span>0.el6.ngx.noarch.rpm
    <span class="token key atrule">state</span><span class="token punctuation">:</span> present
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install nginx rpm from a local file
  <span class="token key atrule">yum</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> /usr/local/src/nginx<span class="token punctuation">-</span>release<span class="token punctuation">-</span>centos<span class="token punctuation">-</span>6<span class="token punctuation">-</span>0.el6.ngx.noarch.rpm
    <span class="token key atrule">state</span><span class="token punctuation">:</span> present
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install the &#39;Development tools&#39; package group
  <span class="token key atrule">yum</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;@Development tools&quot;</span>
    <span class="token key atrule">state</span><span class="token punctuation">:</span> present
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install the &#39;Gnome desktop&#39; environment group
  <span class="token key atrule">yum</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;@^gnome-desktop-environment&quot;</span>
    <span class="token key atrule">state</span><span class="token punctuation">:</span> present
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> List ansible packages and register result to print with debug later.
  <span class="token key atrule">yum</span><span class="token punctuation">:</span>
    <span class="token key atrule">list</span><span class="token punctuation">:</span> ansible
  <span class="token key atrule">register</span><span class="token punctuation">:</span> result
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install package with multiple repos enabled
  <span class="token key atrule">yum</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> sos
    <span class="token key atrule">enablerepo</span><span class="token punctuation">:</span> <span class="token string">&quot;epel,ol7_latest&quot;</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install package with multiple repos disabled
  <span class="token key atrule">yum</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> sos
    <span class="token key atrule">disablerepo</span><span class="token punctuation">:</span> <span class="token string">&quot;epel,ol7_latest&quot;</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install a list of packages
  <span class="token key atrule">yum</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> nginx
      <span class="token punctuation">-</span> postgresql
      <span class="token punctuation">-</span> postgresql<span class="token punctuation">-</span>server
    <span class="token key atrule">state</span><span class="token punctuation">:</span> present
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Download the nginx package but do not install it
  <span class="token key atrule">yum</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> nginx
    <span class="token key atrule">state</span><span class="token punctuation">:</span> latest
    <span class="token key atrule">download_only</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="service\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#service\u6A21\u5757" aria-hidden="true">#</a> service\u6A21\u5757</h3><ul><li><strong>\u670D\u52A1\u72B6\u6001\u7BA1\u7406\u6A21\u5757</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    enabled\uFF1A<span class="token punctuation">[</span>yes/no<span class="token punctuation">]</span> \u542F\u52A8os\u540E\u542F\u52A8\u5BF9\u5E94service\u7684\u9009\u9879<span class="token punctuation">;</span>\u662F\u5426\u5F00\u673A\u542F\u52A8
    name:\u9700\u8981\u8FDB\u884C\u64CD\u4F5C\u7684service\u540D\u5B57
    state:<span class="token punctuation">[</span>stared/stoped/restarted/reloaded<span class="token punctuation">]</span> \u670D\u52A1\u6700\u7EC8\u64CD\u4F5C\u540E\u7684\u72B6\u6001
    
    <span class="token operator">&gt;</span>ansible srv <span class="token parameter variable">-m</span> <span class="token function">service</span> <span class="token parameter variable">-a</span> <span class="token string">&#39;name=httpd state=stopped&#39;</span>  \u505C\u6B62\u670D\u52A1
  	<span class="token operator">&gt;</span>ansible srv <span class="token parameter variable">-m</span> <span class="token function">service</span> <span class="token parameter variable">-a</span> <span class="token string">&#39;name=httpd state=started enabled=yes&#39;</span> \u542F\u52A8\u670D\u52A1,\u5E76\u8BBE\u4E3A\u5F00\u673A\u81EA\u542F
  	<span class="token operator">&gt;</span>ansible srv <span class="token parameter variable">-m</span> <span class="token function">service</span> <span class="token parameter variable">-a</span> <span class="token string">&#39;name=httpd state=reloaded&#39;</span>  \u91CD\u65B0\u52A0\u8F7D
  	<span class="token operator">&gt;</span>ansible srv <span class="token parameter variable">-m</span> <span class="token function">service</span> <span class="token parameter variable">-a</span> <span class="token string">&#39;name=httpd state=restarted&#39;</span> \u91CD\u542F\u670D\u52A1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Playbook\u7528\u6CD5</strong></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Start service httpd<span class="token punctuation">,</span> if not started
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
    <span class="token key atrule">state</span><span class="token punctuation">:</span> started
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Stop service httpd<span class="token punctuation">,</span> if started
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
    <span class="token key atrule">state</span><span class="token punctuation">:</span> stopped
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Restart service httpd<span class="token punctuation">,</span> in all cases
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
    <span class="token key atrule">state</span><span class="token punctuation">:</span> restarted
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Reload service httpd<span class="token punctuation">,</span> in all cases
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
    <span class="token key atrule">state</span><span class="token punctuation">:</span> reloaded
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Enable service httpd<span class="token punctuation">,</span> and not touch the state
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> yes
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Start service foo<span class="token punctuation">,</span> based on running process /usr/bin/foo
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> foo
    <span class="token key atrule">pattern</span><span class="token punctuation">:</span> /usr/bin/foo
    <span class="token key atrule">state</span><span class="token punctuation">:</span> started
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Restart network service for interface eth0
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> network
    <span class="token key atrule">state</span><span class="token punctuation">:</span> restarted
    <span class="token key atrule">args</span><span class="token punctuation">:</span> eth0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="script\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#script\u6A21\u5757" aria-hidden="true">#</a> script\u6A21\u5757</h3><ul><li><strong>\u53EF\u4EE5\u5B9E\u73B0\u88AB\u63A7\u7AEF\u4E0A\u53EF\u4EE5\u6267\u884Cansible\u63A7\u5236\u7AEF\u7684\u811A\u672C</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> \u793A\u4F8B\uFF1Aansible <span class="token builtin class-name">test</span> <span class="token parameter variable">-m</span> script <span class="token parameter variable">-a</span> <span class="token string">&#39;/4.40/www/2.sh&#39;</span>
 \u5728test\u7EC4\u6240\u6709\u88AB\u63A7\u7AEF\u6267\u884Cansible\u63A7\u5236\u7AEF\u4E2D/4.40./www/\u76EE\u5F55\u4E0B\u76842.sh
 
   <span class="token operator">&gt;</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;/PATH/TO/SCRIPT_FILE&quot;</span>
   <span class="token operator">&gt;</span> ansible websrvs <span class="token parameter variable">-m</span> script <span class="token parameter variable">-a</span> /data/test.sh
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Playbook\u7528\u6CD5</strong></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run a script with arguments (free form)
  <span class="token key atrule">script</span><span class="token punctuation">:</span> /some/local/script.sh <span class="token punctuation">-</span><span class="token punctuation">-</span>some<span class="token punctuation">-</span>argument 1234
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run a script with arguments (using &#39;cmd&#39; parameter)
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token key atrule">cmd</span><span class="token punctuation">:</span> /some/local/script.sh <span class="token punctuation">-</span><span class="token punctuation">-</span>some<span class="token punctuation">-</span>argument 1234
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run a script only if file.txt does not exist on the remote node
  <span class="token key atrule">script</span><span class="token punctuation">:</span> /some/local/create_file.sh <span class="token punctuation">-</span><span class="token punctuation">-</span>some<span class="token punctuation">-</span>argument 1234
  <span class="token key atrule">args</span><span class="token punctuation">:</span>
    <span class="token key atrule">creates</span><span class="token punctuation">:</span> /the/created/file.txt
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run a script only if file.txt exists on the remote node
  <span class="token key atrule">script</span><span class="token punctuation">:</span> /some/local/remove_file.sh <span class="token punctuation">-</span><span class="token punctuation">-</span>some<span class="token punctuation">-</span>argument 1234
  <span class="token key atrule">args</span><span class="token punctuation">:</span>
    <span class="token key atrule">removes</span><span class="token punctuation">:</span> /the/removed/file.txt
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run a script using an executable in a non<span class="token punctuation">-</span>system path
  <span class="token key atrule">script</span><span class="token punctuation">:</span> /some/local/script
  <span class="token key atrule">args</span><span class="token punctuation">:</span>
    <span class="token key atrule">executable</span><span class="token punctuation">:</span> /some/remote/executable
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run a script using an executable in a system path
  <span class="token key atrule">script</span><span class="token punctuation">:</span> /some/local/script.py
  <span class="token key atrule">args</span><span class="token punctuation">:</span>
    <span class="token key atrule">executable</span><span class="token punctuation">:</span> python3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fetch-file\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#fetch-file\u6A21\u5757" aria-hidden="true">#</a> fetch+file\u6A21\u5757</h3><ul><li><strong>Fetch\uFF1A\u4ECE\u8FDC\u7A0B\u4E3B\u673A\u63D0\u53D6\u6587\u4EF6\u81F3\u4E3B\u63A7\u7AEF\uFF0Ccopy\u76F8\u53CD\uFF0C\u76EE\u524D\u4E0D\u652F\u6301\u76EE\u5F55,\u53EF\u4EE5\u5148\u6253\u5305,\u518D\u63D0\u53D6\u6587\u4EF6</strong></li><li><strong>File\uFF1A\u8BBE\u7F6E\u6587\u4EF6\u5C5E\u6027</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Fetch\uFF1A\u4ECE\u8FDC\u7A0B\u4E3B\u673A\u63D0\u53D6\u6587\u4EF6\u81F3\u4E3B\u63A7\u7AEF\uFF0Ccopy\u76F8\u53CD\uFF0C\u76EE\u524D\u4E0D\u652F\u6301\u76EE\u5F55,\u53EF\u4EE5\u5148\u6253\u5305,\u518D\u63D0\u53D6\u6587\u4EF6</span>

    <span class="token operator">&gt;</span> ansible websrvs <span class="token parameter variable">-m</span> fetch <span class="token parameter variable">-a</span> <span class="token string">&#39;src=/root/test.sh dest=/data/scripts&#39;</span>
    \u4F1A\u751F\u6210\u6BCF\u4E2A\u88AB\u7BA1\u7406\u4E3B\u673A\u4E0D\u540C\u7F16\u53F7\u7684\u76EE\u5F55,\u4E0D\u4F1A\u53D1\u751F\u6587\u4EF6\u540D\u51B2\u7A81
    <span class="token operator">&gt;</span> ansible all <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&#39;tar jxvf test.tar.gz /root/test.sh&#39;</span>
    <span class="token operator">&gt;</span> ansible all <span class="token parameter variable">-m</span> fetch <span class="token parameter variable">-a</span> <span class="token string">&#39;src=/root/test.tar.gz dest=/data/&#39;</span>

 

<span class="token comment"># File\uFF1A\u8BBE\u7F6E\u6587\u4EF6\u5C5E\u6027</span>

   path: \u8981\u7BA1\u7406\u7684\u6587\u4EF6\u8DEF\u5F84 <span class="token punctuation">(</span>\u5F3A\u5236\u6DFB\u52A0<span class="token punctuation">)</span>
   recurse: \u9012\u5F52,\u6587\u4EF6\u5939\u8981\u7528\u9012\u5F52
   src:  \u521B\u5EFA\u786C\u94FE\u63A5,\u8F6F\u94FE\u63A5\u65F6,\u6307\u5B9A\u6E90\u76EE\u6807,\u914D\u5408<span class="token string">&#39;state=link&#39;</span> <span class="token string">&#39;state=hard&#39;</span> \u8BBE\u7F6E\u8F6F\u94FE\u63A5,\u786C\u94FE\u63A5
   state: \u72B6\u6001
   absent \u7F3A\u5E2D,\u5220\u9664

         

   <span class="token operator">&gt;</span> ansible websrvs <span class="token parameter variable">-m</span> <span class="token function">file</span> <span class="token parameter variable">-a</span> <span class="token string">&#39;path=/app/test.txt state=touch&#39;</span>       \u521B\u5EFA\u6587\u4EF6
   <span class="token operator">&gt;</span> ansible websrvs <span class="token parameter variable">-m</span> <span class="token function">file</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;path=/data/testdir state=directory&quot;</span>   \u521B\u5EFA\u76EE\u5F55    
   <span class="token operator">&gt;</span> ansible websrvs <span class="token parameter variable">-m</span> <span class="token function">file</span> <span class="token parameter variable">-a</span> <span class="token string">&quot;path=/root/test.sh owner=wang mode=755&quot;</span>  \u8BBE\u7F6E\u6743\u9650755
   <span class="token operator">&gt;</span> ansible websrvs <span class="token parameter variable">-m</span> <span class="token function">file</span> <span class="token parameter variable">-a</span> <span class="token string">&#39;src=/data/testfile dest=/data/testfile-link state=link&#39;</span> \u521B\u5EFA\u8F6F\u94FE\u63A5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>playbook\u7528\u6CD5</strong></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Change file ownership<span class="token punctuation">,</span> group and permissions
  <span class="token key atrule">file</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /etc/foo.conf
    <span class="token key atrule">owner</span><span class="token punctuation">:</span> foo
    <span class="token key atrule">group</span><span class="token punctuation">:</span> foo
    <span class="token key atrule">mode</span><span class="token punctuation">:</span> <span class="token string">&#39;0644&#39;</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Give insecure permissions to an existing file
  <span class="token key atrule">file</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> /work
    <span class="token key atrule">owner</span><span class="token punctuation">:</span> root
    <span class="token key atrule">group</span><span class="token punctuation">:</span> root
    <span class="token key atrule">mode</span><span class="token punctuation">:</span> <span class="token string">&#39;1777&#39;</span>

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Create a symbolic link
  <span class="token key atrule">file</span><span class="token punctuation">:</span>
    <span class="token key atrule">src</span><span class="token punctuation">:</span> /file/to/link/to
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> /path/to/symlink
    <span class="token key atrule">owner</span><span class="token punctuation">:</span> foo
    <span class="token key atrule">group</span><span class="token punctuation">:</span> foo
    <span class="token key atrule">state</span><span class="token punctuation">:</span> link

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Create two hard links
  <span class="token key atrule">file</span><span class="token punctuation">:</span>
    <span class="token key atrule">src</span><span class="token punctuation">:</span> <span class="token string">&#39;/tmp/{{ item.src }}&#39;</span>
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> <span class="token string">&#39;{{ item.dest }}&#39;</span>
    <span class="token key atrule">state</span><span class="token punctuation">:</span> hard
  <span class="token key atrule">loop</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">src</span><span class="token punctuation">:</span> x<span class="token punctuation">,</span> <span class="token key atrule">dest</span><span class="token punctuation">:</span> y <span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">src</span><span class="token punctuation">:</span> z<span class="token punctuation">,</span> <span class="token key atrule">dest</span><span class="token punctuation">:</span> k <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cron\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#cron\u6A21\u5757" aria-hidden="true">#</a> cron\u6A21\u5757</h3><ul><li><strong>\u5B9A\u65F6\u4EFB\u52A1\u7684\u521B\u5EFA\u548C\u5220\u9664\u7BA1\u7406</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u521B\u5EFA\u4E00\u4E2A\u5B9A\u65F6\u4EFB\u52A1

<span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># ansible test -m cron -a &#39;minute=* weekday=1,3,5  job=&quot;/usr/bin/wall FBI waring&quot; name=warningcron&#39;  </span>

\u7981\u7528\u4E00\u4E2A\u5B9A\u65F6\u4EFB\u52A1

<span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># ansible test -m cron -a &#39;disabled=true  job=&quot;/usr/bin/wall FBI waring&quot; name=warningcron&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="unarchive\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#unarchive\u6A21\u5757" aria-hidden="true">#</a> unarchive\u6A21\u5757</h3><ul><li><strong>\u89E3\u538B\u7F29\u7684\u7BA1\u7406\u6A21\u5757\uFF0C\u53EF\u4EE5\u5C06\u672C\u5730ansible\u63A7\u5236\u8282\u70B9\u7684\u5305\u89E3\u538B\u81F3node\u8282\u70B9</strong></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">creates</span><span class="token punctuation">:</span> 		\u4E00\u4E2A\u6587\u4EF6\u540D\uFF0C\u5F53\u5B83\u5DF2\u7ECF\u5B58\u5728\u65F6\uFF0C\u8FD9\u4E2A\u6B65\u9AA4\u5C06\u4E0D\u4F1A\u88AB\u8FD0\u884C\u3002
<span class="token key atrule">copy</span><span class="token punctuation">:</span>  			\u9ED8\u8BA4\u4E3Ayes\uFF0C\u62F7\u8D1D\u7684\u6587\u4EF6\u4ECEansible\u4E3B\u673A\u590D\u5236\u5230\u8FDC\u7A0B\u4E3B\u673A\uFF0Cno\u5728\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u5BFB\u627Esrc\u6E90\u6587\u4EF6\u89E3\u538B
<span class="token key atrule">src</span><span class="token punctuation">:</span> 			tar\u6E90\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u662Fansible\u4E3B\u673A\u4E0A\u7684\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4EE5\u662F\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u7684\u8DEF\u5F84\uFF0C\u5982\u679C\u662F\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u7684\u8DEF\u5F84\uFF0C\u5219\u9700\u8BBE\u7F6Ecopy=no
<span class="token key atrule">dest</span><span class="token punctuation">:</span> 			\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u7684\u76EE\u6807\u7EDD\u5BF9\u8DEF\u5F84
<span class="token key atrule">mode</span><span class="token punctuation">:</span> 			\u8BBE\u7F6E\u89E3\u538B\u7F29\u540E\u7684\u6587\u4EF6\u6743\u9650
<span class="token key atrule">exec</span><span class="token punctuation">:</span> 			\u5217\u51FA\u9700\u8981\u6392\u9664\u7684\u76EE\u5F55\u548C\u6587\u4EF6
<span class="token key atrule">remote_src</span><span class="token punctuation">:</span> 	\u8BBE\u7F6Eremote_src=yes\u4E3A\u89E3\u5305\u76EE\u6807\u4E0A\u5DF2\u7ECF\u5B58\u5728\u7684\u6863\u6848\u3002\u5BF9\u4E8EWindows\u76EE\u6807\uFF0C\u6539\u7528win_unzip\u6A21\u5757\u3002
<span class="token key atrule">owner</span><span class="token punctuation">:</span>  		\u89E3\u538B\u540E\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u5C5E\u4E3B
<span class="token key atrule">group</span><span class="token punctuation">:</span>		 	\u89E3\u538B\u540E\u7684\u76EE\u5F55\u6216\u6587\u4EF6\u7684\u5C5E\u7EC4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u5728\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u89E3\u538B\u6587\u4EF6\u5E76\u8BBE\u7F6E\u6743\u9650
<span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># ansible all -m unarchive -a &#39;src=/srv/tomcat8/apache-tomcat-8.0.29.tar.gz dest=/usr/local copy=no mode=0755&#39;</span>

\u89E3\u538Bansible\u7BA1\u7406\u673A\u4E0A\u7684\u538B\u7F29\u6587\u4EF6\u5230\u8FDC\u7A0B\u4E3B\u673A\u5E76\u8BBE\u7F6E\u6743\u9650
<span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># ansible all -m unarchive -a &quot;src=/tmp/install/zabbix-3.0.4.tar.gz dest=/tmp/ mode=0755 copy=yes&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Playbook\u7528\u6CD5</strong></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Extract foo.tgz into /var/lib/foo
  <span class="token key atrule">unarchive</span><span class="token punctuation">:</span>
    <span class="token key atrule">src</span><span class="token punctuation">:</span> foo.tgz
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> /var/lib/foo

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Unarchive a file that is already on the remote machine
  <span class="token key atrule">unarchive</span><span class="token punctuation">:</span>
    <span class="token key atrule">src</span><span class="token punctuation">:</span> /tmp/foo.zip
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> /usr/local/bin
    <span class="token key atrule">remote_src</span><span class="token punctuation">:</span> yes

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Unarchive a file that needs to be downloaded (added in 2.0)
  <span class="token key atrule">unarchive</span><span class="token punctuation">:</span>
    <span class="token key atrule">src</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//example.com/example.zip
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> /usr/local/bin
    <span class="token key atrule">remote_src</span><span class="token punctuation">:</span> yes

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Unarchive a file with extra options
  <span class="token key atrule">unarchive</span><span class="token punctuation">:</span>
    <span class="token key atrule">src</span><span class="token punctuation">:</span> /tmp/foo.zip
    <span class="token key atrule">dest</span><span class="token punctuation">:</span> /usr/local/bin
    <span class="token key atrule">extra_opts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>transform
    <span class="token punctuation">-</span> s/^xxx/yyy/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="\u5229\u7528\u6A21\u5757\u5FEB\u901F\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u5229\u7528\u6A21\u5757\u5FEB\u901F\u90E8\u7F72" aria-hidden="true">#</a> \u5229\u7528\u6A21\u5757\u5FEB\u901F\u90E8\u7F72</h3><p><code>\u914D\u7F6E\u597Dhosts</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># ansible --list-hosts server</span>
  hosts <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>:
    <span class="token number">192.168</span>.1.107
    <span class="token number">192.168</span>.1.108
    <span class="token number">192.168</span>.1.110

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>\u4F7F\u7528\u6A21\u5757\u64CD\u4F5C\u5B50\u673A</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u4F7F\u7528COPY\u6A21\u5757\u4F20\u9001CentOS-Base.repo\u7684yum\u6E90</span>

<span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># ansible server -m copy -a &quot;src=/root/CentOS-Base.repo dest=/etc/yum.repos.d/CentOS-Base.repo mode=600 backup=yes&quot;</span>
<span class="token number">192.168</span>.1.110 <span class="token operator">|</span> CHANGED <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;ansible_facts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;discovered_interpreter_python&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/usr/libexec/platform-python&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;changed&quot;</span><span class="token builtin class-name">:</span> true,
    <span class="token string">&quot;checksum&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;4966466ad015ef3d2a3cc0b8252d43efbdcf2c94&quot;</span>,
    <span class="token string">&quot;dest&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/etc/yum.repos.d/CentOS-Base.repo&quot;</span>,
    <span class="token string">&quot;gid&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">&quot;group&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;root&quot;</span>,
    <span class="token string">&quot;md5sum&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;d06fb7d5709727828bcaba7457ea673e&quot;</span>,
    <span class="token string">&quot;mode&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0600&quot;</span>,
    <span class="token string">&quot;owner&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;root&quot;</span>,
    <span class="token string">&quot;secontext&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;system_u:object_r:system_conf_t:s0&quot;</span>,
    <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">2595</span>,
    <span class="token string">&quot;src&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/root/.ansible/tmp/ansible-tmp-1632059937.218095-11326-239583984569451/source&quot;</span>,
    <span class="token string">&quot;state&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;file&quot;</span>,
    <span class="token string">&quot;uid&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>

<span class="token comment">#\u4F7F\u7528shell\u6A21\u5757\u68C0\u6D4Byum\u6E90\u662F\u5426\u6B63\u5E38\u4F7F\u7528</span>

<span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># ansible server -m shell -a &quot;yum repolist all&quot; </span>
<span class="token punctuation">[</span>WARNING<span class="token punctuation">]</span>: Consider using the yum module rather than running <span class="token string">&#39;yum&#39;</span><span class="token builtin class-name">.</span>  If you need to use <span class="token builtin class-name">command</span> because yum is insufficient you can <span class="token function">add</span> <span class="token string">&#39;warn:
false&#39;</span> to this <span class="token builtin class-name">command</span> task or <span class="token builtin class-name">set</span> <span class="token string">&#39;command_warnings=False&#39;</span> <span class="token keyword">in</span> ansible.cfg to get rid of this message.
<span class="token number">192.168</span>.1.110 <span class="token operator">|</span> CHANGED <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&gt;&gt;</span>
Updating Subscription Management repositories.
Unable to <span class="token builtin class-name">read</span> consumer identity
This system is not registered to Red Hat Subscription Management. You can use subscription-manager to register.
repo <span class="token function">id</span>             repo name                                           status
AppStream           CentOS-8 - AppStream - mirrors.aliyun.com           enabled
PowerTools          CentOS-8 - PowerTools - mirrors.aliyun.com          disabled
base                CentOS-8 - Base - mirrors.aliyun.com                enabled
centosplus          CentOS-8 - Plus - mirrors.aliyun.com                disabled
extras              CentOS-8 - Extras - mirrors.aliyun.com              enabled
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>

<span class="token comment">#\u4F7F\u7528yum\u6A21\u5757\u5B89\u88C5httpd\u670D\u52A1</span>

<span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># ansible -m yum -a &quot;name=httpd state=present&quot; server</span>
<span class="token number">192.168</span>.1.108 <span class="token operator">|</span> CHANGED <span class="token operator">=</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;ansible_facts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;discovered_interpreter_python&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/usr/libexec/platform-python&quot;</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;changed&quot;</span><span class="token builtin class-name">:</span> true,
    <span class="token string">&quot;msg&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
    <span class="token string">&quot;rc&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">&quot;results&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Installed: mailcap-2.1.48-3.el8.noarch&quot;</span>,
        <span class="token string">&quot;Installed: httpd-2.4.37-39.module_el8.4.0+778+c970deab.x86_64&quot;</span>,
        <span class="token string">&quot;Installed: httpd-filesystem-2.4.37-39.module_el8.4.0+778+c970deab.noarch&quot;</span>,
        <span class="token string">&quot;Installed: httpd-tools-2.4.37-39.module_el8.4.0+778+c970deab.x86_64&quot;</span>,
        <span class="token string">&quot;Installed: mod_http2-1.15.7-3.module_el8.4.0+778+c970deab.x86_64&quot;</span>,
        <span class="token string">&quot;Installed: centos-logos-httpd-85.8-1.el8.noarch&quot;</span>,
        <span class="token string">&quot;Installed: apr-1.6.3-11.el8.x86_64&quot;</span>,
        <span class="token string">&quot;Installed: apr-util-1.6.1-6.el8.x86_64&quot;</span>,
        <span class="token string">&quot;Installed: apr-util-bdb-1.6.1-6.el8.x86_64&quot;</span>,
        <span class="token string">&quot;Installed: apr-util-openssl-1.6.1-6.el8.x86_64&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>

<span class="token comment">#\u4F7F\u7528shell\u6A21\u5757\u8FDC\u7A0B\u5F00\u542F\uFF0C\u8FDC\u7A0B\u67E5\u770B\u670D\u52A1\u72B6\u6001</span>

<span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># ansible server -m shell -a &quot;systemctl start httpd&quot; </span>
<span class="token number">192.168</span>.1.107 <span class="token operator">|</span> CHANGED <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&gt;&gt;</span>

<span class="token number">192.168</span>.1.108 <span class="token operator">|</span> CHANGED <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&gt;&gt;</span>

<span class="token number">192.168</span>.1.110 <span class="token operator">|</span> CHANGED <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&gt;&gt;</span>

<span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># ansible server -m shell -a &quot;curl http://local:80&quot; </span>
^Z
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+  Stopped                 ansible server <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&quot;curl http://local:80&quot;</span>
<span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># ansible server -m shell -a &quot;systemctl status httpd&quot; </span>
<span class="token number">192.168</span>.1.110 <span class="token operator">|</span> CHANGED <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&gt;&gt;</span>
\u25CF httpd.service - The Apache HTTP Server
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/httpd.service<span class="token punctuation">;</span> disabled<span class="token punctuation">;</span> vendor preset: disabled<span class="token punctuation">)</span>
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Sun <span class="token number">2021</span>-09-19 <span class="token number">22</span>:08:57 CST<span class="token punctuation">;</span> 1min 24s ago
     Docs: man:httpd.service<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
 Main PID: <span class="token number">11512</span> <span class="token punctuation">(</span>httpd<span class="token punctuation">)</span>
   Status: <span class="token string">&quot;Running, listening on: port 80&quot;</span>
    Tasks: <span class="token number">213</span> <span class="token punctuation">(</span>limit: <span class="token number">11468</span><span class="token punctuation">)</span>
   Memory: <span class="token number">27</span>.4M
   CGroup: /system.slice/httpd.service
           \u251C\u250011512 /usr/sbin/httpd <span class="token parameter variable">-DFOREGROUND</span>
           \u251C\u250011612 /usr/sbin/httpd <span class="token parameter variable">-DFOREGROUND</span>
           \u251C\u250011613 /usr/sbin/httpd <span class="token parameter variable">-DFOREGROUND</span>
           \u251C\u250011614 /usr/sbin/httpd <span class="token parameter variable">-DFOREGROUND</span>
           \u2514\u250011615 /usr/sbin/httpd <span class="token parameter variable">-DFOREGROUND</span>

Sep <span class="token number">19</span> <span class="token number">22</span>:08:17 server3 systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Starting The Apache HTTP Server<span class="token punctuation">..</span>.
Sep <span class="token number">19</span> <span class="token number">22</span>:08:57 server3 httpd<span class="token punctuation">[</span><span class="token number">11512</span><span class="token punctuation">]</span>: AH00558: httpd: Could not reliably determine the server<span class="token string">&#39;s fully qualified domain name, using fe80::4a92:a42e:da79:b4e6. Set the &#39;</span>ServerName&#39; directive globally to suppress this message
Sep <span class="token number">19</span> <span class="token number">22</span>:08:57 server3 systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: Started The Apache HTTP Server.
Sep <span class="token number">19</span> <span class="token number">22</span>:09:37 server3 httpd<span class="token punctuation">[</span><span class="token number">11512</span><span class="token punctuation">]</span>: Server configured, listening on: port <span class="token number">80</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528playbook\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528playbook\u7684\u65B9\u5F0F" aria-hidden="true">#</a> <strong>\u4F7F\u7528playbook\u7684\u65B9\u5F0F</strong></h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># vim playbook.yaml  </span>
<span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install httpd
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> server
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install httpd
    <span class="token key atrule">yum</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
      <span class="token key atrule">state</span><span class="token punctuation">:</span> present
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> service start
    <span class="token key atrule">service</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
      <span class="token key atrule">state</span><span class="token punctuation">:</span> started
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F7F\u7528ansible-playbook\u90E8\u7F72</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># ansible-playbook  playbook.yaml </span>

PLAY <span class="token punctuation">[</span>install httpd<span class="token punctuation">]</span> ***********************************************************************************************

TASK <span class="token punctuation">[</span>Gathering Facts<span class="token punctuation">]</span> *********************************************************************************************
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.107<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.108<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.110<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>install httpd<span class="token punctuation">]</span> ***********************************************************************************************
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.110<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.107<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.108<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>service start<span class="token punctuation">]</span> ***********************************************************************************************
changed: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.108<span class="token punctuation">]</span>
changed: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.107<span class="token punctuation">]</span>
changed: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.110<span class="token punctuation">]</span>

PLAY RECAP *********************************************************************************************************
<span class="token number">192.168</span>.1.107              <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">3</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">skipped</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">rescued</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">ignored</span><span class="token operator">=</span><span class="token number">0</span>  
<span class="token number">192.168</span>.1.108              <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">3</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">skipped</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">rescued</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">ignored</span><span class="token operator">=</span><span class="token number">0</span>  
<span class="token number">192.168</span>.1.110              <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">3</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">skipped</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">rescued</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">ignored</span><span class="token operator">=</span><span class="token number">0</span>  

<span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,69),p=[l];function i(o,c){return s(),a("div",null,p)}const d=n(t,[["render",i],["__file","2.html.vue"]]);export{d as default};
