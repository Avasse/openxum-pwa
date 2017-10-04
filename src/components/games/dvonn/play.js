import * as OpenXum from '../openxum/OpenXum'
import * as Dvonn from './js/Dvonn'

export default {
  data () {
    return {}
  },
  mounted() {
    new OpenXum.GamePage(Dvonn, 'dvonn', 0, 0 , 1 , 'ai', '-1', 0, 'eric', 'eric', 'nath', 0);
  }
}