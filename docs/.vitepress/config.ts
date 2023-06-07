import { defineConfig } from "vitepress"

export default defineConfig({
  lastUpdated:true,
  title:'PENGUIN',
  head:[
    ['link',{ rel: 'shortcut icon',type: 'image/x-icon', href: '/logo.svg' }]
  ],
  themeConfig:{
    logo:'/logo.svg',
    siteTitle:'Notes',
    nav:[
      {text:'Notes',link:'/Notes/Git',activeMatch:'/Notes/'},
      {text:'Frontend',
        items:[
          {text:'TypeScript',link:'/Frontend/TypeScript'},
          {text:'JavaScript',link:'/Frontend/JavaScript'},
          {text:'Vue',link:'/Frontend/Vue'},
        ]
      },
      {text:'Backend',
        items:[
          {text:'SQL',link:'/Backend/SQL'},
        ]
      },
    ],
    sidebar:{
      '/Notes/':[
        {text:'Git Note',link:'/Notes/Git'},
        {text:'Regular Note',link:'/Notes/Regular'},
        {text:'Utils Note',link:'/Notes/Utils'},
        {text:'SSH KEY',link:'/Notes/SSHKEY'},
        {text:'Ubuntu',link:'/Notes/Ubuntu'},
        {text:'Type Note',link:'/Notes/Type'},
      ]
    },
    outline:3,
    search:{
      provider:'local'
    }
  }
})