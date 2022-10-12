import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as i,a as e,b as n,d as a,f as o,r}from"./app.ca0279c0.js";const d={},l=o(`<h1 id="git\u5206\u652F-\u8FDC\u7A0B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#git\u5206\u652F-\u8FDC\u7A0B\u5206\u652F" aria-hidden="true">#</a> Git\u5206\u652F-\u8FDC\u7A0B\u5206\u652F</h1><p><strong>\u8FDC\u7A0B\u5F15\u7528\u662F\u5BF9\u8FDC\u7A0B\u4ED3\u5E93\u7684\u5F15\u7528\uFF08\u6307\u9488\uFF09</strong>\uFF0C\u5305\u62EC\u5206\u652F\u3001\u6807\u7B7E\u7B49\u7B49\u3002</p><blockquote><p>\u8FDC\u7A0B\u5206\u652F\u672C\u8D28\u4E0A\u4E5F\u662F\u4E00\u4E2A\u6307\u9488\uFF0C\u6307\u5411\u8FDC\u7A0B\u5730\u5740</p></blockquote><h3 id="\u67E5\u770B\u8FDC\u7A0B\u5F15\u7528\u5217\u8868\u4E0E\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u8FDC\u7A0B\u5F15\u7528\u5217\u8868\u4E0E\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u8FDC\u7A0B\u5F15\u7528\u5217\u8868\u4E0E\u4FE1\u606F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> ls-remote <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token comment"># \u8FDC\u7A0B\u5F15\u7528\u7684\u5B8C\u6574\u5217\u8868</span>
<span class="token function">git</span> remote show <span class="token operator">&lt;</span>remote<span class="token operator">&gt;</span> <span class="token comment"># \u8FDC\u7A0B\u5206\u652F\u7684\u66F4\u591A\u4FE1\u606F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4E24\u884C\u547D\u4EE4\u6BD4\u8F83\u5C11\u7528\uFF0C\u66F4\u5E38\u89C1\u7684\u505A\u6CD5\u662F\u5229\u7528\u8FDC\u7A0B\u8DDF\u8E2A\u5206\u652F\u3002</p><h3 id="\u8FDC\u7A0B\u8DDF\u8E2A\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u8DDF\u8E2A\u5206\u652F" aria-hidden="true">#</a> \u8FDC\u7A0B\u8DDF\u8E2A\u5206\u652F</h3><p><strong>\u8FDC\u7A0B\u8DDF\u8E2A\u5206\u652F\u662F\u8FDC\u7A0B\u5206\u652F\u72B6\u6001\u7684\u5F15\u7528</strong>\u3002\u5B83\u4EEC\u662F\u4F60\u65E0\u6CD5\u79FB\u52A8\u7684\u672C\u5730\u5F15\u7528\u3002\u4E00\u65E6\u4F60\u8FDB\u884C\u4E86\u7F51\u7EDC\u901A\u4FE1\uFF0C Git \u5C31\u4F1A\u4E3A\u4F60\u79FB\u52A8\u5B83\u4EEC\u4EE5<strong>\u7CBE\u786E\u53CD\u6620\u8FDC\u7A0B\u4ED3\u5E93\u7684\u72B6\u6001</strong>\u3002\u8BF7\u5C06\u5B83\u4EEC<strong>\u770B\u505A\u4E66\u7B7E</strong>\uFF0C \u8FD9\u6837\u53EF\u4EE5\u63D0\u9192\u4F60\u8BE5\u5206\u652F\u5728\u8FDC\u7A0B\u4ED3\u5E93\u4E2D\u7684\u4F4D\u7F6E\u5C31\u662F\u4F60\u6700\u540E\u4E00\u6B21\u8FDE\u63A5\u5230\u5B83\u4EEC\u7684\u4F4D\u7F6E\u3002</p><p>\u5B83\u4EEC<strong>\u4EE5 <code>&lt;remote&gt;/&lt;branch&gt;</code> \u7684\u5F62\u5F0F\u547D\u540D</strong>\u3002 \u4F8B\u5982\uFF0C\u5982\u679C\u4F60\u60F3\u8981<strong>\u67E5\u770B\u6700\u540E\u4E00\u6B21\u4E0E\u8FDC\u7A0B\u4ED3\u5E93 <code>origin</code> \u901A\u4FE1\u65F6 <code>master</code> \u5206\u652F\u7684\u72B6\u6001</strong>\uFF0C\u4F60\u53EF\u4EE5\u67E5\u770B <code>origin/master</code> \u5206\u652F\u3002 \u4F60\u4E0E\u540C\u4E8B\u5408\u4F5C\u89E3\u51B3\u4E00\u4E2A\u95EE\u9898\u5E76\u4E14\u4ED6\u4EEC\u63A8\u9001\u4E86\u4E00\u4E2A <code>iss53</code> \u5206\u652F\uFF0C\u4F60\u53EF\u80FD\u6709\u81EA\u5DF1\u7684\u672C\u5730 <code>iss53</code> \u5206\u652F\uFF0C \u7136\u800C\u5728\u670D\u52A1\u5668\u4E0A\u7684\u5206\u652F\u4F1A\u4EE5 <code>origin/iss53</code> \u6765\u8868\u793A\u3002</p><p>\u8FD9\u53EF\u80FD\u6709\u4E00\u70B9\u513F\u96BE\u4EE5\u7406\u89E3\uFF0C\u8BA9\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u4F8B\u5B50\u3002 \u5047\u8BBE\u4F60\u7684\u7F51\u7EDC\u91CC\u6709\u4E00\u4E2A\u5728 <code>git.ourcompany.com</code> \u7684 Git \u670D\u52A1\u5668\u3002 \u5982\u679C\u4F60\u4ECE\u8FD9\u91CC\u514B\u9686\uFF0CGit \u7684 <code>clone</code> \u547D\u4EE4\u4F1A\u4E3A\u4F60\u81EA\u52A8\u5C06\u5176\u547D\u540D\u4E3A <code>origin</code>\uFF0C\u62C9\u53D6\u5B83\u7684\u6240\u6709\u6570\u636E\uFF0C \u521B\u5EFA\u4E00\u4E2A\u6307\u5411\u5B83\u7684 <code>master</code> \u5206\u652F\u7684\u6307\u9488\uFF0C\u5E76\u4E14<strong>\u5728\u672C\u5730\u5C06\u5176\u547D\u540D\u4E3A <code>origin/master</code></strong>\u3002 Git \u4E5F\u4F1A\u7ED9\u4F60\u4E00\u4E2A\u4E0E origin \u7684 <code>master</code> \u5206\u652F\u5728\u6307\u5411\u540C\u4E00\u4E2A\u5730\u65B9\u7684\u672C\u5730 <code>master</code> \u5206\u652F\uFF0C\u8FD9\u6837\u4F60\u5C31\u6709\u5DE5\u4F5C\u7684\u57FA\u7840\u3002</p><p><mark><strong>\u7B14\u8BB0\uFF1A\u4ECE\u8FDC\u7A0B\u514B\u9686\u4E0B\u6765\u7684\u4ED3\u5E93\u6709\u4E00\u4E2A\u53EB<code>origin/master</code>\u7684\u8FDC\u7A0B\u8DDF\u8E2A\u5206\u652F \u548C \u4E00\u4E2A\u672C\u5730\u7684<code>master</code>\u5206\u652F</strong></mark></p><blockquote><p>\u7B14\u8BB0\uFF1A\u201Corigin\u201D \u5E76\u65E0\u7279\u6B8A\u542B\u4E49\u8FDC\u7A0B\u4ED3\u5E93\u540D\u5B57 \u201Corigin\u201D \u4E0E\u5206\u652F\u540D\u5B57 \u201Cmaster\u201D \u4E00\u6837\uFF0C\u5728 Git \u4E2D\u5E76\u6CA1\u6709\u4EFB\u4F55\u7279\u522B\u7684\u542B\u4E49\u4E00\u6837\u3002 \u540C\u65F6 \u201Cmaster\u201D \u662F\u5F53\u4F60\u8FD0\u884C <code>git init</code> \u65F6\u9ED8\u8BA4\u7684\u8D77\u59CB\u5206\u652F\u540D\u5B57\uFF0C\u539F\u56E0\u4EC5\u4EC5\u662F\u5B83\u7684\u5E7F\u6CDB\u4F7F\u7528\uFF0C \u201Corigin\u201D \u662F\u5F53\u4F60\u8FD0\u884C <code>git clone</code> \u65F6\u9ED8\u8BA4\u7684\u8FDC\u7A0B\u4ED3\u5E93\u540D\u5B57\u3002 \u5982\u679C\u4F60\u8FD0\u884C <code>git clone -o booyah</code>\uFF0C\u90A3\u4E48\u4F60\u9ED8\u8BA4\u7684\u8FDC\u7A0B\u5206\u652F\u540D\u5B57\u5C06\u4F1A\u662F <code>booyah/master</code>\u3002</p></blockquote><p><img src="https://git-scm.com/book/en/v2/images/remote-branches-1.png" alt="\u514B\u9686\u4E4B\u540E\u7684\u670D\u52A1\u5668\u4E0E\u672C\u5730\u4ED3\u5E93\u3002" loading="lazy"></p><p align="center">\u56FE1. \u514B\u9686\u4E4B\u540E\u7684\u670D\u52A1\u5668\u4E0E\u672C\u5730\u4ED3\u5E93 \u25B2</p><p>\u5982\u679C\u4F60\u5728\u672C\u5730\u7684 <code>master</code> \u5206\u652F\u505A\u4E86\u4E00\u4E9B\u5DE5\u4F5C\uFF0C\u5728\u540C\u4E00\u6BB5\u65F6\u95F4\u5185\u6709\u5176\u4ED6\u4EBA\u63A8\u9001\u63D0\u4EA4\u5230 <code>git.ourcompany.com</code> \u5E76\u4E14\u66F4\u65B0\u4E86\u5B83\u7684 <code>master</code> \u5206\u652F\uFF0C\u8FD9\u5C31\u662F\u8BF4\u4F60\u4EEC\u7684\u63D0\u4EA4\u5386\u53F2\u5DF2\u8D70\u5411\u4E0D\u540C\u7684\u65B9\u5411\u3002 \u5373\u4FBF\u8FD9\u6837\uFF0C\u53EA\u8981\u4F60\u4FDD\u6301\u4E0D\u4E0E <code>origin</code> \u670D\u52A1\u5668\u8FDE\u63A5\uFF08\u5E76\u62C9\u53D6\u6570\u636E\uFF09\uFF0C\u4F60\u7684 <code>origin/master</code> \u6307\u9488\u5C31\u4E0D\u4F1A\u79FB\u52A8\u3002</p><p><img src="https://git-scm.com/book/en/v2/images/remote-branches-2.png" alt="\u672C\u5730\u4E0E\u8FDC\u7A0B\u7684\u5DE5\u4F5C\u53EF\u4EE5\u5206\u53C9\u3002" loading="lazy"></p><p align="center">\u56FE2. \u672C\u5730\u4E0E\u8FDC\u7A0B\u7684\u5DE5\u4F5C\u53EF\u4EE5\u5206\u53C9 \u25B2</p><p>\u5982\u679C\u8981\u4E0E\u7ED9\u5B9A\u7684\u8FDC\u7A0B\u4ED3\u5E93\u540C\u6B65\u6570\u636E\uFF0C\u8FD0\u884C <code>git fetch &lt;remote&gt;</code> \u547D\u4EE4\uFF08\u5728\u672C\u4F8B\u4E2D\u4E3A <code>git fetch origin</code>\uFF09\u3002 \u8FD9\u4E2A\u547D\u4EE4\u67E5\u627E \u201Corigin\u201D \u662F\u54EA\u4E00\u4E2A\u670D\u52A1\u5668\uFF08\u5728\u672C\u4F8B\u4E2D\uFF0C\u5B83\u662F <code>git.ourcompany.com</code>\uFF09\uFF0C \u4ECE\u4E2D\u6293\u53D6\u672C\u5730\u6CA1\u6709\u7684\u6570\u636E\uFF0C\u5E76\u4E14\u66F4\u65B0\u672C\u5730\u6570\u636E\u5E93\uFF0C\u79FB\u52A8 <code>origin/master</code> \u6307\u9488\u5230\u66F4\u65B0\u4E4B\u540E\u7684\u4F4D\u7F6E\u3002</p><p><img src="https://git-scm.com/book/en/v2/images/remote-branches-3.png" alt=" \u66F4\u65B0\u4F60\u7684\u8FDC\u7A0B\u4ED3\u5E93\u5F15\u7528\u3002" loading="lazy"></p><p align="center">\u56FE3. git fetch \u66F4\u65B0\u4F60\u7684\u8FDC\u7A0B\u8DDF\u8E2A\u5206\u652F \u25B2</p><p><mark>\u7B14\u8BB0: \u672C\u5730\u7684 master \u5206\u652F \u53EF\u80FD \u548C \u8FDC\u7A0B\u8DDF\u8E2A\u5206\u652F origin/master \u5206\u53C9</mark></p>`,21),p=e("code",null,"git.team1.ourcompany.com",-1),u=e("code",null,"git remote add",-1),m={href:"https://git-scm.com/book/zh/v2/ch00/ch02-git-basics-chapter",target:"_blank",rel:"noopener noreferrer"},g=e("strong",null,[n("\u547D\u540D\u4E3A "),e("code",null,"teamone"),n("\uFF0C\u5C06\u5176\u4F5C\u4E3A\u5B8C\u6574 URL \u7684\u7F29\u5199")],-1),h=e("mark",null,"\u8FDC\u7A0B\u4ED3\u5E93\u540D\u672C\u8D28\u4E0A\u662F\u8FDC\u7A0BURL\u7684\u7F29\u5199",-1),v=o(`<p><img src="https://git-scm.com/book/en/v2/images/remote-branches-4.png" alt="\u6DFB\u52A0\u53E6\u4E00\u4E2A\u8FDC\u7A0B\u4ED3\u5E93\u3002" loading="lazy"></p><p align="center">\u56FE4. \u6DFB\u52A0\u53E6\u4E00\u4E2A\u8FDC\u7A0B\u4ED3\u5E93 \u25B2</p><p>\u73B0\u5728\uFF0C\u53EF\u4EE5\u8FD0\u884C <code>git fetch teamone</code> \u6765\u6293\u53D6\u8FDC\u7A0B\u4ED3\u5E93 <code>teamone</code> \u6709\u800C\u672C\u5730\u6CA1\u6709\u7684\u6570\u636E\u3002 \u56E0\u4E3A\u90A3\u53F0\u670D\u52A1\u5668\u4E0A\u73B0\u6709\u7684\u6570\u636E\u662F <code>origin</code> \u670D\u52A1\u5668\u4E0A\u7684\u4E00\u4E2A\u5B50\u96C6\uFF0C \u6240\u4EE5 Git \u5E76\u4E0D\u4F1A\u6293\u53D6\u6570\u636E\u800C\u662F\u4F1A\u8BBE\u7F6E\u8FDC\u7A0B\u8DDF\u8E2A\u5206\u652F <code>teamone/master</code> \u6307\u5411 <code>teamone</code> \u7684 <code>master</code> \u5206\u652F\u3002</p><p><img src="https://git-scm.com/book/en/v2/images/remote-branches-5.png" alt="\u8FDC\u7A0B\u8DDF\u8E2A\u5206\u652F \u3002" loading="lazy"></p><p align="center">\u56FE5. \u8FDC\u7A0B\u8DDF\u8E2A\u5206\u652F teamone/master \u25B2</p><h3 id="\u63A8\u9001" tabindex="-1"><a class="header-anchor" href="#\u63A8\u9001" aria-hidden="true">#</a> \u63A8\u9001</h3><p>\u5F53\u4F60\u60F3\u8981\u516C\u5F00\u5206\u4EAB\u4E00\u4E2A\u5206\u652F\u65F6\uFF0C\u9700\u8981\u5C06\u5176\u63A8\u9001\u5230\u6709\u5199\u5165\u6743\u9650\u7684\u8FDC\u7A0B\u4ED3\u5E93\u4E0A\u3002 \u672C\u5730\u7684\u5206\u652F\u5E76\u4E0D\u4F1A\u81EA\u52A8\u4E0E\u8FDC\u7A0B\u4ED3\u5E93\u540C\u6B65\u2014\u2014\u4F60\u5FC5\u987B\u663E\u5F0F\u5730\u63A8\u9001\u60F3\u8981\u5206\u4EAB\u7684\u5206\u652F\u3002 \u8FD9\u6837\uFF0C\u4F60\u5C31\u53EF\u4EE5\u628A\u4E0D\u613F\u610F\u5206\u4EAB\u7684\u5185\u5BB9\u653E\u5230\u79C1\u4EBA\u5206\u652F\u4E0A\uFF0C\u800C\u5C06\u9700\u8981\u548C\u522B\u4EBA\u534F\u4F5C\u7684\u5185\u5BB9\u63A8\u9001\u5230\u516C\u5F00\u5206\u652F\u3002</p><p>\u5982\u679C\u5E0C\u671B\u548C\u522B\u4EBA\u4E00\u8D77\u5728\u540D\u4E3A <code>serverfix</code> \u7684\u5206\u652F\u4E0A\u5DE5\u4F5C\uFF0C\u4F60\u53EF\u4EE5\u50CF\u63A8\u9001\u7B2C\u4E00\u4E2A\u5206\u652F\u90A3\u6837\u63A8\u9001\u5B83\u3002 \u8FD0\u884C <code>git push &lt;remote&gt; &lt;branch&gt;</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin serverfix
Counting objects: <span class="token number">24</span>, done.
Delta compression using up to <span class="token number">8</span> threads.
Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">15</span>/15<span class="token punctuation">)</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">24</span>/24<span class="token punctuation">)</span>, <span class="token number">1.91</span> KiB <span class="token operator">|</span> <span class="token number">0</span> bytes/s, done.
Total <span class="token number">24</span> <span class="token punctuation">(</span>delta <span class="token number">2</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>
To https://github.com/schacon/simplegit
 * <span class="token punctuation">[</span>new branch<span class="token punctuation">]</span>      serverfix -<span class="token operator">&gt;</span> serverfix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),b=e("strong",null,[n("Git \u81EA\u52A8\u5C06 "),e("code",null,"serverfix"),n(" \u5206\u652F\u540D\u5B57\u5C55\u5F00\u4E3A "),e("code",null,"refs/heads/serverfix:refs/heads/serverfix"),n("\uFF0C")],-1),k=e("code",null,"serverfix",-1),f=e("code",null,"serverfix",-1),x={href:"https://git-scm.com/book/zh/v2/ch00/ch10-git-internals",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"refs/heads/",-1),y=e("code",null,"git push origin serverfix:serverfix",-1),G=e("strong",null,[n("\u63A8\u9001\u672C\u5730\u7684 "),e("code",null,"serverfix"),n(" \u5206\u652F\uFF0C\u5C06\u5176\u4F5C\u4E3A\u8FDC\u7A0B\u4ED3\u5E93\u7684 "),e("code",null,"serverfix"),n(" \u5206\u652F")],-1),w=e("h4",{id:"\u91CD\u547D\u540D\u8FDC\u7A0B\u4ED3\u5E93\u4E0A\u7684\u5206\u652F\u540D",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u91CD\u547D\u540D\u8FDC\u7A0B\u4ED3\u5E93\u4E0A\u7684\u5206\u652F\u540D","aria-hidden":"true"},"#"),n(" \u91CD\u547D\u540D\u8FDC\u7A0B\u4ED3\u5E93\u4E0A\u7684\u5206\u652F\u540D")],-1),$=e("p",null,[n("\u5982\u679C\u5E76\u4E0D\u60F3\u8BA9\u8FDC\u7A0B\u4ED3\u5E93\u4E0A\u7684\u5206\u652F\u53EB\u505A "),e("code",null,"serverfix"),n("\uFF0C\u53EF\u4EE5\u8FD0\u884C "),e("code",null,"git push origin serverfix:awesomebranch"),n(" \u6765\u5C06\u672C\u5730\u7684 "),e("code",null,"serverfix"),n(" \u5206\u652F\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\u4E0A\u7684 "),e("code",null,"awesomebranch"),n(" \u5206\u652F\u3002")],-1),B=e("th",null,"Note",-1),z=e("code",null,"git config --global credential.helper cache",-1),T={href:"https://git-scm.com/book/zh/v2/ch00/_credential_caching",target:"_blank",rel:"noopener noreferrer"},j=e("tbody",null,[e("tr",null,[e("td"),e("td")])],-1),N=o(`<p>\u4E0B\u4E00\u6B21\u5176\u4ED6\u534F\u4F5C\u8005\u4ECE\u670D\u52A1\u5668\u4E0A\u6293\u53D6\u6570\u636E\u65F6\uFF0C\u4ED6\u4EEC\u4F1A\u5728\u672C\u5730\u751F\u6210\u4E00\u4E2A\u8FDC\u7A0B\u5206\u652F <code>origin/serverfix</code>\uFF0C\u6307\u5411\u670D\u52A1\u5668\u7684 <code>serverfix</code> \u5206\u652F\u7684\u5F15\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> fetch origin
remote: Counting objects: <span class="token number">7</span>, done.
remote: Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">2</span>/2<span class="token punctuation">)</span>, done.
remote: Total <span class="token number">3</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">3</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>
Unpacking objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">3</span>/3<span class="token punctuation">)</span>, done.
From https://github.com/schacon/simplegit
 * <span class="token punctuation">[</span>new branch<span class="token punctuation">]</span>      serverfix    -<span class="token operator">&gt;</span> origin/serverfix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u7279\u522B\u6CE8\u610F\u7684\u4E00\u70B9\u662F\u5F53\u6293\u53D6\u5230\u65B0\u7684\u8FDC\u7A0B\u8DDF\u8E2A\u5206\u652F\u65F6\uFF0C\u672C\u5730\u4E0D\u4F1A\u81EA\u52A8\u751F\u6210\u4E00\u4EFD\u53EF\u7F16\u8F91\u7684\u526F\u672C\uFF08\u62F7\u8D1D\uFF09\u3002 \u6362\u4E00\u53E5\u8BDD\u8BF4\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u4F1A\u6709\u4E00\u4E2A\u65B0\u7684 <code>serverfix</code> \u5206\u652F\u2014\u2014\u53EA\u6709\u4E00\u4E2A\u4E0D\u53EF\u4EE5\u4FEE\u6539\u7684 <code>origin/serverfix</code> \u6307\u9488\u3002</p><p>\u53EF\u4EE5\u8FD0\u884C <code>git merge origin/serverfix</code> \u5C06\u8FD9\u4E9B\u5DE5\u4F5C\u5408\u5E76\u5230\u5F53\u524D\u6240\u5728\u7684\u5206\u652F\u3002 \u5982\u679C\u60F3\u8981\u5728\u81EA\u5DF1\u7684 <code>serverfix</code> \u5206\u652F\u4E0A\u5DE5\u4F5C\uFF0C\u53EF\u4EE5\u5C06\u5176\u5EFA\u7ACB\u5728\u8FDC\u7A0B\u8DDF\u8E2A\u5206\u652F\u4E4B\u4E0A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> serverfix origin/serverfix
Branch serverfix <span class="token builtin class-name">set</span> up to track remote branch serverfix from origin.
Switched to a new branch <span class="token string">&#39;serverfix&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4F1A\u7ED9\u4F60\u4E00\u4E2A\u7528\u4E8E\u5DE5\u4F5C\u7684\u672C\u5730\u5206\u652F\uFF0C\u5E76\u4E14\u8D77\u70B9\u4F4D\u4E8E <code>origin/serverfix</code>\u3002</p><h3 id="\u8DDF\u8E2A\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u8DDF\u8E2A\u5206\u652F" aria-hidden="true">#</a> \u8DDF\u8E2A\u5206\u652F</h3><p><strong>\u4ECE\u4E00\u4E2A\u8FDC\u7A0B\u8DDF\u8E2A\u5206\u652F\u68C0\u51FA\u4E00\u4E2A\u672C\u5730\u5206\u652F\u4F1A\u81EA\u52A8\u521B\u5EFA\u6240\u8C13\u7684\u201C\u8DDF\u8E2A\u5206\u652F\u201D\uFF08\u5B83\u8DDF\u8E2A\u7684\u5206\u652F\u53EB\u505A\u201C\u4E0A\u6E38\u5206\u652F\u201D\uFF09</strong>\u3002 <strong>\u8DDF\u8E2A\u5206\u652F\u662F\u4E0E\u8FDC\u7A0B\u5206\u652F\u6709\u76F4\u63A5\u5173\u7CFB\u7684\u672C\u5730\u5206\u652F</strong>\u3002 \u5982\u679C\u5728\u4E00\u4E2A\u8DDF\u8E2A\u5206\u652F\u4E0A\u8F93\u5165 <code>git pull</code>\uFF0CGit \u80FD\u81EA\u52A8\u5730\u8BC6\u522B\u53BB\u54EA\u4E2A\u670D\u52A1\u5668\u4E0A\u6293\u53D6\u3001\u5408\u5E76\u5230\u54EA\u4E2A\u5206\u652F\u3002</p><p>\u5F53\u514B\u9686\u4E00\u4E2A\u4ED3\u5E93\u65F6\uFF0C\u5B83\u901A\u5E38\u4F1A\u81EA\u52A8\u5730\u521B\u5EFA\u4E00\u4E2A\u8DDF\u8E2A <code>origin/master</code> \u7684 <code>master</code> \u5206\u652F\u3002 \u7136\u800C\uFF0C\u5982\u679C\u4F60\u613F\u610F\u7684\u8BDD\u53EF\u4EE5\u8BBE\u7F6E\u5176\u4ED6\u7684\u8DDF\u8E2A\u5206\u652F\uFF0C\u6216\u662F\u4E00\u4E2A\u5728\u5176\u4ED6\u8FDC\u7A0B\u4ED3\u5E93\u4E0A\u7684\u8DDF\u8E2A\u5206\u652F\uFF0C\u53C8\u6216\u8005\u4E0D\u8DDF\u8E2A <code>master</code> \u5206\u652F\u3002 \u6700\u7B80\u5355\u7684\u5B9E\u4F8B\u5C31\u662F\u50CF\u4E4B\u524D\u770B\u5230\u7684\u90A3\u6837\uFF0C\u8FD0\u884C <code>git checkout -b &lt;branch&gt; &lt;remote&gt;/&lt;branch&gt;</code>\u3002 \u8FD9\u662F\u4E00\u4E2A\u5341\u5206\u5E38\u7528\u7684\u64CD\u4F5C\u6240\u4EE5 Git \u63D0\u4F9B\u4E86 <code>--track</code> \u5FEB\u6377\u65B9\u5F0F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">--track</span> origin/serverfix
Branch serverfix <span class="token builtin class-name">set</span> up to track remote branch serverfix from origin.
Switched to a new branch <span class="token string">&#39;serverfix&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E\u8FD9\u4E2A\u64CD\u4F5C\u592A\u5E38\u7528\u4E86\uFF0C\u8BE5\u6377\u5F84\u672C\u8EAB\u8FD8\u6709\u4E00\u4E2A\u6377\u5F84\u3002 \u5982\u679C\u4F60\u5C1D\u8BD5\u68C0\u51FA\u7684\u5206\u652F (a) \u4E0D\u5B58\u5728\u4E14 (b) \u521A\u597D\u53EA\u6709\u4E00\u4E2A\u540D\u5B57\u4E0E\u4E4B\u5339\u914D\u7684\u8FDC\u7A0B\u5206\u652F\uFF0C\u90A3\u4E48 Git \u5C31\u4F1A\u4E3A\u4F60\u521B\u5EFA\u4E00\u4E2A\u8DDF\u8E2A\u5206\u652F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout serverfix
Branch serverfix <span class="token builtin class-name">set</span> up to track remote branch serverfix from origin.
Switched to a new branch <span class="token string">&#39;serverfix&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u60F3\u8981\u5C06\u672C\u5730\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u8BBE\u7F6E\u4E3A\u4E0D\u540C\u7684\u540D\u5B57\uFF0C\u4F60\u53EF\u4EE5\u8F7B\u677E\u5730\u4F7F\u7528\u4E0A\u4E00\u4E2A\u547D\u4EE4\u589E\u52A0\u4E00\u4E2A\u4E0D\u540C\u540D\u5B57\u7684\u672C\u5730\u5206\u652F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> sf origin/serverfix
Branch sf <span class="token builtin class-name">set</span> up to track remote branch serverfix from origin.
Switched to a new branch <span class="token string">&#39;sf&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\uFF0C\u672C\u5730\u5206\u652F <code>sf</code> \u4F1A\u81EA\u52A8\u4ECE <code>origin/serverfix</code> \u62C9\u53D6\u3002</p><p>\u8BBE\u7F6E\u5DF2\u6709\u7684\u672C\u5730\u5206\u652F\u8DDF\u8E2A\u4E00\u4E2A\u521A\u521A\u62C9\u53D6\u4E0B\u6765\u7684\u8FDC\u7A0B\u5206\u652F\uFF0C\u6216\u8005\u60F3\u8981\u4FEE\u6539\u6B63\u5728\u8DDF\u8E2A\u7684\u4E0A\u6E38\u5206\u652F\uFF0C \u4F60\u53EF\u4EE5\u5728\u4EFB\u610F\u65F6\u95F4\u4F7F\u7528 <code>-u</code> \u6216 <code>--set-upstream-to</code> \u9009\u9879\u8FD0\u884C <code>git branch</code> \u6765\u663E\u5F0F\u5730\u8BBE\u7F6E\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token parameter variable">-u</span> origin/serverfix
Branch serverfix <span class="token builtin class-name">set</span> up to track remote branch serverfix from origin.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Note</th><th>\u4E0A\u6E38\u5FEB\u6377\u65B9\u5F0F\u5F53\u8BBE\u7F6E\u597D\u8DDF\u8E2A\u5206\u652F\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7B80\u5199 <code>@{upstream}</code> \u6216 <code>@{u}</code> \u6765\u5F15\u7528\u5B83\u7684\u4E0A\u6E38\u5206\u652F\u3002 \u6240\u4EE5\u5728 <code>master</code> \u5206\u652F\u65F6\u5E76\u4E14\u5B83\u6B63\u5728\u8DDF\u8E2A <code>origin/master</code> \u65F6\uFF0C\u5982\u679C\u613F\u610F\u7684\u8BDD\u53EF\u4EE5\u4F7F\u7528 <code>git merge @{u}</code> \u6765\u53D6\u4EE3 <code>git merge origin/master</code>\u3002</th></tr></thead><tbody><tr><td></td><td></td></tr></tbody></table><h3 id="\u67E5\u770B\u8DDF\u8E2A\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u8DDF\u8E2A\u5206\u652F" aria-hidden="true">#</a> \u67E5\u770B\u8DDF\u8E2A\u5206\u652F</h3><p>\u5982\u679C\u60F3\u8981\u67E5\u770B\u8BBE\u7F6E\u7684\u6240\u6709\u8DDF\u8E2A\u5206\u652F\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>git branch</code> \u7684 <code>-vv</code> \u9009\u9879\u3002 \u8FD9\u4F1A\u5C06\u6240\u6709\u7684\u672C\u5730\u5206\u652F\u5217\u51FA\u6765\u5E76\u4E14\u5305\u542B\u66F4\u591A\u7684\u4FE1\u606F\uFF0C\u5982\u6BCF\u4E00\u4E2A\u5206\u652F\u6B63\u5728\u8DDF\u8E2A\u54EA\u4E2A\u8FDC\u7A0B\u5206\u652F\u4E0E\u672C\u5730\u5206\u652F\u662F\u5426\u662F\u9886\u5148\u3001\u843D\u540E\u6216\u662F\u90FD\u6709\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> branch <span class="token parameter variable">-vv</span>
  iss53     7e424c3 <span class="token punctuation">[</span>origin/iss53: ahead <span class="token number">2</span><span class="token punctuation">]</span> forgot the brackets
  master    1ae2a45 <span class="token punctuation">[</span>origin/master<span class="token punctuation">]</span> deploying index fix
* serverfix f8674d9 <span class="token punctuation">[</span>teamone/server-fix-good: ahead <span class="token number">3</span>, behind <span class="token number">1</span><span class="token punctuation">]</span> this should <span class="token keyword">do</span> it
  testing   5ea463a trying something new
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u53EF\u4EE5\u770B\u5230 <code>iss53</code> \u5206\u652F\u6B63\u5728\u8DDF\u8E2A <code>origin/iss53</code> \u5E76\u4E14 \u201Cahead\u201D \u662F 2\uFF0C\u610F\u5473\u7740\u672C\u5730\u6709\u4E24\u4E2A\u63D0\u4EA4\u8FD8\u6CA1\u6709\u63A8\u9001\u5230\u670D\u52A1\u5668\u4E0A\u3002 \u4E5F\u80FD\u770B\u5230 <code>master</code> \u5206\u652F\u6B63\u5728\u8DDF\u8E2A <code>origin/master</code> \u5206\u652F\u5E76\u4E14\u662F\u6700\u65B0\u7684\u3002 \u63A5\u4E0B\u6765\u53EF\u4EE5\u770B\u5230 <code>serverfix</code> \u5206\u652F\u6B63\u5728\u8DDF\u8E2A <code>teamone</code> \u670D\u52A1\u5668\u4E0A\u7684 <code>server-fix-good</code> \u5206\u652F\u5E76\u4E14\u9886\u5148 3 \u843D\u540E 1\uFF0C \u610F\u5473\u7740\u670D\u52A1\u5668\u4E0A\u6709\u4E00\u6B21\u63D0\u4EA4\u8FD8\u6CA1\u6709\u5408\u5E76\u5165\u540C\u65F6\u672C\u5730\u6709\u4E09\u6B21\u63D0\u4EA4\u8FD8\u6CA1\u6709\u63A8\u9001\u3002 \u6700\u540E\u770B\u5230 <code>testing</code> \u5206\u652F\u5E76\u6CA1\u6709\u8DDF\u8E2A\u4EFB\u4F55\u8FDC\u7A0B\u5206\u652F\u3002</p><p>\u9700\u8981\u91CD\u70B9\u6CE8\u610F\u7684\u4E00\u70B9\u662F\u8FD9\u4E9B\u6570\u5B57\u7684\u503C\u6765\u81EA\u4E8E\u4F60\u4ECE\u6BCF\u4E2A\u670D\u52A1\u5668\u4E0A\u6700\u540E\u4E00\u6B21\u6293\u53D6\u7684\u6570\u636E\u3002 <strong>\u8FD9\u4E2A\u547D\u4EE4\u5E76\u6CA1\u6709\u8FDE\u63A5\u670D\u52A1\u5668</strong>\uFF0C\u5B83\u53EA\u4F1A\u544A\u8BC9\u4F60\u5173\u4E8E\u672C\u5730\u7F13\u5B58\u7684\u670D\u52A1\u5668\u6570\u636E\u3002 \u5982\u679C\u60F3\u8981\u7EDF\u8BA1\u6700\u65B0\u7684\u9886\u5148\u4E0E\u843D\u540E\u6570\u5B57\uFF0C\u9700\u8981\u5728\u8FD0\u884C\u6B64\u547D\u4EE4\u524D\u6293\u53D6\u6240\u6709\u7684\u8FDC\u7A0B\u4ED3\u5E93\u3002 \u53EF\u4EE5\u50CF\u8FD9\u6837\u505A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> fetch --all<span class="token punctuation">;</span> <span class="token function">git</span> branch <span class="token parameter variable">-vv</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u62C9\u53D6" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D6" aria-hidden="true">#</a> \u62C9\u53D6</h3><p>\u5F53 <code>git fetch</code> \u547D\u4EE4\u4ECE\u670D\u52A1\u5668\u4E0A\u6293\u53D6\u672C\u5730\u6CA1\u6709\u7684\u6570\u636E\u65F6\uFF0C\u5B83\u5E76\u4E0D\u4F1A\u4FEE\u6539\u5DE5\u4F5C\u76EE\u5F55\u4E2D\u7684\u5185\u5BB9\u3002 \u5B83\u53EA\u4F1A\u83B7\u53D6\u6570\u636E\u7136\u540E\u8BA9\u4F60\u81EA\u5DF1\u5408\u5E76\u3002 \u7136\u800C\uFF0C\u6709\u4E00\u4E2A\u547D\u4EE4\u53EB\u4F5C <code>git pull</code> \u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u5B83\u7684\u542B\u4E49\u662F\u4E00\u4E2A <code>git fetch</code> \u7D27\u63A5\u7740\u4E00\u4E2A <code>git merge</code> \u547D\u4EE4\u3002 \u5982\u679C\u6709\u4E00\u4E2A\u50CF\u4E4B\u524D\u7AE0\u8282\u4E2D\u6F14\u793A\u7684\u8BBE\u7F6E\u597D\u7684\u8DDF\u8E2A\u5206\u652F\uFF0C\u4E0D\u7BA1\u5B83\u662F\u663E\u5F0F\u5730\u8BBE\u7F6E\u8FD8\u662F\u901A\u8FC7 <code>clone</code> \u6216 <code>checkout</code> \u547D\u4EE4\u4E3A\u4F60\u521B\u5EFA\u7684\uFF0C<code>git pull</code> \u90FD\u4F1A\u67E5\u627E\u5F53\u524D\u5206\u652F\u6240\u8DDF\u8E2A\u7684\u670D\u52A1\u5668\u4E0E\u5206\u652F\uFF0C \u4ECE\u670D\u52A1\u5668\u4E0A\u6293\u53D6\u6570\u636E\u7136\u540E\u5C1D\u8BD5\u5408\u5E76\u5165\u90A3\u4E2A\u8FDC\u7A0B\u5206\u652F\u3002</p><p>\u7531\u4E8E <code>git pull</code> \u7684\u9B54\u6CD5\u7ECF\u5E38\u4EE4\u4EBA\u56F0\u60D1\u6240\u4EE5\u901A\u5E38\u5355\u72EC\u663E\u5F0F\u5730\u4F7F\u7528 <code>fetch</code> \u4E0E <code>merge</code> \u547D\u4EE4\u4F1A\u66F4\u597D\u4E00\u4E9B\u3002</p><h3 id="\u5220\u9664\u8FDC\u7A0B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u8FDC\u7A0B\u5206\u652F" aria-hidden="true">#</a> \u5220\u9664\u8FDC\u7A0B\u5206\u652F</h3><p>\u5047\u8BBE\u4F60\u5DF2\u7ECF\u901A\u8FC7\u8FDC\u7A0B\u5206\u652F\u505A\u5B8C\u6240\u6709\u7684\u5DE5\u4F5C\u4E86\u2014\u2014\u4E5F\u5C31\u662F\u8BF4\u4F60\u548C\u4F60\u7684\u534F\u4F5C\u8005\u5DF2\u7ECF\u5B8C\u6210\u4E86\u4E00\u4E2A\u7279\u6027\uFF0C \u5E76\u4E14\u5C06\u5176\u5408\u5E76\u5230\u4E86\u8FDC\u7A0B\u4ED3\u5E93\u7684 <code>master</code> \u5206\u652F\uFF08\u6216\u4EFB\u4F55\u5176\u4ED6\u7A33\u5B9A\u4EE3\u7801\u5206\u652F\uFF09\u3002 \u53EF\u4EE5\u8FD0\u884C\u5E26\u6709 <code>--delete</code> \u9009\u9879\u7684 <code>git push</code> \u547D\u4EE4\u6765\u5220\u9664\u4E00\u4E2A\u8FDC\u7A0B\u5206\u652F\u3002 \u5982\u679C\u60F3\u8981\u4ECE\u670D\u52A1\u5668\u4E0A\u5220\u9664 <code>serverfix</code> \u5206\u652F\uFF0C\u8FD0\u884C\u4E0B\u9762\u7684\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> serverfix
To https://github.com/schacon/simplegit
 - <span class="token punctuation">[</span>deleted<span class="token punctuation">]</span>         serverfix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u57FA\u672C\u4E0A\u8FD9\u4E2A\u547D\u4EE4\u505A\u7684\u53EA\u662F\u4ECE\u670D\u52A1\u5668\u4E0A\u79FB\u9664\u8FD9\u4E2A\u6307\u9488\u3002 Git \u670D\u52A1\u5668\u901A\u5E38\u4F1A\u4FDD\u7559\u6570\u636E\u4E00\u6BB5\u65F6\u95F4\u76F4\u5230\u5783\u573E\u56DE\u6536\u8FD0\u884C\uFF0C\u6240\u4EE5\u5982\u679C\u4E0D\u5C0F\u5FC3\u5220\u9664\u6389\u4E86\uFF0C\u901A\u5E38\u662F\u5F88\u5BB9\u6613\u6062\u590D\u7684\u3002</p>`,31);function S(C,L){const s=r("ExternalLinkIcon");return c(),i("div",null,[l,e("p",null,[n("\u4E3A\u4E86\u6F14\u793A\u6709\u591A\u4E2A\u8FDC\u7A0B\u4ED3\u5E93\u4E0E\u8FDC\u7A0B\u5206\u652F\u7684\u60C5\u51B5\uFF0C\u6211\u4EEC\u5047\u5B9A\u4F60\u6709\u53E6\u4E00\u4E2A\u5185\u90E8 Git \u670D\u52A1\u5668\uFF0C\u4EC5\u670D\u52A1\u4E8E\u4F60\u7684\u67D0\u4E2A\u654F\u6377\u5F00\u53D1\u56E2\u961F\u3002 \u8FD9\u4E2A\u670D\u52A1\u5668\u4F4D\u4E8E "),p,n("\u3002 \u4F60\u53EF\u4EE5\u8FD0\u884C "),u,n(" \u547D\u4EE4\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u8FDC\u7A0B\u4ED3\u5E93\u5F15\u7528\u5230\u5F53\u524D\u7684\u9879\u76EE\uFF0C\u8FD9\u4E2A\u547D\u4EE4\u6211\u4EEC\u4F1A\u5728 "),e("a",m,[n("Git \u57FA\u7840"),a(s)]),n(" \u4E2D\u8BE6\u7EC6\u8BF4\u660E\u3002 \u5C06\u8FD9\u4E2A\u8FDC\u7A0B\u4ED3\u5E93"),g,n("\u3002"),h]),v,e("p",null,[n("\u8FD9\u91CC\u6709\u4E9B\u5DE5\u4F5C\u88AB\u7B80\u5316\u4E86\u3002 "),b,n(" \u90A3\u610F\u5473\u7740\uFF0C\u201C\u63A8\u9001\u672C\u5730\u7684 "),k,n(" \u5206\u652F\u6765\u66F4\u65B0\u8FDC\u7A0B\u4ED3\u5E93\u4E0A\u7684 "),f,n(" \u5206\u652F\u3002\u201D \u6211\u4EEC\u5C06\u4F1A\u8BE6\u7EC6\u5B66\u4E60 "),e("a",x,[n("Git \u5185\u90E8\u539F\u7406"),a(s)]),n(" \u7684 "),_,n(" \u90E8\u5206\uFF0C \u4F46\u662F\u73B0\u5728\u53EF\u4EE5\u5148\u628A\u5B83\u653E\u5728\u513F\u3002\u4F60\u4E5F\u53EF\u4EE5\u8FD0\u884C "),y,n("\uFF0C \u5B83\u4F1A\u505A\u540C\u6837\u7684\u4E8B\u2014\u2014\u4E5F\u5C31\u662F\u8BF4\u201C"),G,n("\u201D \u53EF\u4EE5\u901A\u8FC7\u8FD9\u79CD\u683C\u5F0F\u6765\u63A8\u9001\u672C\u5730\u5206\u652F\u5230\u4E00\u4E2A\u547D\u540D\u4E0D\u76F8\u540C\u7684\u8FDC\u7A0B\u5206\u652F\u3002")]),w,$,e("table",null,[e("thead",null,[e("tr",null,[B,e("th",null,[n("\u5982\u4F55\u907F\u514D\u6BCF\u6B21\u8F93\u5165\u5BC6\u7801\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528 HTTPS URL \u6765\u63A8\u9001\uFF0CGit \u670D\u52A1\u5668\u4F1A\u8BE2\u95EE\u7528\u6237\u540D\u4E0E\u5BC6\u7801\u3002 \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5B83\u4F1A\u5728\u7EC8\u7AEF\u4E2D\u63D0\u793A\u670D\u52A1\u5668\u662F\u5426\u5141\u8BB8\u4F60\u8FDB\u884C\u63A8\u9001\u3002\u5982\u679C\u4E0D\u60F3\u5728\u6BCF\u4E00\u6B21\u63A8\u9001\u65F6\u90FD\u8F93\u5165\u7528\u6237\u540D\u4E0E\u5BC6\u7801\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E2A \u201Ccredential cache\u201D\u3002 \u6700\u7B80\u5355\u7684\u65B9\u5F0F\u5C31\u662F\u5C06\u5176\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\u51E0\u5206\u949F\uFF0C\u53EF\u4EE5\u7B80\u5355\u5730\u8FD0\u884C "),z,n(" \u6765\u8BBE\u7F6E\u5B83\u3002\u60F3\u8981\u4E86\u89E3\u66F4\u591A\u5173\u4E8E\u4E0D\u540C\u9A8C\u8BC1\u7F13\u5B58\u7684\u53EF\u7528\u9009\u9879\uFF0C\u67E5\u770B "),e("a",T,[n("\u51ED\u8BC1\u5B58\u50A8"),a(s)]),n("\u3002")])])]),j]),N])}const V=t(d,[["render",S],["__file","9.Git\u5206\u652F-\u8FDC\u7A0B\u5206\u652F.html.vue"]]);export{V as default};
