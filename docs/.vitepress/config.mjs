import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/Doc-Stack/",
  title: "Doc-Stack",
  description: "The All-in-One Documentation Hub",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Projects",
        link: "/projects/",
        activeMatch: "/projects/",
      },
      {
        text: "Technologies",
        link: "/technologies/",
        activeMatch: "/technologies/",
      },
      {
        text: "Developer",
        link: "https://abhisheksahanibuilds.github.io/",
      },
      {
        text: "GitHub",
        link: "https://github.com/AbhishekSahaniBuilds",
      },
    ],

    sidebar: {
      "/projects/": [
        {
          text: "Projects",
          collapsed: false,
          items: [
            { text: "Overview", link: "/projects/" },
            {
              text: "Quick Switch",
              link: "/projects/Quick-Switch/",
            },
          ],
        },
      ],

      "/technologies/": [
        {
          text: "Technologies & Tools",
          collapsed: false,
          items: [
            { text: "Overview", link: "/technologies/" },
            {
              text: "Programming Languages",
              link: "/technologies/#programming-languages",
            },
            {
              text: "Frameworks & Libraries",
              link: "/technologies/#frameworks-libraries",
            },
            {
              text: "AI & Machine Learning",
              link: "/technologies/#ai-machine-learning",
            },
            {
              text: "Databases & Storage",
              link: "/technologies/#databases-storage",
            },
            {
              text: "Hardware & Electronics",
              link: "/technologies/#hardware-electronics",
            },
            {
              text: "Development Tools",
              link: "/technologies/#development-tools-software",
            },
            {
              text: "Operating System",
              link: "/technologies/#operating-system",
            },
            {
              text: "Technology Architecture",
              link: "/technologies/#how-technologies-work-together",
            },
            {
              text: "Learning & Exploration",
              link: "/technologies/#currently-learning-exploring",
            },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/AbhishekSahaniBuilds",
      },
    ],

    footer: {
      message: "Documenting Every Build.",
      copyright: "© 2026 Abhishek Sahani. Built with VitePress.",
    },

    search: {
      provider: "local",
    },
  },
});
