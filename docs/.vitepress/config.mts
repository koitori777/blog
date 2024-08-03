import { defineConfig } from "vitepress";
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog/",
  title: "koitori777",
  outDir: "../dist",
  description:
    "A personal blog about programming, web development, and other stuff.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "导航", link: "/" },
      { text: "笔记", link: "/notes/cross-site" },
      {
        text: "踩坑记录",
        items: [{ text: "vitepress踩坑", link: "/pitfall/vitepress" }],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/koitori777" }],
    aside: true,
    outline: {
      label: "目录",
    },
  },
  vite: {
    plugins: [
      AutoSidebar({
        titleFromFile: true,
        ignoreList: ["components"],
      }),
    ],
  },
});
