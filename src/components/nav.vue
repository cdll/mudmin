
<template lang='pug'>
  //- <ul>
    <li class="" v-for='(el, i) in navList'>
      <a class="" :href='el.url' v-text='el.name'></a>
    </li>
  //- </ul>
  mu-appbar(
    title='Mudmin'
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
          :title='el.name'
          :href='"#"+ el.url'
          @click='toggleMenu(false)'
        )
          mu-list-item-action
            mu-icon(
              :value='el.icon'
            )
          mu-list-item-title {{el.name}}
        //- mu-list-item
          mu-button(
            raised
            label='toggle'
            @click='toggleMenu'
          )

</template>

<script>
  module.exports= {
    data() {
      return {
        navList: [
          {
            name: '主页'
            ,url: '/home'
            ,icon: 'home'
          }
          ,{
            name: '登陆'
            ,url: '/login'
            ,icon: 'forward'
          }
        ]
        ,menuOpened: false
        ,menuDocked: true
      }
    }
    ,methods: {
      toggleMenu (flag){
        this.menuOpened= flag=== undefined
          ? !this.menuOpened
          : flag
      }
      ,login (){
        console.info(this.route)
      }
    }
  }
</script>

<style>
  *{
    transition: all .1s ease-in-out;
  }
</style>
