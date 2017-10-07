<template>
  <v-container fluid>
  </v-container>
</template>

<script>
  import { APIENDPOINT, getHeader } from '../app.config';
  import axios from 'axios';

  export default {
    data () {
      return {
        games: []
      }
    },
    mounted() {
      var app = this;

      (new Promise(function (resolve, reject) {
        const status = JSON.parse(window.localStorage.getItem('openXumUser'));
        const url = APIENDPOINT + '/api/game/offline/' + status.data.id;
        const config = {'headers': getHeader()};

        axios.get(url, config)
          .then(function (res) {
            resolve(res);
          })
          .catch(function (err) {
            reject(err)
          })
      })).then(function (res) {
        if (res.status === 200) {
          app.games = res.data.my_offine_games;
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style/>