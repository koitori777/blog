import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog/",
  title: "koitori777",
  description:
    "A personal blog about programming, web development, and other stuff.",
  srcDir: "src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "导航", link: "/" },
      {
        text: "踩坑记录",
        items: [{ text: "vitepress踩坑", link: "/pitfall/vitepress" }],
      },
    ],
    sidebar: {
      "/pitfall/": [
        {
          text: "vitepress踩坑",
          link: "/pitfall/vitepress",
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/koitori777" }],
    aside: true,
    outline: {
      level: [1, 2],
      label: "目录",
    },
  },
});
