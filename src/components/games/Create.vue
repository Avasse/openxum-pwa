<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>{{ $t('CREATEGAME.CREATEGAME') }}</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="name"
                  id="name"
                  required
                  prepend-icon="videogame_asset"
                  name="name"
                  :label="$t('CREATEGAME.NAME')"
                  type="text"/>
                <v-radio-group
                  :label="$t('CREATEGAME.COLOR') + '*'"
                  v-model="color"
                  row>
                  <v-radio
                    v-for="c in colors"
                    :key="c.key"
                    :label="c.value"
                    :value="c.key"/>
                </v-radio-group>
                <v-radio-group
                  :label="$t('CREATEGAME.MODE') + '*'"
                  v-model="mode"
                  row>
                  <v-radio
                    v-for="m in modes"
                    :key="m.key"
                    :label="m.value"
                    :value="m.key"/>
                </v-radio-group>
                <v-radio-group
                  :label="$t('CREATEGAME.TYPE') + '*'"
                  v-model="type"
                  row>
                  <v-radio
                    v-for="t in types"
                    :key="t.key"
                    :label="t.value"
                    :value="t.key"/>
                </v-radio-group>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="createGame" value="createGame" color="primary">{{ $t('CREATEGAME.CREATE') }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  import { APIENDPOINT, getHeader } from '../../app.config';
  import axios from 'axios';

  export default {
    name: 'CreateGame',
    data () {
      return {
        gameType: '',
        name: '',
        color: '',
        colors: [],
        mode: '',
        modes: [],
        type: '',
        types: []
      }
    },
    methods: {
      createGame: function () {
        if (this.name !== '') {
          if (this.type === 'ai' || this.type === 'remote_ai' || this.type === 'gui') {
            this.$router.push('/games/play/' + this.gameType + '/' + this.type + '/' + this.color + '/' + this.mode + '/' + '-1');
          } else if (this.type === 'offline') {
            var app = this;

            (new Promise(function (resolve, reject) {
              const status = JSON.parse(window.localStorage.getItem('openXumUser'));
              const url = APIENDPOINT + '/api/game/create/' + app.gameType + '/' + app.name + '/' + app.color + '/' + app.mode;
              const config = {'headers': getHeader()};

              axios.post(url, {}, config)
                .then(function (res) {
                  resolve(res);
                })
                .catch(function (err) {
                  reject(err)
                })
            })).then(function (res) {
              if (res.status === 200) {

                console.log('OK');

              }
            }).catch(function (err) {
              console.log(err);
            });

          } else { // online
            /*          req.app.db.models.GameType.findOne({ name: req.param('game') }, null,
            { safe: true }, function (err, gametype) {
            req.app.db.models.Game.findOne({ name: req.param('name') }, null,
            { safe: true }, function (err, game) {
            if (!game) {
            var fieldsToSet = {
            name: req.param('name'),
            game: gametype._id,
            color: req.param('color'),
            mode: req.param('mode'),
            type: 'online',
            status: 'wait',
            userCreated: {
            id: req.user._id,
            name: req.user.username
            },
            opponent: { id: null }
            };
            req.app.db.models.Game.create(fieldsToSet, function (err, user) {
            });
            }
            });
            });
            res.redirect('/games/new/?game='  + req.param('game')); */
          }
        }
      }
    },
    mounted() {
      var options = {
        dvonn: {
          colors: {
            init: 'black',
            list: [
              {key: 'black', value: 'Black'},
              {key: 'white', value: 'White'}
            ]
          },
          modes: {
            init: 'regular',
            list: [
              {key: 'regular', value: 'Regular'}
            ]
          },
          types: {
            init: 'ai',
            list: [
              {key: 'gui', value: 'GUI'},
              {key: 'online', value: 'Online'},
              {key: 'ai', value: 'AI'},
              {key: 'offline', value: 'Offline'}
            ]
          }
        },
        tzaar: {
          color_keys: ['black', 'white'],
          colors: ['Black', 'White'],
          default_color: 'black',
          mode_keys: ['regular'],
          modes: ['Regular'],
          default_mode: 'regular',
          type_keys: ['gui', 'online', 'ai', 'offline'],
          types: ['GUI', 'Online', 'AI', 'Offline'],
          default_type: 'ai'
        },
        gipf: {
          color_keys: ['black', 'white'],
          colors: ['Black', 'White'],
          default_color: 'black',
          mode_keys: ['basic', 'standard', 'tournament'],
          modes: ['Basic', 'Standard', 'Tournament'],
          default_mode: 'basic',
          type_keys: ['gui', 'online', 'ai', 'offline'],
          types: ['GUI', 'Online', 'AI', 'Offline'],
          default_type: 'ai'
        },
        yinsh: {
          color_keys: ['black', 'white'],
          colors: ['Black', 'White'],
          default_color: 'black',
          mode_keys: ['regular', 'blitz'],
          modes: ['Regular', 'Blitz'],
          default_mode: 'regular',
          type_keys: ['gui', 'online', 'ai', 'offline'],
          types: ['GUI', 'Online', 'AI', 'Offline'],
          default_type: 'ai'
        },
        kamisado: {
          color_keys: ['black', 'white'],
          colors: ['Black', 'White'],
          default_color: 'black',
          mode_keys: ['simple', 'standard', 'long', 'marathon'],
          modes: ['Simple', 'Standard', 'Long', 'Marathon'],
          default_mode: 'simple',
          type_keys: ['gui', 'online', 'ai', 'remote_ai', 'offline'],
          types: ['GUI', 'Online', 'AI', 'Remote AI', 'Offline'],
          default_type: 'ai'
        },
        invers: {
          color_keys: ['red', 'yellow'],
          colors: ['Red', 'Yellow'],
          default_color: 'red',
          mode_keys: ['standard'],
          modes: ['Standard'],
          default_mode: 'standard',
          type_keys: ['gui', 'online', 'ai', 'remote_ai', 'offline'],
          types: ['GUI', 'Online', 'AI', 'Remote AI', 'Offline'],
          default_type: 'ai'
        },
        zertz: {
          color_keys: ['one', 'two'],
          colors: ['One', 'Two'],
          default_color: 'one',
          mode_keys: ['regular', 'blitz'],
          modes: ['Regular', 'Blitz'],
          default_mode: 'regular',
          type_keys: ['gui', 'online', 'ai', 'offline'],
          types: ['GUI', 'Online', 'AI', 'Offline'],
          default_type: 'ai'
        },
        pentago: {
          color_keys: ['black', 'white'],
          colors: ['Black', 'White'],
          default_color: 'black',
          mode_keys: ['standard'],
          modes: ['Standard'],
          default_mode: 'standard',
          type_keys: ['gui', 'online', 'ai', 'offline'],
          types: ['GUI', 'Online', 'AI', 'Offline'],
          default_type: 'ai'
        },
        paletto: {
          color_keys: ['player_1', 'player_2'],
          colors: ['Player 1', 'Player 2'],
          default_color: 'player_1',
          mode_keys: ['standard'],
          modes: ['Standard'],
          default_mode: 'standard',
          type_keys: ['gui', 'online', 'ai'],
          types: ['GUI', 'Online', 'AI'],
          default_type: 'ai'
        }
      };

      this.gameType = this.$route.params.gameType;
      this.colors = options[this.$route.params.gameType].colors.list;
      this.color = options[this.$route.params.gameType].colors.init;
      this.modes = options[this.$route.params.gameType].modes.list;
      this.mode = options[this.$route.params.gameType].modes.init;
      this.types = options[this.$route.params.gameType].types.list;
      this.type = options[this.$route.params.gameType].types.init;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style/>