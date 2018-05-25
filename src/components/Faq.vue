<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 lg5 mb-3>
        <v-expansion-panel v-for="(question, i) in questions" :key="i" popout>
          <v-expansion-panel-content v-model="question.show">
            <div slot="header">{{ question.title }}</div>
            <v-card>
              <v-card-text>{{ question.answer }}</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        questions : [
            {
                show: true,
                title: "Why can't I play games?",
                answer: "You must be logged in to play any of the games."
            },
            {
                show: true,
                title: "I don't have an account, how do I log in?",
                answer: "You can register on the website in the Sign up page."
            },
            {
                show: true,
                title: "How can I see the rules of the games?",
                answer: "Just click on the 'rules' button on the game."
            },
            {
                show: true,
                title: "Who created all these great games?",
                answer: "Kris burm created these games, he is a Belgian game designer specializing in abstract board games. All his published games are abstract, except Dicemaster, which is a collectible dice game."
            },
            {
                show: true,
                title: "What is the GIPF project?",
                answer: "The GIPF Project is an award-winning series of seven abstract strategy games by designer Kris Burm. The series is named after the first game, GIPF, and the idea behind the project is that the reward for winning each of the other games in the series is to allow the winner to introduce new pieces with special powers. List of project Gipf games : GIPF, TAMSK, ZÈRTZ, DVONN, YINSH, PÜNCT, TZAAR, LYNGK"
            },
            {
                show: true,
                title: "Can I order a game on the site?",
                answer: "We do not make any sales."
            },
            {
                show: true,
                title: "Where can I get these games?",
                answer: "You can buy these games in game specialized shop."
            },
            {
                show: true,
                title: "Can I play these game with a friend?",
                answer: "Yes, you can play these games with a friend or also against an AI if you're alone or you want to train!"
            },
        ],

        show: true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .expansion-panel__header {
        background-color: #1976d2;
        color: white;
    }
</style>