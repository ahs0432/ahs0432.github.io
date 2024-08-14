import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/aboutme",
  "/posts/",
  {
    text: "Categories",
    icon: "table",
    link: "/category/",
  },
  /*
  {
    text: "Highlight Posts",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
    ],
  },
  */
]);
