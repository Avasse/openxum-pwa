import * as OpenXum from '../openxum/OpenXum'
import * as Dvonn from './js/Dvonn'

var page;

export default {
  data () {
    return {
      dialog: false,
      moves: []
    }
  },
  mounted() {
    page = new OpenXum.GamePage(Dvonn, 'dvonn', 0, 0 , 1 , 'ai', '-1', 0, 'eric', 'eric', 'nath', 0);
  },
  methods: {
    displayMoveList() {
      var list = page.get_moves();
      var moves = [];

      list.split(";").forEach(function (str) {
        if (str !== '') {
          var move = page.build_move();

          move.parse(str);
          moves.push(move.to_string());
        }
      });
      this.moves = moves;
      this.dialog = true;
    }
  }
}