import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as l,a as n,b as s,d as t,f as a,r as c}from"./app.ca0279c0.js";const o={},u=a('<h1 id="gitea-k8s-jenkins-master-slave-webhook\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#gitea-k8s-jenkins-master-slave-webhook\u94A9\u5B50" aria-hidden="true">#</a> Gitea+K8s-Jenkins-master-slave(webhook\u94A9\u5B50)</h1><h2 id="\u8282\u70B9\u89C4\u5212" tabindex="-1"><a class="header-anchor" href="#\u8282\u70B9\u89C4\u5212" aria-hidden="true">#</a> \u8282\u70B9\u89C4\u5212</h2><p>\u670D\u52A1\u5668\u89C4\u5212\uFF1Acentos7.9.2009\u6700\u5C0F\u5316\u5B89\u88C5</p><p>\u5F53\u524D\u7684k8s\u5BB9\u5668\u5E95\u5C42\u4E3A <code>containerd</code></p><table><thead><tr><th>\u4E3B\u673A\u540D\u79F0</th><th>IP\u5730\u5740</th><th>\u8282\u70B9</th></tr></thead><tbody><tr><td>k8s-master</td><td>10.11.121.111</td><td>Jenkins</td></tr><tr><td>k8s-node1</td><td>10.11.121.112</td><td>node</td></tr><tr><td>k8s-node2</td><td>10.11.121.113</td><td>Gitea/NFS\u5B58\u50A8</td></tr></tbody></table><h2 id="\u90E8\u7F72jenkins\u548Cgitea" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72jenkins\u548Cgitea" aria-hidden="true">#</a> \u90E8\u7F72Jenkins\u548CGitea</h2><h3 id="_1-\u90E8\u7F72\u52A8\u6001\u4F9B\u5E94" tabindex="-1"><a class="header-anchor" href="#_1-\u90E8\u7F72\u52A8\u6001\u4F9B\u5E94" aria-hidden="true">#</a> 1.\u90E8\u7F72\u52A8\u6001\u4F9B\u5E94</h3>',7),r={href:"https://isicman.gitee.io/isicman/2022/02/02/Kubernetes/NFS%E5%81%9AK8S%E5%90%8E%E7%AB%AF%E5%AD%98%E5%82%A8/",target:"_blank",rel:"noopener noreferrer"},d=a(`<h3 id="_2-\u90E8\u7F72gitea" tabindex="-1"><a class="header-anchor" href="#_2-\u90E8\u7F72gitea" aria-hidden="true">#</a> 2.\u90E8\u7F72Gitea</h3><p>1.\u67E5\u770B\u5F53\u524D\u7684StorageClass\u7684\u5B58\u50A8\u60C5\u51B5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># kubectl get sc </span>
NAME                    PROVISIONER       RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
storage-nfs <span class="token punctuation">(</span>default<span class="token punctuation">)</span>   storage.pri/nfs   Delete          Immediate           <span class="token boolean">false</span>                  5h23m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u4F7F\u7528Docker\u542F\u52A8\u4E00\u4E2AGitea\u7684\u5BB9\u5668</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># docker run -d \\</span>
<span class="token parameter variable">--name</span> gitea  <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">222</span>:22 <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">3000</span>:3000 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /etc/timezone:/etc/timezone:ro <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /etc/localtime:/etc/localtime:ro <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /data/gitea:/data <span class="token punctuation">\\</span>
gitea/gitea:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.\u4FEE\u6539gieta\u7684\u914D\u7F6E\u6587\u4EF6\u5E76\u4E14\u91CD\u542Fgitea\u5BB9\u5668</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master ~<span class="token punctuation">]</span><span class="token comment"># vim /data/gitea/gitea/conf/app.ini</span>
<span class="token comment">#\u5728app.ini\u914D\u7F6E\u6587\u4EF6\u6700\u540E\u6DFB\u52A0\u4E0B\u9762\u8FD9\u4E2A\u914D\u7F6E</span>
<span class="token punctuation">[</span>webhook<span class="token punctuation">]</span>
ALLOWED_HOST_LIST <span class="token operator">=</span> *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),m={href:"http://10.11.121.113:3000",target:"_blank",rel:"noopener noreferrer"},k=a(`<p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281611425.png" alt="image-20220428161101095" loading="lazy"></p><p>\u6CE8\u518C\u4E00\u4E2A\u8D26\u53F7\u8BBE\u7F6E\u7528\u6237\u540D\u5BC6\u7801\u7ED1\u5B9A\u90AE\u7BB1</p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281612449.png" alt="image-20220428161255840" loading="lazy"></p><p>\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE\u4ED3\u5E93\uFF0C\u4ED3\u5E93\u7684\u540D\u79F0\u53EB\u505Adevops\u3002</p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281614793.png" alt="image-20220428161433529" loading="lazy"></p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281614050.png" alt="image-20220428161453722" loading="lazy"></p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281615328.png" alt="image-20220428161511332" loading="lazy"></p><h3 id="_3-\u90E8\u7F72jenkins" tabindex="-1"><a class="header-anchor" href="#_3-\u90E8\u7F72jenkins" aria-hidden="true">#</a> 3.\u90E8\u7F72Jenkins</h3><p>\u6700\u65B0\u7248\u955C\u50CF</p><ul><li><code>jenkins/jenkins:lts</code></li></ul><p>\u5F53\u524D\u4F7F\u7528\u7684\u955C\u50CF</p><ul><li><code>jenkins/jenkins:lts-jdk11</code></li></ul><p>\u5173\u95EDJenkins\u7684CSRF</p><ul><li><code>Dhudson.security.csrf.GlobalCrumbIssuerConfiguration.DISABLE_CSRF_PROTECTION=true</code></li></ul><p>\u90E8\u7F72\u8981\u6C42\uFF1A</p><ol><li>\u521B\u5EFARBAC\u7B56\u7565\uFF0C\u7ED1\u5B9AJenkins</li><li>\u521B\u5EFADeployment\u4F5C\u4E3AJenkins\u5BB9\u5668\u63A7\u5236\u5668</li><li>\u521B\u5EFAService\u7684\u670D\u52A1\u66B4\u9732Jenkins\u7684\u7AEF\u53E3</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master ~<span class="token punctuation">]</span><span class="token comment"># mkdir /opt/jenkins &amp;&amp; cd /opt/jenkins/</span>
<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master jenkins<span class="token punctuation">]</span><span class="token comment"># cat &gt; Jenkins-rbac.yaml &lt;&lt; EOF</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Namespace
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> jenkins
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ServiceAccount
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> jenkins
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> jenkins
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">rbac.authorization.kubernetes.io/autoupdate</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">kubernetes.io/bootstrapping</span><span class="token punctuation">:</span> rbac<span class="token punctuation">-</span>defaults
  <span class="token key atrule">name</span><span class="token punctuation">:</span> jenkins
<span class="token key atrule">rules</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&#39;*&#39;</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> statefulsets
  <span class="token punctuation">-</span> services
  <span class="token punctuation">-</span> replicationcontrollers
  <span class="token punctuation">-</span> replicasets
  <span class="token punctuation">-</span> podtemplates
  <span class="token punctuation">-</span> podsecuritypolicies
  <span class="token punctuation">-</span> pods
  <span class="token punctuation">-</span> pods/log
  <span class="token punctuation">-</span> pods/exec
  <span class="token punctuation">-</span> podpreset
  <span class="token punctuation">-</span> poddisruptionbudget
  <span class="token punctuation">-</span> persistentvolumes
  <span class="token punctuation">-</span> persistentvolumeclaims
  <span class="token punctuation">-</span> jobs
  <span class="token punctuation">-</span> endpoints
  <span class="token punctuation">-</span> deployments
  <span class="token punctuation">-</span> deployments/scale
  <span class="token punctuation">-</span> daemonsets
  <span class="token punctuation">-</span> cronjobs
  <span class="token punctuation">-</span> configmaps
  <span class="token punctuation">-</span> namespaces
  <span class="token punctuation">-</span> events
  <span class="token punctuation">-</span> secrets
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> create
  <span class="token punctuation">-</span> get
  <span class="token punctuation">-</span> watch
  <span class="token punctuation">-</span> delete
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> patch
  <span class="token punctuation">-</span> update
<span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;&quot;</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> nodes
  <span class="token key atrule">verbs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> get
  <span class="token punctuation">-</span> list
  <span class="token punctuation">-</span> watch
  <span class="token punctuation">-</span> update
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> rbac.authorization.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRoleBinding
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
    <span class="token key atrule">rbac.authorization.kubernetes.io/autoupdate</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">kubernetes.io/bootstrapping</span><span class="token punctuation">:</span> rbac<span class="token punctuation">-</span>defaults
  <span class="token key atrule">name</span><span class="token punctuation">:</span> jenkins
<span class="token key atrule">roleRef</span><span class="token punctuation">:</span>
  <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> ClusterRole
  <span class="token key atrule">name</span><span class="token punctuation">:</span> jenkins
<span class="token key atrule">subjects</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">apiGroup</span><span class="token punctuation">:</span> rbac.authorization.k8s.io
  <span class="token key atrule">kind</span><span class="token punctuation">:</span> Group
  <span class="token key atrule">name</span><span class="token punctuation">:</span> system<span class="token punctuation">:</span>serviceaccounts<span class="token punctuation">:</span>jenkins
EOF

<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master jenkins<span class="token punctuation">]</span><span class="token comment"># cat &gt; Jenkins-Deployment.yaml &lt;&lt; EOF</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> jenkins
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> jenkins
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> jenkins
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> jenkins
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> jenkins
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> jenkins
        <span class="token key atrule">image</span><span class="token punctuation">:</span> jenkins/jenkins<span class="token punctuation">:</span>lts<span class="token punctuation">-</span>jdk11
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8080</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> web
          <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">50000</span>
          <span class="token key atrule">name</span><span class="token punctuation">:</span> agent
          <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
        <span class="token comment">#resources:</span>
          <span class="token comment">#limits:</span>
            <span class="token comment">#memory: 4Gi</span>
            <span class="token comment">#cpu: &quot;2000m&quot;</span>
          <span class="token comment">#requests:</span>
            <span class="token comment">#memory: 4Gi</span>
            <span class="token comment">#cpu: &quot;2000m&quot;</span>
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> LIMITS_MEMORY
          <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
            <span class="token key atrule">resourceFieldRef</span><span class="token punctuation">:</span>
              <span class="token key atrule">resource</span><span class="token punctuation">:</span> limits.memory
              <span class="token key atrule">divisor</span><span class="token punctuation">:</span> 1Mi
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> JAVA_OPTS
          <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token punctuation">-</span>Dhudson.security.csrf.GlobalCrumbIssuerConfiguration.DISABLE_CSRF_PROTECTION=true
        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> jenkins<span class="token punctuation">-</span>home
          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/jenkins_home
      <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> jenkins<span class="token punctuation">-</span>home
        <span class="token key atrule">persistentVolumeClaim</span><span class="token punctuation">:</span>
          <span class="token key atrule">claimName</span><span class="token punctuation">:</span> jenkins<span class="token punctuation">-</span>home
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span>  PersistentVolumeClaim
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> jenkins<span class="token punctuation">-</span>home
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> jenkins
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">storageClassName</span><span class="token punctuation">:</span> <span class="token string">&quot;storage-nfs&quot;</span>
  <span class="token key atrule">accessModes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>ReadWriteOnce<span class="token punctuation">]</span>
  <span class="token key atrule">resources</span><span class="token punctuation">:</span>
    <span class="token key atrule">requests</span><span class="token punctuation">:</span>
      <span class="token key atrule">storage</span><span class="token punctuation">:</span> 20Gi
EOF

<span class="token punctuation">[</span>root@k8s<span class="token punctuation">-</span>master jenkins<span class="token punctuation">]</span><span class="token comment"># cat &gt; Jenkins-Service.yaml &lt;&lt; EOF</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> jenkins
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> jenkins
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> jenkins
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> jenkins
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> web
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> web
    <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">31000</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> agent
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">50000</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> agent
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA\u6240\u6709\u7684yaml\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master jenkins<span class="token punctuation">]</span><span class="token comment">#  kubectl apply -f Jenkins-rbac.yaml -f Jenkins-Deployment.yaml -f Jenkins-Service.yaml</span>
<span class="token punctuation">[</span>root@k8s-master jenkins<span class="token punctuation">]</span><span class="token comment"># kubectl get -n jenkins all </span>
NAME                           READY   STATUS    RESTARTS   AGE
pod/jenkins-746b5b5d65-tllqz   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          30s

NAME              TYPE       CLUSTER-IP      EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>                          AGE
service/jenkins   NodePort   <span class="token number">10.96</span>.213.109   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">8080</span>:31000/TCP,50000:31204/TCP   24s

NAME                      READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/jenkins   <span class="token number">1</span>/1     <span class="token number">1</span>            <span class="token number">1</span>           30s

NAME                                 DESIRED   CURRENT   READY   AGE
replicaset.apps/jenkins-746b5b5d65   <span class="token number">1</span>         <span class="token number">1</span>         <span class="token number">1</span>       30s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u914D\u7F6Ejenkins" tabindex="-1"><a class="header-anchor" href="#_4-\u914D\u7F6Ejenkins" aria-hidden="true">#</a> 4.\u914D\u7F6EJenkins</h3><p>\u5B89\u88C5Jenkins\u63D2\u4EF6</p><blockquote><p><strong>Localization: Chinese (Simplified)</strong></p><p><strong>Pipeline</strong></p><p><strong>Kubernetes</strong></p></blockquote><p>1\u3001\u4F7F\u7528\u547D\u4EE4 <code>kubectl exec -it $jenkins-pod cat /var/jenkins_home/secrets/initialAdminPassword</code>\u67E5\u770B\u5BC6\u7801\u3002</p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281629183.png" alt="image-20220428162947367" loading="lazy"></p><p>2\u3001\u9009\u62E9\u63D2\u4EF6\u6765\u5B89\u88C5</p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281634537.png" alt="image-20220428163450111" loading="lazy"></p><p>3\u3001\u8FD9\u91CC\u52FE\u9009\u65E0\uFF0C\u53EA\u9700\u8981\u518D\u540E\u9762\u9009\u62E9\u7684\u65F6\u5019\u518D\u5B89\u88C5\u63D2\u4EF6\u5373\u53EF\u3002</p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281635414.png" alt="image-20220428163519250" loading="lazy"></p><p>4\u3001\u521B\u5EFA\u4E00\u4E2A\u7528\u6237\u767B\u5F55\u3002</p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281636813.png" alt="image-20220428163601694" loading="lazy"></p><p>5\u3001\u914D\u7F6EJenkins\u4F7F\u7528\u56FD\u5185\u7684\u6E90</p><p>\u914D\u7F6E\u63D2\u4EF6\u6E90 \u9ED8\u8BA4\u4ECE\u56FD\u5916\u7F51\u7EDC\u4E0B\u8F7D\u63D2\u4EF6\uFF0C\u4F1A\u6BD4\u8F83\u6162\uFF0C\u5EFA\u8BAE\u4FEE\u6539\u6210\u56FD\u5185\u6E90\uFF1A</p><p>\u53EA\u9700\u8981\u5230nfs\u4E0A\uFF0C\u4FEE\u6539PVC\u6302\u8F7D\u7684\u5185\u5BB9\u5373\u53EF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master nfsmount<span class="token punctuation">]</span><span class="token comment"># cd jenkins-jenkins-home-pvc-1175cde6-4c32-45b1-bed2-7c90ac173972/</span>
<span class="token punctuation">[</span>root@k8s-master jenkins-jenkins-home-pvc-1175cde6-4c32-45b1-bed2-7c90ac173972<span class="token punctuation">]</span><span class="token comment"># cd updates/</span>
<span class="token punctuation">[</span>root@k8s-master updates<span class="token punctuation">]</span><span class="token comment"># ls </span>
default.json  hudson.tasks.Maven.MavenInstaller
<span class="token string">&#39;\u5148\u5907\u4EFD\u597D\u914D\u7F6E\u6587\u4EF6&#39;</span>
<span class="token punctuation">[</span>root@k8s-master updates<span class="token punctuation">]</span><span class="token comment"># cp default.json default.json.bak  </span>
<span class="token string">&#39;\u4FEE\u6539\u63D2\u4EF6\u7684\u4E0B\u8F7D\u5730\u5740\u4E3A\u56FD\u5185\u7684\u5730\u5740&#39;</span>
<span class="token punctuation">[</span>root@k8s-master updates<span class="token punctuation">]</span><span class="token comment"># sed -i s#https://updates.jenkins.io/download#https://mirrors.tuna.tsinghua.edu.cn/jenkins#g default.json</span>
<span class="token string">&#39;\u4FEE\u6539jenkins\u542F\u52A8\u65F6\u68C0\u6D4B\u7684URL\u7F51\u5740\uFF0C\u6539\u4E3A\u56FD\u5185baidu\u7684\u5730\u5740&#39;</span>
<span class="token punctuation">[</span>root@k8s-master updates<span class="token punctuation">]</span><span class="token comment"># sed -i s#http://www.google.com#https://www.baidu.com#g default.json default.json</span>
<span class="token string">&#39;\u5220\u9664pod\u91CD\u5EFA\uFF08pod\u540D\u79F0\u6539\u6210\u4F60\u5B9E\u9645\u7684\uFF09&#39;</span>
<span class="token punctuation">[</span>root@k8s-master updates<span class="token punctuation">]</span><span class="token comment"># kubectl delete pod -n jenkins jenkins-746b5b5d65-tllqz </span>
pod <span class="token string">&quot;jenkins-746b5b5d65-tllqz&quot;</span> deleted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6\u3001\u5B89\u88C5\u9700\u8981\u7684\u63D2\u4EF6\u3002</p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281637805.png" alt="image-20220428163722651" loading="lazy"></p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281644931.png" alt="image-20220428164417284" loading="lazy"></p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281648388.png" alt="image-20220428164845529" loading="lazy"></p><p>7\u3001\u914D\u7F6Ejenkins\u8FDE\u63A5k8s</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>https://kubernetes.default
http://jenkins.jenkins:8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6216\u8005</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u53EF\u4EE5\u662Fapiserver\u7684\u5730\u5740</span>
https://kubernetes.default.svc.cluster.local

<span class="token comment"># \u8FD9\u91CC\u662Fjenkins\u547D\u540D\u7A7A\u95F4\u4E0B\u7684jenkins\u5730\u5740</span>
http://jenkins.jenkins.svc.cluster.local:8080
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9009\u62E9 <code>\u7CFB\u7EDF\u7BA1\u7406 &gt; \u8282\u70B9\u7BA1\u7406</code> \u627E\u5230<code>Config cloud</code></p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281651387.png" alt="image-20220428165131338" loading="lazy"></p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281652416.png" alt="image-20220428165213779" loading="lazy"></p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281653338.png" alt="image-20220428165312671" loading="lazy"></p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281654698.png" alt="image-20220428165414797" loading="lazy"></p><p>8\u3001\u5728\u5168\u5C40\u5B89\u5168\u914D\u7F6E\u4E2D\u5F00\u542F\uFF08\u533F\u540D\u7528\u6237\u5177\u6709\u53EF\u8BFB\u6743\u9650 \uFF09</p><blockquote><p>\u5728\u5168\u5C40\u5B89\u5168\u914D\u7F6E\u4E2D\u7684\u6388\u6743\u7B56\u7565 \u628A\u767B\u5F55\u7528\u6237\u53EF\u4EE5\u505A\u4EFB\u4F55\u4E8B \u4E0B\u7684\u533F\u540D\u7528\u6237\u5177\u6709\u53EF\u8BFB\u6743\u9650 \u52FE\u4E0A</p><p>\u5728\u5168\u5C40\u5B89\u5168\u914D\u7F6E\u4E2D\u5173\u95ED\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020\u4FDD\u62A4 \uFF08\u5728\u5B89\u88C5Jenkins\u5173\u95ED\uFF09</p></blockquote><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281656035.png" alt="image-20220428165621671" loading="lazy"></p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281657769.png" alt="image-20220428165704227" loading="lazy"></p><p>9\u3001\u7ED9jenkins\u7528\u6237\u6DFB\u52A0\u65B0Token\uFF08\u70B9\u51FB\u53F3\u4E0A\u89D2jenkins\u7528\u6237\uFF0C\u7136\u540E\u70B9\u8BBE\u7F6E\u5C31\u53EF\u4EE5\u8DF3\u8F6C\u5230\u914D\u7F6EToken\u9875\u9762\uFF09</p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281658697.png" alt="image-20220428165800549" loading="lazy"></p><h3 id="_5-pipeline-\u52A8\u6001pod" tabindex="-1"><a class="header-anchor" href="#_5-pipeline-\u52A8\u6001pod" aria-hidden="true">#</a> 5.Pipeline\uFF08\u52A8\u6001pod\uFF09</h3><p>\u521B\u5EFA\u4E00\u4E2Apipeline\u6D41\u6C34\u7EBF\u6D4B\u8BD5</p><blockquote><p>\u5728\u6784\u5EFA\u89E6\u53D1\u5668 \u4E2D\u52FE\u4E0A \uFF1A\u89E6\u53D1\u8FDC\u7A0B\u6784\u5EFA (\u4F8B\u5982,\u4F7F\u7528\u811A\u672C)</p><p>\u8EAB\u4EFD\u9A8C\u8BC1\u4EE4\u724C \u5C31\u586B\u4E0A\u9762\u521B\u5EFA\u7684Token</p></blockquote><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>pipeline <span class="token punctuation">{</span>
    agent <span class="token punctuation">{</span>
        kubernetes <span class="token punctuation">{</span>
            yaml &#39;&#39;&#39;
apiVersion<span class="token operator">:</span> v1
kind<span class="token operator">:</span> Pod
metadata<span class="token operator">:</span>
  name<span class="token operator">:</span> jenkins-slave
  namespace<span class="token operator">:</span> jenkins
spec<span class="token operator">:</span>
  containers<span class="token operator">:</span>
  - name<span class="token operator">:</span> jnlp
    image<span class="token operator">:</span> jenkins/inbound-agent<span class="token operator">:</span>latest
    volumeMounts<span class="token operator">:</span>
&#39;&#39;&#39;
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    stages <span class="token punctuation">{</span>
        stage(&#39;<span class="token number">1</span>\u3001\u62C9\u53D6\u4EE3\u7801&#39;) <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo &#39;Hello World&#39;
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage(&#39;<span class="token number">2</span>\u3001\u4EE3\u7801\u7F16\u8BD1&#39;) <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo &#39;Hello World&#39;
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage(&#39;<span class="token number">3</span>\u3001\u5355\u5143\u6D4B\u8BD5&#39;) <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo &#39;Hello World&#39;
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        stage(&#39;<span class="token number">4</span>\u3001\u90E8\u7F72&#39;) <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                echo &#39;Hello World&#39;
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1\u3001\u65B0\u5EFA\u4E00\u4E2A\u6D41\u6C34\u7EBF\u9879\u76EE</p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281700145.png" alt="image-20220428170019107" loading="lazy"></p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281700064.png" alt="image-20220428170057187" loading="lazy"></p><p>2\u3001\u914D\u7F6E\u6D41\u6C34\u7EBF\u7684\u811A\u672C\uFF0C\u6D4B\u8BD5\u52A8\u6001Pod\u3002</p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281701777.png" alt="image-20220428170129138" loading="lazy"></p><p>3\u3001\u4FDD\u5B58\u9000\u51FA\u4E4B\u540E\uFF0C\u5355\u51FB\u7ACB\u5373\u6784\u5EFA\u3002</p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281702584.png" alt="image-20220428170238496" loading="lazy"></p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204281703991.png" alt="image-20220428170301767" loading="lazy"></p><h3 id="_6-\u521B\u5EFA\u4E00\u4E2A\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#_6-\u521B\u5EFA\u4E00\u4E2A\u4ED3\u5E93" aria-hidden="true">#</a> 6.\u521B\u5EFA\u4E00\u4E2A\u4ED3\u5E93</h3><p>\u5728gitea\u521B\u5EFA\u4E00\u4E2A\u540D\u5B57\u4E3Adevops\u4ED3\u5E93\uFF0C\u5728\u6B64\u4E4B\u524D\u6211\u4EEC\u5DF2\u7ECF\u521B\u5EFA\u597D\u4E86\uFF0C\u73B0\u5728\u53EA\u9700\u8981\u4E0A\u4F20\u5C31\u597D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master demo<span class="token punctuation">]</span><span class="token comment"># echo  add index.html  &gt; README.md</span>
<span class="token punctuation">[</span>root@k8s-master demo<span class="token punctuation">]</span><span class="token comment"># git init </span>
Initialized empty Git repository <span class="token keyword">in</span> /root/demo/.git/
<span class="token punctuation">[</span>root@k8s-master demo<span class="token punctuation">]</span><span class="token comment"># git add README.md</span>
<span class="token punctuation">[</span>root@k8s-master demo<span class="token punctuation">]</span><span class="token comment"># git commit -m &quot;first commit&quot;</span>
<span class="token punctuation">[</span>master <span class="token punctuation">(</span>root-commit<span class="token punctuation">)</span> 315edf5<span class="token punctuation">]</span> first commit
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> README.md
<span class="token punctuation">[</span>root@k8s-master demo<span class="token punctuation">]</span><span class="token comment">#  git remote add origin http://10.11.121.113:3000/devops/devops.git</span>
<span class="token punctuation">[</span>root@k8s-master demo<span class="token punctuation">]</span><span class="token comment"># git push -u origin master</span>
Username <span class="token keyword">for</span> <span class="token string">&#39;http://10.11.121.113:3000&#39;</span><span class="token builtin class-name">:</span> devops
Password <span class="token keyword">for</span> <span class="token string">&#39;http://devops@10.11.121.113:3000&#39;</span><span class="token builtin class-name">:</span> 
Counting objects: <span class="token number">3</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">3</span>/3<span class="token punctuation">)</span>, <span class="token number">224</span> bytes <span class="token operator">|</span> <span class="token number">0</span> bytes/s, done.
Total <span class="token number">3</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>
remote: <span class="token builtin class-name">.</span> Processing <span class="token number">1</span> references
remote: Processed <span class="token number">1</span> references <span class="token keyword">in</span> total
To http://10.11.121.113:3000/devops/devops.git
 * <span class="token punctuation">[</span>new branch<span class="token punctuation">]</span>      master -<span class="token operator">&gt;</span> master
Branch master <span class="token builtin class-name">set</span> up to track remote branch master from origin.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u5F53\u524D\u7684\u4ED3\u5E93\u6E90\u7801\u3002</p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204282010035.png" alt="image-20220428201010960" loading="lazy"></p><h3 id="_7-\u914D\u7F6Ewebhook\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#_7-\u914D\u7F6Ewebhook\u94A9\u5B50" aria-hidden="true">#</a> 7.\u914D\u7F6Ewebhook\u94A9\u5B50</h3><p>1.\u8BBE\u7F6Egitea\u7684Webhook\u7684\u8BBE\u7F6E\uFF0C\u914D\u7F6Ewebhook\u7684\u94A9\u5B50\u3002</p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204282013376.png" alt="image-20220428201350078" loading="lazy"></p><p>2.\u67E5\u770B\u5F53\u524D\u7684Jenkins\u7684\u6D41\u6C34\u7EBF\u914D\u7F6E\uFF0C\u8BBE\u7F6E\u5F00\u542F\u89E6\u53D1\u8FDC\u7A0B\u6784\u5EFA\u3002</p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204282026159.png" alt="image-20220428202634071" loading="lazy"></p><p>\u6D4B\u8BD5\u4E00\u4E0B\u63A8\u9001\u4EE3\u7801\u3002</p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204282027819.png" alt="image-20220428202747917" loading="lazy"></p><h3 id="_8-\u63A8\u4EE3\u7801\u6D4B\u8BD5\u94A9\u5B50" tabindex="-1"><a class="header-anchor" href="#_8-\u63A8\u4EE3\u7801\u6D4B\u8BD5\u94A9\u5B50" aria-hidden="true">#</a> 8.\u63A8\u4EE3\u7801\u6D4B\u8BD5\u94A9\u5B50</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@k8s-master demo<span class="token punctuation">]</span><span class="token comment"># git clone http://10.11.121.113:3000/devops/devops.git   #\u5148\u514B\u9686\u4ED3\u5E93</span>
Cloning into <span class="token string">&#39;devops&#39;</span><span class="token punctuation">..</span>.
remote: Enumerating objects: <span class="token number">3</span>, done.
remote: Counting objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">3</span>/3<span class="token punctuation">)</span>, done.
remote: Total <span class="token number">3</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span>
Unpacking objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">3</span>/3<span class="token punctuation">)</span>, done.
<span class="token punctuation">[</span>root@k8s-master demo<span class="token punctuation">]</span><span class="token comment"># cd devops/         #\u8FDB\u5165\u4ED3\u5E93</span>
<span class="token punctuation">[</span>root@k8s-master devops<span class="token punctuation">]</span><span class="token comment"># echo  abc &gt; index.html #\u521B\u5EFA\u4E00\u4E2A\u65B0\u6587\u4EF6\u6765\u6A21\u62DF\u4ED3\u5E93\u4EE3\u7801\u6539\u52A8</span>
<span class="token punctuation">[</span>root@k8s-master devops<span class="token punctuation">]</span><span class="token comment"># git add .</span>
<span class="token punctuation">[</span>root@k8s-master devops<span class="token punctuation">]</span><span class="token comment"># git commit -m &quot;add index.html two&quot;</span>
<span class="token punctuation">[</span>master 91cc098<span class="token punctuation">]</span> <span class="token function">add</span> index.html two
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> index.html
<span class="token punctuation">[</span>root@k8s-master devops<span class="token punctuation">]</span><span class="token comment"># git push  origin master</span>
Username <span class="token keyword">for</span> <span class="token string">&#39;http://10.11.121.113:3000&#39;</span><span class="token builtin class-name">:</span> devops
Password <span class="token keyword">for</span> <span class="token string">&#39;http://devops@10.11.121.113:3000&#39;</span><span class="token builtin class-name">:</span> 
Counting objects: <span class="token number">4</span>, done.
Delta compression using up to <span class="token number">8</span> threads.
Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">2</span>/2<span class="token punctuation">)</span>, done.
Writing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">3</span>/3<span class="token punctuation">)</span>, <span class="token number">284</span> bytes <span class="token operator">|</span> <span class="token number">0</span> bytes/s, done.
Total <span class="token number">3</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>
remote: <span class="token builtin class-name">.</span> Processing <span class="token number">1</span> references
remote: Processed <span class="token number">1</span> references <span class="token keyword">in</span> total
To http://10.11.121.113:3000/devops/devops.git
   315edf5<span class="token punctuation">..</span>91cc098  master -<span class="token operator">&gt;</span> master
<span class="token comment"># \u63D0\u4EA4\u540E\uFF0C\u56DE\u5230jenkins\u9875\u9762\uFF0C\u67E5\u770B\u662F\u5426\u6210\u529F\u81EA\u52A8\u89E6\u53D1\u6784\u5EFA\u4EE3\u7801</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0B\u662F\u81EA\u52A8\u89E6\u53D1\u6784\u5EFA\u3002</p><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204282032967.png" alt="image-20220428203202702" loading="lazy"></p>`,81);function v(b,g){const e=c("ExternalLinkIcon");return p(),l("div",null,[u,n("p",null,[n("a",r,[s("\u90E8\u7F72NFS\u52A8\u6001\u4F9B\u5E94"),t(e)]),s(" \u{1F448}")]),d,n("p",null,[s("3.\u8BBF\u95EEGitea\uFF1A "),n("a",m,[s("http://10.11.121.113:3000"),t(e)])]),k])}const j=i(o,[["render",v],["__file","4.Gitea+K8s-Jenkins-master-slave(webhook\u94A9\u5B50).html.vue"]]);export{j as default};
