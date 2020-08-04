<template>
  <button class="btn btn-outline-secondary my-4" @click="battle_button" type="button" id="button-addon2" data-toggle="modal" data-target="#myModal">Battle!</button>
</template>

<script>
import jQuery from "jquery";
const $ = jQuery;

export default {
  name: 'Button',
  mounted(){
    console.log($)
  },
  methods: {
    battle_button(ev) {
      ev.preventDefault()
      const score1 = this.$store.state.score1;
      const score2 = this.$store.state.score2;
      if (score1 > score2) {
        $('#myModal .modal-body p').html("Player 1 wins")
      } else if (score2 > score1) {
        $('#myModal .modal-body p').html("Player 2 wins")
      } else {
        $('#myModal .modal-body p').html("It's a tie")
      }
    }
  }
}
</script>