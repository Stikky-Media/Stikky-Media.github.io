const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
  head: [['link', { rel: 'icon', href: 'https://www.stikkymedia.com/wp-content/uploads/2020/02/stikkyicon-orange.png' }]],
  theme: defaultTheme({
    logo: "https://www.stikkymedia.com/wp-content/uploads/2019/11/stikky-horzontal-logo.png",
    lang: 'en-US',
    title: 'Stikky Wiki',
    description: 'This is my first VuePress site',
    contributors: false,
    darkMode: true,
    logoDark: "https://www.stikkymedia.com/wp-content/uploads/2021/01/stikkylogo-sideways-white-1.png",
    sidebar: [
      'README.md',
      'new-file.md'
    ],
  }),
  plugins: [
    searchPlugin()
  ],
}