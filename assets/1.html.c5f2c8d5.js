import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.ca0279c0.js";const i={},l=e(`<h1 id="ansible" tabindex="-1"><a class="header-anchor" href="#ansible" aria-hidden="true">#</a> <strong>Ansible</strong></h1><h3 id="ansible\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#ansible\u5B89\u88C5" aria-hidden="true">#</a> Ansible\u5B89\u88C5</h3><p>\u5728Redhat8 \u4E0A\u5B89\u88C5ansible</p><p><code>\u4F7F\u7528epel-release\u5E93</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">1</span>.\u4F7F\u7528\u963F\u91CC\u7684\u955C\u50CF\u6E90
<span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-8.repo</span>
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
<span class="token number">100</span>  <span class="token number">2595</span>  <span class="token number">100</span>  <span class="token number">2595</span>    <span class="token number">0</span>     <span class="token number">0</span>  <span class="token number">13657</span>      <span class="token number">0</span> --:--:-- --:--:-- --:--:-- <span class="token number">13586</span>

<span class="token number">2</span>. \u5B89\u88C5epel-release\u5E93
<span class="token punctuation">[</span>root@anasible ~<span class="token punctuation">]</span><span class="token comment"># dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm -y</span>

<span class="token number">3</span>. \u5B89\u88C5ansible
<span class="token punctuation">[</span>root@anasible ~<span class="token punctuation">]</span><span class="token comment"># yum install -y ansible</span>

<span class="token number">3</span>. \u786E\u8BA4\u5B89\u88C5\uFF1A
<span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># ansible --version </span>
ansible <span class="token number">2.9</span>.25
  config <span class="token function">file</span> <span class="token operator">=</span> /etc/ansible/ansible.cfg
  configured module search path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;/root/.ansible/plugins/modules&#39;</span>, <span class="token string">&#39;/usr/share/ansible/plugins/modules&#39;</span><span class="token punctuation">]</span>
  ansible python module location <span class="token operator">=</span> /usr/lib/python3.6/site-packages/ansible
  executable location <span class="token operator">=</span> /usr/bin/ansible
  python version <span class="token operator">=</span> <span class="token number">3.6</span>.8 <span class="token punctuation">(</span>default, Dec  <span class="token number">5</span> <span class="token number">2019</span>, <span class="token number">15</span>:45:45<span class="token punctuation">)</span> <span class="token punctuation">[</span>GCC <span class="token number">8.3</span>.1 <span class="token number">20191121</span> <span class="token punctuation">(</span>Red Hat <span class="token number">8.3</span>.1-5<span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ansible\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#ansible\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> Ansible\u914D\u7F6E\u6587\u4EF6</h3><p>\u914D\u7F6E\u6587\u4EF6</p><p><strong><code>/etc/ansible/ansible.cfg</code></strong> \u4E3B\u914D\u7F6E\u6587\u4EF6,\u914D\u7F6Eansible\u5DE5\u4F5C\u7279\u6027(\u4E00\u822C\u65E0\u9700\u4FEE\u6539)</p><p><strong><code>/etc/ansible/hosts</code></strong> \u4E3B\u673A\u6E05\u5355(\u5C06\u88AB\u7BA1\u7406\u7684\u4E3B\u673A\u653E\u5230\u6B64\u6587\u4EF6)</p><p><strong><code>/etc/ansible/roles/</code></strong> \u5B58\u653E\u89D2\u8272\u7684\u76EE\u5F55</p><p>\u7A0B\u5E8F</p><ul><li><code>/usr/bin/ansible</code> \u4E3B\u7A0B\u5E8F\uFF0C\u4E34\u65F6\u547D\u4EE4\u6267\u884C\u5DE5\u5177</li><li><code>/usr/bin/ansible-doc</code> \u67E5\u770B\u914D\u7F6E\u6587\u6863\uFF0C\u6A21\u5757\u529F\u80FD\u67E5\u770B\u5DE5\u5177</li><li><code>/usr/bin/ansible-galaxy</code> \u4E0B\u8F7D/\u4E0A\u4F20\u4F18\u79C0\u4EE3\u7801\u6216Roles\u6A21\u5757\u7684\u5B98\u7F51\u5E73\u53F0</li><li><code>/usr/bin/ansible-playbook</code> \u5B9A\u5236\u81EA\u52A8\u5316\u4EFB\u52A1\uFF0C\u7F16\u6392\u5267\u672C\u5DE5\u5177</li><li><code>/usr/bin/ansible-pull</code> \u8FDC\u7A0B\u6267\u884C\u547D\u4EE4\u7684\u5DE5\u5177</li><li><code>/usr/bin/ansible-vault</code> \u6587\u4EF6\u52A0\u5BC6\u5DE5\u5177</li><li><code>/usr/bin/ansible-console</code> \u57FA\u4E8EConsole\u754C\u9762\u4E0E\u7528\u6237\u4EA4\u4E92\u7684\u6267\u884C\u5DE5\u5177</li></ul><h3 id="ansible\u4E3B\u8981\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#ansible\u4E3B\u8981\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> Ansible\u4E3B\u8981\u914D\u7F6E\u6587\u4EF6</h3><ul><li>Ansible \u914D\u7F6E\u6587\u4EF6/etc/ansible/ansible.cfg \uFF08\u4E00\u822C\u4FDD\u6301\u9ED8\u8BA4\uFF09</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># vim  /etc/ansible/ansible.cfg  </span>

<span class="token punctuation">[</span>defaults<span class="token punctuation">]</span>

<span class="token comment">#inventory     = /etc/ansible/hosts      # \u4E3B\u673A\u5217\u8868\u914D\u7F6E\u6587\u4EF6</span>
<span class="token comment">#library       = /usr/share/my_modules/  # \u5E93\u6587\u4EF6\u5B58\u653E\u76EE\u5F55</span>
<span class="token comment">#remote_tmp    = $HOME/.ansible/tmp      # \u4E34\u65F6py\u547D\u4EE4\u6587\u4EF6\u5B58\u653E\u5728\u8FDC\u7A0B\u4E3B\u673A\u76EE\u5F55</span>
<span class="token comment">#local_tmp     = $HOME/.ansible/tmp      # \u672C\u673A\u7684\u4E34\u65F6\u547D\u4EE4\u6267\u884C\u76EE\u5F55  </span>
<span class="token comment">#forks         = 5                       # \u9ED8\u8BA4\u5E76\u53D1\u6570,\u540C\u65F6\u53EF\u4EE5\u6267\u884C5\u6B21</span>
<span class="token comment">#sudo_user     = root                    # \u9ED8\u8BA4sudo \u7528\u6237</span>
<span class="token comment">#ask_sudo_pass = True                    # \u6BCF\u6B21\u6267\u884Cansible\u547D\u4EE4\u662F\u5426\u8BE2\u95EEssh\u5BC6\u7801</span>
<span class="token comment">#ask_pass      = True                    # \u6BCF\u6B21\u6267\u884Cansible\u547D\u4EE4\u662F\u5426\u8BE2\u95EEssh\u53E3\u4EE4</span>
<span class="token comment">#remote_port   = 22                      # \u8FDC\u7A0B\u4E3B\u673A\u7684\u7AEF\u53E3\u53F7(\u9ED8\u8BA422)</span>

 

\u5EFA\u8BAE\u4F18\u5316\u9879\uFF1A 

host_key_checking <span class="token operator">=</span> False               <span class="token comment"># \u68C0\u67E5\u5BF9\u5E94\u670D\u52A1\u5668\u7684host_key\uFF0C\u5EFA\u8BAE\u53D6\u6D88\u6CE8\u91CA</span>
<span class="token assign-left variable">log_path</span><span class="token operator">=</span>/var/log/ansible.log           <span class="token comment"># \u65E5\u5FD7\u6587\u4EF6,\u5EFA\u8BAE\u53D6\u6D88\u6CE8\u91CA</span>
module_name   <span class="token operator">=</span> <span class="token builtin class-name">command</span>                 <span class="token comment"># \u9ED8\u8BA4\u6A21\u5757</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ansible\u4E3B\u673A\u6E05\u5355" tabindex="-1"><a class="header-anchor" href="#ansible\u4E3B\u673A\u6E05\u5355" aria-hidden="true">#</a> Ansible\u4E3B\u673A\u6E05\u5355</h3><ul><li><h4 id="inventory-\u4E3B\u673A\u6E05\u5355" tabindex="-1"><a class="header-anchor" href="#inventory-\u4E3B\u673A\u6E05\u5355" aria-hidden="true">#</a> Inventory \u4E3B\u673A\u6E05\u5355</h4></li><li><h4 id="ansible\u7684\u4E3B\u8981\u529F\u7528\u5728\u4E8E\u6279\u91CF\u4E3B\u673A\u64CD\u4F5C-\u4E3A\u4E86\u4FBF\u6377\u5730\u4F7F\u7528\u5176\u4E2D\u7684\u90E8\u5206\u4E3B\u673A-\u53EF\u4EE5\u5728inventory-file\u4E2D\u5C06\u5176\u5206\u7EC4\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#ansible\u7684\u4E3B\u8981\u529F\u7528\u5728\u4E8E\u6279\u91CF\u4E3B\u673A\u64CD\u4F5C-\u4E3A\u4E86\u4FBF\u6377\u5730\u4F7F\u7528\u5176\u4E2D\u7684\u90E8\u5206\u4E3B\u673A-\u53EF\u4EE5\u5728inventory-file\u4E2D\u5C06\u5176\u5206\u7EC4\u547D\u540D" aria-hidden="true">#</a> ansible\u7684\u4E3B\u8981\u529F\u7528\u5728\u4E8E\u6279\u91CF\u4E3B\u673A\u64CD\u4F5C\uFF0C\u4E3A\u4E86\u4FBF\u6377\u5730\u4F7F\u7528\u5176\u4E2D\u7684\u90E8\u5206\u4E3B\u673A\uFF0C\u53EF\u4EE5\u5728inventory file\u4E2D\u5C06\u5176\u5206\u7EC4\u547D\u540D</h4></li><li><h4 id="\u9ED8\u8BA4\u7684inventory-file\u4E3A-etc-ansible-hosts" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u7684inventory-file\u4E3A-etc-ansible-hosts" aria-hidden="true">#</a> \u9ED8\u8BA4\u7684inventory file\u4E3A/etc/ansible/hosts</h4></li><li><h4 id="inventory-file\u53EF\u4EE5\u6709\u591A\u4E2A-\u4E14\u4E5F\u53EF\u4EE5\u901A\u8FC7dynamic-inventory\u6765\u52A8\u6001\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#inventory-file\u53EF\u4EE5\u6709\u591A\u4E2A-\u4E14\u4E5F\u53EF\u4EE5\u901A\u8FC7dynamic-inventory\u6765\u52A8\u6001\u751F\u6210" aria-hidden="true">#</a> inventory file\u53EF\u4EE5\u6709\u591A\u4E2A\uFF0C\u4E14\u4E5F\u53EF\u4EE5\u901A\u8FC7Dynamic Inventory\u6765\u52A8\u6001\u751F\u6210</h4></li><li><p><code>/etc/ansible/hosts\u6587\u4EF6\u683C\u5F0F</code></p></li><li><p><code>inventory\u6587\u4EF6\u9075\u5FAAINI\u6587\u4EF6\u98CE\u683C\uFF0C\u4E2D\u62EC\u53F7\u4E2D\u7684\u5B57\u7B26\u4E3A\u7EC4\u540D\u3002</code></p></li><li><p><code>\u53EF\u4EE5\u5C06\u540C\u4E00\u4E2A\u4E3B\u673A\u540C\u65F6\u5F52\u5E76\u5230\u591A\u4E2A\u4E0D\u540C\u7684\u7EC4\u4E2D\uFF1B</code></p></li><li><p><code>\u6B64\u5916\uFF0C\u5F53\u5982\u82E5\u76EE\u6807\u4E3B\u673A\u4F7F\u7528\u4E86\u975E\u9ED8\u8BA4\u7684SSH\u7AEF\u53E3\uFF0C\u8FD8\u53EF\u4EE5\u5728\u4E3B\u673A\u540D\u79F0\u4E4B\u540E\u4F7F\u7528\u5192\u53F7\u52A0\u7AEF\u53E3\u53F7\u6765\u6807\u660E</code></p></li><li><p><code>ntp.magedu.com \u4E0D\u5206\u7EC4,\u76F4\u63A5\u52A0</code></p></li></ul><p>\u4F8B\u5982\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>   <span class="token punctuation">[</span>webservers<span class="token punctuation">]</span>     webservers\u7EC4

   www1.magedu.com:2222  \u53EF\u4EE5\u6307\u5B9A\u7AEF\u53E3
   www2.magedu.com

   

   <span class="token punctuation">[</span>dbservers<span class="token punctuation">]</span>

   db1.magedu.com
   db2.magedu.com
   db3.magedu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4E3B\u673A\u540D\u79F0\u9075\u5FAA\u76F8\u4F3C\u7684\u547D\u540D\u6A21\u5F0F\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528\u5217\u8868\u7684\u65B9\u5F0F\u6807\u8BC6\u5404\u4E3B\u673A</p><p>\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   [websrvs]

   www[1:100].example.com   ip: 1-100


   [dbsrvs]

   db-[a:f].example.com     dba-dbff
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ansible\u4F7F\u7528\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#ansible\u4F7F\u7528\u534F\u8BAE" aria-hidden="true">#</a> Ansible\u4F7F\u7528\u534F\u8BAE</h3><ul><li><strong>\u901A\u8FC7ssh\u534F\u8BAE\uFF0C\u5B9E\u73B0\u5BF9\u8FDC\u7A0B\u4E3B\u673A\u7684\u914D\u7F6E\u7BA1\u7406\uFF0C\u5E94\u7528\u90E8\u7F72\uFF0C\u4EFB\u52A1\u6267\u884C\u7B49\u529F\u80FD\u6240\u4EE5\uFF0C\u5148\u914D\u7F6Eansible\u4E3B\u63A7\u7AEF\u57FA\u4E8E\u5BC6\u94A5\u8BA4\u8BC1\u7684\u65B9\u5F0F\u6765\u8054\u7CFB\u5404\u4E2A\u88AB\u7BA1\u7406\u7684\u8282\u70B9</strong></li><li><strong>\u4F8B\u5982\uFF1A\u5229\u7528sshpass\u6279\u91CF\u5B9E\u73B0\u57FA\u4E8Ekey\u9A8C\u8BC1</strong></li></ul><h3 id="ansible\u7684\u514D\u5BC6" tabindex="-1"><a class="header-anchor" href="#ansible\u7684\u514D\u5BC6" aria-hidden="true">#</a> Ansible\u7684\u514D\u5BC6</h3><p>\u9488\u5BF9\u90E8\u7F72\u5C11\u91CF\u7684\u670D\u52A1\uFF0C\u53EF\u4EE5\u4F7F\u7528SSH\u514D\u5BC6\u7684\u65B9\u5F0F\u8BA9ansible\u6BCD\u673A\u53EF\u4EE5\u76F4\u63A5\u8FDC\u7A0B\u64CD\u63A7\u5B50\u673A</p><p><strong>\u914D\u7F6ESSH\u514D\u5BC6</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u751F\u6210\u5BC6\u94A5</span>
<span class="token punctuation">[</span>root@ansible ~<span class="token punctuation">]</span><span class="token comment"># ssh-keygen </span>
Generating public/private rsa key pair.
Enter <span class="token function">file</span> <span class="token keyword">in</span> <span class="token function">which</span> to save the key <span class="token punctuation">(</span>/root/.ssh/id_rsa<span class="token punctuation">)</span>: 
Created directory <span class="token string">&#39;/root/.ssh&#39;</span><span class="token builtin class-name">.</span>
Enter passphrase <span class="token punctuation">(</span>empty <span class="token keyword">for</span> no passphrase<span class="token punctuation">)</span>: 
Enter same passphrase again: 
Your identification has been saved <span class="token keyword">in</span> /root/.ssh/id_rsa.
Your public key has been saved <span class="token keyword">in</span> /root/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:YrOLZcZcLd8XaRavKFoT+iA60z0k5S2F0+hAmZH0gC8 root@ansible
The key<span class="token string">&#39;s randomart image is:
+---[RSA 3072]----+
|     o+=         |
|    . =o         |
|     o  .+    .  |
|    E o =.o    + |
|     .+=S+o   = .|
|     +.==+.o + o |
|     .O+o.= o o  |
|    o*.oo= o .   |
|    oo. ...      |
+----[SHA256]-----+

#\u6388\u6743\u5B50\u673A
[root@ansible ~]# ssh-copy-id 192.168.1.107
/usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: &quot;/root/.ssh/id_rsa.pub&quot;
The authenticity of host &#39;</span><span class="token number">192.168</span>.1.107 <span class="token punctuation">(</span><span class="token number">192.168</span>.1.107<span class="token punctuation">)</span><span class="token string">&#39; can&#39;</span>t be established.
ECDSA key fingerprint is SHA256:abAQ3Mvy1GW7gRO1XwIptGILQf2L3G0gJApXVPRFpkE.
Are you sure you want to <span class="token builtin class-name">continue</span> connecting <span class="token punctuation">(</span>yes/no/<span class="token punctuation">[</span>fingerprint<span class="token punctuation">]</span><span class="token punctuation">)</span>? <span class="token function">yes</span>
/usr/bin/ssh-copy-id: INFO: attempting to log <span class="token keyword">in</span> with the new key<span class="token punctuation">(</span>s<span class="token punctuation">)</span>, to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: <span class="token number">1</span> key<span class="token punctuation">(</span>s<span class="token punctuation">)</span> remain to be installed -- <span class="token keyword">if</span> you are prompted now it is to <span class="token function">install</span> the new keys
root@192.168.1.107<span class="token string">&#39;s password: 

Number of key(s) added: 1

Now try logging into the machine, with:   &quot;ssh &#39;</span><span class="token number">192.168</span>.1.107&#39;&quot;
and check to <span class="token function">make</span> sure that only the key<span class="token punctuation">(</span>s<span class="token punctuation">)</span> you wanted were added.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ansible\u7CFB\u5217\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#ansible\u7CFB\u5217\u547D\u4EE4" aria-hidden="true">#</a> Ansible\u7CFB\u5217\u547D\u4EE4</h3><p><code>Ansible\u7CFB\u5217\u547D\u4EE4</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ansible ansible-doc ansible-playbook ansible-vault ansible-console ansible-galaxy ansible-pull

$ ansible-doc: \u663E\u793A\u6A21\u5757\u5E2E\u52A9
   ansible-doc <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>module<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
       <span class="token parameter variable">-a</span>            \u663E\u793A\u6240\u6709\u6A21\u5757\u7684\u6587\u6863
       -l, <span class="token parameter variable">--list</span>    \u5217\u51FA\u53EF\u7528\u6A21\u5757
       -s, <span class="token parameter variable">--snippet</span> \u663E\u793A\u6307\u5B9A\u6A21\u5757\u7684playbook\u7247\u6BB5<span class="token punctuation">(</span>\u7B80\u5316\u7248,\u4FBF\u4E8E\u67E5\u627E\u8BED\u6CD5<span class="token punctuation">)</span>
 

\u793A\u4F8B\uFF1A
   ansible-doc <span class="token parameter variable">-l</span>      \u5217\u51FA\u6240\u6709\u6A21\u5757
   ansible-doc <span class="token function">ping</span>    \u67E5\u770B\u6307\u5B9A\u6A21\u5757\u5E2E\u52A9\u7528\u6CD5
   ansible-doc <span class="token parameter variable">-s</span> <span class="token function">ping</span> \u67E5\u770B\u6307\u5B9A\u6A21\u5757\u5E2E\u52A9\u7528\u6CD5   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ansible\u901A\u8FC7ssh\u5B9E\u73B0\u914D\u7F6E\u7BA1\u7406\u3001\u5E94\u7528\u90E8\u7F72\u3001\u4EFB\u52A1\u6267\u884C\u7B49\u529F\u80FD\uFF0C\u5EFA\u8BAE\u914D\u7F6Eansible\u7AEF\u80FD\u57FA\u4E8E\u5BC6\u94A5\u8BA4\u8BC1\u7684\u65B9\u5F0F\u8054\u7CFB\u5404\u88AB\u7BA1\u7406\u8282\u70B9</code></p><h3 id="ansible\u547D\u4EE4\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#ansible\u547D\u4EE4\u8BED\u6CD5" aria-hidden="true">#</a> Ansible\u547D\u4EE4\u8BED\u6CD5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ansible <span class="token operator">&lt;</span>host-pattern<span class="token operator">&gt;</span> <span class="token punctuation">[</span>-m module_name<span class="token punctuation">]</span> <span class="token punctuation">[</span>-a args<span class="token punctuation">]</span>

ansible +\u88AB\u7BA1\u7406\u7684\u4E3B\u673A<span class="token punctuation">(</span>ALL<span class="token punctuation">)</span> +\u6A21\u5757  +\u53C2\u6570

   <span class="token parameter variable">--version</span>				\u663E\u793A\u7248\u672C
   <span class="token parameter variable">-m</span> module				\u6307\u5B9A\u6A21\u5757\uFF0C\u9ED8\u8BA4\u4E3Acommand
   <span class="token parameter variable">-v</span>	    				\u8BE6\u7EC6\u8FC7\u7A0B \u2013vv -vvv\u66F4\u8BE6\u7EC6
   --list-hosts				\u663E\u793A\u4E3B\u673A\u5217\u8868\uFF0C\u53EF\u7B80\u5199 <span class="token parameter variable">--list</span>
   -k, --ask-pass     		 \u63D0\u793A\u8F93\u5165ssh\u8FDE\u63A5\u5BC6\u7801,\u9ED8\u8BA4Key\u9A8C\u8BC1
   -C, <span class="token parameter variable">--check</span>        		 \u68C0\u67E5\uFF0C\u5E76\u4E0D\u6267\u884C
   -T, <span class="token parameter variable">--timeout</span><span class="token operator">=</span>TIMEOUT      \u6267\u884C\u547D\u4EE4\u7684\u8D85\u65F6\u65F6\u95F4,\u9ED8\u8BA410s
   -u, <span class="token parameter variable">--user</span><span class="token operator">=</span>REMOTE_USER     \u6267\u884C\u8FDC\u7A0B\u6267\u884C\u7684\u7528\u6237
   -b, <span class="token parameter variable">--become</span>               \u4EE3\u66FF\u65E7\u7248\u7684sudo\u5207\u6362
    --become-user<span class="token operator">=</span>USERNAME    \u6307\u5B9Asudo\u7684runas\u7528\u6237,\u9ED8\u8BA4\u4E3Aroot
   -K, --ask-become-pass      \u63D0\u793A\u8F93\u5165sudo\u65F6\u7684\u53E3\u4EE4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ansible\u7684host-pattern" tabindex="-1"><a class="header-anchor" href="#ansible\u7684host-pattern" aria-hidden="true">#</a> Ansible\u7684Host-pattern</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ansible\u7684Host-pattern

\u5339\u914D\u4E3B\u673A\u7684\u5217\u8868
   All \uFF1A\u8868\u793A\u6240\u6709Inventory\u4E2D\u7684\u6240\u6709\u4E3B\u673A

       ansible all \u2013m <span class="token function">ping</span>

   * :\u901A\u914D\u7B26
       ansible <span class="token string">&quot;*&quot;</span> <span class="token parameter variable">-m</span> <span class="token function">ping</span>  <span class="token punctuation">(</span>*\u8868\u793A\u6240\u6709\u4E3B\u673A<span class="token punctuation">)</span>
       ansible <span class="token number">192.168</span>.1.* <span class="token parameter variable">-m</span> <span class="token function">ping</span>
       ansible <span class="token string">&quot;*srvs&quot;</span> <span class="token parameter variable">-m</span> <span class="token function">ping</span>       

   \u6216\u5173\u7CFB <span class="token string">&quot;:&quot;</span>

       ansible <span class="token string">&quot;websrvs:appsrvs&quot;</span> <span class="token parameter variable">-m</span> <span class="token function">ping</span>
       ansible \u201C192.168.1.10:192.168.1.20\u201D <span class="token parameter variable">-m</span> <span class="token function">ping</span>

   \u903B\u8F91\u4E0E <span class="token string">&quot;:&amp;&quot;</span>
       ansible <span class="token string">&quot;websrvs:&amp;dbsrvs&quot;</span> \u2013m <span class="token function">ping</span>   
       \u5728websrvs\u7EC4\u5E76\u4E14\u5728dbsrvs\u7EC4\u4E2D\u7684\u4E3B\u673A

   \u903B\u8F91\u975E <span class="token string">&quot;:!&quot;</span>
       ansible <span class="token string">&#39;websrvs:!dbsrvs&#39;</span> \u2013m <span class="token function">ping</span>
       \u5728websrvs\u7EC4\uFF0C\u4F46\u4E0D\u5728dbsrvs\u7EC4\u4E2D\u7684\u4E3B\u673A
       \u6CE8\u610F\uFF1A\u6B64\u5904\u4E3A\u5355\u5F15\u53F7

   \u7EFC\u5408\u903B\u8F91
       ansible <span class="token string">&#39;websrvs:dbsrvs:&amp;appsrvs:!ftpsrvs&#39;</span> \u2013m <span class="token function">ping</span>

   \u6B63\u5219\u8868\u8FBE\u5F0F
       ansible <span class="token string">&quot;websrvs:&amp;dbsrvs&quot;</span> \u2013m <span class="token function">ping</span>
       ansible <span class="token string">&quot;~(web|db).*\\.magedu\\.com&quot;</span> \u2013m <span class="token function">ping</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ansible\u547D\u4EE4\u6267\u884C\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#ansible\u547D\u4EE4\u6267\u884C\u8FC7\u7A0B" aria-hidden="true">#</a> Ansible\u547D\u4EE4\u6267\u884C\u8FC7\u7A0B</h3><p><code>ansible\u547D\u4EE4\u6267\u884C\u8FC7\u7A0B</code></p><ol><li>\u52A0\u8F7D\u81EA\u5DF1\u7684\u914D\u7F6E\u6587\u4EF6 \u9ED8\u8BA4/etc/ansible/ansible.cfg</li><li>\u52A0\u8F7D\u81EA\u5DF1\u5BF9\u5E94\u7684\u6A21\u5757\u6587\u4EF6\uFF0C\u5982command</li><li>\u901A\u8FC7ansible\u5C06\u6A21\u5757\u6216\u547D\u4EE4\u751F\u6210\u5BF9\u5E94\u7684\u4E34\u65F6py\u6587\u4EF6\uFF0C</li><li>\u5E76\u5C06\u8BE5\u6587\u4EF6\u4F20\u8F93\u81F3\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u5BF9\u5E94\u6267\u884C\u7528\u6237$HOME/.ansible/tmp/ansible-tmp-\u6570\u5B57/XXX.PY\u6587\u4EF6</li><li>\u7ED9\u6587\u4EF6+x\u6267\u884C</li><li>\u6267\u884C\u5E76\u8FD4\u56DE\u7ED3\u679C</li><li>\u5220\u9664\u4E34\u65F6py\u6587\u4EF6\uFF0Csleep 0\u9000\u51FA</li></ol><p><code>\u6267\u884C\u72B6\u6001\uFF1A</code></p><ul><li><code>\u7EFF\u8272</code>\uFF1A\u6267\u884C\u6210\u529F\u5E76\u4E14\u4E0D\u9700\u8981\u505A\u6539\u53D8\u7684\u64CD\u4F5C</li><li><code>\u9EC4\u8272</code>\uFF1A\u6267\u884C\u6210\u529F\u5E76\u4E14\u5BF9\u76EE\u6807\u4E3B\u673A\u505A\u53D8\u66F4</li><li><code>\u7EA2\u8272</code>\uFF1A\u6267\u884C\u5931\u8D25</li></ul><h3 id="ansible\u4F7F\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#ansible\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a> Ansible\u4F7F\u7528\u793A\u4F8B</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u793A\u4F8B
   \u4EE5wang\u7528\u6237\u6267\u884Cping\u5B58\u6D3B\u68C0\u6D4B
       ansible all <span class="token parameter variable">-m</span> <span class="token function">ping</span> <span class="token parameter variable">-u</span> wang <span class="token parameter variable">-k</span>

   \u4EE5wang sudo\u81F3root\u6267\u884Cping\u5B58\u6D3B\u68C0\u6D4B
       ansible all <span class="token parameter variable">-m</span> <span class="token function">ping</span> <span class="token parameter variable">-u</span> wang <span class="token parameter variable">-k</span> <span class="token parameter variable">-b</span>

   \u4EE5wang sudo\u81F3mage\u7528\u6237\u6267\u884Cping\u5B58\u6D3B\u68C0\u6D4B
       ansible all <span class="token parameter variable">-m</span> <span class="token function">ping</span> <span class="token parameter variable">-u</span> wang <span class="token parameter variable">-k</span> <span class="token parameter variable">-b</span> --become-user<span class="token operator">=</span>mage

   \u4EE5wang sudo\u81F3root\u7528\u6237\u6267\u884Cls
       ansible all <span class="token parameter variable">-m</span> <span class="token builtin class-name">command</span> <span class="token parameter variable">-u</span> wang <span class="token parameter variable">-a</span> <span class="token string">&#39;ls /root&#39;</span> <span class="token parameter variable">-b</span> --become-user<span class="token operator">=</span>root <span class="token parameter variable">-k</span> <span class="token parameter variable">-K</span>

   ansible ping\u6A21\u5757\u6D4B\u8BD5\u8FDE\u63A5
   ansible <span class="token number">192.168</span>.38.126,192.168.38.127 <span class="token parameter variable">-m</span> <span class="token function">ping</span> <span class="token parameter variable">-k</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43),t=[l];function o(c,p){return s(),a("div",null,t)}const u=n(i,[["render",o],["__file","1.html.vue"]]);export{u as default};
