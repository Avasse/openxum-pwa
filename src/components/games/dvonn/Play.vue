<template>
  <v-container fluid>
    <v-layout row text-xs-center>
      <v-flex xl4 lg6 md8 sm10 xs12 offset-xl4 offset-lg3 offset-md2 offset-sm1 offset-xs0>
        <v-btn color="success" light id="status">Ready!</v-btn>
        <v-btn color="warning" light id="replay">Replay</v-btn>
        <v-btn color="error" light id="list" v-on:click.native="displayMoveList()">Move list</v-btn>
        <div id="boardDiv">
          <canvas id="board"/>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent>
        <v-card>
          <v-card-title class="headline">Move list</v-card-title>
          <v-card-text id="moveListBody">
            <ol>
              <li v-for="move in moves">{{move}}</li>
            </ol>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="green--text darken-1" flat="flat" @click.native="dialog = false">OK</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script src="./play.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  canvas {
    width: 600px;
    height: 600px;
    padding-left: 0;
    padding-right: 0;
    margin-left: auto;
    margin-right: auto;
    display: block;
    border-radius: 15px;
    -moz-border-radius: 15px;
    box-shadow: 8px 8px 2px #aaa;
  }
</style>