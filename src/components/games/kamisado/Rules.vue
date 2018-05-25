<template>
  <v-container fluid>
    <v-layout>
      <v-flex xl4 lg6 md8 sm10 xs12 offset-xl4 offset-lg3 offset-md2 offset-sm1>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">Rules - Kamisado by Kris Burm</div>
            </div>
          </v-card-title>
          <v-card-text>
            <h4>Aim</h4>
            The game is played in "rounds". Within each round, the object is to reach your opponent's "home row" with
            one of your dragon towers (i.e. you must place one of your towers on one of the squares in your opponent's
            home row). The player who manages to do this first scores one point (in later rounds, two, four or even
            eight points may be scored for winning a round - please see further on in the rules). Before you start
            playing, decide which type of match you would like to play. You can choose from the following options:
            <ul>
              <li>Single Round (where the first player to score 1 point is the winner)</li>
              <li>Standard Match (where the first player to score a total of 3 points is the winner)</li>
              <li>Long Match (where the first player to score a total of 7 points is the winner)</li>
              <li>Marathon Match (where the first player to score a total of 15 points is the winner)</li>
            </ul>

            <h4>Single round</h4>
            During each round, the players take turns to move a dragon tower, each attempting to be the first to place
            a dragon tower on a square within their opponent's home row.
            <br>=
            <b>Which Tower?</b>
            <br>Rules determining which tower a player moves:
            <ul>
              <li>Rule T1: For the first move only in any round, the player making this move can select any of his/her
                eight dragon towers as the one to be moved.</li>
              <li>Rule T2: For all subsequent moves in that round (i.e. on any move except the first), each player must
                move the dragon tower that matches the colour of the square on which their opponent's previous move
                finished.</li>
            </ul>
            <i>Please note that this is a very important rule and it is vital that you understand it fully before you
              attempt to play Kamisado!</i>
            <br>
            <b>Valid Moves?</b>
            <br>
            Rules determining how that tower can be moved:
            <ul>
              <li>
                Rule M1: A tower must be moved in a straight line, either directly forwards or diagonally forwards. No
                sideways or backwards moves are EVER allowed, except backwards moves made as a result of a "Sumo push"
                (see later – not applicable to a Single Round match).
              </li>
              <li>Rule M2: A tower can be moved any number of squares, but may not pass through any square that already
                contains a tower (either belonging to the player making the move, or to his/her opponent). A tower can
                even be moved directly from a square in a player’s own home row to an empty space in his/her opponent's
                home row, provided that this move is in a straight line and there are no towers on any of the squares
                the tower has to pass through.</li>
              <li>Rule M3: A tower can only be moved to a square that was previously empty (i.e. no two towers may ever
                occupy the same space).</li>
              <li>Rule M4: A tower is allowed to move diagonally between two dragon towers that occupy squares that
                touch corner-to-corner.</li>
              <li>Rule M5: A tower must be moved at least one square if it is at all possible to do so.</li>
              <li>Rule M6: If it is impossible to move the required tower in any way (i.e. if it is completely blocked
                from moving forwards or diagonally forwards), the player whose turn it is to move that tower has to miss
                that turn, and his/her opponent moves again immediately.</li>
              <li>Rule M7: The round finishes as soon as either player succeeds in moving one tower to any square within
                their opponent's "home row". That player has now "won" that round.</li>
              <li>Rule M8: It is possible, although extremely unlikely, to get a situation where both players have
                towers which are completely blocked so that they cannot be moved, and for these towers to interact to
                form a "deadlock" situation where no further towers can be moved at all. In this situation, the player
                who made the last move prior to the occurrence of the deadlock situation (i.e. the player who "caused"
                the deadlock) is considered to have lost the round, and his/her opponent is the winner of that round.
              </li>
            </ul>

            <h4>End of a game</h4>
            When you are playing up to one point (Single Round), the game is over as soon as one player moves a dragon
            tower to his/her opponent's "home row". This player will be the winner. If you wish, you can play a series
            of single-round games (starting each time with each tower on the square that matches it). Score one point
            for each game, and take turns to play the first move.
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
        gipfDiagram1: require('../../../assets/gipf/rules1_board.gif')
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