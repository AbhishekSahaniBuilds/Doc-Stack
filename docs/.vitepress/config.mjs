import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/Doc-Stack/",
  title: "Documentation",
  description: "The All-in-One Documentation Hub",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Projects", link: "/projects/" },
    ],

    sidebar: [
      {
        text: "Projects",
        items: [{ text: "Quick Switch", link: "/projects/Quick-Switch/" }],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/AbhishekSahaniBuilds",
      },
    ],
  },
});
