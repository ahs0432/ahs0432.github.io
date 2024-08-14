import { defineUserConfig } from "vuepress";

import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

import theme from "./theme.js";

export default defineUserConfig({
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Nanum+Gothic+Coding&display=swap",
        rel: "stylesheet",
      },
    ],
  ],

  base: "/",

  locales: {
    "/": {
      lang: "ko-KR",
      title: "찬스의 개발 블로그 : Chance Devlog",
      description: "찬스의 개발과 일상에 대한 내용을 담은 개인 블로그",
    },
  },

  theme,
  plugins: [
    googleAnalyticsPlugin({
      id: "G-WPXNB05XMX"
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});