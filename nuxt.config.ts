// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@pinia/nuxt',
  ],

  css: ['@/assets/css/main.css'],

  app: {
    head: {
      title: 'Vue 3D Experience Skill',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A comprehensive learning roadmap for mastering 3D Creative Development using Vue 3, Nuxt, and TresJS.' }
      ]
    }
  },

  vite: {
    optimizeDeps: {
      include: ['three']
    },
    ssr: {
      noExternal: ['three', '@tresjs/core', '@tresjs/cientos']
    }
  }
})
