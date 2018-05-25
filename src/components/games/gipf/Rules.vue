<template>
  <v-container fluid>
    <v-layout>
      <v-flex xl4 lg6 md8 sm10 xs12 offset-xl4 offset-lg3 offset-md2 offset-sm1>
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">Rules - Gipf by Kris Burm</div>
            </div>
          </v-card-title>
          <v-card-text>
            <h4>Aim</h4>
            The first player to create a situation where his opponent either has no more pieces in his reserve or no
            more GIPF-pieces on the board, wins the game. So, keep in mind: make sure to always have at least one piece
            in reserve and always at least one GIPF-piece on the board.

            <h4>Pieces</h4>
            The players start with 18 pieces in reserve each. Pieces in reserve are pieces of your own color that are
            not in play. A GIPF-piece is 2 pieces stacked one upon another.

            <h4>The board</h4>
            There are 24 dots at the edges of the pattern on the board. Dots are not part of the play area; they serve
            to position a piece before bringing it into play. The play area is made up of 37 spots (intersections). Only
            the pieces covering a spot are part of the game. The lines indicate in which directions pieces may be moved.
            <br>
            <img :src="gipfDiagram1">

            <h4>The start</h4>
            The board is empty. Both players have 18 pieces in reserve.

            <h4>First move: GIPF-piece</h4>
            Draw lots for your color. If you draw white, you begin. Your first move must be a GIPF-piece. Take two
            pieces out of your reserve and stack them on top of each other; put the double piece on any of the black
            dots and next push it onto an adjacent spot. You may move a piece only one spot at a time, never two or
            more. Then your opponent brings a GIPF-piece into play.
            <br>
            <img :src="gipfDiagram2">

            <h4>Moving other pieces</h4>
            Both players have made one move. When introducing a piece you can either move it to an empty spot, or to an
            already occupied spot. If the spot is already occupied, it must first be cleared: the piece occupying it,
            regardless of its color, must be moved to the next spot on the line (if that spot would also be occupied,
            then this piece also moves over one spot, etc.). Next, push the piece onto the cleared spot. In the diagram
            Black moved over the white GIPF-piece one spot.
            <br>
            <img :src="gipfDiagram3">

            <h4>Introducing single pieces</h4>
            Both players may introduce as many GIPF-pieces as they want, until they bring a single piece into play. When
            learning the game, we advise you to play with 3 or 4 GIPF-pieces. In the diagram Black just played a single
            piece (on spot d2) and may introduce no more GIPF-pieces during the rest of the game. White may still do so
            until he, too, plays his first single piece.
            <br>
            <img :src="gipfDiagram4">
            <br>
            Two restrictions:
            <br>
            <ul>
              <li>A piece already in play may not be moved as a separate piece. A piece (or more pieces) on the board
                can only be moved by introducing a new piece. All of the pieces in play may be pushed by both players,
                black and white pieces, single and GIPF-pieces.</li>
              <li>When all the spots on a line are occupied, you cannot play in the direction of that line. If you
                would, you would push a piece out of the game at the opposite site and that is not allowed.</li>
            </ul>

            <h4>Recycling and capturing pieces</h4>
            Very simple: as soon as 4 single pieces of your color are lined up on adjacent spots (dots don't count!), it
            is compulsory to take them from the board. Moreover, not only must these 4 pieces be removed, but also the
            pieces that form a direct extension of them. The pieces of your own color are returned to your reserve, the
            pieces of the other color are captured, thus lost to your opponent. (See diagrams below)

            <h4>GIPF-pieces in play</h4>
            A GIPF-piece counts for just one piece. The only difference between a single piece and a GIPF-piece (no
            matter the color) it that GIPF-pieces may be left on the board when they are part of a row that must be
            removed. If you remove a GIPF-piece of your color, you may not introduce it as a GIPF-piece any more if you
            already started playing with single pieces: you must split the GIPF-piece into two single pieces.
            <br>
            <img :src="gipfDiagram5">
            <br>
            Diagram: White played a1-f5 (indicated with the arrow). By doing so, he pushed a white piece onto the
            central spot and formed himself a row of 4 pieces on the e-diagonal. He must remove the 3 single pieces and
            may chose what to do with the GIPF-piece, i.e. remove it or leave it on its spot. The 2 pieces at the other
            end of the diagonal remain on the board, because they don't extend the row of 4 without interruption.
            <br>
            <img :src="gipfDiagram6">
            <br>
            In the diagram you see a row of 4 white pieces on the a5-i1 diagonal. White must remove the 4 pieces in a
            row AND the white and black single piece extending the row AND, if wanted, the Black GIPF-piece… which
            results in the situation in the next diagram...
            <br>
            <img :src="gipfDiagram7">
            <br>
            White took the Black-GIPF-piece on c5, of course. It rarely happens that it is better to leave an opponent's
            GIPF-piece on the board. In total White captured 3 black pieces and recycled 5 white pieces. So, as you see,
            each time a player forms a row, quite a few pieces are to be removed. As such, GIPF is played in waves: you
            put pieces on the board, trying to get in a position that will allow you to capture something, and if you do
            so, you must start building again...

            <h4>Forced capture</h4>
            Taking pieces from the board is not a move in itself; it is always the result of a move, either your move,
            or your opponent's. In the diagram white played b1-e4 and completed a row of 4 black pieces. Black must take
            the 3 single pieces from the board, and decide what he'll do with the GIPF-piece, and must then make a move.
            Now Black has more pieces in reserve, but White's advantage is that Black has less pieces on the board, thus
            a weaker position!
            <br>
            <img :src="gipfDiagram8">
            <br>
            Note: if one or two pieces would extend the row (no matter what color), Black must take them, too.

            <h4>2 rows...</h4>
            It may occur that two rows are lined up at the same time. If these rows don't intersect, both must be
            removed. If they do intersect (as shown in the diagram), the player may choose which row he will take. (If
            there would be a GIPF-piece on the spot of intersection, White may first take one row, leave the GIPF-piece
            and the board, and next take the second row.)
            <br>
            <img :src="gipfDiagram9">
            <br>
            When a situation occurs in which both players must remove pieces, the player who caused the situation goes
            first.
            <br>
            <img :src="gipfDiagram10">
            <br>
            In the diagram: White has made the move indicated by the arrow and may take pieces first; he takes 4 white
            pieces and captures a GIPF-piece. Next Black must remove the row of 4 black pieces - and captures nothing.
            <h4>Row of 4 GIPF-pieces</h4>
            It may happen that 4 (or even more) GIPF-pieces of one color are lined up. In this case, you may leave them
            on their spots or you may take one or more from the board. If you decide to leave them on the board and they
            are still lined up when it is your turn again, then you may again choose what you'll do before you make your
            move, and, if they are still lined up after having played, after your move.
            <br>
            <img :src="gipfDiagram11">

            <h4>End of a game</h4>
            There are two ways of winning: you must capture your opponent's last GIPF-piece or you must exhaust his
            reserve. As said in the beginning: a player who has either no more GIPF-pieces on the board, or has no more
            pieces left to make a move, loses the game.
            <br>
            <img :src="gipfDiagram12">
            <br>In the diagram: White captures Black's last GIPF-piece and wins...
            <br>
            <img :src="gipfDiagram13">
            <br>
            Diagram: it is Black's turn. He has only one piece left in his reserve and there's no way to recycle pieces.
            So, he'll run out of pieces and lose with his next turn. (Note that White lost more pieces than Black, yet
            still wins!)

            <h4>Remarks</h4>
            <ul>
              <li>Don't misinterpret the aim of the game; you can only win by capturing the opponent's pieces, not by
                returning your own pieces repeatedly from the board to the reserve!</li>
              <li>A tie is not possible. The first player to run out of pieces loses the game, even if the other player,
                too, would run out of pieces in his next turn.</li>
              <li>Players should always be able to see how many pieces the opponent has left in his reserve. Leave them
                clearly visible next to the board.</li>
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
        gipfDiagram1: require('../../../assets/gipf/rules1_board.gif'),
        gipfDiagram2: require('../../../assets/gipf/rules2_firstpiece.gif'),
        gipfDiagram3: require('../../../assets/gipf/rules3_pushpiece.gif'),
        gipfDiagram4: require('../../../assets/gipf/rules4_singlepiece.gif'),
        gipfDiagram5: require('../../../assets/gipf/rules5a_gipfpiece.gif'),
        gipfDiagram6: require('../../../assets/gipf/rules5b_gipfcapture_a.gif'),
        gipfDiagram7: require('../../../assets/gipf/rules6a_gipfcapture_b.gif'),
        gipfDiagram8: require('../../../assets/gipf/rules7_forcedcapture.gif'),
        gipfDiagram9: require('../../../assets/gipf/rules8_2rows_a.gif'),
        gipfDiagram10: require('../../../assets/gipf/rules9_2rows_b.gif'),
        gipfDiagram11: require('../../../assets/gipf/rules10_4gipfs.gif'),
        gipfDiagram12: require('../../../assets/gipf/rules11_lastgipf.gif'),
        gipfDiagram13: require('../../../assets/gipf/rules12_lastpiece.gif')
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