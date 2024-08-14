import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar } from "./navbar/index.js";
import { enSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://blog.false.kr",

  author: {
    name: "Chance",
    url: "https://blog.false.kr",
    email: "chance0432@naver.com"
  },

  iconAssets: "fontawesome-with-brands",
  logo: "/assets/icon/icon_circle.png",
  repo: "ahs0432/ahs0432.github.io",

  docsDir: "src",

  blog: {
    medias: {
      GitHub: "https://github.com/ahs0432",
      Linkedin: "https://www.linkedin.com/in/chance0432/",
      Naver: {
        icon: "https://blog.false.kr/assets/icon/naver_blog.svg",
        link: "https://blog.naver.com/chance0432",
      },
      Email: "mailto:chance0432@naver.com",
      Rss: "/feed.xml",
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,
      displayFooter: true,

      blog: {
        description: "개발자를 지망하며 발전하는 클라우드 엔지니어",
        intro: "/aboutme",
      },

      metaLocales: {
        editLink: "GitHub에서 이 페이지 편집",
      },
    },
  },

  encrypt: {
    config: {
      //"/demo/encrypt.html": ["1234"],
    },
  },

  // enable it to preview all changes in time
  hotReload: true,

  plugins: {
    blog: true,
    backToTop: true,
    searchPro: {
      indexContent: true,
      hotKeys: [{ key: 'k', ctrl: true}],
    },

    comment: {
      provider: "Giscus",
      repo: "ahs0432/ahs0432.github.io",
    },

    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      //revealJs: {
      //  plugins: ["highlight", "math", "search", "notes", "zoom"],
      //},

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    feed: {
      devServer: true,
      devHostname: "http://localhost:8080",
      locales: {
      },
      atom: true,
      rss: true,
      json: true,
      rssOutputFilename: "feed.xml",
      jsonOutputFilename: "feed.json",
    },

    sitemap: {
      devServer: true,
      devHostname: "http://localhost:8080",
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
