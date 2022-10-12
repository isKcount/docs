import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as n,f as a}from"./app.ca0279c0.js";const i={},l=a(`<h1 id="centos7\u5B89\u88C5npm" tabindex="-1"><a class="header-anchor" href="#centos7\u5B89\u88C5npm" aria-hidden="true">#</a> Centos7\u5B89\u88C5NPM</h1><p>1.\u5B89\u88C5gcc</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum <span class="token function">install</span> gcc gcc-c++ <span class="token parameter variable">-y</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.\u4E0B\u8F7Dnode\u56FD\u5185\u955C\u50CF\uFF08\u63A8\u8350\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">wget</span> https://npm.taobao.org/mirrors/node/v10.14.1/node-v10.14.1-linux-x64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.\u89E3\u538B\u5E76\u91CD\u547D\u540D\u6587\u4EF6\u5939</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">tar</span> <span class="token parameter variable">-xvf</span>  node-v10.14.1-linux-x64.tar.gz
$ <span class="token function">mv</span> node-v10.14.1-linux-x64  /usr/local/node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>4.\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">vi</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u6587\u4EF6\u6700\u540E\u6DFB\u52A0\u4EE5\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">NODE_HOME</span><span class="token operator">=</span>/usr/local/node  
$ <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$NODE_HOME</span>/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>5.\u5237\u65B0\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6.\u9A8C\u8BC1\u7ED3\u679C\uFF1A</p><p>node -v</p><p>npm -v</p>`,16),c=[l];function r(d,o){return e(),n("div",null,c)}const u=s(i,[["render",r],["__file","10.html.vue"]]);export{u as default};