import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.ca0279c0.js";const t={},o=e(`<h1 id="dns-\u670D\u52A1\u4E0E\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#dns-\u670D\u52A1\u4E0E\u7BA1\u7406" aria-hidden="true">#</a> DNS \u670D\u52A1\u4E0E\u7BA1\u7406</h1><h3 id="\u638C\u63E1\u8981\u70B9" tabindex="-1"><a class="header-anchor" href="#\u638C\u63E1\u8981\u70B9" aria-hidden="true">#</a> \u638C\u63E1\u8981\u70B9</h3><blockquote><p>\uFF081\uFF09\u4E86\u89E3 BIND \u670D\u52A1\u7684\u5B89\u88C5\u914D\u7F6E\u3002</p><p>\uFF082\uFF09\u4F7F\u7528 bind-chroot \u642D\u5EFA DNS \u670D\u52A1</p><p>\uFF083\uFF09\u914D\u7F6E DNS \u670D\u52A1\u7684\u6B63\u53CD\u5411\u89E3\u6790\u3002</p></blockquote><h3 id="\u57FA\u7840\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u51C6\u5907" aria-hidden="true">#</a> \u57FA\u7840\u51C6\u5907</h3><h5 id="_1-\u89C4\u5212\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-\u89C4\u5212\u8282\u70B9" aria-hidden="true">#</a> <strong>1.\u89C4\u5212\u8282\u70B9</strong></h5><p>\u26AB\u90E8\u7F72<code>\u4E3B\u4ECE\u8282\u70B9 DNS \u670D\u52A1+\u6B63\u53CD\u5411\u89E3\u6790</code></p><p>\u26AB\u914D\u7F6E\u597D\u672C\u5730\u7684DNS\u5730\u5740</p><p>\u26AB\u5B89\u88C5bind\u5DE5\u5177\uFF0C\u901A\u8FC7bind\u5DE5\u5177\u7BA1\u7406DNS\u670D\u52A1\u5668</p><table><thead><tr><th><strong>IP</strong></th><th>\u4E3B\u673A\u540D</th><th>\u8282\u70B9</th></tr></thead><tbody><tr><td>192.168.1.5</td><td>master</td><td>\u4E3B DNS \u670D\u52A1\u5668</td></tr><tr><td>192.168.1.11</td><td>slaver</td><td>\u4ECE DNS \u670D\u52A1\u5668</td></tr></tbody></table><h5 id="_2-\u5173\u95ED\u9632\u706B\u5899" tabindex="-1"><a class="header-anchor" href="#_2-\u5173\u95ED\u9632\u706B\u5899" aria-hidden="true">#</a> <strong>2.\u5173\u95ED\u9632\u706B\u5899</strong></h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># setenforce 0 </span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># systemctl stop firewalld </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-\u5B89\u88C5\u914D\u7F6Ebind" tabindex="-1"><a class="header-anchor" href="#_3-\u5B89\u88C5\u914D\u7F6Ebind" aria-hidden="true">#</a> <strong>3.\u5B89\u88C5\u914D\u7F6EBind</strong></h5><blockquote><p>\u4EE5\u4E0B\u64CD\u4F5C\u5728<strong>master</strong>\u548C<strong>slave</strong>\u8282\u70B9\u8FDB\u884C</p></blockquote><p>\u26AB\u5B89\u88C5\u914D\u7F6E DNS \u8F6F\u4EF6 BIND\uFF08\u4E24\u4E2A\u8282\u70B9\uFF09\uFF0C\u4F7F\u7528yum\u547D\u4EE4\u5B89\u88C5 <code>bind-chroot DNS</code> \u670D\u52A1\u5668\u3002</p><p>\u26AB\u901A\u8FC7 <code>rpm -ql bind-chroot</code> \u67E5\u8BE2\u6240\u5B89\u88C5\u7684\u6587\u4EF6\u3002</p><p>\u26AB\u8FDB\u5165 bind-chroot \u76EE\u5F55\uFF0C\u62F7\u8D1D bind \u76F8\u5173\u6587\u4EF6\uFF0C<code>\u51C6\u5907 bind-chroot \u73AF\u5883</code>\u3002</p><p>\u26AB \u521B\u5EFA dynamic \u76EE\u5F55\uFF0C\u5C06 bind \u6587\u4EF6\u8BBE\u7F6E\u4E3A\u53EF\u5199\u3002</p><p>\u26AB\u5C06 DNS \u670D\u52A1 named.conf \u6587\u4EF6<code>\u62F7\u8D1D\u5230 bind-chroot</code> \u76EE\u5F55\u4E2D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># yum install bind-chroot bind-utils -y</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># rpm -ql bind-chroot</span>
/etc/named-chroot.files
/usr/lib/systemd/system/named-chroot-setup.service
/usr/lib/systemd/system/named-chroot.service
/usr/libexec/setup-named-chroot.sh
/var/named/chroot    
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># cd /var/named/chroot </span>
<span class="token punctuation">[</span>root@master chroot<span class="token punctuation">]</span><span class="token comment"># cp -R /usr/share/doc/bind-9.9.4/sample/etc/* /var/named/chroot/etc/</span>
<span class="token punctuation">[</span>root@master chroot<span class="token punctuation">]</span><span class="token comment"># cp -R /usr/share/doc/bind-9.9.4/sample/var/* /var/named/chroot/var/</span>
<span class="token punctuation">[</span>root@master chroot<span class="token punctuation">]</span><span class="token comment"># cd var/named/</span>
<span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># chmod -R 777 data/</span>
<span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># mkdir dynamic</span>
<span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># chmod -R 777 dynamic</span>
<span class="token punctuation">[</span>root@master chroot<span class="token punctuation">]</span><span class="token comment"># cp /etc/named.conf /var/named/chroot/etc/named.conf</span>
cp: overwrite \u2018/var/named/chroot/etc/named.conf\u2019? y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4-\u914D\u7F6E\u6B63\u53CD\u5411\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#_4-\u914D\u7F6E\u6B63\u53CD\u5411\u89E3\u6790" aria-hidden="true">#</a> <strong>4.\u914D\u7F6E\u6B63\u53CD\u5411\u89E3\u6790</strong></h5><p>\u26AB\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6 <code>named.conf</code>\uFF0C\u9700\u8981\u5C06\u76D1\u542C\u7AEF\u53E3\u4FEE\u6539\u6210<code>any</code>\uFF0C\u548Callow-query\u4E5F\u914D\u7F6E\u6210<code>any</code>\uFF0C\u7136\u540E\u914D\u7F6E\u57DF\u540D\u662F<code>test.com</code>\u7684\u6B63\u5411\u89E3\u6790\u4EE5\u53CA<code>1.168.192</code>\u7684\u53CD\u5411\u89E3\u6790\u3002</p><p>\u26AB\u8BBE\u7F6E named.conf \u6587\u4EF6\u7684\u7528\u6237<code>\u6743\u9650\u4E3A named</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># chown named /var/named/chroot/etc/named.conf</span>
<span class="token punctuation">[</span>root@master chroot<span class="token punctuation">]</span><span class="token comment">#vi /var/named/chroot/etc/named.conf</span>
options <span class="token punctuation">{</span>
        listen-on port <span class="token number">53</span> <span class="token punctuation">{</span> any<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>    <span class="token comment"># \u8FD9\u91CC\u628A127.0.0.1\u4FEE\u6539\u6210any</span>
        listen-on-v6 port <span class="token number">53</span> <span class="token punctuation">{</span> ::1<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        directory       <span class="token string">&quot;/var/named&quot;</span><span class="token punctuation">;</span>
        dump-file       <span class="token string">&quot;/var/named/data/cache_dump.db&quot;</span><span class="token punctuation">;</span>
        statistics-file <span class="token string">&quot;/var/named/data/named_stats.txt&quot;</span><span class="token punctuation">;</span>
        memstatistics-file <span class="token string">&quot;/var/named/data/named_mem_stats.txt&quot;</span><span class="token punctuation">;</span>
        recursing-file  <span class="token string">&quot;/var/named/data/named.recursing&quot;</span><span class="token punctuation">;</span>
        secroots-file   <span class="token string">&quot;/var/named/data/named.secroots&quot;</span><span class="token punctuation">;</span>
        allow-query     <span class="token punctuation">{</span> any<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>	  <span class="token comment"># \u8FD9\u91CC\u628Alocalhost\u4FEE\u6539\u6210any</span>
\xB7
\xB7
\xB7
zone <span class="token string">&quot;test.com&quot;</span> IN <span class="token punctuation">{</span>						<span class="token comment">#\u6B63\u5411\u89E3\u6790</span>
        <span class="token builtin class-name">type</span> master<span class="token punctuation">;</span>
        <span class="token function">file</span> <span class="token string">&quot;test.com.zon&quot;</span>
        allow-update <span class="token punctuation">{</span>none<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

zone <span class="token string">&quot;1.168.192.in-addr.arpa&quot;</span> IN <span class="token punctuation">{</span>			  <span class="token comment">#\u53CD\u5411\u89E3\u6790</span>
        <span class="token builtin class-name">type</span> master<span class="token punctuation">;</span>
        <span class="token function">file</span> <span class="token string">&quot;test.com.arpa&quot;</span>
        allow-update <span class="token punctuation">{</span>none<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5.\u914D\u7F6E\u8F6C\u53D1\u57DF</strong></p><p>\u26AB\u62F7\u8D1D\u6A21\u677F\u6587\u4EF6 <code>named.localhost</code> \u5230 test.com.zon\u3002</p><p>\u26AB\u7F16\u8F91 <code>test.com.zon</code> \u6587\u4EF6\u4E3A\u6B63\u5411\u89E3\u6790\u7684\u8F6C\u53D1\u57DF\uFF0C\u8D4B\u4E88 test.com.zon \u6240\u6709\u6743\u9650\u3002</p><p>\u26AB\u7F16\u8F91 <code>test.com.arpa</code> \u6587\u4EF6\u4E3A\u53CD\u5411\u89E3\u6790\u7684\u8F6C\u53D1\u57DF\u8D4B\u4E88 test.com.arpa \u6240\u6709\u6743\u9650\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># cp /var/named/named.localhost /var/named/chroot/var/named/test.com.zon</span>
<span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># cat  test.com.zon   			</span>
<span class="token variable">$TTL</span> 1D
<span class="token variable">$ORIGIN</span> test.com. 
@       IN SOA  test.com. root.test.com. <span class="token punctuation">(</span>
                                        <span class="token number">0</span>       <span class="token punctuation">;</span> serial
                                        1D      <span class="token punctuation">;</span> refresh      <span class="token operator">&lt;</span>---\u8FD9\u90E8\u5206\u662F\u6B63\u5411\u89E3\u6790\u8F6C\u53D1\u57DF---<span class="token operator">&gt;</span>
                                        1H      <span class="token punctuation">;</span> retry
                                        1W      <span class="token punctuation">;</span> expire
                                        3H <span class="token punctuation">)</span>    <span class="token punctuation">;</span> minimum
        IN NS   ns1.test.com. 
ns1     IN A    <span class="token number">192.168</span>.1.5 
www     IN A    <span class="token number">192.168</span>.1.5 
www2    IN A    <span class="token number">192.168</span>.1.5 
<span class="token function">ftp</span>     IN A    <span class="token number">192.168</span>.1.5 

<span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># cat test.com.arpa </span>
<span class="token variable">$TTL</span> 1D
@       IN SOA  test.com. root.test.com. <span class="token punctuation">(</span>
                                        <span class="token number">0</span>       <span class="token punctuation">;</span> serial
                                        1D      <span class="token punctuation">;</span> refresh	<span class="token operator">&lt;</span>---\u8FD9\u90E8\u5206\u662F\u53CD\u5411\u89E3\u6790\u8F6C\u53D1\u57DF---<span class="token operator">&gt;</span>
                                        1H      <span class="token punctuation">;</span> retry
                                        1W      <span class="token punctuation">;</span> expire
                                        3H <span class="token punctuation">)</span>    <span class="token punctuation">;</span> minimum
        IN NS   ns1.test.com. 
        IN A    <span class="token number">192.168</span>.1.5 
<span class="token number">5</span>       IN PTR  www.test.com.

<span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># chmod 777 test.com.zon </span>
<span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># chmod 777 test.com.arpa </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5-\u68C0\u67E5\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_5-\u68C0\u67E5\u914D\u7F6E" aria-hidden="true">#</a> <strong>5.\u68C0\u67E5\u914D\u7F6E</strong></h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># named-checkconf /var/named/chroot/etc/named.conf </span>
<span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># named-checkzone test.com test.com.zon</span>
zone test.com/IN: loaded serial <span class="token number">0</span>
OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-\u91CD\u542F\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_6-\u91CD\u542F\u670D\u52A1" aria-hidden="true">#</a> <strong>6.\u91CD\u542F\u670D\u52A1</strong></h5><p>\u26AB\u9700\u8981\u5173\u95ED <code>named</code> \u670D\u52A1\uFF0C\u53D6\u6D88\u5F00\u673A\u542F\u52A8\u3002</p><p>\u26AB\u8BBE\u7F6E <code>bind-chroot</code> \u670D\u52A1\u5F00\u673A\u542F\u52A8\uFF0C\u5E76\u91CD\u542F\u3002</p><p>\u26AB\u914D\u7F6E\u4E3B\u673A <code>DNS</code> \u670D\u52A1\u5668\u3002</p><p>\u26AB\u4F7F\u7528 <code>bind</code> \u57FA\u672C\u547D\u4EE4\u91CD\u8F7D\u4E3B\u914D\u7F6E\u6587\u4EF6\u548C\u533A\u57DF\u89E3\u6790\u5E93\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># systemctl stop named</span>
<span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># systemctl disable named</span>
<span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># systemctl enable named-chroot </span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> <span class="token string">&#39;/usr/lib/systemd/system/named-chroot.service&#39;</span> <span class="token string">&#39;/etc/systemd/system/multi-user.target.wants/named-chroot.service&#39;</span>
<span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># systemctl restart named-chroot</span>

<span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># vim /etc/resolv.conf</span>
<span class="token punctuation">;</span> Created by cloud-init on instance boot automatically, <span class="token keyword">do</span> not edit.
<span class="token punctuation">;</span>
<span class="token punctuation">;</span> generated by /usr/sbin/dhclient-script
search openstacklocal
nameserver  <span class="token number">192.168</span>.1.5   

<span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># rndc reload</span>
<span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># rndc reload test.com</span>
<span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># rndc notify test.com</span>
<span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># rndc reconfig</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5 DNS \u89E3\u6790\u662F\u5426\u6B63\u5E38\u3002<strong>\u53EF\u4EE5\u6B63\u5E38\u89E3\u6790\u3002</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># nslookup </span>
<span class="token operator">&gt;</span> www.test.com
Server:         <span class="token number">192.168</span>.1.5
Address:        <span class="token number">192.168</span>.1.5<span class="token comment">#53</span>

Name:   www.test.com
Address: <span class="token number">192.168</span>.1.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_7-\u914D\u7F6E\u4E3B\u4ECE-dns" tabindex="-1"><a class="header-anchor" href="#_7-\u914D\u7F6E\u4E3B\u4ECE-dns" aria-hidden="true">#</a> <strong>7.\u914D\u7F6E\u4E3B\u4ECE DNS</strong></h5><p>\u26AB\u9996\u5148\uFF0C\u5728 <code>Master</code> \u4E0A\u64CD\u4F5C\uFF0C\u4FEE\u6539 Master \u7684 named.conf \u914D\u7F6E\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master chroot<span class="token punctuation">]</span><span class="token comment"># cat  /var/named/chroot/etc/named.conf </span>
zone <span class="token string">&quot;test.com&quot;</span> IN <span class="token punctuation">{</span>
        <span class="token builtin class-name">type</span> master<span class="token punctuation">;</span>
        <span class="token function">file</span> <span class="token string">&quot;test.com.zon&quot;</span>
        allow-update <span class="token punctuation">{</span>none<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        allow-transfer <span class="token punctuation">{</span><span class="token number">192.168</span>.1.11<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>      <span class="token operator">&lt;</span>---\u6DFB\u52A0\u8FD9\u4E09\u884C\u6307\u5B9Aslave\u8282\u70B9---<span class="token operator">&gt;</span>
        notify <span class="token function">yes</span><span class="token punctuation">;</span>
        also-notify <span class="token punctuation">{</span><span class="token number">192.168</span>.1.11<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

zone <span class="token string">&quot;1.168.192.in-addr.arpa&quot;</span> IN <span class="token punctuation">{</span>
        <span class="token builtin class-name">type</span> master<span class="token punctuation">;</span>
        <span class="token function">file</span> <span class="token string">&quot;test.com.arpa&quot;</span>
        allow-update <span class="token punctuation">{</span>none<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        allow-transfer <span class="token punctuation">{</span><span class="token number">192.168</span>.1.11<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        notify <span class="token function">yes</span><span class="token punctuation">;</span>
        also-notify <span class="token punctuation">{</span><span class="token number">192.168</span>.1.11<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u26AB\u7136\u540E\uFF0C \u5728 <code>slave</code> \u4E0A\u64CD\u4F5C\uFF0C\u4FEE\u6539 slave \u670D\u52A1\u5668\u4E0A\u7684 named.conf \u6587\u4EF6\u3002</p><p>\u26AB\u8BBE\u7F6E <code>slaves</code> \u76EE\u5F55\u6743\u9650\u548C\u76EE\u5F55\u7684\u6240\u6709\u8005\u4E3A named \u7528\u6237\u3002</p><p>\u26AB\u68C0\u67E5\u8BED\u6CD5\uFF0C\u5E76\u5728 <code>master \u548C slave</code> \u91CD\u542F\u670D\u52A1\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@slave chroot<span class="token punctuation">]</span><span class="token comment"># cat /var/named/chroot/etc/named.conf  </span>
zone <span class="token string">&quot;test.com&quot;</span> IN <span class="token punctuation">{</span>
        <span class="token builtin class-name">type</span> slave<span class="token punctuation">;</span>							<span class="token operator">&lt;</span>---\u6307\u5B9Amaster\u8282\u70B9---<span class="token operator">&gt;</span>
        <span class="token function">file</span> <span class="token string">&quot;slaves/test.com.zon&quot;</span><span class="token punctuation">;</span>
        masters <span class="token punctuation">{</span> <span class="token number">192.168</span>.1.5<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

zone <span class="token string">&quot;1.168.192.in-addr.arpa&quot;</span> IN <span class="token punctuation">{</span>
        <span class="token builtin class-name">type</span> slave<span class="token punctuation">;</span>
        <span class="token function">file</span> <span class="token string">&quot;slaves/test.com.arpa&quot;</span><span class="token punctuation">;</span>
        masters <span class="token punctuation">{</span> <span class="token number">192.168</span>.1.5<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span>root@slave ~<span class="token punctuation">]</span><span class="token comment"># chmod -R 777 /var/named/chroot/var/named/slaves/</span>
<span class="token punctuation">[</span>root@slave ~<span class="token punctuation">]</span><span class="token comment"># chown -R named:named /var/named/chroot/var/named/slaves/</span>
<span class="token punctuation">[</span>root@slave ~<span class="token punctuation">]</span><span class="token comment"># named-checkconf /var/named/chroot/etc/named.conf</span>
<span class="token punctuation">[</span>root@slave ~<span class="token punctuation">]</span><span class="token comment"># systemctl restart named-chroot</span>
<span class="token punctuation">[</span>root@slave chroot<span class="token punctuation">]</span><span class="token comment"># ll /var/named/chroot/var/named/slaves/</span>
total <span class="token number">16</span>
<span class="token parameter variable">-rwxrwxrwx</span> <span class="token number">1</span> named named  <span class="token number">56</span> Feb <span class="token number">10</span> <span class="token number">13</span>:29 my.ddns.internal.zone.db
<span class="token parameter variable">-rwxrwxrwx</span> <span class="token number">1</span> named named  <span class="token number">56</span> Feb <span class="token number">10</span> <span class="token number">13</span>:29 my.slave.internal.zone.db
-rw-r--r-- <span class="token number">1</span> named named <span class="token number">287</span> Feb <span class="token number">10</span> <span class="token number">13</span>:37 test.com.arpa
-rw-r--r-- <span class="token number">1</span> named named <span class="token number">308</span> Feb <span class="token number">10</span> <span class="token number">13</span>:37 test.com.zon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_8-\u4E3B\u4ECE\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_8-\u4E3B\u4ECE\u6D4B\u8BD5" aria-hidden="true">#</a> <strong>8.\u4E3B\u4ECE\u6D4B\u8BD5</strong></h5><p>\u5728 master \u4E3B\u673A\u7528\u4ECE\u670D\u52A1\u5668\u89E3\u6790\uFF0C\uFF08@\u540E\u9762\u6307\u5B9A DNS \u670D\u52A1\u5668\u7684\u5730\u5740\uFF0C\u5C31\u53EF\u4EE5\u4E0D\u7528\u6539\u672C\u673A \u7684 DNS \u4E86\uFF09\uFF0C\u89E3\u6790\u5230 www2 \u57DF\u540D\uFF0C\u8868\u660E\u914D\u7F6E\u6210\u529F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master named<span class="token punctuation">]</span><span class="token comment"># dig www2.test.com @192.168.1.11</span>

<span class="token punctuation">;</span> <span class="token operator">&lt;&lt;</span><span class="token operator">&gt;&gt;</span> DiG <span class="token number">9.11</span>.4-P2-RedHat-9.11.4-26.P2.el7_9.8 <span class="token operator">&lt;&lt;</span><span class="token operator">&gt;&gt;</span> www2.test.com @192.168.1.11
<span class="token punctuation">;</span><span class="token punctuation">;</span> global options: +cmd
<span class="token punctuation">;</span><span class="token punctuation">;</span> Got answer:
<span class="token punctuation">;</span><span class="token punctuation">;</span> -<span class="token operator">&gt;&gt;</span>HEADER<span class="token operator">&lt;&lt;-</span> opcode: QUERY, status: NOERROR, id: <span class="token number">22457</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> flags: qr aa rd ra<span class="token punctuation">;</span> QUERY: <span class="token number">1</span>, ANSWER: <span class="token number">1</span>, AUTHORITY: <span class="token number">1</span>, ADDITIONAL: <span class="token number">2</span>

<span class="token punctuation">;</span><span class="token punctuation">;</span> OPT PSEUDOSECTION:
<span class="token punctuation">;</span> EDNS: version: <span class="token number">0</span>, flags:<span class="token punctuation">;</span> udp: <span class="token number">4096</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> QUESTION SECTION:
<span class="token punctuation">;</span>www2.test.com.                 IN      A

<span class="token punctuation">;</span><span class="token punctuation">;</span> ANSWER SECTION:
www2.test.com.          <span class="token number">86400</span>   IN      A       <span class="token number">192.168</span>.1.5

<span class="token punctuation">;</span><span class="token punctuation">;</span> AUTHORITY SECTION:
test.com.               <span class="token number">86400</span>   IN      NS      ns1.test.com.

<span class="token punctuation">;</span><span class="token punctuation">;</span> ADDITIONAL SECTION:
ns1.test.com.           <span class="token number">86400</span>   IN      A       <span class="token number">192.168</span>.1.5

<span class="token punctuation">;</span><span class="token punctuation">;</span> Query time: <span class="token number">0</span> msec
<span class="token punctuation">;</span><span class="token punctuation">;</span> SERVER: <span class="token number">192.168</span>.1.11<span class="token comment">#53(192.168.1.11)</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> WHEN: Thu Feb <span class="token number">10</span> <span class="token number">14</span>:18:08 UTC <span class="token number">2022</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span> MSG SIZE  rcvd: <span class="token number">92</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,48),c=[o];function p(i,l){return s(),a("div",null,c)}const r=n(t,[["render",p],["__file","7.html.vue"]]);export{r as default};
