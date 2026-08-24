import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Logan Keener",
  description: "Welcome to my portfolio showcasing my previous work and expertise. I have worked in many different aspects of game design and development, as well as web development. ",
  base: process.env.VITEPRESS_BASE || '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' }
    ]

  }
})
