<template>
  <v-layout row class="mt-1">
    <v-flex xl2 lg2 md8 sm10 xs12 offset-xl5 offset-lg5 offset-md2 offset-sm1>
      <v-card class="grey lighten-4 elevation-0">
        <v-card-text>
          <v-container fluid>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Game name</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-text-field placeholder="enter game name" v-model="name" required/>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Color</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-radio-group v-model="color" row>
                  <v-radio v-for="c in colors" :key="c.key" :label="c.value" :value="c.key"/>
                </v-radio-group>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Mode</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-radio-group v-model="mode" row>
                  <v-radio v-for="m in modes" :key="m.key" :label="m.value" :value="m.key"/>
                </v-radio-group>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-subheader>Type</v-subheader>
              </v-flex>
              <v-flex xs8>
                <v-radio-group v-model="type" row>
                  <v-radio v-for="t in types" :key="t.key" :label="t.value" :value="t.key"/>
                </v-radio-group>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <v-btn @click="createGame" light color="warning">Create</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'CreateGame',
    data () {
      return {
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

        console.log("OK");

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