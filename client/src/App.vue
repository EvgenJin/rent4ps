<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <MiddleApp/>
  </div>
</template>

<script>
import MiddleApp from './components/MiddleApp.vue'

export default {
  name: 'App',
  components: {
    MiddleApp,
  },
  methods: {
    getProductsApi() {
      this.$socket.on('products',data => {
        console.log(data)
      })
    }
  },
  mounted () {
    // console.log('component VUE mounted '+ Date.now())
  //   this.$eventBus.$emit('message', this.text),
  },
  created () {
    // this.getProductsApi()
    // console.log('component VUE created '+ Date.now())
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
