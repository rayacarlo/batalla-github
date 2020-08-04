<template>
  <button class="btn btn-outline-secondary my-4" @click="battle_button" type="button" id="button-addon2" data-toggle="modal" data-target="#myModal">Battle!</button>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    battle_button(ev) {
      ev.preventDefault()
      const score1 = this.$store.state.score1;
      const score2 = this.$store.state.score2;
      if (score1 > score2) {
        alert("Player 1 wins")
      } else if (score2 > score1) {
        alert("Player 2 wins")
      } else {
        alert("It's a tie")
      }
    }
  }
}
</script>