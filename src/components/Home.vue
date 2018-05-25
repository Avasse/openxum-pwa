<template>
  <div class="home">
    <v-content>
      <section>
        <v-parallax :src="require('../assets/Home/headerTop.jpeg')" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img :src="require('../assets/openxum.png')" alt="Openxum" height="200">
            <h1 class="white--text mb-2 display-1 text-xs-center">Abstract Strategy Game Platform</h1>
            <div class="subheading mb-3 text-xs-center">Powered by OpenXum</div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              to="/games">
              Discover
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Welcome to the world of abstract board games!</h2>
              <span class="subheading">
                Join OpenXum Community
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">language</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Compete against the world</div>
                    </v-card-title>
                    <v-card-text style="text-align: justify">
                      Join the largest abstract boardgame table in the world. No download necessary, play directly from
                      your web browser. With your friends and thousands of players from the whole world.
                      Take the time to play.  Alone or with friends? Play at your own pace. Instant play / No wait / No plugin needed.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">games</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Artificial Intelligence</div>
                    </v-card-title>
                    <v-card-text style="text-align: justify">
                      Our games have been carefully selected. Most of them won prestigious awards. 
                      They were originally published in France, in Germany, in the USA... They are all easy to learn, quick to play and fun.
                      We offer great Artificial Intelligence. Some robots are easy to beat, some are mighty opponents.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">trending_up</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Tournaments</div>
                    </v-card-title>
                    <v-card-text style="text-align: justify">
                      Beginner or Pro? Discover and Master. Learn new games or improve your skills at your favorite games, 
                      all at your own pace. Need new challenges? Join ranked games and meet new challenges!
                      The best players rise through the ranks! Let's try and join us! Abstract games of yesterday and today.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax :src="require('../assets/Home/headerBottom.jpeg')" height="350">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">The best abstract games of yesterday and today, adapted for online play.</div>
            <em>Join OpenXum</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              to="/games"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

    </v-content>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return { }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
