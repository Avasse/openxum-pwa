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
            <h1 class="white--text mb-2 display-1 text-xs-center">{{ $t('HOME.HEADER') }}</h1>
            <div class="subheading mb-3 text-xs-center">{{ $t('HOME.POWERED') }}</div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              to="/games">
              {{ $t('HOME.DISCOVER') }}
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
              <h2 class="headline">{{ $t('HOME.SECTIONHEADER') }}</h2>
              <span class="subheading">
                {{ $t('HOME.JOIN') }}
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
                      <div class="headline text-xs-center">{{ $t('HOME.DIVLEFTTITLE') }}</div>
                    </v-card-title>
                    <v-card-text style="text-align: justify">
                      {{ $t('HOME.DIVLEFTTEXT') }}
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">games</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">{{ $t('HOME.DIVMIDTITLE') }}</div>
                    </v-card-title>
                    <v-card-text style="text-align: justify">
                      {{ $t('HOME.DIVMIDTEXT') }}
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">trending_up</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">{{ $t('HOME.DIVRIGHTTITLE') }}</div>
                    </v-card-title>
                    <v-card-text style="text-align: justify">
                      {{ $t('HOME.DIVRIGHTTEXT') }}
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
            <div class="headline white--text mb-3 text-xs-center">{{ $t('HOME.SECTIONBOTHEADER') }}</div>
            <em>{{ $t('HOME.SECTIONBOTTEXT') }}</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              to="/games"
            >
              {{ $t('HOME.GETSTARTED') }}
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
