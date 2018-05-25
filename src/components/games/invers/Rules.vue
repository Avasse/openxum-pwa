<template>
  <v-container fluid>
    <v-layout>
      <v-flex xl4 lg6 md8 sm10 xs12 offset-xl4 offset-lg3 offset-md2 offset-sm1>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">Rules - Invers by Kris Burm</div>
            </div>
          </v-card-title>
          <v-card-text>
            Inverse literally means in reverse or opposite. In this game, tiles are shifted, then inverted.
            The rules are logical, well thought out, and ingeniously simple. INVERS is a sophisticated, intelligent game
            for two players aged 7 to adult.

            <h4>Contents</h4>
            A gray base plate holds the game tiles and lets them slide along the outside rails. There are red and yellow
            game tiles; Player A takes the yellow, Player B the red.The front side of each tile is fully colored red or
            yellow, while the back side has only a red or yellow point.

            <h4>The Game</h4>
            To begin, arrange tiles on the board with the fronts face up, alternating in each direction (yellow, red,
            yellow, red, etc.). The playing field should look like a 6x6 chessboard. For each player, one tile remains
            in their color. Invert these tiles so the point is face up.
            The first player pushes his tile onto the playing field so that another tile is pushed off the opposite side
            (see figures 1 and 2 in the German rules). The tile pushed out is inverted, then the next player takes his
            turn using his own tile.

            <h4>The Rules</h4>
            <ol>
              <li>Each player may push out and invert tiles of his own color that have not yet been inverted.</li>
              <li>Each player may push out and invert tiles of the opposing color that have not yet been inverted.</li>
              <li>Each player may push out his own inverted tiles, but he may not invert them again.</li>
              <li>A player may not push out an opponent's tile if the point is face-up.</li>
            </ol>

            <h4>The Winner</h4>
            The first player to have all of his tiles inverted is the winner. If no moves are possible and neither
            player has all of his tiles inverted, then the player with the most inverted tiles wins. The loser begins
            the next game.

            <h4>How to learn INVERS?</h4>
            A thorough introduction to the game of INVERS can be done as follows:
            <ol>
              <li>Always follow rule 4.</li>
              <li>Play using only rule 1 until no more plays are possible.</li>
              <li>Now add in rule 2 and play again until no more plays are possible.</li>
              <li>Finally, add in rule 3 and play until there's a winner.</li>
            </ol>

            <h4>Additional Tips</h4>
            <ul>
              <li>Moves under rule 1 change the number and strategic position of a player's own inverted tiles.</li>
              <li>Moves under rule 2 change the number and strategic position of an opponent's inverted tiles. Such a
                move is recommended when it helps your future strategy, i.e., it's okay to help the opponent in the
                short term (by inverting an opposing tile) if you're setting up a more favorable position for yourself
                in future turns.
              </li>
              <li>Moves under rule 3 change only the strategic position of the tiles. Just as many tiles are inverted as
                before, but their positions on the playing field have changed.</li>
              <li>An opponent's inverted tile at the edge of the playing field effectively 'blocks' that row. That tile
                may not be pushed out. If an opponent's inverted tile lies at the other end of the row as well, then
                this row is locked completely for that player.</li>
            </ul>
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