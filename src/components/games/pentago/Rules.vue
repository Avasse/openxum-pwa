<template>
  <v-container fluid>
    <v-layout>
      <v-flex xl4 lg6 md8 sm10 xs12 offset-xl4 offset-lg3 offset-md2 offset-sm1>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">Rules - Pentago by Kris Burm</div>
            </div>
          </v-card-title>
          <v-card-text>
            <h4>Aim</h4>
            Place - turn - win by five in a row!<br>
            <img :src="pentagoDiagram1">

            <h4>The start</h4>
            The game starts with an empty game board. The game board consists of the four separate boards.
            <h4>Place and turn</h4>
            The starting player places a marble in a socket of his or her choice. After placing a marble the player
            turns any one of the four boards one notch (90 degrees) clock- or counter clock- wise. A board, not
            necessarily the one on which the marble has been placed, must be turned each move. Then the second player
            does the same, i.e. places a marble and turns a board. So on and so forth.

            <h4>End of a game</h4>
            The first player to get five marbles in a row wins!
            <br>
            The row can be horizontal, vertical or diagonal and run over two or three boards.
            If a player gets five in a row when placing a marble he or she does not need to turn a board.
            If all the sockets have been filled without any player getting five in a row the game is a draw.
            If both players get five in a row as a player turns a board the game is also a draw.
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'rule',
    data () {
      return {
          pentagoDiagram1: require('../../../assets/pentago/pentago.jpg')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4 {
    font-weight: bold;
    font-size: medium;
    margin: 0;
  }

  ul {
    list-style-type: square;
    padding-left: 20px;
  }

  li {
    display: list-item;
  }
</style>