<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xl4 lg6 md8 sm10 xs12 offset-xl4 offset-lg3 offset-md2 offset-sm1>
        <v-btn success light id="status">Ready!</v-btn>
        <v-btn warning light id="replay">Replay</v-btn>
        <v-btn error light id="list">Move list</v-btn>
        <div id="boardDiv">
          <canvas id="board"
                  style="width: 600px; height: 600px; padding-left: 0; padding-right: 0; margin-left: auto; margin-right: auto; display: block; border-radius: 15px; -moz-border-radius: 15px; box-shadow: 8px 8px 2px #aaa;"/>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script src="./play.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style/>