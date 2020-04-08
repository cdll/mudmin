
<script>
  import Nav from './nav.vue'

  import router from '../js/routes.js'

  export default {
    data(){
      return {
        data: {
          name: 'mudmin'
        }
      }
    }
    ,router
    ,render() {
      return (
        <main class='app-main'>
          <Nav class='' />
          <mu-expand-transition>
            <router-view class='routes' />
          </mu-expand-transition>
          <footer class='' />
        </main>
      )
    }
    , name: 'app-main'
    ,created() {
    }
  }
</script>

<style lang='css'>
/* @import 'https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.min.css'; */
</style>
