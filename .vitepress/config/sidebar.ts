// sidebar.ts
import type { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/guide/": [
    {
      text: "Guide",
      collapsed: false,
      items: [
        { text: "了解", link: "/guide/start" },
        { text: "下载", link: "/guide/download" },
        { text: "使用", link: "/guide/use" },
      ],
    },
    {
      text: "Customize",
      collapsed: false,
      items: [
        { text: "自定义开发", link: "/guide/Customize.md" },
        { text: "JSON配置模块", link: "/guide/Json.md" },
        { text: "CPU混合调频器", link: "/guide/CpuGovernor.md" },
        { text: "ThreadSchedOpt线程调度优化 ", link: "/guide/ThreadSchedOpt.md" },
        { text: "联发科GPU调频器 ", link: "/guide/MtkGpuGovernor.md" },
        { text: "Trigger场景触写入模块", link: "/guide/Trigger.md" },
        { text: "Thermal温度过载保护模块", link: "/guide/Thermal.md" },
      ],
    },
  ],
};
