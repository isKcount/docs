import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.ca0279c0.js";const l={},t=e(`<h1 id="ansible\u90E8\u7F72\u4E3B\u4ECE\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#ansible\u90E8\u7F72\u4E3B\u4ECE\u6570\u636E\u5E93" aria-hidden="true">#</a> Ansible\u90E8\u7F72\u4E3B\u4ECE\u6570\u636E\u5E93</h1><table><thead><tr><th>\u8282\u70B9</th><th>IP</th><th>\u4E3B\u673A\u540D</th></tr></thead><tbody><tr><td>ansible</td><td>172.25.253.137</td><td>ansible</td></tr><tr><td>master</td><td>172.25.253.140</td><td>master</td></tr><tr><td>slave</td><td>172.25.253.139</td><td>slave</td></tr></tbody></table><blockquote><h3 id="\u67E5\u770B\u5F53\u524D\u7684\u6587\u4EF6\u6811" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5F53\u524D\u7684\u6587\u4EF6\u6811" aria-hidden="true">#</a> \u67E5\u770B\u5F53\u524D\u7684\u6587\u4EF6\u6811</h3></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible ansible<span class="token punctuation">]</span><span class="token comment"># tree role/</span>
role/
\u251C\u2500\u2500 mariadb.yaml
\u251C\u2500\u2500 master
\u2502   \u251C\u2500\u2500 <span class="token function">file</span>
\u2502   \u2502   \u251C\u2500\u2500 hosts
\u2502   \u2502   \u2514\u2500\u2500 local.repo
\u2502   \u251C\u2500\u2500 tasks
\u2502   \u2502   \u251C\u2500\u2500 main.yaml
\u2502   \u2502   \u251C\u2500\u2500 mariadb.yaml
\u2502   \u2502   \u2514\u2500\u2500 master.yaml
\u2502   \u2514\u2500\u2500 templates
\u2502       \u251C\u2500\u2500 server.cnf1.j2
\u2502       \u2514\u2500\u2500 server.cnf2.j2
\u2514\u2500\u2500 slave
    \u2514\u2500\u2500  tasks
        \u251C\u2500\u2500 main.yaml
        \u2514\u2500\u2500 slave.yaml
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h3 id="\u914D\u7F6Eansible\u7684hosts" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Eansible\u7684hosts" aria-hidden="true">#</a> \u914D\u7F6Eansible\u7684hosts</h3></blockquote><h4 id="_1-\u6DFB\u52A0\u4E3B\u673A\u6E05\u5355-\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_1-\u6DFB\u52A0\u4E3B\u673A\u6E05\u5355-\u53D8\u91CF" aria-hidden="true">#</a> 1.<strong>\u6DFB\u52A0\u4E3B\u673A\u6E05\u5355 \u53D8\u91CF</strong></h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible ansible<span class="token punctuation">]</span><span class="token comment"># vim /etc/ansible/hosts </span>

<span class="token punctuation">[</span>server<span class="token punctuation">]</span>
<span class="token number">172.25</span>.253.140 <span class="token assign-left variable">masterip</span><span class="token operator">=</span><span class="token number">140</span>
<span class="token number">172.25</span>.253.139 <span class="token assign-left variable">slaveip</span><span class="token operator">=</span><span class="token number">139</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u521B\u5EFAmaster\u548Cslave\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFAmaster\u548Cslave\u89D2\u8272" aria-hidden="true">#</a> 2.<strong>\u521B\u5EFAmaster\u548Cslave\u89D2\u8272</strong></h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># mkdir -p ansible/role/{master,slave}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><h3 id="\u521B\u5EFA\u89D2\u8272\u9700\u8981\u7684\u6587\u4EF6\u5939\u548C\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u89D2\u8272\u9700\u8981\u7684\u6587\u4EF6\u5939\u548C\u6587\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA\u89D2\u8272\u9700\u8981\u7684\u6587\u4EF6\u5939\u548C\u6587\u4EF6</h3></blockquote><h4 id="_3-master\u548Cslave\u521B\u5EFA\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_3-master\u548Cslave\u521B\u5EFA\u76EE\u5F55" aria-hidden="true">#</a> <strong>3.master\u548Cslave\u521B\u5EFA\u76EE\u5F55</strong></h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># cd ansible/role/master/</span>
<span class="token punctuation">[</span>root@ansible master<span class="token punctuation">]</span><span class="token comment"># mkdir file tasks templates </span>

<span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># cd ansible/role/slave/</span>
<span class="token punctuation">[</span>root@ansible master<span class="token punctuation">]</span><span class="token comment"># mkdir  tasks </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-\u521B\u5EFAmaster\u7684\u76F8\u5173\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-\u521B\u5EFAmaster\u7684\u76F8\u5173\u6587\u4EF6" aria-hidden="true">#</a> <strong>4.\u521B\u5EFAmaster\u7684\u76F8\u5173\u6587\u4EF6</strong></h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible master<span class="token punctuation">]</span><span class="token comment"># tree file/</span>
file/
\u251C\u2500\u2500 hosts
\u251C\u2500\u2500 local.repo
\u2514\u2500\u2500 server.cnf

<span class="token punctuation">[</span>root@ansible master<span class="token punctuation">]</span><span class="token comment"># tree tasks/</span>
tasks/
\u251C\u2500\u2500 main.yaml
\u251C\u2500\u2500 mariadb.yaml
\u2514\u2500\u2500 master.yaml

<span class="token punctuation">[</span>root@ansible master<span class="token punctuation">]</span><span class="token comment"># tree templates/</span>
templates/
\u251C\u2500\u2500 server.cnf
\u251C\u2500\u2500 server.cnf1.j2
\u2514\u2500\u2500 server.cnf2.j2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-\u521B\u5EFAslave\u7684task\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5-\u521B\u5EFAslave\u7684task\u6587\u4EF6" aria-hidden="true">#</a> <strong>5.\u521B\u5EFAslave\u7684task\u6587\u4EF6</strong></h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible slave<span class="token punctuation">]</span><span class="token comment"># tree tasks/</span>
tasks/
\u251C\u2500\u2500 main.yaml
\u2514\u2500\u2500 slave.yaml

<span class="token number">0</span> directories, <span class="token number">2</span> files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h3 id="playbook\u7684\u8BE6\u7EC6\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#playbook\u7684\u8BE6\u7EC6\u4ECB\u7ECD" aria-hidden="true">#</a> playbook\u7684\u8BE6\u7EC6\u4ECB\u7ECD</h3></blockquote><ul><li><strong>master\u89D2\u8272\u8D1F\u8D23\u4E24\u4E2A\u8282\u70B9\u7684\u914D\u7F6Ehosts\u3001\u914D\u7F6Eyum\u6E90\u3001\u5B89\u88C5\u8F6F\u4EF6\u3001\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u3001\u6388\u6743</strong></li><li><strong>slave\u89D2\u8272\u8D1F\u8D23slave\u8282\u70B9\u7684\u52A0\u5165\u4ECE\u8282\u70B9\u64CD\u4F5C</strong></li><li><strong>\u590D\u5236hosts\u548Clocal.repo\u6587\u4EF6\u5230master\u89D2\u8272\u7684file\u76EE\u5F55</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible file<span class="token punctuation">]</span><span class="token comment"># ll</span>
total <span class="token number">12</span>
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">203</span> Oct <span class="token number">13</span> <span class="token number">12</span>:26 hosts
-rw-r--r-- <span class="token number">1</span> root root  <span class="token number">76</span> Oct <span class="token number">12</span> <span class="token number">21</span>:14 local.repo

<span class="token punctuation">[</span>root@ansible file<span class="token punctuation">]</span><span class="token comment"># cat hosts </span>
<span class="token number">127.0</span>.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6

<span class="token number">172.25</span>.253.140 master 
<span class="token number">172.25</span>.253.139 slave

<span class="token punctuation">[</span>root@ansible file<span class="token punctuation">]</span><span class="token comment"># cat local.repo  </span>
<span class="token punctuation">[</span>centos<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>centos 
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://172.25.253.144/file/centos/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u67E5\u770Btasks</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># ll</span>
total <span class="token number">12</span>
-rw-r--r-- <span class="token number">1</span> root root  <span class="token number">49</span> Oct <span class="token number">12</span> <span class="token number">22</span>:14 main.yaml
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">653</span> Oct <span class="token number">13</span> <span class="token number">12</span>:29 mariadb.yaml
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">329</span> Oct <span class="token number">13</span> <span class="token number">11</span>:34 master.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h3 id="\u7F16\u5199master\u7684tasks" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199master\u7684tasks" aria-hidden="true">#</a> \u7F16\u5199Master\u7684tasks</h3></blockquote><h4 id="_6-\u7F16\u5199master\u7684\u6E05\u5355\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_6-\u7F16\u5199master\u7684\u6E05\u5355\u5217\u8868" aria-hidden="true">#</a> 6.\u7F16\u5199master\u7684\u6E05\u5355\u5217\u8868</h4><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># cat  mariadb.yaml </span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy hosts 
  <span class="token key atrule">copy</span><span class="token punctuation">:</span> src=./file/hosts dest=/etc/hosts
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> delete repo 
  <span class="token key atrule">shell</span><span class="token punctuation">:</span> rm <span class="token punctuation">-</span>rf /etc/yum.repos.d/*
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy repo 
  <span class="token key atrule">copy</span><span class="token punctuation">:</span> src=./file/local.repo dest=/etc/yum.repos.d/local.repo 
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install mariadb 
  <span class="token key atrule">yum</span><span class="token punctuation">:</span> 
    <span class="token key atrule">name</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> mariadb
      <span class="token punctuation">-</span> mariadb<span class="token punctuation">-</span>server 
    <span class="token key atrule">state</span><span class="token punctuation">:</span> present 
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy config1 
  <span class="token key atrule">template</span><span class="token punctuation">:</span> src=server.cnf1.j2 dest=/etc/my.cnf.d/server.cnf 
  <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_fqdn == &quot;master&quot;
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy config2
  <span class="token key atrule">template</span><span class="token punctuation">:</span> src=server.cnf2.j2 dest=/etc/my.cnf.d/server.cnf
  <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_fqdn == &quot;slave&quot;
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start  mariadb
  <span class="token key atrule">service</span><span class="token punctuation">:</span> name=mariadb state=started 
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql password 
  <span class="token key atrule">shell</span><span class="token punctuation">:</span> mysqladmin <span class="token punctuation">-</span>uroot password 000000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># cat master.yaml  </span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> grant privileges
  <span class="token key atrule">shell</span><span class="token punctuation">:</span> mysql <span class="token punctuation">-</span>uroot <span class="token punctuation">-</span>p000000 <span class="token punctuation">-</span>e &quot; grant all privileges on <span class="token important">*.*</span> to root@&#39;%&#39; identified by &#39;000000&#39;;&quot;
  <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_fqdn == &quot;master&quot;
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> grant replication
  <span class="token key atrule">shell</span><span class="token punctuation">:</span> mysql <span class="token punctuation">-</span>uroot <span class="token punctuation">-</span>p000000 <span class="token punctuation">-</span>e &quot; grant replication slave on <span class="token important">*.*</span> to &#39;user&#39;@&#39;slave&#39; identified by &#39;000000&#39;;&quot;
  <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_fqdn == &quot;master&quot; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># cat main.yaml  </span>
<span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> mariadb.yaml 
<span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> master.yaml 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h3 id="\u4F7F\u7528\u53D8\u91CF\u4FEE\u6539\u4E24\u4E2A\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53D8\u91CF\u4FEE\u6539\u4E24\u4E2A\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528\u53D8\u91CF\u4FEE\u6539\u4E24\u4E2A\u914D\u7F6E\u6587\u4EF6</h3></blockquote><h4 id="_7-\u4FEE\u6539\u4E24\u4E2A\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_7-\u4FEE\u6539\u4E24\u4E2A\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 7.\u4FEE\u6539\u4E24\u4E2A\u914D\u7F6E\u6587\u4EF6</h4><ul><li><strong>\u672C\u5730\u5B89\u88C5mariadb\uFF0C\u590D\u5236/etc/my.cnf.d/server.cnf\u5230templates\u76EE\u5F55\u547D\u540D\u4E3Aj2\u7684\u6587\u4EF6</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible templates<span class="token punctuation">]</span><span class="token comment"># ll</span>
total <span class="token number">8</span>
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">816</span> Oct <span class="token number">12</span> <span class="token number">21</span>:50 server.cnf1.j2
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">815</span> Oct <span class="token number">12</span> <span class="token number">21</span>:50 server.cnf2.j2

<span class="token punctuation">[</span>root@ansible templates<span class="token punctuation">]</span><span class="token comment"># cat server.cnf1.j2 </span>
<span class="token comment">#</span>
<span class="token comment"># These groups are read by MariaDB server.</span>
<span class="token comment"># Use it for options that only the server (but not clients) should see</span>
<span class="token comment">#</span>
<span class="token comment"># See the examples of server my.cnf files in /usr/share/mysql/</span>
<span class="token comment">#</span>

<span class="token comment"># this is read by the standalone daemon and embedded servers</span>
<span class="token punctuation">[</span>server<span class="token punctuation">]</span>

<span class="token comment"># this is only for the mysqld standalone daemon</span>
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
log_bin <span class="token operator">=</span> mysql-bin
binlog_ignore_db <span class="token operator">=</span> mysql
server_id <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> masterip <span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token punctuation">[</span>root@ansible templates<span class="token punctuation">]</span><span class="token comment"># cat server.cnf2.j2 </span>
<span class="token comment">#</span>
<span class="token comment"># These groups are read by MariaDB server.</span>
<span class="token comment"># Use it for options that only the server (but not clients) should see</span>
<span class="token comment">#</span>
<span class="token comment"># See the examples of server my.cnf files in /usr/share/mysql/</span>
<span class="token comment">#</span>

<span class="token comment"># this is read by the standalone daemon and embedded servers</span>
<span class="token punctuation">[</span>server<span class="token punctuation">]</span>

<span class="token comment"># this is only for the mysqld standalone daemon</span>
<span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>
log_bin <span class="token operator">=</span> mysql-bin
binlog_ignore_db <span class="token operator">=</span> mysql
server_id <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> slaveip <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h3 id="\u7F16\u5199slave\u7684tasks" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199slave\u7684tasks" aria-hidden="true">#</a> \u7F16\u5199Slave\u7684tasks</h3></blockquote><h4 id="_8-\u7F16\u5199slave\u89D2\u8272\u7684\u6E05\u5355" tabindex="-1"><a class="header-anchor" href="#_8-\u7F16\u5199slave\u89D2\u8272\u7684\u6E05\u5355" aria-hidden="true">#</a> 8.\u7F16\u5199slave\u89D2\u8272\u7684\u6E05\u5355</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible role<span class="token punctuation">]</span><span class="token comment"># cd slave/</span>
<span class="token punctuation">[</span>root@ansible slave<span class="token punctuation">]</span><span class="token comment"># ll</span>
total <span class="token number">0</span>
drwxr-xr-x <span class="token number">2</span> root root <span class="token number">41</span> Oct <span class="token number">13</span> <span class="token number">11</span>:40 tasks
<span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># ll</span>
total <span class="token number">8</span>
-rw-r--r-- <span class="token number">1</span> root root  <span class="token number">23</span> Oct <span class="token number">12</span> <span class="token number">22</span>:18 main.yaml
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">268</span> Oct <span class="token number">12</span> <span class="token number">22</span>:23 slave.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9-\u7F16\u5199\u6E05\u5355" tabindex="-1"><a class="header-anchor" href="#_9-\u7F16\u5199\u6E05\u5355" aria-hidden="true">#</a> 9.\u7F16\u5199\u6E05\u5355</h4><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># cat slave.yaml  </span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start slave 
  <span class="token key atrule">shell</span><span class="token punctuation">:</span> mysql <span class="token punctuation">-</span>uroot <span class="token punctuation">-</span>p000000 <span class="token punctuation">-</span>e &quot;change master to master_host=&#39;master&#39;<span class="token punctuation">,</span>master_user=&#39;user&#39;<span class="token punctuation">,</span>master_password=&#39;000000&#39;;&quot;
  <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_fqdn == &quot;slave&quot;
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> slave 
  <span class="token key atrule">shell</span><span class="token punctuation">:</span> mysql <span class="token punctuation">-</span>uroot <span class="token punctuation">-</span>p000000 <span class="token punctuation">-</span>e &quot;start slave;&quot;
  <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_fqdn == &quot;slave&quot;
<span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># cat  main.yaml </span>
<span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> slave.yaml 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h3 id="\u7F16\u5199role\u7684playbook" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199role\u7684playbook" aria-hidden="true">#</a> \u7F16\u5199Role\u7684playbook</h3></blockquote><h4 id="_10-\u5728role\u7684\u76EE\u5F55\u4E0B\u7F16\u5199\u5267\u672C" tabindex="-1"><a class="header-anchor" href="#_10-\u5728role\u7684\u76EE\u5F55\u4E0B\u7F16\u5199\u5267\u672C" aria-hidden="true">#</a> 10.\u5728role\u7684\u76EE\u5F55\u4E0B\u7F16\u5199\u5267\u672C</h4><ul><li><strong>\u8BE5\u5267\u672C\u4F7F\u7528role\u89D2\u8272\u8C03\u7528</strong></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@ansible role<span class="token punctuation">]</span><span class="token comment"># ll</span>
total 4
<span class="token punctuation">-</span>rw<span class="token punctuation">-</span>r<span class="token punctuation">-</span><span class="token punctuation">-</span>r<span class="token punctuation">-</span><span class="token punctuation">-</span> 1 root root 86 Oct 12 22<span class="token punctuation">:</span>20 mariadb.yaml
drwxr<span class="token punctuation">-</span>xr<span class="token punctuation">-</span>x 6 root root 60 Oct 12 21<span class="token punctuation">:</span>52 master
drwxr<span class="token punctuation">-</span>xr<span class="token punctuation">-</span>x 4 root root 31 Oct 13 11<span class="token punctuation">:</span>16 slave

<span class="token punctuation">[</span>root@ansible role<span class="token punctuation">]</span><span class="token comment"># cat mariadb.yaml  </span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> server 
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root 

  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> master 
    <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> slave
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_11-\u6267\u884C\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_11-\u6267\u884C\u811A\u672C" aria-hidden="true">#</a> 11.\u6267\u884C\u811A\u672C</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible role<span class="token punctuation">]</span><span class="token comment"># ansible-playbook mariadb.yaml  </span>

PLAY <span class="token punctuation">[</span>server<span class="token punctuation">]</span> ********************************************************************************************************

TASK <span class="token punctuation">[</span>Gathering Facts<span class="token punctuation">]</span> ***********************************************************************************************
ok: <span class="token punctuation">[</span><span class="token number">172.25</span>.253.139<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">172.25</span>.253.140<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>master <span class="token builtin class-name">:</span> copy hosts<span class="token punctuation">]</span> *******************************************************************************************
ok: <span class="token punctuation">[</span><span class="token number">172.25</span>.253.139<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">172.25</span>.253.140<span class="token punctuation">]</span>
\xB7
\xB7
\xB7
PLAY RECAP ***********************************************************************************************************
<span class="token number">172.25</span>.253.139             <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">10</span>   <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">7</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">skipped</span><span class="token operator">=</span><span class="token number">3</span>    <span class="token assign-left variable">rescued</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">ignored</span><span class="token operator">=</span><span class="token number">0</span>   
<span class="token number">172.25</span>.253.140             <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">10</span>   <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">7</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">skipped</span><span class="token operator">=</span><span class="token number">3</span>    <span class="token assign-left variable">rescued</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">ignored</span><span class="token operator">=</span><span class="token number">0</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12-\u68C0\u67E5\u96C6\u7FA4\u662F\u5426\u6B63\u5E38" tabindex="-1"><a class="header-anchor" href="#_12-\u68C0\u67E5\u96C6\u7FA4\u662F\u5426\u6B63\u5E38" aria-hidden="true">#</a> 12.\u68C0\u67E5\u96C6\u7FA4\u662F\u5426\u6B63\u5E38</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible role<span class="token punctuation">]</span><span class="token comment"># ansible  server  -m shell  -a &quot;mysql -uroot -p000000 -e &#39;show slave status\\G&#39;&quot;</span>
<span class="token number">172.25</span>.253.140 <span class="token operator">|</span> CHANGED <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&gt;&gt;</span>
<span class="token number">172.25</span>.253.139 <span class="token operator">|</span> CHANGED <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&gt;&gt;</span>
*************************** <span class="token number">1</span>. row ***************************
               Slave_IO_State: Waiting <span class="token keyword">for</span> master to send event
                  Master_Host: master
                  Master_User: user
                  Master_Port: <span class="token number">3306</span>
                Connect_Retry: <span class="token number">60</span>
              Master_Log_File: mysql-bin.000003
          Read_Master_Log_Pos: <span class="token number">666</span>
               Relay_Log_File: mariadb-relay-bin.000004
                Relay_Log_Pos: <span class="token number">950</span>
        Relay_Master_Log_File: mysql-bin.000003
             Slave_IO_Running: Yes
            Slave_SQL_Running: Yes
              Replicate_Do_DB: 
          Replicate_Ignore_DB: 
           Replicate_Do_Table: 
       Replicate_Ignore_Table: 
      Replicate_Wild_Do_Table: 
  Replicate_Wild_Ignore_Table: 
                   Last_Errno: <span class="token number">0</span>
                   Last_Error: 
                 Skip_Counter: <span class="token number">0</span>
          Exec_Master_Log_Pos: <span class="token number">666</span>
              Relay_Log_Space: <span class="token number">1530</span>
              Until_Condition: None
               Until_Log_File: 
                Until_Log_Pos: <span class="token number">0</span>
           Master_SSL_Allowed: No
           Master_SSL_CA_File: 
           Master_SSL_CA_Path: 
              Master_SSL_Cert: 
            Master_SSL_Cipher: 
               Master_SSL_Key: 
        Seconds_Behind_Master: <span class="token number">0</span>
Master_SSL_Verify_Server_Cert: No
                Last_IO_Errno: <span class="token number">0</span>
                Last_IO_Error: 
               Last_SQL_Errno: <span class="token number">0</span>
               Last_SQL_Error: 
  Replicate_Ignore_Server_Ids: 
             Master_Server_Id: <span class="token number">140</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),i=[t];function o(p,c){return s(),a("div",null,i)}const d=n(l,[["render",o],["__file","6.html.vue"]]);export{d as default};
