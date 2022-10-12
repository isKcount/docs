import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,f as a}from"./app.ca0279c0.js";const i={},d=a(`<h1 id="dockerfile" tabindex="-1"><a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a> Dockerfile</h1><h2 id="dockerfile\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#dockerfile\u7B80\u4ECB" aria-hidden="true">#</a> Dockerfile\u7B80\u4ECB</h2><h3 id="_1-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_1-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> <strong>1.\u662F\u4EC0\u4E48</strong></h3><p><code>dockerfile \u662F\u7528\u6765\u6784\u5EFA docker \u955C\u50CF\u7684\u6784\u5EFA\u6587\u4EF6\uFF0C\u662F\u7531\u4E00\u7CFB\u5217\u547D\u4EE4\u548C\u53C2\u6570\u6784\u6210\u7684\u811A\u672C\u3002</code></p><h3 id="_2-\u6784\u5EFA\u4E09\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_2-\u6784\u5EFA\u4E09\u6B65\u9AA4" aria-hidden="true">#</a> <strong>2.\u6784\u5EFA\u4E09\u6B65\u9AA4</strong></h3><ul><li><code>\u7F16\u5199dockerfile \u6587\u4EF6</code></li><li><code>docker build</code></li><li><code>docker run </code></li></ul><h3 id="_3-\u6587\u4EF6\u4EC0\u4E48\u6837" tabindex="-1"><a class="header-anchor" href="#_3-\u6587\u4EF6\u4EC0\u4E48\u6837" aria-hidden="true">#</a> <strong>3.\u6587\u4EF6\u4EC0\u4E48\u6837\uFF1F</strong></h3><p>Centos\u4E3A\u4F8B\u5B50</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> centos:7</span>
<span class="token instruction"><span class="token keyword">ENV</span> container docker</span>
<span class="token instruction"><span class="token keyword">RUN</span> (cd /lib/systemd/system/sysinit.target.wants/; for i in *; do [ <span class="token variable">$i</span> == <span class="token operator">\\</span>
systemd-tmpfiles-setup.service ] || rm -f <span class="token variable">$i</span>; done); <span class="token operator">\\</span>
rm -f /lib/systemd/system/multi-user.target.wants/*;<span class="token operator">\\</span>
rm -f /etc/systemd/system/*.wants/*;<span class="token operator">\\</span>
rm -f /lib/systemd/system/local-fs.target.wants/*; <span class="token operator">\\</span>
rm -f /lib/systemd/system/sockets.target.wants/*udev*; <span class="token operator">\\</span>
rm -f /lib/systemd/system/sockets.target.wants/*initctl*; <span class="token operator">\\</span>
rm -f /lib/systemd/system/basic.target.wants/*;<span class="token operator">\\</span>
rm -f /lib/systemd/system/anaconda.target.wants/*;</span>
<span class="token instruction"><span class="token keyword">VOLUME</span> [ <span class="token string">&quot;/sys/fs/cgroup&quot;</span> ]</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;/usr/sbin/init&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-dockerfile\u6784\u5EFA\u8FC7\u7A0B\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#_4-dockerfile\u6784\u5EFA\u8FC7\u7A0B\u89E3\u6790" aria-hidden="true">#</a> <strong>4.dockerfile\u6784\u5EFA\u8FC7\u7A0B\u89E3\u6790</strong></h3><ul><li>1:<code>\u6BCF\u6761\u4FDD\u7559\u5B57\u6307\u4EE4\u90FD\u5FC5\u987B\u4E3A\u5927\u5199\u5B57\u6BCD\u4E14\u540E\u9762\u8981\u8DDF\u968F\u81F3\u5C11\u4E00\u4E2A\u53C2\u6570 </code></li><li>2:<code>\u6307\u4EE4\u6309\u7167\u4ECE\u4E0A\u5230\u4E0B\uFF0C\u987A\u5E8F\u6267\u884C</code></li><li>3:<code>#\u8868\u793A\u6CE8\u91CA</code></li><li>4:<code>\u6BCF\u6761\u6307\u4EE4\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u955C\u50CF\u5C42\uFF0C\u5E76\u5BF9\u955C\u50CF\u8FDB\u884C\u63D0\u4EA4</code></li></ul><h3 id="_5-docker\u6267\u884Cdockerfile\u7684\u5927\u81F4\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_5-docker\u6267\u884Cdockerfile\u7684\u5927\u81F4\u6D41\u7A0B" aria-hidden="true">#</a> <strong>5.docker\u6267\u884Cdockerfile\u7684\u5927\u81F4\u6D41\u7A0B</strong></h3><ul><li>docker \u4ECE\u57FA\u7840\u955C\u50CF\u8FD0\u884C\u4E00\u4E2A\u5BB9\u5668</li><li>\u6267\u884C\u4E00\u6761\u6307\u4EE4\u5E76\u5BF9\u5BB9\u5668\u4F5C\u51FA\u4FEE\u6539</li><li>\u6267\u884C\u7C7B\u4F3Cdocker commit \u7684\u64CD\u4F5C\u63D0\u4EA4\u4E00\u4E2A\u65B0\u7684\u955C\u50CF\u5C42</li><li>docker \u518D\u57FA \u4E8E\u521A\u63D0\u4EA4\u7684\u955C\u50CF\u8FD0\u884C\u4E00\u4E2A\u65B0\u5BB9\u5668</li><li>\u6267\u884Cdockerfile \u4E2D\u7684\u4E0B\u4E00\u6761\u6307\u4EE4\u76F4\u5230\u6240\u6709\u6307\u4EE4\u90FD\u6267\u884C\u5B8C\u6210</li></ul><h3 id="_6-\u5C0F\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_6-\u5C0F\u603B\u7ED3" aria-hidden="true">#</a> <strong>6.\u5C0F\u603B\u7ED3</strong></h3><ol><li>\u4ECE\u5E94\u7528\u8F6F\u4EF6\u7684\u89D2\u5EA6\u6765\u770B\uFF0CDockerfile\u3001 Docker \u955C\u50CF\u4E0EDocker \u5BB9\u5668\u5206\u522B\u4EE3\u8868</li><li>\u8F6F\u4EF6\u7684\u4E09\u4E2A\u4E0D\u540C\u9636\u6BB5\uFF0C</li><li>Dockerfile\u662F\u8F6F\u4EF6\u7684\u539F\u6750\u6599</li><li><code>Docker \u955C\u50CF\u662F\u8F6F\u4EF6\u7684\u4EA4\u4ED8\u54C1 </code></li><li><code>Docker \u5BB9\u5668\u5219\u53EF\u4EE5\u8BA4\u4E3A\u662F\u8F6F\u4EF6\u7684\u8FD0\u884C\u6001\u3002 </code></li><li>Dockerfile\u9762\u5411\u5F00\u53D1\uFF0CDocker \u955C\u50CF\u6210\u4E3A\u4EA4\u4ED8\u6807\u51C6\uFF0CDocker\u5BB9\u5668\u5219\u6D89\u53CA\u90E8\u7F72\u4E0E\u8FD0\u7EF4\uFF0C\u4E09\u8005\u7F3A\u4E00\u4E0D\u53EF\uFF0C\u5408\u529B\u5145\u5F53 Docker \u4F53\u7CFB\u7684\u57FA\u77F3\u3002</li></ol><p>Dockerfile\uFF0C\u9700\u8981\u5B9A\u4E49\u4E00\u4E2A Dockerfile, Dockerfile \u5B9A\u4E49\u4E86\u8FDB\u7A0B\u9700\u8981\u7684\u4E00\u5207\u4E1C\u897F\u3002Dockerfile \u6D89\u53CA\u7684\u5185\u5BB9\u5305\u62EC\u6267\u884C\u4EE3\u7801\u6216\u8005\u662F\u6587\u4EF6\u3001\u73AF\u5883\u53D8\u91CF\u3001\u4F9D\u8D56\u5305\u3001\u8FD0\u884C\u65F6\u73AF\u5883\u3001\u52A8\u6001\u94FE\u63A5\u5E93\u3001\u64CD\u4F5C\u7CFB\u7EDF\u7684\u53D1\u884C\u7248\u3001\u670D\u52A1\u8FDB\u7A0B\u548C\u5185\u6838\u8FDB\u7A0B(\u5F53\u5E94\u7528\u8FDB\u7A0B\u9700\u8981\u548C\u7CFB\u7EDF\u670D\u52A1\u548C\u5185\u6838\u8FDB\u7A0B\u6253\u4EA4\u9053\uFF0C\u8FD9\u65F6\u9700\u8981\u8003\u8651\u5982\u4F55\u8BBE\u8BA1namespace\u7684\u6743\u9650\u63A7\u5236)\u7B49\u7B49;</p><ol><li><code>Docker \u955C\u50CF\uFF0C\u5728\u7528 Dockerfile\u5B9A\u4E49\u4E00\u4E2A\u6587\u4EF6\u4E4B\u540E\uFF0Cdocker build \u65F6\u4F1A\u4EA7\u751F\u4E00\u4E2ADocker \u955C\u50CF\uFF0C\u5F53\u8FD0\u884C Docker \u955C\u50CF\u65F6\uFF0C\u4F1A\u771F\u6B63\u5F00\u59CB\u63D0\u4F9B\u670D\u52A1; </code></li><li><code>Docker \u5BB9\u5668\uFF0C\u5BB9\u5668\u662F\u76F4\u63A5\u63D0\u4F9B\u670D\u52A1\u7684\u3002 </code></li></ol><h2 id="\u5982\u4F55\u7528-dockerfile-\u6784\u5EFA\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u7528-dockerfile-\u6784\u5EFA\u955C\u50CF" aria-hidden="true">#</a> \u5982\u4F55\u7528 Dockerfile \u6784\u5EFA\u955C\u50CF</h2><ul><li>\u524D\u9762\u8BB2\u5230\u955C\u50CF\u7684\u6784\u5EFA\u65F6\uFF0C\u8BB2\u8FF0\u7684\u662F\u7528 commit \u7684\u65B9\u5F0F\u6784\u5EFA\u955C\u50CF\uFF0C\u800C Dockerfile \u662F \u53E6\u4E00\u79CD\u6784\u5EFA\u955C\u50CF\u7684\u65B9\u5F0F</li><li>Dockerfile \u6784\u5EFA\u955C\u50CF\u662F\u4EE5\u57FA\u7840\u955C\u50CF\u4E3A\u57FA\u7840\u7684\uFF0CDockerfile \u662F\u4E00\u4E2A\u6587\u672C\u6587\u4EF6\uFF0C\u5185\u5BB9\u662F \u7528\u6237\u7F16\u5199\u7684\u4E00\u4E9B docker \u6307\u4EE4\uFF0C\u6BCF\u4E00\u6761\u6307\u4EE4\u6784\u5EFA\u4E00\u5C42\uFF0C\u56E0\u6B64\u6BCF\u4E00\u6761\u6307\u4EE4\u7684\u5185\u5BB9\uFF0C\u5C31\u662F \u63CF\u8FF0\u8BE5\u5C42\u5E94\u5F53\u5982\u4F55\u6784\u5EFA\u3002</li><li><code>Dockerfile \u7684\u57FA\u672C\u6307\u4EE4\u6709\u5341\u4E09\u4E2A\uFF0C\u5206\u522B\u662F\uFF1AFROM\u3001MAINTAINER\u3001RUN\u3001CMD\u3001 EXPOSE\u3001ENV\u3001ADD\u3001COPY\u3001ENTRYPOINT\u3001VOLUME\u3001USER\u3001WORKDIR\u3001 ONBUILD \u4ECE\u524D\u9762\u7684\u5185\u5BB9\u53EF\u4EE5\u770B\u51FA\uFF0C\u8981\u6784\u5EFA\u4E00\u4E2A\u5BB9\u5668\uFF0C\u9700\u8981\u505A\u5F88\u591A\u7684\u5DE5\u4F5C\uFF0C\u8BBE\u7F6E\u5F88\u591A\u7684\u914D \u7F6E\uFF0C\u5982\u679C\u6211\u4EEC\u53EF\u4EE5\u628A\u6BCF\u4E00\u5C42\u4FEE\u6539\u3001\u5B89\u88C5\u3001\u6784\u5EFA\u3001\u64CD\u4F5C\u7684\u547D\u4EE4\u90FD\u5199\u5165\u4E00\u4E2A\u811A\u672C\uFF0C\u7528\u8FD9\u4E2A \u811A\u672C\u6765\u6784\u5EFA\u3001\u5B9A\u5236\u955C\u50CF\uFF0C\u90A3\u4E48\u4E4B\u524D\u63D0\u53CA\u7684\u65E0\u6CD5\u91CD\u590D\u7684\u95EE\u9898\u3001\u955C\u50CF\u6784\u5EFA\u900F\u660E\u6027\u7684\u95EE\u9898\u3001 \u4F53\u79EF\u7684\u95EE\u9898\u5C31\u90FD\u4F1A\u89E3\u51B3\u3002</code></li><li>\u8FD9\u4E2A\u811A\u672C\u5C31\u662F Dockerfile\u3002 \u56E0\u6B64\u5B66\u4F1A\u7528 Dockerfile \u6765\u6784\u5EFA\u955C\u50CF\uFF0C\u662F\u975E\u5E38\u6709\u5FC5\u8981\u7684\u3002\u5B66\u4E60 Dockerfile \u4E4B\u524D\uFF0C\u6211\u4EEC\u5148 \u6765\u5B66\u4E60\u4E00\u4E9B Dockerfile \u5E38\u7528\u7684\u6307\u4EE4\u3002</li></ul><h3 id="_1-dockerfile-\u5E38\u7528\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#_1-dockerfile-\u5E38\u7528\u6307\u4EE4" aria-hidden="true">#</a> 1 Dockerfile \u5E38\u7528\u6307\u4EE4</h3><p><img src="https://pic.imgdb.cn/item/61ebfa472ab3f51d9120dde9.png" alt="" loading="lazy"></p><h3 id="_1-1\u3001from-\u6307\u5B9A\u57FA\u7840\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#_1-1\u3001from-\u6307\u5B9A\u57FA\u7840\u955C\u50CF" aria-hidden="true">#</a> 1.1\u3001FROM \uFF1A\u6307\u5B9A\u57FA\u7840\u955C\u50CF</h3><p>\u6240\u8C13\u5B9A\u5236\u955C\u50CF\uFF0C\u90A3\u4E00\u5B9A\u662F\u4EE5\u4E00\u4E2A\u955C\u50CF\u4E3A\u57FA\u7840\uFF0C\u5728\u5176\u4E0A\u8FDB\u884C\u5B9A\u5236\u3002\u5C31\u50CF\u6211\u4EEC\u4E4B \u524D\u8FD0\u884C\u4E86\u4E00\u4E2A nginx \u955C\u50CF\u7684\u5BB9\u5668\uFF0C\u518D\u8FDB\u884C\u4FEE\u6539\u4E00\u6837\uFF0C\u57FA\u7840\u955C\u50CF\u662F\u5FC5\u987B\u6307\u5B9A\u7684\u3002\u800CFROM \u5C31\u662F\u6307\u5B9A\u57FA\u7840\u955C \u50CF\uFF0C\u56E0\u6B64\u4E00\u4E2A Dockerfile \u4E2D FROM \u662F\u5FC5\u5907\u7684\u6307\u4EE4\uFF0C\u5E76\u4E14\u5FC5 \u987B\u662F\u7B2C\u4E00\u6761\u6307\u4EE4\u3002 \u5982\uFF1A\u6307\u5B9A ubuntu \u7684 14 \u7248\u672C\u4F5C\u4E3A\u57FA\u7840\u955C\u50CF</p><p>FROM ubuntu:14</p><h3 id="_1-2\u3001run-\u6267\u884C\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_1-2\u3001run-\u6267\u884C\u547D\u4EE4" aria-hidden="true">#</a> 1.2\u3001RUN\uFF1A\u6267\u884C\u547D\u4EE4</h3><p>RUN \u6307\u4EE4\u5728\u65B0\u955C\u50CF\u5185\u90E8\u6267\u884C\u7684\u547D\u4EE4\uFF0C\u5982\uFF1A\u6267\u884C\u67D0\u4E9B\u52A8\u4F5C\u3001\u5B89\u88C5\u7CFB\u7EDF\u8F6F\u4EF6\u3001\u914D\u7F6E\u7CFB\u7EDF \u4FE1\u606F\u4E4B\u7C7B\uFF0C \u683C\u5F0F\u5982\u4E0B\u4E24\u79CD\uFF1A</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code>1\uFF09shell \u683C\u5F0F\uFF1ARUN&lt; command &gt; \uFF0C\u5C31\u50CF\u76F4\u63A5\u5728\u547D\u4EE4\u884C\u4E2D\u8F93\u5165\u7684\u547D\u4EE4\u4E00\u6837\u3002 
\u5982\u5728 nginx \u91CC\u7684\u9ED8\u8BA4\u4E3B\u9875\u4E2D\u5199\u201Dhello\u201C\uFF1A
<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">&#39;hello &#39;</span> &gt;/etc/nginx/html/index.html </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code>2\uFF09exec \u683C\u5F0F\uFF1ARUN [&quot;\u53EF\u6267\u884C\u6587\u4EF6&quot;, &quot;\u53C2\u6570 1&quot;, &quot;\u53C2\u6570 2&quot;] 
\u5982\u5728\u65B0\u955C\u50CF\u4E2D\u7528 yum \u65B9\u5F0F\u5B89\u88C5 nginx\uFF1A
<span class="token instruction"><span class="token keyword">RUN</span> [<span class="token string">&quot;yum&quot;</span>,<span class="token string">&quot;install&quot;</span>,<span class="token string">&quot;nginx&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\uFF1A<code>\u591A\u884C\u547D\u4EE4\u4E0D\u8981\u5199\u591A\u4E2A RUN\uFF0C\u539F\u56E0\u662F Dockerfile \u4E2D\u6BCF\u4E00\u4E2A\u6307\u4EE4\u90FD\u4F1A\u5EFA\u7ACB\u4E00\u5C42.\u591A\u5C11 \u4E2A RUN \u5C31\u6784\u5EFA\u4E86\u591A\u5C11\u5C42\u955C\u50CF\uFF0C\u4F1A\u9020\u6210\u955C\u50CF\u7684\u81C3\u80BF\u3001\u591A\u5C42\uFF0C\u4E0D\u4EC5\u4EC5\u589E\u52A0\u4E86\u6784\u4EF6\u90E8\u7F72\u7684 \u65F6\u95F4\uFF0C\u8FD8\u5BB9\u6613\u51FA\u9519,RUN \u4E66\u5199\u65F6\u7684\u6362\u884C\u7B26\u662F\\ </code></p><h3 id="_1-3\u3001copy-\u590D\u5236\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-3\u3001copy-\u590D\u5236\u6587\u4EF6" aria-hidden="true">#</a> 1.3\u3001COPY\uFF1A\u590D\u5236\u6587\u4EF6</h3><p>COPY \u547D\u4EE4\u7528\u4E8E\u5C06\u5BBF\u4E3B\u673A\u5668\u4E0A\u7684\u7684\u6587\u4EF6\u590D\u5236\u5230\u955C\u50CF\u5185\uFF0C\u5982\u679C\u76EE\u7684\u4F4D\u7F6E\u4E0D\u5B58\u5728\uFF0CDocker \u4F1A\u81EA\u52A8\u521B\u5EFA\u3002\u4F46\u5BBF\u4E3B\u673A\u5668\u7528\u8981\u590D\u5236\u7684\u76EE\u5F55\u5FC5\u987B\u662F\u548C Dockerfile \u6587\u4EF6\u7EDF\u8BA1\u76EE\u5F55\u4E0B\u3002 \u683C\u5F0F\uFF1A</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">COPY</span> [--chown=&lt;user&gt;:&lt;group&gt;] &lt;\u6E90\u8DEF\u5F84&gt;... &lt;\u76EE\u6807\u8DEF\u5F84&gt;</span>
<span class="token instruction"><span class="token keyword">COPY</span> [--chown=&lt;user&gt;:&lt;group&gt;] [<span class="token string">&quot;&lt;\u6E90\u8DEF\u5F84 1&gt;&quot;</span>,... <span class="token string">&quot;&lt;\u76EE\u6807\u8DEF\u5F84&gt;&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>\u5982\u628A\u5BBF\u4E3B\u673A\u4E2D\u7684 package.json \u6587\u4EF6\u590D\u5236\u5230\u5BB9\u5668\u4E2D/usr/src/app/\u76EE\u5F55\u4E0B\uFF1A</code></p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">COPY</span> package.json /usr/src/app/ </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-4\u3001cmd-\u5BB9\u5668\u542F\u52A8\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_1-4\u3001cmd-\u5BB9\u5668\u542F\u52A8\u547D\u4EE4" aria-hidden="true">#</a> 1.4\u3001CMD\uFF1A\u5BB9\u5668\u542F\u52A8\u547D\u4EE4</h3><p>CMD \u547D\u4EE4\u7528\u4E8E\u5BB9\u5668\u542F\u52A8\u65F6\u9700\u8981\u6267\u884C\u7684\u547D\u4EE4\uFF0CCMD \u5728 Dockerfile \u4E2D\u53EA\u80FD\u51FA\u73B0\u4E00\u6B21\uFF0C\u5982 \u679C\u51FA\u73B0\u591A\u4E2A\uFF0C\u90A3\u4E48\u53EA\u6709\u6700\u540E\u4E00\u4E2A\u4F1A\u6709\u6548\u3002 \u5176\u4F5C\u7528\u662F\u5728\u542F\u52A8\u5BB9\u5668\u7684\u65F6\u5019\u63D0\u4F9B\u4E00\u4E2A\u9ED8\u8BA4 \u7684\u547D\u4EE4\u9879\u3002\u5982\u679C\u7528\u6237\u6267\u884C docker run \u7684\u65F6\u5019\u63D0\u4F9B\u4E86\u547D\u4EE4\u9879\uFF0C\u5C31\u4F1A\u8986\u76D6\u6389\u8FD9\u4E2A\u547D\u4EE4\uFF0C \u6CA1\u63D0\u4F9B\u5C31\u4F1A\u4F7F\u7528\u6784\u5EFA\u65F6\u7684\u547D\u4EE4\u3002 \u683C\u5F0F\uFF1A \`shell \u683C\u5F0F\uFF1ACMD &lt;\u547D\u4EE4&gt; exec \u683C\u5F0F\uFF1ACMD [&quot;\u53EF\u6267\u884C\u6587\u4EF6&quot;, &quot;\u53C2\u6570 1&quot;, &quot;\u53C2\u6570 2&quot;...]</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code>\u5982\u5BB9\u5668\u542F\u52A8\u65F6\u8FDB\u5165 bash\uFF1A
<span class="token instruction"><span class="token keyword">CMD</span> /bin/bash</span>

\u4E5F\u53EF\u4EE5\u7528 exec \u5199\u6CD5\uFF1A
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;/bin/bash&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5\u3001maintainer-\u6307\u5B9A\u4F5C\u8005" tabindex="-1"><a class="header-anchor" href="#_1-5\u3001maintainer-\u6307\u5B9A\u4F5C\u8005" aria-hidden="true">#</a> 1.5\u3001MAINTAINER\uFF1A\u6307\u5B9A\u4F5C\u8005</h3><p>\u7528\u6765\u6307\u5B9A dockerfile \u7684\u4F5C\u8005\u540D\u79F0\u548C\u90AE\u7BB1\uFF0C<code>\u4E3B\u8981\u4F5C\u7528\u662F\u4E3A\u4E86\u6807\u8BC6\u8F6F\u4EF6\u7684\u6240\u6709\u8005\u662F\u8C01\u3002</code></p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code>\u8BED\u6CD5\uFF1A MAINTAINER &lt;name&gt; &lt;email&gt; \u5982\uFF1A
<span class="token instruction"><span class="token keyword">MAINTAINER</span> autor_jiabuli 6766633@qq.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-6\u3001expose-\u66B4\u9732\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#_1-6\u3001expose-\u66B4\u9732\u7AEF\u53E3" aria-hidden="true">#</a> 1.6\u3001EXPOSE\uFF1A\u66B4\u9732\u7AEF\u53E3</h3><p>EXPOSE \u547D\u540D\u9002\u7528\u4E8E\u8BBE\u7F6E\u5BB9\u5668\u5BF9\u5916\u6620\u5C04\u7684\u5BB9\u5668\u7AEF\u53E3\u53F7\uFF0C\u5982 tomcat \u5BB9\u5668\u5185\u4F7F\u7528\u7684\u7AEF\u53E3<code>8081</code>\uFF0C\u5219\u7528 <code>EXPOSE \u547D\u4EE4\u53EF\u4EE5\u544A\u8BC9\u5916\u754C\u8BE5\u5BB9\u5668\u7684 8081 \u7AEF\u53E3\u5BF9\u5916</code>\uFF0C\u5728\u6784\u5EFA\u955C\u50CF\u65F6 \u7528 docker run -p \u53EF\u4EE5\u8BBE\u7F6E\u66B4\u9732\u7684\u7AEF\u53E3\u5BF9\u5BBF\u4E3B\u673A\u5668\u7AEF\u53E3\u7684\u6620\u5C04\u3002</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code>\u8BED\u6CD5\uFF1A EXPOSE &lt;\u7AEF\u53E3 1&gt; [&lt;\u7AEF\u53E3 2&gt;...]
\u5982\uFF1A EXPOSE 8081
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>EXPOSE 8081 \u5176\u5B9E\u7B49\u4EF7\u4E8E docker run -p 8081 \u5F53\u9700\u8981\u628A 8081 \u7AEF\u53E3\u6620\u5C04\u5230\u5BBF\u4E3B\u673A\u4E2D \u7684\u67D0\u4E2A\u7AEF\u53E3\uFF08\u5982 8888\uFF09\u4EE5\u4FBF\u5916\u754C\u8BBF\u95EE\u65F6\uFF0C\u5219\u53EF\u4EE5\u7528 docker run -p 8888:8081</p><h3 id="_1-7\u3001workdir-\u914D\u7F6E\u5DE5\u4F5C\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_1-7\u3001workdir-\u914D\u7F6E\u5DE5\u4F5C\u76EE\u5F55" aria-hidden="true">#</a> 1.7\u3001WORKDIR\uFF1A\u914D\u7F6E\u5DE5\u4F5C\u76EE\u5F55</h3><p>WORKDIR \u547D\u4EE4\u662F\u4E3A RUN\u3001CMD\u3001ENTRYPOINT \u6307\u4EE4\u914D\u7F6E\u5DE5\u4F5C\u76EE\u5F55\u3002<code>\u5176\u6548\u679C\u7C7B\u4F3C\u4E8E Linux \u547D\u540D\u4E2D\u7684 cd \u547D\u4EE4</code>\uFF0C\u7528\u4E8E\u76EE\u5F55\u7684\u5207\u6362\uFF0C\u4F46\u662F\u548C cd \u4E0D\u4E00\u6837\u7684\u662F\uFF1A\u5982\u679C\u5207\u6362\u5230\u7684\u76EE \u5F55\u4E0D\u5B58\u5728\uFF0CWORKDIR \u4F1A\u4E3A\u6B64\u521B\u5EFA\u76EE\u5F55\u3002</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code>\u8BED\u6CD5: WORKDIR path

\u5982\u9700\u8981\u5728 nginx \u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A hello.txt \u7684\u6587\u4EF6\uFF1A
\u8FDB\u5165/usr/local/nginx \u76EE\u5F55\u4E0B
<span class="token instruction"><span class="token keyword">WORKDIR</span> /usr/local/nginx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code>\u8FDB\u5165/usr/local/nginx \u4E2D\u7684 html \u76EE\u5F55\u4E0B
<span class="token instruction"><span class="token keyword">WORKDIR</span> html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code>\u5728 html \u76EE\u5F55\u4E0B\u521B\u5EFA\u4E86\u4E00\u4E2A hello.txt \u6587\u4EF6
<span class="token instruction"><span class="token keyword">RUN</span> echo <span class="token string">&#39;hello&#39;</span> &gt; hello.txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-8\u3001entrypoint-\u5BB9\u5668\u542F\u52A8\u6267\u884C\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#_1-8\u3001entrypoint-\u5BB9\u5668\u542F\u52A8\u6267\u884C\u547D\u540D" aria-hidden="true">#</a> 1.8\u3001ENTRYPOINT\uFF1A\u5BB9\u5668\u542F\u52A8\u6267\u884C\u547D\u540D</h3><p>ENTRYPOINT \u7684\u4F5C\u7528\u548C\u7528\u6CD5\u548C CMD \u4E00\u6A21\u4E00\u6837\uFF0C\u4F46\u662F ENTRYPOINT \u6709\u548C CMD \u6709 2 \u5904 \u4E0D\u4E00\u6837\uFF1A</p><ol><li><code>CMD \u7684\u547D\u4EE4\u4F1A\u88AB docker run \u7684\u547D\u4EE4\u8986\u76D6\u800C ENTRYPOINT \u4E0D\u4F1A </code></li><li><code>CMD \u548C ENTRYPOINT \u90FD\u5B58\u5728\u65F6\uFF0CCMD \u7684\u6307\u4EE4\u53D8\u6210\u4E86 ENTRYPOINT \u7684\u53C2\u6570\uFF0C \u5E76\u4E14\u6B64 CMD \u63D0\u4F9B\u7684\u53C2\u6570\u4F1A\u88AB docker run \u540E\u9762\u7684\u547D\u4EE4\u8986\u76D6</code></li></ol><h3 id="_1-9\u3001volume-\u6570\u636E\u5377" tabindex="-1"><a class="header-anchor" href="#_1-9\u3001volume-\u6570\u636E\u5377" aria-hidden="true">#</a> 1.9\u3001VOLUME \u6570\u636E\u5377</h3><p>VOLUME \u7528\u6765\u521B\u5EFA\u4E00\u4E2A\u53EF\u4EE5\u4ECE\u672C\u5730\u4E3B\u673A\u6216\u5176\u4ED6\u5BB9\u5668\u6302\u8F7D\u7684\u6302\u8F7D\u70B9\u3002\u4F8B\u5982\u6211\u4EEC\u77E5\u9053 tomcat \u7684 webapps \u76EE\u5F55\u662F\u653E web \u5E94\u7528\u7A0B\u5E8F\u4EE3\u7801\u7684\u5730\u65B9\uFF0C\u6B64\u65F6\u6211\u4EEC\u8981\u628A webapps \u76EE \u5F55\u6302\u8F7D\u4E3A\u533F\u540D\u5377\uFF0C\u8FD9\u6837\u4EFB\u4F55\u5199\u5165 webapps \u4E2D\u7684\u5FC3\u90FD\u4E0D\u4F1A\u88AB\u8BB0\u5F55\u5230\u5BB9\u5668\u7684\u5B58\u50A8\u5C42\uFF0C\u8BA9 \u5BB9\u5668\u5B58\u50A8\u5C42\u65E0\u72B6\u6001\u5316\u3002</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code>\u683C\u5F0F\uFF1A VOLUME [&quot;path&quot;]
\u5982\u521B\u5EFA tomcat \u7684 webapps \u76EE\u5F55\u7684\u4E00\u4E2A\u6302\u8F7D\u70B9
<span class="token instruction"><span class="token keyword">VOLUME</span> /usr/local/tomcat/webapps</span>

\u8FD9\u6837\uFF0C\u5728\u8FD0\u884C\u5BB9\u5668\u65F6\uFF0C\u4E5F\u53EF\u4EE5\u7528\u8FC7 docker run -v \u6765\u628A\u533F\u540D\u6302\u8F7D\u70B9\u6302\u8F7D\u90FD\u5BBF\u4E3B\u673A\u5668\u4E0A \u7684\u67D0\u4E2A\u76EE\u5F55\uFF0C
\u5982 docker run -d -v /home/tomcat_webapps:/usr/local/tomcat/webapps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-10\u3001user-\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#_1-10\u3001user-\u7528\u6237" aria-hidden="true">#</a> 1.10\u3001USER \u7528\u6237</h3><p>\u547D\u4EE4\u7528\u4E8E\u6307\u5B9A\u5F53\u524D\u671B\u4E0B\u6267\u884C\u7684\u7528\u6237\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u8FD9\u4E2A\u7528\u6237\u5FC5\u987B\u662F\u5DF2\u7ECF\u5B58\u5728\uFF0C\u5426\u5219\u65E0 \u6CD5\u6307\u5B9A\u3002\u5B83\u7684\u7528\u6CD5\u548C WORKDIR \u6709\u70B9\u50CF\uFF0C\u5207\u6362\u7528\u6237\u3002</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code>\u683C\u5F0F\uFF1A
<span class="token instruction"><span class="token keyword">USER</span> daemon</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-11\u3001add-\u89E3\u538B" tabindex="-1"><a class="header-anchor" href="#_1-11\u3001add-\u89E3\u538B" aria-hidden="true">#</a> 1.11\u3001ADD \u89E3\u538B</h3><p>\u4F5C\u7528\u548C\u4F7F\u7528\u65B9\u6CD5\u548C COPY\u4E00\u6A21\u4E00\u6837\uFF0C\u5728\u6B64\u4E0D\u91CD\u590D\u8BB2\u8FF0\u3002</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code>\u683C\u5F0F\uFF1A
<span class="token instruction"><span class="token keyword">ADD</span> wordpress.tar.gz /opt/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-12\u3001onbuild-\u4E3B\u52A8" tabindex="-1"><a class="header-anchor" href="#_1-12\u3001onbuild-\u4E3B\u52A8" aria-hidden="true">#</a> 1.12\u3001ONBUILD \u4E3B\u52A8</h3><p>ONBUILD \u7528\u4E8E\u914D\u7F6E\u5F53\u524D\u6240\u521B\u5EFA\u7684\u955C\u50CF\u4F5C\u4E3A\u5176\u5B83\u65B0\u521B\u5EFA\u955C\u50CF\u7684\u57FA\u7840\u955C\u50CF\u65F6\uFF0C\u6240\u6267\u884C\u7684 \u64CD\u4F5C\u6307\u4EE4\u3002 \u610F\u601D\u5C31\u662F\uFF1A\u8FD9\u4E2A\u955C\u50CF\u521B\u5EFA\u540E\uFF0C<code>\u5982\u679C\u5176\u5B83\u955C\u50CF\u4EE5\u8FD9\u4E2A\u955C\u50CF\u4E3A\u57FA\u7840\uFF0C\u4F1A\u5148\u6267 \u884C\u8FD9\u4E2A\u955C\u50CF\u7684 ONBUILD \u547D\u4EE4</code></p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code>\u683C\u5F0F\uFF1A 
<span class="token instruction"><span class="token keyword">ONBUILD</span> [INSTRUCTION]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-13\u3001env-\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_1-13\u3001env-\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> 1.13\u3001ENV\uFF1A\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF</h3><p>ENV \u547D\u540D\u7528\u4E8E\u8BBE\u7F6E\u5BB9\u5668\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u8FD9\u4E9B\u53D8\u91CF\u4EE5\u201Dkey=value\u201D\u7684\u5F62\u5F0F\u5B58\u5728\uFF0C\u5728\u5BB9\u5668\u5185 \u88AB\u811A\u672C\u6216\u8005\u7A0B\u5E8F\u8C03\u7528\uFF0C\u5BB9\u5668\u8FD0\u884C\u7684\u65F6\u5019\u8FD9\u4E2A\u53D8\u91CF\u4E5F\u4F1A\u4FDD\u7559\u3002</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code>\u683C\u5F0F\uFF1A 
1\uFF09 \u8BBE\u7F6E\u4E00\u4E2A\uFF1A ENV 
2\uFF09 \u8BBE\u7F6E\u591A\u4E2A\uFF1A ENV = =... 
\u5982\u8BBE\u7F6E\u4E00\u4E2A\u73AF\u5883\u53D8\u91CF JAVA_HOME\uFF0C\u63A5\u4E0B\u6765\u7684\u547D\u540D\u5C31\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u53D8\u91CF\uFF1A 
<span class="token instruction"><span class="token keyword">ENV</span> JAVA_HOME /opt/jdk </span>
<span class="token instruction"><span class="token keyword">ENV</span> PATH <span class="token variable">$PATH</span>:<span class="token variable">$JAVA_HOME</span>/bin </span>
    
\u5728\u4F7F\u7528 ENV \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u65F6\uFF0C\u6709\u51E0\u70B9\u9700\u8981\u6CE8\u610F\uFF1A 
1\uFF09\u5177\u6709\u4F20\u9012\u6027\uFF0C\u4E5F\u5C31\u662F\u5F53\u524D\u955C\u50CF\u88AB\u7528\u4F5C\u5176\u5B83\u955C\u50CF\u7684\u57FA\u7840\u955C\u50CF\u65F6\uFF0C\u65B0\u955C\u50CF\u4F1A\u62E5 \u6709\u5F53\u524D\u8FD9\u4E2A\u57FA\u7840\u955C\u50CF\u6240\u6709\u7684\u73AF\u5883\u53D8\u91CF \uF0B7 
2\uFF09ENV \u5B9A\u4E49\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u53EF\u4EE5\u5728 dockerfile \u88AB\u540E\u9762\u7684\u6240\u6709\u6307\u4EE4\uFF08CMD \u9664\u5916\uFF09 \u4E2D\u4F7F\u7528\uFF0C\u4F46\u4E0D\u80FD\u88AB docker run \u7684\u547D\u4EE4\u53C2\u6570\u5F15\u7528 
\u5982\uFF1A 
<span class="token instruction"><span class="token keyword">ENV</span> tomcat_home_name tomcat_7 </span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir <span class="token variable">$tomcat_home_name</span> </span>

3\uFF09\u9664\u4E86 ENV \u4E4B\u5916\uFF0Cdocker run -e \u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\u4F20\u5165\u5BB9\u5668\u5185\u3002 
\u5982\uFF1A 
ocker run -d tomcat -e &quot;tomcat_home_name=tomcat_7&quot;
\u8FD9\u6837\u6211\u4EEC\u8FDB\u5165\u5BB9\u5668\u5185\u90E8\u7528 ENV \u53EF\u4EE5\u770B\u5230 tomcat_home_name \u8FD9\u4E2A\u73AF\u5883\u53D8\u91CF\u3002 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dockerfile-\u7684\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#dockerfile-\u7684\u7F16\u5199" aria-hidden="true">#</a> Dockerfile \u7684\u7F16\u5199</h3><p>**\u6211\u4EEC\u5148\u770B\u4E00\u4E2A\u4F8B\u5B50 **</p><p>\u7F16\u5199\u4E00\u4E2Adockerfile\uFF0C\u5728 centos \u4E0A\u5B89\u88C5 nginx</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token comment">#\u6307\u5B9A\u57FA\u7840\u955C\u50CF</span>
<span class="token instruction"><span class="token keyword">FROM</span> centos </span>
<span class="token comment">#\u6807\u660E\u8457\u4F5C\u4EBA\u7684\u540D\u79F0\u548C\u90AE\u7BB1 </span>
<span class="token instruction"><span class="token keyword">MAINTAINER</span> jiabuli 649917837@qq.com </span>
<span class="token comment">#\u6D4B\u8BD5\u4E00\u4E0B\u7F51\u7EDC\u73AF\u5883 </span>
<span class="token instruction"><span class="token keyword">RUN</span> ping -c 1 www.baidu.com </span>
<span class="token comment">#\u5B89\u88C5 nginx \u5FC5\u8981\u7684\u4E00\u4E9B\u8F6F\u4EF6 </span>
<span class="token instruction"><span class="token keyword">RUN</span> yum -y install gcc make pcre-devel zlib-devel tar zlib </span>
<span class="token comment">#\u628A nginx \u5B89\u88C5\u5305\u590D\u5236\u5230/usr/src/\u76EE\u5F55\u4E0B </span>
<span class="token instruction"><span class="token keyword">ADD</span> nginx-1.15.8.tar.gz /usr/src/ </span>
<span class="token comment">#\u5207\u6362\u5230/usr/src/nginx-1.15.8 \u7F16\u8BD1\u5E76\u4E14\u5B89\u88C5 nginx </span>
<span class="token instruction"><span class="token keyword">RUN</span> cd /usr/src/nginx-1.15.8 \\     </span>
	&amp;&amp; mkdir /usr/local/nginx \\     
    &amp;&amp; ./configure --prefix=/usr/local/nginx 
    &amp;&amp; make &amp;&amp; make install \\     
    &amp;&amp; ln -s /usr/local/nginx/sbin/nginx /usr/local/sbin/ \\     
    &amp;&amp; nginx 
<span class="token comment">#\u5220\u9664\u5B89\u88C5 nginx \u5B89\u88C5\u76EE\u5F55 </span>
<span class="token instruction"><span class="token keyword">RUN</span> rm -rf /usr/src/nginx-nginx-1.15.8 </span>
<span class="token comment">#\u5BF9\u5916\u66B4\u9732 80 \u7AEF\u53E3 </span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 80 </span>
<span class="token comment">#\u542F\u52A8 nginx </span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;nginx&quot;</span>, <span class="token string">&quot;-g&quot;</span>, <span class="token string">&quot;daemon off;&quot;</span>] </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4E0A\u9762\u7684\u6CE8\u91CA\u5DF2\u7ECF\u8BB2\u7684\u975E\u5E38\u6E05\u695A\uFF0C\u5176\u5B9E\u4E0D\u96BE\u53D1\u73B0\uFF0C\u4E0A\u9762\u7684\u4F8B\u5B50\u5C31\u662F\u7C7B\u4F3C\u4E8E\u5728 centos \u7CFB \u7EDF\u4E0A\u5B89\u88C5\u4E00\u4E2A nginx \u7684\u7684\u4E00\u4E2A\u8FC7\u7A0B\uFF0C\u56E0\u6B64\u7F16\u5199 Dockerfile \u6784\u5EFA\u955C\u50CF\u5C31\u548C\u5728 Linux \u4E0A\u5B89 \u88C5\u8F6F\u4EF6\u7684\u6D41\u7A0B\u51E0\u4E4E\u662F\u4E00\u6A21\u4E00\u6837\u7684\u3002\u6240\u4EE5\u6211\u4EEC\u5728\u7F16\u5199 Dockerfile \u6765\u6784\u5EFA\u955C\u50CF\u65F6\uFF0C\u53EF\u4EE5\u5148 \u601D\u8003\u5728 Linux \u4E0A\u5B89\u88C5\u8BE5\u8F6F\u4EF6\u7684\u6D41\u7A0B\uFF0C\u518D\u7528 Dockerfile \u63D0\u4F9B\u7684\u6307\u4EE4\u8F6C\u5316\u5230 Dockerfile \u4E2D \u5373\u53EF\u3002</p></blockquote><h3 id="\u7528-dockerfile-\u6784\u5EFA\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u7528-dockerfile-\u6784\u5EFA\u955C\u50CF" aria-hidden="true">#</a> \u7528 Dockerfile \u6784\u5EFA\u955C\u50CF</h3><ul><li>\u7528 Dockerfile \u7684\u6838\u5FC3\u5728\u4E8E\u7F16\u5199 Dockerfile\uFF0C\u4F46\u662F\u7F16\u5199\u5B8C\u4E4B\u540E\u6211\u4EEC\u9700\u8981\u77E5\u9053\u600E\u4E48\u4F7F\u7528 Dockerfile \u6765\u6784\u5EFA\u955C\u50CF\uFF0C\u4E0B\u9762\u4EE5\u6784\u5EFA nginx \u955C\u50CF\u4E3A\u4F8B\u6765\u7B80\u8981\u8BF4\u660E\u6784\u5EFA\u6D41\u7A0B</li></ul><h3 id="\u4E0A\u4F20\u5B89\u88C5\u5305" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u5B89\u88C5\u5305" aria-hidden="true">#</a> \u4E0A\u4F20\u5B89\u88C5\u5305</h3><ul><li>\u9996\u5148\u6211\u4EEC\u9700\u8981\u628A\u8981\u6784\u5EFA\u7684\u8F6F\u4EF6\u5B89\u88C5\u5305\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u670D\u52A1\u5668\u76EE\u5F55\u4E0A\u521B\u5EFA \u4E00\u4E2A\u4E13\u95E8\u7684\u6587\u4EF6\u5939\uFF0C\u5982\uFF1A/var/nginx_build,\u7136\u540E\u628A\u4ECE nginx \u5B98\u7F51\u4E0B\u8F7D\u7684 nginx1.15.8.tar.gz \u5B89\u88C5\u5305\u4E0A\u4F20\u5230\u8FD9\u4E2A\u76EE\u5F55\u91CC\u3002</li></ul><h3 id="\u7F16\u5199-dockerfile" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199-dockerfile" aria-hidden="true">#</a> \u7F16\u5199 Dockerfile</h3><ul><li>\u5982\u4F55\u7F16\u5199 nginx \u7684 Dockerfile \u4E0A\u9762\u5DF2\u7ECF\u8BE6\u7EC6\u4ECB\u7ECD\uFF0C\u73B0\u5728\u6211\u4EEC\u53EA\u9700\u628A\u7F16\u5199\u597D\u7684 Dockerfile \u4E0A\u4F20\u5230/var/nginx_build \u76EE\u5F55\u4E0B\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u5728\u670D\u52A1\u5668\u4E0A\u76F4\u63A5\u7F16\u5199 Dockerfile\uFF0C\u4F46\u662F\u8981\u8BB0\u5F97\u4E00\u5B9A\u4FDD\u8BC1 Dockerfile \u6587\u4EF6\u548C\u5B89\u88C5\u5305\u5728\u4E00\u4E2A\u76EE\u5F55\u4E0B\u3002</li></ul><h3 id="\u8FD0\u884C\u6784\u5EFA\u547D\u4EE4\u6784\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u6784\u5EFA\u547D\u4EE4\u6784\u5EFA" aria-hidden="true">#</a> \u8FD0\u884C\u6784\u5EFA\u547D\u4EE4\u6784\u5EFA</h3><p>docker build \u547D\u4EE4\u7528\u4E8E\u4F7F\u7528 Dockerfile \u521B\u5EFA\u955C\u50CF\u3002 \u683C\u5F0F\uFF1A</p><p><code>docker build [OPTIONS] PATH | URL |</code></p><ul><li>OPTIONS \u6709\u5F88\u591A\u6307\u4EE4\uFF0C\u4E0B\u9762\u5217\u4E3E\u51E0\u4E2A\u5E38\u7528\u7684\uFF1A</li><li>-build-arg=[] : \u8BBE\u7F6E\u955C\u50CF\u521B\u5EFA\u65F6\u7684\u53D8\u91CF\uFF1B</li><li>-f : <code>\u6307\u5B9A\u8981\u4F7F\u7528\u7684 Dockerfile \u8DEF\u5F84\uFF1B</code></li><li>-force-rm : \u8BBE\u7F6E\u955C\u50CF\u8FC7\u7A0B\u4E2D\u5220\u9664\u4E2D\u95F4\u5BB9\u5668\uFF1B</li><li>-rm : \u8BBE\u7F6E\u955C\u50CF\u6210\u529F\u540E\u5220\u9664\u4E2D\u95F4\u5BB9\u5668\uFF1B</li><li>-tag, -t: <code>\u955C\u50CF\u7684\u540D\u5B57\u53CA\u6807\u7B7E\uFF0C\u901A\u5E38 name:tag \u6216\u8005 name \u683C\u5F0F\uFF1B</code></li></ul><p><code>\u56E0\u6B64\u6211\u4EEC\u6784\u5EFA nginx \u53EF\u4EE5\u7528\u4EE5\u4E0B\u547D\u4EE4</code> docker build -t nginx:v1.0 .</p><blockquote><p>\u5F53 Dockerfile \u548C\u5F53\u524D\u6267\u884C\u547D\u4EE4\u7684\u76EE\u5F55\u4E0D\u5728\u540C\u4E00\u4E2A\u65F6\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u6307\u5B9A Dockerfile\uFF0C\u5982 docker build -f /var/nginx_build/Dockerfile . \u6267\u884C\u547D\u540D\u4E4B\u540E\uFF0C\u4F1A\u770B\u5230\u63A7\u5236\u53F0\u9010\u5C42\u8F93\u51FA\u6784\u5EFA\u5185\u5BB9\uFF0C\u76F4\u5230\u8F93\u51FA\u4E24\u4E2A Successfully \u5373\u4E3A\u6784 \u5EFA\u6210\u529F\u3002</p></blockquote>`,84),r=[d];function l(c,o){return n(),s("div",null,r)}const p=e(i,[["render",l],["__file","03.Dockerfile\u8BE6\u89E3.html.vue"]]);export{p as default};
