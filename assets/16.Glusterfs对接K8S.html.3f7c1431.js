import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.ca0279c0.js";const t={},l=e(`<h1 id="glusterfs\u5BF9\u63A5k8s" tabindex="-1"><a class="header-anchor" href="#glusterfs\u5BF9\u63A5k8s" aria-hidden="true">#</a> GlusterFs\u5BF9\u63A5K8S</h1><h2 id="\u4EC0\u4E48\u662Fglusterfs" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fglusterfs" aria-hidden="true">#</a> \u4EC0\u4E48\u662Fglusterfs</h2><p>glusterfs\u662F\u4E00\u4E2A\u5F00\u6E90\u5206\u5E03\u5F0F\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u5177\u6709\u5F3A\u5927\u7684\u6A2A\u5411\u6269\u5C55\u80FD\u529B\uFF0C\u53EF\u652F\u6301\u6570pb\u5B58\u50A8\u5BB9\u91CF\u548C\u6570\u5343\u5BA2\u6237\u7AEF\uFF0C\u901A\u8FC7\u7F51\u7EDC\u4E92\u8054\u6210\u4E00\u4E2A\u5E76\u884C\u7684\u7F51\u7EDC\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u5177\u6709\u53EF\u6269\u5C55\u6027\u3001\u9AD8\u6027\u80FD\u3001\u9AD8\u53EF\u7528\u7B49\u7279\u70B9\u3002</p><p><strong>\u5E38\u7528\u8D44\u6E90\uFF1A</strong></p><ul><li><p>pool \u5B58\u50A8\u8D44\u6E90\u6C60</p></li><li><p>peer \u8282\u70B9</p></li><li><p>volume \u5377 \u5FC5\u987B\u5904\u4E8Estart\u624D\u53EF\u7528</p></li><li><p>brick\u5B58\u50A8\u5355\u5143\uFF08\u786C\u76D8\uFF09\uFF0C\u53EF\u589E\uFF0C\u53EF\u51CF</p></li><li><p>gluster</p></li><li><p>glusterfs\u6DFB\u52A0\u8282\u70B9\u662F\u9ED8\u8BA4\u672C\u673A\u662Flocalhost\uFF0C\u53EA\u9700\u8981\u6DFB\u52A0\u5176\u4ED6\u673A\u5668\u5373\u53EF\uFF0C\u6BCF\u4E2A\u8282\u70B9\u90FD\u662F\u4E3B</p></li><li><p>glusterfs\u9ED8\u8BA4\u76D1\u542C49152\u7AEF\u53E3</p></li></ul><h2 id="\u5B89\u88C5glusterfs" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5glusterfs" aria-hidden="true">#</a> \u5B89\u88C5glusterfs</h2><p>\u6211\u5728\u672C\u5730\u76F4\u63A5\u7528Kubernetes\u96C6\u7FA4\u505A\u6D4B\u8BD5\uFF0C\u5DF2\u7ECF\u642D\u5EFA\u597D\u4E86\u4E09\u4E2A\u8282\u70B9\u7684Kubernetes\u96C6\u7FA4\u4E4B\u540E\uFF0C\u5E76\u6CA1\u6709\u914D\u7F6E\u540E\u7AEF\u7684\u5B58\u50A8\u3002</p><table><thead><tr><th>\u4E3B\u673A\u540D</th><th>ip\u5730\u5740</th><th>\u73AF\u5883</th></tr></thead><tbody><tr><td>master</td><td>192.168.0.128</td><td>centos7.6\uFF0C\u589E\u52A0\u4E24\u575720G\u786C\u76D8</td></tr><tr><td>node1</td><td>192.168.0.37</td><td>centos7.6\uFF0C\u589E\u52A0\u4E24\u575720G\u786C\u76D8</td></tr><tr><td>node2</td><td>192.168.0.112</td><td>centos7.6\uFF0C\u589E\u52A0\u4E24\u575720G\u786C\u76D8</td></tr></tbody></table><p><strong><code>//\u6240\u6709\u8282\u70B9\u6267\u884C</code></strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># yum install centos-release-gluster -y </span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># yum install install glusterfs-server -y </span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># systemctl start glusterd.service </span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># systemctk enable glusterd.service </span>

<span class="token comment">#\u521B\u5EFA\u4E24\u4E2A\u76EE\u5F55\u4EE3\u66FF\u6DFB\u52A0\u7684\u786C\u76D8</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># mkdir -p /test1 </span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># mkdir -p /test2 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6DFB\u52A0glusterfs\u8D44\u6E90\u6C60" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0glusterfs\u8D44\u6E90\u6C60" aria-hidden="true">#</a> \u6DFB\u52A0glusterfs\u8D44\u6E90\u6C60\uFF1A</h2><p><strong><code>//master\u8282\u70B9\u6267\u884C</code></strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u67E5\u770B\u5F53\u524D\u7684gluster\u5B58\u50A8\u6C60</span>
root@master ~<span class="token punctuation">]</span><span class="token comment"># gluster pool list </span>
UUID                                    Hostname        State
bc6a2d93-6cca-4b4d-a414-2a19e45a46f3    localhost       Connected 

<span class="token comment">#\u6DFB\u52A0gluster\u8D44\u6E90\u6C60</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># gluster peer probe node1 </span>
peer probe: success
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># gluster peer probe node2 </span>
peer probe: success

<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># gluster pool list </span>
UUID                                    Hostname        State
2cb0d9ef-57c4-40ac-9805-f363209e2bf0    node1           Connected 
60c6c251-6d1e-44aa-8192-e8278a1fc274    node2           Connected 
bc6a2d93-6cca-4b4d-a414-2a19e45a46f3    localhost       Connected 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="glusterfs\u5377\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#glusterfs\u5377\u7BA1\u7406" aria-hidden="true">#</a> glusterfs\u5377\u7BA1\u7406</h2><p>\u5206\u5E03\u5F0F\u590D\u5236\u5377\u53EF\u4EE5\u8BBE\u7F6E\u590D\u5236\u7684\u6570\u91CF\uFF0C\u5982replica\u8BBE\u7F6E\u7684\u662F2\uFF0C\u90A3\u4E48\u5C31\u8868\u793A\u4E0A\u4F20\u7684\u6587\u4EF6\u4F1A\u590D\u52362\u4EFD\uFF0C\u6BD4\u5982\u4E0A\u4F2010\u4E2A\u6587\u4EF6\u5B9E\u9645\u4E0A\u662F\u4E0A\u4F20\u4E8620\u4E2A\u6587\u4EF6\uFF0C\u8D77\u5230\u4E00\u5B9A\u7684\u5907\u4EFD\u4F5C\u7528\uFF0C\u8FD920\u4E2A\u6587\u4EF6\u4F1A\u968F\u673A\u5206\u5E03\u5728\u5404\u4E2A\u8282\u70B9\u3002</p><h3 id="\u521B\u5EFA\u5206\u5E03\u5F0F\u590D\u5236\u5377" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5206\u5E03\u5F0F\u590D\u5236\u5377" aria-hidden="true">#</a> \u521B\u5EFA\u5206\u5E03\u5F0F\u590D\u5236\u5377</h3><p>\u5E38\u7528\u7684\u5377\u7C7B\u578B\u662F\u5206\u5E03\u5F0F\u590D\u5236\u5377\uFF0C\u52A0\u4E0Aforce\u53C2\u6570\u662F\u5F3A\u5236\u5C11\u4E8E3\u4E2A\u521B\u5EFA</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># gluster volume create k8s replica 2 master:/test1 master:/test2  node1:/test1 node1:/test2 force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u542F\u52A8\u5377" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u5377" aria-hidden="true">#</a> \u542F\u52A8\u5377</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># gluster volume start k8s</span>
volume start: k8s: success
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u67E5\u770B\u5377" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5377" aria-hidden="true">#</a> \u67E5\u770B\u5377</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># gluster volume info k8s </span>

Volume Name: k8s
Type: Distributed-Replicate
Volume ID: d47aad4d-eca7-474f-9c97-8776689a31ad
Status: Started
Snapshot Count: <span class="token number">0</span>
Number of Bricks: <span class="token number">2</span> x <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">4</span>
Transport-type: tcp
Bricks:
Brick1: master:/test1
Brick2: master:/test2
Brick3: node1:/test1
Brick4: node1:/test2
Options Reconfigured:
cluster.granular-entry-heal: on
storage.fips-mode-rchecksum: on
transport.address-family: inet
nfs.disable: on
performance.client-io-threads: off
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6302\u8F7D\u5377" tabindex="-1"><a class="header-anchor" href="#\u6302\u8F7D\u5377" aria-hidden="true">#</a> \u6302\u8F7D\u5377</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># mount -t glusterfs 192.168.0.128:/k8s /mnt</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># df -h | grep mnt</span>
<span class="token number">192.168</span>.0.128:/k8s   40G  <span class="token number">4</span>.6G   34G  <span class="token number">12</span>% /mnt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5206\u90E8\u7F72\u590D\u5236\u5377\u6269\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u5206\u90E8\u7F72\u590D\u5236\u5377\u6269\u5BB9" aria-hidden="true">#</a> \u5206\u90E8\u7F72\u590D\u5236\u5377\u6269\u5BB9</h2><h3 id="\u6269\u5BB9\u524D\u67E5\u770B\u5BB9\u91CF" tabindex="-1"><a class="header-anchor" href="#\u6269\u5BB9\u524D\u67E5\u770B\u5BB9\u91CF" aria-hidden="true">#</a> \u6269\u5BB9\u524D\u67E5\u770B\u5BB9\u91CF</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># df -h | grep mnt</span>
<span class="token number">192.168</span>.0.128:/k8s   40G  <span class="token number">4</span>.6G   34G  <span class="token number">12</span>% /mntdf <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6269\u5BB9\u7684\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u6269\u5BB9\u7684\u547D\u4EE4" aria-hidden="true">#</a> \u6269\u5BB9\u7684\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># gluster volume add-brick k8s node2:/test1 node2:/test2  force </span>
volume add-brick: success
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6269\u5BB9\u540E\u67E5\u770B\u5BB9\u91CF" tabindex="-1"><a class="header-anchor" href="#\u6269\u5BB9\u540E\u67E5\u770B\u5BB9\u91CF" aria-hidden="true">#</a> \u6269\u5BB9\u540E\u67E5\u770B\u5BB9\u91CF</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># df -h | grep mnt</span>
<span class="token number">192.168</span>.0.128:/k8s   59G  <span class="token number">6</span>.6G   50G  <span class="token number">12</span>% /mnt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="glusterfs\u505Ak8s\u7684\u540E\u7AEF\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#glusterfs\u505Ak8s\u7684\u540E\u7AEF\u5B58\u50A8" aria-hidden="true">#</a> glusterfs\u505AK8s\u7684\u540E\u7AEF\u5B58\u50A8</h2><h3 id="\u521B\u5EFAendpoint" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAendpoint" aria-hidden="true">#</a> \u521B\u5EFAendpoint</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>$ vim glusterfs<span class="token punctuation">-</span>ep.yaml 
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Endpoints
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> glusterfs
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">subsets</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">addresses</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">ip</span><span class="token punctuation">:</span> 192.168.0.128
  <span class="token punctuation">-</span> <span class="token key atrule">ip</span><span class="token punctuation">:</span> 192.168.0.37
  <span class="token punctuation">-</span> <span class="token key atrule">ip</span><span class="token punctuation">:</span> 192.168.0.112
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">49152</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    
<span class="token punctuation">[</span>root@master glusterfs_py<span class="token punctuation">]</span><span class="token comment"># kubectl apply -f glusterfs-ep.yaml </span>
endpoints/glusterfs created

<span class="token punctuation">[</span>root@master glusterfs_py<span class="token punctuation">]</span><span class="token comment"># kubectl get endpoints</span>
NAME         ENDPOINTS                                                    AGE
glusterfs    192.168.0.128<span class="token punctuation">:</span><span class="token number">49152</span><span class="token punctuation">,</span>192.168.0.37<span class="token punctuation">:</span><span class="token number">49152</span><span class="token punctuation">,</span>192.168.0.112<span class="token punctuation">:</span>49152   12s
kubernetes   192.168.0.128<span class="token punctuation">:</span><span class="token number">6443</span>                                
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFAservice" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAservice" aria-hidden="true">#</a> \u521B\u5EFAservice</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@master glusterfs_py<span class="token punctuation">]</span><span class="token comment"># cat  glusterfs-service.yaml </span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> glusterfs
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">49152</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">49152</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP

<span class="token punctuation">[</span>root@master glusterfs_py<span class="token punctuation">]</span><span class="token comment"># kubectl apply -f glusterfs-service.yaml </span>
service/glusterfs created

<span class="token punctuation">[</span>root@master glusterfs_py<span class="token punctuation">]</span><span class="token comment"># kubectl get svc </span>
NAME         TYPE        CLUSTER<span class="token punctuation">-</span>IP      EXTERNAL<span class="token punctuation">-</span>IP   PORT(S)     AGE
glusterfs    ClusterIP   10.106.51.139   &lt;none<span class="token punctuation">&gt;</span>        49152/TCP   4s
kubernetes   ClusterIP   10.96.0.1       &lt;none<span class="token punctuation">&gt;</span>        443/TCP     85mkube
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFAglusterfs\u7C7B\u578Bpv\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAglusterfs\u7C7B\u578Bpv\u9A8C\u8BC1" aria-hidden="true">#</a> \u521B\u5EFAglusterfs\u7C7B\u578Bpv\u9A8C\u8BC1</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@master glusterfs_py<span class="token punctuation">]</span><span class="token comment"># cat  glusterfs-service.yaml </span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> glusterfs
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">49152</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">49152</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> ClusterIP

<span class="token punctuation">[</span>root@master glusterfs_py<span class="token punctuation">]</span><span class="token comment"># kubectl apply -f glusterfs-service.yaml </span>
service/glusterfs created

<span class="token punctuation">[</span>root@master glusterfs_py<span class="token punctuation">]</span><span class="token comment"># kubectl get svc </span>
NAME         TYPE        CLUSTER<span class="token punctuation">-</span>IP      EXTERNAL<span class="token punctuation">-</span>IP   PORT(S)     AGE
glusterfs    ClusterIP   10.106.51.139   &lt;none<span class="token punctuation">&gt;</span>        49152/TCP   4s
kubernetes   ClusterIP   10.96.0.1       &lt;none<span class="token punctuation">&gt;</span>        443/TCP     85mkube
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528pvc" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528pvc" aria-hidden="true">#</a> \u4F7F\u7528pvc</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@master glusterfs_py<span class="token punctuation">]</span><span class="token comment"># cat pvc.yaml </span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolumeClaim
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> glusterfs 
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> ReadWriteMany
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
    <span class="token key atrule">requests</span><span class="token punctuation">:</span>
      <span class="token key atrule">storage</span><span class="token punctuation">:</span> 50Gi
<span class="token punctuation">[</span>root@master glusterfs_py<span class="token punctuation">]</span><span class="token comment"># kubectl apply -f pvc.yaml </span>
persistentvolumeclaim/glusterfs created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFApod\u4F7F\u7528glusterfs\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFApod\u4F7F\u7528glusterfs\u5B58\u50A8" aria-hidden="true">#</a> \u521B\u5EFAPod\u4F7F\u7528glusterfs\u5B58\u50A8</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@master glusterfs_py<span class="token punctuation">]</span><span class="token comment"># cat pod.yaml </span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
      <span class="token key atrule">hostPath</span><span class="token punctuation">:</span> <span class="token number">80</span>  <span class="token comment"># \u6620\u5C04\u5BBF\u4E3B\u673A\u7684\u5916\u90E8\u7AEF\u53E3</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> glusterfs
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /usr/share/nginx/html 
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> glusterfs 
    <span class="token key atrule">persistentVolumeClaim</span><span class="token punctuation">:</span>
      <span class="token key atrule">claimName</span><span class="token punctuation">:</span> glusterfs
      
<span class="token punctuation">[</span>root@master glusterfs_py<span class="token punctuation">]</span><span class="token comment"># kubectl apply -f pod.yaml </span>
pod/nginx created

<span class="token punctuation">[</span>root@master glusterfs_py<span class="token punctuation">]</span><span class="token comment"># kubectl get pods </span>
NAME    READY   STATUS    RESTARTS   AGE
nginx   1/1     Running   0          109s

<span class="token punctuation">[</span>root@master glusterfs_py<span class="token punctuation">]</span><span class="token comment"># kubectl get pods -o wide </span>
NAME    READY   STATUS    RESTARTS   AGE     IP               NODE    NOMINATED NODE   READINESS GATES
nginx   1/1     Running   0          2m51s   10.244.166.129   node1   &lt;none<span class="token punctuation">&gt;</span>           &lt;none<span class="token punctuation">&gt;</span>

<span class="token punctuation">[</span>root@master glusterfs_py<span class="token punctuation">]</span><span class="token comment"># curl 10.244.166.129</span>
Hello Word
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42),i=[l];function p(c,u){return s(),a("div",null,i)}const d=n(t,[["render",p],["__file","16.Glusterfs\u5BF9\u63A5K8S.html.vue"]]);export{d as default};
