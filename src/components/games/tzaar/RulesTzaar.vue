<template>
<v-container fluid>
    <v-layout>
      <v-flex xl4 lg6 md8 sm10 xs12 offset-xl4 offset-lg3 offset-md2 offset-sm1>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">Rules - Tzaar by Kris Burm</div>
            </div>
          </v-card-title>
          <v-card-text>
            <h4>A. Goal</h4>
            <img :src="tzaarDiagram1">
            <br>
            There are two ways to win:
            <ul>
              <li>Players have 3 types of pieces: Tzaars, Tzarras and Totts. These 3 types represent a trinity: they
                cannot exist without each other. You must keep at least one piece of each type on the board at all
                times. In other words, the first way to win is to make your opponent run out of either Tzaars, Tzarras
                or Totts.</li>
              <li>Each turn, players are obligated to capture at least one opponent’s piece. So the second way to win is
                to put your opponent in a position where he cannot capture any of your remaining pieces on the board.
              </li>
            </ul>

            <h4>B. Preparation</h4>
            <ul>
              <li>Place the board between the players so that the long side runs from one player to the other.</li>
              <li>Put all the pieces randomly on the board. The intersections constitute the play area and are
                henceforth referred to as spaces. When all 60 pieces are on the board, all spaces will be occupied.</li>
              <li>Draw lots for your color. White begins.</li>
            </ul>
            <br>Note: If you do not like to begin with a random start position, see points G. and H. below.

            <h4>C. The start: 1 move</h4>
            To begin the game, White makes one move. White must use this move to make a capture. The rules for capturing
            are very simple: pick one of your pieces (of any type) and move it to an adjacent space with an opponent’s
            piece (of any type). Take the opponent’s piece from the board and put your piece in that space. The
            opponent’s piece goes out of the game.

            <h4>D. The game: 2 moves per turn</h4>
            After White has started the game with only one move, players alwayshave two moves per turn.
            <h4>THE FIRST MOVE OF A TURN</h4>
            <ul>
              <li>The first move is always a "forced capture". You must capture! You can capture a piece in an adjacent
                space, but during the course of the game more and more spaces will become vacant. You may also capture
                by moving a piece in a straight line over any number of vacant spaces, to the first space occupied by
                an opponent’s piece. Take the opponent’s piece from the board and put your piece in that space. (See
                diagram 2.) The opponent’s piece goes out of the game.</li>
              <li>As far as capturing goes, there’s no difference between Tzaars, Tzarras and Totts. Each piece can
                capture any other piece, as long as the piece is at least equally strong as the piece it wants to
                capture.</li>
              <li>The strength of a piece is not determined by its type, but by its height. In the beginning there are
                only single pieces, which means that all pieces on the board are equally strong. But you can make your
                pieces stronger during the game by stacking them on top of each other. A stack of two pieces can capture
                any single piece and any two-piece stack of the opposite color; a stack of three pieces can capture any
                single piece, any two-piece stack, and any three-piece stack of the opposite color, and so on.</li>
              <li>All pieces on the board move the same way. A single piece is as movable as a stack of two, three or
                more pieces.</li>
            </ul>
            <br>
            <img :src="tzaarDiagram2">
            <br>
            Diagram 2: the arrows indicate which black pieces can be captured by the white Tzaar.

            <h4>THE SECOND MOVE OF A TURN</h4>
            For the second move, you must choose between 3 possibilities: a) make a second capture, b) make one of your
            pieces (or stacks) stronger, or c) pass.

            <h5>a) A second capture</h5>
            To make a second capture, the rules are the same as for the capture with your first move.
            You may make the second capture with the same piece (or stack) that made the first capture, or with a
            different piece (or stack).
            <br>

            <h5>b) Making a piece stronger</h5>
            <ul>
              <li>To make a piece (or stack) stronger, you just have to jump with it on top of another piece (or stack)
                of your color. You may jump on one of your pieces (or stacks) in an adjacent space or in a space that
                you can reach by moving in a straight line over any number of vacant spaces. So to make a piece
                stronger, you have exactly the same movement possibilities as for capturing.</li>
              <li>There is no limit to the number of pieces that can be in a stack. No matter how high, a stack is
                always considered as “one entity.” It must always be moved as a whole and captured as a whole.</li>
              <li>Any of your pieces or stacks can jump on any of your other pieces or stacks. For example, a single
                Tzaar can jump onto a stack with a Tott on top and vice versa. (See diagram 3 below.)</li>
              <li>Only the top piece of a stack counts for the different types of pieces in play. For example, if you
                put a Tott on top of a Tzaar, the stack counts only as a Tott (although the Tzaar is still in play as
                part of the stack).</li>
            </ul>
            <br>
            <img :src="tzaarDiagram3">
            <br>
            Diagram 3: a single piece can jump onto a stack (of any height) and vice versa! Also, stacks can jump on top
            of each other.

            <h5>c) Pass</h5>You are not obligated to use your second move. If you decide to pass, you just tell your
            opponent that it is his turn again.
            <br>Note: you can never pass the first move (i.e. the forced capture) of a turn!

            <h4>E. For the sake of clarity</h4>
            <ul>
              <li>A piece (or stack) can never be moved to an empty space. Once a space is empty, it remains empty until
                the end of the game.</li>
              <li>A piece (or stack) can never jump over one or more other pieces (or stacks). It can only be moved over
                vacant spaces.</li>
              <li>The board has no central space. Pieces may not be moved across the center.</li>
              <li>Stacks can only consist of pieces of one and the same color.</li>
              <li>You must respect the order of moves: always the forced capture first, then a choice between three
                possibilities for the second move.</li>
            </ul>

            <h4>F. End of the game</h4>
            A player wins the game either when he succeeds in capturing the last piece of one of the three types of the
            opponent’s pieces, or when he puts his opponent in a position where he cannot use his first move to make the
            forced capture.
            <br>
            Reminder: only single pieces and the pieces on top of stacks count when checking for the presence of the
            three types of pieces. The pieces in the stacks do not count.

            <h4>G. Starting position</h4>
            If you do not like random start positions, put the pieces on the board according to the following diagram:
            <br>
            <img :src="tzaarDiagram4">
            <br>
            Diagram 4: Fixed start position.

            <h4>H. Tournament version</h4>
            When playing the tournament version, the game begins with an empty board. The players take turns putting one
            of their pieces after another on the board. The pieces may be placed on the board in any order and it is
            allowed to switch from one type of piece to another as often as you want.
            <br>
            When all pieces are on the board, all spaces will be occupied and the game starts according the rules
            described above.
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'RulesTzaar',
    data () {
      return {
        tzaarDiagram1: require('../../../assets/tzaar/tzaar_dia1.jpg'),
        tzaarDiagram2: require('../../../assets/tzaar/tzaar_dia2.jpg'),
        tzaarDiagram3: require('../../../assets/tzaar/tzaar_dia3b.jpg'),
        tzaarDiagram4: require('../../../assets/tzaar/tzaar_dia4.jpg')
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