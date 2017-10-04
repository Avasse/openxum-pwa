import * as OpenXum from '../openxum/OpenXum'
import * as Dvonn from './js/Dvonn'
import $ from 'jquery'

var page;

export default {
  data () {
    return {
      dialog: false
    }
  },
  mounted() {
    page = new OpenXum.GamePage(Dvonn, 'dvonn', 0, 0 , 1 , 'ai', '-1', 0, 'eric', 'eric', 'nath', 0);
  },
  methods: {
    displayMoveList() {
      var body = $('#moveListBody');
      var moves = page.get_moves();
      var list = $('<ol>');

      body.empty();
      moves.split(";").forEach(function (str) {
        if (str !== '') {
          var item = $('<li>');
          var move = page.build_move();

          move.parse(str);
          item.html(move.to_string());
          item.appendTo(list);
        }
      });
      list.appendTo(body);
      this.dialog = true;
    }
  }
}