<template>
  <v-container grid-list-md text-xs-center>
      <v-layout wrap>
          <v-flex class="m-3" xs12 sm6 md4 lg3 xl2 v-for="(game, i) in games" :key="i">
              <v-card class="card mr-3 mb-3">
                  <v-card-media :src="game.logo" height="200px"></v-card-media>
                  <v-card-actions d-flex>
                      <v-btn :to="`/create/${game.gametype}`" flat color="primary" :disabled="!game.gametype">
                          {{ $t('GAMES.PLAY') }}
                          <v-icon color="primary" right>
                              play_arrow
                          </v-icon>
                      </v-btn>
                      <v-btn :to="game.rules" flat color="primary">
                          {{ $t('GAMES.RULES') }}
                          <v-icon color="primary" right>
                            library_books
                          </v-icon>
                      </v-btn>
                  </v-card-actions>
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
          {name: 'Dvonn', logo: require('../assets/gameLogo/dvonn.jpg'), rules: '/games/rules/dvonn', gametype: 'dvonn'},
          {name: 'Gipf', logo: require('../assets/gameLogo/gipf.jpg'), rules: '/games/rules/gipf', gametype: 'gipf'},
          {name: 'Invers', logo: require('../assets/gameLogo/invers.jpg'), rules: '/games/rules/invers', gametype: 'invers' },
          {name: 'Kamisado', logo: require('../assets/gameLogo/kamisado.jpg'), rules: '/games/rules/kamisado', gametype: 'kamisado'},
          {name: 'Paletto', logo: require('../assets/gameLogo/paletto.jpg'), rules: '/games/rules/paletto', gametype: 'paletto'},
          {name: 'Pentago', logo: require('../assets/gameLogo/pentago.jpg'), rules: '/games/rules/pentago'},
          {name: 'Tzaar', logo: require('../assets/gameLogo/tzaar.jpg'), rules: '/games/rules/tzaar'},
          {name: 'Yinsh', logo: require('../assets/gameLogo/yinsh.jpg'), rules: '/games/rules/yinsh'},
          {name: 'Zertz', logo: require('../assets/gameLogo/zertz.jpg'), rules: '/games/rules/zertz'}]
      }
    },
    computed: {
      checkLogin () {
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

    .container > .layout.wrap {
      margin-bottom: 1rem;
    }
</style>