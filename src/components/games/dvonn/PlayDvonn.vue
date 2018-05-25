<template>
  <v-container fluid>
    <v-layout row text-xs-center>
      <v-flex xl4 lg6 md8 sm10 xs12 offset-xl4 offset-lg3 offset-md2 offset-sm1 offset-xs0>
        <v-btn color="success" light id="status">Ready!</v-btn>
        <v-btn color="warning" light id="replay">Replay</v-btn>
        <v-btn color="error" light id="list" v-on:click.native="displayMoveList()">Move list</v-btn>
        <div id="boardDiv">
          <canvas id="board"/>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent>
        <v-card>
          <v-card-title class="headline">Move list</v-card-title>
          <v-card-text id="moveListBody">
            <ol>
              <li v-for="move in moves">{{move}}</li>
            </ol>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import * as OpenXum from '../openxum/OpenXum'
import * as Dvonn from './js/Dvonn'

export default {
  data () {
    return {
      dialog: false,
      moves: [],
      page: null
    }
  },
  mounted() {
    var color = this.$route.params.color === 'black' ? 0 : 1;
    var opponent_color = this.$route.params.color === 'black' ? 1 : 0;
    var mode = this.$route.params.mode === 'regular' ? 0 : 1;
    const status = JSON.parse(window.localStorage.getItem('openXumUser'));

    // TODO: owner_id = user_id ; opponent_id = '' ; replay = 0
    this.page = new OpenXum.GamePage(Dvonn, 'dvonn', 0, color, opponent_color , this.$route.params.type,
      this.$route.params.idGame, mode, status.data.username, status.data.username, '', 0);
  },
  methods: {
    displayMoveList() {
      var list = this.page.get_moves();
      var moves = [];
      var _this = this;

      list.split(";").forEach(function (str) {
        if (str !== '') {
          var move = _this.page.build_move();

          move.parse(str);
          moves.push(move.to_string());
        }
      });
      this.moves = moves;
      this.dialog = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  canvas {
    width: 600px;
    height: 600px;
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border-radius: 15px;
    -moz-border-radius: 15px;
    box-shadow: 8px 8px 2px #aaa;
  }
</style>