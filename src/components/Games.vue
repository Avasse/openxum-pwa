<template>
  <v-container grid-list-md text-xs-center>
      <v-layout wrap>
          <v-flex class="m-3" xs2 v-for="(game, i) in games" :key="i">
              <v-card class="card mr-3 mb-3">
                  <v-card-media :src="game.logo" height="200px"></v-card-media>
                  <v-card-actions d-flex>
                      <v-btn :to="`/play/${game.gametype}`" v-if="checkLogin" flat color="primary">
                          Jouer
                          <v-icon color="primary" right>
                              play_arrow
                          </v-icon>
                      </v-btn>
                      <v-btn :to="games[i].url" flat color="primary">
                          Régles
                          <v-icon color="primary" right>
                            library_books
                          </v-icon>
                      </v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>
      </v-layout>




      <!--<v-layout row wrap class="mt-1">-->
      <!--<v-flex xl2 lg3 md4 sm6 xs6 v-for="(value, i) in games" :key="i">-->
        <!--<v-card height="350px">-->
          <!--<v-layout row wrap text-xs-center>-->
            <!--<v-flex xs12>-->
              <!--<v-btn :to="games[i].url" light color="warning">{{games[i].name}}</v-btn>-->
            <!--</v-flex>-->
            <!--<v-flex xs12>-->
              <!--<img :src="games[i].logo" style="max-width: 200px"></img>-->
            <!--</v-flex>-->
            <!--<v-flex xs12>-->
              <!--<v-btn :to="`/play/${games[i].gametype}`" light v-if="checkLogin">Play</v-btn>-->
            <!--</v-flex>-->
          <!--</v-layout>-->
        <!--</v-card>-->
      <!--</v-flex>-->
    <!--</v-layout>-->
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
    .card:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }

    .card__actions {
        justify-content: space-between;
    }
</style>