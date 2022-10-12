import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as e}from"./app.ca0279c0.js";const i={},l=e(`<h1 id="\u4F7F\u7528virt-install\u5B89\u88C5\u865A\u62DF\u673A" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528virt-install\u5B89\u88C5\u865A\u62DF\u673A" aria-hidden="true">#</a> \u4F7F\u7528virt-install\u5B89\u88C5\u865A\u62DF\u673A</h1><h3 id="\u547D\u4EE4\u53C2\u6570\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u53C2\u6570\u53C2\u8003" aria-hidden="true">#</a> \u547D\u4EE4\u53C2\u6570\u53C2\u8003</h3><ul><li>\u901A\u8FC7\u672C\u5730\u7684iso\u6587\u4EF6\u6765\u8FDB\u884C\u5B89\u88C5</li><li>Kickstart\u5B89\u88C5</li><li>\u7F51\u7EDC\u5B89\u88C5</li><li>PXE\u5B89\u88C5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@Dell ~<span class="token punctuation">]</span><span class="token comment"># virt-install --help</span>
usage: virt-install <span class="token parameter variable">--name</span> NAME <span class="token parameter variable">--memory</span> MB STORAGE INSTALL <span class="token punctuation">[</span>options<span class="token punctuation">]</span>

\u4ECE\u6307\u5B9A\u5B89\u88C5\u6E90\u521B\u5EFA\u65B0\u865A\u62DF\u673A\u3002

optional arguments:
  -h, <span class="token parameter variable">--help</span>            show this <span class="token builtin class-name">help</span> message and <span class="token builtin class-name">exit</span>
  <span class="token parameter variable">--version</span>             show program<span class="token string">&#39;s version number and exit
  --connect URI         \u901A\u8FC7 libvirt URI \u8FDE\u63A5\u5230\u865A\u62DF\u673A\u7BA1\u7406\u7A0B\u5E8F

\u901A\u7528\u9009\u9879:
  -n NAME, --name NAME  \u5BA2\u6237\u673A\u5B9E\u4F8B\u540D\u79F0
  --memory MEMORY         Configure guest memory allocation. Ex:
                        --memory 1024 (in MiB)
                        --memory 512,maxmemory=1024
                        --memory 512,maxmemory=1024,hotplugmemorymax=2048,hotplugmemoryslots=2
  --vcpus VCPUS         \u914D\u7F6E\u5BA2\u6237\u673A\u865A\u62DF CPU(vcpu) \u6570\u91CF\u3002\u4F8B\u5982\uFF1A
                        --vcpus 5
                        --vcpus 5,maxcpus=10,cpuset=1-4,6,8
                        --vcpus sockets=2,cores=4,threads=2
  --cpu CPU             CPU model and features. Ex:
                        --cpu coreduo,+x2apic
                        --cpu host-passthrough
                        --cpu host
  --metadata METADATA   \u914D\u7F6E\u5BA2\u6237\u673A\u5143\u6570\u636E\u3002\u4F8B\u5982\uFF1A
                        --metadata name=foo,title=&quot;My pretty title&quot;,uuid=...
                        --metadata description=&quot;My nice long description&quot;

\u5B89\u88C5\u65B9\u6CD5\u9009\u9879:
  --cdrom CDROM         \u5149\u9A71\u5B89\u88C5\u4ECB\u8D28
  -l LOCATION, --location LOCATION
                        \u5B89\u88C5\u6E90 (\u4F8B\u5982\uFF1Anfs:host:/path, http://host/path,
                        ftp://host/path)
  --pxe                 \u4F7F\u7528 PXE \u534F\u8BAE\u4ECE\u7F51\u7EDC\u5F15\u5BFC
  --import              \u5728\u5DF2\u6709\u7684\u78C1\u76D8\u955C\u50CF\u4E2D\u6784\u5EFA\u5BA2\u6237\u673A
  --livecd              \u5C06\u5149\u9A71\u4ECB\u8D28\u89C6\u4E3A Live CD
  -x EXTRA_ARGS, --extra-args EXTRA_ARGS
                        \u5C06\u9644\u52A0\u53C2\u6570\u6DFB\u52A0\u5230\u7531 --location
                        \u5F15\u5BFC\u7684\u5185\u6838\u4E2D
  --initrd-inject INITRD_INJECT
                        \u6DFB\u52A0\u6307\u5B9A\u6587\u4EF6\u5230\u7531 --location \u6307\u5B9A\u7684 initrd
                        \u6839\u4E2D
  --os-variant DISTRO_VARIANT
                        \u5728\u5BA2\u6237\u673A\u4E0A\u5B89\u88C5\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u4F8B\u5982\uFF1A&#39;</span>fedor
                        a18<span class="token string">&#39;\u3001&#39;</span>rhel6<span class="token string">&#39;\u3001&#39;</span>winxp<span class="token string">&#39; \u7B49\u3002
  --boot BOOT           \u914D\u7F6E\u5BA2\u6237\u673A\u5F15\u5BFC\u8BBE\u7F6E\u3002\u4F8B\u5982\uFF1A
                        --boot hd,cdrom,menu=on
                        --boot init=/sbin/init (\u9488\u5BF9\u5BB9\u5668)
  --idmap IDMAP         \u4E3A LXC \u5BB9\u5668\u542F\u7528\u7528\u6237\u540D\u79F0\u7A7A\u95F4\u3002\u4F8B\u5982\uFF1A
                        --idmap uid_start=0,uid_target=1000,uid_count=10

\u8BBE\u5907\u9009\u9879:
  --disk DISK           \u6307\u5B9A\u5B58\u50A8\u7684\u5404\u79CD\u9009\u9879\u3002\u4F8B\u5982\uFF1A
                        --disk size=10 (\u5728\u9ED8\u8BA4\u4F4D\u7F6E\u521B\u5EFA 10GiB \u955C\u50CF)
                        --disk /my/existing/disk,cache=none
                        --disk device=cdrom,bus=scsi
                        --disk=?
  -w NETWORK, --network NETWORK
                        \u914D\u7F6E\u5BA2\u6237\u673A\u7F51\u7EDC\u63A5\u53E3\u3002\u4F8B\u5982\uFF1A
                        --network bridge=mybr0
                        --network network=my_libvirt_virtual_net
                        --network network=mynet,model=virtio,mac=00:11...
                        --network none
                        --network help
  --graphics GRAPHICS   \u914D\u7F6E\u5BA2\u6237\u673A\u663E\u793A\u8BBE\u7F6E\u3002\u4F8B\u5982\uFF1A
                        --graphics vnc
                        --graphics spice,port=5901,tlsport=5902
                        --graphics none
                        --graphics vnc,password=foobar,port=5910,keymap=ja
  --controller CONTROLLER
                        \u914D\u7F6E\u5BA2\u6237\u673A\u63A7\u5236\u5668\u8BBE\u5907\u3002\u4F8B\u5982\uFF1A
                        --controller type=usb,model=ich9-ehci1
  --input INPUT         \u914D\u7F6E\u5BA2\u6237\u673A\u8F93\u5165\u8BBE\u5907\u3002\u4F8B\u5982\uFF1A
                        --input tablet
                        --input keyboard,bus=usb
  --serial SERIAL       \u914D\u7F6E\u5BA2\u6237\u673A\u4E32\u53E3\u8BBE\u5907
  --parallel PARALLEL   \u914D\u7F6E\u5BA2\u6237\u673A\u5E76\u53E3\u8BBE\u5907
  --channel CHANNEL     \u914D\u7F6E\u5BA2\u6237\u673A\u901A\u4FE1\u901A\u9053
  --console CONSOLE     \u914D\u7F6E\u6587\u672C\u63A7\u5236\u53F0\u8FDE\u63A5\u4E3B\u673A\u4E0E\u5BA2\u6237\u673A
  --hostdev HOSTDEV     \u914D\u7F6E\u7269\u7406 USB/PCI \u7B49\u4E3B\u673A\u8BBE\u5907\u4E0E\u5BA2\u6237\u673A\u5171\u4EAB
  --filesystem FILESYSTEM
                        \u4F20\u9012\u4E3B\u673A\u76EE\u5F55\u5230\u5BA2\u6237\u673A\u3002\u4F8B\u5982\uFF1A
                        --filesystem /my/source/dir,/dir/in/guest
                        --filesystem template_name,/,type=template
  --sound [SOUND]       \u914D\u7F6E\u5BA2\u6237\u673A\u58F0\u97F3\u8BBE\u5907\u4EFF\u771F
  --watchdog WATCHDOG   \u914D\u7F6E\u5BA2\u6237\u673A watchdog \u8BBE\u5907
  --video VIDEO         \u914D\u7F6E\u5BA2\u6237\u673A\u89C6\u9891\u786C\u4EF6\u3002
  --smartcard SMARTCARD
                        \u914D\u7F6E\u5BA2\u6237\u673A\u667A\u80FD\u5361\u8BBE\u5907\u3002\u4F8B\u5982\uFF1A
                        --smartcard mode=passthrough
  --redirdev REDIRDEV   \u914D\u7F6E\u5BA2\u6237\u673A\u91CD\u5B9A\u5411\u8BBE\u5907\u3002\u4F8B\u5982\uFF1A
                        --redirdev usb,type=tcp,server=192.168.1.1:4000
  --memballoon MEMBALLOON
                        \u914D\u7F6E\u5BA2\u6237\u673A memballoon \u8BBE\u5907\u3002\u4F8B\u5982\uFF1A
                        --memballoon model=virtio
  --tpm TPM             \u914D\u7F6E\u5BA2\u6237\u673A TPM \u8BBE\u5907\u3002\u4F8B\u5982\uFF1A
                        --tpm /dev/tpm
  --rng RNG             Configure a guest RNG device. Ex:
                        --rng /dev/urandom
  --panic PANIC         \u914D\u7F6E\u5BA2\u6237\u673A panic \u8BBE\u5907\u3002\u4F8B\u5982\uFF1A
                        --panic default
  --memdev MEMDEV       Configure a guest memory device. Ex:
                        --memdev dimm,target_size=1024

\u5BA2\u6237\u673A\u914D\u7F6E\u9009\u9879:
  --security SECURITY   \u8BBE\u7F6E\u57DF\u5B89\u5168\u9A71\u52A8\u914D\u7F6E\u3002
  --cputune CPUTUNE     Tune CPU parameters for the domain process.
  --numatune NUMATUNE   \u4E3A\u57DF\u8FDB\u7A0B\u8C03\u6574 NUMA \u7B56\u7565\u3002
  --memtune MEMTUNE     \u4E3A\u57DF\u8FDB\u7A0B\u8C03\u6574\u5185\u5B58\u7B56\u7565\u3002
  --blkiotune BLKIOTUNE
                        \u4E3A\u57DF\u8FDB\u7A0B\u8C03\u6574 blkio \u7B56\u7565\u3002
  --memorybacking MEMORYBACKING
                        \u4E3A\u57DF\u8FDB\u7A0B\u8BBE\u7F6E\u5185\u5B58\u540E\u5907\u7B56\u7565\u3002\u4F8B\u5982\uFF1A
                        --memorybacking hugepages=on
  --features FEATURES   \u8BBE\u7F6E\u57DF &lt;features&gt; XML\u3002\u4F8B\u5982\uFF1A
                        --features acpi=off
                        --features apic=on,eoi=on
  --clock CLOCK         \u8BBE\u7F6E\u57DF &lt;clock&gt; XML\u3002\u4F8B\u5982\uFF1A
                        --clock offset=localtime,rtc_tickpolicy=catchup
  --pm PM               \u914D\u7F6E VM \u7535\u6E90\u7BA1\u7406\u529F\u80FD
  --events EVENTS       \u914D\u7F6E VM \u751F\u547D\u5468\u671F\u7BA1\u7406\u7B56\u7565
  --resource RESOURCE   \u914D\u7F6E VM \u8D44\u6E90\u5206\u533A(cgroups)
  --sysinfo SYSINFO     Configure SMBIOS System Information. Ex:
                        --sysinfo emulate
                        --sysinfo host
                        --sysinfo bios_vendor=Vendor_Inc.,bios_version=1.2.3-abc,...
                        --sysinfo system_manufacturer=System_Corp.,system_product=Computer,...
                        --sysinfo baseBoard_manufacturer=Baseboard_Corp.,baseBoard_product=Motherboard,...
  --qemu-commandline QEMU_COMMANDLINE
                        Pass arguments directly to the qemu emulator. Ex:
                        --qemu-commandline=&#39;</span><span class="token parameter variable">-display</span> gtk,gl<span class="token operator">=</span>on&#39;
                        --qemu-commandline <span class="token assign-left variable">env</span><span class="token operator">=</span><span class="token environment constant">DISPLAY</span><span class="token operator">=</span>:0.1

\u865A\u62DF\u5316\u5E73\u53F0\u9009\u9879:
  -v, <span class="token parameter variable">--hvm</span>                \u8FD9\u4E2A\u5BA2\u6237\u673A\u5E94\u8BE5\u662F\u4E00\u4E2A\u5168\u865A\u62DF\u5316\u5BA2\u6237\u673A
  -p, <span class="token parameter variable">--paravirt</span>          \u8FD9\u4E2A\u5BA2\u6237\u673A\u5E94\u8BE5\u662F\u4E00\u4E2A\u534A\u865A\u62DF\u5316\u5BA2\u6237\u673A
  <span class="token parameter variable">--container</span>             \u8FD9\u4E2A\u5BA2\u6237\u673A\u5E94\u8BE5\u662F\u4E00\u4E2A\u5BB9\u5668\u5BA2\u6237\u673A
  --virt-type HV_TYPE   \u8981\u4F7F\u7528\u7684\u7BA1\u7406\u7A0B\u5E8F\u540D\u79F0 <span class="token punctuation">(</span>kvm, qemu, xen, <span class="token punctuation">..</span>.<span class="token punctuation">)</span>
  <span class="token parameter variable">--arch</span> ARCH           \u6A21\u62DF CPU \u67B6\u6784
  <span class="token parameter variable">--machine</span> MACHINE     \u673A\u5668\u7C7B\u578B\u4E3A\u4EFF\u771F\u7C7B\u578B

\u5176\u5B83\u9009\u9879:
  <span class="token parameter variable">--autostart</span>           \u4E3B\u673A\u542F\u52A8\u65F6\u81EA\u52A8\u542F\u52A8\u57DF\u3002
  <span class="token parameter variable">--transient</span>           Create a transient domain.
  <span class="token parameter variable">--wait</span> WAIT           \u8BF7\u7B49\u5F85\u6570\u5206\u949F\u4EE5\u4FBF\u5B8C\u6210\u5B89\u88C5\u3002
  <span class="token parameter variable">--noautoconsole</span>       \u4E0D\u8981\u81EA\u52A8\u5C1D\u8BD5\u8FDE\u63A5\u5230\u5BA2\u6237\u7AEF\u63A7\u5236\u53F0
  <span class="token parameter variable">--noreboot</span>            \u5B89\u88C5\u5B8C\u6210\u540E\u4E0D\u542F\u52A8\u5BA2\u6237\u673A\u3002
  --print-xml <span class="token punctuation">[</span>XMLONLY<span class="token punctuation">]</span>
                        \u6253\u5370\u751F\u6210\u7684 XML \u57DF\uFF0C\u800C\u4E0D\u662F\u521B\u5EFA\u5BA2\u6237\u673A\u3002
  --dry-run             \u8FD0\u884C\u5B89\u88C5\u7A0B\u5E8F\uFF0C\u4F46\u4E0D\u521B\u5EFA\u8BBE\u5907\u6216\u5B9A\u4E49\u5BA2\u6237
                        \u673A\u3002
  <span class="token parameter variable">--check</span> CHECK         \u542F\u7528\u6216\u7981\u7528\u9A8C\u8BC1\u68C0\u67E5\u3002\u4F8B\u5982\uFF1A
                        <span class="token parameter variable">--check</span> <span class="token assign-left variable">path_in_use</span><span class="token operator">=</span>off
                        <span class="token parameter variable">--check</span> <span class="token assign-left variable">all</span><span class="token operator">=</span>off
  -q, <span class="token parameter variable">--quiet</span>           \u6291\u5236\u975E\u9519\u8BEF\u8F93\u51FA
  -d, <span class="token parameter variable">--debug</span>           \u8F93\u5165\u6545\u969C\u6392\u9664\u4FE1\u606F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6743\u9650\u8C03\u6574" tabindex="-1"><a class="header-anchor" href="#\u6743\u9650\u8C03\u6574" aria-hidden="true">#</a> \u6743\u9650\u8C03\u6574</h3><p>\u5C06user\u548Cgroup\u524D\u9762\u7684#\u53BB\u6389\uFF0C\u8BA9root\u7528\u6237\u53EF\u4EE5\u64CD\u4F5C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@Dell ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/libvirt/qemu.conf</span>

<span class="token comment"># Some examples of valid values are:</span>
<span class="token comment">#</span>
<span class="token comment">#       user = &quot;qemu&quot;   # A user named &quot;qemu&quot;</span>
<span class="token comment">#       user = &quot;+0&quot;     # Super user (uid=0)</span>
<span class="token comment">#       user = &quot;100&quot;    # A user named &quot;100&quot; or a user with uid=100</span>
<span class="token comment">#</span>
user <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span>

<span class="token comment"># The group for QEMU processes run by the system instance. It can be</span>
<span class="token comment"># specified in a similar way to user.</span>
group <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u91CD\u542Flibvirtd\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u91CD\u542Flibvirtd\u670D\u52A1" aria-hidden="true">#</a> \u91CD\u542Flibvirtd\u670D\u52A1</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@Dell ~<span class="token punctuation">]</span><span class="token comment"># systemctl daemon-reload        //\u91CD\u8F7D\u914D\u7F6E</span>
<span class="token punctuation">[</span>root@Dell ~<span class="token punctuation">]</span><span class="token comment"># systemctl restart libvirtd        //\u91CD\u542Flibvirtd\u670D\u52A1</span>
<span class="token punctuation">[</span>root@Dell ~<span class="token punctuation">]</span><span class="token comment"># systemctl status libvirtd        //\u67E5\u770Blibvirtd\u670D\u52A1\u72B6\u6001</span>
\u25CF libvirtd.service - Virtualization daemon
   Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/libvirtd.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> vendor preset: enabled<span class="token punctuation">)</span>
   Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since \u4E8C <span class="token number">2019</span>-04-23 <span class="token number">16</span>:00:47 CST<span class="token punctuation">;</span> 7s ago
     Docs: man:libvirtd<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
           https://libvirt.org
 Main PID: <span class="token number">23595</span> <span class="token punctuation">(</span>libvirtd<span class="token punctuation">)</span>
    Tasks: <span class="token number">19</span> <span class="token punctuation">(</span>limit: <span class="token number">32768</span><span class="token punctuation">)</span>
   CGroup: /system.slice/libvirtd.service
           \u251C\u2500 <span class="token number">5716</span> /usr/sbin/dnsmasq --conf-file<span class="token operator">=</span>/var/lib/libvirt/dnsmasq/default.conf --leasefile-ro --dhcp-script<span class="token operator">=</span>/usr/libexec/libvirt_<span class="token punctuation">..</span>.
           \u251C\u2500 <span class="token number">5717</span> /usr/sbin/dnsmasq --conf-file<span class="token operator">=</span>/var/lib/libvirt/dnsmasq/default.conf --leasefile-ro --dhcp-script<span class="token operator">=</span>/usr/libexec/libvirt_<span class="token punctuation">..</span>.
           \u2514\u250023595 /usr/sbin/libvirtd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u955C\u50CF\u6587\u4EF6\u5B58\u653E" tabindex="-1"><a class="header-anchor" href="#\u955C\u50CF\u6587\u4EF6\u5B58\u653E" aria-hidden="true">#</a> \u955C\u50CF\u6587\u4EF6\u5B58\u653E</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@Dell ~<span class="token punctuation">]</span><span class="token comment"># mkdir images</span>

<span class="token punctuation">[</span>root@Dell ~<span class="token punctuation">]</span><span class="token comment"># cd images/</span>

<span class="token punctuation">[</span>root@Dell ~<span class="token punctuation">]</span><span class="token comment">#ls</span>
rhel-8.0-x86_64-dvd.iso
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5\u865A\u62DF\u673A" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u865A\u62DF\u673A" aria-hidden="true">#</a> \u5B89\u88C5\u865A\u62DF\u673A</h3><blockquote><p><strong>\u7528cdrom\u5F15\u5BFC\u5B89\u88C5\u865A\u62DF\u673A</strong></p></blockquote><ol><li><h5 id="\u521B\u5EFA\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u955C\u50CF" aria-hidden="true">#</a> \u521B\u5EFA\u955C\u50CF</h5></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost images<span class="token punctuation">]</span><span class="token comment"># qemu-img create -f qcow2 vm1-disk1.qcow2 10G</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li><h5 id="\u521B\u5EFA\u865A\u62DF\u673A" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u865A\u62DF\u673A" aria-hidden="true">#</a> \u521B\u5EFA\u865A\u62DF\u673A</h5></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost images<span class="token punctuation">]</span><span class="token comment"># virt-install \\</span>
        <span class="token parameter variable">--name</span><span class="token operator">=</span>redhat  <span class="token punctuation">\\</span>
        <span class="token parameter variable">--disk</span> <span class="token assign-left variable">path</span><span class="token operator">=</span>/root/images/vm1-disk1.qcow2  <span class="token punctuation">\\</span>
        <span class="token parameter variable">--vcpus</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">--ram</span><span class="token operator">=</span><span class="token number">1024</span> <span class="token punctuation">\\</span>
        <span class="token parameter variable">--cdrom</span><span class="token operator">=</span>/root/images/rhel-8.0-x86_64-dvd.iso  <span class="token punctuation">\\</span>
        <span class="token parameter variable">--network</span> <span class="token assign-left variable">network</span><span class="token operator">=</span>default  <span class="token punctuation">\\</span>     <span class="token parameter variable">--netwoek</span> <span class="token assign-left variable">bridge</span><span class="token operator">=</span>br0\uFF0Cmodel<span class="token operator">=</span>virtio <span class="token punctuation">\\</span>
        <span class="token parameter variable">--graphics</span> vnc,listen<span class="token operator">=</span><span class="token number">0.0</span>.0.0 <span class="token punctuation">\\</span>
        --os-type<span class="token operator">=</span>linux  <span class="token punctuation">\\</span>
        --os-variant rhel8.0  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u67E5\u770B\u865A\u62DF\u673A\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u865A\u62DF\u673A\u72B6\u6001" aria-hidden="true">#</a> \u67E5\u770B\u865A\u62DF\u673A\u72B6\u6001</h3><p><img src="https://pic1.xuehuaimg.com/proxy/raw.githubusercontent.com/2756864799zhang/image/main/img/202204111248598.png" alt="img" loading="lazy"></p>`,19),r=[l];function t(d,c){return s(),a("div",null,r)}const p=n(i,[["render",t],["__file","5.html.vue"]]);export{p as default};
