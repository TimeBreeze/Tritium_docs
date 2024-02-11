import{_ as e,c as t,o as d,V as a}from"./chunks/framework.2N2G9keA.js";const u=JSON.parse('{"title":"线程调度优化","titleTemplate":"Tritium_docs","description":"","frontmatter":{"title":"线程调度优化","layout":"doc","titleTemplate":"Tritium_docs"},"headers":[],"relativePath":"guide/ThreadSchedOpt.md","filePath":"guide/ThreadSchedOpt.md","lastUpdated":1707656858000}'),r={name:"guide/ThreadSchedOpt.md"},c=a('<h3 id="threadschedopt-线程调度优化" tabindex="-1">ThreadSchedOpt - 线程调度优化 <a class="header-anchor" href="#threadschedopt-线程调度优化" aria-label="Permalink to &quot;ThreadSchedOpt - 线程调度优化&quot;">​</a></h3><blockquote><p>此模块通过智能分类线程来实现较为合理的线程调度策略</p></blockquote><p>ThreadSchedOpt模块基于线程名称和CPU占用等数据分类前台线程, 组别如下:<br><code>GameRenderThread</code>分组: 包含游戏程序中负责画面渲染的相关线程.<br><code>GameMainThread</code>分组: 包含游戏程序中的主线程.<br><code>GameProcessThread</code>分组: 包含游戏程序中负责数据处理的相关线程.<br><code>UIThread</code>分组: 包含应用程序中参与渲染用户界面的相关线程.<br><code>MediaThread</code>分组: 包含应用程序中负责媒体（例如音频/视频解码）的相关线程.<br><code>WebViewThread</code>分组: 包含应用程序中WebView组件的相关线程.<br><code>ProcessThread</code>分组: 包含应用程序中负责数据处理的相关线程.<br><code>CoProcessThread</code>分组: 包含应用程序中负责辅助处理的相关线程.<br><code>JunkThread</code>分组: 包含应用程序中负责日志记录和性能追踪等功能的垃圾线程.<br><code>Initial</code>分组: 初始状态.</p><table><thead><tr><th style="text-align:left;">字段</th><th style="text-align:left;">类型</th><th style="text-align:left;">定义</th></tr></thead><tbody><tr><td style="text-align:left;">cpus</td><td style="text-align:left;">ArrayInt</td><td style="text-align:left;">此分组的cpu亲和性设定</td></tr><tr><td style="text-align:left;">nice</td><td style="text-align:left;">int</td><td style="text-align:left;">此分组的调度优先级(范围:-20~19)</td></tr></tbody></table><p>cpu亲和性设定即为限制线程仅能在指定的CPU核心上运行, 例如<code>&quot;cpus&quot;: [0, 1]</code>将限制线程仅能运行在CPU0, CPU1上.<br> 调度优先级与系统调度nice值定义相同, 范围为-20~19,数字越小优先级越高.</p>',5),o=[c];function l(h,i,s,n,p,_){return d(),t("div",null,o)}const b=e(r,[["render",l]]);export{u as __pageData,b as default};