import theme from "vitepress/theme";
import "./custom.css";
import { h } from "vue";
import { useData } from "vitepress";

const env = import.meta.env;

export default {
  extends: theme,
  Layout: () => {
    const { frontmatter } = useData();
    return h(
      theme.Layout,
      {
        class: frontmatter.value.layoutClass,
      },
      {
        "nav-bar-title-after": () =>
          env.DEV
            ? ""
            : h("img", {
                class: "custom-nav-bar-title-after",
                src: "https://visitor-badge.laobi.icu/badge?page_id=koitori777",
                style: "margin-left: 10px;",
              }),
      }
    );
  },
};
