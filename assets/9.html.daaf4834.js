import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,f as e}from"./app.ca0279c0.js";const i={},l=e(`<h1 id="guestfish\u4FEE\u6539\u955C\u50CF\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#guestfish\u4FEE\u6539\u955C\u50CF\u5BC6\u7801" aria-hidden="true">#</a> Guestfish\u4FEE\u6539\u955C\u50CF\u5BC6\u7801</h1><p>\u4ECEopenstack\u5B98\u65B9\u4E0B\u8F7D\u7684\u4E91\u955C\u50CF\u4E00\u822C\u90FD\u662F\u666E\u901A\u7528\u6237\u5BC6\u94A5\u767B\u9646\uFF0C\u6BD4\u5982centos\u955C\u50CF\u7684\u666E\u901A\u7528\u6237\u4E3Acentos\uFF0Cubuntu\u955C\u50CF\u7684\u666E\u901A\u7528\u6237\u4E3Aubuntu,\u867D\u7136\u5BC6\u94A5\u767B\u9646\u7CFB\u7EDF\u76F8\u6BD4\u5BC6\u7801\u767B\u9646\u6765\u8BF4\u6BD4\u8F83\u65B9\u4FBF\u5B89\u5168\uFF0C\u4F46\u662F\u5982\u679C\u9700\u8981vnc\u767B\u9646\u7CFB\u7EDF\u7684\u8BDD\uFF0C\u5FC5\u987B\u5F97\u662F\u5BC6\u7801\u624D\u53EF\u4EE5\u3002\u90A3\u4E48\u5982\u4F55\u5B9E\u73B0openstack\u4E91\u955C\u50CF\u5BC6\u7801\u767B\u9646\u5462\uFF0Cguestfish\u5DE5\u5177\u662F\u4E00\u4E2A\u4E0D\u9519\u7684\u9009\u62E9\u3002\uFF08\u672C\u6B21\u64CD\u4F5C\u662F\u5728centos\u7CFB\u7EDF\u4E0A\u5229\u7528guestfish\u5DE5\u5177\u4FEE\u6539openstack\u5B98\u65B9centos\u955C\u50CF\u7684\u5BC6\u7801\uFF0C\u5305\u62ECroot\u7528\u6237\u4EE5\u53CA\u666E\u901A\u7528\u6237centos\uFF09</p><h4 id="\u5B89\u88C5\u5DE5\u5177\u5305" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u5DE5\u5177\u5305" aria-hidden="true">#</a> \u5B89\u88C5\u5DE5\u5177\u5305</h4><p><code>\u8FD9\u91CC\u9700\u8981\u7528\u5230epel\u7684\u6E90\u3002</code></p><p><code>\u8BE5\u5B89\u88C5\u5305\u662F\u57FA\u4E8EKvm\u7684\u73AF\u5883</code>\uFF0C\u5982\u679C\u6709Kvm\u73AF\u5883\u53EF\u4EE5\u76F4\u63A5\u5B89\u88C5guestfish\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node ~<span class="token punctuation">]</span><span class="token comment"># yum install -y epel-release</span>
<span class="token punctuation">[</span>root@node ~<span class="token punctuation">]</span><span class="token comment"># yum install -y qemu-kvm libvirt virt-install bridge-utils </span>
<span class="token punctuation">[</span>root@node ~<span class="token punctuation">]</span><span class="token comment"># systemctl start libvirtd</span>
<span class="token punctuation">[</span>root@node ~<span class="token punctuation">]</span><span class="token comment"># yum install guestfish</span>

<span class="token punctuation">[</span>root@node ~<span class="token punctuation">]</span><span class="token comment"># guestfish version </span>
major: <span class="token number">1</span>
minor: <span class="token number">40</span>
release: <span class="token number">2</span>
extra: <span class="token assign-left variable">rhel</span><span class="token operator">=</span><span class="token number">7</span>,release<span class="token operator">=</span><span class="token number">10</span>.el7,libvirt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="guestfish\u4FEE\u6539\u955C\u50CF\u7684\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#guestfish\u4FEE\u6539\u955C\u50CF\u7684\u5BC6\u7801" aria-hidden="true">#</a> guestfish\u4FEE\u6539\u955C\u50CF\u7684\u5BC6\u7801</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node ~<span class="token punctuation">]</span><span class="token comment"># guestfish --rw -a CentOS-7-x86_64-GenericCloud-1804_02.qcow2c </span>

Welcome to guestfish, the guest filesystem shell <span class="token keyword">for</span>
editing virtual machine filesystems and disk images.

Type: \u2018help\u2019 <span class="token keyword">for</span> <span class="token builtin class-name">help</span> on commands
      \u2018man\u2019 to <span class="token builtin class-name">read</span> the manual
      \u2018quit\u2019 to quit the shell

<span class="token operator">&gt;</span><span class="token operator">&lt;</span>fs<span class="token operator">&gt;</span> run 

<span class="token number">100</span>% \u27E6\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u2592\u27E7 --:--
<span class="token operator">&gt;</span><span class="token operator">&lt;</span>fs<span class="token operator">&gt;</span> list-filesystems
/dev/sda1: xfs
<span class="token operator">&gt;</span><span class="token operator">&lt;</span>fs<span class="token operator">&gt;</span> <span class="token function">mount</span> /dev/sda1 /
<span class="token operator">&gt;</span><span class="token operator">&lt;</span>fs<span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4FEE\u6539root\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539root\u5BC6\u7801" aria-hidden="true">#</a> \u4FEE\u6539root\u5BC6\u7801</h4><p>\u518D\u5F00\u4E00\u4E2Ashell,\u6267\u884C\u5982\u4E0B\u547D\u4EE4\u751F\u6210root\u7684\u52A0\u5BC6\u5BC6\u7801\uFF0C<code>\u8BB0\u4F4F\u8FD9\u4E2A\u52A0\u5BC6\u7684\u5BC6\u7801\u3002</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node ~<span class="token punctuation">]</span><span class="token comment"># openssl passwd -1 000000</span>
<span class="token variable">$1</span><span class="token variable">$pTRh9tzP</span><span class="token variable">$KRX0LisujyB</span>/cDY97lmSZ/
<span class="token punctuation">[</span>root@node ~<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD4\u56DEguestfish\u6240\u5728shell,<code>\u7F16\u8F91 /etc/shadow\u6587\u4EF6\u3002</code></p><p>\u5C06root\u9ED8\u8BA4\u7684\u968F\u673A\u5BC6\u7801\u66FF\u6362\u6210\u751F\u6210\u7684\u52A0\u5BC6\u5BC6\u7801\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span><span class="token operator">&lt;</span>fs<span class="token operator">&gt;</span> <span class="token function">vi</span> /etc/shadow

root:<span class="token variable">$1</span><span class="token variable">$pTRh9tzP</span><span class="token variable">$KRX0LisujyB</span>/cDY97lmSZ/:17667:0:99999:7:::    <span class="token comment">#\u5C06\u8FD9\u6BB5\u7684\u611F\u53F9\u53F7\u4FEE\u6539\u6210\u521A\u521A\u7684\u5BC6\u7801</span>
bin:*:17632:0:99999:7:::
daemon:*:17632:0:99999:7:::
adm:*:17632:0:99999:7:::
lp:*:17632:0:99999:7:::
sync:*:17632:0:99999:7:::
shutdown:*:17632:0:99999:7:::
halt:*:17632:0:99999:7:::
mail:*:17632:0:99999:7:::
operator:*:17632:0:99999:7:::
games:*:17632:0:99999:7:::
ftp:*:17632:0:99999:7:::
nobody:*:17632:0:99999:7:::
systemd-network:<span class="token operator">!</span><span class="token operator">!</span>:17667::::::
dbus:<span class="token operator">!</span><span class="token operator">!</span>:17667::::::
polkitd:<span class="token operator">!</span><span class="token operator">!</span>:17667::::::
rpc:<span class="token operator">!</span><span class="token operator">!</span>:17667:0:99999:7:::
rpcuser:<span class="token operator">!</span><span class="token operator">!</span>:17667::::::
nfsnobody:<span class="token operator">!</span><span class="token operator">!</span>:17667::::::
sshd:<span class="token operator">!</span><span class="token operator">!</span>:17667::::::
postfix:<span class="token operator">!</span><span class="token operator">!</span>:17667::::::
chrony:<span class="token operator">!</span><span class="token operator">!</span>:17667::::::                                               
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4FEE\u6539centos\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539centos\u5BC6\u7801" aria-hidden="true">#</a> \u4FEE\u6539centos\u5BC6\u7801</h4><p>\u7F16\u8F91/etc/cloud.cfg\u6587\u4EF6\u3002</p><p>\u628Alock_passwd\u5B57\u6BB5\u7684\u503C\u4FEE\u6539\u4E3Afalse,\u89E3\u7981\u5BC6\u7801\u767B\u9646\u3002\u589E\u52A0<code>plain_text_passwd</code>\u5B57\u6BB5\uFF0C\u8BBE\u7F6E\u4E3A\u4F60\u81EA\u5DF1\u7684\u5BC6\u7801,\u6211\u8FD9\u91CC\u8BBE\u7F6E\u7684\u662F<code>\u2018000000\u2019</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span><span class="token operator">&lt;</span>fs<span class="token operator">&gt;</span> <span class="token function">vi</span> /etc/cloud/cloud.cfg
\xB7\xB7\xB7
system_info:
  default_user:
    name: centos
    lock_passwd: <span class="token boolean">false</span>            <span class="token comment">#\u4FEE\u6539\u4E3Afalse</span>
    plain_text_passwd: <span class="token string">&#39;000000&#39;</span>   <span class="token comment">#\u6DFB\u52A0\u8FD9\u4E00\u884C</span>
    gecos: Cloud User
    groups: <span class="token punctuation">[</span>wheel, adm, systemd-journal<span class="token punctuation">]</span>
    sudo: <span class="token punctuation">[</span><span class="token string">&quot;ALL=(ALL) NOPASSWD:ALL&quot;</span><span class="token punctuation">]</span>
    shell: /bin/bash
    
<span class="token operator">&gt;</span><span class="token operator">&lt;</span>fs<span class="token operator">&gt;</span> quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[l];function t(p,c){return n(),a("div",null,o)}const u=s(i,[["render",t],["__file","9.html.vue"]]);export{u as default};
