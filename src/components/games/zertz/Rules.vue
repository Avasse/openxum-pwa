<template>
  <v-container fluid>
    <v-layout>
      <v-flex xl4 lg6 md8 sm10 xs12 offset-xl4 offset-lg3 offset-md2 offset-sm1>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">Rules - Zertz by Kris Burm</div>
            </div>
          </v-card-title>
          <v-card-text>
            <h4>Aim</h4>
            You must try to capture either
            <ul>
              <li>3 marbles of each color,</li>
              <li>or 4 white marbles,</li>
              <li>or 5 gray marbles,</li>
              <li>or 6 black marbles.</li>
            </ul>
            The winner is the first player to achieve one of these goals.

            <h4>Preparation</h4>
            In total you have 49 rings.
            To play the basic game you need only 37 of them.
            So, you don’t need the 12 remaining rings yet.
            After mastering the basic strategies, you can use 11 of them to play ZÈRTZ on a board with 48 rings.
            (See Expanded board below.)
            <br>
            <img :src="zertzDiagram1">
            <br>
            Diagram 1: The board at the start of the game.
            <br>
            <ol>
              <li>Take 37 rings and assemble a hexagonal game board.</li>
              <li>The 6 white, 8 grey and 10 black marbles are the "pool". Put the pool next to the board, so that both
                players can easily reach the marbles.</li>
              <li>Draw lots to determine who will go first.</li>
            </ol>

            <h4>Making a move</h4>
            When it is your turn, there are two possible moves: you either place a marble of any color on the board and
            then remove a ring, or you capture one or more marbles.Placing a marble and removing a board piece
            <ol>
              <li>When it is your turn, you first select a marble from the pool. Next you must place it on the board.
                You may select any color you wish and you may place the marble on any vacant ring. Important: the
                marbles, in the pool as well as on the board, belong to both players (i.e. neither you, nor your
                opponent have your "own" marbles to play with).</li>
              <li>After you have placed a marble on the board, you must remove a “free” ring. “Free” means: the ring
                must be vacant and it must be positioned at the edge of the board. In other words, there may not be a
                marble on it and you must be able to remove it from the sides without disturbing the position of the
                remaining rings.
                <br>
                <img :src="zertzDiagram2">
                <br>
                Diagram 2: only the rings with an arrow may be removed.
              </li>
              <li>Placing a marble and removing a ring is one turn. You must do both. However, it may occur that you
                cannot remove any of the vacant rings without disturbing the position of the other rings. In this case
                you must not remove a ring (i.e. your move ends after having placed a marble).
                <br>
                Note: don’t stack the rings that you remove on top of each other. It is better to use them to put your
                captured marbles on. (See Captured marbles below.)
              </li>
            </ol>
            <b>Capturing marbles</b>
            <ol>
              <li>Capturing is compulsory; you must do it if you can.</li>
              <li>To capture a marble, you must jump over it with another marble (i.e. as in checkers). You may only
                jump over a marble on an adjacent ring. You may jump in any direction if there is a vacant ring behind
                the marble that you intend to capture.</li>
              <li>The color of the marbles is of no importance when capturing: you may jump with any marble over any
                other marble, no matter the color, no matter whether you or your opponent placed it on the board.</li>
              For example: you put a white marble on the board. A few moves later your opponent places a grey marble
              next to it. There is a vacant ring behind both marbles. You may select the option you think is most
              advantageous: jumping with the white marble over the grey one or the other way around.
              <li>If you jump over a marble and you have the possibility to jump over a second one, then you must do so,
                no matter in which direction you make the second (or third) jump.
                <br>
                <img :src="zertzDiagram3">
                <br>
                Diagram 3: The arrows indicate the different ways to capture.
                <br>
                <i>1 -&gt; 2 and 3</i>
                <br>
                <i>1 -&gt; 2, 4 and 5</i>
                <br>
                <i>2 -&gt; 1</i>
                <br>
                <i>3 -&gt; 2 and 1.</i>
              </li>
              <li>If you can capture different numbers of marbles (e.g. in one direction 1 marble and in another
                direction 2 marbles), you may freely chose which possibility you’ll go for.</li>
              <li>Capturing one or more marbles counts as a complete move. In other words: that turn you may not place
                a marble, nor may you remove a ring.</li>
            </ol>

            <h4>Isolating marbles</h4>
            <ol>
              <li>If you succeed in isolating one or more rings from the main part of the board, you may claim the
                isolated rings, including the marbles on them. Most of the times it will concern one ring, thus one
                marble, but it is not limited to one. This "claiming" should be seen as a second way of capturing
                marbles, but it is not compulsory.
                <br>
                <img :src="zertzDiagram4">
                <br>
                Diagram 4: if you remove the ring indicated by the arrow, you capture the marble on the isolated board
                piece.
                </li>
              <li>You can only capture marbles this way if there are no vacant rings in the isolated group. So, you may
                claim one or more rings when you either put a marble on the last vacant ring of an already isolated
                group, or remove the ring through which a group of occupied rings gets isolated.</li>
              Note: you capture marbles this way as a result of a move; it is not itself a move.
            </ol>
            <h4>End of the game</h4>
            As mentioned at the beginning of these rules: the first player to obtain either 3 marbles of each color, or
            4 white marbles, or 5 grey marbles, or 6 black marbles wins the game.

            <h4>Special cases</h4>
            <ol>
              <li>It may occur that there are no more marbles in the pool before the game has ended. In this case you
                must continue with your captured marbles. As with selecting a marble from the pool, you may choose any
                color of your captured marbles to play with - and this goes on until one of the two players gets a
                winning set of marbles.</li>
              <li>In the extreme event (not to exclude the possibility) that all the rings would be occupied before
                either of the players achieves one of the set goals, it is the one who put a marble on the last vacant
                ring who wins. In fact, he may claim all of the remaining rings, including the marbles, for this
                situation is to be seen as an isolated group of occupied rings.</li>
              <li>If it would happen that two players start repeating the same sequence of moves, the game ends in a
                tie.</li>
            </ol>

            <h4>A bit of strategy</h4>See diagram 5 below! Player A is 5 marbles behind, but he can win the game from
            here! He puts a black marble on ring 1 and removes ring 2. By doing so, he forces Player B to jump over (and
            to capture) that black marble. The fact that it is a black marble, means that Player B hasn’t a winning
            combination yet. Then player A goes again: he puts a white marble on ring 3 and removes 4. He captures the 2
            white marbles on the isolated rings and wins with a set of 4 white marbles!
            <br>
            <img :src="zertzDiagram5">
            <br>
            Diagram 5

            <h4>Expanded board</h4>
            ZÈRTZ was initially released with only 37 rings. That is all you need to explore the game and to find out
            how challenging it is. However, once you have become an expert player you may want to play with more rings.
            <br>
            The extra rings you need to play ZÈRTZ on a larger board were available from the beginning, but only as a
            part of GIPF Set 2. This new version of ZÈRTZ contains 12 more rings than the initial version. But be
            careful! Playing on an enlarged board only makes sense if you have first mastered the basic strategies.
            ZÈRTZ is a fast and explosive game. If you add extra rings too soon, you risk to turn it into a long,
            possibly even boring game - and that is not the purpose!
            <br>
            On the other hand, once you are familiar with the principles of making sacrifices and long sequences of
            forced moves, then you will find an extra challenge in making the board larger. For example: you can add a
            row 3 rings at one side of the board. 3 extra rings don’t add that much complexity, but they change the
            board into an irregular hexagon and that implies that you now have more different opening moves. You can go
            one step further and play with 6 or 7 extra rings. If you want to play the tournament version, you must add
            11 rings. The more rings, the harder it is to control the game!
            <br>
            Note: you don’t need extra marbles; the number of marbles and the conditions to win remain unchanged.
            <br>
            <img :src="zertzDiagram6">
            <br>
            Diagram 6
            <br>
            <i>To play with 40 rings: add rings 1.</i>
            <br>
            <i>To play with 43 rings: add rings 1 and 2.</i>
            <br>
            <i>To play with 44 rings: add rings 1 and 3.</i>
            <br
          ><i>To play with 48 rings: add all the rings.</i>

            <h4>Tournament rules</h4>
            <ol>
              <li>Tournaments are played on a board that consists of at least 48 rings. (If you want to play on a board
                that is even larger than 48 rings, you’ll need GIPF Set 2, which contains 12 more rings. ZÈRTZ with 24
                added rings, thus on a board with 61 rings, may well become the ultimate tournament version some day.)
              </li>
              <li>Handling the marbles and the rings: (a) once you have taken a marble from the pool, you must play it
                (i.e. you may not put it back and chose a marble of another color), (b) as soon as you touch a ring with
                the marble you play with, you must put it on that ring, and (c) as soon as you touch a vacant ring at
                the edge of the board, you must remove that ring.</li>
              <li>Capturing is compulsory, meaning that you may force the opponent to take back his last move if he
                didn’t do so. (Taking back a move includes putting back the removed ring.)</li>
              For example: you put a marble on the board and create an opportunity for a capture. Your opponent does not
              capture; he takes a marble, places it on the board and next removes a ring. You may have a look at the new
              situation and either do the capturing yourself, or force your opponent to take back his move and oblige
              him capture. (If you don’t ask your opponent to take back his move and you don’t capture either, then it
              is your opponent, when it is his turn again, who may force you to take back your last move.
            </ol>

            <h4>Blitz variant</h4>
            This variant concerns the original "Basic Game". It is a short, very aggressive and unforgiving version to
            play ZÈRTZ. It is played on a board with 37 rings, and with one marble less per color. So, you only need 5
            white marbles, 7 grey marbles and 9 black marbles. Now you must either capture only 2 marbles of each color,
            or 3 whites, or 4 greys, or 5 blacks to win the game.
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
        zertzDiagram1: require('../../../assets/zertz/diagram1.gif'),
        zertzDiagram2: require('../../../assets/zertz/diagram2.gif'),
        zertzDiagram3: require('../../../assets/zertz/diagram3.jpg'),
        zertzDiagram4: require('../../../assets/zertz/diagram4.gif'),
        zertzDiagram5: require('../../../assets/zertz/diagram5.jpg'),
        zertzDiagram6: require('../../../assets/zertz/diagram6.jpg')
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