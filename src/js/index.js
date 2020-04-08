//libs
import 'muse-ui/dist/muse-ui.css'
// import 'muse-ui/dist/theme-dark.css'
import MuseUI from 'muse-ui'
// import('https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.min.css')
import Vue from 'vue'

//components:
import Main from '../components/main'

Vue.use(MuseUI)

//main:
const App= Vue.extend(Main)
window.vm= new App({
  created() {
    this.$mount('main')
  }
})
