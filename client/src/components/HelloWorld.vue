<template>
  <v-expansion-panel>
    <v-expansion-panel-content
      v-for="(item,i) in 5"
      :key="i"
    >
      <div slot="header">Item</div>
      <v-card>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome My App'
    }
  },
  created () {
    this.$eventBus.$on('message',(text) => {
        console.log(text)
    })
    // ,console.log('component HW created '+ Date.now())
},
}
</script>








<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
