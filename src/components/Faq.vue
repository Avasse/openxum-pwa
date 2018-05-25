<template>
    <v-container>
        <h4>I don't have an account, how do I log in?</h4>
        <p class="answer">You can register on the site in the Sign up page.</p>

        <h4>How can I see the rules of the games?</h4>
        <p class="answer">Just click on the "rules" button on the game.</p>

        <h4>Can I order a game on the site?</h4>
        <p class="answer">We do not make any sales.</p>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        games: [
          {name: 'Dvonn', logo: require('../assets/gameLogo/dvonn.jpg'), url: '/games/rule/dvonn', gametype: 'dvonn'},
          {name: 'Gipf', logo: require('../assets/gameLogo/gipf.jpg'), url: '/games/rule/gipf'},
          {name: 'Invers', logo: require('../assets/gameLogo/invers.jpg'), url: '/games/rule/invers'},
          {name: 'Kamisado', logo: require('../assets/gameLogo/kamisado.jpg'), url: '/games/rule/kamisado'},
          {name: 'Paletto', logo: require('../assets/gameLogo/paletto.jpg'), url: '/games/rule/paletto'},
          {name: 'Pentago', logo: require('../assets/gameLogo/pentago.jpg'), url: '/games/rule/pentago'},
          {name: 'Tzaar', logo: require('../assets/gameLogo/tzaar.jpg'), url: '/games/rule/tzaar'},
          {name: 'Yinsh', logo: require('../assets/gameLogo/yinsh.jpg'), url: '/games/rule/yinsh'},
          {name: 'Zertz', logo: require('../assets/gameLogo/zertz.jpg'), url: '/games/rule/zertz'}]
      }
    },
    computed: {
      checkLogin() {
        return this.$store.state.isLoggedIn;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h4 {
        padding: 5px 20px;
        background-color: #1976d2;
        color: white;
        font-size: 1.3em;
        max-width:700px;
        margin-left:auto;
        margin-right:auto;
    }

    .answer {
        padding-left: 50px;
        max-width:700px;
        margin-left:auto;
        margin-right:auto;
    }
</style>