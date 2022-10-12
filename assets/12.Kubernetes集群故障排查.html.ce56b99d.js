import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,f as a}from"./app.ca0279c0.js";const i={},r=a(`<h1 id="kubernetes\u6545\u969C\u6392\u67E5" tabindex="-1"><a class="header-anchor" href="#kubernetes\u6545\u969C\u6392\u67E5" aria-hidden="true">#</a> Kubernetes\u6545\u969C\u6392\u67E5</h1><h2 id="kubernetes\u6545\u969C\u6392\u67E5-\u5E94\u7528\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#kubernetes\u6545\u969C\u6392\u67E5-\u5E94\u7528\u90E8\u7F72" aria-hidden="true">#</a> Kubernetes\u6545\u969C\u6392\u67E5\uFF1A\u5E94\u7528\u90E8\u7F72</h2><h4 id="\u67E5\u770B\u8D44\u6E90\u7C7B\u578B\u7684\u8BE6\u7EC6" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u8D44\u6E90\u7C7B\u578B\u7684\u8BE6\u7EC6" aria-hidden="true">#</a> \u67E5\u770B\u8D44\u6E90\u7C7B\u578B\u7684\u8BE6\u7EC6\uFF1A</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get deployments.apps </span>
NAME   READY   UP-TO-DATE   AVAILABLE   AGE
web    <span class="token number">1</span>/1     <span class="token number">1</span>            <span class="token number">1</span>           15h
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl describe deployments.apps web </span>
Name:                   web
Namespace:              default
CreationTimestamp:      Mon, 08 Nov <span class="token number">2021</span> <span class="token number">17</span>:04:33 +0000
Labels:                 <span class="token assign-left variable">app</span><span class="token operator">=</span>web
Annotations:            deployment.kubernetes.io/revision: <span class="token number">1</span>
Selector:               <span class="token assign-left variable">app</span><span class="token operator">=</span>web
Replicas:               <span class="token number">1</span> desired <span class="token operator">|</span> <span class="token number">1</span> updated <span class="token operator">|</span> <span class="token number">1</span> total <span class="token operator">|</span> <span class="token number">1</span> available <span class="token operator">|</span> <span class="token number">0</span> unavailable
StrategyType:           RollingUpdate
MinReadySeconds:        <span class="token number">0</span>
RollingUpdateStrategy:  <span class="token number">25</span>% max unavailable, <span class="token number">25</span>% max surge
Pod Template:
  Labels:  <span class="token assign-left variable">app</span><span class="token operator">=</span>web
  Containers:
   nginx:
    Image:        <span class="token number">172.25</span>.253.4/library/nginx
    Port:         <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
    Host Port:    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
    Environment:  <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
    Mounts:       <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
  Volumes:        <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Conditions:
  Type           Status  Reason
  ----           ------  ------
  Available      True    MinimumReplicasAvailable
  Progressing    True    NewReplicaSetAvailable
OldReplicaSets:  <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
NewReplicaSet:   web-df4986867 <span class="token punctuation">(</span><span class="token number">1</span>/1 replicas created<span class="token punctuation">)</span>
Events:          <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u67E5\u770B\u8D44\u6E90\u7C7B\u578B\u7684\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u8D44\u6E90\u7C7B\u578B\u7684\u65E5\u5FD7" aria-hidden="true">#</a> \u67E5\u770B\u8D44\u6E90\u7C7B\u578B\u7684\u65E5\u5FD7\uFF1A</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl logs web </span>
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking <span class="token keyword">for</span> shell scripts <span class="token keyword">in</span> /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
<span class="token number">10</span>-listen-on-ipv6-by-default.sh: Getting the checksum of /etc/nginx/conf.d/default.conf
<span class="token number">10</span>-listen-on-ipv6-by-default.sh: Enabled listen on IPv6 <span class="token keyword">in</span> /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Configuration complete<span class="token punctuation">;</span> ready <span class="token keyword">for</span> start up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8FDB\u5165\u5BB9\u5668\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u5165\u5BB9\u5668\u67E5\u770B" aria-hidden="true">#</a> \u8FDB\u5165\u5BB9\u5668\u67E5\u770B\uFF1A</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl exec -it web web-df4986867-qct9h  -- bash</span>
root@web:~<span class="token comment"># cd /usr/share/nginx/html/</span>
root@web:/usr/share/nginx/html<span class="token comment"># ls</span>
50x.html  index.html
root@web:/usr/share/nginx/html<span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kubernetes\u6545\u969C\u6392\u67E5-\u7EC4\u4EF6\u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#kubernetes\u6545\u969C\u6392\u67E5-\u7EC4\u4EF6\u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C" aria-hidden="true">#</a> Kubernetes\u6545\u969C\u6392\u67E5\uFF1A\u7EC4\u4EF6\u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C</h2><ul><li><h4 id="\u7BA1\u7406\u8282\u70B9\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u7406\u8282\u70B9\u7EC4\u4EF6" aria-hidden="true">#</a> \u7BA1\u7406\u8282\u70B9\u7EC4\u4EF6\uFF1A</h4><ul><li><strong><code>kube-apiserver</code></strong></li><li><strong><code>kube-controller-manager</code></strong></li><li><strong><code>kube-scheduler</code></strong></li></ul></li><li><h4 id="\u5DE5\u4F5C\u8282\u70B9\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u4F5C\u8282\u70B9\u7EC4\u4EF6" aria-hidden="true">#</a> <strong>\u5DE5\u4F5C\u8282\u70B9\u7EC4\u4EF6\uFF1A</strong></h4><ul><li><strong><code>kubelet</code></strong></li><li><strong><code>kube-proxy</code></strong></li></ul></li></ul><h4 id="\u5224\u65ADkube-system\u7684\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u5224\u65ADkube-system\u7684\u8D44\u6E90" aria-hidden="true">#</a> \u5224\u65ADkube-system\u7684\u8D44\u6E90</h4><ul><li><p>\u67E5\u770Bkube-system\u7684\u6240\u6709Pod\u662F\u5426\u90FD\u6B63\u5E38\u8FD0\u884C\uFF0C\u5982\u679C\u6B63\u5E38\u8FD0\u884C\u8BF4\u660E\u96C6\u7FA4\u6CA1\u95EE\u9898\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -n kube-system </span>
NAME                                       READY   STATUS    RESTARTS   AGE
coredns-9c47b455-2gf7n                     <span class="token number">1</span>/1     Running   <span class="token number">0</span>          16h
coredns-9c47b455-rrqnw                     <span class="token number">1</span>/1     Running   <span class="token number">0</span>          16h
etcd-master.novalocal                      <span class="token number">1</span>/1     Running   <span class="token number">0</span>          16h
kube-apiserver-master.novalocal            <span class="token number">1</span>/1     Running   <span class="token number">0</span>          16h
kube-controller-manager-master.novalocal   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          16h
kube-flannel-ds-d5tdl                      <span class="token number">1</span>/1     Running   <span class="token number">0</span>          16h
kube-flannel-ds-nq7qg                      <span class="token number">1</span>/1     Running   <span class="token number">0</span>          16h
kube-proxy-2nrkb                           <span class="token number">1</span>/1     Running   <span class="token number">0</span>          16h
kube-proxy-fpjcm                           <span class="token number">1</span>/1     Running   <span class="token number">0</span>          16h
kube-scheduler-master.novalocal            <span class="token number">1</span>/1     Running   <span class="token number">0</span>          16h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="controller-manager\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#controller-manager\u7684\u4F5C\u7528" aria-hidden="true">#</a> controller-manager\u7684\u4F5C\u7528</h4><ul><li><p>\u521B\u5EFA\u4E00\u4E2Adeployment\uFF0C\u7ED3\u679C\u6CA1\u6709\u521B\u5EFAPod\uFF0C\u8FD9\u662F\u4EC0\u4E48\u539F\u56E0\uFF1F</p></li><li><p>\u56E0\u4E3A\u5F53\u4F60\u521B\u5EFAdeployment\u7684\u65F6\u5019\uFF0Ccontroller-manager\u7684\u7EC4\u4EF6\u4F1A\u5E72\u9884\u8FDB\u6765\uFF0C\u6839\u636Edeployment\u7684yaml\u8C03\u7528rs\u521B\u5EFA\u591A\u5C11\u4E2APod\uFF0C\u8FDB\u884C\u8C03\u5EA6\uFF0C\u5982\u679C\u6CA1\u6709\u521B\u5EFAPod\u5C31\u662FController-manager\u7684\u95EE\u9898\u3002\u8FD8\u6709\u4E00\u79CD\u539F\u56E0\u662Fapiserver\u914D\u7F6E\u4E0D\u5F53\uFF0C\u63D2\u4EF6\u6709\u95EE\u9898\uFF0C\u8BF7\u6C42\u63D0\u4EA4\u6210\u529F\u4E86\uFF0C\u4F46\u662F\u88AB\u62D2\u7EDD\u4E86\u3002</p></li></ul><h2 id="kubernetes\u6545\u969C\u6392\u67E5-service\u8BBF\u95EE\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#kubernetes\u6545\u969C\u6392\u67E5-service\u8BBF\u95EE\u5F02\u5E38" aria-hidden="true">#</a> Kubernetes\u6545\u969C\u6392\u67E5\uFF1AService\u8BBF\u95EE\u5F02\u5E38</h2><p>Service\u4E00\u822C\u662F\u8BBF\u95EE\u4E0D\u901A\u7684\uFF0C\u6709\u4EE5\u4E0B\u53EF\u80FD\u6027\uFF1A</p><ol><li><code>Service\u662F\u5426\u5173\u8054Pod\uFF1F</code></li><li><code>Service\u6307\u5B9Atarget-port\u7AEF\u53E3\u662F\u5426\u6B63\u5E38\uFF1F</code></li><li><code>Pod\u6B63\u5E38\u5DE5\u4F5C\u5417\uFF1F</code></li><li><code>Service\u662F\u5426\u901A\u8FC7DNS\u5DE5\u4F5C\uFF1F</code></li><li><code>kube-proxy\u6B63\u5E38\u5DE5\u4F5C\u5417\uFF1F</code></li><li><code>kube-proxy\u662F\u5426\u6B63\u5E38\u5199iptables\u89C4\u5219\uFF1F</code></li><li><code>cni\u7F51\u7EDC\u63D2\u4EF6\u662F\u5426\u6B63\u5E38\u5DE5\u4F5C\uFF1F</code></li></ol><h2 id="k8s-1-20x\u7248\u672Cnfs\u52A8\u6001\u5B58\u50A8\u62A5\u9519" tabindex="-1"><a class="header-anchor" href="#k8s-1-20x\u7248\u672Cnfs\u52A8\u6001\u5B58\u50A8\u62A5\u9519" aria-hidden="true">#</a> K8s 1.20x\u7248\u672Cnfs\u52A8\u6001\u5B58\u50A8\u62A5\u9519</h2><p><code>persistentvolume-controller waiting for a volume to be created, either by external provisioner &quot;qgg-nfs-storage&quot; or manually created by system administrator</code><code>waiting for a volume to be created, either by external provisioner &quot;storage.</code></p><h4 id="\u4FEE\u6539apiserver\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539apiserver\u7684\u914D\u7F6E" aria-hidden="true">#</a> \u4FEE\u6539apiserver\u7684\u914D\u7F6E</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> /etc/kubernetes/manifests/kube-apiserver.yaml
apiVersion: v1
\xB7\xB7\xB7
    - --tls-private-key-file<span class="token operator">=</span>/etc/kubernetes/pki/apiserver.key
    - --feature-gates<span class="token operator">=</span>RemoveSelfLink<span class="token operator">=</span>false <span class="token comment"># \u6DFB\u52A0\u8FD9\u4E2A\u914D\u7F6E</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u91CD\u542Fapiserver" tabindex="-1"><a class="header-anchor" href="#\u91CD\u542Fapiserver" aria-hidden="true">#</a> \u91CD\u542Fapiserver</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ systemctl  restart kubelet 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,23),l=[r];function t(o,c){return n(),s("div",null,l)}const u=e(i,[["render",t],["__file","12.Kubernetes\u96C6\u7FA4\u6545\u969C\u6392\u67E5.html.vue"]]);export{u as default};
