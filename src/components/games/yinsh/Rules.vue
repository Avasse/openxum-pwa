<template>
<v-container fluid>
    <v-layout>
      <v-flex xl4 lg6 md8 sm10 xs12 offset-xl4 offset-lg3 offset-md2 offset-sm1>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">Rules - Yinsh by Kris Burm</div>
            </div>
          </v-card-title>
          <v-card-text>
            <h4>Aim</h4>
            You and your opponent start the game each with 5 rings on the board. You may remove a ring each time you
            form a row of 5 markers with your color face up. You win the game when you have removed 3 of your rings-in
            other words, to win you must form 3 rows of 5 markers showing your own color.
            Tip: if you prefer short and fast games, then play the blitz version. See point J. at the end of these
            rules. That version is also very suitable for learning how to play YINSH.

            <h4>Preparation</h4>
            <ol>
              <li>Place the board vertically between the players (i.e. so that the lines that are marked with letters
                run from one player to the other). Each player should have spaces for 3 rings on his side.</li>
              <li>Draw lots to determine who begins. The starting player plays "white" and takes the 5 white rings. The
                other player takes the 5 black rings.</li>
              <li>Put the markers next to the board so both players can easily reach them. These markers are the "pool".
              </li>
            </ol>
            <h4>Starting position</h4>
            <ol>
              <li>You begin with an empty board.</li>
              <li>First, you must bring your rings into play. You and your opponent start putting them on the board,
                each in turn and one ring at a time. The intersections constitute the playing area. You may put a ring
                on any intersection you want, including on the edges.</li>
              <li>When you have both put your 5 rings on the board, you have determined the starting position. (See
                diagram 1 below.)</li>
            </ol>
            <img :src="yinshDiagram1">
            <br>
            Diagram 1: both players have placed their 5 rings on the board. Now the game starts.
            <h4>Moving a ring</h4>
            <ol>
              <li>Each move starts by taking a marker from the pool.</li>
              <li>Next, you must decide which of your rings you want to move. Put the marker with your color face up in
                that ring, so that it occupies the same space as the ring. (See diagram 2 below.
                <br>
                <img :src="yinshDiagram2">
                <br>Diagram 2: a move. First you put a marker with your color face up in one of your rings, next you
                move the ring. You only move the ring, not the marker!)</li>
              <li>Then you must move the ring in which you have put a marker according to the following rules:
                <ul>
                  <li>When moving the ring, you leave the marker on its spot. (See diagram 2.)</li>
                  <li>A ring must always move in a straight line and always to a vacant space.</li>
                  <li>A ring may move over one or more vacant spaces.</li>
                  <li>A ring may jump over one or more markers, regardless of color, as long as they are lined up without
                    interruption. In other words, if you jump over one or more markers, you must always put your ring in
                    the first vacant space directly behind the markers you jumped over.</li>
                  <li>A ring may first move over one or more vacant spaces and continue with a jump over one or more
                    markers. But, as stated above, after jumping over one or more markers, it may not move over any more
                    vacant spaces.</li>
                  <li>A ring can only jump over markers, not over rings.
                    <br>
                    <img :src="yinshDiagram3">
                    <br>
                    Diagram 3: the indicated black ring may move to any of the marked spaces.</li>
                </ul>
              </li>
            </ol>

            <h4>Flipping markers</h4>
            <ol>
              <li>If you moved your ring over vacant spaces without jumping over any markers, your turn ends when you
                put the ring on its new spot.</li>
              <li>If you've jumped over one or more markers, you must flip all those markers. This applies to both your
                own and your opponent's markers. Thus, each white marker that is jumped becomes black and each black
                marker becomes white! (See diagram 4.)
                <br>
                Note: do not flip markers while moving the ring; first move the ring and then flip the markers.</li>
              <li>Do not flip the marker that you've put in the ring before you moved; that marker has not been jumped.
              </li>
              <li>Markers can only be flipped; they cannot be moved.
                <br>
                <img :src="yinshDiagram4">
                <br>
                Diagram 4: the same situation as in Diagram 3, but now after black's move. The black ring has jumped
                over 3 white and 2 black markers, so they have been flipped. They now show the opposite color.
                (Note that the marker that was put in the ring has remained black!)
              </li>
            </ol>
            <h4>Forming a row / removing a ring</h4>
            <ol>
              <li>By moving rings and flipping markers you must try to form a row of 5 markers that show your color. The
                5 markers must be adjacent and in a straight line. Rings do not count.</li>
              For the sake of clarity: hereafter, a row of 5 markers that show the same color will simply be referred to
              as "a row".
              <li>If you form a row, you must take the 5 markers from the board and put them back in the pool.</li>
              <li>After removing a row, you must also remove one of your rings. You must do so because you need a ring
                to indicate that you've formed (and removed) a row. Choose any of your rings and put it on one of the 3
                spaces on your side of the board. (See diagram 5.)
                <br>
                <img :src="yinshDiagram5">
                <br>
                Diagram 5: Black has formed a row of 5 markers. First, he must put the 5 markers back in the pool. Next
                he must remove one of his rings and put it in one of the spaces on his side of the board as an
                indication that he has formed a row.</li>
              <li>If you form a row of more than 5 markers, you may choose which 5 markers you'll remove-as long as they
                form an uninterrupted row. (See diagram 6.)</li>
              <li>It is possible to form 2 (or more) rows with only one move. If these rows don't intersect, you must
                remove both and also remove 2 rings. If they do intersect, you may choose which row you'll take. After
                having removed the row of your choice, the other row will not be complete anymore and thus the remaining
                pieces stay on the board. Now you remove only 1 ring. (See diagram 6.)</li>
              <li>You may form a row for your opponent. In this case your opponent must remove the row and a ring before
                he makes his move. He may freely choose which of his rings he'll take.</li>
              <li>If you form a row for yourself and a row for your opponent at the same time, then you deal with your
                own row as normal, and next your opponent must remove his row and a ring as described above.
                <br>
                <img :src="yinshDiagram6">
                <br>
                Diagram 6:
                <br>
                Situation 1: Black may remove either of the two intersecting rows, but no matter which row he takes, the
                remaining row will not be complete any more. So this counts as only one row!
                <br>
                Situation 2: the black row contains 7 markers. Black may choose which 5 markers he will remove, but he
                must choose 5 markers that lie next to each other.
                <br>
                Situation 3: the row is not complete because the ring does not count as a marker.</li>
            </ol>

            <h4>End of the game</h4>
            <ol>
              <li>The game ends as soon as a player has removed 3 rings from the board. It means that he has formed 3
                rows of 5 markers, so he is the winner.</li>
              <li>If you make a move that forms both your own and your opponent's third row, then you win since you may
                remove your third ring first.</li>
              <li>If all the markers are placed on the board before a player has won, then the player who removed the
                most rings wins. If both players have removed the same number of rings, the game ends in a draw.</li>
            </ol>
            <h4>I. Be careful!</h4>
            If you know how to play GIPF, you'll surely notice that GIPF and YINSH have quite a few things in common.
            Forming rows and removing them from the board are just two of them. Less obvious, but much more significant
            once you've noticed it, is the "ambiguity" that you can find in both games: what can be the right thing to
            do in one situation, might very well be the worst thing to do in another situation. When playing YINSH, you
            must be aware of that fact, especially regarding the aim of the game. Forming a row of 5 markers brings you
            closer to victory, but it also costs you one of your rings, and that of course restricts your possibilities
            for the rest of the game. You could form a row for your opponent-so that he's the one who must continue the
            game with one less ring-but if you do so, it could well be that you have put him on the road to winning the
            game. So the difference between a good and a bad move depends entirely on the situation you're in. You must
            try to find the delicate balance between taking the lead yourself and leaving it temporarily to your
            opponent. And keep one thing in mind: it is the third row that counts!

            <h4>Blitz version</h4>This is a short and very fast way of playing YINSH. You play exactly as described
            above, but the aim is simpler: now you must form only one row. So be the first to line up 5 markers of your
            color and you win! That's it! Easy, don't you think?
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
        yinshDiagram1: require('../../../assets/yinsh/diag1.gif'),
        yinshDiagram2: require('../../../assets/yinsh/diag2.gif'),
        yinshDiagram3: require('../../../assets/yinsh/diag3.gif'),
        yinshDiagram4: require('../../../assets/yinsh/diag4.gif'),
        yinshDiagram5: require('../../../assets/yinsh/diag5.gif'),
        yinshDiagram6: require('../../../assets/yinsh/diag6.gif')
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