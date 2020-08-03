<template>
  <div id="app">
    <img alt="Github logo" src="./assets/github.png">
    <BattleGithub />
  </div>
</template>

<script>
import BattleGithub from './components/BattleGithub.vue'

export default {
  name: 'App',
  components: {
    BattleGithub
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-top: 10px;
}
</style>
