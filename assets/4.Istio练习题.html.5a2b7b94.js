import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as p,a as n,b as s,d as t,f as a,r as c}from"./app.ca0279c0.js";const u={},o=a(`<h2 id="bookinfo\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#bookinfo\u7EC3\u4E60" aria-hidden="true">#</a> Bookinfo\u7EC3\u4E60</h2><h3 id="\u90E8\u7F72bookinfo" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72bookinfo" aria-hidden="true">#</a> \u90E8\u7F72Bookinfo</h3><p>\u7B2C\u4E00\u6B65\u6211\u4EEC\u53EA\u9700\u8981\u90E8\u7F72\u6211\u4EEC\u7684Bookinfo\u5FAE\u670D\u52A1\u5C31\u884C\u4E86\uFF0C\u5305\u62EC\u7F51\u5173\u8DEF\u7531\u89C4\u5219\u7B49\u6211\u4EEC\u90FD\u4E0D\u9700\u8981\u505A\uFF0C\u56E0\u4E3A\u540E\u9762\u5206\u5F00\u7EC3\u4E60\u3002</p><p>\u6210\u529F\u8DD1\u8D77\u6240\u6709\u7684Pod\u4E4B\u540E\u6211\u4EEC\u9700\u8981\u521B\u5EFA\u5165\u53E3\u7F51\u5173\uFF0C\u4F7F\u7528\u865A\u62DF\u670D\u52A1\u7ED1\u5B9A\u5165\u53E3\u7F51\u5173</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl apply <span class="token parameter variable">-f</span> samples/bookinfo/platform/kube/bookinfo.yaml
$ kubectl get pods 
NAME                              READY   STATUS    RESTARTS   AGE
details-v1-79f774bdb9-pvjjl       <span class="token number">2</span>/2     Running   <span class="token number">0</span>          29m
productpage-v1-6b746f74dc-kg9lk   <span class="token number">2</span>/2     Running   <span class="token number">0</span>          29m
ratings-v1-b6994bb9-sd7lj         <span class="token number">2</span>/2     Running   <span class="token number">0</span>          29m
reviews-v1-545db77b95-mwnmd       <span class="token number">2</span>/2     Running   <span class="token number">0</span>          29m
reviews-v2-7bf8c9648f-jbgqb       <span class="token number">2</span>/2     Running   <span class="token number">0</span>          29m
reviews-v3-84779c7bbc-n67ph       <span class="token number">2</span>/2     Running   <span class="token number">0</span>          29m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5165\u53E3\u7F51\u5173" tabindex="-1"><a class="header-anchor" href="#\u5165\u53E3\u7F51\u5173" aria-hidden="true">#</a> \u5165\u53E3\u7F51\u5173</h3><ol><li>\u914D\u7F6E\u5165\u53E3\u7F51\u5173\u4E3Aistio\u9ED8\u8BA4\u7684ingressgateway\uFF08\u5DF2\u7ECF\u7ED1\u5B9A\u5230NodePort\uFF09</li><li>\u914D\u7F6EBookinfo\u670D\u52A1\u5668\u4F7F\u7528HTTP\uFF0C\u7AEF\u53E3\u662F80</li><li>\u516C\u5F00\u7684\u8303\u56F4\u4E3A\u6240\u6709\u7684\u4E3B\u673A\uFF08\u4F7F\u7528bookinfo.app\u5C31\u8BBF\u95EE\u4E0D\u4E86\uFF09</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>$ cat gateway.yaml 
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1alpha3 
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Gateway 
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> 
  <span class="token key atrule">name</span><span class="token punctuation">:</span> bookinfo<span class="token punctuation">-</span>gateway 
<span class="token key atrule">spec</span><span class="token punctuation">:</span> 
  <span class="token key atrule">selector</span><span class="token punctuation">:</span> 				<span class="token comment">#\u9009\u62E9\u5668\uFF0C\u9009\u62E9\u9ED8\u8BA4istio\u7684ingressgateway</span>
    <span class="token key atrule">istio</span><span class="token punctuation">:</span> ingressgateway 
  <span class="token key atrule">servers</span><span class="token punctuation">:</span> 					<span class="token comment">#\u670D\u52A1\u5668\u9009\u62E9\u5217\u8868\u7684\u89C4\u8303</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> 
      <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">80</span> 
      <span class="token key atrule">name</span><span class="token punctuation">:</span>  http 
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> HTTP 
    <span class="token key atrule">hosts</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> <span class="token string">&quot;*&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884Cgateway\u67E5\u770B\u8BE6\u7EC6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl get gateway
NAME AGE
bookinfo-gateway 9d

$ kubectl describe gateway bookinfo-gateway
Name: bookinfo-gateway
Namespace: default
Labels: <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Annotations: API Version: networking.istio.io/v1beta1
Kind: Gateway
<span class="token punctuation">..</span>.
Spec:
  Selector:
    Istio:  ingressgateway
  Servers:
    Hosts:
      bookinfo.app
    Port:
      Name:      http
      Number:    <span class="token number">80</span>
      Protocol:  HTTP
Events:          <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u865A\u62DF\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF\u670D\u52A1" aria-hidden="true">#</a> \u865A\u62DF\u670D\u52A1</h3><p>\u5982\u4E0B\u662FBookinfo\u7684\u865A\u62DF\u670D\u52A1\u67B6\u6784\u56FE</p><img src="https://pic.imgdb.cn/item/61ec039c2ab3f51d912a87f3.png" style="zoom:67%;"><p>\u53EF\u4EE5\u770B\u5230bookinfo\u7684\u6240\u6709\u8BBF\u95EE\u5730\u5740\u5982\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>http://bookinfo.app /productpage
http://bookinfo.app/static/*
http://bookinfo.app /login
http://bookinfo.app/logout
http://bookinfo.app/api/v1/products
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\u8BF7\u5982\u4E0B\u64CD\u4F5C\uFF1A</p><ol><li>\u865A\u62DF\u670D\u52A1\u9700\u8981\u7ED1\u5B9A\u5165\u53E3\u7F51\u5173bookinfo-gateway</li><li>\u53D1\u9001\u6D41\u91CF\u7684\u76EE\u7684\u4E3B\u673A\u662F\u8303\u56F4\u662F\u6240\u6709</li><li>\u4F60\u9700\u8981\u521B\u5EFA\u4E00\u4E2AHTTP\u6D41\u91CF\u7684\u6709\u5E8F\u8DEF\u7531\u89C4\u5219\u5217\u8868</li><li>\u5339\u914D\u51C6\u786E\u7684\u8DEF\u5F84\u662F /productpage /login /logout \u524D\u7F00\u662F/status /api/v1/products</li><li>\u91CD\u5B9A\u5411\u8F6C\u53D1\u7684\u9ED8\u8BA4\u4E3A\u6D41\u91CF\u76EE\u7684\u5730\u662F\u4E3B\u673A\u662Fproductpage \u7AEF\u53E39080</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@master istio<span class="token punctuation">-</span>1.9.5<span class="token punctuation">]</span><span class="token comment"># cat virtualservice.yaml </span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1alpha3 
<span class="token key atrule">kind</span><span class="token punctuation">:</span> VirtualService 
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> 
  <span class="token key atrule">name</span><span class="token punctuation">:</span> bookinfo 
<span class="token key atrule">spec</span><span class="token punctuation">:</span> 
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> 
  <span class="token punctuation">-</span> <span class="token string">&quot;bookinfo.app&quot;</span>
  <span class="token key atrule">gateways</span><span class="token punctuation">:</span> 
  <span class="token punctuation">-</span> bookinfo<span class="token punctuation">-</span>gateway 
  <span class="token key atrule">http</span><span class="token punctuation">:</span>  					<span class="token comment">#\u6709\u5E8F\u8DEF\u7531\u8868</span>
  <span class="token punctuation">-</span> <span class="token key atrule">match</span><span class="token punctuation">:</span> 					<span class="token comment">#\u5339\u914D\u89C4\u5219</span>
    <span class="token punctuation">-</span> <span class="token key atrule">uri</span><span class="token punctuation">:</span> 
        <span class="token key atrule">exact</span><span class="token punctuation">:</span> /productpage 
    <span class="token punctuation">-</span> <span class="token key atrule">uri</span><span class="token punctuation">:</span> 
        <span class="token key atrule">prefix</span><span class="token punctuation">:</span> /status 
    <span class="token punctuation">-</span> <span class="token key atrule">uri</span><span class="token punctuation">:</span> 
        <span class="token key atrule">exact</span><span class="token punctuation">:</span> /login 
    <span class="token punctuation">-</span> <span class="token key atrule">uri</span><span class="token punctuation">:</span> 
        <span class="token key atrule">exact</span><span class="token punctuation">:</span> /logout 
    <span class="token punctuation">-</span> <span class="token key atrule">uri</span><span class="token punctuation">:</span> 
        <span class="token key atrule">prefix</span><span class="token punctuation">:</span> /api/v1/products 
    <span class="token key atrule">route</span><span class="token punctuation">:</span> 					<span class="token comment">#\u9ED8\u8BA4\u8F6C\u53D1\u7684\u6D41\u91CF</span>
    <span class="token punctuation">-</span> <span class="token key atrule">destination</span><span class="token punctuation">:</span> 			<span class="token comment">#\u76EE\u7684\u5730</span>
        <span class="token key atrule">host</span><span class="token punctuation">:</span> productpage   <span class="token comment">#\u76EE\u7684\u4E3B\u673A</span>
        <span class="token key atrule">port</span><span class="token punctuation">:</span> 
          <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">9080</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u76EE\u7684\u5730\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u76EE\u7684\u5730\u89C4\u5219" aria-hidden="true">#</a> \u76EE\u7684\u5730\u89C4\u5219</h3><p>\u5982\u4E0B\u662Fbookinfo\u7684\u76EE\u7684\u5730\u89C4\u5219\uFF0C\u9700\u8981\u7ECF\u8FC7v1\u3001 v2\u3001v3\u7684\u6D41\u91CF</p><img src="https://pic.imgdb.cn/item/61ec03a52ab3f51d912a9236.png" style="zoom:67%;"><img src="https://pic.imgdb.cn/item/61ec03a82ab3f51d912a962d.png" style="zoom:67%;"><p>\u53EF\u4EE5\u770B\u51FAProductPage\u7ECF\u8FC7Reviewsv1\u662F60%\u7684\u6D41\u91CF\uFF0CReviewsv2\u548CReviewsv3\u662F\u4E00\u6837\u768420%\u7684\u6D41\u91CF\u3002</p><p><code>DestinationRule</code>\u5B9A\u4E49\u5728\u8DEF\u7531\u53D1\u751F\u540E\u5E94\u7528\u4E8E\u670D\u52A1\u6D41\u91CF\u7684\u7B56\u7565\u3002\u8FD9\u4E9B\u89C4\u5219\u6307\u5B9A\u8D1F\u8F7D\u5E73\u8861\u7684\u914D\u7F6E\u3001\u6765\u81EA sidecar \u7684\u8FDE\u63A5\u6C60\u5927\u5C0F\u4EE5\u53CA\u5F02\u5E38\u68C0\u6D4B\u8BBE\u7F6E\uFF0C\u4EE5\u68C0\u6D4B\u548C\u4ECE\u8D1F\u8F7D\u5E73\u8861\u6C60\u4E2D\u9A71\u9010\u4E0D\u5065\u5EB7\u7684\u4E3B\u673A\u3002</p><p>\u53EF\u4EE5\u901A\u8FC7\u5B9A\u4E49\u547D\u540D<code>subset</code>\u548C\u8986\u76D6\u5728\u670D\u52A1\u7EA7\u522B\u6307\u5B9A\u7684\u8BBE\u7F6E\u6765\u6307\u5B9A\u7279\u5B9A\u4E8E\u7248\u672C\u7684\u7B56\u7565 \u3002\u4EE5\u4E0A\u89C4\u5219\u5BF9\u6240\u6709\u6D41\u5411\u540D\u4E3Av1\u3001v2\u3001v3\u7684\u5B50\u96C6\u7684\u6D41\u91CF\u4F7F\u7528\u5FAA\u73AF\u8D1F\u8F7D\u5E73\u8861\u7B56\u7565\u3002</p><p>\u6240\u4EE5\u9700\u8981\u505A\u5982\u4E0B\u64CD\u4F5C</p><ol><li>\u521B\u5EFA\u4E00\u4E2A\u76EE\u7684\u5730\u89C4\u5219productpage\u9ED8\u8BA4\u9009\u62E9v1\u7684\u6D41\u91CF</li><li>\u521B\u5EFA\u4E00\u4E2Areviews\u76EE\u7684\u5730\u89C4\u5219\u6709\u4E09\u4E2A\u7248\u672C\u7B56\u7565\uFF0C\u5BF9\u540D\u4E3Av1\uFF0Cv2\uFF0Cv3\u7684\u5B50\u96C6\u6D41\u91CF\u8D1F\u8F7D\u3002</li><li>\u521B\u5EFA\u4E00\u4E2Aratings\u76EE\u7684\u5730\u89C4\u5219\u6709\u4E09\u4E2A\u7248\u672C\u7B56\u7565\uFF0C\u5BF9\u540D\u4E3Av1\uFF0Cv2\uFF0Cv2-mysql\uFF0Cv2-mysql-lvm\u7684\u5B50\u96C6\u6D41\u91CF\u8D1F\u8F7D\u3002</li><li>\u521B\u5EFA\u4E00\u4E2Adetails\u76EE\u7684\u5730\u89C4\u5219\u6709\u4E09\u4E2A\u7248\u672C\u7B56\u7565\uFF0C\u5BF9\u540D\u4E3Av1\uFF0Cv2\u7684\u5B50\u96C6\u6D41\u91CF\u8D1F\u8F7D\u3002</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>$ cat destination<span class="token punctuation">-</span>rule<span class="token punctuation">-</span>all.yaml 
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1alpha3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> DestinationRule
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> productpage
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">host</span><span class="token punctuation">:</span> productpage
  <span class="token key atrule">subsets</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> v1
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v1
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1alpha3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> DestinationRule
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> reviews
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">host</span><span class="token punctuation">:</span> reviews
  <span class="token key atrule">subsets</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> v1
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v1
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> v2
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v2
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> v3
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v3
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1alpha3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> DestinationRule
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ratings
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">host</span><span class="token punctuation">:</span> ratings
  <span class="token key atrule">subsets</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> v1
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v1
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> v2
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v2
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> v2<span class="token punctuation">-</span>mysql
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v2<span class="token punctuation">-</span>mysql
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> v2<span class="token punctuation">-</span>mysql<span class="token punctuation">-</span>vm
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v2<span class="token punctuation">-</span>mysql<span class="token punctuation">-</span>vm
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1alpha3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> DestinationRule
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> details
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">host</span><span class="token punctuation">:</span> details
  <span class="token key atrule">subsets</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> v1
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v1
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> v2
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v2
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u540E\u67E5\u770B\u751F\u6548</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl apply <span class="token parameter variable">-f</span> destination-rule-all.yaml 
destinationrule.networking.istio.io/productpage created
destinationrule.networking.istio.io/reviews created
destinationrule.networking.istio.io/ratings created
destinationrule.networking.istio.io/details created

$ kubectl get destinationrules.networking.istio.io 
NAME          HOST          AGE
details       details       68m
productpage   productpage   68m
ratings       ratings       68m
reviews       reviews       68m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="httpbin\u7EC3\u4E60" tabindex="-1"><a class="header-anchor" href="#httpbin\u7EC3\u4E60" aria-hidden="true">#</a> httpbin\u7EC3\u4E60</h2><h3 id="istio\u7F51\u5173\u914D\u7F6E\u5165\u53E3" tabindex="-1"><a class="header-anchor" href="#istio\u7F51\u5173\u914D\u7F6E\u5165\u53E3" aria-hidden="true">#</a> Istio\u7F51\u5173\u914D\u7F6E\u5165\u53E3</h3>`,32),r=n("li",null,"\u914D\u7F6E\u7F51\u5173\u7684\u540D\u79F0\u4E3AGateway",-1),d=n("li",null,"\u9009\u62E9\u8C03\u5EA6\u5728\u9ED8\u8BA4\u7684gateway",-1),k=n("li",null,"\u914D\u7F6E\u7F51\u5173\u5916\u90E8HTTP\u5165\u53E3\u6D41\u91CF",-1),v={href:"http://xn--httpbin-e73kia442cc01cbyv.example.com",target:"_blank",rel:"noopener noreferrer"},m=a(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1alpha3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Gateway
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> httpbin<span class="token punctuation">-</span>gateway
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">istio</span><span class="token punctuation">:</span> ingressgateway <span class="token comment"># use Istio default gateway implementation</span>
  <span class="token key atrule">servers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span>
      <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">80</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> http
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> HTTP
    <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;httpbin.example.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u865A\u62DF\u670D\u52A1\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF\u670D\u52A1\u914D\u7F6E" aria-hidden="true">#</a> \u865A\u62DF\u670D\u52A1\u914D\u7F6E</h3>`,2),b=n("li",null,"\u73B0\u5728\u4E3A httpbin \u670D\u52A1\u521B\u5EFA\u4E00\u4E2A\u865A\u62DF\u670D\u52A1\u914D\u7F6E\uFF0C\u5176\u4E2D\u5305\u542B\u4E24\u4E2A\u5141\u8BB8\u8DEF\u5F84 /status \u548C /delay \u6D41\u91CF\u7684\u8DEF\u7531\u89C4\u5219\u3002",-1),y=n("li",null,"\u865A\u62DF\u670D\u52A1\u7684\u540D\u79F0\u4E3Ahttpbin",-1),h={href:"http://xn--httpbin-m73k77gyz4g195a.example.com",target:"_blank",rel:"noopener noreferrer"},g=n("li",null,"\u76EE\u6807\u7AEF\u53E3\u548C\u4E3B\u673A\u5E94\u5206\u522B\u4E3A8000\u548Chttpbin\u3002",-1),f=n("li",null,"\u6DFB\u52A0match.uri \u548Croute\u90E8\u5206\u3002",-1),w=a(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1alpha3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> VirtualService
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> httpbin
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;httpbin.example.com&quot;</span>
  <span class="token key atrule">gateways</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> httpbin<span class="token punctuation">-</span>gateway
  <span class="token key atrule">http</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">match</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">uri</span><span class="token punctuation">:</span>
        <span class="token key atrule">prefix</span><span class="token punctuation">:</span> /status
    <span class="token punctuation">-</span> <span class="token key atrule">uri</span><span class="token punctuation">:</span>
        <span class="token key atrule">prefix</span><span class="token punctuation">:</span> /delay
    <span class="token key atrule">route</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">destination</span><span class="token punctuation">:</span>
        <span class="token key atrule">port</span><span class="token punctuation">:</span>
          <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8000</span>
        <span class="token key atrule">host</span><span class="token punctuation">:</span> httpbin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2><h3 id="\u6DFB\u52A0\u76EE\u7684\u5730\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u76EE\u7684\u5730\u89C4\u5219" aria-hidden="true">#</a> \u6DFB\u52A0\u76EE\u7684\u5730\u89C4\u5219</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>root@controlplane:/<span class="token comment"># kubectl get pods </span>
NAME                      READY   STATUS    RESTARTS   AGE
app-v1-5f5f5d55cd-drspk   <span class="token number">2</span>/2     Running   <span class="token number">0</span>          11m
app-v2-8bb879574-khfp5    <span class="token number">2</span>/2     Running   <span class="token number">0</span>          11m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E24\u4E2A\u7248\u672C\u7684 myapp \u4E4B\u95F4\u914D\u7F6E\u52A0\u6743\u8DEF\u7531\u3002\u4F46\u9996\u5148\uFF0C\u8BA9\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u5177\u6709\u4EE5\u4E0B\u89C4\u8303\u7684 DestinationRule\u3002</p><p><code>1. name:</code> myapp</p><p><code>2. host:</code> myapp</p><p><code>3. subset 1</code>:</p><blockquote><p><code>name:</code> v1 <code>labels:</code> version=v1</p></blockquote><p><code>3. subset 2</code>:</p><blockquote><p><code>name:</code> v2 <code>labels:</code> version=v2</p></blockquote><p>\u4F7F\u7528\u4EE5\u4E0B YAML \u521B\u5EFA DestinationRule\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1alpha3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> DestinationRule
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> myapp
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">host</span><span class="token punctuation">:</span> myapp
  <span class="token key atrule">subsets</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> v1
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v1
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> v2
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6D41\u91CF\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u6D41\u91CF\u63A7\u5236" aria-hidden="true">#</a> \u6D41\u91CF\u63A7\u5236</h3><p>\u66F4\u65B0\u540D\u4E3A myapp \u7684 VirtualService\uFF0C\u5C06 80% \u7684\u6D41\u91CF\u8DEF\u7531\u5230 v1 \u5B50\u96C6\uFF0C\u5C06 20% \u8DEF\u7531\u5230 v2 \u5B50\u96C6\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> VirtualService
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> myapp
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">gateways</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> myapp<span class="token punctuation">-</span>gateway
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> myapp.example.com
  <span class="token key atrule">http</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">match</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">uri</span><span class="token punctuation">:</span>
        <span class="token key atrule">prefix</span><span class="token punctuation">:</span> /myapp
    <span class="token key atrule">rewrite</span><span class="token punctuation">:</span>
      <span class="token key atrule">uri</span><span class="token punctuation">:</span> /
    <span class="token key atrule">route</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">destination</span><span class="token punctuation">:</span>
        <span class="token key atrule">port</span><span class="token punctuation">:</span>
          <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8080</span>
        <span class="token key atrule">host</span><span class="token punctuation">:</span> myapp
        <span class="token key atrule">subset</span><span class="token punctuation">:</span> v1
      <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token punctuation">-</span> <span class="token key atrule">destination</span><span class="token punctuation">:</span>
        <span class="token key atrule">port</span><span class="token punctuation">:</span>
          <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8080</span>
        <span class="token key atrule">host</span><span class="token punctuation">:</span> myapp
        <span class="token key atrule">subset</span><span class="token punctuation">:</span> v2
      <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6545\u969C\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#\u6545\u969C\u6CE8\u5165" aria-hidden="true">#</a> \u6545\u969C\u6CE8\u5165</h3><p>\u66F4\u65B0\u6545\u969C\u6CE8\u5165\u4EE5\u4E2D\u6B62 50% \u8FD4\u56DE\u7801\u4E3A HTTP 400 \u7684\u8BF7\u6C42</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> VirtualService
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> httpbin
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default

<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">gateways</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> httpbin<span class="token punctuation">-</span>gateway
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> httpbin.example.com
  <span class="token key atrule">http</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">fault</span><span class="token punctuation">:</span>
      <span class="token key atrule">abort</span><span class="token punctuation">:</span>
        <span class="token key atrule">httpStatus</span><span class="token punctuation">:</span> <span class="token number">400</span>
        <span class="token key atrule">percentage</span><span class="token punctuation">:</span>
          <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token number">50</span>
    <span class="token key atrule">match</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">uri</span><span class="token punctuation">:</span>
        <span class="token key atrule">prefix</span><span class="token punctuation">:</span> /status
    <span class="token punctuation">-</span> <span class="token key atrule">uri</span><span class="token punctuation">:</span>
        <span class="token key atrule">prefix</span><span class="token punctuation">:</span> /delay
    <span class="token punctuation">-</span> <span class="token key atrule">uri</span><span class="token punctuation">:</span>
        <span class="token key atrule">prefix</span><span class="token punctuation">:</span> /html
    <span class="token key atrule">route</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">destination</span><span class="token punctuation">:</span>
        <span class="token key atrule">host</span><span class="token punctuation">:</span> httpbin
        <span class="token key atrule">port</span><span class="token punctuation">:</span>
          <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8BF7\u6C42\u8D85\u65F6" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u8D85\u65F6" aria-hidden="true">#</a> \u8BF7\u6C42\u8D85\u65F6</h3><p>\u6700\u540E\uFF0C\u5C06 virtualservice \u914D\u7F6E\u66F4\u65B0\u4E3A\u5728 3 \u79D2\u540E\u5BF9 httpbin \u670D\u52A1\u7684\u6240\u6709\u8C03\u7528\u8D85\u65F6\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> VirtualService
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> httpbin
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default

<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">gateways</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> httpbin<span class="token punctuation">-</span>gateway
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> httpbin.example.com
  <span class="token key atrule">http</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">fault</span><span class="token punctuation">:</span>
      <span class="token key atrule">abort</span><span class="token punctuation">:</span>
        <span class="token key atrule">httpStatus</span><span class="token punctuation">:</span> <span class="token number">400</span>
        <span class="token key atrule">percentage</span><span class="token punctuation">:</span>
          <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token number">50</span>
    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 3s
    <span class="token key atrule">match</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">uri</span><span class="token punctuation">:</span>
        <span class="token key atrule">prefix</span><span class="token punctuation">:</span> /status
    <span class="token punctuation">-</span> <span class="token key atrule">uri</span><span class="token punctuation">:</span>
        <span class="token key atrule">prefix</span><span class="token punctuation">:</span> /delay
    <span class="token punctuation">-</span> <span class="token key atrule">uri</span><span class="token punctuation">:</span>
        <span class="token key atrule">prefix</span><span class="token punctuation">:</span> /html
    <span class="token key atrule">route</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">destination</span><span class="token punctuation">:</span>
        <span class="token key atrule">host</span><span class="token punctuation">:</span> httpbin
        <span class="token key atrule">port</span><span class="token punctuation">:</span>
          <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u91D1\u4E1D\u96C0\u53D1\u5E03" tabindex="-1"><a class="header-anchor" href="#\u91D1\u4E1D\u96C0\u53D1\u5E03" aria-hidden="true">#</a> \u91D1\u4E1D\u96C0\u53D1\u5E03</h2><h3 id="\u3010\u9898\u76EE1\u3011\u91D1\u4E1D\u96C0\u53D1\u5E03-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u3010\u9898\u76EE1\u3011\u91D1\u4E1D\u96C0\u53D1\u5E03-\u5B89\u88C5" aria-hidden="true">#</a> \u3010\u9898\u76EE1\u3011\u91D1\u4E1D\u96C0\u53D1\u5E03-\u5B89\u88C5</h3><p>\u7531\u4E8E Kubernetes \u4F7F\u7528\u7684 IPVS \u6A21\u5757\u9700\u8981\u7CFB\u7EDF\u5185\u6838\u7248\u672C\u652F\u6301\uFF0C\u8BD5\u4F7F\u7528\u63D0\u4F9B\u7684\u8F6F\u4EF6\u5305 \uFF08Canary_v1.0.tar.gz \u5728 http \u670D\u52A1\u4E0B\uFF09\u5C06\u7CFB\u7EDF\u5185\u6838\u8FDB\u884C\u5347\u7EA7\uFF0C\u5728 Kubernetes \u96C6\u7FA4\u4E0A\u5B8C\u6210 Istio \u7684\u5B89\u88C5\uFF0C\u5E76\u5C06 default Namespace \u8BBE\u7F6E\u81EA\u52A8\u6CE8\u5165\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ yum <span class="token function">install</span> https://www.elrepo.org/elrepo-release-7.el7.elrepo.noarch.rpm <span class="token parameter variable">-y</span>
$ yum <span class="token parameter variable">--enablerepo</span><span class="token operator">=</span><span class="token string">&quot;elrepo-kernel&quot;</span> <span class="token parameter variable">-y</span> <span class="token function">install</span> kernel-ml.x86_64 
$ grub2-set-default <span class="token number">0</span>
$ grub2-mkconfig <span class="token parameter variable">-o</span> /boot/grub2/grub.cfg    <span class="token comment">#\u91CD\u542F\u7535\u8111</span>
$ <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> istio-1.9.5-linux-amd64.tar.gz
$ <span class="token builtin class-name">cd</span> istio-1.9.5/
$ <span class="token function">cp</span> bin/istioctl  /usr/local/bin/
$ kubectl  create  ns istio-system
$ istioctl <span class="token function">install</span> <span class="token parameter variable">--set</span> <span class="token assign-left variable">profile</span><span class="token operator">=</span>demo <span class="token parameter variable">-y</span>
\u2714 Istio core installed                                                   
\u2714 Istiod installed                                                  
\u2714 Egress gateways installed                                                        
\u2714 Ingress gateways installed                                                        
\u2714 Installation complete     
$ kubectl label namespace default istio-injection<span class="token operator">=</span>enabled 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u68C0\u6D4B\u547D\u4EE4\u68C0\u67E5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl <span class="token parameter variable">-n</span> istio-system get deploy
NAME                   READY   UP-TO-DATE   AVAILABLE   AGE
istio-egressgateway    <span class="token number">1</span>/1     <span class="token number">1</span>            <span class="token number">1</span>           25s
istio-ingressgateway   <span class="token number">1</span>/1     <span class="token number">1</span>            <span class="token number">1</span>           24s
istiod                 <span class="token number">1</span>/1     <span class="token number">1</span>            <span class="token number">1</span>           20s

$ kubectl get ns --show-labels<span class="token operator">=</span>true<span class="token operator">|</span><span class="token function">grep</span> default 
default           Active   121m   istio-injection<span class="token operator">=</span>enabled

$ <span class="token function">uname</span> <span class="token parameter variable">-r</span>
<span class="token number">5.12</span>.0-1.el7.elrepo.x86_64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u3010\u9898\u76EE2\u3011\u91D1\u4E1D\u96C0\u53D1\u5E03-\u6D41\u91CF\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u3010\u9898\u76EE2\u3011\u91D1\u4E1D\u96C0\u53D1\u5E03-\u6D41\u91CF\u63A7\u5236" aria-hidden="true">#</a> \u3010\u9898\u76EE2\u3011\u91D1\u4E1D\u96C0\u53D1\u5E03-\u6D41\u91CF\u63A7\u5236</h3><p>\u4F7F\u7528\u8D5B\u9879\u63D0\u4F9B\u7684\u6587\u4EF6(istio-1.9.5/samples/helloworld/helloworld.yaml)\u5728 default \u547D\u540D\u7A7A\u95F4 \u4E0B\u5B8C\u6210 hellworld \u670D\u52A1\u7684\u90E8\u7F72\uFF0C\u7136\u540E\u8BBE\u7F6E\u8DEF\u7531\u89C4\u5219\u6765\u63A7\u5236\u6D41\u91CF\u5206\u914D\uFF0C\u521B\u5EFA\u4E00\u4E2A\u865A\u62DF\u670D\u52A1 helloworld\uFF1B\u518D\u521B\u5EFA\u4E00\u4E2A\u76EE\u6807\u89C4\u5219 helloworld\uFF0C\u5C06 10\uFF05\u7684\u6D41\u91CF\u53D1\u9001\u5230\u91D1\u4E1D\u96C0\u7248\u672C(v2)\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl apply <span class="token parameter variable">-f</span> samples/helloworld/helloworld.yaml 
$ kubectl get pods 
NAME                              READY   STATUS    RESTARTS   AGE
helloworld-v1-776f57d5f6-m5xqg    <span class="token number">2</span>/2     Running   <span class="token number">0</span>          100m
helloworld-v2-54df5f84b-mwsf6     <span class="token number">2</span>/2     Running   <span class="token number">0</span>          100m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>$ cat  helloworld<span class="token punctuation">-</span>gateway.yaml  
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1alpha3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Gateway
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> helloworld
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">istio</span><span class="token punctuation">:</span> ingressgateway 
  <span class="token key atrule">servers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span>
      <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">80</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> http
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> HTTP
    <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;*&quot;</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1alpha3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> VirtualService
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> helloworld
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;*&quot;</span>
  <span class="token key atrule">gateways</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> helloworld
  <span class="token key atrule">http</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">match</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">uri</span><span class="token punctuation">:</span>
        <span class="token key atrule">exact</span><span class="token punctuation">:</span> /hello
    <span class="token key atrule">route</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">destination</span><span class="token punctuation">:</span> 
        <span class="token key atrule">host</span><span class="token punctuation">:</span> helloworld
        <span class="token key atrule">subset</span><span class="token punctuation">:</span> v1  
      <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">90</span> 
    <span class="token punctuation">-</span> <span class="token key atrule">destination</span><span class="token punctuation">:</span>
        <span class="token key atrule">host</span><span class="token punctuation">:</span> helloworld
        <span class="token key atrule">subset</span><span class="token punctuation">:</span> v2
      <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">10</span> 
      

$ cat  DestinationRule.yaml  
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1alpha3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> DestinationRule 
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> 
  <span class="token key atrule">name</span><span class="token punctuation">:</span> helloword 
<span class="token key atrule">spec</span><span class="token punctuation">:</span> 
  <span class="token key atrule">host</span><span class="token punctuation">:</span> helloword 
  <span class="token key atrule">subsets</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> v1 
    <span class="token key atrule">labels</span><span class="token punctuation">:</span> 
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v1 
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> v2 
    <span class="token key atrule">labels</span><span class="token punctuation">:</span> 
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v2 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u68C0\u6D4B\u547D\u4EE4\u68C0\u67E5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl get VirtualService,DestinationRule
NAME                                            GATEWAYS               HOSTS         AGE
virtualservice.networking.istio.io/helloworld   <span class="token punctuation">[</span><span class="token string">&quot;helloworld&quot;</span><span class="token punctuation">]</span>         <span class="token punctuation">[</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">]</span>         95m

NAME                                              HOST          AGE
destinationrule.networking.istio.io/helloword     helloword     57m

$ kubectl describe VirtualService helloworld <span class="token operator">|</span><span class="token function">grep</span> Route <span class="token parameter variable">-A</span> <span class="token number">10</span> <span class="token operator">|</span> <span class="token function">xargs</span> 
Route: Destination: Host: helloworld Subset: v1 Weight: <span class="token number">90</span> Destination: Host: helloworld Subset: v2 Weight: <span class="token number">10</span> Events: <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u3010\u9898\u76EE3\u3011\u91D1\u4E1D\u96C0\u53D1\u5E03-\u7194\u65AD" tabindex="-1"><a class="header-anchor" href="#\u3010\u9898\u76EE3\u3011\u91D1\u4E1D\u96C0\u53D1\u5E03-\u7194\u65AD" aria-hidden="true">#</a> \u3010\u9898\u76EE3\u3011\u91D1\u4E1D\u96C0\u53D1\u5E03-\u7194\u65AD</h3><p>\u4F7F\u7528\u8D5B\u9879\u63D0\u4F9B\u7684\u6587\u4EF6(istio-1.9.5/samples/httpbin/httpbin-fortio.yaml)\u5728 default \u547D\u540D\u7A7A\u95F4\u4E0B \u5B8C\u6210 httpbin \u670D\u52A1\u7684\u90E8\u7F72\uFF0C\u521B\u5EFA\u4E00\u4E2A\u76EE\u6807\u89C4\u5219 httpbin\uFF0C\u5728\u8C03\u7528 httpbin \u670D\u52A1\u65F6\u5E94\u7528\u7194\u65AD\u8BBE\u7F6E\uFF0C \u5177\u4F53\u8981\u6C42\u4E3A</p><p>\uFF081\uFF09\u5B9A\u4E49\u5230\u76EE\u6807\u4E3B\u673A\u7684 HTTP1/TCP \u6700\u5927\u8FDE\u63A5\u6570\u4E3A 1\uFF1B</p><p>\uFF082\uFF09\u5B9A\u4E49\u9488\u5BF9\u4E00\u4E2A\u76EE\u6807\u7684 HTTP \u8BF7\u6C42\u7684\u6700\u5927\u6392\u961F\u6570\u91CF\u4E3A 1\uFF1B</p><p>\uFF083\uFF09\u5B9A\u4E49\u5BF9\u67D0\u4E00\u540E\u7AEF\u7684\u8BF7\u6C42\u4E2D\uFF0C\u4E00\u4E2A\u8FDE\u63A5\u5185\u80FD\u591F\u53D1\u51FA\u7684\u6700\u5927\u8BF7\u6C42\u6570\u91CF\u4E3A 1\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl apply <span class="token parameter variable">-f</span> samples/httpbin/sample-client/fortio-deploy.yaml  
service/fortio created
deployment.apps/fortio-deploy created
$ kubectl get pods 
NAME                              READY   STATUS    RESTARTS   AGE
fortio-deploy-576dbdfbc4-rdtrd    <span class="token number">2</span>/2     Running   <span class="token number">0</span>          2m28s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>$ kubectl apply <span class="token punctuation">-</span>f <span class="token punctuation">-</span> &lt;&lt;EOF
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1alpha3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> DestinationRule
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> httpbin
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">host</span><span class="token punctuation">:</span> httpbin
  <span class="token key atrule">trafficPolicy</span><span class="token punctuation">:</span>
    <span class="token key atrule">connectionPool</span><span class="token punctuation">:</span>
      <span class="token key atrule">tcp</span><span class="token punctuation">:</span>
        <span class="token key atrule">maxConnections</span><span class="token punctuation">:</span> <span class="token number">1</span>
      <span class="token key atrule">http</span><span class="token punctuation">:</span>
        <span class="token key atrule">http1MaxPendingRequests</span><span class="token punctuation">:</span> <span class="token number">1</span>
        <span class="token key atrule">maxRequestsPerConnection</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token key atrule">outlierDetection</span><span class="token punctuation">:</span>
      <span class="token key atrule">consecutive5xxErrors</span><span class="token punctuation">:</span> <span class="token number">1</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 1s
      <span class="token key atrule">baseEjectionTime</span><span class="token punctuation">:</span> 3m
      <span class="token key atrule">maxEjectionPercent</span><span class="token punctuation">:</span> <span class="token number">100</span>
EOF
destinationrule.networking.istio.io/httpbin created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u68C0\u6D4B\u547D\u4EE4\u68C0\u67E5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl describe DestinationRule httpbin 
\xB7\xB7\xB7
Spec:
  Host:  httpbin
  Traffic Policy:
    Connection Pool:
      Http:
        http1MaxPendingRequests:      <span class="token number">1</span>
        Max Requests Per Connection:  <span class="token number">1</span>
      Tcp:
        Max Connections:  <span class="token number">1</span>
    Outlier Detection:
      Base Ejection Time:    3m
      consecutive5xxErrors:  <span class="token number">1</span>
      Interval:              1s
      Max Ejection Percent:  <span class="token number">100</span>
Events:                      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u3010\u9898\u76EE-4\u3011\u91D1\u4E1D\u96C0\u53D1\u5E03-\u6D41\u91CF\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u3010\u9898\u76EE-4\u3011\u91D1\u4E1D\u96C0\u53D1\u5E03-\u6D41\u91CF\u955C\u50CF" aria-hidden="true">#</a> \u3010\u9898\u76EE 4\u3011\u91D1\u4E1D\u96C0\u53D1\u5E03-\u6D41\u91CF\u955C\u50CF</h3><p>\u4F7F\u7528\u8D5B\u9879\u63D0\u4F9B\u7684\u6587\u4EF6(istio-1.9.5/samples/httpbin/httpbin-sleep.yaml)\u5728 default \u547D\u540D\u7A7A\u95F4\u4E0B \u5B8C\u6210 httpbin-v1\u3001httpbin-v2 \u4EE5\u53CA sleep \u670D\u52A1\u7684\u90E8\u7F72\uFF0C\u521B\u5EFA\u4E00\u4E2A\u865A\u62DF\u670D\u52A1 httpbin \u548C\u4E00\u4E2A\u76EE\u6807\u89C4 \u5219 httpbin\uFF0C\u5C06\u6240\u6709\u6D41\u91CF\u8DEF\u7531\u5230 httpbin-v1 \u670D\u52A1\uFF0C\u7136\u540E\u5C06 100%\u7684\u76F8\u540C\u6D41\u91CF\u955C\u50CF\uFF08\u5373\u53D1\u9001\uFF09\u5230 httpbin-v2 \u670D\u52A1\u3002</p><p><code>\u8FD9\u662Fhttpbin.yaml </code></p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> httpbin<span class="token punctuation">-</span>v1
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> httpbin
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v1
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> httpbin
        <span class="token key atrule">version</span><span class="token punctuation">:</span> v1
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> docker.io/kennethreitz/httpbin
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
        <span class="token key atrule">name</span><span class="token punctuation">:</span> httpbin
        <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;gunicorn&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;--access-logfile&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;0.0.0.0:80&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;httpbin:app&quot;</span><span class="token punctuation">]</span>
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> httpbin<span class="token punctuation">-</span>v2
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> httpbin
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v2
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> httpbin
        <span class="token key atrule">version</span><span class="token punctuation">:</span> v2
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> docker.io/kennethreitz/httpbin
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
        <span class="token key atrule">name</span><span class="token punctuation">:</span> httpbin
        <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;gunicorn&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;--access-logfile&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;0.0.0.0:80&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;httpbin:app&quot;</span><span class="token punctuation">]</span>
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> httpbin
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> httpbin
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8000</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> httpbin
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> sleep
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> sleep
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> sleep
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> sleep
        <span class="token key atrule">image</span><span class="token punctuation">:</span> curlimages/curl
        <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/sleep&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;3650d&quot;</span><span class="token punctuation">]</span>
        <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u4E0B\u662F\u89E3\u7B54</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>$ kubectl apply <span class="token punctuation">-</span>f <span class="token punctuation">-</span> &lt;&lt;EOF
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1alpha3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> VirtualService
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> httpbin
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> httpbin
  <span class="token key atrule">http</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">route</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">destination</span><span class="token punctuation">:</span>
        <span class="token key atrule">host</span><span class="token punctuation">:</span> httpbin
        <span class="token key atrule">subset</span><span class="token punctuation">:</span> v1
      <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">100</span>
    <span class="token key atrule">mirror</span><span class="token punctuation">:</span>
      <span class="token key atrule">host</span><span class="token punctuation">:</span> httpbin
      <span class="token key atrule">subset</span><span class="token punctuation">:</span> v2
    <span class="token key atrule">mirrorPercentage</span><span class="token punctuation">:</span>
      <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token number">100.0</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1alpha3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> DestinationRule
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> httpbin
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">host</span><span class="token punctuation">:</span> httpbin
  <span class="token key atrule">subsets</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> v1
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v1
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> v2
    <span class="token key atrule">labels</span><span class="token punctuation">:</span>
      <span class="token key atrule">version</span><span class="token punctuation">:</span> v2
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u68C0\u6D4B\u547D\u4EE4\u68C0\u67E5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl describe virtualservice httpbin <span class="token operator">|</span> <span class="token function">grep</span> Mirror <span class="token parameter variable">-A</span> <span class="token number">2</span> 
    Mirror:
      Host:    httpbin
      Subset:  v2
    Mirror Percentage:
      Value:  <span class="token number">100</span>
    Route:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u3010\u9898\u76EE-5\u3011\u91D1\u4E1D\u96C0\u53D1\u5E03-ingress-gateway" tabindex="-1"><a class="header-anchor" href="#\u3010\u9898\u76EE-5\u3011\u91D1\u4E1D\u96C0\u53D1\u5E03-ingress-gateway" aria-hidden="true">#</a> \u3010\u9898\u76EE 5\u3011\u91D1\u4E1D\u96C0\u53D1\u5E03-Ingress Gateway</h3><p>\u4F7F\u7528\u8D5B\u9879\u63D0\u4F9B\u7684\u6587\u4EF6(istio-1.9.5/samples/httpbin/httpbin.yaml)\u5728 default \u547D\u540D\u7A7A\u95F4\u4E0B\u5B8C\u6210 httpbin \u670D\u52A1\u7684\u90E8\u7F72\uFF0C\u5728 80 \u7AEF\u53E3\u4E3A HTTP \u6D41\u91CF\u914D\u7F6E\u4E00\u4E2A\u7F51\u5173 httpbin-gateway\uFF0C\u5E76\u4E3A httpbin \u670D \u52A1\u521B\u5EFA\u4E86\u865A\u62DF\u670D\u52A1\u914D\u7F6E httpbin\uFF0C\u5305\u542B 1 \u4E2A\u8DEF\u7531\u89C4\u5219\uFF0C\u5141\u8BB8\u6D41\u91CF\u6D41\u5411\u8DEF\u5F84/headers\uFF0C\u5E76\u5141\u8BB8\u901A \u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE\u670D\u52A1\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>$ kubectl apply <span class="token punctuation">-</span>f samples/httpbin/httpbin.yaml  
serviceaccount/httpbin created
service/httpbin created
deployment.apps/httpbin created

$ kubectl apply <span class="token punctuation">-</span>f <span class="token punctuation">-</span> &lt;&lt;EOF
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1alpha3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Gateway
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> httpbin<span class="token punctuation">-</span>gateway
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">istio</span><span class="token punctuation">:</span> ingressgateway   <span class="token comment">#\u4F7F\u7528Istio\u7684\u9ED8\u8BA4\u7F51\u5173</span>
  <span class="token key atrule">servers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span>
      <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">80</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> http
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> HTTP
    <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;*&quot;</span>
<span class="token punctuation">---</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.istio.io/v1alpha3
<span class="token key atrule">kind</span><span class="token punctuation">:</span> VirtualService
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> httpbin
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token string">&quot;*&quot;</span>
  <span class="token key atrule">gateways</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> httpbin<span class="token punctuation">-</span>gateway
  <span class="token key atrule">http</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">match</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">uri</span><span class="token punctuation">:</span>
        <span class="token key atrule">prefix</span><span class="token punctuation">:</span> /headers
    <span class="token key atrule">route</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">destination</span><span class="token punctuation">:</span>
        <span class="token key atrule">port</span><span class="token punctuation">:</span>
          <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8000</span>
        <span class="token key atrule">host</span><span class="token punctuation">:</span> httpbin
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u68C0\u6D4B\u547D\u4EE4\u68C0\u67E5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ kubectl get virtualservice
NAME      GATEWAYS              HOSTS   AGE
httpbin   <span class="token punctuation">[</span><span class="token string">&quot;httpbin-gateway&quot;</span><span class="token punctuation">]</span>   <span class="token punctuation">[</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">]</span>   6m51s
$ kubectl describe virtualservice httpbin
\xB7\xB7\xB7
Spec:
  Gateways:
    httpbin-gateway
  Hosts:
    *
  Http:
    Match:
      Uri:
        Prefix:  /headers
    Route:
      Destination:
        Host:  httpbin
        Port:
          Number:  <span class="token number">8000</span>
Events:            <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>

$ <span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token parameter variable">-I</span> <span class="token parameter variable">-HHost:httpbin.example.com</span> <span class="token string">&quot;http://node:<span class="token variable"><span class="token variable">$(</span>kubectl <span class="token parameter variable">-n</span> istio-system get <span class="token function">service</span> istio-ingressgateway <span class="token parameter variable">-o</span> <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&#39;{.spec.ports[?(@.name==&quot;http2&quot;)].nodePort}&#39;</span><span class="token variable">)</span></span>/headers&quot;</span> 
HTTP/1.1 <span class="token number">200</span> OK
server: istio-envoy
date: Thu, <span class="token number">16</span> Dec <span class="token number">2021</span> 05:32:00 GMT
content-type: application/json
content-length: <span class="token number">627</span>
access-control-allow-origin: *
access-control-allow-credentials: <span class="token boolean">true</span>
x-envoy-upstream-service-time: <span class="token number">23</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,56);function x(q,T){const e=c("ExternalLinkIcon");return i(),p("div",null,[o,n("ol",null,[r,d,k,n("li",null,[s("\u5728\u7AEF\u53E380\u4E0A\u4E3AHTTP\u6D41\u91CF\u914D\u7F6E\u7F51\u5173\uFF0C"),n("a",v,[s("\u4E3B\u673A\u503C\u5E94\u4E3Ahttpbin.example.com"),t(e)]),s("\u3002")])]),m,n("ol",null,[b,y,n("li",null,[n("a",h,[s("\u4E3B\u673A\u4F7F\u7528httpbin.example.com"),t(e)])]),g,f]),w])}const R=l(u,[["render",x],["__file","4.Istio\u7EC3\u4E60\u9898.html.vue"]]);export{R as default};
