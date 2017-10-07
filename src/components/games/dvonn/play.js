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
    var color = this.$route.params.color === 'black' ? 0 : 1;
    var opponent_color = this.$route.params.color === 'black' ? 1 : 0;
    var mode = this.$route.params.mode === 'regular' ? 0 : 1;
    const status = JSON.parse(window.localStorage.getItem('openXumUser'));

    // TODO: owner_id = user_id ; opponent_id = '' ; replay = 0
    page = new OpenXum.GamePage(Dvonn, 'dvonn', 0, color, opponent_color , this.$route.params.type,
      this.$route.params.idGame, mode, status.data.username, status.data.username, '', 0);
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