import DefaultTheme from 'vitepress/theme'
import MusicPlayer from 'vitepress-plugin-awesome-musicplayer'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('MusicPlayer', MusicPlayer)
  }
}