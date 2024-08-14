import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    "aboutme",
    {
      text: "Posts",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
  ],
});
