import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.ca0279c0.js";const l={},i=e(`<h1 id="ansible\u7684roles" tabindex="-1"><a class="header-anchor" href="#ansible\u7684roles" aria-hidden="true">#</a> <strong>Ansible\u7684roles</strong></h1><h2 id="roles\u7684\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#roles\u7684\u4ECB\u7ECD" aria-hidden="true">#</a> roles\u7684\u4ECB\u7ECD</h2><h3 id="roles\u7684\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#roles\u7684\u89E3\u6790" aria-hidden="true">#</a> roles\u7684\u89E3\u6790</h3><p>\u200B ansible\u81EA1.2\u7248\u672C\u5F15\u5165\u7684\u65B0\u7279\u6027\uFF0C\u7528\u4E8E\u5C42\u6B21\u6027\u3001\u7ED3\u6784\u5316\u5730\u7EC4\u7EC7playbook\u3002 \u200B <code>roles\u80FD\u591F\u6839\u636E\u5C42\u6B21\u578B\u7ED3\u6784\u81EA\u52A8\u88C5\u8F7D\u53D8\u91CF\u6587\u4EF6\u3001tasks\u4EE5\u53CAhandlers\u7B49\u3002</code> \u200B <code>\u8981\u4F7F\u7528roles\u53EA\u9700\u8981\u5728playbook\u4E2D\u4F7F\u7528include\u6307\u4EE4\u5373\u53EF\u3002</code> \u200B <code>\u7B80\u5355\u6765\u8BB2\uFF0Croles\u5C31\u662F\u901A\u8FC7\u5206\u522B\u5C06\u53D8\u91CF\u3001\u6587\u4EF6\u3001\u4EFB\u52A1\u3001\u6A21\u677F\u53CA\u5904\u7406\u5668\u653E\u7F6E\u4E8E\u5355\u72EC\u7684\u76EE\u5F55\u4E2D\uFF0C</code> \u200B \u5E76\u53EF\u4EE5\u4FBF\u6377\u5730include\u5B83\u4EEC\u7684\u4E00\u79CD\u673A\u5236\u3002 \u200B \u89D2\u8272\u4E00\u822C\u7528\u4E8E\u57FA\u4E8E\u4E3B\u673A\u6784\u5EFA\u670D\u52A1\u7684\u573A\u666F\u4E2D\uFF0C\u4F46\u4E5F\u53EF\u4EE5\u662F\u7528\u4E8E\u6784\u5EFA\u5B88\u62A4\u8FDB\u7A0B\u7B49\u573A\u666F\u4E2D</p><p>\u200B \u590D\u6742\u573A\u666F\uFF1A\u5EFA\u8BAE\u4F7F\u7528roles\uFF0C\u4EE3\u7801\u590D\u7528\u5EA6\u9AD8 \u200B \u53D8\u66F4\u6307\u5B9A\u4E3B\u673A\u6216\u4E3B\u673A\u7EC4 \u200B \u5982\u547D\u540D\u4E0D\u89C4\u8303\u7EF4\u62A4\u548C\u4F20\u627F\u6210\u672C\u5927 \u200B \u67D0\u4E9B\u529F\u80FD\u9700\u591A\u4E2APlaybook\uFF0C\u901A\u8FC7includes\u5373\u53EF\u5B9E\u73B0</p><h3 id="roles" tabindex="-1"><a class="header-anchor" href="#roles" aria-hidden="true">#</a> <strong>Roles</strong></h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u89D2\u8272<span class="token punctuation">(</span>roles<span class="token punctuation">)</span>\uFF1A\u89D2\u8272\u96C6\u5408
<span class="token punctuation">[</span>root@ansible ansible<span class="token punctuation">]</span><span class="token comment"># tree </span>
<span class="token builtin class-name">.</span>
\u2514\u2500\u2500 roles
    \u251C\u2500\u2500 httpd
    \u251C\u2500\u2500 memcache
    \u251C\u2500\u2500 mysql
    \u2514\u2500\u2500 nginx
    
\u53EF\u4EE5\u4E92\u76F8\u8C03\u7528
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="roles\u5404\u76EE\u5F55\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#roles\u5404\u76EE\u5F55\u4F5C\u7528" aria-hidden="true">#</a> Roles\u5404\u76EE\u5F55\u4F5C\u7528</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/roles/project/ :\u9879\u76EE\u540D\u79F0,\u6709\u4EE5\u4E0B\u5B50\u76EE\u5F55
    files/ \uFF1A\u5B58\u653E\u7531copy\u6216script\u6A21\u5757\u7B49\u8C03\u7528\u7684\u6587\u4EF6
    templates/\uFF1Atemplate\u6A21\u5757\u67E5\u627E\u6240\u9700\u8981\u6A21\u677F\u6587\u4EF6\u7684\u76EE\u5F55
    tasks/\uFF1A\u5B9A\u4E49task,role\u7684\u57FA\u672C\u5143\u7D20\uFF0C\u81F3\u5C11\u5E94\u8BE5\u5305\u542B\u4E00\u4E2A\u540D\u4E3Amain.yml\u7684\u6587\u4EF6\uFF1B
            \u5176\u5B83\u7684\u6587\u4EF6\u9700\u8981\u5728\u6B64\u6587\u4EF6\u4E2D\u901A\u8FC7include\u8FDB\u884C\u5305\u542B
    handlers/\uFF1A\u81F3\u5C11\u5E94\u8BE5\u5305\u542B\u4E00\u4E2A\u540D\u4E3Amain.yml\u7684\u6587\u4EF6\uFF1B
               \u5176\u5B83\u7684\u6587\u4EF6\u9700\u8981\u5728\u6B64\u6587\u4EF6\u4E2D\u901A\u8FC7include\u8FDB\u884C\u5305\u542B
    vars/\uFF1A\u5B9A\u4E49\u53D8\u91CF\uFF0C\u81F3\u5C11\u5E94\u8BE5\u5305\u542B\u4E00\u4E2A\u540D\u4E3Amain.yml\u7684\u6587\u4EF6\uFF1B
           \u5176\u5B83\u7684\u6587\u4EF6\u9700\u8981\u5728\u6B64\u6587\u4EF6\u4E2D\u901A\u8FC7include\u8FDB\u884C\u5305\u542B
    meta/\uFF1A\u5B9A\u4E49\u5F53\u524D\u89D2\u8272\u7684\u7279\u6B8A\u8BBE\u5B9A\u53CA\u5176\u4F9D\u8D56\u5173\u7CFB,\u81F3\u5C11\u5E94\u8BE5\u5305\u542B\u4E00\u4E2A\u540D\u4E3Amain.yml\u7684\u6587\u4EF6\uFF0C
           \u5176\u5B83\u6587\u4EF6\u9700\u5728\u6B64\u6587\u4EF6\u4E2D\u901A\u8FC7include\u8FDB\u884C\u5305\u542B
    default/\uFF1A\u8BBE\u5B9A\u9ED8\u8BA4\u53D8\u91CF\u65F6\u4F7F\u7528\u6B64\u76EE\u5F55\u4E2D\u7684main.yml\u6587\u4EF6
    
roles/appname \u76EE\u5F55\u7ED3\u6784
    tasks\u76EE\u5F55\uFF1A\u81F3\u5C11\u5E94\u8BE5\u5305\u542B\u4E00\u4E2A\u540D\u4E3Amain.yml\u7684\u6587\u4EF6\uFF0C\u5176\u5B9A\u4E49\u4E86\u6B64\u89D2\u8272\u7684\u4EFB\u52A1\u5217\u8868\uFF1B
               \u6B64\u6587\u4EF6\u53EF\u4EE5\u4F7F\u7528include\u5305\u542B\u5176\u5B83\u7684\u4F4D\u4E8E\u6B64\u76EE\u5F55\u4E2D\u7684task\u6587\u4EF6
    files\u76EE\u5F55\uFF1A\u5B58\u653E\u7531copy\u6216script\u7B49\u6A21\u5757\u8C03\u7528\u7684\u6587\u4EF6\uFF1B
    templates\u76EE\u5F55\uFF1Atemplate\u6A21\u5757\u4F1A\u81EA\u52A8\u5728\u6B64\u76EE\u5F55\u4E2D\u5BFB\u627EJinja2\u6A21\u677F\u6587\u4EF6
    handlers\u76EE\u5F55\uFF1A\u6B64\u76EE\u5F55\u4E2D\u5E94\u5F53\u5305\u542B\u4E00\u4E2Amain.yml\u6587\u4EF6\uFF0C\u7528\u4E8E\u5B9A\u4E49\u6B64\u89D2\u8272\u7528\u5230\u7684\u5404handler\uFF1B
                  \u5728handler\u4E2D\u4F7F\u7528include\u5305\u542B\u7684\u5176\u5B83\u7684handler\u6587\u4EF6\u4E5F\u5E94\u8BE5\u4F4D\u4E8E\u6B64\u76EE\u5F55\u4E2D\uFF1B
    vars\u76EE\u5F55\uFF1A\u5E94\u5F53\u5305\u542B\u4E00\u4E2Amain.yml\u6587\u4EF6\uFF0C\u7528\u4E8E\u5B9A\u4E49\u6B64\u89D2\u8272\u7528\u5230\u7684\u53D8\u91CF\uFF1B
    meta\u76EE\u5F55\uFF1A\u5E94\u5F53\u5305\u542B\u4E00\u4E2Amain.yml\u6587\u4EF6\uFF0C\u7528\u4E8E\u5B9A\u4E49\u6B64\u89D2\u8272\u7684\u7279\u6B8A\u8BBE\u5B9A\u53CA\u5176\u4F9D\u8D56\u5173\u7CFB\uFF1B
              ansible1.3\u53CA\u5176\u4EE5\u540E\u7684\u7248\u672C\u624D\u652F\u6301\uFF1B
    default\u76EE\u5F55\uFF1A\u4E3A\u5F53\u524D\u89D2\u8272\u8BBE\u5B9A\u9ED8\u8BA4\u53D8\u91CF\u65F6\u4F7F\u7528\u6B64\u76EE\u5F55\uFF1B\u5E94\u5F53\u5305\u542B\u4E00\u4E2Amain.yml\u6587\u4EF6

roles/example_role/files/             \u6240\u6709\u6587\u4EF6\uFF0C\u90FD\u5C06\u53EF\u5B58\u653E\u5728\u8FD9\u91CC
roles/example_role/templates/         \u6240\u6709\u6A21\u677F\u90FD\u5B58\u653E\u5728\u8FD9\u91CC
roles/example_role/tasks/main.yml\uFF1A   \u4E3B\u51FD\u6570\uFF0C\u5305\u62EC\u5728\u5176\u4E2D\u7684\u6240\u6709\u4EFB\u52A1\u5C06\u88AB\u6267\u884C
roles/example_role/handlers/main.yml\uFF1A\u6240\u6709\u5305\u62EC\u5176\u4E2D\u7684 handlers \u5C06\u88AB\u6267\u884C
roles/example_role/vars/main.yml\uFF1A    \u6240\u6709\u5305\u62EC\u5728\u5176\u4E2D\u7684\u53D8\u91CF\u5C06\u5728roles\u4E2D\u751F\u6548
roles/example_role/meta/main.yml\uFF1A    roles\u6240\u6709\u4F9D\u8D56\u5C06\u88AB\u6B63\u5E38\u767B\u5165

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFArole" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFArole" aria-hidden="true">#</a> \u521B\u5EFArole</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u521B\u5EFArole\u7684\u6B65\u9AA4
(1) \u521B\u5EFA\u4EE5roles\u547D\u540D\u7684\u76EE\u5F55
(2) \u5728roles\u76EE\u5F55\u4E2D\u5206\u522B\u521B\u5EFA\u4EE5\u5404\u89D2\u8272\u540D\u79F0\u547D\u540D\u7684\u76EE\u5F55\uFF0C\u5982webservers\u7B49
(3) \u5728\u6BCF\u4E2A\u89D2\u8272\u547D\u540D\u7684\u76EE\u5F55\u4E2D\u5206\u522B\u521B\u5EFAfiles\u3001handlers\u3001meta\u3001tasks\u3001templates\u548Cvars\u76EE\u5F55\uFF1B
    \u7528\u4E0D\u5230\u7684\u76EE\u5F55\u53EF\u4EE5\u521B\u5EFA\u4E3A\u7A7A\u76EE\u5F55\uFF0C\u4E5F\u53EF\u4EE5\u4E0D\u521B\u5EFA
(4) \u5728playbook\u6587\u4EF6\u4E2D\uFF0C\u8C03\u7528\u5404\u89D2\u8272
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u9A8C-\u521B\u5EFAnginx\u89D2\u8272" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9A8C-\u521B\u5EFAnginx\u89D2\u8272" aria-hidden="true">#</a> \u5B9E\u9A8C: \u521B\u5EFAnginx\u89D2\u8272</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">1</span>.\u521B\u5EFAroles\u76EE\u5F55
   <span class="token function">mkdir</span> roles/<span class="token punctuation">{</span>httpd,mysql,redis<span class="token punctuation">}</span>/tasks <span class="token parameter variable">-pv</span>
   <span class="token function">mkdir</span>  roles/httpd/<span class="token punctuation">{</span>handlers,files<span class="token punctuation">}</span>
   
<span class="token number">2</span>.\u67E5\u770B\u76EE\u5F55\u7ED3\u6784
<span class="token punctuation">[</span>root@ansible ansible<span class="token punctuation">]</span><span class="token comment"># tree  roles/</span>
roles/
\u2514\u2500\u2500 nginx
    \u251C\u2500\u2500 tasks
    \u2514\u2500\u2500 templates
        
<span class="token number">3</span>.\u521B\u5EFA\u76EE\u6807\u6587\u4EF6
<span class="token punctuation">[</span>root@ansible ansible<span class="token punctuation">]</span><span class="token comment">#touch group.yaml user.yaml yum.yaml templates.yaml start.yaml</span>

<span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># vim group.yaml </span>
- name: create group 
  group: <span class="token assign-left variable">name</span><span class="token operator">=</span>nginx 

<span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># vim  user.yaml </span>
- name: create user 
  user: <span class="token assign-left variable">name</span><span class="token operator">=</span>nginx <span class="token assign-left variable">group</span><span class="token operator">=</span>nginx  <span class="token assign-left variable">shell</span><span class="token operator">=</span>/sbin/nologin

<span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># vim  yum.yaml </span>
- name: copy <span class="token function">file</span> 
  copy: <span class="token assign-left variable">src</span><span class="token operator">=</span>/etc/yum.repos.d/CentOS-Base.repo <span class="token assign-left variable">dest</span><span class="token operator">=</span>/etc/yum.repos.d/CentOS-Base.repo
- name: <span class="token function">install</span> packages 
  yum: <span class="token assign-left variable">name</span><span class="token operator">=</span>nginx 

<span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># vim templates.yaml </span>
- name:  copy conf 
  template: <span class="token assign-left variable">src</span><span class="token operator">=</span>nginx.conf.j2 <span class="token assign-left variable">dest</span><span class="token operator">=</span>/etc/nginx/nginx.conf 

<span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># vim start.yaml </span>
- name: start <span class="token function">service</span> 
  service: <span class="token assign-left variable">name</span><span class="token operator">=</span>nginx <span class="token assign-left variable">state</span><span class="token operator">=</span>started <span class="token assign-left variable">enabled</span><span class="token operator">=</span>yes

<span class="token number">4</span>.\u521B\u5EFAmain.yml\u4E3B\u63A7\u6587\u4EF6,\u8C03\u7528\u4EE5\u4E0A\u5355\u72EC\u7684yml\u6587\u4EF6,main.yml\u5B9A\u4E49\u4E86\u8C01\u5148\u6267\u884C\u8C01\u540E\u6267\u884C\u7684\u987A\u5E8F
<span class="token punctuation">[</span>root@ansible tasks<span class="token punctuation">]</span><span class="token comment"># vim main.yaml </span>
- include: group.yaml 
- include: user.yaml 
- include: yum.yaml 
- include: templates.yaml
- include: start.yaml 

<span class="token number">5</span>.\u521B\u5EFA\u597Dj2\u7684nginx\u914D\u7F6E\u6587\u4EF6
<span class="token punctuation">[</span>root@ansible nginx<span class="token punctuation">]</span><span class="token comment"># vim templates/nginx.conf.j2 </span>
<span class="token comment"># For more information on configuration, see:</span>
<span class="token comment">#   * Official English Documentation: http://nginx.org/en/docs/</span>
<span class="token comment">#   * Official Russian Documentation: http://nginx.org/ru/docs/</span>

user nginx<span class="token punctuation">;</span>
worker_processes <span class="token punctuation">{</span><span class="token punctuation">{</span>ansible_processor_vcpus+2<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">#\u6539\u4E2ACPU\u6570\u91CF</span>
error_log /var/log/nginx/error.log<span class="token punctuation">;</span>
pid /run/nginx.pid<span class="token punctuation">;</span>

<span class="token number">6</span>.\u5728roles\u540C\u7EA7\u7684\u60C5\u51B5\u4E0B\u521B\u5EFA\u4F7F\u7528\u89D2\u8272role\u7684yaml\u6587\u4EF6\u3002
<span class="token punctuation">[</span>root@ansible ansible<span class="token punctuation">]</span><span class="token comment"># vim nginx_role.yaml  </span>
- hosts: server 
  remote_user: root 
  roles: 
    - role: nginx  <span class="token comment">#\u8C03\u7528\u89D2\u8272</span>

<span class="token number">7</span>.\u67E5\u770B\u5B8C\u6574\u7684\u76EE\u5F55\u7ED3\u6784
<span class="token punctuation">[</span>root@ansible ansible<span class="token punctuation">]</span><span class="token comment"># tree  roles </span>
roles
\u251C\u2500\u2500 httpd
\u251C\u2500\u2500 memcache
\u251C\u2500\u2500 mysql
\u2514\u2500\u2500 nginx
    \u251C\u2500\u2500 tasks
    \u2502   \u251C\u2500\u2500 group.yaml
    \u2502   \u251C\u2500\u2500 main.yaml
    \u2502   \u251C\u2500\u2500 start.yaml
    \u2502   \u251C\u2500\u2500 templates.yaml
    \u2502   \u251C\u2500\u2500 user.yaml
    \u2502   \u2514\u2500\u2500 yum.yaml
    \u2514\u2500\u2500 templates
        \u2514\u2500\u2500 nginx.conf.j2

<span class="token number">8</span>.\u8FD0\u884Crole\u7684\u5267\u672C
<span class="token punctuation">[</span>root@ansible ansible<span class="token punctuation">]</span><span class="token comment"># ansible-playbook nginx_role.yaml </span>

PLAY <span class="token punctuation">[</span>server<span class="token punctuation">]</span> **********************************************************************************************************

TASK <span class="token punctuation">[</span>Gathering Facts<span class="token punctuation">]</span> *************************************************************************************************
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.107<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.106<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.105<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>nginx <span class="token builtin class-name">:</span> create group<span class="token punctuation">]</span> ********************************************************************************************
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.105<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.107<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.106<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>nginx <span class="token builtin class-name">:</span> create user<span class="token punctuation">]</span> *********************************************************************************************
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.105<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.107<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.106<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>nginx <span class="token builtin class-name">:</span> copy file<span class="token punctuation">]</span> ***********************************************************************************************
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.107<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.105<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.106<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>nginx <span class="token builtin class-name">:</span> <span class="token function">install</span> packages<span class="token punctuation">]</span> ****************************************************************************************
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.107<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.106<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.105<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>nginx <span class="token builtin class-name">:</span> copy conf<span class="token punctuation">]</span> ***********************************************************************************************
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.105<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.106<span class="token punctuation">]</span>
ok: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.107<span class="token punctuation">]</span>

TASK <span class="token punctuation">[</span>nginx <span class="token builtin class-name">:</span> start service<span class="token punctuation">]</span> *******************************************************************************************
changed: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.106<span class="token punctuation">]</span>
changed: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.107<span class="token punctuation">]</span>
changed: <span class="token punctuation">[</span><span class="token number">192.168</span>.1.105<span class="token punctuation">]</span>

PLAY RECAP *************************************************************************************************************
<span class="token number">192.168</span>.1.105              <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">7</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">skipped</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">rescued</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">ignored</span><span class="token operator">=</span><span class="token number">0</span>   
<span class="token number">192.168</span>.1.106              <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">7</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">skipped</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">rescued</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">ignored</span><span class="token operator">=</span><span class="token number">0</span>   
<span class="token number">192.168</span>.1.107              <span class="token builtin class-name">:</span> <span class="token assign-left variable">ok</span><span class="token operator">=</span><span class="token number">7</span>    <span class="token assign-left variable">changed</span><span class="token operator">=</span><span class="token number">1</span>    <span class="token assign-left variable">unreachable</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">failed</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">skipped</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">rescued</span><span class="token operator">=</span><span class="token number">0</span>    <span class="token assign-left variable">ignored</span><span class="token operator">=</span><span class="token number">0</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="roles\u591A\u89D2\u8272\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#roles\u591A\u89D2\u8272\u8C03\u7528" aria-hidden="true">#</a> roles\u591A\u89D2\u8272\u8C03\u7528</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">#\u8C03\u7528\u89D2\u8272\u65B9\u6CD51\uFF1A</span>
<span class="token punctuation">[</span>root@ansible ansible<span class="token punctuation">]</span><span class="token comment"># vim web.yaml </span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> server 
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root 

  <span class="token key atrule">roles</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> httpd 
    <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> nginx

<span class="token comment">#\u8C03\u7528\u89D2\u8272\u65B9\u6CD52</span>
\u4F20\u9012\u53D8\u91CF\u7ED9\u89D2\u8272
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span>
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span>
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> mysql
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> nginx<span class="token punctuation">,</span> <span class="token key atrule">username</span><span class="token punctuation">:</span> nginx <span class="token punctuation">}</span>   <span class="token comment">#\u4E0D\u540C\u7684\u89D2\u8272\u8C03\u7528\u4E0D\u540C\u7684\u53D8\u91CF  </span>
    \u952Erole\u7528\u4E8E\u6307\u5B9A\u89D2\u8272\u540D\u79F0
    \u540E\u7EED\u7684k/v\u7528\u4E8E\u4F20\u9012\u53D8\u91CF\u7ED9\u89D2\u8272

\u8C03\u7528\u89D2\u8272\u65B9\u6CD53\uFF1A\u8FD8\u53EF\u57FA\u4E8E\u6761\u4EF6\u6D4B\u8BD5\u5B9E\u73B0\u89D2\u8272\u8C03\u7528
<span class="token key atrule">roles</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> nginx<span class="token punctuation">,</span> <span class="token key atrule">username</span><span class="token punctuation">:</span> nginx<span class="token punctuation">,</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_distribution_major_version == &#39;7&#39; <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u901A\u8FC7roles\u4F20\u9012\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7roles\u4F20\u9012\u53D8\u91CF" aria-hidden="true">#</a> \u901A\u8FC7roles\u4F20\u9012\u53D8\u91CF</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>\u901A\u8FC7roles\u4F20\u9012\u53D8\u91CF
\u5F53\u7ED9\u4E00\u4E2A\u4E3B\u673A\u5E94\u7528\u89D2\u8272\u7684\u65F6\u5019\u53EF\u4EE5\u4F20\u9012\u53D8\u91CF\uFF0C\u7136\u540E\u5728\u89D2\u8272\u5185\u4F7F\u7528\u8FD9\u4E9B\u53D8\u91CF
\u793A\u4F8B\uFF1A
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webservers
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> common
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> foo_app_instance<span class="token punctuation">,</span> <span class="token key atrule">dir</span><span class="token punctuation">:</span> <span class="token string">&#39;/web/htdocs/a.com&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5411roles\u4F20\u9012\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5411roles\u4F20\u9012\u53C2\u6570" aria-hidden="true">#</a> \u5411roles\u4F20\u9012\u53C2\u6570</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>\u800C\u5728playbook\u4E2D\uFF0C\u53EF\u4EE5\u8FD9\u6837\u4F7F\u7528roles\uFF1A
<span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webservers
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> common
    <span class="token punctuation">-</span> webservers

\u4E5F\u53EF\u4EE5\u5411roles\u4F20\u9012\u53C2\u6570
\u793A\u4F8B\uFF1A
<span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webservers
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> common
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> foo_app_instance<span class="token punctuation">,</span> <span class="token key atrule">dir</span><span class="token punctuation">:</span> <span class="token string">&#39;/opt/a&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">5000</span> <span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> foo_app_instance<span class="token punctuation">,</span> <span class="token key atrule">dir</span><span class="token punctuation">:</span> <span class="token string">&#39;/opt/b&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">5001</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6761\u4EF6\u5F0F\u5730\u4F7F\u7528roles" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u5F0F\u5730\u4F7F\u7528roles" aria-hidden="true">#</a> \u6761\u4EF6\u5F0F\u5730\u4F7F\u7528roles</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>\u751A\u81F3\u4E5F\u53EF\u4EE5\u6761\u4EF6\u5F0F\u5730\u4F7F\u7528roles
\u793A\u4F8B\uFF1A
<span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webservers
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> some_role<span class="token punctuation">,</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> <span class="token string">&quot;ansible_os_family == &#39;RedHat&#39;&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="roles\u6761\u4EF6\u53CA\u53D8\u91CF\u7B49\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#roles\u6761\u4EF6\u53CA\u53D8\u91CF\u7B49\u6848\u4F8B" aria-hidden="true">#</a> Roles\u6761\u4EF6\u53CA\u53D8\u91CF\u7B49\u6848\u4F8B</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>When\u6761\u4EF6
    <span class="token key atrule">roles</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token punctuation">{</span><span class="token key atrule">role</span><span class="token punctuation">:</span> nginx<span class="token punctuation">,</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> <span class="token string">&quot;ansible_distribution_major_version == &#39;7&#39; &quot;</span> <span class="token punctuation">,</span><span class="token key atrule">username</span><span class="token punctuation">:</span> nginx <span class="token punctuation">}</span>
\u53D8\u91CF\u8C03\u7528
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> zabbix<span class="token punctuation">-</span>proxy
  <span class="token key atrule">sudo</span><span class="token punctuation">:</span> yes
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> geerlingguy.php<span class="token punctuation">-</span>mysql <span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> dj<span class="token punctuation">-</span>wasabi.zabbix<span class="token punctuation">-</span>proxy<span class="token punctuation">,</span> <span class="token key atrule">zabbix_server_host</span><span class="token punctuation">:</span> 192.168.37.167 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B8C\u6574\u7684roles\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#\u5B8C\u6574\u7684roles\u67B6\u6784" aria-hidden="true">#</a> \u5B8C\u6574\u7684roles\u67B6\u6784</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>// nginx<span class="token punctuation">-</span>role.yml \u9876\u5C42\u4EFB\u52A1\u8C03\u7528yml\u6587\u4EF6
<span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> testweb
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> nginx
    <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> httpd \u53EF\u6267\u884C\u591A\u4E2Arole

cat roles/nginx/tasks/main.yml
<span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> groupadd.yml
<span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> useradd.yml
<span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> install.yml
<span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> restart.yml
<span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> filecp.yml

// roles/nginx/tasks/groupadd.yml
<span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> add group nginx
  <span class="token key atrule">user</span><span class="token punctuation">:</span> name=nginx state=present

cat roles/nginx/tasks/filecp.yml
<span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> file copy
  <span class="token key atrule">copy</span><span class="token punctuation">:</span> src=tom.conf dest=/tmp/tom.conf

\u4EE5\u4E0B\u6587\u4EF6\u683C\u5F0F\u7C7B\u4F3C\uFF1A
useradd.yml<span class="token punctuation">,</span>install.yml<span class="token punctuation">,</span>restart.yml

ls roles/nginx/files/
tom.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="roles-playbook-tags\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#roles-playbook-tags\u4F7F\u7528" aria-hidden="true">#</a> roles playbook tags\u4F7F\u7528</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>roles playbook tags\u4F7F\u7528
    ansible<span class="token punctuation">-</span>playbook <span class="token punctuation">-</span><span class="token punctuation">-</span>tags=&quot;nginx<span class="token punctuation">,</span>httpd<span class="token punctuation">,</span>mysql&quot; nginx<span class="token punctuation">-</span>role.yml  \u5BF9\u6807\u7B7E\u8FDB\u884C\u6311\u9009\u6267\u884C

// nginx<span class="token punctuation">-</span>role.yml
<span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> testweb
  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root
  <span class="token key atrule">roles</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> nginx <span class="token punctuation">,</span><span class="token key atrule">tags</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;nginx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;web&#39;</span> <span class="token punctuation">]</span> <span class="token punctuation">,</span><span class="token key atrule">when</span><span class="token punctuation">:</span> ansible_distribution_major_version == &quot;6\u201C <span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> httpd <span class="token punctuation">,</span><span class="token key atrule">tags</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;httpd&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;web&#39;</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> mysql <span class="token punctuation">,</span><span class="token key atrule">tags</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;mysql&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;db&#39;</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> marridb <span class="token punctuation">,</span><span class="token key atrule">tags</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;mysql&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;db&#39;</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span>
    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> php <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u9A8C-\u521B\u5EFA\u89D2\u8272memcached" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u9A8C-\u521B\u5EFA\u89D2\u8272memcached" aria-hidden="true">#</a> \u5B9E\u9A8C: \u521B\u5EFA\u89D2\u8272memcached</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>memcacched \u5F53\u505A\u7F13\u5B58\u7528<span class="token punctuation">,</span>\u4F1A\u5728\u5185\u5B58\u4E2D\u5F00\u542F\u4E00\u5757\u7A7A\u95F4\u5145\u5F53\u7F13\u5B58
cat /etc/sysconfig/memcached 
    PORT=&quot;11211&quot;
    USER=&quot;memcached&quot;
    MAXCONN=&quot;1024&quot;
    CACHESIZE=&quot;64&quot;    <span class="token comment"># \u7F13\u5B58\u7A7A\u95F4\u9ED8\u8BA464M </span>
    OPTIONS=&quot;&quot;

1<span class="token punctuation">&gt;</span> \u521B\u5EFA\u5BF9\u7528\u76EE\u5F55
   cd /app/ansible
   mkdir roles/memcached/<span class="token punctuation">{</span>tasks<span class="token punctuation">,</span>templates<span class="token punctuation">}</span> <span class="token punctuation">-</span>pv
   
2<span class="token punctuation">&gt;</span> \u62F7\u8D1Dmemcached\u914D\u7F6E\u6587\u4EF6\u6A21\u677F
   cp /etc/sysconfig/memcached  templates/memcached.j2
   vim templates/memcached.j2
   CACHESIZE=&quot;<span class="token punctuation">{</span><span class="token punctuation">{</span>ansible_memtotal_mb//4<span class="token punctuation">}</span><span class="token punctuation">}</span>&quot;   <span class="token comment">#\u7269\u7406\u5185\u5B58\u76841/4\u7528\u505A\u7F13\u5B58</span>
   
3<span class="token punctuation">&gt;</span> \u521B\u5EFA\u5BF9\u5E94yml\u6587\u4EF6<span class="token punctuation">,</span>\u5E76\u505A\u76F8\u5E94\u914D\u7F6E
   cd tasks/
   touch install.yml config.yml service.yml
   \u521B\u5EFAmain.yml\u6587\u4EF6\u5B9A\u4E49\u4EFB\u52A1\u6267\u884C\u987A\u5E8F
   vim main.yml
   <span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> install.yml
   <span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> config.yml
   <span class="token punctuation">-</span> <span class="token key atrule">include</span><span class="token punctuation">:</span> service.yml  
   
   vim install.yml
   <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install 
     <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=memcached
     
   vim config.yml
   <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config file
     <span class="token key atrule">template</span><span class="token punctuation">:</span> src=memcached.j2 dets=/etc/sysconfig/memcached

   vim service.yml
   <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> service
     <span class="token key atrule">service</span><span class="token punctuation">:</span> name=memcached state=started enabled=yes

4<span class="token punctuation">&gt;</span> \u521B\u5EFA\u8C03\u7528\u89D2\u8272\u6587\u4EF6
   cd /app/ansible/roles/
   vim role_memcached.yml
    <span class="token punctuation">---</span>
    <span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> appsrvs
    
      <span class="token key atrule">roles</span><span class="token punctuation">:</span> 
        <span class="token punctuation">-</span> <span class="token key atrule">role</span><span class="token punctuation">:</span> memcached

5<span class="token punctuation">&gt;</span> \u5B89\u88C5
   ansible<span class="token punctuation">-</span>playbook  role_memcached.yml 
   memcached\u7AEF\u53E3\u53F711211
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5176\u5B83\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5176\u5B83\u529F\u80FD" aria-hidden="true">#</a> \u5176\u5B83\u529F\u80FD</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u59D4\u4EFB\uFF08\u6307\u5B9A\u67D0\u4E00\u53F0\u673A\u5668\u505A\u67D0\u4E00\u4E2Atask\uFF09
    delegate_to
    local_action (\u4E13\u6307\u9488\u5BF9ansible\u547D\u4EE4\u6267\u884C\u7684\u673A\u5668\u505A\u7684\u53D8\u66F4\u64CD\u4F5C)
\u4EA4\u4E92\u63D0\u793A
    prompt
*\u6682\u505C\uFF08java\uFF09
    wait_for
Debug
    debug: msg=&quot;This always executes.&quot;
Include
Template \u591A\u503C\u5408\u5E76
Template \u52A8\u6001\u53D8\u91CF\u914D\u7F6E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),t=[i];function p(c,o){return s(),a("div",null,t)}const d=n(l,[["render",p],["__file","4.html.vue"]]);export{d as default};
