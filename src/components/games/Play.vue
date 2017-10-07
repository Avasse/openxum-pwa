<template>
  <v-container fluid>
    <v-btn :to="`/create/${gameType}`" light warning>Create</v-btn>
  </v-container>
</template>

<script>
  import { APIENDPOINT, getHeader } from '../../app.config';
  import axios from 'axios';

  export default {
    data () {
      return {
        gameType: '',
        games: {}
      }
    },
    mounted() {
      var app = this;

      this.gameType = this.$route.params.gameType;
      (new Promise(function (resolve, reject) {
        const status = JSON.parse(window.localStorage.getItem('openXumUser'));
        const url = APIENDPOINT + '/api/game/all/' + status.data.id + '/' + app.$route.params.gameType;
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
          app.games = res.data;
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style/>