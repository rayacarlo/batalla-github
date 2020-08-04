<template>
  <div id="app">
    <img alt="Github logo" src="./assets/github.png">
    <h3>Welcome to Github Battle</h3>
    <Button />
    <div class="container">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-4"><BattleGithub num="1"/></div>
        <div class="col-4"><BattleGithub num="2"/></div>
        <div class="col-2"></div>
      </div>
    </div>
    <div class="modal" id="myModal" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Results</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BattleGithub from './components/BattleGithub.vue'
import Button from './components/Button.vue'

export default {
  name: 'App',
  components: {
    BattleGithub,
    Button
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
  margin-top: 20px;
}
h3 {
  margin: 20px 0 0;
}
</style>
