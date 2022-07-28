<template>
  <router-view/>
  <foot-view></foot-view>
</template>

<script>

  import footView from "./views/footView";

  export default {
    name:"App",
    components:{
      // LoginView,
      footView
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  .index{
    display: none;
  }
</style>
