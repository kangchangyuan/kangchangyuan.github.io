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
      {text:'Notes',link:'/Notes/Git'},
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
      {text:'Backend',link:'/Backend/'}
    ],
    outline:3
  }
})