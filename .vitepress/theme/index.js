import theme from "vitepress/theme";
import "./custom.css";
import { h } from "vue";
import { useData } from "vitepress";

export default {
  extends: theme,
  Layout: () => {
    const { frontmatter } = useData();
    return h(theme.Layout, {
      class: frontmatter.value.layoutClass,
    });
  },
};
