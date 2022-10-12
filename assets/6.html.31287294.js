import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as e,f as a}from"./app.ca0279c0.js";const i={},l=a(`<h1 id="\u4F7F\u7528virsh\u7BA1\u7406\u865A\u62DF\u673A" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528virsh\u7BA1\u7406\u865A\u62DF\u673A" aria-hidden="true">#</a> \u4F7F\u7528Virsh\u7BA1\u7406\u865A\u62DF\u673A</h1><h3 id="virsh\u7BA1\u7406\u865A\u62DF\u673A" tabindex="-1"><a class="header-anchor" href="#virsh\u7BA1\u7406\u865A\u62DF\u673A" aria-hidden="true">#</a> Virsh\u7BA1\u7406\u865A\u62DF\u673A</h3><ul><li>virsh\u7684\u6982\u8FF0</li><li>virsh\u7684\u547D\u4EE4</li></ul><h3 id="virsh-list" tabindex="-1"><a class="header-anchor" href="#virsh-list" aria-hidden="true">#</a> virsh list</h3><p><strong>\u5217\u51FA\u6240\u6709\u7684\u865A\u62DF\u673A\uFF0C\u865A\u62DF\u673A\u7684\u72B6\u6001\u6709\uFF088\uFF09\u79CD</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>runing \u662F\u8FD0\u884C\u72B6\u6001
idel \u662F\u7A7A\u95F2\u72B6\u6001
pause \u6682\u505C\u72B6\u6001
<span class="token function">shutdown</span> \u5173\u95ED\u72B6\u6001
crash \u865A\u62DF\u673A\u5D29\u574F\u72B6\u6001
daying \u5782\u6B7B\u72B6\u6001
shut off \u4E0D\u8FD0\u884C\u5B8C\u5168\u5173\u95ED
pmsuspended \u5BA2\u6237\u673A\u88AB\u5173\u6389\u7535\u6E90\u4E2D\u4E2D\u65AD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="domain" tabindex="-1"><a class="header-anchor" href="#domain" aria-hidden="true">#</a> domain</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token function">virsh</span> start \u542F\u52A8\u4E00\u4E2A\u865A\u62DF\u673A
    <span class="token function">virsh</span> <span class="token function">suspend</span> \u6682\u505C
    <span class="token function">virsh</span> resume \u6062\u590D
    <span class="token function">virsh</span> save \u5C06\u865A\u62DF\u673A\u7684\u5F53\u524D\u8FD0\u884C\u72B6\u6001\u4FDD\u5B58\u5230\u5BBF\u4E3B\u673A\u78C1\u76D8
    <span class="token function">virsh</span> restore \u6062\u590D\u865A\u62DF\u673A\u7684\u72B6\u6001
    <span class="token function">virsh</span> destory \u5220\u9664\u865A\u62DF\u673A\u8FD0\u884C\u72B6\u6001
    <span class="token function">virsh</span> <span class="token function">shutdown</span> \u5173\u95ED\u865A\u62DF\u673A
    <span class="token function">virsh</span> undefined \u53D6\u6D88\u4E00\u4E2A\u57DF
    <span class="token function">virsh</span> autostart \u968F\u7740\u5BBF\u4E3B\u673A\u542F\u52A8\u800C\u542F\u52A8
    <span class="token function">virsh</span> attach-disk <span class="token operator">&lt;</span>domain<span class="token operator">&gt;</span> <span class="token environment constant">PATH</span>/IMG_FILE <span class="token operator">&lt;</span>target<span class="token operator">&gt;</span> \u5411\u4E00\u4E2A\u57DF\u6DFB\u52A0\u4E00\u4E2A\u865A\u62DF\u78C1\u76D8
    <span class="token function">virsh</span> detach-disk <span class="token operator">&lt;</span>domain<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>target<span class="token operator">&gt;</span> \u79FB\u9664\u4E00\u4E2A\u57DF\u4E2D\u7684\u865A\u62DF\u786C\u76D8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="monitor" tabindex="-1"><a class="header-anchor" href="#monitor" aria-hidden="true">#</a> monitor</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token function">virsh</span> domblklist \u663E\u793A\u57DF\u7684\u865A\u62DF\u78C1\u76D8\u8BBE\u5907
    <span class="token function">virsh</span> domiflist \u663E\u793A\u57DF\u7684\u865A\u62DF\u7F51\u5361
    <span class="token function">virsh</span> domblkinfo <span class="token operator">&lt;</span>domain<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>device<span class="token operator">&gt;</span> \u663E\u793A\u57DF\u7684\u865A\u62DF\u78C1\u76D8\u8BBE\u5907\u7684\u8BE6\u7EC6\u4FE1\u606F
    <span class="token function">virsh</span> domblkstat <span class="token operator">&lt;</span>domain<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>device<span class="token operator">&gt;</span> \u663E\u793A\u57DF\u7684\u865A\u62DF\u78C1\u76D8\u8BBE\u5907\u7684\u72B6\u6001
    <span class="token function">virsh</span> domifstat <span class="token operator">&lt;</span>domain<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>interface<span class="token operator">&gt;</span> \u663E\u793A\u57DF\u7684\u865A\u62DF\u7F51\u5361\u7684\u72B6\u6001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="device-commands-\u8BBE\u5907\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#device-commands-\u8BBE\u5907\u547D\u4EE4" aria-hidden="true">#</a> device commands\uFF08\u8BBE\u5907\u547D\u4EE4\uFF09</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>*attach-device \uFF08demo file\uFF09\u6DFB\u52A0\u8BBE\u5907\u4ECEfile\u6587\u4EF6\u4E2D
*attach-interface \uFF08demo <span class="token builtin class-name">type</span> <span class="token builtin class-name">source</span> \uFF09\u6DFB\u52A0\u4E00\u4E2A\u63A5\u53E3
*update-device\uFF08demo file\uFF09\u66F4\u65B0\u8BBE\u5907\u6839\u636Efile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="virtual-network-commadns-\u7F51\u5361\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#virtual-network-commadns-\u7F51\u5361\u547D\u4EE4" aria-hidden="true">#</a> virtual network commadns\uFF08\u7F51\u5361\u547D\u4EE4\uFF09</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>*net-autostart <span class="token punctuation">(</span>network<span class="token punctuation">)</span> \u81EA\u52A8\u542F\u52A8\u7F51\u5361\uFF08default\uFF09
*net-create \uFF08file\uFF09 \u628A\u914D\u7F6E\u52A0\u8F7D\u5230\u6587\u4EF6
*net-destory <span class="token punctuation">(</span> network <span class="token punctuation">)</span>\u5173\u95ED\u7F51\u5361
*net-dumpxml\uFF08default\uFF09 \u628A\u7F51\u5361\u914D\u7F6E\u52A0\u8F7D\u5230\u6587\u4EF6
*net-edit\uFF08default\uFF09 \u7F16\u8F91\u7F51\u5361\u4FE1\u606F
*net-info\uFF08default\uFF09 \u7F51\u5361\u4FE1\u606F
*net-list \u663E\u793A\u7F51\u5361
*net-uuid \uFF08default\uFF09\u5F97\u5230\u7F51\u5361\u7684id
*net-name\uFF08id\uFF09\u5F97\u5230\u7F51\u5361\u7684\u540D\u5B57
*net-start \uFF08default\uFF09\u5F00\u542F\u7F51\u5361
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="interface-commands" tabindex="-1"><a class="header-anchor" href="#interface-commands" aria-hidden="true">#</a> Interface commands</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>*iface-define\uFF08file\uFF09\u5B9A\u4E49\u4E00\u4E2A\u63A5\u53E3\u4ECE\u6587\u4EF6\u91CC\u9762
*iface-dumpxml \uFF08lo\uFF09\u663E\u793A\u63A5\u53E3I\u7684\u4FE1\u606F
*iface-edit\uFF08lo\uFF09 \u7F16\u8F91\u63A5\u53E3
*iface-list \u5217\u51FA\u6240\u6709\u7684\u63A5\u53E3
*iface-name \uFF08mac\uFF09 \u6839\u636Emac\u5F97\u5230\u540D\u5B57
*iface-mac<span class="token punctuation">(</span>lo<span class="token punctuation">)</span> \u6839\u636E\u540D\u5B57\u5F97\u5230mac
*iface-start\uFF08lo\uFF09 \u5F00\u542F\u63A5\u53E3
*iface-unbriged \u89E3\u7ED1\u5B9A \u7F51\u6865
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="storage-pppl-commands" tabindex="-1"><a class="header-anchor" href="#storage-pppl-commands" aria-hidden="true">#</a> STORAGE pppl commands</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>*pool-auto \uFF08pool\uFF09\u6807\u8BB0\u6C60\u81EA\u52A8\u542F\u52A8
*pool-build\uFF08pool\uFF09\u5EFA\u9020\u4E00\u4E2A\u6C60
*pool-create\uFF08file\uFF09\u6839\u636E\u6587\u4EF6\u521B\u5EFA\u6C60
*pool-define\uFF08file\uFF09\u5B9A\u4E49\u4F46\u662F\u4E0D\u5F00\u542F
*pool-destory\uFF08pool\uFF09\u9500\u6BC1\u6C60\uFF0C\u4EE5\u540E\u80FD\u56DE\u590D
*pool-delete\uFF08pool\uFF09\u5220\u9664\u6C60\uFF0C\u4EE5\u540E\u4E0D\u80FD\u6062\u590D
*pool-dumpxml\uFF08pool\uFF09\u67E5\u770B\u6C60\u7684\u5B9A\u4E49\u6587\u4EF6
*pool-edit\uFF08pool\uFF09\u7F16\u8F91\u6C60\u7684\u5B9A\u4E49\u6587\u4EF6
*pool-info\u6C60\u7684\u4FE1\u606F
*pool-list\u7684\u5217\u8868
*pool-name\uFF08id\uFF09\u6839\u636Eid\u5F97\u5230name
*pool-id\uFF08name\uFF09\u6839\u636Ename\u5F97\u5230id
*pool-start\uFF08poop\uFF09\u5F00\u542F\u6C60
*pool-uuid \uFF08pool\uFF09 \u8FD4\u56DE\u4E00\u4E2A\u6C60\u7684uuid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="volume-commads" tabindex="-1"><a class="header-anchor" href="#volume-commads" aria-hidden="true">#</a> VOLUME commads</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>*vol-delete\uFF08pool\uFF09\u5377\u7684\u5220\u9664
*vol-upload\uFF08pool\uFF09 \u5377\u7684\u52A0\u8F7D
*vol-list\uFF08pool\uFF09\u5217\u51FA\u5377
*vol-info\uFF08default\uFF09\u5377\u7684\u4FE1\u606F
*vol-name\uFF08path\uFF09\u5F97\u5230\u5377\u7684\u540D\u5B57

\uFF08\u5FEB\u7167\uFF09\uFF08secret\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B\uFF1A</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">1</span>,\u67E5\u770B\u8FD0\u884C\u7684\u865A\u62DF\u673A
$ <span class="token function">virsh</span> list

<span class="token number">2</span>,\u67E5\u770B\u6240\u6709\u7684\u865A\u62DF\u673A\uFF08\u5173\u95ED\u548C\u8FD0\u884C\u7684\u865A\u62DF\u673A\uFF09
$ <span class="token function">virsh</span> list \u2013all

<span class="token number">3</span>,\u8FDE\u63A5\u865A\u62DF\u673A
$ <span class="token function">virsh</span> console +\u57DF\u540D\uFF08\u865A\u62DF\u673A\u7684\u540D\u79F0\uFF09

<span class="token number">4</span>\uFF0C\u9000\u51FA\u865A\u62DF\u673A
ctrl+<span class="token punctuation">]</span>

<span class="token number">5</span>,\u5173\u95ED\u865A\u62DF\u673A
$ <span class="token function">virsh</span> <span class="token function">shutdown</span> +\u57DF\u540D
$ <span class="token function">virsh</span> destroy +\u57DF\u540D
\u8FD9\u79CD\u65B9\u5F0F\u7684\u5173\u95ED\uFF0C\u662F\u4E00\u79CD\u5220\u9664\u7684\u65B9\u5F0F\uFF0C\u53EA\u662F\u5728virsh list\u4E2D\u5220\u9664\u4E86\u8BE5\u865A\u62DF\u673A\u3002

<span class="token number">6</span>\uFF0C\u6302\u8D77\u865A\u62DF\u673A
$ <span class="token function">virsh</span> <span class="token function">suspend</span> +\u57DF\u540D

<span class="token number">7</span>\uFF0C\u6062\u590D\u88AB\u6302\u8D77\u7684\u865A\u62DF\u673A
$ <span class="token function">virsh</span> resume +\u57DF\u540D

<span class="token number">8</span>\uFF0C\u5B50\u673A\u968F\u5BBF\u4E3B\u4E3B\u673A\uFF08\u6BCD\u673A\uFF09\u542F\u52A8\u800C\u542F\u52A8
$ <span class="token function">virsh</span> autostart + \u57DF\u540D

<span class="token number">9</span>\uFF0C\u53D6\u6D88\u81EA\u52A8\u542F\u52A8
$ <span class="token function">virsh</span> auotstart \u2013disable +\u57DF\u540D

<span class="token number">10</span>\uFF0C\u5F7B\u5E95\u5220\u9664\u865A\u62DF\u673A
\u5220\u9664\u865A\u62DF\u673A <span class="token function">virsh</span> destroy +\u57DF\u540D
\u89E3\u9664\u6807\u8BB0   <span class="token function">virsh</span> undefine +\u57DF\u540D
\u5220\u9664\u865A\u62DF\u673A\u6587\u4EF6

<span class="token number">11</span>,\u542F\u52A8\u865A\u62DF\u673A\u5E76\u8FDB\u5165\u8BE5\u865A\u62DF\u673A
$ <span class="token function">virsh</span> start \u57DF\u540D \u2013console

<span class="token number">12</span>.\u67E5\u770B\u865A\u62DF\u673A\u4FE1\u606F
$ <span class="token function">virsh</span> dominfo \u57DF\u540D
\u91CD\u542F
$ <span class="token function">virsh</span> <span class="token function">reboot</span> \u57DF\u540D
\u67E5\u770B\u865A\u62DF\u673A\u4FE1\u606F
$ <span class="token function">virsh</span> dominfo \u57DF\u540D
\u67E5\u770B\u865A\u62DF\u673A\u78C1\u76D8
$ <span class="token function">virsh</span> domblklist \u57DF\u540D
\u67E5\u770B\u865A\u62DF\u7F51\u5361
$ <span class="token function">virsh</span> domiflist \u57DF\u540D
\u66F4\u6539\u865A\u62DF\u673A\u914D\u7F6E,libvirt\u4F7F\u7528xml\u6587\u4EF6\u6765\u5B9A\u4E49\u865A\u62DF\u673A\u914D\u7F6E
$ <span class="token function">virsh</span> edit \u57DF\u540D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),d=[l];function r(c,o){return s(),e("div",null,d)}const u=n(i,[["render",r],["__file","6.html.vue"]]);export{u as default};
