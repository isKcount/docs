import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as i,a as n,b as s,d as l,f as a,r as c}from"./app.ca0279c0.js";const o={},u=a(`<h1 id="kubernetes" tabindex="-1"><a class="header-anchor" href="#kubernetes" aria-hidden="true">#</a> <strong>Kubernetes</strong></h1><h2 id="\u4F7F\u7528kubeadm\u5B89\u88C5kubernetes" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528kubeadm\u5B89\u88C5kubernetes" aria-hidden="true">#</a> \u4F7F\u7528kubeadm\u5B89\u88C5kubernetes</h2><p><strong>\u5B89\u88C5\u8981\u6C42\uFF1A</strong></p><ul><li>\u4E00\u53F0\u6216\u8005\u591A\u53F0\u670D\u52A1\u5668\uFF0C\u64CD\u4F5C\u7CFB\u7EDFCentos7.6</li><li>\u96C6\u7FA4\u4E4B\u95F4\u6240\u6709\u673A\u5668\u8981\u4E92\u901A \u9700\u8981\u5173\u95ED\u9632\u706B\u5899</li><li>\u53EF\u4EE5\u8BBF\u95EE\u5916\u7F51\uFF0C\u9700\u8981\u62C9\u53D6\u955C\u50CF</li><li>\u7981\u6B62swap\u5206\u533A</li><li>\u4F7F\u7528kubeadm\u642D\u5EFA\u96C6\u7FA4\uFF1A apiserver\u3001etcd\u3001controller-manager\u3001scheduler\u3001<strong>kubelet\uFF08systemd\u5B88\u62A4\u8FDB\u7A0B\u7BA1\u7406\uFF0C\u5176\u4ED6\u7EC4\u4EF6\u90FD\u662F\u91C7\u7528\u5BB9\u5668\u90E8\u7F72\uFF09</strong>\u3001kube-proxy</li></ul><img src="https://pic.imgdb.cn/item/61ebed4b2ab3f51d911457fd.png" style="zoom:50%;"><table><thead><tr><th>\u89D2\u8272</th><th>IP</th></tr></thead><tbody><tr><td>k8s-master</td><td>10.10.10.128</td></tr><tr><td>k8s-node1</td><td>10.10.10.129</td></tr><tr><td>k8s-node2</td><td>10.10.10.130</td></tr></tbody></table><blockquote><h3 id="\u642D\u5EFAkubernetes-\u51C6\u5907\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFAkubernetes-\u51C6\u5907\u73AF\u5883" aria-hidden="true">#</a> \u642D\u5EFAKubernetes\uFF08\u51C6\u5907\u73AF\u5883\uFF09</h3></blockquote><p><strong>\u6240\u6709\u7684\u8282\u70B9\u9700\u8981\u505A\u4EE5\u4E0B\u7684\u524D\u671F\u5DE5\u4F5C\uFF0C\u4FDD\u8BC1\u642D\u5EFA\u7684\u65F6\u5019\u4E0D\u4F1A\u51FA\u73B0\u610F\u5916\u60C5\u51B5\u3002</strong></p><h3 id="\u66F4\u6539\u4E3B\u673A\u540D\u79F0" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6539\u4E3B\u673A\u540D\u79F0" aria-hidden="true">#</a> <strong>\u66F4\u6539\u4E3B\u673A\u540D\u79F0\uFF1A</strong></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># hostnamectl set-hostname k8s-master </span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># hostnamectl set-hostname k8s-node1 </span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># hostnamectl set-hostname k8s-node2 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6DFB\u52A0\u6620\u5C04" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u6620\u5C04" aria-hidden="true">#</a> <strong>\u6DFB\u52A0\u6620\u5C04\uFF1A</strong></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">vi</span>  /etc/hosts
<span class="token number">127.0</span>.0.1   localhost localhost.localdomain localhost4 localhost4.localdomain4
::1         localhost localhost.localdomain localhost6 localhost6.localdomain6

<span class="token number">10.10</span>.10.128 k8s-master 
<span class="token number">10.10</span>.10.129 k8s-node1 
<span class="token number">10.10</span>.10.130 k8s-node2 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u95ED\u9632\u706B\u5899\u548Cselinux" tabindex="-1"><a class="header-anchor" href="#\u5173\u95ED\u9632\u706B\u5899\u548Cselinux" aria-hidden="true">#</a> <strong>\u5173\u95ED\u9632\u706B\u5899\u548Cselinux\uFF1A</strong></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ systemctl stop firewalld       
$ systemctl disable firewalld     
$ <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/enforcing/disabled/&#39;</span> /etc/selinux/config 
$ setenforce <span class="token number">0</span> <span class="token punctuation">(</span>\u4E34\u65F6\u5173\u95ED<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5173\u95EDswap" tabindex="-1"><a class="header-anchor" href="#\u5173\u95EDswap" aria-hidden="true">#</a> <strong>\u5173\u95EDswap\uFF1A</strong></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ swapoff <span class="token parameter variable">-a</span> <span class="token operator">&amp;&amp;</span> <span class="token function">sed</span> <span class="token parameter variable">-ri</span> <span class="token string">&#39;s/.*swap.*/#&amp;/&#39;</span> /etc/fstab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E\u8DEF\u7531\u8F6C\u53D1" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u8DEF\u7531\u8F6C\u53D1" aria-hidden="true">#</a> <strong>\u914D\u7F6E\u8DEF\u7531\u8F6C\u53D1\uFF1A</strong></h3><p>\u5C06\u6865\u63A5\u7684IPv4\u6D41\u91CF\u4F20\u9012\u5230iptables\u7684\u94FE\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/sysctl.d/k8s.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
EOF</span>
$ <span class="token function">sysctl</span> <span class="token parameter variable">--system</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E\u65F6\u95F4\u540C\u6B65" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u65F6\u95F4\u540C\u6B65" aria-hidden="true">#</a> <strong>\u914D\u7F6E\u65F6\u95F4\u540C\u6B65\uFF1A</strong></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum <span class="token function">install</span> <span class="token parameter variable">-y</span> ntpdate 
$ ntpdate time.windows.com 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5docker-kubeadm-kubelet-\u6240\u6709\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5docker-kubeadm-kubelet-\u6240\u6709\u8282\u70B9" aria-hidden="true">#</a> <strong>\u5B89\u88C5Docker/kubeadm/kubelet \uFF08\u6240\u6709\u8282\u70B9\uFF09</strong></h2><p><strong>Kubernetes\u9ED8\u8BA4CRI\uFF08\u5BB9\u5668\u8FD0\u884C\u65F6\uFF09\u4E3ADocker\uFF0C\u56E0\u6B64\u5148\u5B89\u88C5Docker\u3002</strong></p><h3 id="\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5docker" aria-hidden="true">#</a> <strong>\u5B89\u88C5Docker\uFF1A</strong></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2
$ yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
$ yum makecache fast
$ yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E\u955C\u50CF\u52A0\u901F" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u955C\u50CF\u52A0\u901F" aria-hidden="true">#</a> <strong>\u914D\u7F6E\u955C\u50CF\u52A0\u901F\uFF1A</strong></h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>$ cat &gt; /etc/docker/daemon.json &lt;&lt; EOF
<span class="token punctuation">{</span>
     <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://ably8t50.mirror.aliyuncs.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	  <span class="token property">&quot;exec-opts&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;native.cgroupdriver=systemd&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
EOF
$ systemctl daemon-reload 
$ systemctl restart docker 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E\u963F\u91CCyum\u6E90" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u963F\u91CCyum\u6E90" aria-hidden="true">#</a> <strong>\u914D\u7F6E\u963F\u91CCYUM\u6E90\uFF1A</strong></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> <span class="token operator">&gt;</span> /etc/yum.repos.d/kubernetes.repo <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF</span>

$ yum <span class="token function">install</span> <span class="token parameter variable">-y</span> kubelet-1.20.0 kubeadm-1.20.0 kubectl-1.20.0
$ systemctl <span class="token builtin class-name">enable</span> kubelet <span class="token operator">&amp;&amp;</span> systemctl start kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kubeadm\u90E8\u7F72master\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#kubeadm\u90E8\u7F72master\u96C6\u7FA4" aria-hidden="true">#</a> <strong>kubeadm\u90E8\u7F72Master\u96C6\u7FA4</strong></h2><h3 id="\u4F7F\u7528kubeadm\u90E8\u7F72\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528kubeadm\u90E8\u7F72\u96C6\u7FA4" aria-hidden="true">#</a> \u4F7F\u7528kubeadm\u90E8\u7F72\u96C6\u7FA4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubeadm init <span class="token punctuation">\\</span>
--apiserver-advertise-address<span class="token operator">=</span><span class="token number">10.10</span>.10.128 <span class="token punctuation">\\</span>
--image-repository registry.aliyuncs.com/google_containers <span class="token punctuation">\\</span>
--kubernetes-version v1.20.0 <span class="token punctuation">\\</span>
--service-cidr<span class="token operator">=</span><span class="token number">10.96</span>.0.0/12 <span class="token punctuation">\\</span>
--pod-network-cidr<span class="token operator">=</span><span class="token number">10.244</span>.0.0/16 <span class="token punctuation">\\</span>
--ignore-preflight-errors<span class="token operator">=</span>all  

$ <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.kube
$ <span class="token function">sudo</span> <span class="token function">cp</span> <span class="token parameter variable">-i</span> /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
$ <span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-g</span><span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>--apiserver-advertise-address \u96C6\u7FA4\u901A\u544A\u5730\u5740</li><li>--image-repository \u7531\u4E8E\u9ED8\u8BA4\u7684\u62C9\u53D6\u955C\u50CF\u5730\u5740k8s.gcr.io\u56FD\u5185\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u8FD9\u91CC\u4F7F\u7528\u963F\u91CC\u4E91\u955C\u50CF\u4ED3\u5E93\u5730\u5740</li><li>--kubernetes-version k8s\u7684\u7248\u672C</li><li>--service-cidr \u96C6\u7FA4\u5185\u90E8\u865A\u62DF\u7F51\u7EDC\uFF0CPod\u7684\u7EDF\u4E00\u8BBF\u95EE\u5165\u53E3</li><li>--pod-network-cidr Pod\u7684\u7F51\u7EDC\uFF0C\u4E0E\u4E0B\u9762\u90E8\u7F72\u7684CNI\u7F51\u7EDC\u7EC4\u4EF6yaml\u4E2D\u4FDD\u6301\u4E00\u81F4</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl get nodes
NAME            STATUS     ROLES            AGE   VERSION
master   		NotReady   control-plane,master   20s   v1.20.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u90E8\u7F72\u5BB9\u5668\u7F51\u7EDCcni" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u5BB9\u5668\u7F51\u7EDCcni" aria-hidden="true">#</a> <strong>\u90E8\u7F72\u5BB9\u5668\u7F51\u7EDCCNI\uFF1A</strong></h3><p>Calico\u662F\u4E00\u4E2A\u7EAF\u4E09\u5C42\u7684\u6570\u636E\u4E2D\u5FC3\u7F51\u7EDC\u65B9\u6848\uFF0CCalico\u652F\u6301\u5E7F\u6CDB\u7684\u5E73\u53F0\uFF0C\u5305\u62ECKubernetes\u3001OpenStack\u7B49\u3002</p><p>Calico \u5728\u6BCF\u4E00\u4E2A\u8BA1\u7B97\u8282\u70B9\u5229\u7528 Linux Kernel \u5B9E\u73B0\u4E86\u4E00\u4E2A\u9AD8\u6548\u7684\u865A\u62DF\u8DEF\u7531\u5668\uFF08 vRouter\uFF09 \u6765\u8D1F\u8D23\u6570\u636E\u8F6C\u53D1\uFF0C\u800C\u6BCF\u4E2A vRouter \u901A\u8FC7 BGP \u534F\u8BAE\u8D1F\u8D23\u628A\u81EA\u5DF1\u4E0A\u8FD0\u884C\u7684 workload \u7684\u8DEF\u7531\u4FE1\u606F\u5411\u6574\u4E2A Calico \u7F51\u7EDC\u5185\u4F20\u64AD\u3002</p><p>\u6B64\u5916\uFF0CCalico \u9879\u76EE\u8FD8\u5B9E\u73B0\u4E86 Kubernetes \u7F51\u7EDC\u7B56\u7565\uFF0C\u63D0\u4F9BACL\u529F\u80FD\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u62C9\u53D6Pod\u7F51\u7EDC\u63D2\u4EF6
\u539F\u56E0\uFF1Acoredns\u4E00\u76F4\u505C\u6EDE\u5728Pending\uFF0C\u9700\u8981\u624B\u52A8\u62C9\u53D6, \u6700\u540E\u9009\u62E9\u7684\u7F51\u7EDC\u63D2\u4EF6\u662F\uFF1Acalico\u3002

<span class="token punctuation">[</span>root@k8s-node2 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n kube-system </span>
NAME                                READY   STATUS    RESTARTS   AGE
coredns-7f89b7bc75-b7nml            <span class="token number">0</span>/1     Pending   <span class="token number">0</span>          16m
coredns-7f89b7bc75-mrn6x            <span class="token number">0</span>/1     Pending   <span class="token number">0</span>          16m
etcd-k8s-node2                      <span class="token number">1</span>/1     Running   <span class="token number">0</span>          16m
kube-apiserver-k8s-node2            <span class="token number">1</span>/1     Running   <span class="token number">0</span>          16m
kube-controller-manager-k8s-node2   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          16m
kube-proxy-78zrr                    <span class="token number">1</span>/1     Running   <span class="token number">0</span>          16m
kube-scheduler-k8s-node2            <span class="token number">1</span>/1     Running   <span class="token number">0</span>          16m

$ kubectl apply <span class="token parameter variable">-f</span> https://docs.projectcalico.org/manifests/calico.yaml
$ kubectl apply <span class="token parameter variable">-f</span> calico.yaml
<span class="token punctuation">[</span>root@k8s-node2 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n kube-system </span>
NAME                                       READY   STATUS     RESTARTS   AGE
calico-kube-controllers-5f6cfd688c-g9mlv   <span class="token number">0</span>/1     Pending    <span class="token number">0</span>          7s
calico-node-4vbtr                          <span class="token number">0</span>/1     Init:0/3   <span class="token number">0</span>          7s
coredns-7f89b7bc75-b7nml                   <span class="token number">0</span>/1     Pending    <span class="token number">0</span>          12h
coredns-7f89b7bc75-mrn6x                   <span class="token number">0</span>/1     Pending    <span class="token number">0</span>          12h
etcd-k8s-node2                             <span class="token number">1</span>/1     Running    <span class="token number">0</span>          12h
kube-apiserver-k8s-node2                   <span class="token number">1</span>/1     Running    <span class="token number">0</span>          12h
kube-controller-manager-k8s-node2          <span class="token number">1</span>/1     Running    <span class="token number">0</span>          12h
kube-proxy-78zrr                           <span class="token number">1</span>/1     Running    <span class="token number">0</span>          12h
kube-scheduler-k8s-node2                   <span class="token number">1</span>/1     Running    <span class="token number">0</span>          12h
<span class="token punctuation">[</span>root@k8s-node2 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n kube-system </span>
NAME                                       READY   STATUS    RESTARTS   AGE
calico-kube-controllers-5f6cfd688c-g9mlv   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          2m7s
calico-node-4vbtr                          <span class="token number">1</span>/1     Running   <span class="token number">0</span>          2m7s
coredns-7f89b7bc75-b7nml                   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          12h
coredns-7f89b7bc75-mrn6x                   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          12h
etcd-k8s-node2                             <span class="token number">1</span>/1     Running   <span class="token number">0</span>          12h
kube-apiserver-k8s-node2                   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          12h
kube-controller-manager-k8s-node2          <span class="token number">1</span>/1     Running   <span class="token number">0</span>          12h
kube-proxy-78zrr                           <span class="token number">1</span>/1     Running   <span class="token number">0</span>          12h
kube-scheduler-k8s-node2                   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          12h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u90E8\u7F72dashboard" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72dashboard" aria-hidden="true">#</a> <strong>\u90E8\u7F72Dashboard\uFF1A</strong></h3><p>\u62C9\u53D6\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">wget</span> https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/kubernetes/dashboard/v2.3.1/aio/deploy/recommended.yaml 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u914D\u7F6Enodeport" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6Enodeport" aria-hidden="true">#</a> <strong>\u914D\u7F6ENodePort\uFF1A</strong></h3><p>\u914D\u7F6Erecommended\u7684yaml\u6587\u4EF6\u4FEE\u6539\u96C6\u7FA4\u5916\u90E8\u8BBF\u95EE\u7684\u65B9\u5F0F\uFF0Ctype\u4E3ANodePort\uFF0Cnodeport\u5916\u90E8\u8BBF\u95EE\u7AEF\u53E3\u662F30001</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard
  <span class="token key atrule">name</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">443</span>
      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8443</span>
      <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">30001</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> kubernetes<span class="token punctuation">-</span>dashboard
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-node2 ~<span class="token punctuation">]</span><span class="token comment"># kubectl apply -f recommended.yaml                                             </span>
namespace/kubernetes-dashboard unchanged
serviceaccount/kubernetes-dashboard unchanged
service/kubernetes-dashboard unchanged
secret/kubernetes-dashboard-certs unchanged
secret/kubernetes-dashboard-csrf unchanged
secret/kubernetes-dashboard-key-holder unchanged
configmap/kubernetes-dashboard-settings unchanged
role.rbac.authorization.k8s.io/kubernetes-dashboard unchanged
clusterrole.rbac.authorization.k8s.io/kubernetes-dashboard unchanged
rolebinding.rbac.authorization.k8s.io/kubernetes-dashboard unchanged
clusterrolebinding.rbac.authorization.k8s.io/kubernetes-dashboard unchanged
deployment.apps/kubernetes-dashboard unchanged
service/dashboard-metrics-scraper unchanged
deployment.apps/dashboard-metrics-scraper unchanged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7ED1\u5B9A\u9ED8\u8BA4\u7BA1\u7406\u5458\u96C6\u7FA4\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#\u7ED1\u5B9A\u9ED8\u8BA4\u7BA1\u7406\u5458\u96C6\u7FA4\u89D2\u8272" aria-hidden="true">#</a> <strong>\u7ED1\u5B9A\u9ED8\u8BA4\u7BA1\u7406\u5458\u96C6\u7FA4\u89D2\u8272\uFF1A</strong></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u7528\u6237</span>
$ kubectl create serviceaccount dashboard-admin <span class="token parameter variable">-n</span> kube-system 
serviceaccount/dashboard-admin created
<span class="token comment"># \u7528\u6237\u6388\u6743</span>
$ kubectl create clusterrolebinding dashboard-admin  <span class="token parameter variable">--clusterrole</span><span class="token operator">=</span>cluster-admin <span class="token parameter variable">--serviceaccount</span><span class="token operator">=</span>kube-system:dashboard-admin 
clusterrolebinding.rbac.authorization.k8s.io/dashboard-admin created
<span class="token comment"># \u83B7\u53D6\u7528\u6237Token</span>
$ kubectl describe secrets <span class="token parameter variable">-n</span> kube-system <span class="token variable"><span class="token variable">$(</span>kubectl <span class="token parameter variable">-n</span> kube-system get secret <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;/dashboard-admin/{print $1}&#39;</span><span class="token variable">)</span></span>
Name:         dashboard-admin-token-52gsz
Namespace:    kube-system
Labels:       <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Annotations:  kubernetes.io/service-account.name: dashboard-admin
              kubernetes.io/service-account.uid: 18c45018-7eaa-4381-a0c8-5266cc46b8c9

Type:  kubernetes.io/service-account-token

Data
<span class="token operator">==</span><span class="token operator">==</span>
namespace:  <span class="token number">11</span> bytes
token:      eyJhbGciOiJSUzI1NiIsImtpZCI6IkREZGU2aExFYU83aDdxVm8zM09rdGNVVTVydkVIUmxIdDhMejZBY2F0NkUifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJkYXNoYm9hcmQtYWRtaW4tdG9rZW4tNTJnc3oiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC5uYW1lIjoiZGFzaGJvYXJkLWFkbWluIiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZXJ2aWNlLWFjY291bnQudWlkIjoiMThjNDUwMTgtN2VhYS00MzgxLWEwYzgtNTI2NmNjNDZiOGM5Iiwic3ViIjoic3lzdGVtOnNlcnZpY2VhY2NvdW50Omt1YmUtc3lzdGVtOmRhc2hib2FyZC1hZG1pbiJ9.JAb0BvGP268aBDAPx3LaipuK5s9e4-RgYW3y35t29xY-4DUaUKrkbOM2h4unU1QPrXPMS3M4uODvQi3jv5ckg-KAzCebCGCzHrPCKOuZT_HwZidvdBf5QD3oWYAzaF8CoV5Yvwu2D2e0bl4S5cC6TOmW5BwO0CgPZor_iMXzkI0UUR8AADFbHa0V4xMHMF2MWihclkGV5UsfK8mt9uHpRxcQD4RSy_uFY1SYkGklNeMHrysoFBNAv8lTGq-8LuZnsiRrjjwE9YucMgVe2bSGqlg6gtnz_arCwW7fQwx1UkvAl_qdp452GAD3EGkPVqzvuH10R-Fpk84hgJJpk_AMrg
ca.crt:     <span class="token number">1066</span> bytes

<span class="token comment"># \u4F7F\u7528https://10.10.10.128:30001\u767B\u5F55\u8BBF\u95EE\u96C6\u7FA4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kubeadm\u90E8\u7F72node\u52A0\u5165\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#kubeadm\u90E8\u7F72node\u52A0\u5165\u96C6\u7FA4" aria-hidden="true">#</a> <strong>kubeadm\u90E8\u7F72Node\u52A0\u5165\u96C6\u7FA4\uFF1A</strong></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubeadm <span class="token function">join</span> <span class="token number">10.10</span>.10.130:6443 <span class="token parameter variable">--token</span> 9rkpbe.648h6r6rkp24f4xg <span class="token punctuation">\\</span>
    --discovery-token-ca-cert-hash sha256:add1c33a33d53a261fb58516d207a9f13bc41ec5085960e36e4431bd70479e65 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u66F4\u6362containerd" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6362containerd" aria-hidden="true">#</a> \u66F4\u6362Containerd:</h3><p>\u5982\u679C\u8FD9\u91CC\u662FDocker\u7684\u73AF\u5883\uFF0C\u9700\u8981\u5207\u6362\u5230Containerd\u5BB9\u5668\u5F15\u64CE\u3002</p><p>\u4ECD\u7136\u9700\u8981\u5C06runsc \u3001containerd-shim-runsc-v1\u5DE5\u5177\u79FB\u5230/usr/local/bin\u4E0B\u9762</p><p><strong>1.\u51C6\u5907\u914D\u7F6E</strong></p><p>\u5F00\u542Fipv4\u8DEF\u7531\u8F6C\u53D1\u914D\u7F6E\uFF0C\u91CD\u65B0\u751F\u6548\u7CFB\u7EDF\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master01 ~<span class="token punctuation">]</span><span class="token comment"># cat &gt; /etc/sysctl.d/99-kubernetes-cri.conf &lt;&lt; EOF</span>
net.bridge.bridge-nf-call-iptables <span class="token operator">=</span> <span class="token number">1</span>
net.ipv4.ip_forward <span class="token operator">=</span> <span class="token number">1</span>
net.bridge.bridge-nf-call-ip6tables <span class="token operator">=</span> <span class="token number">1</span>
EOF

<span class="token punctuation">[</span>root@master01 ~<span class="token punctuation">]</span><span class="token comment"># sysctl -system</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2\u3001\u5B89\u88C5Containerd</strong></p><p>\u5982\u679C\u9ED8\u8BA4\u5B89\u88C5\u4E86docker-ce\u4F1A\u81EA\u52A8\u5B89\u88C5containerd\u7684\u4F9D\u8D56\uFF0C\u6CA1\u6709\u5219\u9700\u8981\u5B89\u88C5containerd\u3002</p><p>ubuntu\u6DFB\u52A0docker-ce\u7684repo\u6E90\u4E4B\u540Eapt-get install\u7684\u65B9\u5F0F\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master01 ~<span class="token punctuation">]</span><span class="token comment"># cd /etc/yum.repos.d</span>
<span class="token punctuation">[</span>root@master01 ~<span class="token punctuation">]</span><span class="token comment"># wget http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span>
<span class="token punctuation">[</span>root@master01 ~<span class="token punctuation">]</span><span class="token comment"># yum install -y containerd.io</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3\u3001\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</strong></p><ol><li>pause\u955C\u50CF\u5730\u5740</li><li>Cgroup\u9A71\u52A8\u6539\u4E3Asystemd</li><li>\u589E\u52A0runsc\u5BB9\u5668\u8FD0\u884C\u65F6</li><li>\u914D\u7F6Edocker\u955C\u50CF\u52A0\u901F\u5668</li></ol><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u9ED8\u8BA4\u7684containerd\u7684\u914D\u7F6E\u6587\u4EF6\u662F\u7A7A\u7684\uFF0C\u6240\u4EE5\u9700\u8981\u91CD\u65B0\u751F\u6210\u4E00\u4E2A\u5B8C\u6574\u7684\u914D\u7F6E\u6587\u4EF6\u3002</p><p>containerd\u7684\u76EE\u5F55\u662F\u5728 <code>/etc/containerd</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master01 ~<span class="token punctuation">]</span><span class="token comment"># cd /etc/containerd/</span>
<span class="token punctuation">[</span>root@master01 containerd<span class="token punctuation">]</span><span class="token comment"># containerd config  default &gt; config.toml</span>
<span class="token punctuation">[</span>root@master01 containerd<span class="token punctuation">]</span><span class="token comment"># vim config.toml</span>
 <span class="token number">43</span>   <span class="token punctuation">[</span>plugins.<span class="token string">&quot;io.containerd.grpc.v1.cri&quot;</span><span class="token punctuation">]</span>
 		\xB7\xB7\xB7\xB7
 		<span class="token comment"># \u4FEE\u6539\u955C\u50CF\u4E3A\u56FD\u5185\u7684\u955C\u50CF</span>
 <span class="token number">56</span>     sandbox_image <span class="token operator">=</span> <span class="token string">&quot;registry.aliyuncs.com/google_containers/pause:3.2&quot;</span>   
 		\xB7\xB7\xB7\xB7 
 			<span class="token comment"># \u6DFB\u52A0\u4E00\u4E2Arunsc,\u6307\u5B9A\u7C7B\u578B\u4E3Arunsc\uFF0C\u8FD9\u91CC\u662F\u8DDFrunc\u540C\u7EA7</span>
 <span class="token number">90</span>        <span class="token punctuation">[</span>plugins.<span class="token string">&quot;io.containerd.grpc.v1.cri&quot;</span>.containerd.runtimes.runsc<span class="token punctuation">]</span>  
 <span class="token number">91</span>           runtime_type <span class="token operator">=</span> <span class="token string">&quot;io.containerd.runsc.v1&quot;</span>   				  

			<span class="token comment"># \u4FEE\u6539systemd\u9A71\u52A8\u4E3Atrue</span>
 <span class="token number">94</span>        <span class="token punctuation">[</span>plugins.<span class="token string">&quot;io.containerd.grpc.v1.cri&quot;</span>.containerd.runtimes.runc<span class="token punctuation">]</span>
 <span class="token number">103</span>          <span class="token punctuation">[</span>plugins.<span class="token string">&quot;io.containerd.grpc.v1.cri&quot;</span>.containerd.runtimes.runc.options<span class="token punctuation">]</span>
				\xB7\xB7\xB7
 <span class="token number">114</span>            SystemdCgroup <span class="token operator">=</span> <span class="token boolean">true</span>	
 		
 			<span class="token comment"># \u6DFB\u52A0docker\u4ED3\u5E93\u7684\u955C\u50CF\u6E90\uFF0C\u914D\u7F6E\u963F\u91CC\u955C\u50CF\u52A0\u901F</span>
 <span class="token number">139</span>       <span class="token punctuation">[</span>plugins.<span class="token string">&quot;io.containerd.grpc.v1.cri&quot;</span>.registry.mirrors<span class="token punctuation">]</span>
 <span class="token number">140</span>        <span class="token punctuation">[</span>plugins.<span class="token string">&quot;io.containerd.grpc.v1.cri&quot;</span>.registry.mirrors.<span class="token string">&quot;docker.io&quot;</span><span class="token punctuation">]</span>  
 <span class="token number">141</span>          endpoint <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;https://b9pmyelo.mirror.aliyuncs.com&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u914D\u7F6Ekubelet\u4F7F\u7528containerd</strong></p><p>\u914D\u7F6E\u5B8C\u4E4B\u540E\u5148\u91CD\u542Fcontainerd\uFF0C\u518D\u91CD\u542Fkubelet\uFF0C\u6700\u540E\u5982\u679Cpod\u51FA\u73B0\u62A5\u9519\uFF0C\u91CD\u542Fdocker\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master01 ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/sysconfig/kubelet </span>
<span class="token assign-left variable">KUBELET_EXTRA_ARGS</span><span class="token operator">=</span>--container-runtime<span class="token operator">=</span>remote --container-runtime-endpoint<span class="token operator">=</span>unix:///run/containerd/containerd.sock --cgroup-driver<span class="token operator">=</span>systemd

<span class="token punctuation">[</span>root@master01 ~<span class="token punctuation">]</span><span class="token comment"># systemctl restart containerd</span>
<span class="token punctuation">[</span>root@master01 ~<span class="token punctuation">]</span><span class="token comment"># systemctl restart kubelet</span>
<span class="token punctuation">[</span>root@master01 ~<span class="token punctuation">]</span><span class="token comment"># systemctl restart docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u9A8C\u8BC1\u5F53\u524D\u7684Kubernetes\u5BB9\u5668\u57FA\u5C42</strong></p><ol><li><code>\u4EE5\u4E0A\u7684\u6B65\u9AA4\u9700\u8981\u5728\u6240\u6709\u96C6\u7FA4\u914D\u7F6E</code></li><li><code>\u5305\u62ECcrictl\u8FDE\u63A5containerd\u7684\u914D\u7F6E\u4E5F\u8981\u5728\u6240\u6709\u96C6\u7FA4\u8FD0\u884C</code></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master01 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get  node -o wide | awk  &#39;{print $1,$2,$5,$NF}&#39; | column -t</span>
NAME      STATUS  VERSION  CONTAINER-RUNTIME
master01  Ready   v1.22.1  containerd://1.5.11
master02  Ready   v1.22.1  containerd://1.5.11
master03  Ready   v1.22.1  containerd://1.5.11
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>crictl\u8FDE\u63A5containerd</strong></p><p>containerd\u4E5F\u6709 ctr \u7BA1\u7406\u5DE5\u5177\uFF0C\u4F46\u529F\u80FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u4E00\u822C\u4F7F\u7528crictl\u5DE5\u5177\u68C0\u67E5\u548C\u8C03\u8BD5\u5BB9\u5668\u3002</p>`,73),r={href:"https://github.com/kubernetes-sigs/cri-tools/",target:"_blank",rel:"noopener noreferrer"},d=a(`<p>\u51C6\u5907crictl\u8FDE\u63A5containerd\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master01 ~<span class="token punctuation">]</span><span class="token comment"># cat &gt; /etc/crictl.yaml &lt;&lt; EOF</span>
runtime-endpoint: unix:///run/containerd/containerd.sock
EOF
<span class="token punctuation">[</span>root@master01 ~<span class="token punctuation">]</span><span class="token comment"># systemctl restart  containerd </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528nfs\u4F5C\u4E3A\u9ED8\u8BA4sc" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528nfs\u4F5C\u4E3A\u9ED8\u8BA4sc" aria-hidden="true">#</a> \u4F7F\u7528NFS\u4F5C\u4E3A\u9ED8\u8BA4SC\uFF1A</h3><ul><li><p>\u5B89\u88C5NFS\u670D\u52A1</p></li><li><p>\u914D\u7F6E\u5171\u4EAB\u5B58\u50A8\u8DEF\u5F84\u5F00\u653E\u6743\u9650</p></li><li><p>\u642D\u5EFANFS\u670D\u52A1\u5668\u548CNFS-Client</p></li><li><p>\u5728Master\u8282\u70B9\u4E0A\u9762\u6267\u884C\u547D\u4EE4 vi /etc/exports\uFF0C\u521B\u5EFA exports \u6587\u4EF6\uFF0C\u542F\u52A8 nfs \u670D\u52A1\uFF0C\u521B\u5EFA\u5171\u4EAB\u76EE\u5F55\u3002\u5728\u5176\u4ED6\u7684node\u8282\u70B9\u4E0A\u5B89\u88C5nfs\u670D\u52A1\u5E76\u4E14\u5F00\u542F\u670D\u52A1\u3002</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nfs-utils
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;/nfs/data/ *(insecure,rw,sync,no_root_squash)&quot;</span> <span class="token operator">&gt;</span> /etc/exports
$ <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /nfs/data
$ systemctl <span class="token builtin class-name">enable</span> rpcbind <span class="token operator">&amp;&amp;</span> systemctl start rpcbind
$ systemctl <span class="token builtin class-name">enable</span> nfs-server <span class="token operator">&amp;&amp;</span> systemctl start nfs-server
<span class="token comment">#\u68C0\u67E5\u914D\u7F6E\u662F\u5426\u751F\u6548</span>
exportfs
<span class="token comment"># \u8F93\u51FA\u7ED3\u679C\u5982\u4E0B\u6240\u793A</span>
/nfs/data  <span class="token operator">&lt;</span>work<span class="token operator">&gt;</span>
$ showmount <span class="token parameter variable">-e</span> <span class="token number">10.10</span>.10.128
  Export list <span class="token keyword">for</span> <span class="token number">10.10</span>.10.128
  /nfs/data *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5728Node\u8282\u70B9\u4E0A\u914D\u7F6ENFS-Client(node1\u548Cnode2\u64CD\u4F5C)</li><li>\u5B89\u88C5\u5BA2\u6237\u7AEF\u5DE5\u5177,\u6302\u8F7D nfs \u670D\u52A1\u5668\u4E0A\u7684\u5171\u4EAB\u76EE\u5F55\u5230\u672C\u673A\u8DEF\u5F84 /root/nfsmount\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum <span class="token function">install</span> <span class="token parameter variable">-y</span> nfs-utils
$ <span class="token function">mkdir</span> /root/nfsmount
$ systemctl <span class="token builtin class-name">enable</span> rpcbind <span class="token operator">&amp;&amp;</span> systemctl start rpcbind
$ systemctl <span class="token builtin class-name">enable</span> nfs-server <span class="token operator">&amp;&amp;</span> systemctl start nfs-server
$ <span class="token function">mount</span> <span class="token parameter variable">-t</span> nfs <span class="token number">10.10</span>.10.128:/nfs/data /root/nfsmount
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="\u6D4B\u8BD5pod\u76F4\u63A5\u6302\u8F7Dnfs\u4E86" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5pod\u76F4\u63A5\u6302\u8F7Dnfs\u4E86" aria-hidden="true">#</a> \u6D4B\u8BD5Pod\u76F4\u63A5\u6302\u8F7DNFS\u4E86</h4></blockquote><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>$ vim pod.yaml 
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> vol<span class="token punctuation">-</span>nfs
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> html
    <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
      <span class="token key atrule">path</span><span class="token punctuation">:</span> /nfs/data   <span class="token comment">#1000G</span>
      <span class="token key atrule">server</span><span class="token punctuation">:</span> \u81EA\u5DF1\u7684nfs\u670D\u52A1\u5668\u5730\u5740
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> myapp
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> html
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /usr/share/nginx/html/
$ kubectl apply <span class="token punctuation">-</span>f pod.yaml 
$ echo  ABCD <span class="token punctuation">&gt;</span> /nfs/data/index.html 
$ curl 
ABCD
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8BBE\u7F6E\u52A8\u6001\u4F9B\u5E94" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u52A8\u6001\u4F9B\u5E94" aria-hidden="true">#</a> \u8BBE\u7F6E\u52A8\u6001\u4F9B\u5E94:</h3><img src="https://pic.imgdb.cn/item/61ebecb52ab3f51d9113a1dd.png" style="zoom:50%;"><blockquote><h4 id="\u521B\u5EFAprovisioner-nfs\u73AF\u5883\u524D\u9762\u5DF2\u7ECF\u642D\u597D" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAprovisioner-nfs\u73AF\u5883\u524D\u9762\u5DF2\u7ECF\u642D\u597D" aria-hidden="true">#</a> \u521B\u5EFAprovisioner\uFF08NFS\u73AF\u5883\u524D\u9762\u5DF2\u7ECF\u642D\u597D\uFF09</h4></blockquote><table><thead><tr><th>\u5B57\u6BB5\u540D\u79F0</th><th>\u586B\u5165\u5185\u5BB9</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>\u540D\u79F0</td><td>nfs-storage</td><td>\u81EA\u5B9A\u4E49\u5B58\u50A8\u7C7B\u540D\u79F0</td></tr><tr><td>NFS Server</td><td>172.26.165.243</td><td>NFS\u670D\u52A1\u7684IP\u5730\u5740</td></tr><tr><td>NFS Path</td><td>/nfs/data</td><td>NFS\u670D\u52A1\u6240\u5171\u4EAB\u7684\u8DEF\u5F84</td></tr></tbody></table><ul><li><p>\u5728Master\u8282\u70B9\u4E0A\u9762\u64CD\u4F5C</p></li><li><p>\u5148\u521B\u5EFA\u6388\u6743</p></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token punctuation">---</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner<span class="token punctuation">-</span>runner
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;persistentvolumes&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;watch&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;create&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;delete&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;persistentvolumeclaims&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;watch&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;update&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;storage.k8s.io&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;storageclasses&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;watch&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;events&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;create&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;update&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;patch&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">---</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRoleBinding
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> run<span class="token punctuation">-</span>nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
    <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
    <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner<span class="token punctuation">-</span>runner
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
<span class="token punctuation">---</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Role
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> leader<span class="token punctuation">-</span>locking<span class="token punctuation">-</span>nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;endpoints&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;watch&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;create&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;update&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;patch&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">---</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> RoleBinding
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> leader<span class="token punctuation">-</span>locking<span class="token punctuation">-</span>nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
    <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
    <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> Role
  <span class="token key atrule">name</span><span class="token punctuation">:</span> leader<span class="token punctuation">-</span>locking<span class="token punctuation">-</span>nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> Recreate
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner
          <span class="token key atrule">image</span><span class="token punctuation">:</span> quay.io/external_storage/nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>provisioner<span class="token punctuation">:</span>latest
          <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>root
              <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /persistentvolumes
          <span class="token key atrule">env</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> PROVISIONER_NAME	<span class="token comment"># provisioner\u7684\u540D\u5B57\uFF0C\u9700\u8981\u548CStorageClass\u5BF9\u8C61\u4E2D\u7684provisioner\u5B57\u6BB5\u4E00\u81F4</span>
              <span class="token key atrule">value</span><span class="token punctuation">:</span> shisuyun/nfs
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> NFS_SERVER
              <span class="token key atrule">value</span><span class="token punctuation">:</span> 10.10.10.128		<span class="token comment"># NFS\u670D\u52A1\u5668\u5730\u5740</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> NFS_PATH       
              <span class="token key atrule">value</span><span class="token punctuation">:</span> /nfs/data			<span class="token comment"># NFS\u670D\u52A1\u5668\u76EE\u5F55</span>
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>root
          <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
            <span class="token key atrule">server</span><span class="token punctuation">:</span> 10.10.10.128		<span class="token comment"># NFS\u670D\u52A1\u5668\u5730\u5740</span>
            <span class="token key atrule">path</span><span class="token punctuation">:</span> /nfs/data				<span class="token comment"># NFS\u670D\u52A1\u5668\u76EE\u5F55</span>

<span class="token comment">##\u8FD9\u4E2A\u955C\u50CF\u4E2Dvolume\u7684mountPath\u9ED8\u8BA4\u4E3A/persistentvolumes\uFF0C\u4E0D\u80FD\u4FEE\u6539\uFF0C\u5426\u5219\u8FD0\u884C\u65F6\u4F1A\u62A5\u9519</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>\u5728Master\u4E0A\u521B\u5EFAprovisioner</code></li><li><code>\u521B\u5EFA\u5B58\u50A8\u7C7B</code></li><li><code>\u6539\u53D8\u9ED8\u8BA4sc</code></li></ul><blockquote><h4 id="reclaim-policy-\u6709\u4E09\u79CD\u65B9\u5F0F-retain\u3001recycle\u3001deleted\u3002" tabindex="-1"><a class="header-anchor" href="#reclaim-policy-\u6709\u4E09\u79CD\u65B9\u5F0F-retain\u3001recycle\u3001deleted\u3002" aria-hidden="true">#</a> &quot;reclaim policy&quot;\u6709\u4E09\u79CD\u65B9\u5F0F\uFF1ARetain\u3001Recycle\u3001Deleted\u3002</h4></blockquote><p><code>Retain</code></p><ul><li><p>\u4FDD\u62A4\u88ABPVC\u91CA\u653E\u7684PV\u53CA\u5176\u4E0A\u6570\u636E\uFF0C\u5E76\u5C06PV\u72B6\u6001\u6539\u6210&quot;released&quot;\uFF0C\u4E0D\u5C06\u88AB\u5176\u5B83PVC\u7ED1\u5B9A\u3002\u96C6\u7FA4\u7BA1\u7406\u5458\u624B\u52A8\u901A\u8FC7\u5982\u4E0B\u6B65\u9AA4\u91CA\u653E\u5B58\u50A8\u8D44\u6E90</p></li><li><p>\u624B\u52A8\u5220\u9664PV\uFF0C\u4F46\u4E0E\u5176\u76F8\u5173\u7684\u540E\u7AEF\u5B58\u50A8\u8D44\u6E90\u5982(AWS EBS, GCE PD, Azure Disk, or Cinder volume)\u4ECD\u7136\u5B58\u5728\u3002</p></li><li><p>\u624B\u52A8\u6E05\u7A7A\u540E\u7AEF\u5B58\u50A8volume\u4E0A\u7684\u6570\u636E\u3002</p></li><li><p>\u624B\u52A8\u5220\u9664\u540E\u7AEF\u5B58\u50A8volume\uFF0C\u6216\u8005\u91CD\u590D\u4F7F\u7528\u540E\u7AEFvolume\uFF0C\u4E3A\u5176\u521B\u5EFA\u65B0\u7684PV\u3002</p></li></ul><p><code>Delete</code></p><ul><li><p>\u5220\u9664\u88ABPVC\u91CA\u653E\u7684PV\u53CA\u5176\u540E\u7AEF\u5B58\u50A8volume\u3002\u5BF9\u4E8E\u52A8\u6001PV\u5176&quot;reclaim policy&quot;\u7EE7\u627F\u81EA\u5176&quot;storage class&quot;\uFF0C</p></li><li><p>\u9ED8\u8BA4\u662FDelete\u3002\u96C6\u7FA4\u7BA1\u7406\u5458\u8D1F\u8D23\u5C06&quot;storage class&quot;\u7684&quot;reclaim policy&quot;\u8BBE\u7F6E\u6210\u7528\u6237\u671F\u671B\u7684\u5F62\u5F0F\uFF0C\u5426\u5219\u9700\u8981\u7528\u6237\u624B\u52A8\u4E3A\u521B\u5EFA\u540E\u7684\u52A8\u6001PV\u7F16\u8F91&quot;reclaim policy&quot;</p></li></ul><p><code>Recycle</code></p><ul><li>\u4FDD\u7559PV\uFF0C\u4F46\u6E05\u7A7A\u5176\u4E0A\u6570\u636E\uFF0C\u5DF2\u5E9F\u5F03</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>$  vi storageclass<span class="token punctuation">-</span>nfs.yaml
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> storage.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> StorageClass
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> storage<span class="token punctuation">-</span>nfs
<span class="token key atrule">provisioner</span><span class="token punctuation">:</span> storage.pri/nfs
<span class="token key atrule">reclaimPolicy</span><span class="token punctuation">:</span> Delete

$ kubectl apply <span class="token punctuation">-</span>f storageclass<span class="token punctuation">-</span>nfs.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u6539\u53D8\u7CFB\u7EDF\u9ED8\u8BA4sc</span>
https://kubernetes.io/zh/docs/tasks/administer-cluster/change-default-storage-class/<span class="token comment">#%e4%b8%ba%e4%bb%80%e4%b9%88%e8%a6%81%e6%94%b9%e5%8f%98%e9%bb%98%e8%ae%a4-storage-class</span>

$ kubectl patch storageclass storage-nfs <span class="token parameter variable">-p</span> <span class="token string">&#39;{&quot;metadata&quot;: {&quot;annotations&quot;:{&quot;storageclass.kubernetes.io/is-default-class&quot;:&quot;true&quot;}}}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><h4 id="\u9A8C\u8BC1nfs\u52A8\u6001\u4F9B\u5E94" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1nfs\u52A8\u6001\u4F9B\u5E94" aria-hidden="true">#</a> \u9A8C\u8BC1nfs\u52A8\u6001\u4F9B\u5E94</h4></blockquote><ul><li><h4 id="\u521B\u5EFApvc" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFApvc" aria-hidden="true">#</a> \u521B\u5EFApvc</h4></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>$ vi  pvc.yaml
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolumeClaim
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pvc<span class="token punctuation">-</span>claim<span class="token punctuation">-</span><span class="token number">01</span>
 <span class="token comment"># annotations:</span>
 <span class="token comment">#   volume.beta.kubernetes.io/storage-class: &quot;storage-nfs&quot;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> storage<span class="token punctuation">-</span>nfs  <span class="token comment">#\u8FD9\u4E2Aclass\u4E00\u5B9A\u6CE8\u610F\u8981\u548Csc\u7684\u540D\u5B57\u4E00\u6837</span>
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ReadWriteMany
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
    <span class="token key atrule">requests</span><span class="token punctuation">:</span>
      <span class="token key atrule">storage</span><span class="token punctuation">:</span> 1Mi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h4 id="\u4F7F\u7528pvc" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528pvc" aria-hidden="true">#</a> \u4F7F\u7528pvc</h4></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>$ vi testpod.yaml
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>pod
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> test<span class="token punctuation">-</span>pod
    <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox
    <span class="token key atrule">command</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;/bin/sh&quot;</span>
    <span class="token key atrule">args</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;-c&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;touch /mnt/SUCCESS &amp;&amp; exit 0 || exit 1&quot;</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>pvc
        <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> <span class="token string">&quot;/mnt&quot;</span>
  <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> <span class="token string">&quot;Never&quot;</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>pvc
      <span class="token key atrule">persistentVolumeClaim</span><span class="token punctuation">:</span>
        <span class="token key atrule">claimName</span><span class="token punctuation">:</span> pvc<span class="token punctuation">-</span>claim<span class="token punctuation">-</span><span class="token number">01</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5metrics-server" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5metrics-server" aria-hidden="true">#</a> \u5B89\u88C5metrics-server:</h3><p>\u5148\u5B89\u88C5metrics-server(yaml\u5982\u4E0B\uFF0C\u5DF2\u7ECF\u6539\u597D\u4E86\u955C\u50CF\u548C\u914D\u7F6E\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528)\uFF0C\u8FD9\u6837\u5C31\u80FD\u76D1\u63A7\u5230pod\u3002node\u7684\u8D44\u6E90\u60C5\u51B5\uFF08\u9ED8\u8BA4\u53EA\u6709cpu\u3001memory\u7684\u8D44\u6E90\u5BA1\u8BA1\u4FE1\u606F\u54DF\uFF0C\u66F4\u4E13\u4E1A\u7684\u6211\u4EEC\u540E\u9762\u5BF9\u63A5 Prometheus\uFF09</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>$ vim  metrics.yaml 
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> system<span class="token punctuation">:</span>aggregated<span class="token punctuation">-</span>metrics<span class="token punctuation">-</span>reader
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">rbac.authorization.k8s.io/aggregate-to-view</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
    <span class="token key atrule">rbac.authorization.k8s.io/aggregate-to-edit</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
    <span class="token key atrule">rbac.authorization.k8s.io/aggregate-to-admin</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;metrics.k8s.io&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pods&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;nodes&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;watch&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRoleBinding
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server<span class="token punctuation">:</span>system<span class="token punctuation">:</span>auth<span class="token punctuation">-</span>delegator
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
  <span class="token key atrule">name</span><span class="token punctuation">:</span> system<span class="token punctuation">:</span>auth<span class="token punctuation">-</span>delegator
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
  <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> RoleBinding
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server<span class="token punctuation">-</span>auth<span class="token punctuation">-</span>reader
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> Role
  <span class="token key atrule">name</span><span class="token punctuation">:</span> extension<span class="token punctuation">-</span>apiserver<span class="token punctuation">-</span>authentication<span class="token punctuation">-</span>reader
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
  <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apiregistration.k8s.io/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> APIService
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> v1beta1.metrics.k8s.io
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
    <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
  <span class="token key atrule">group</span><span class="token punctuation">:</span> metrics.k8s.io
  <span class="token key atrule">version</span><span class="token punctuation">:</span> v1beta1
  <span class="token key atrule">insecureSkipTLSVerify</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">groupPriorityMinimum</span><span class="token punctuation">:</span> <span class="token number">100</span>
  <span class="token key atrule">versionPriority</span><span class="token punctuation">:</span> <span class="token number">100</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token comment"># mount in tmp so we can safely use from-scratch images and/or read-only containers</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> tmp<span class="token punctuation">-</span>dir
        <span class="token key atrule">emptyDir</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
        <span class="token key atrule">image</span><span class="token punctuation">:</span> mirrorgooglecontainers/metrics<span class="token punctuation">-</span>server<span class="token punctuation">-</span>amd64<span class="token punctuation">:</span>v0.3.6
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
        <span class="token key atrule">args</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>cert<span class="token punctuation">-</span>dir=/tmp
          <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>secure<span class="token punctuation">-</span>port=4443
          <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>kubelet<span class="token punctuation">-</span>insecure<span class="token punctuation">-</span>tls
          <span class="token punctuation">-</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>kubelet<span class="token punctuation">-</span>preferred<span class="token punctuation">-</span>address<span class="token punctuation">-</span>types=InternalIP<span class="token punctuation">,</span>ExternalIP<span class="token punctuation">,</span>Hostname
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> main<span class="token punctuation">-</span>port
          <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">4443</span>
          <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
        <span class="token key atrule">securityContext</span><span class="token punctuation">:</span>
          <span class="token key atrule">readOnlyRootFilesystem</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">runAsNonRoot</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
          <span class="token key atrule">runAsUser</span><span class="token punctuation">:</span> <span class="token number">1000</span>
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> tmp<span class="token punctuation">-</span>dir
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /tmp
      <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span>
        <span class="token key atrule">kubernetes.io/os</span><span class="token punctuation">:</span> linux
        <span class="token key atrule">kubernetes.io/arch</span><span class="token punctuation">:</span> <span class="token string">&quot;amd64&quot;</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">kubernetes.io/name</span><span class="token punctuation">:</span> <span class="token string">&quot;Metrics-server&quot;</span>
    <span class="token key atrule">kubernetes.io/cluster-service</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">k8s-app</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">443</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> main<span class="token punctuation">-</span>port
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> system<span class="token punctuation">:</span>metrics<span class="token punctuation">-</span>server
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> pods
  <span class="token punctuation">-</span> nodes
  <span class="token punctuation">-</span> nodes/stats
  <span class="token punctuation">-</span> namespaces
  <span class="token punctuation">-</span> configmaps
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> get
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRoleBinding
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> system<span class="token punctuation">:</span>metrics<span class="token punctuation">-</span>server
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
  <span class="token key atrule">name</span><span class="token punctuation">:</span> system<span class="token punctuation">:</span>metrics<span class="token punctuation">-</span>server
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
  <span class="token key atrule">name</span><span class="token punctuation">:</span> metrics<span class="token punctuation">-</span>server
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> kube<span class="token punctuation">-</span>system
  
$ kubectl apply <span class="token punctuation">-</span>f  metrics.yaml 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33);function k(v,m){const e=c("ExternalLinkIcon");return p(),i("div",null,[u,n("p",null,[s("\u9879\u76EE\u5730\u5740\uFF1A"),n("a",r,[s("https://github.com/kubernetes-sigs/cri-tools/"),l(e)])]),d])}const h=t(o,[["render",k],["__file","02.Kubernetes\u90E8\u7F72.html.vue"]]);export{h as default};
