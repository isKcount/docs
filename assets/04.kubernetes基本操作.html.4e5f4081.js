import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.ca0279c0.js";const t={},o=e(`<h1 id="kubernetes\u7684\u57FA\u7840\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#kubernetes\u7684\u57FA\u7840\u64CD\u4F5C" aria-hidden="true">#</a> Kubernetes\u7684\u57FA\u7840\u64CD\u4F5C</h1><h2 id="kubernetes\u7684\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#kubernetes\u7684\u7248\u672C" aria-hidden="true">#</a> Kubernetes\u7684\u7248\u672C</h2><p>versi\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl version </span>
Client Version: version.Info<span class="token punctuation">{</span>Major:<span class="token string">&quot;1&quot;</span>, Minor:<span class="token string">&quot;18&quot;</span>, GitVersion:<span class="token string">&quot;v1.18.1&quot;</span>, GitCommit:<span class="token string">&quot;7879fc12a63337efff607952a323df90cdc7a335&quot;</span>, GitTreeState:<span class="token string">&quot;clean&quot;</span>, BuildDate:<span class="token string">&quot;2020-04-08T17:38:50Z&quot;</span>, GoVersion:<span class="token string">&quot;go1.13.9&quot;</span>, Compiler:<span class="token string">&quot;gc&quot;</span>, Platform:<span class="token string">&quot;linux/amd64&quot;</span><span class="token punctuation">}</span>Server Version: version.Info<span class="token punctuation">{</span>Major:<span class="token string">&quot;1&quot;</span>, Minor:<span class="token string">&quot;18&quot;</span>, GitVersion:<span class="token string">&quot;v1.18.1&quot;</span>, GitCommit:<span class="token string">&quot;7879fc12a63337efff607952a323df90cdc7a335&quot;</span>, GitTreeState:<span class="token string">&quot;clean&quot;</span>, BuildDate:<span class="token string">&quot;2020-04-08T17:30:47Z&quot;</span>, GoVersion:<span class="token string">&quot;go1.13.9&quot;</span>, Compiler:<span class="token string">&quot;gc&quot;</span>, Platform:<span class="token string">&quot;linux/amd64&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kubeadm-reset" tabindex="-1"><a class="header-anchor" href="#kubeadm-reset" aria-hidden="true">#</a> Kubeadm reset</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubeadm reset \u6E05\u7A7A\u5B9E\u9A8C\u73AF\u5883</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="kubeadm-init" tabindex="-1"><a class="header-anchor" href="#kubeadm-init" aria-hidden="true">#</a> Kubeadm init</h2><blockquote><p><strong>kubeadm init\u505A\u4E86\u54EA\u4E9B\u5DE5\u4F5C\uFF1F</strong></p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubeadm init \u90E8\u7F72\u5B9E\u9A8C\u73AF\u5883</span>

<span class="token punctuation">[</span>preflight<span class="token punctuation">]</span> \u73AF\u5883\u68C0\u67E5\u548C\u62C9\u53D6\u955C\u50CF\uFF08kubeadm config images pull\uFF09
<span class="token punctuation">[</span>certs<span class="token punctuation">]</span> \u521B\u5EFA\u8BC1\u4E66\u76EE\u5F55/etc/kubernetes/pki\uFF0C\u751F\u6210\u8BC1\u4E66
<span class="token punctuation">[</span>kubeconfig<span class="token punctuation">]</span> \u521B\u5EFA\u8FDE\u63A5apiserver\u7684\u914D\u7F6E\u6587\u4EF6\u76EE\u5F55/etc/kubernetes
<span class="token punctuation">[</span>kubelet-start<span class="token punctuation">]</span> \u751F\u6210kubelet\u914D\u7F6E\u6587\u4EF6\u548C\u542F\u52A8
<span class="token punctuation">[</span>control-plane<span class="token punctuation">]</span> \u4F7F\u7528\u9759\u6001pod\u542F\u52A8master\u7EC4\u4EF6 /etc/kubernetes/manifests
<span class="token punctuation">[</span>upload-config<span class="token punctuation">]</span> <span class="token punctuation">[</span>upload-certs<span class="token punctuation">]</span>  <span class="token punctuation">[</span>kubelet<span class="token punctuation">]</span> \u4F7F\u7528 ConfigMap \u5B58\u50A8kubelet\u914D\u7F6E
<span class="token punctuation">[</span>mark-control-plane<span class="token punctuation">]</span> \u7ED9master\u8282\u70B9\u6DFB\u52A0\u6807\u7B7E
<span class="token punctuation">[</span>bootstrap-token<span class="token punctuation">]</span> kubelet\u81EA\u52A8\u7533\u8BF7\u8BC1\u4E66\u673A\u5236
<span class="token punctuation">[</span>addons<span class="token punctuation">]</span> \u5B89\u88C5\u63D2\u4EF6CoreDNS\u548Ckube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E3A\u4EC0\u4E48\u90E8\u7F72cni\u7F51\u7EDC\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u90E8\u7F72cni\u7F51\u7EDC\u7EC4\u4EF6" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u90E8\u7F72CNI\u7F51\u7EDC\u7EC4\u4EF6\uFF1F</h2><ul><li><strong>Q1\uFF1A\u3000\u4E24\u8FB9\u7684\u5BB9\u5668ip\u662F\u4E00\u6837\u7684</strong></li><li><strong>Q2\uFF1A\u3000\u5BB9\u56681\u8BBF\u95EE\u5BB9\u56682\uFF0C\u5BB9\u56681\u600E\u4E48\u77E5\u9053\u5BB9\u56682\u5728\u54EA\u4E2Adocker\u4E3B\u673A\uFF1F</strong></li><li><strong>Q3\uFF1A\u3000\u5BB9\u5668\uFF11\u8BBF\u95EE\u5BB9\u5668\uFF12\u6570\u636E\u5305\u662F\u600E\u4E48\u4F20\u8F93\u8FC7\u53BB\u7684\uFF1F</strong></li></ul><p><strong>\u9A8C\u8BC1\u7ED3\u679C</strong></p><p>\u4F7F\u7528docker run\u8FD0\u884C\u4E00\u4E2Anginx\uFF0C\u5E76\u4E14\u67E5\u770B\u5BB9\u5668\u7684IP\u5730\u5740</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># docker run -d --name nginx nginx:latest </span>
a1a0846b2fbc01ac7a6dc5a67b0c37545386d8689f38bdb6e9251048f22ca200
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># docker inspect nginx </span>
                    <span class="token string">&quot;IPAMConfig&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Links&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Aliases&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;NetworkID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;4f998a89be2f45e879a9d33ab040bb0f71725a0a16b865225156fd3b101bb68f&quot;</span>,
                    <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;6a24ce452aa44fa4fbd3111902829aeaa1b56fcf0086aff32855e6a00a0cdec9&quot;</span>,
                    <span class="token string">&quot;Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.1&quot;</span>,  
                    <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.17.0.2&quot;</span>,    <span class="token comment">#ip\u5730\u5740</span>
                    <span class="token string">&quot;IPPrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">16</span>,
                    <span class="token string">&quot;IPv6Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6PrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
                    <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:11:00:02&quot;</span>,
                    <span class="token string">&quot;DriverOpts&quot;</span><span class="token builtin class-name">:</span> null
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>\u8BBF\u95EE\u5BB9\u5668\u5185\u7684\u5730\u5740</strong></p></blockquote><p><strong>master\u548Cnode\u8282\u70B9\u90FD\u80FD\u8BBF\u95EE</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># ping 172.17.0.1</span>
PING <span class="token number">172.17</span>.0.1 <span class="token punctuation">(</span><span class="token number">172.17</span>.0.1<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">172.17</span>.0.1: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.089</span> ms

<span class="token punctuation">[</span>root@node ~<span class="token punctuation">]</span><span class="token comment"># ping 172.17.0.1</span>
PING <span class="token number">172.17</span>.0.1 <span class="token punctuation">(</span><span class="token number">172.17</span>.0.1<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">172.17</span>.0.1: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.371</span> ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="k8s\u7684-cni\u7F51\u7EDC\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#k8s\u7684-cni\u7F51\u7EDC\u6A21\u578B" aria-hidden="true">#</a> K8s\u7684 CNI\u7F51\u7EDC\u6A21\u578B</h2><blockquote><p><strong>K8s\u662F\u4E00\u4E2A\u6241\u5E73\u5316\u7F51\u7EDC</strong></p></blockquote><p><strong>\u5373\u6240\u6709\u90E8\u7F72\u7684\u7F51\u7EDC\u7EC4\u4EF6\u90FD\u5FC5\u987B\u6EE1\u8DB3\u5982\u4E0B\u8981\u6C42\uFF1A</strong></p><ul><li><strong>\u4E00\u4E2APod\u4E00\u4E2AIP</strong></li><li><strong>\u6240\u6709\u7684Pod\u53EF\u4EE5\u4E0E\u4EFB\u4F55\u5176\u4ED6Pod\u76F4\u63A5\u901A\u4FE1</strong></li><li><strong>\u6240\u6709\u8282\u70B9\u53EF\u4EE5\u4E0E\u6240\u6709Pod\u76F4\u63A5\u901A\u4FE1</strong></li><li><strong>Pod\u5185\u90E8\u83B7\u53D6\u5230\u7684IP\u5730\u5740\u4E0E\u5176\u4ED6Pod\u6216\u8282\u70B9\u4E0E\u5176\u4ED6\u901A\u4FE1\u7684IP\u5730\u5740\u662F\u540C\u4E00\u4E2A</strong></li><li><strong>\u4E3B\u6D41\u7684\u7F51\u7EDC\u7EC4\u4EF6\u6709\uFF1A Flannel Calico\u7B49</strong></li></ul><h2 id="\u7ED3\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u8BBA" aria-hidden="true">#</a> \u7ED3\u8BBA</h2><p><strong>\u5728\u76F8\u540C\u7684\u7F51\u7EDC\u4E2D\u6CA1\u6709\u6307\u5B9Adocker\u7684\u7F51\u7EDC\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BBF\u95EE\u5BB9\u5668\u7684ip\u5730\u5740 \u53EF\u4EE5\u67E5\u770B\u5230\u662F\u5728\u54EA\u4E2Adocker\u7684\u4E3B\u673A\u4E0A\u9762\u3002</strong></p><p><strong>\u5BB9\u56681\u8BBF\u95EE\u5BB9\u56682\u7684\u6570\u636E\u5305\u7684\u65F6\u5019 \u53EF\u4EE5\u505A\u8DEF\u7531\u4E92\u76F8\u8BBF\u95EE</strong></p><h2 id="kubeconfig\u7684\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#kubeconfig\u7684\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> kubeconfig\u7684\u914D\u7F6E\u6587\u4EF6</h2><blockquote><h4 id="kubectl\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#kubectl\u7684\u4F7F\u7528" aria-hidden="true">#</a> kubectl\u7684\u4F7F\u7528</h4></blockquote><p><strong>\u5728master\u8282\u70B9\u4E0A\u9762\u53EF\u4EE5\u4F7F\u7528kubectl\u547D\u4EE4</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get nodes </span>
NAME     STATUS   ROLES    AGE    VERSION
master   Ready    master   130m   v1.18.1
<span class="token function">node</span>     Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   94m    v1.18.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4F46\u662F\u5728node\u8282\u70B9\u4E0A\u9762\u4F1A\u62A5\u9519 \u663E\u793A\u6CA1\u6709port\u6216\u8005\u76F4\u63A5error</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node ~<span class="token punctuation">]</span><span class="token comment"># kubectl get node </span>
error: no configuration has been provided, try setting KUBERNETES_MASTER environment variable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u53EA\u9700\u8981\u5C06master\u8282\u70B9\u7684/root/.kube/config \u62F7\u8D1D\u5230node\u8282\u70B9</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># scp /root/.kube/config root@node:~</span>
config                                                          <span class="token number">100</span>% <span class="token number">5454</span>     <span class="token number">2</span>.0MB/s   00:00

<span class="token punctuation">[</span>root@node ~<span class="token punctuation">]</span><span class="token comment"># mkdir .kube</span>
<span class="token punctuation">[</span>root@node ~<span class="token punctuation">]</span><span class="token comment"># mv config  .kube/</span>
<span class="token punctuation">[</span>root@node ~<span class="token punctuation">]</span><span class="token comment"># kubectl get nodes</span>
&#39; NAME     STATUS   ROLES    AGE    VERSION
master   Ready    master   129m   v1.18.1
<span class="token function">node</span>     Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   93m    v1.18.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="\u4F7F\u7528-kubeconfig" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-kubeconfig" aria-hidden="true">#</a> \u4F7F\u7528--kubeconfig</h4></blockquote><p><strong>\u5728node\u8282\u70B9\u4E0A\u9762\u4F7F\u7528kubectl\u547D\u4EE4\u7684\u65F6\u5019\u53EF\u4EE5\u6307\u5B9Akubeconfig\u7684\u8DEF\u5F84</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@node ~<span class="token punctuation">]</span><span class="token comment">#  mv /root/.kube/config  /tmp/ </span>
<span class="token punctuation">[</span>root@node ~<span class="token punctuation">]</span><span class="token comment"># kubectl get nodes </span>
&#39;error: no configuration has been provided, try setting KUBERNETES_MASTER environment variable

<span class="token punctuation">[</span>root@node ~<span class="token punctuation">]</span><span class="token comment"># kubectl --kubeconfig=/tmp/config get node</span>
NAME     STATUS   ROLES    AGE    VERSION
master   Ready    master   136m   v1.18.1
<span class="token function">node</span>     Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   99m    v1.18.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="completion\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#completion\u547D\u4EE4" aria-hidden="true">#</a> completion\u547D\u4EE4</h4></blockquote><p><strong>kubectl\u5DE5\u5177\u81EA\u52A8\u8865\u5168\uFF0Csource &lt; (kubectl completion bash) (\u4F9D\u8D56\u8F6F\u4EF6\u5305bash-completion)</strong></p><p><strong>\u4F7F\u7528kubectl\u547D\u4EE4\u7684\u65F6\u5019\u53EF\u4EE5tab\u5065\u8865\u9F50\u547D\u4EE4</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># yum install -y bash-completion </span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># source   /usr/share/bash-completion/bash_completion </span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># bash </span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># source  &lt;( kubectl completion bash)  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kubernetes\u5C06\u5F03\u7528docker" tabindex="-1"><a class="header-anchor" href="#kubernetes\u5C06\u5F03\u7528docker" aria-hidden="true">#</a> Kubernetes\u5C06\u5F03\u7528Docker</h2><p><strong>\u5728Kubernetes\u5E73\u53F0\u4E2D\uFF0C\u4E3A\u4E86\u89E3\u51B3\u4E0E\u5BB9\u5668\u8FD0\u884C\u65F6\uFF0C\uFF08\u4F8B\u5982Docker\uFF09\u96C6\u6210\u95EE\u9898\uFF0C\u5728\u65E9\u671F\u793E\u533A\u63A8\u51FACRI\uFF08Container Runtime Interface\uFF0C\u5BB9\u5668\u8FD0\u884C\u65F6\u63A5\u53E3\uFF09\uFF0C\u4EE5\u652F\u6301\u66F4\u591A\u7684\u5BB9\u5668\u8FD0\u884C\u65F6\u3002</strong></p><p><strong>Kubernetes\u8BA1\u5212\u5F03\u7528\u5C31\u662Fkubelet\u4E2Ddockershim\u3002\u5373Kubernetes kubelet\u5B9E\u73B0\u4E2D\u7684\u7EC4\u4EF6\u4E4B\u4E00\uFF0C\u5B83\u80FD\u591F\u4E0EDocker Engine\u8FDB\u884C\u901A\u4FE1\u3002</strong></p><blockquote><h4 id="\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u505A" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u505A" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8FD9\u4E48\u505A\uFF1F</h4></blockquote><p><strong>Docker\u5185\u90E8\u8C03\u7528\u94FE\u6BD4\u8F83\u590D\u6742\uFF0C\u591A\u5C42\u5C01\u88C5\u548C\u8C03\u7528\uFF0C\u5BFC\u81F4\u6027\u80FD\u964D\u4F4E\uFF0C\u63D0\u5347\u6545\u969C\u7387\uFF0C\u4E0D\u6613\u6392\u67E5\u3002</strong></p><p><strong>Docker\u8FD8\u4F1A\u5728\u5BBF\u4E3B\u673A\u521B\u5EFA\u7F51\u7EDC\u89C4\u5219\uFF0C\u5B58\u50A8\u5377\uFF0C\u4E5F\u5E26\u6765\u4E86\u5B89\u5168\u9690\u60A3\u3002</strong></p><blockquote><h4 id="\u5982\u4F55\u5E94\u5BF9" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5E94\u5BF9" aria-hidden="true">#</a> \u5982\u4F55\u5E94\u5BF9\uFF1F</h4></blockquote><p><strong>\u5728\u672A\u6765\u7684Kubernetes\u7248\u672C\u5F7B\u5E95\u653E\u5F03Docker\u652F\u6301\u4E4B\u524D\uFF0C\u5F15\u5165\u53D7\u652F\u6301\u7684\u5BB9\u5668\u8FD0\u884C\u65F6\u3002</strong></p><p><strong>\u9664\u4E86docker\u4E4B\u5916\uFF0CCRI\u8FD8\u652F\u6301\u5F88\u591A\u5BB9\u5668\u8FD0\u884C\u65F6\uFF0C\u4F8B\u5982\uFF1A</strong></p><ul><li><strong>containerd\uFF1A containerd\u4E0EDocker\u76F8\u4E92\u517C\u5BB9\uFF0C\u76F8\u6BD4Docker\u8F7B\u91CF\u5F88\u591A\uFF0C\u76EE\u524D\u6BD4\u8F83\u6210\u719F</strong></li><li><strong>cri-o,podman\uFF1A \u90FD\u662F\u7EA2\u5E3D\uFF08Redhat\uFF09\u9879\u76EE\uFF0C\u76EE\u524D\u7EA2\u5E3D\u4E3B\u63A8podman</strong></li><li><strong>\u5728kubernetes V1.20\u540E\u652F\u6301containerd</strong></li></ul><h2 id="\u57FA\u672C\u8D44\u6E90\u7684\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u8D44\u6E90\u7684\u6982\u5FF5" aria-hidden="true">#</a> \u57FA\u672C\u8D44\u6E90\u7684\u6982\u5FF5</h2><ul><li><code>Pod</code>\uFF1AK8s\u6700\u5C0F\u7684\u90E8\u7F72\u5355\u5143\uFF0C\u4E00\u7EC4\u5BB9\u5668\u7684\u96C6\u5408-</li><li><code>Deployment</code>\uFF1A \u6700\u5E38\u89C1\u989D\u63A7\u5236\u5668\uFF0C\u7528\u4E8E\u66F4\u9AD8\u7EA7\u522B\u90E8\u7F72\u548C\u7BA1\u7406Pod-</li><li><code>Service</code>\uFF1A \u4E3A\u4E00\u7EC4Pod\u63D0\u4F9B\u8D1F\u8F7D\u5747\u8861\uFF0C\u5BF9\u5916\u63D0\u4F9B\u540C\u4E00\u7684\u8BBF\u95EE\u5165\u53E3-</li><li><code>Label</code>: \u6807\u7B7E\uFF0C\u9644\u52A0\u5230\u67D0\u4E2A\u8D44\u6E90\u4E0A\uFF0C\u7528\u4E8E\u5173\u8054\u5BF9\u8C61\uFF0C\u67E5\u8BE2\u548C\u7B5B\u9009-</li><li><code>Namespaces</code>\uFF1A \u547D\u540D\u7A7A\u95F4\uFF0C\u5C06\u5BF9\u8C61\u903B\u8F91\u4E0A\u9694\u79BB\uFF0C\u4E5F\u5229\u4E8E\u6743\u9650\u63A7\u5236</li></ul><h4 id="\u67E5\u770B\u5BB9\u5668\u7684\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5BB9\u5668\u7684\u65E5\u5FD7" aria-hidden="true">#</a> \u67E5\u770B\u5BB9\u5668\u7684\u65E5\u5FD7</h4><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>[root@master ~]# kubectl logs &lt;\u5BB9\u5668\u540D\u79F0&gt; -n kube-system 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n kube-system  </span>
NAME                             READY   STATUS    RESTARTS   AGE
coredns-d9d48f6bf-8ktqq          <span class="token number">1</span>/1     Running   <span class="token number">0</span>          48m
coredns-d9d48f6bf-jlhgl          <span class="token number">1</span>/1     Running   <span class="token number">0</span>          48m
etcd-master                      <span class="token number">1</span>/1     Running   <span class="token number">0</span>          48m
kube-apiserver-master            <span class="token number">1</span>/1     Running   <span class="token number">0</span>          48m
kube-controller-manager-master   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          48m
kube-flannel-ds-7fg7n            <span class="token number">1</span>/1     Running   <span class="token number">0</span>          12m
kube-flannel-ds-jvwsl            <span class="token number">1</span>/1     Running   <span class="token number">0</span>          48m
kube-proxy-flk2z                 <span class="token number">1</span>/1     Running   <span class="token number">0</span>          48m
kube-proxy-r8ztx                 <span class="token number">1</span>/1     Running   <span class="token number">0</span>          12m
kube-scheduler-master            <span class="token number">1</span>/1     Running   <span class="token number">0</span>          48m

<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl logs coredns-d9d48f6bf-8ktqq  -n  kube-system             </span>
.:53
<span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> plugin/reload: Running configuration MD5 <span class="token operator">=</span> 4e235fcc3696966e76816bcd9034ebc7
CoreDNS-1.6.7
linux/amd64, go1.13.6, da7f65b
<span class="token punctuation">[</span>ERROR<span class="token punctuation">]</span> plugin/errors: <span class="token number">2</span> <span class="token number">8198651563338055206.150263447128682679</span>. HINFO: <span class="token builtin class-name">read</span> udp <span class="token number">10.244</span>.0.3:50822-<span class="token operator">&gt;</span><span class="token number">172.25</span>.254.2:53: i/o <span class="token function">timeout</span>
<span class="token punctuation">[</span>ERROR<span class="token punctuation">]</span> plugin/errors: <span class="token number">2</span> <span class="token number">8198651563338055206.150263447128682679</span>. HINFO: <span class="token builtin class-name">read</span> udp <span class="token number">10.244</span>.0.3:40375-<span class="token operator">&gt;</span><span class="token number">172.25</span>.253.1:53: i/o <span class="token function">timeout</span>
<span class="token punctuation">[</span>ERROR<span class="token punctuation">]</span> plugin/errors: <span class="token number">2</span> <span class="token number">8198651563338055206.150263447128682679</span>. HINFO: <span class="token builtin class-name">read</span> udp <span class="token number">10.244</span>.0.3:39816-<span class="token operator">&gt;</span><span class="token number">172.25</span>.254.2:53: i/o <span class="token function">timeout</span>
<span class="token punctuation">[</span>ERROR<span class="token punctuation">]</span> plugin/errors: <span class="token number">2</span> <span class="token number">8198651563338055206.150263447128682679</span>. HINFO: <span class="token builtin class-name">read</span> udp <span class="token number">10.244</span>.0.3:33657-<span class="token operator">&gt;</span><span class="token number">172.25</span>.254.2:53: i/o <span class="token function">timeout</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u67E5\u770B\u5BB9\u5668\u7684\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5BB9\u5668\u7684\u4E8B\u4EF6" aria-hidden="true">#</a> \u67E5\u770B\u5BB9\u5668\u7684\u4E8B\u4EF6</h4><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>[root@master ~]# kubectl describe pod &lt;\u5BB9\u5668\u540D\u79F0&gt; -n kube-system 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@master ~]# kubectl get pods -n kube-system  
NAME                             READY   STATUS    RESTARTS   AGE
coredns-d9d48f6bf-8ktqq          1/1     Running   0          48m
coredns-d9d48f6bf-jlhgl          1/1     Running   0          48m
etcd-master                      1/1     Running   0          48m
kube-apiserver-master            1/1     Running   0          48m
kube-controller-manager-master   1/1     Running   0          48m
kube-flannel-ds-7fg7n            1/1     Running   0          12m
kube-flannel-ds-jvwsl            1/1     Running   0          48m
kube-proxy-flk2z                 1/1     Running   0          48m
kube-proxy-r8ztx                 1/1     Running   0          12m
kube-scheduler-master            1/1     Running   0          48m

[root@master ~]# kubectl describe pods etcd-master -n kube-system 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u67E5\u770B\u8D44\u6E90\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u8D44\u6E90\u6807\u7B7E" aria-hidden="true">#</a> \u67E5\u770B\u8D44\u6E90\u6807\u7B7E</h4><p><strong>\u67E5\u770Bpod\u7684\u6807\u7B7E</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>NAME                   READY   STATUS    RESTARTS   AGE   LABELS
web-756987f8f4-8rwwp   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          40m   <span class="token assign-left variable">app</span><span class="token operator">=</span>web,pod-template-hash<span class="token operator">=</span>756987f8f4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u67E5\u770Bservice\u7684\u6807\u7B7E</strong></p><p><strong>\u53EF\u4EE5\u53D1\u73B0pod\u548Cservice\u7684\u6807\u7B7Eapp=web\u7684\uFF0C\u6240\u4EE5service\u624D\u5BF9web\u7684pod\u751F\u6548\u3002</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl  get service --show-labels</span>
NAME         TYPE        CLUSTER-IP      EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>        AGE   LABELS
kubernetes   ClusterIP   <span class="token number">10.96</span>.0.1       <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP        12h   <span class="token assign-left variable">component</span><span class="token operator">=</span>apiserver,provider<span class="token operator">=</span>kubernetes
web          NodePort    <span class="token number">10.99</span>.251.101   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>:30746/TCP   16m   <span class="token assign-left variable">app</span><span class="token operator">=</span>web
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u67E5\u770B\u7B5B\u9009\u7684\u6807\u7B7E</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get deployment -n aliang-cka </span>
NAME    READY   UP-TO-DATE   AVAILABLE   AGE
pod-1   <span class="token number">1</span>/1     <span class="token number">1</span>            <span class="token number">0</span>           8m21s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h2 id="\u547D\u540D\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u7A7A\u95F4" aria-hidden="true">#</a> \u547D\u540D\u7A7A\u95F4</h2></blockquote><p><strong>\u547D\u540D\u7A7A\u95F4\uFF08Namespace\uFF09</strong>\uFF1AKubernetes\u5C06\u8D44\u6E90\u5BF9\u8C61\u903B\u8F91\u4E0A\u9694\u79BB\uFF0C\u4ECE\u800C\u5F62\u6210\u591A\u4E2A\u865A\u62DF\u96C6\u7FA4\u3002</p><p><strong><code>\u5E94\u7528\u573A\u666F\uFF1A</code></strong></p><ul><li><strong>\u6839\u636E\u4E0D\u540C\u7684\u56E2\u961F\u5212\u5206\u547D\u540D\u7A7A\u95F4</strong></li><li><strong>\u6839\u636E\u9879\u76EE\u5212\u5206\u547D\u540D\u7A7A\u95F4</strong></li></ul><p><strong><code>kubectl get namespace\uFF1A</code></strong></p><ul><li><strong>default\uFF1A \u9ED8\u8BA4\u547D\u540D\u7A7A\u95F4</strong></li><li><strong>kube-system\uFF1A k8s\u7CFB\u7EDF\u65B9\u9762\u7684\u547D\u540D\u7A7A\u95F4</strong></li><li><strong>kube-public\uFF1A \u516C\u5F00\u7684\u547D\u540D\u7A7A\u95F4\uFF0C\u8C01\u90FD\u53EF\u4EE5\u8BBF\u95EE</strong></li><li><strong>kube-node-lease\uFF1A k8s\u5185\u90E8\u547D\u540D\u7A7A\u95F4</strong></li></ul><p><strong><code>\u4E24\u79CD\u65B9\u6CD5\u6307\u5B9A\u8D44\u6E90\u547D\u540D\u7A7A\u95F4\uFF1A</code></strong></p><ul><li><strong>\u547D\u4EE4\u884C\u52A0 -n</strong></li><li><strong>yaml\u8D44\u6E90\u5143\u6570\u636E\u91CC\u9762\u6307\u5B9Anamespace\u5B57\u6BB5</strong></li></ul><h4 id="namespace\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#namespace\u547D\u4EE4" aria-hidden="true">#</a> namespace\u547D\u4EE4</h4><p>\u67E5\u770B\u547D\u540D\u7A7A\u95F4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get namespace </span>
 NAME                   STATUS   AGE
default                Active   12h
kube-node-lease        Active   12h
kube-public            Active   12h
kube-system            Active   12h
kubernetes-dashboard   Active   12h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u521B\u5EFAnamespace" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAnamespace" aria-hidden="true">#</a> \u521B\u5EFANamespace</h4><p>\u4E0D\u8981\u5BB3\u6015\u521B\u5EFAnamespace\u3002\u5B83\u4E0D\u4F1A\u964D\u4F4E\u670D\u52A1\u7684\u6027\u80FD\uFF0C\u53CD\u800C\u5927\u591A\u60C5\u51B5\u4E0B\u4F1A\u63D0\u5347\u4F60\u7684\u5DE5\u4F5C\u6548\u7387\u3002 \u521B\u5EFAnamespace\u53EA\u9700\u4E00\u4E2A\u5F88\u7B80\u5355\u7684\u547D\u4EE4\uFF0C\u4F8B\u5982\uFF0C\u521B\u5EFA\u4E00\u4E2A\u540D\u5B57\u4E3A\uFF1Atest\u7684namespace\uFF0C\u6267\u884C\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl create namespace test</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># cat test.yaml</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Namespace
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> test
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u547D\u540D\u7A7A\u95F4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get namespace </span>
 NAME                   STATUS   AGE
default                Active   12h
kube-node-lease        Active   12h
kube-public            Active   12h
kube-system            Active   12h
kubernetes-dashboard   Active   12h
<span class="token builtin class-name">test</span>				   Active	1ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,81),i=[o];function l(c,p){return s(),a("div",null,i)}const d=n(t,[["render",l],["__file","04.kubernetes\u57FA\u672C\u64CD\u4F5C.html.vue"]]);export{d as default};
