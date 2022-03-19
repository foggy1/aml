import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	css: [
	 'normalize.css/normalize.css',
	 '@/assets/css/main.css'
	],
    title: 'my website title',
    meta: [
      {link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]}
    ],        
    build: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          }
        }
      },

  }	
})
