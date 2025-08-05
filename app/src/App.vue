<template>
  <div id="app">
<Header></Header>
<!--    路由组件出口的地方-->
    <router-view></router-view>
<!--   Footer 在Home，Search中显示 在Login，Register中隐藏-->
<!--    <Footer v-show="$route.path=='/home'||$route.path=='/search'"></Footer>-->
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
//引入
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
