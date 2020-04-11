
<template lang='pug'>
  mu-appbar.header-navbar(
    color='lightgray'
  )
    mu-text-field.appbar-search-field(
      slot='right'
      hintText='请输入搜索内容'
      style=`
      margin: auto;
      `
    )
      slot(name='suffix')
        mu-icon(value='search')
    mu-button(
      flat
      color='white'
      label='Mudmin'
      slot='left'
      @click='toggleMenu()'
      icon
    )
      mu-icon(
        :value='menuOpened? "arrow_back": "menu"'
      )
    h4 {{ currentRoute().title }}

    mu-drawer(
      :open='menuOpened'
      :docked='menuDocked'
      @closed='toggleMenu(true)'
    )
      mu-list(
        @itemClick=''
        style=`
        padding: 0;
        `
      )
        mu-appbar(
          color='lightgray'
        )
          mu-button(
            icon
            slot="left"
            @click='toggleMenu()'
          )
            mu-icon(value="arrow_back")
          | Mudmin
        //- mu-list-item(
        //-   title='Mudmin'
        //-   @click='toggleMenu'
        //-   style=`
        //-   text-align: center;
        //-   `
        //- )
          mu-button(
            flat
            color='white'
            label='登陆'
            slot='left'
            @click='login'
          ) Login
        mu-list-item(
          button
          v-for='(el, il) in navList'
          :key='il'
          :title='el.title'
          :href='"#"+ el.path'
          @click='toggleMenu(false)'
        )
          mu-list-item-action
            mu-icon(
              :value='el.icon'
            )
          mu-list-item-title {{el.title}}
        //- mu-list-item
          mu-button(
            raised
            label='toggle'
            @click='toggleMenu'
          )

</template>

<script>
  import {
    config
  } from '../js/routes.js'

  module.exports= {
    data () {
      return {
        navList: config.routes
        ,menuOpened: false
        ,menuDocked: true
      }
    }
    ,methods: {
      // method:
      toggleMenu (flag) {
        this.menuOpened= flag=== undefined
          ? !this.menuOpened
          : flag
      }
      // method:
      ,login () {
        console.info(this.route)
      }
      // filter:
      ,currentRoute () {
        const _targeted= this.navList.filter((el)=> el.path=== this.$route.path)
        return _targeted.length
          ? _targeted[0]
          : {}
      }
    }
  }
</script>

<style lang='less'>
  *{
    transition: all .1s ease-in-out;
  }
  .header-navbar{
    position: fixed;
    left: 0;
    right: 0;
    &+ *{
      padding-top: 4em;
    }
  }
</style>
