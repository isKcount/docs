import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as s,b as n,d as e,f as t,r as p}from"./app.ca0279c0.js";const l={},r=s("h1",{id:"nginx\u53CD\u5411\u4EE3\u7406",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#nginx\u53CD\u5411\u4EE3\u7406","aria-hidden":"true"},"#"),n(" Nginx\u53CD\u5411\u4EE3\u7406")],-1),d=s("h2",{id:"\u5B9E\u73B0\u6548\u679C\u5B9E\u4F8B1",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u5B9E\u73B0\u6548\u679C\u5B9E\u4F8B1","aria-hidden":"true"},"#"),n(" \u5B9E\u73B0\u6548\u679C\u5B9E\u4F8B1")],-1),u={href:"http://xn--www-u68d60m59inlb4bc1nd6472cdjov67gzfsa.123.com",target:"_blank",rel:"noopener noreferrer"},m=t(`<h3 id="\u51C6\u5907\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a> \u51C6\u5907\u5DE5\u4F5C</h3><p>\uFF081\uFF09\u5B89\u88C5Nginx\u5728linux\u670D\u52A1\u5668</p><p>\uFF082\uFF09\u5B89\u88C5Tomcat\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u7AEF\u53E38080</p><h3 id="_1\u3001\u5B89\u88C5tomcat" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u5B89\u88C5tomcat" aria-hidden="true">#</a> 1\u3001\u5B89\u88C5Tomcat</h3><p>\u5B89\u88C5Java-1.8.0-jdk</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nginx ~<span class="token punctuation">]</span><span class="token comment"># yum install -y java</span>
<span class="token punctuation">[</span>root@nginx ~<span class="token punctuation">]</span><span class="token comment"># java -version</span>
openjdk version <span class="token string">&quot;1.8.0_322&quot;</span>
OpenJDK Runtime Environment <span class="token punctuation">(</span>build <span class="token number">1.8</span>.0_322-b06<span class="token punctuation">)</span>
OpenJDK <span class="token number">64</span>-Bit Server VM <span class="token punctuation">(</span>build <span class="token number">25.322</span>-b06, mixed mode<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B89\u88C5tomcat</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nginx ~<span class="token punctuation">]</span><span class="token comment"># tar zxvf apache-tomcat-8.5.75.tar.gz </span>
<span class="token punctuation">[</span>root@nginx ~<span class="token punctuation">]</span><span class="token comment"># cd apache-tomcat-8.5.75/</span>
<span class="token punctuation">[</span>root@nginx apache-tomcat-8.5.75<span class="token punctuation">]</span><span class="token comment"># cd bin/</span>
<span class="token punctuation">[</span>root@nginx bin<span class="token punctuation">]</span><span class="token comment"># ./startup.sh</span>
Using CATALINA_BASE:   /root/apache-tomcat-8.5.75
Using CATALINA_HOME:   /root/apache-tomcat-8.5.75
Using CATALINA_TMPDIR: /root/apache-tomcat-8.5.75/temp
Using JRE_HOME:        /usr
Using CLASSPATH:       /root/apache-tomcat-8.5.75/bin/bootstrap.jar:/root/apache-tomcat-8.5.75/bin/tomcat-juli.jar
Using CATALINA_OPTS:
Tomcat started.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2\u3001\u5173\u95ED\u9632\u706B\u5899" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u5173\u95ED\u9632\u706B\u5899" aria-hidden="true">#</a> 2\u3001\u5173\u95ED\u9632\u706B\u5899</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nginx bin<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --list-alnot running</span>
<span class="token punctuation">[</span>root@nginx bin<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --add-service=http --permanent</span>
<span class="token punctuation">[</span>root@nginx bin<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --add-port=80/tcp --permanent</span>
<span class="token punctuation">[</span>root@nginx bin<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --add-port=8080/tcp --permanent</span>
<span class="token punctuation">[</span>root@nginx bin<span class="token punctuation">]</span><span class="token comment"># firewall-cmd --reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3\u3001\u4FEE\u6539nginx\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u4FEE\u6539nginx\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 3\u3001\u4FEE\u6539Nginx\u914D\u7F6E\u6587\u4EF6</h3><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code>[root@nginx ~]# <span class="token directive"><span class="token keyword">vim</span>  /usr/local/nginx/conf/nginx.conf

server</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  192.168.0.135</span><span class="token punctuation">;</span>    <span class="token comment"># localhost\u914D\u7F6EIP\u5730\u5740</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:8080</span><span class="token punctuation">;</span>  <span class="token comment"># \u6DFB\u52A0\u53CD\u5411\u4EE3\u7406\u5730\u5740</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

[root@nginx ~]# /usr/local/nginx/sbin/nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u672C\u673A\u914D\u7F6Ehosts\u6620\u5C04\uFF0C\u7136\u540E\u6D4F\u89C8\u5668\u8BBF\u95EE</p><p><img src="https://i.bmp.ovh/imgs/2022/02/4fe2744d77f6f2c2.png" alt="" loading="lazy"></p><h2 id="\u5B9E\u73B0\u6548\u679C\u5B9E\u4F8B2" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u6548\u679C\u5B9E\u4F8B2" aria-hidden="true">#</a> \u5B9E\u73B0\u6548\u679C\u5B9E\u4F8B2</h2><p>\u4F7F\u7528nginx\u53CD\u5411\u4EE3\u7406\uFF0C\u6839\u636E\u8BBF\u95EE\u7684\u8DEF\u5F84\u8DF3\u8F6C\u5230\u4E0D\u540C\u7684\u7AEF\u53E3\u670D\u52A1\u4E2D\uFF0Cnginx\u76D1\u542C\u7AEF\u53E3\u4E3A9001</p>`,16),v={href:"http://127.0.0.1:9001/edu/",target:"_blank",rel:"noopener noreferrer"},k={href:"http://127.0.0.1:9001/vod/",target:"_blank",rel:"noopener noreferrer"},b=t(`<h3 id="\u51C6\u5907\u5DE5\u4F5C-1" tabindex="-1"><a class="header-anchor" href="#\u51C6\u5907\u5DE5\u4F5C-1" aria-hidden="true">#</a> \u51C6\u5907\u5DE5\u4F5C</h3><p>\u51C6\u5907\u4E24\u53F0tomcat\u670D\u52A1\u5668\uFF0C\u4E00\u53F08080\uFF0C\u4E00\u53F08081</p><p>\u5728\u4E24\u53F0tomcat\u91CC\u9762webapps\u76EE\u5F55\u4E2D\uFF0C\u521B\u5EFA\u540D\u79F0\u662Fedu\u7684\u6587\u4EF6\u5939\uFF0C\u5728edu\u6587\u4EF6\u5939\u4E2D\u521B\u5EFA\u9875\u9762a.html,\u7528\u4E8E\u6D4B\u8BD5</p><h3 id="_1\u3001\u51C6\u5907\u4E24\u4E2Atomcat\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u51C6\u5907\u4E24\u4E2Atomcat\u670D\u52A1\u5668" aria-hidden="true">#</a> 1\u3001\u51C6\u5907\u4E24\u4E2Atomcat\u670D\u52A1\u5668</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nginx ~<span class="token punctuation">]</span><span class="token comment"># cd /usr/src/</span>
<span class="token punctuation">[</span>root@nginx src<span class="token punctuation">]</span><span class="token comment"># mkdir tomcat8080</span>
<span class="token punctuation">[</span>root@nginx src<span class="token punctuation">]</span><span class="token comment"># mkdir tomcat8081</span>
<span class="token punctuation">[</span>root@nginx src<span class="token punctuation">]</span><span class="token comment"># cp /root/apache-tomcat-8.5.75.tar.gz tomcat8080/</span>
<span class="token punctuation">[</span>root@nginx src<span class="token punctuation">]</span><span class="token comment"># cp /root/apache-tomcat-8.5.75.tar.gz tomcat8081/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2\u3001\u542F\u52A8\u670D\u52A1\u3001\u4FEE\u6539\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u542F\u52A8\u670D\u52A1\u3001\u4FEE\u6539\u7AEF\u53E3" aria-hidden="true">#</a> 2\u3001\u542F\u52A8\u670D\u52A1\u3001\u4FEE\u6539\u7AEF\u53E3</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nginx src<span class="token punctuation">]</span><span class="token comment"># ./tomcat8080/apache-tomcat-8.5.75/bin/startup.sh</span>
Using CATALINA_BASE:   /usr/src/tomcat8080/apache-tomcat-8.5.75
Using CATALINA_HOME:   /usr/src/tomcat8080/apache-tomcat-8.5.75
Using CATALINA_TMPDIR: /usr/src/tomcat8080/apache-tomcat-8.5.75/temp
Using JRE_HOME:        /usr
Using CLASSPATH:       /usr/src/tomcat8080/apache-tomcat-8.5.75/bin/bootstrap.jar:/usr/src/tomcat8080/apache-tomcat-8.5.75/bin/tomcat-juli.jar
Using CATALINA_OPTS:
Tomcat started.



<span class="token punctuation">[</span>root@nginx src<span class="token punctuation">]</span><span class="token comment"># cd tomcat8081/apache-tomcat-8.5.75/</span>
<span class="token punctuation">[</span>root@nginx apache-tomcat-8.5.75<span class="token punctuation">]</span><span class="token comment"># cd conf/</span>
<span class="token punctuation">[</span>root@nginx conf<span class="token punctuation">]</span><span class="token comment"># vim server.xml</span>
<span class="token operator">&lt;</span>Server <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token string">&quot;8015&quot;</span> <span class="token assign-left variable">shutdown</span><span class="token operator">=</span><span class="token string">&quot;SHUTDOWN&quot;</span><span class="token operator">&gt;</span>     <span class="token comment">#8005\u4FEE\u6539\u62108015</span>
  <span class="token operator">&lt;</span>Listener <span class="token assign-left variable">className</span><span class="token operator">=</span><span class="token string">&quot;org.apache.catalina.startup.VersionLoggerListener&quot;</span> /<span class="token operator">&gt;</span>
  
\xB7
\xB7
\xB7
<span class="token operator">&lt;</span>Connector <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token string">&quot;8081&quot;</span> <span class="token assign-left variable">protocol</span><span class="token operator">=</span><span class="token string">&quot;HTTP/1.1&quot;</span>      <span class="token comment">#8080\u4FEE\u6539\u62108081 </span>
               <span class="token assign-left variable">connectionTimeout</span><span class="token operator">=</span><span class="token string">&quot;20000&quot;</span>
               <span class="token assign-left variable">redirectPort</span><span class="token operator">=</span><span class="token string">&quot;8443&quot;</span> /<span class="token operator">&gt;</span>
\xB7
\xB7
\xB7
<span class="token operator">&lt;</span><span class="token operator">!</span>-- Define an AJP <span class="token number">1.3</span> Connector on port <span class="token number">8009</span> --<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span>--
    <span class="token operator">&lt;</span>Connector <span class="token assign-left variable">protocol</span><span class="token operator">=</span><span class="token string">&quot;AJP/1.3&quot;</span>
               <span class="token assign-left variable">address</span><span class="token operator">=</span><span class="token string">&quot;::1&quot;</span>
               <span class="token assign-left variable">port</span><span class="token operator">=</span><span class="token string">&quot;8019&quot;</span>					<span class="token comment">#8009\u4FEE\u6539\u62108019</span>
               <span class="token assign-left variable">redirectPort</span><span class="token operator">=</span><span class="token string">&quot;8443&quot;</span> /<span class="token operator">&gt;</span>
    --<span class="token operator">&gt;</span>
<span class="token punctuation">[</span>root@nginx conf<span class="token punctuation">]</span><span class="token comment"># cd ..</span>
<span class="token punctuation">[</span>root@nginx apache-tomcat-8.5.75<span class="token punctuation">]</span><span class="token comment"># cd bin/</span>
<span class="token punctuation">[</span>root@nginx bin<span class="token punctuation">]</span><span class="token comment"># ./startup.sh</span>
Using CATALINA_BASE:   /usr/src/tomcat8081/apache-tomcat-8.5.75
Using CATALINA_HOME:   /usr/src/tomcat8081/apache-tomcat-8.5.75
Using CATALINA_TMPDIR: /usr/src/tomcat8081/apache-tomcat-8.5.75/temp
Using JRE_HOME:        /usr
Using CLASSPATH:       /usr/src/tomcat8081/apache-tomcat-8.5.75/bin/bootstrap.jar:/usr/src/tomcat8081/apache-tomcat-8.5.75/bin/tomcat-juli.jar
Using CATALINA_OPTS:
Tomcat started.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3\u3001\u521B\u5EFA\u6587\u4EF6\u5939\u3001\u6D4B\u8BD5\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u521B\u5EFA\u6587\u4EF6\u5939\u3001\u6D4B\u8BD5\u9875\u9762" aria-hidden="true">#</a> 3\u3001\u521B\u5EFA\u6587\u4EF6\u5939\u3001\u6D4B\u8BD5\u9875\u9762</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@nginx src<span class="token punctuation">]</span><span class="token comment"># cd tomcat8080/apache-tomcat-8.5.75/webapps/</span>
<span class="token punctuation">[</span>root@nginx webapps<span class="token punctuation">]</span><span class="token comment"># mkdir edu</span>
<span class="token punctuation">[</span>root@nginx webapps<span class="token punctuation">]</span><span class="token comment"># echo &quot;8080 tomcat&quot; &gt; edu/a.html</span>

<span class="token punctuation">[</span>root@nginx src<span class="token punctuation">]</span><span class="token comment"># cd tomcat8081/apache-tomcat-8.5.75/webapps/</span>
<span class="token punctuation">[</span>root@nginx webapps<span class="token punctuation">]</span><span class="token comment"># mkdir vod</span>
<span class="token punctuation">[</span>root@nginx webapps<span class="token punctuation">]</span><span class="token comment"># echo &quot;8081 tomcat&quot; &gt; vod/a.html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4\u3001\u914D\u7F6Enginx\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u914D\u7F6Enginx\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 4\u3001\u914D\u7F6ENginx\u914D\u7F6E\u6587\u4EF6</h3><p>\u6DFB\u52A0\u5982\u4E0B\u7684nginx\u914D\u7F6E</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code>[root@nginx ~]# <span class="token directive"><span class="token keyword">vim</span> /usr/local/nginx/conf/nginx.conf
server</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">9001</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server_name</span>  192.168.0.135</span><span class="token punctuation">;</span>


        <span class="token directive"><span class="token keyword">location</span> ~ /edu/</span> <span class="token punctuation">{</span>
                <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:8080</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token directive"><span class="token keyword">location</span> ~ /vod/</span> <span class="token punctuation">{</span>
                <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:8081</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

[root@nginx ~]# /usr/local/nginx/sbin/nginx  -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://i.bmp.ovh/imgs/2022/02/62839fea434c5da0.png" style="zoom:80%;"><img src="https://i.bmp.ovh/imgs/2022/02/e30e069ae61cad7f.png">`,14);function g(h,x){const a=p("ExternalLinkIcon");return o(),c("div",null,[r,d,s("p",null,[n("1\u3001\u6253\u5F00\u6D4F\u89C8\u5668\uFF0C"),s("a",u,[n("\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u4E2D\u8F93\u5165\u5730\u5740www.123.com"),e(a)]),n("\uFF0C\u8DF3\u8F6C\u5230linux\u7684tomcat\u4E3B\u9875\u9762\u3002")]),m,s("p",null,[n("\u8BBF\u95EE"),s("a",v,[n("http://127.0.0.1:9001/edu/"),e(a)]),n(" \u76F4\u63A5\u8DF3\u8F6C\u5230127.0.0.1:8080")]),s("p",null,[n("\u8BBF\u95EE"),s("a",k,[n("http://127.0.0.1:9001/vod/"),e(a)]),n(" \u76F4\u63A5\u8DF3\u8F6C\u5230127.0.0.1:8082")]),b])}const A=i(l,[["render",g],["__file","02.Nginx\u53CD\u5411\u4EE3\u7406.html.vue"]]);export{A as default};
