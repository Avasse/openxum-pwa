<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xl2 lg3 md4 sm6 xs6 v-for="(value, i) in games" :key="i">
        <v-card height="250px">
          <v-layout row wrap text-xs-center>
            <v-flex xs12>
              <v-btn :to="games[i].url" light warning>{{games[i].name}}</v-btn>
            </v-flex>
            <v-flex xs12>
              <img :src="games[i].logo" style="max-width: 200px"></img>
            </v-flex>
            <v-flex xs12>
              <v-btn :to="games[i].url2" light v-if="checkLogin">Play</v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        games: [
          {name: 'Dvonn', logo: require('../assets/dvonn.jpg'), url: '/games/rule/dvonn', url2: '/games/play/dvonn'},
          {name: 'Gipf', logo: require('../assets/gipf.jpg'), url: '/games/rule/gipf'},
          {name: 'Invers', logo: require('../assets/invers.jpg'), url: '/games/rule/invers'},
          {name: 'Kamisado', logo: require('../assets/kamisado.jpg'), url: '/games/rule/kamisado'},
          {name: 'Paletto', logo: require('../assets/paletto.png'), url: '/games/rule/paletto'},
          {name: 'Pentago', logo: require('../assets/pentago.jpg'), url: '/games/rule/pentago'},
          {name: 'Tzaar', logo: require('../assets/tzaar.jpg'), url: '/games/rule/tzaar'},
          {name: 'Yinsh', logo: require('../assets/yinsh.jpg'), url: '/games/rule/yinsh'},
          {name: 'Zertz', logo: require('../assets/zertz.jpg'), url: '/games/rule/zertz'}]
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
<style/>