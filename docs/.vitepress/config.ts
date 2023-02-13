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
      {text:'Frontend',link:'/Notes/Git'},
      {text:'Backend',link:'/Notes/Git'}
    ],
    outline:3
  }
})