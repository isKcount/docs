import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.ca0279c0.js";const t={},p=e(`<h1 id="ansible\u90E8\u7F72kafka\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#ansible\u90E8\u7F72kafka\u96C6\u7FA4" aria-hidden="true">#</a> Ansible\u90E8\u7F72kafka\u96C6\u7FA4</h1><table><thead><tr><th>\u8282\u70B9</th><th>IP</th><th>\u4E3B\u673A\u540D</th></tr></thead><tbody><tr><td>ansible</td><td>172.25.253.137</td><td>ansible</td></tr><tr><td>node1</td><td>172.25.253.138</td><td>zookeeper1</td></tr><tr><td>node2</td><td>172.25.253.139</td><td>zookeeper2</td></tr><tr><td>node3</td><td>172.25.253.140</td><td>zookeeper3</td></tr></tbody></table><blockquote><h3 id="\u67E5\u770B\u6587\u4EF6\u6811" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6587\u4EF6\u6811" aria-hidden="true">#</a> <strong>\u67E5\u770B\u6587\u4EF6\u6811</strong></h3></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible ansible<span class="token punctuation">]</span><span class="token comment"># tree role/ </span>
role/
\u251C\u2500\u2500 kafka
\u2502   \u251C\u2500\u2500 <span class="token function">file</span>
\u2502   \u2502   \u2514\u2500\u2500 run.sh
\u2502   \u251C\u2500\u2500 tasks
\u2502   \u2502   \u251C\u2500\u2500 kafka.yaml
\u2502   \u2502   \u2514\u2500\u2500 main.yaml
\u2502   \u251C\u2500\u2500 templates
\u2502   \u2502   \u251C\u2500\u2500 server.properties1.j2
\u2502   \u2502   \u251C\u2500\u2500 server.properties2.j2
\u2502   \u2502   \u2514\u2500\u2500 server.properties3.j2
\u2502   \u2514\u2500\u2500 vars
\u2502       \u2514\u2500\u2500 main.yaml
\u251C\u2500\u2500 playbook.yaml
\u2514\u2500\u2500 zookeeper
    \u251C\u2500\u2500 <span class="token function">file</span>
    \u2502   \u251C\u2500\u2500 hosts
    \u2502   \u251C\u2500\u2500 local.repo
    \u2502   \u2514\u2500\u2500 run.sh
    \u251C\u2500\u2500 tasks
    \u2502   \u251C\u2500\u2500 main.yaml
    \u2502   \u251C\u2500\u2500 start.yaml
    \u2502   \u2514\u2500\u2500 zookeeper.yaml
    \u251C\u2500\u2500 templates
    \u2502   \u251C\u2500\u2500 myid1.j2
    \u2502   \u251C\u2500\u2500 myid2.j2
    \u2502   \u251C\u2500\u2500 myid3.j2
    \u2502   \u2514\u2500\u2500 zoo.cfg.j2
    \u251C\u2500\u2500 vars
    \u2502   \u2514\u2500\u2500 main.yaml
    \u2514\u2500\u2500 zookeeper-3.4.14.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h3 id="ansible\u90E8\u7F72kafka\u96C6\u7FA4-1" tabindex="-1"><a class="header-anchor" href="#ansible\u90E8\u7F72kafka\u96C6\u7FA4-1" aria-hidden="true">#</a> <strong>Ansible\u90E8\u7F72Kafka\u96C6\u7FA4</strong></h3></blockquote><ul><li><strong>\u90E8\u7F72kafka\u96C6\u7FA4\u9700\u8981\u63D0\u524D\u90E8\u7F72zookeeper\u96C6\u7FA4\uFF0C\u6240\u4EE5\u8981\u90E8\u7F72zookeeper\u96C6\u7FA4</strong></li><li><strong>\u4F7F\u7528role\u7684\u4E24\u4E2A\u89D2\u8272\u626E\u6F14\u7684\u90E8\u7F72\u96C6\u7FA4\u65B9\u5F0F</strong></li><li><strong>\u89D2\u8272\u5206\u522B\u662Fzookeeper\u89D2\u8272\u548Ckafka\u89D2\u8272</strong></li><li><strong>zookeeper\u89D2\u8272\u4E3B\u8981\u662F\u8D1F\u8D23zookeeper\u73AF\u5883\u7684\u90E8\u7F72</strong></li><li><strong>kafka\u89D2\u8272\u4E3B\u8981\u662F\u8D1F\u8D23kafka\u96C6\u7FA4\u7684\u90E8\u7F72</strong></li></ul><blockquote><h3 id="\u914D\u7F6Eansible\u7684\u4E3B\u673A\u6E05\u5355" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Eansible\u7684\u4E3B\u673A\u6E05\u5355" aria-hidden="true">#</a> <strong>\u914D\u7F6Eansible\u7684\u4E3B\u673A\u6E05\u5355</strong></h3></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible ansible<span class="token punctuation">]</span><span class="token comment"># cat /etc/ansible/hosts  </span>

<span class="token punctuation">[</span>server<span class="token punctuation">]</span>
<span class="token number">172.25</span>.253.138 
<span class="token number">172.25</span>.253.140
<span class="token number">172.25</span>.253.139
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h3 id="\u521B\u5EFA\u89D2\u8272\u548C\u89D2\u8272\u9700\u8981\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u89D2\u8272\u548C\u89D2\u8272\u9700\u8981\u7684\u6587\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA\u89D2\u8272\u548C\u89D2\u8272\u9700\u8981\u7684\u6587\u4EF6</h3></blockquote><ul><li><strong>\u5206\u522B\u521B\u5EFAfile tasks vars templates</strong></li><li><strong>\u5E76\u4E14\u4E0A\u4F20\u4E24\u4E2A\u89D2\u8272\u76F8\u5BF9\u5E94\u7684\u538B\u7F29\u5305</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible ansible<span class="token punctuation">]</span><span class="token comment"># mkdir  role/{kafka,zookeeper}</span>
<span class="token punctuation">[</span>root@ansible ansible<span class="token punctuation">]</span><span class="token comment"># touch role/kafka/{file,vars,tasks,templates}</span>
<span class="token punctuation">[</span>root@ansible ansible<span class="token punctuation">]</span><span class="token comment"># touch role/zookeeper/{file,vars,tasks,templates}</span>

<span class="token punctuation">[</span>root@ansible ansible<span class="token punctuation">]</span><span class="token comment"># ll role/zookeeper/ </span>
drwxr-xr-x <span class="token number">2</span> root root       <span class="token number">51</span> Oct <span class="token number">13</span> <span class="token number">22</span>:12 <span class="token function">file</span>
drwxr-xr-x <span class="token number">2</span> root root       <span class="token number">63</span> Oct <span class="token number">14</span> <span class="token number">13</span>:33 tasks
drwxr-xr-x <span class="token number">2</span> root root       <span class="token number">72</span> Oct <span class="token number">14</span> <span class="token number">13</span>:40 templates
drwxr-xr-x <span class="token number">2</span> root root       <span class="token number">23</span> Oct <span class="token number">14</span> <span class="token number">13</span>:38 vars
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">37676320</span> Nov <span class="token number">12</span>  <span class="token number">2020</span> zookeeper-3.4.14.tar.gz

<span class="token punctuation">[</span>root@ansible ansible<span class="token punctuation">]</span><span class="token comment"># ll role/kafka/ </span>
drwxr-xr-x <span class="token number">2</span> root root <span class="token number">20</span> Oct <span class="token number">14</span> <span class="token number">11</span>:39 <span class="token function">file</span>
drwxr-xr-x <span class="token number">2</span> root root <span class="token number">41</span> Oct <span class="token number">14</span> <span class="token number">13</span>:15 tasks
drwxr-xr-x <span class="token number">2</span> root root <span class="token number">93</span> Oct <span class="token number">14</span> <span class="token number">11</span>:28 templates
drwxr-xr-x <span class="token number">2</span> root root <span class="token number">23</span> Oct <span class="token number">14</span> <span class="token number">11</span>:26 vars
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">57471165</span> Nov <span class="token number">12</span>  <span class="token number">2020</span> kafka_2.11-1.1.1.tgz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h3 id="zookeeper\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#zookeeper\u89D2\u8272" aria-hidden="true">#</a> Zookeeper\u89D2\u8272</h3></blockquote><h3 id="zookeeper" tabindex="-1"><a class="header-anchor" href="#zookeeper" aria-hidden="true">#</a> Zookeeper</h3><h4 id="_1-\u57FA\u7840\u73AF\u5883\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u7840\u73AF\u5883\u90E8\u7F72" aria-hidden="true">#</a> 1.\u57FA\u7840\u73AF\u5883\u90E8\u7F72</h4><ul><li><strong>\u590D\u5236hosts\u6587\u4EF6\u5230file\u76EE\u5F55\u4E0B\u5E76\u4E14\u4FEE\u6539</strong></li><li><strong>\u590D\u5236local.repo\u5230file\u76EE\u5F55\u4E0B\u5E76\u4E14\u4FEE\u6539</strong></li><li><strong>\u7F16\u5199run.sh\u811A\u672C\u4F5C\u4E3Azookeeper\u96C6\u7FA4\u7684\u542F\u52A8\u811A\u672C</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible file<span class="token punctuation">]</span><span class="token comment"># cat hosts  </span>
<span class="token number">127.0</span>.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6


<span class="token number">172.25</span>.253.138 zookeeper1 
<span class="token number">172.25</span>.253.139 zookeeper2 
<span class="token number">172.25</span>.253.140 zookeeper3

<span class="token punctuation">[</span>root@ansible file<span class="token punctuation">]</span><span class="token comment"># cat  local.repo  </span>
<span class="token punctuation">[</span>centos<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>centos
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://172.25.253.144/file/centos/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token punctuation">[</span>gpmall-repo<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>gpmall-repo
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>http://172.25.253.144/file/gpmall-repo/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span>

<span class="token punctuation">[</span>root@ansible file<span class="token punctuation">]</span><span class="token comment"># cat  run.sh  </span>
<span class="token comment">#!/bin/bash</span>
<span class="token builtin class-name">cd</span> /opt/zookeeper-3.4.14/bin/
./zkServer.sh start
./zkServer.sh restart

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u7F16\u5199playbook" tabindex="-1"><a class="header-anchor" href="#_2-\u7F16\u5199playbook" aria-hidden="true">#</a> 2.\u7F16\u5199playbook</h4><ul><li><strong>\u5728tasks\u76EE\u5F55\u91CC\u7F16\u5199zookeeper\u7684\u6E05\u5355</strong></li><li><strong>\u7F16\u5199zookeeper.yaml\u4F5C\u4E3A\u5B89\u88C5zookeeper\u7684\u73AF\u5883\u6E05\u5355</strong></li><li><strong>\u7F16\u5199start.yaml\u4F5C\u4E3A\u5F00\u542F\u96C6\u7FA4\u7684\u6E05\u5355</strong></li><li><strong>\u7F16\u5199main.yaml\u6307\u5B9A\u987A\u5E8F</strong></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># cat zookeeper.yaml  </span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy hosts 
  <span class="token key atrule">copy</span><span class="token punctuation">:</span> src=./file/hosts dest=/etc/hosts 
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> delete repo 
  <span class="token key atrule">shell</span><span class="token punctuation">:</span> rm <span class="token punctuation">-</span>rf /etc/yum.repos.d/*
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> copy repo 
  <span class="token key atrule">copy</span><span class="token punctuation">:</span> src=./file/local.repo  dest=/etc/yum.repos.d/local.repo 
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Packages 
  <span class="token key atrule">yum</span><span class="token punctuation">:</span> 
    <span class="token key atrule">name</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> java<span class="token punctuation">-</span>1.8.0<span class="token punctuation">-</span>openjdk 
      <span class="token punctuation">-</span> java<span class="token punctuation">-</span>1.8.0<span class="token punctuation">-</span>openjdk<span class="token punctuation">-</span>devel 
    <span class="token key atrule">state</span><span class="token punctuation">:</span> latest
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> tar tar 
  <span class="token key atrule">unarchive</span><span class="token punctuation">:</span> src=zookeeper<span class="token punctuation">-</span>3.4.14.tar.gz dest=/opt/zookeeper<span class="token punctuation">-</span>3.4.14/
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> delete file 
  <span class="token key atrule">file</span><span class="token punctuation">:</span> path=/opt/zookeeper<span class="token punctuation">-</span>3.4.14/conf/zoo_sample.cfg state=absent 
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> add config 
  <span class="token key atrule">template</span><span class="token punctuation">:</span> src=zoo.cfg.j2 dest=/opt/zookeeper<span class="token punctuation">-</span>3.4.14/conf/zoo.cfg  owner=2002 group=2002 mode=664
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> create file 
  <span class="token key atrule">file</span><span class="token punctuation">:</span> path=/tmp/zookeeper state=directory
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> myid1 
  <span class="token key atrule">template</span><span class="token punctuation">:</span> src=myid1.j2 dest=/tmp/zookeeper/myid
  <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_fqdn == &quot;zookeeper1&quot;
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> myid2
  <span class="token key atrule">template</span><span class="token punctuation">:</span> src=myid2.j2 dest=/tmp/zookeeper/myid
  <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_fqdn == &quot;zookeeper2&quot;
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> myid3
  <span class="token key atrule">template</span><span class="token punctuation">:</span> src=myid3.j2 dest=/tmp/zookeeper/myid
  <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_fqdn == &quot;zookeeper3&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># cat  start.yaml  </span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> start zookeeper 
  <span class="token key atrule">script</span><span class="token punctuation">:</span> /root/ansible/role/zookeeper/file/run.sh 
  <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_fqdn == <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token string">&quot;item&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token key atrule">with_items</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> zookeeper1 
    <span class="token punctuation">-</span> zookeeper2 
    <span class="token punctuation">-</span> zookeeper3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># cat main.yaml  </span>
<span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> zookeeper.yaml 
<span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> start.yaml 
<span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-\u6DFB\u52A0\u53D8\u91CFvars" tabindex="-1"><a class="header-anchor" href="#_3-\u6DFB\u52A0\u53D8\u91CFvars" aria-hidden="true">#</a> 3.\u6DFB\u52A0\u53D8\u91CFvars</h4><ul><li><strong>\u5728vars\u7684\u76EE\u5F55main.yaml\u6DFB\u52A0\u5982\u4E0B\u53D8\u91CF</strong></li><li><strong>\u6307\u5B9A\u7F51\u6BB5\u52A0\u7AEF\u53E3\u53F7</strong></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@ansible vars<span class="token punctuation">]</span><span class="token comment"># cat main.yaml </span>
<span class="token punctuation">---</span>

<span class="token key atrule">ip1</span><span class="token punctuation">:</span> 172.25.253.138<span class="token punctuation">:</span>2888<span class="token punctuation">:</span><span class="token number">3888</span>
<span class="token key atrule">ip2</span><span class="token punctuation">:</span> 172.25.253.139<span class="token punctuation">:</span>2888<span class="token punctuation">:</span><span class="token number">3888</span>
<span class="token key atrule">ip3</span><span class="token punctuation">:</span> 172.25.253.140<span class="token punctuation">:</span>2888<span class="token punctuation">:</span><span class="token number">3888</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-\u4FEE\u6539templates\u7684j2\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-\u4FEE\u6539templates\u7684j2\u6587\u4EF6" aria-hidden="true">#</a> 4.\u4FEE\u6539templates\u7684j2\u6587\u4EF6</h4><ul><li><strong>\u6DFB\u52A0myid\u7684\u4E09\u4E2A\u6587\u4EF6\u5185\u5BB9\u5206\u522B\u662F1\u30012\u30013</strong></li><li><strong>\u914D\u7F6Ezoo.cfg\u6587\u4EF6\u9700\u8981\u6DFB\u52A0\u4E09\u4E2Aserver\u7684id\u4EE5\u53CAip</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible templates<span class="token punctuation">]</span><span class="token comment"># echo 1 &gt; myid1.j2</span>
<span class="token punctuation">[</span>root@ansible templates<span class="token punctuation">]</span><span class="token comment"># echo 2 &gt; myid2.j2</span>
<span class="token punctuation">[</span>root@ansible templates<span class="token punctuation">]</span><span class="token comment"># echo 3 &gt; myid3.j2</span>

<span class="token punctuation">[</span>root@ansible templates<span class="token punctuation">]</span><span class="token comment"># cat zoo.cfg.j2  </span>
<span class="token comment"># The number of milliseconds of each tick</span>
<span class="token assign-left variable">tickTime</span><span class="token operator">=</span><span class="token number">2000</span>
<span class="token comment"># The number of ticks that the initial </span>
<span class="token comment"># synchronization phase can take</span>
<span class="token assign-left variable">initLimit</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token comment"># The number of ticks that can pass between </span>
<span class="token comment"># sending a request and getting an acknowledgement</span>
<span class="token assign-left variable">syncLimit</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token comment"># the directory where the snapshot is stored.</span>
<span class="token comment"># do not use /tmp for storage, /tmp here is just </span>
<span class="token comment"># example sakes.</span>
<span class="token assign-left variable">dataDir</span><span class="token operator">=</span>/tmp/zookeeper
<span class="token comment"># the port at which the clients will connect</span>
<span class="token assign-left variable">clientPort</span><span class="token operator">=</span><span class="token number">2181</span>
<span class="token comment"># the maximum number of client connections.</span>
<span class="token comment"># increase this if you need to handle more clients</span>
<span class="token comment">#maxClientCnxns=60</span>
<span class="token comment">#</span>
<span class="token comment"># Be sure to read the maintenance section of the </span>
<span class="token comment"># administrator guide before turning on autopurge.</span>
<span class="token comment">#</span>
<span class="token comment"># http://zookeeper.apache.org/doc/current/zookeeperAdmin.html#sc_maintenance</span>
<span class="token comment">#</span>
<span class="token comment"># The number of snapshots to retain in dataDir</span>
<span class="token comment">#autopurge.snapRetainCount=3</span>
<span class="token comment"># Purge task interval in hours</span>
<span class="token comment"># Set to &quot;0&quot; to disable auto purge feature</span>
<span class="token comment">#autopurge.purgeInterval=1</span>

<span class="token assign-left variable">server.1</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> ip1 <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token assign-left variable">server.2</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> ip2 <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token assign-left variable">server.3</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> ip3 <span class="token punctuation">}</span><span class="token punctuation">}</span>


<span class="token punctuation">[</span>root@ansible templates<span class="token punctuation">]</span><span class="token comment"># ll</span>
total <span class="token number">16</span>
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">2</span> Oct <span class="token number">14</span> <span class="token number">13</span>:35 myid1.j2
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">2</span> Oct <span class="token number">14</span> <span class="token number">13</span>:35 myid2.j2
-rw-r--r-- <span class="token number">1</span> root root   <span class="token number">2</span> Oct <span class="token number">13</span> <span class="token number">21</span>:38 myid3.j2
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">982</span> Oct <span class="token number">14</span> <span class="token number">13</span>:40 zoo.cfg.j2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h3 id="kafka\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#kafka\u89D2\u8272" aria-hidden="true">#</a> Kafka\u89D2\u8272</h3></blockquote><h3 id="kafka" tabindex="-1"><a class="header-anchor" href="#kafka" aria-hidden="true">#</a> kafka</h3><h4 id="_1-\u7F16\u5199playbook" tabindex="-1"><a class="header-anchor" href="#_1-\u7F16\u5199playbook" aria-hidden="true">#</a> 1.\u7F16\u5199playbook</h4><ul><li><strong>\u5728kafka\u89D2\u8272\u4E2D\u53EA\u9700\u8981\u4F20\u9001\u538B\u7F29\u5305\u89E3\u538B\u7F29\u5305\u62EC\u66FF\u6362\u6587\u4EF6</strong></li><li><strong>\u7F16\u6392akfka\u7684playboot</strong></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># cat kafka.yaml  </span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> tar  tar
  <span class="token key atrule">unarchive</span><span class="token punctuation">:</span> src=kafka/kafka_2.11<span class="token punctuation">-</span>1.1.1.tgz  dest=/media/
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> change config1 
  <span class="token key atrule">template</span><span class="token punctuation">:</span> src=server.properties1.j2 dest=/media/kafka_2.11<span class="token punctuation">-</span>1.1.1/config/server.properties
  <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_fqdn == &quot;zookeeper1&quot;
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> change config2
  <span class="token key atrule">template</span><span class="token punctuation">:</span> src=server.properties2.j2 dest=/media/kafka_2.11<span class="token punctuation">-</span>1.1.1/config/server.properties
  <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_fqdn == &quot;zookeeper2&quot;
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> change config3
  <span class="token key atrule">template</span><span class="token punctuation">:</span> src=server.properties3.j2 dest=/media/kafka_2.11<span class="token punctuation">-</span>1.1.1/config/server.properties
  <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_fqdn == &quot;zookeeper3&quot;
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run kafka 
  <span class="token key atrule">shell</span><span class="token punctuation">:</span> cd /media/kafka_2.11<span class="token punctuation">-</span>1.1.1/bin/  <span class="token important">&amp;&amp;</span> ./kafka<span class="token punctuation">-</span>server<span class="token punctuation">-</span>start.sh <span class="token punctuation">-</span>daemon ../config/server.properties
<span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># cat main.yaml  </span>
<span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> kafka.yaml 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># cat main.yaml  </span>
<span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> kafka.yaml 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u6DFB\u52A0\u53D8\u91CFvars" tabindex="-1"><a class="header-anchor" href="#_2-\u6DFB\u52A0\u53D8\u91CFvars" aria-hidden="true">#</a> 2.\u6DFB\u52A0\u53D8\u91CFvars</h4><ul><li><strong>\u5728vars\u7684\u76EE\u5F55\u4E2D\u6DFB\u52A0\u76F8\u5BF9\u5E94\u7684\u53D8\u91CF</strong></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@ansible vars<span class="token punctuation">]</span><span class="token comment"># cat main.yaml  </span>
<span class="token punctuation">---</span>

<span class="token key atrule">id1</span><span class="token punctuation">:</span> <span class="token number">1</span> 
<span class="token key atrule">id2</span><span class="token punctuation">:</span> <span class="token number">2</span> 
<span class="token key atrule">id3</span><span class="token punctuation">:</span> <span class="token number">3</span> 
<span class="token key atrule">cluster_ip</span><span class="token punctuation">:</span> 172.25.253.138<span class="token punctuation">:</span><span class="token number">2181</span><span class="token punctuation">,</span>172.25.253.139<span class="token punctuation">:</span><span class="token number">2181</span><span class="token punctuation">,</span>172.25.253.140<span class="token punctuation">:</span><span class="token number">2181</span>
<span class="token key atrule">localip1</span><span class="token punctuation">:</span> 172.25.253.138<span class="token punctuation">:</span><span class="token number">9092</span>
<span class="token key atrule">localip2</span><span class="token punctuation">:</span> 172.25.253.139<span class="token punctuation">:</span><span class="token number">9092</span>
<span class="token key atrule">localip3</span><span class="token punctuation">:</span> 172.25.253.140<span class="token punctuation">:</span><span class="token number">9092</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-\u4FEE\u6539j2\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-\u4FEE\u6539j2\u6587\u4EF6" aria-hidden="true">#</a> 3.\u4FEE\u6539j2\u6587\u4EF6</h4><ul><li><strong>\u4FEE\u6539templates\u7684\u76EE\u5F55\u4E0B\u7684\u4E09\u4E2Aj2\u6587\u4EF6</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u627E\u5230\u4EE5\u4E0B\u4E24\u884C\u5E76\u6CE8\u91CA\u6389\uFF08\u5728\u6587\u672C\u524D\u52A0<span class="token comment">#\uFF09\u5982\u4E0B\u6240\u793A\uFF1A</span>
<span class="token comment">#broker.id=0</span>
<span class="token comment">#zookeeper.connect=localhost:2181</span>



\u7136\u540E\u5728\u914D\u7F6E\u6587\u4EF6\u7684\u5E95\u90E8\u6DFB\u52A0\u5982\u4E0B <span class="token number">3</span> \u4E2A\u914D\u7F6E\u3002\u4E09\u4E2A\u8282\u70B9\u5206\u522B\u4FEE\u6539\u4E0D\u540C\u7684\u53D8\u91CF zookeeper1\u4F7F\u7528id1\u3001zookeeper2\u4F7F\u7528id2
zookeeper1 \u8282\u70B9\uFF1A
<span class="token assign-left variable">broker.id</span><span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> id1  <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token assign-left variable">zookeeper.connect</span><span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> cluster_ip <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token assign-left variable">listeners</span><span class="token operator">=</span>PLAINTEXT://<span class="token punctuation">{</span><span class="token punctuation">{</span> localip1 <span class="token punctuation">}</span><span class="token punctuation">}</span>

zookeeper2 \u8282\u70B9\uFF1A
<span class="token assign-left variable">broker.id</span><span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> id2  <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token assign-left variable">zookeeper.connect</span><span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> cluster_ip <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token assign-left variable">listeners</span><span class="token operator">=</span>PLAINTEXT://<span class="token punctuation">{</span><span class="token punctuation">{</span> localip2 <span class="token punctuation">}</span><span class="token punctuation">}</span>

zookeeper3 \u8282\u70B9\uFF1A
<span class="token assign-left variable">broker.id</span><span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> id3  <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token assign-left variable">zookeeper.connect</span><span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> cluster_ip <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token assign-left variable">listeners</span><span class="token operator">=</span>PLAINTEXT://<span class="token punctuation">{</span><span class="token punctuation">{</span> localip3 <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible templates<span class="token punctuation">]</span><span class="token comment"># ll</span>
total <span class="token number">24</span>
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">6953</span> Oct <span class="token number">14</span> <span class="token number">11</span>:27 server.properties1.j2
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">6952</span> Oct <span class="token number">14</span> <span class="token number">11</span>:28 server.properties2.j2
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">6951</span> Oct <span class="token number">14</span> <span class="token number">11</span>:28 server.properties3.j2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h3 id="role\u7684playbook" tabindex="-1"><a class="header-anchor" href="#role\u7684playbook" aria-hidden="true">#</a> Role\u7684playbook</h3></blockquote><h4 id="_5-\u7F16\u5199role\u7684playbook\u5206\u6B65\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#_5-\u7F16\u5199role\u7684playbook\u5206\u6B65\u6267\u884C" aria-hidden="true">#</a> 5.\u7F16\u5199role\u7684playbook\u5206\u6B65\u6267\u884C</h4><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@ansible role<span class="token punctuation">]</span><span class="token comment"># cat playbook.yaml </span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> server 
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root 
  
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> zookeeper
    <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> kafka
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u96C6\u7FA4\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u96C6\u7FA4\u9A8C\u8BC1" aria-hidden="true">#</a> \u96C6\u7FA4\u9A8C\u8BC1</h3><h4 id="_1-\u6267\u884C\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_1-\u6267\u884C\u811A\u672C" aria-hidden="true">#</a> 1.\u6267\u884C\u811A\u672C</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible role<span class="token punctuation">]</span><span class="token comment"># ansible-playbook playbook.yaml  </span>

PLAY <span class="token punctuation">[</span>server<span class="token punctuation">]</span> **************************************************************************************************************

TASK <span class="token punctuation">[</span>Gathering Facts<span class="token punctuation">]</span> *****************************************************************************************************
ok: <span class="token punctuation">[</span><span class="token number">172.25</span>.253.139<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">172.25</span>.253.140<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">172.25</span>.253.138<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>zookeeper <span class="token builtin class-name">:</span> copy hosts<span class="token punctuation">]</span> **********************************************************************************************
ok: <span class="token punctuation">[</span><span class="token number">172.25</span>.253.140<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">172.25</span>.253.139<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">172.25</span>.253.138<span class="token punctuation">]</span>
\xB7
\xB7
\xB7
PLAY RECAP *****************************************************************************************************************
<span class="token number">172.25</span>.253.138             <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">14</span>   <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">8</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">skipped</span><span class="token operator">=</span><span class="token number">4</span>    <span class="token assign-left variable">rescued</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">ignored</span><span class="token operator">=</span><span class="token number">0</span>   
<span class="token number">172.25</span>.253.139             <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">14</span>   <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">8</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">skipped</span><span class="token operator">=</span><span class="token number">4</span>    <span class="token assign-left variable">rescued</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">ignored</span><span class="token operator">=</span><span class="token number">0</span>   
<span class="token number">172.25</span>.253.140             <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">14</span>   <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">8</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">skipped</span><span class="token operator">=</span><span class="token number">4</span>    <span class="token assign-left variable">rescued</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">ignored</span><span class="token operator">=</span><span class="token number">0</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u9A8C\u8BC1\u96C6\u7FA4\u662F\u5426\u6B63\u5E38" tabindex="-1"><a class="header-anchor" href="#_2-\u9A8C\u8BC1\u96C6\u7FA4\u662F\u5426\u6B63\u5E38" aria-hidden="true">#</a> 2.\u9A8C\u8BC1\u96C6\u7FA4\u662F\u5426\u6B63\u5E38</h4><ul><li><strong>\u67E5\u770B\u7AEF\u53E3\u5F00\u653E</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible role<span class="token punctuation">]</span><span class="token comment"># ansible server -m shell -a &quot;ss -ntpl | grep 9092&quot;</span>
<span class="token number">172.25</span>.253.140 <span class="token operator">|</span> CHANGED <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&gt;&gt;</span>
LISTEN     <span class="token number">0</span>      <span class="token number">50</span>       ::ffff:172.25.253.140:9092                    :::*                   users:<span class="token variable"><span class="token punctuation">((</span>&quot;java&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">6105</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">99</span><span class="token punctuation">))</span></span>
<span class="token number">172.25</span>.253.139 <span class="token operator">|</span> CHANGED <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&gt;&gt;</span>
LISTEN     <span class="token number">0</span>      <span class="token number">50</span>       ::ffff:172.25.253.139:9092                    :::*                   users:<span class="token variable"><span class="token punctuation">((</span>&quot;java&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">2783</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">99</span><span class="token punctuation">))</span></span>
<span class="token number">172.25</span>.253.138 <span class="token operator">|</span> CHANGED <span class="token operator">|</span> <span class="token assign-left variable">rc</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&gt;&gt;</span>
LISTEN     <span class="token number">0</span>      <span class="token number">50</span>       ::ffff:172.25.253.138:9092                    :::*                   users:<span class="token variable"><span class="token punctuation">((</span>&quot;java&quot;<span class="token punctuation">,</span>pid<span class="token operator">=</span><span class="token number">5814</span><span class="token punctuation">,</span>fd<span class="token operator">=</span><span class="token number">99</span><span class="token punctuation">))</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u9A8C\u8BC1</strong></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>zookeeper1\uFF1A
<span class="token punctuation">[</span>root@localhost bin<span class="token punctuation">]</span><span class="token comment"># ./kafka-topics.sh --create --zookeeper 172.25.253.138:2181 --replication-factor 1 --partitions 1 --topic test</span>
Created topic <span class="token string">&quot;test&quot;</span><span class="token builtin class-name">.</span>

zookeeper2\uFF1A
<span class="token punctuation">[</span>root@localhost bin<span class="token punctuation">]</span><span class="token comment"># ./kafka-topics.sh --list --zookeeper 172.25.253.139:2181   </span>
<span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51),l=[p];function o(i,c){return s(),a("div",null,l)}const d=n(t,[["render",o],["__file","8.html.vue"]]);export{d as default};
