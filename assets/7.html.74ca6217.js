import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.ca0279c0.js";const t={},l=e(`<h1 id="ansible\u90E8\u7F72galera\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#ansible\u90E8\u7F72galera\u96C6\u7FA4" aria-hidden="true">#</a> Ansible\u90E8\u7F72galera\u96C6\u7FA4</h1><table><thead><tr><th>\u8282\u70B9</th><th>IP</th><th>\u4E3B\u673A\u540D</th></tr></thead><tbody><tr><td>ansible</td><td>172.25.253.137</td><td>ansible</td></tr><tr><td>galera</td><td>172.25.253.138</td><td>node1</td></tr><tr><td>mariadb</td><td>172.25.253.139</td><td>node2</td></tr><tr><td>mariadb</td><td>172.25.253.140</td><td>node3</td></tr></tbody></table><blockquote><h3 id="\u67E5\u770B\u6587\u4EF6\u6811" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6587\u4EF6\u6811" aria-hidden="true">#</a> <strong>\u67E5\u770B\u6587\u4EF6\u6811</strong></h3></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># tree galera/</span>
galera/
\u251C\u2500\u2500 galera.yaml
\u251C\u2500\u2500 hosts
\u251C\u2500\u2500 local.repo
\u2514\u2500\u2500 templates
    \u2514\u2500\u2500 server.cnf.j2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h3 id="ansible\u90E8\u7F72galera\u96C6\u7FA4-1" tabindex="-1"><a class="header-anchor" href="#ansible\u90E8\u7F72galera\u96C6\u7FA4-1" aria-hidden="true">#</a> <strong>Ansible\u90E8\u7F72galera\u96C6\u7FA4</strong></h3></blockquote><ul><li><strong>\u7531\u4E8E\u90E8\u7F72galera\u96C6\u7FA4\u6BD4\u8F83\u7B80\u5355\u6240\u4EE5\u4F7F\u7528\u5355\u4E2Aplaybook</strong></li><li><strong>\u914D\u7F6E\u597Dgalera\u7684hosts\u6587\u4EF6</strong></li><li><strong>\u914D\u7F6E\u597D\u4E3B\u673A\u53D8\u91CF\u4EE5\u53CA\u4E3B\u673A\u6E05\u5355</strong></li><li><strong>\u914D\u7F6E\u597Dyum\u6E90\u5B89\u88C5\u9AD8\u53EF\u7528\u6570\u636E\u5E93</strong></li><li><strong>\u914D\u7F6E\u597Dj2\u7684server.cnf\u7684\u914D\u7F6E\u6587\u4EF6</strong></li></ul><blockquote><h3 id="\u57FA\u7840\u73AF\u5883\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u73AF\u5883\u90E8\u7F72" aria-hidden="true">#</a> <strong>\u57FA\u7840\u73AF\u5883\u90E8\u7F72</strong></h3></blockquote><h3 id="_1-\u914D\u7F6E\u4E3B\u673A\u6E05\u5355" tabindex="-1"><a class="header-anchor" href="#_1-\u914D\u7F6E\u4E3B\u673A\u6E05\u5355" aria-hidden="true">#</a> 1.\u914D\u7F6E\u4E3B\u673A\u6E05\u5355</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># cat /etc/ansible/hosts  </span>

<span class="token punctuation">[</span>server<span class="token punctuation">]</span>
<span class="token number">172.25</span>.253.138 <span class="token assign-left variable">hostname</span><span class="token operator">=</span>node1
<span class="token number">172.25</span>.253.140 <span class="token assign-left variable">hostname</span><span class="token operator">=</span>node2 
<span class="token number">172.25</span>.253.139 <span class="token assign-left variable">hostname</span><span class="token operator">=</span>node3 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u914D\u7F6Ehosts\u7684\u6620\u5C04" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6Ehosts\u7684\u6620\u5C04" aria-hidden="true">#</a> 2.\u914D\u7F6Ehosts\u7684\u6620\u5C04</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible galera<span class="token punctuation">]</span><span class="token comment"># cat hosts  </span>
<span class="token number">127.0</span>.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6

<span class="token number">172.25</span>.253.138 node1
<span class="token number">172.25</span>.253.139 node2 
<span class="token number">172.25</span>.253.140 node3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u914D\u7F6Eyum\u6E90\u5B89\u88C5mariadb-galera" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6Eyum\u6E90\u5B89\u88C5mariadb-galera" aria-hidden="true">#</a> 3.\u914D\u7F6Eyum\u6E90\u5B89\u88C5mariadb galera</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible galera<span class="token punctuation">]</span><span class="token comment"># cat  local.repo  </span>
<span class="token punctuation">[</span>centos<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>centos
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://172.25.253.144/file/centos/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token punctuation">[</span>mariadb-repoo<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>mariadb-repo
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://172.25
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u7F16\u5199playbook\u7684" tabindex="-1"><a class="header-anchor" href="#_4-\u7F16\u5199playbook\u7684" aria-hidden="true">#</a> 4.\u7F16\u5199playbook\u7684</h3><ul><li><strong>\u4F7F\u7528playbook\u90E8\u7F72\u591A\u4E2A\u4E3B\u673A\u540D</strong></li><li><strong>\u590D\u5236hosts\u548Clocal.repo</strong></li><li><strong>\u5B89\u88C5mariadb \u548C galera\u4EE5\u53CA\u6240\u9700\u8981\u7684\u5B89\u88C5\u5305</strong></li><li><strong>\u914D\u7F6E\u73AF\u5883 \u914D\u7F6E\u914D\u7F6E\u6587\u4EF6 \u542F\u52A8galera\u7684\u73AF\u5883</strong></li><li><strong>\u4F7F\u7528meta\u89E6\u53D1handlers\u5728\u5B8C\u6210\u6E05\u5355\u7ACB\u9A6C\u89E6\u53D1handlers\u6548\u679C</strong></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@ansible galera<span class="token punctuation">]</span><span class="token comment"># cat galera.yaml  </span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> server 
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root 
  
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> change name
      <span class="token key atrule">raw</span><span class="token punctuation">:</span> <span class="token string">&quot;echo {{hostname|quote}} &gt; /etc/hostname&quot;</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span>
      <span class="token key atrule">shell</span><span class="token punctuation">:</span> hostname <span class="token punctuation">{</span><span class="token punctuation">{</span>hostname<span class="token punctuation">|</span>quote<span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy hosts
      <span class="token key atrule">copy</span><span class="token punctuation">:</span> src=hosts dest=/etc/hosts
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> delete repo
      <span class="token key atrule">shell</span><span class="token punctuation">:</span> rm <span class="token punctuation">-</span>rf /etc/yum.repos.d/*
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy repo
      <span class="token key atrule">copy</span><span class="token punctuation">:</span> src=local.repo dest=/etc/yum.repos.d/local.repo
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Packages
      <span class="token key atrule">yum</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> mariadb
          <span class="token punctuation">-</span> mariadb<span class="token punctuation">-</span>server
          <span class="token punctuation">-</span> galera
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start mariadb
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=mariadb  state=started
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> mysql_admin
      <span class="token key atrule">shell</span><span class="token punctuation">:</span> mysqladmin <span class="token punctuation">-</span>uroot password 000000
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> grant all
      <span class="token key atrule">shell</span><span class="token punctuation">:</span> mysql <span class="token punctuation">-</span>uroot <span class="token punctuation">-</span>p000000 <span class="token punctuation">-</span>e &quot;grant all privileges on <span class="token important">*.*</span> to root@&#39;%&#39; identified by &#39;000000&#39;;&quot;
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> change config
      <span class="token key atrule">template</span><span class="token punctuation">:</span> src=server.cnf.j2 dest=/etc/my.cnf.d/server.cnf
      <span class="token key atrule">notify</span><span class="token punctuation">:</span> stop service
     
    <span class="token punctuation">-</span> <span class="token key atrule">meta</span><span class="token punctuation">:</span> flush_handlers

    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start  galera
      <span class="token key atrule">shell</span><span class="token punctuation">:</span> galera_new_cluster
      <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_fqdn == &quot;node1&quot;
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start mariadb1
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=mariadb state=started
      <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_fqdn == <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token string">&quot;item&quot;</span>  <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token key atrule">with_items</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> node2
        <span class="token punctuation">-</span> node3

  <span class="token key atrule">handlers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> stop service 
      <span class="token key atrule">service</span><span class="token punctuation">:</span> name=mariadb state=stopped 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-\u4FEE\u6539template\u7684j2\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_5-\u4FEE\u6539template\u7684j2\u6587\u4EF6" aria-hidden="true">#</a> 5.\u4FEE\u6539template\u7684j2\u6587\u4EF6</h3><ul><li><strong>\u521B\u5EFAtemplates\u7684\u76EE\u5F55</strong></li><li><strong>\u6DFB\u52A0server.cnf\u547D\u540Dj2\u7ED3\u5C3E\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u66F4\u6539\u914D\u7F6E</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible galera<span class="token punctuation">]</span><span class="token comment"># cat templates/server.cnf.j2 </span>


<span class="token punctuation">[</span>galera<span class="token punctuation">]</span>
<span class="token comment"># Mandatory settings</span>
<span class="token assign-left variable">wsrep_on</span><span class="token operator">=</span>ON
<span class="token assign-left variable">wsrep_provider</span><span class="token operator">=</span>/usr/lib64/galera/libgalera_smm.so
<span class="token assign-left variable">wsrep_cluster_address</span><span class="token operator">=</span>gcomm://node1,node2,node3
<span class="token assign-left variable">binlog_format</span><span class="token operator">=</span>row
<span class="token assign-left variable">default_storage_engine</span><span class="token operator">=</span>InnoDB
<span class="token assign-left variable">innodb_autoinc_lock_mode</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token comment">#</span>
<span class="token comment"># Allow server to accept connections on all interfaces.</span>
<span class="token comment">#</span>
bind-address<span class="token operator">=</span><span class="token number">0.0</span>.0.0
<span class="token comment">#</span>
<span class="token comment"># Optional setting</span>
<span class="token comment">#wsrep_slave_threads=1</span>
<span class="token comment">#innodb_flush_log_at_trx_commit=0</span>

<span class="token comment"># this is only for embedded server</span>
<span class="token punctuation">[</span>embedded<span class="token punctuation">]</span>

<span class="token comment"># This group is only read by MariaDB servers, not by MySQL.</span>
<span class="token comment"># If you use the same .cnf file for MySQL and MariaDB,</span>
<span class="token comment"># you can put MariaDB-only options here</span>
<span class="token punctuation">[</span>mariadb<span class="token punctuation">]</span>

<span class="token comment"># This group is only read by MariaDB-10.3 servers.</span>
<span class="token comment"># If you use the same .cnf file for MariaDB of different versions,</span>
<span class="token comment"># use this group for options that older servers don&#39;t understand</span>
<span class="token punctuation">[</span>mariadb-10.3<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-\u6267\u884C\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_6-\u6267\u884C\u811A\u672C" aria-hidden="true">#</a> 6.\u6267\u884C\u811A\u672C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># ansible-playbook galera.yaml </span>

PLAY <span class="token punctuation">[</span>server<span class="token punctuation">]</span> ***************************************************************************************************************

TASK <span class="token punctuation">[</span>Gathering Facts<span class="token punctuation">]</span> ******************************************************************************************************
ok: <span class="token punctuation">[</span><span class="token number">172.25</span>.253.139<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">172.25</span>.253.140<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">172.25</span>.253.138<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>change name<span class="token punctuation">]</span> **********************************************************************************************************
changed: <span class="token punctuation">[</span><span class="token number">172.25</span>.253.138<span class="token punctuation">]</span>
changed: <span class="token punctuation">[</span><span class="token number">172.25</span>.253.140<span class="token punctuation">]</span>
changed: <span class="token punctuation">[</span><span class="token number">172.25</span>.253.139<span class="token punctuation">]</span>
\xB7
\xB7
\xB7
PLAY RECAP ******************************************************************************************************************
<span class="token number">172.25</span>.253.138             <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">12</span>   <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">10</span>   <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">skipped</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">rescued</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">ignored</span><span class="token operator">=</span><span class="token number">0</span>   
<span class="token number">172.25</span>.253.139             <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">12</span>   <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">10</span>   <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">skipped</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">rescued</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">ignored</span><span class="token operator">=</span><span class="token number">0</span>   
<span class="token number">172.25</span>.253.140             <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">12</span>   <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">10</span>   <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">skipped</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">rescued</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">ignored</span><span class="token operator">=</span><span class="token number">0</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-\u9A8C\u8BC1galera\u96C6\u7FA4\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#_7-\u9A8C\u8BC1galera\u96C6\u7FA4\u6548\u679C" aria-hidden="true">#</a> 7.\u9A8C\u8BC1galera\u96C6\u7FA4\u6548\u679C</h3><ul><li><strong>\u67E5\u770B\u7AEF\u53E3\u53F7</strong></li><li><strong>\u67E5\u770B\u96C6\u7FA4\u72B6</strong></li><li><strong>\u82E5\u770B\u52303306\u548C4567\u7AEF\u53E3\uFF0C\u5219MariaDB Galera Cluster\u96C6\u7FA4\u914D\u7F6E\u6210\u529F\u6001</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible galera<span class="token punctuation">]</span><span class="token comment"># ansible server -m shell -a &quot;netstat -ntpl&quot;</span>
<span class="token number">172.25</span>.253.140 <span class="token operator">|</span> CHANGED <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&gt;&gt;</span>
Active Internet connections <span class="token punctuation">(</span>only servers<span class="token punctuation">)</span>
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:3306            <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">9369</span>/mysqld         
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:111             <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">522</span>/rpcbind         
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:22              <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">1022</span>/sshd           
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">0.0</span>.0.0:4567            <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">9369</span>/mysqld         
tcp        <span class="token number">0</span>      <span class="token number">0</span> <span class="token number">127.0</span>.0.1:25            <span class="token number">0.0</span>.0.0:*               LISTEN      <span class="token number">958</span>/master          
tcp6       <span class="token number">0</span>      <span class="token number">0</span> :::111                  :::*                    LISTEN      <span class="token number">522</span>/rpcbind         
tcp6       <span class="token number">0</span>      <span class="token number">0</span> :::22                   :::*                    LISTEN      <span class="token number">1022</span>/sshd           
tcp6       <span class="token number">0</span>      <span class="token number">0</span> ::1:25                  :::*                    LISTEN      <span class="token number">958</span>/master      


<span class="token punctuation">[</span>root@node1 ~<span class="token punctuation">]</span><span class="token comment"># mysql -uroot -p000000</span>
Welcome to the MariaDB monitor.  Commands end with <span class="token punctuation">;</span> or <span class="token punctuation">\\</span>g.
Your MariaDB connection <span class="token function">id</span> is <span class="token number">10</span>
Server version: <span class="token number">10.3</span>.23-MariaDB MariaDB Server

Copyright <span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token number">2000</span>, <span class="token number">2018</span>, Oracle, MariaDB Corporation Ab and others.

Type <span class="token string">&#39;help;&#39;</span> or <span class="token string">&#39;\\h&#39;</span> <span class="token keyword">for</span> help. Type <span class="token string">&#39;\\c&#39;</span> to <span class="token function">clear</span> the current input statement.

MariaDB <span class="token punctuation">[</span><span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> show status like <span class="token string">&quot;wsrep_ready&quot;</span><span class="token punctuation">;</span>
+---------------+-------+
<span class="token operator">|</span> Variable_name <span class="token operator">|</span> Value <span class="token operator">|</span>
+---------------+-------+
<span class="token operator">|</span> wsrep_ready   <span class="token operator">|</span> ON    <span class="token operator">|</span>
+---------------+-------+
<span class="token number">1</span> row <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.001</span> sec<span class="token punctuation">)</span>

MariaDB <span class="token punctuation">[</span><span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> show status like <span class="token string">&quot;wsrep_cluster_size&quot;</span><span class="token punctuation">;</span>
+--------------------+-------+
<span class="token operator">|</span> Variable_name      <span class="token operator">|</span> Value <span class="token operator">|</span>
+--------------------+-------+
<span class="token operator">|</span> wsrep_cluster_size <span class="token operator">|</span> <span class="token number">3</span>     <span class="token operator">|</span>
+--------------------+-------+
<span class="token number">1</span> row <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.000</span> sec<span class="token punctuation">)</span>

MariaDB <span class="token punctuation">[</span><span class="token punctuation">(</span>none<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token builtin class-name">exit</span> 
Bye
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),p=[l];function o(i,c){return s(),a("div",null,p)}const d=n(t,[["render",o],["__file","7.html.vue"]]);export{d as default};
