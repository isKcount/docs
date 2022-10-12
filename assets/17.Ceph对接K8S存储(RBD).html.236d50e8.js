import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.ca0279c0.js";const t={},p=e(`<h1 id="ceph\u5BF9\u63A5k8s\u5B58\u50A8\u4F7F\u7528rbd" tabindex="-1"><a class="header-anchor" href="#ceph\u5BF9\u63A5k8s\u5B58\u50A8\u4F7F\u7528rbd" aria-hidden="true">#</a> Ceph\u5BF9\u63A5K8S\u5B58\u50A8\u4F7F\u7528RBD</h1><h2 id="\u73AF\u5883\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a> \u73AF\u5883\u642D\u5EFA</h2><h3 id="\u4F7F\u7528\u670D\u52A1\u5668\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u670D\u52A1\u5668\u89C4\u5212" aria-hidden="true">#</a> \u4F7F\u7528\u670D\u52A1\u5668\u89C4\u5212</h3><table><thead><tr><th>Master</th><th>node1</th><th>node2</th></tr></thead><tbody><tr><td>192.168.0.61</td><td>192.168.0.2</td><td>192.168.0.53</td></tr></tbody></table><table><thead><tr><th>Ceph1</th><th>Ceph2</th><th>Ceph3</th><th>Ceph4</th></tr></thead><tbody><tr><td>192.168.0.130</td><td>192.168.0.141</td><td>192.168.0.249</td><td>192.168.0.47</td></tr><tr><td>\u786C\u76D810G*3</td><td>\u786C\u76D810G*3</td><td>\u786C\u76D810G*3</td><td>\u786C\u76D810G*3</td></tr></tbody></table><h3 id="ceph\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#ceph\u96C6\u7FA4" aria-hidden="true">#</a> Ceph\u96C6\u7FA4</h3><p>\u4F7F\u7528ceph-deploy\u7684\u65B9\u5F0F\u5C06Ceph\u96C6\u7FA4\u642D\u5EFA\u5B8C\u6210\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ceph1 ~<span class="token punctuation">]</span><span class="token comment"># ceph -s </span>
  cluster:
    id:     1ca010d2-42d2-4ce8-b7da-4c2cf70ac697
    health: HEALTH_OK
 
  services:
    mon: <span class="token number">4</span> daemons, quorum ceph4,ceph1,ceph2,ceph3 <span class="token punctuation">(</span>age 90m<span class="token punctuation">)</span>
    mgr: ceph1<span class="token punctuation">(</span>active, since 96m<span class="token punctuation">)</span>, standbys: ceph4, ceph3, ceph2
    mds: cephfs:1 <span class="token punctuation">{</span><span class="token number">0</span><span class="token operator">=</span>ceph1<span class="token operator">=</span>up:active<span class="token punctuation">}</span> <span class="token number">2</span> up:standby
    osd: <span class="token number">12</span> osds: <span class="token number">12</span> up <span class="token punctuation">(</span>since 115m<span class="token punctuation">)</span>, <span class="token number">12</span> <span class="token keyword">in</span> <span class="token punctuation">(</span>since 115m<span class="token punctuation">)</span>
 
  data:
    pools:   <span class="token number">3</span> pools, <span class="token number">320</span> pgs
    objects: <span class="token number">133</span> objects, <span class="token number">273</span> MiB
    usage:   <span class="token number">13</span> GiB used, <span class="token number">107</span> GiB / <span class="token number">120</span> GiB avail
    pgs:     <span class="token number">320</span> active+clean
 
  io:
    client:   <span class="token number">13</span> KiB/s rd, <span class="token number">15</span> op/s rd, <span class="token number">0</span> op/s wr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="k8s\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#k8s\u96C6\u7FA4" aria-hidden="true">#</a> k8s\u96C6\u7FA4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get node</span>
NAME     STATUS   ROLES                  AGE    VERSION
master   Ready    control-plane,master   153m   v1.20.0
node1    Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>                 152m   v1.20.0
node2    Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>                 152m   v1.20.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="k8s\u8FDE\u63A5\u5BF9\u63A5\u5916\u90E8ceph\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#k8s\u8FDE\u63A5\u5BF9\u63A5\u5916\u90E8ceph\u96C6\u7FA4" aria-hidden="true">#</a> k8s\u8FDE\u63A5\u5BF9\u63A5\u5916\u90E8ceph\u96C6\u7FA4</h2><h3 id="\u5BF9\u63A5\u5B58\u50A8\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u63A5\u5B58\u50A8\u7B80\u4ECB" aria-hidden="true">#</a> \u5BF9\u63A5\u5B58\u50A8\u7B80\u4ECB</h3><p><strong>\u4E00\u5171 6 \u79CD\u65B9\u5F0F\u5BF9\u63A5ceph\u5B58\u50A8\u96C6\u7FA4\uFF1A</strong></p><ol><li>\u76F4\u63A5\u4F7F\u7528ceph\u7684\u6587\u4EF6\u7CFB\u7EDF</li><li>\u76F4\u63A5\u4F7F\u7528ceph\u7684\u5757\u5B58\u50A8</li><li>\u4F7F\u7528\u793E\u533A\u63D0\u4F9B\u7684 cephfs \u505A\u6301\u4E45\u6570\u636E\u5377</li><li>\u4F7F\u7528\u793E\u533A\u63D0\u4F9B\u7684 RBD \u505A pod \u7684\u6301\u4E45\u5B58\u50A8</li><li>\u4F7F\u7528 \u5B98\u65B9 ceph-csi \u7684 cephfs \u65B9\u5F0F</li><li>\u4F7F\u7528 \u5B98\u65B9 ceph-csi \u7684 rbd \u65B9\u5F0F</li></ol><blockquote><p>\u8FD9\u91CC\u4E3B\u8981\u662F\u52A8\u6001\u57FA\u4E8E sc \u521B\u5EFA pvc\uFF0C\u4E3A k8s\u63D0\u4F9B\u52A8\u6001\u7533\u8BF7 pv\u7684\u529F\u80FD\uFF0Cceph\u63D0\u4F9B\u5E95\u5C42\u5B58\u50A8\u529F\u80FD\u3002</p><p>1\u3001\u793E\u533A</p><ul><li><code>cephfs \u505A\u6301\u4E45\u6570\u636E\u5377</code></li><li><code>RBD \u505A pod \u7684\u6301\u4E45\u5B58\u50A8</code></li></ul><p>2\u3001\u5B98\u65B9 ceph-csi</p><ul><li><code>cephfs \u65B9\u5F0F</code></li><li><code>rbd \u65B9\u5F0F</code></li></ul></blockquote><p><strong>k8s\u53EF\u4EE5\u901A\u8FC7\u4E24\u79CD\u65B9\u5F0F\u4F7F\u7528 ceph\u505A volume:</strong> <strong><code>cephfs\u548C rbd</code></strong></p><ol><li>\u4E00\u4E2A Ceph \u96C6\u7FA4\u4EC5\u652F\u6301\u4E00\u4E2A CephFS</li><li>cephfs\u65B9\u5F0F\u652F\u6301k8s\u7684pv\u76843\u79CD\u8BBF\u95EE\u6A21\u5F0F <code>ReadWriteOnce\u3001ReadOnlyMany \u3001ReadWriteMany</code></li><li>RBD\u652F\u6301 ReadWriteOnce\u3001ReadOnlyMany \u4E24\u79CD\u6A21\u5F0F</li></ol><blockquote><p>\u6CE8\u610F\uFF1A\u8BBF\u95EE\u6A21\u5F0F\u53EA\u662F\u80FD\u529B\u63CF\u8FF0\uFF0C\u5E76\u4E0D\u662F\u5F3A\u5236\u6267\u884C\u7684\uFF0C\u5BF9\u4E8E\u6CA1\u6709\u6309pvc\u58F0\u660E\u7684\u65B9\u5F0F\u4F7F\u7528pv\uFF0C\u5B58\u50A8\u63D0\u4F9B\u8005\u5E94\u8BE5\u8D1F\u8D23\u8BBF\u95EE\u65F6\u7684\u8FD0\u884C\u9519\u8BEF\u3002\u4F8B\u5982\u5982\u679C\u8BBE\u7F6Epvc\u7684\u8BBF\u95EE\u6A21\u5F0F\u4E3A ReadOnlyMany \uFF0Cpod\u6302\u8F7D\u540E\u4F9D\u7136\u53EF\u5199\uFF0C\u5982\u679C\u9700\u8981\u771F\u6B63\u7684\u4E0D\u53EF\u5199\uFF0C\u7533\u8BF7pvc\u662F\u9700\u8981\u6307\u5B9A readOnly: true \u53C2\u6570</p></blockquote><p><strong>k8s\u4F7F\u7528 volume\u7684\u65B9\u6CD5\uFF1A</strong></p><ol><li>\u76F4\u63A5\u65B9\u5F0F: Volume-&gt;backend</li><li>\u9759\u6001\u914D\u5907: Volume-&gt;PersistentVolumeClaim-&gt;PersistentVolume-&gt;Backend</li><li>\u52A8\u6001\u914D\u5907: Volume-&gt;PersistentVolumeClaim-&gt;StorageClass-&gt;Backend</li></ol><h3 id="rbd\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#rbd\u7684\u65B9\u5F0F" aria-hidden="true">#</a> rbd\u7684\u65B9\u5F0F</h3><p>1\u3001\u6240\u6709<code>k8s\u8282\u70B9</code>\u5B89\u88C5\u4F9D\u8D56\u7EC4\u4EF6\uFF0C\u914D\u7F6Eyum\u6E90\u5B89\u88C5ceph-common</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/yum.repos.d/ceph.repo </span>
<span class="token punctuation">[</span>ceph<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>ceph 
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>https://mirrors.aliyun.com/ceph/rpm-nautilus/el7/x86_64/
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span> 
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span> 

<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># for i in master node1 node2 </span>
<span class="token operator">&gt;</span> <span class="token keyword">do</span>
<span class="token operator">&gt;</span> <span class="token function">scp</span> /etc/yum.repos.d/ceph.repo <span class="token variable">$i</span>:/etc/yum.repos.d/ceph.repo 
<span class="token operator">&gt;</span> <span class="token function">ssh</span> <span class="token variable">$i</span> <span class="token string">&quot;yum install -y ceph-common&quot;</span>
<span class="token operator">&gt;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001\u67E5\u770B\u5F53\u524D\u7684<code>ceph\u96C6\u7FA4</code>\u914D\u7F6E\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ceph1 my-cluster<span class="token punctuation">]</span><span class="token comment"># cat /etc/ceph/ceph.conf </span>
<span class="token punctuation">[</span>global<span class="token punctuation">]</span>
fsid <span class="token operator">=</span> 1ca010d2-42d2-4ce8-b7da-4c2cf70ac697
public_network <span class="token operator">=</span> <span class="token number">192.168</span>.0.0/24
cluster_network <span class="token operator">=</span> <span class="token number">192.168</span>.0.0/24
mon_initial_members <span class="token operator">=</span> ceph1, ceph2, ceph3, ceph4
mon_host <span class="token operator">=</span> <span class="token number">192.168</span>.0.130,192.168.0.141,192.168.0.249,192.168.0.47
auth_cluster_required <span class="token operator">=</span> cephx
auth_service_required <span class="token operator">=</span> cephx
auth_client_required <span class="token operator">=</span> cephx

mon_allow_pool_delete <span class="token operator">=</span> <span class="token boolean">true</span>
mon_max_pg_per_osd <span class="token operator">=</span> <span class="token number">2000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001\u5728<code>ceph1\u7684\u63A7\u5236\u8282\u70B9</code>\u4E0A\u9762\u540C\u6B65\u914D\u7F6E\u6587\u4EF6</p><p>\u5C06admin\u7684ceph\u6743\u9650\u4EE5\u53CA\u914D\u7F6E\u6587\u4EF6\u5206\u53D1\u5230k8s\u96C6\u7FA4\uFF0C\u53D1\u5B8C\u6743\u9650\u53EF\u4EE5\u5728k8s\u96C6\u7FA4\u4E0A\u64CD\u4F5Cceph\u96C6\u7FA4\uFF0C\u4E5F\u53EF\u4EE5\u5728ceph\u96C6\u7FA4\u4E2D\u64CD\u4F5C\uFF0C\u4EE5\u4E0B\u662F\u5728k8s\u96C6\u7FA4\u4E0B\u64CD\u4F5Cceph\u96C6\u7FA4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@ceph1 ~<span class="token punctuation">]</span><span class="token comment"># ssh-copy-id master</span>
<span class="token punctuation">[</span>root@ceph1 ~<span class="token punctuation">]</span><span class="token comment"># ssh-copy-id node1</span>
<span class="token punctuation">[</span>root@ceph1 ~<span class="token punctuation">]</span><span class="token comment"># ssh-copy-id node2</span>
<span class="token punctuation">[</span>root@ceph1 my-cluster<span class="token punctuation">]</span><span class="token comment"># ceph-deploy --overwrite-conf admin  ceph2 ceph3 ceph4 master node1 node2 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4\u3001\u521B\u5EFA\u5B58\u50A8\u6C60\u5E76\u5F00\u542Frbd\u529F\u80FD</p><p>\u521B\u5EFAkube\u6C60\u7ED9k8s\u96C6\u7FA4\u4F7F\u7528\uFF0C\u5728kube\u6C60\u4E0B\u9762\u521B\u5EFA\u4E00\u4E2A20G\u7684\u955C\u50CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># ceph osd pool create kube 128 128 </span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># rbd create -p kube -s 20G ceph-image</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># rbd info --image kube/ceph-image</span>
rbd image <span class="token string">&#39;ceph-image&#39;</span><span class="token builtin class-name">:</span>
        size <span class="token number">20</span> GiB <span class="token keyword">in</span> <span class="token number">5120</span> objects
        order <span class="token number">22</span> <span class="token punctuation">(</span><span class="token number">4</span> MiB objects<span class="token punctuation">)</span>
        snapshot_count: <span class="token number">0</span>
        id: ac9857b1b5fd
        block_name_prefix: rbd_data.ac9857b1b5fd
        format: <span class="token number">2</span>
        features: layering, exclusive-lock
        op_features: 
        flags: 
        create_timestamp: Sat Feb  <span class="token number">5</span> <span class="token number">14</span>:48:37 <span class="token number">2022</span>
        access_timestamp: Sat Feb  <span class="token number">5</span> <span class="token number">14</span>:48:37 <span class="token number">2022</span>
        modify_timestamp: Sat Feb  <span class="token number">5</span> <span class="token number">14</span>:48:37 <span class="token number">2022</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5\u3001\u521B\u5EFAceph\u7528\u6237\uFF0C\u63D0\u4F9B\u7ED9k8s\u4F7F\u7528</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u67E5\u770Bceph\u96C6\u7FA4\u4E2D\u7684\u8BA4\u8BC1\u7528\u6237\u53CA\u76F8\u5173\u7684key</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># ceph auth list</span>

<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># ceph auth get-or-create client.kube mon &#39;allow r&#39; osd &#39;allow class-read object_prefix  rbd_children,allow rwx pool=kube&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6\u3001\u521B\u5EFAsecret\u8D44\u6E90</p><blockquote><p>base64 \u5355\u5411\u52A0\u5BC6\u4E00\u4E0B\uFF0Ck8s\u4E0D\u4EE5\u660E\u6587\u65B9\u5F0F\u5B58\u50A8\u8D26\u53F7\u5BC6\u7801</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># ceph auth get-key client.admin | base64</span>
<span class="token assign-left variable">QVFERUVQNWhQbE96QnhBQWNyUkp1dVdrc2d1N2FJdGZneDltbHc9PQ</span><span class="token operator">==</span>
<span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># ceph auth get-key client.kube | base64</span>
<span class="token assign-left variable">QVFCd0cvNWg2cW9XRHhBQXM0ZkluZEFIMDZnVTdtcG9tTlF3UVE9PQ</span><span class="token operator">==</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master ~<span class="token punctuation">]</span><span class="token comment"># mkdir jtpv &amp;&amp; cd jtpv</span>
<span class="token punctuation">[</span>root@master jtpv<span class="token punctuation">]</span><span class="token comment"># kubectl create secret generic ceph-admin-secret  \\</span>
--from-literal<span class="token operator">=</span>key<span class="token operator">=</span>QVFERUVQNWhQbE96QnhBQWNyUkp1dVdrc2d1N2FJdGZneDltbHc9PQ<span class="token operator">==</span> <span class="token punctuation">\\</span>
--dry-run <span class="token parameter variable">-o</span> yaml <span class="token operator">&gt;</span> ceph-adminsecret.yaml  

<span class="token punctuation">[</span>root@master jtpv<span class="token punctuation">]</span><span class="token comment"># kubectl create secret generic ceph-kube-secret  \\</span>
--from-literal<span class="token operator">=</span>key<span class="token operator">=</span>QVFCd0cvNWg2cW9XRHhBQXM0ZkluZEFIMDZnVTdtcG9tTlF3UVE9PQ<span class="token operator">==</span> <span class="token punctuation">\\</span>
--dry-run <span class="token parameter variable">-o</span> yaml <span class="token operator">&gt;</span> ceph-adminsecret.yaml  

<span class="token punctuation">[</span>root@master jtpv<span class="token punctuation">]</span><span class="token comment"># kubectl apply -f .</span>
<span class="token punctuation">[</span>root@master jtpv<span class="token punctuation">]</span><span class="token comment"># kubectl get secrets </span>
NAME                  TYPE                                  DATA   AGE
ceph-admin-secret     kubernetes.io/rbd                     <span class="token number">1</span>      106m
ceph-kube-secret      kubernetes.io/rbd                     <span class="token number">1</span>      106m
default-token-2nnk5   kubernetes.io/service-account-token   <span class="token number">3</span>      3h3m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>secret\u7684\u4E24\u4E2Ayaml\u6587\u4EF6\u5982\u4E0B\uFF1A</p></blockquote><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@master jtpv<span class="token punctuation">]</span><span class="token comment"># cat ceph-admin-secret.yaml </span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">key</span><span class="token punctuation">:</span> QVFERUVQNWhQbE96QnhBQWNyUkp1dVdrc2d1N2FJdGZneDltbHc9PQ==
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Secret
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">creationTimestamp</span><span class="token punctuation">:</span> <span class="token null important">null</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ceph<span class="token punctuation">-</span>admin<span class="token punctuation">-</span>secret
  
<span class="token punctuation">[</span>root@master jtpv<span class="token punctuation">]</span><span class="token comment"># cat ceph-kube-secret.yaml </span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">data</span><span class="token punctuation">:</span>
  <span class="token key atrule">key</span><span class="token punctuation">:</span> QVFCd0cvNWg2cW9XRHhBQXM0ZkluZEFIMDZnVTdtcG9tTlF3UVE9PQ==
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Secret
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">creationTimestamp</span><span class="token punctuation">:</span> <span class="token null important">null</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ceph<span class="token punctuation">-</span>kube<span class="token punctuation">-</span>secret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7\u3001\u521B\u5EFAPV\u8FDE\u63A5\u5B58\u50A8\u6C60</p><ul><li>PV\u7684\u540D\u79F0\u53EB<code>ceph-pv-test</code></li><li>\u7533\u8BF7\u7684PV\u662F<code>10Gi</code>\u7684\u5927\u5C0F</li><li>\u8BFB\u5199\u6A21\u5F0F\u662F<code>ReadWriteMany</code></li><li>rbd\u7684mon\u8282\u70B9\u5206\u522B\u662F<code>\u56DB\u4E2Aceph\u7684osd\u8282\u70B9</code></li><li>\u5B58\u50A8\u6C60\u4F7F\u7528\u7684\u662F\u521B\u5EFA\u7684<code>kube</code>\uFF0C\u955C\u50CF\u4F7F\u7528<code>ceph-image</code>\uFF0C\u7528\u6237\u4F7F\u7528<code>admin</code>\uFF0C\u5BC6\u94A5\u4F7F\u7528\u521B\u5EFA\u597D\u7684<code>secret</code>\uFF0C\u6587\u4EF6\u683C\u5F0F\u4F7F\u7528<code>ext4</code>\uFF0C<code>\u5173\u95ED\u53EA\u8BFB</code></li><li>pv\u7684\u7B56\u7565\u4F7F\u7528<code>Retain</code></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@master jtpv<span class="token punctuation">]</span><span class="token comment"># cat pv.yaml </span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1 
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolume
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> 
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ceph<span class="token punctuation">-</span>pv<span class="token punctuation">-</span>test 
<span class="token key atrule">spec</span><span class="token punctuation">:</span> 
  <span class="token key atrule">capacity</span><span class="token punctuation">:</span> 
    <span class="token key atrule">storage</span><span class="token punctuation">:</span> 10Gi 
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> ReadWriteMany
  <span class="token key atrule">rbd</span><span class="token punctuation">:</span> 
    <span class="token key atrule">monitors</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 192.168.0.130<span class="token punctuation">:</span><span class="token number">6789</span>
      <span class="token punctuation">-</span> 192.168.0.141<span class="token punctuation">:</span><span class="token number">6789</span>
      <span class="token punctuation">-</span> 192.168.0.249<span class="token punctuation">:</span><span class="token number">67889</span>
      <span class="token punctuation">-</span> 192.168.0.47<span class="token punctuation">:</span><span class="token number">6789</span>
    <span class="token key atrule">pool</span><span class="token punctuation">:</span> kube 
    <span class="token key atrule">image</span><span class="token punctuation">:</span> ceph<span class="token punctuation">-</span>image
    <span class="token key atrule">user</span><span class="token punctuation">:</span> admin 
    <span class="token key atrule">secretRef</span><span class="token punctuation">:</span> 
      <span class="token key atrule">name</span><span class="token punctuation">:</span> ceph<span class="token punctuation">-</span>admin<span class="token punctuation">-</span>secret
    <span class="token key atrule">fsType</span><span class="token punctuation">:</span> ext4 
    <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token key atrule">persistentVolumeReclaimPolicy</span><span class="token punctuation">:</span> Retain 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8\u3001\u521B\u5EFApvc</p><ul><li>\u521B\u5EFAPVC\u7684\u540D\u79F0\u662Fpvc-test-claim</li><li>\u8BFB\u5199\u6A21\u5F0F\u4F7F\u7528ReadWriteMany</li><li>\u4E00\u5171\u7533\u8BF7\u7684PV\u670910G\u7684\u5927\u5C0F\uFF0CPVC\u7533\u8BF75Gi\u5B58\u50A8\u4F7F\u7528</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@master jtpv<span class="token punctuation">]</span><span class="token comment"># cat pvc.yaml </span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1 
<span class="token key atrule">kind</span><span class="token punctuation">:</span> PersistentVolumeClaim 
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> 
  <span class="token key atrule">name</span><span class="token punctuation">:</span> pvc<span class="token punctuation">-</span>test<span class="token punctuation">-</span>claim 
<span class="token key atrule">spec</span><span class="token punctuation">:</span> 
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> ReadWriteMany 
  <span class="token key atrule">resources</span><span class="token punctuation">:</span> 
    <span class="token key atrule">requests</span><span class="token punctuation">:</span> 
      <span class="token key atrule">storage</span><span class="token punctuation">:</span> 5Gi 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u5F53\u524D\u7684pv\u548Cpvc\u7684\u72B6\u6001</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master jtpv<span class="token punctuation">]</span><span class="token comment"># kubectl get pv,pvc </span>
NAME                             CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                    STORAGECLASS   REASON   AGE
persistentvolume/ceph-pv-test    10Gi       RWX            Retain           Bound    default/pvc-test-claim                           116m

NAME                                   STATUS        VOLUME         CAPACITY   ACCESS MODES   STORAGECLASS   AGE
persistentvolumeclaim/pvc-test-claim   Terminating   ceph-pv-test   10Gi       RWX                           114m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>9\u3001\u7981\u7528image\u529F\u80FD\u96C6</p><p>\u4EE5\u4E0B\u64CD\u4F5C\u53EF\u4EE5\u5728\u7B2C\u4E00\u4E2APod\u6302\u8F7DPVC\u62A5\u9519\u91CC\u9762\u627E\u5230\uFF0C\u76F4\u63A5\u590D\u5236\u6267\u884C\u3002</p><p>RBD\u56FE\u50CF\u529F\u80FD\u96C6\u4E0D\u5339\u914D\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528\u201Crbd feature disable kube/ceph image object map fast diff deep flatten\u201D\u7981\u7528\u5185\u6838\u4E0D\u652F\u6301\u7684\u529F\u80FD\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@master jtpv<span class="token punctuation">]</span><span class="token comment"># rbd feature disable kube/ceph-image object-map fast-diff deep-flatten</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>10\u3001\u4F7F\u7528Pod\u6D4B\u8BD5PVC</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@master jtpv<span class="token punctuation">]</span><span class="token comment"># cat pod.yaml </span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ceph<span class="token punctuation">-</span>pod
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> busybox<span class="token punctuation">:</span><span class="token number">1.24</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> ceph<span class="token punctuation">-</span>pod
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;sleep&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;60000&#39;</span><span class="token punctuation">]</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> pvc 
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /usr/share/busybox
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span> 
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> pvc 
    <span class="token key atrule">persistentVolumeClaim</span><span class="token punctuation">:</span>
      <span class="token key atrule">claimName</span><span class="token punctuation">:</span> pvc<span class="token punctuation">-</span>test<span class="token punctuation">-</span>claim
      
<span class="token punctuation">[</span>root@master jtpv<span class="token punctuation">]</span><span class="token comment"># kubectl get pods </span>
NAME       READY   STATUS    RESTARTS   AGE
ceph<span class="token punctuation">-</span>pod   1/1     Running   0          113m

<span class="token punctuation">[</span>root@master jtpv<span class="token punctuation">]</span><span class="token comment"># kubectl exec -it ceph-pod -- sh</span>
/ <span class="token comment"># df  | grep rbd</span>
/dev/rbd0             20511312     45080  20449848   0% /usr/share/busybox
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,53),c=[p];function l(i,o){return s(),a("div",null,c)}const r=n(t,[["render",l],["__file","17.Ceph\u5BF9\u63A5K8S\u5B58\u50A8(RBD).html.vue"]]);export{r as default};
