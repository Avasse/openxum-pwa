<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xl2 lg3 md4 sm6 xs6 v-for="(value, i) in games" :key="i">
        <v-card height="250px">
          <v-layout row wrap text-xs-center>
            <v-flex xs12>
              <v-btn light warning>{{games[i].name}}</v-btn>
            </v-flex>
            <v-flex xs12>
              <img :src="games[i].logo" style="max-width: 200px"></img>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'games',
    data () {
      return {
        games: [
          {name: 'Dvonn', logo: require('../assets/dvonn.jpg')},
          {name: 'Gipf', logo: require('../assets/gipf.jpg')},
          {name: 'Invers', logo: require('../assets/invers.jpg')},
          {name: 'Kamisado', logo: require('../assets/kamisado.jpg')},
          {name: 'Paletto', logo: require('../assets/paletto.png')},
          {name: 'Pentago', logo: require('../assets/pentago.jpg')},
          {name: 'Tzaar', logo: require('../assets/tzaar.jpg')},
          {name: 'Yinsh', logo: require('../assets/yinsh.jpg')},
          {name: 'Zertz', logo: require('../assets/zertz.jpg')}]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style/>