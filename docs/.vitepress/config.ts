import { defineConfig } from "vitepress";

export default defineConfig({
  lastUpdated: true,
  title: "PENGUIN",
  head: [
    ["link", { rel: "shortcut icon", type: "image/x-icon", href: "/logo.svg" }],
  ],
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Notes",
    nav: [
      { text: "Notes", link: "/Notes/Git", activeMatch: "/Notes/" },
      {
        text: "Frontend",
        activeMatch: "/Frontend/",
        items: [
          { text: "DesignPattern", link: "/Frontend/DesignPattern/Factory" },
          { text: "JavaScript", link: "/Frontend/JavaScript" },
          { text: "Vue", link: "/Frontend/Vue" },
        ],
      },
      {
        text: "Backend",
        activeMatch: "/Backend/",
        items: [
          { text: "SQL", link: "/Backend/SQL/Base" },
          { text: "MySQL", link: "/Backend/MySQL/Command" },
        ],
      },
    ],
    sidebar: {
      "/Notes/": [
        { text: "Git", link: "/Notes/Git" },
        { text: "Regular", link: "/Notes/Regular" },
        { text: "Utils", link: "/Notes/Utils" },
        { text: "SSH KEY", link: "/Notes/SSHKEY" },
        { text: "Ubuntu", link: "/Notes/Ubuntu" },
      ],
      "/Frontend/": [
        {
          text: "DesignPattern",
          items: [
            { text: "Factory", link: "/Frontend/DesignPattern/Factory" },
          ],
        },
        
      ],
      "/Backend/": [
        {
          text: "SQL",
          items: [
            { text: "Base", link: "/Backend/SQL/Base" },
            { text: "Fun", link: "/Backend/SQL/Fun" },
          ],
        },
        {
          text: "MySQL",
          items: [
            { text: "Command", link: "/Backend/MySQL/Command" },
            { text: "Install", link: "/Backend/MySQL/Install" },
          ],
        },
      ],
    },
    outline: 3,
    search: {
      provider: "local",
    },
  },
});
