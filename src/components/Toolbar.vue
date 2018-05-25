<template>
  <v-toolbar dense class="primary">
    <v-toolbar-items class="hidden-md-and-up">
      <v-toolbar-side-icon/>
    </v-toolbar-items>
    <v-toolbar-title v-text="title"/>
    <v-spacer/>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/home">
          <v-icon left>home</v-icon>
          Home
      </v-btn>
      <v-btn flat to="/games">
          <v-icon left>videogame_asset</v-icon>
          Games
      </v-btn>
      <v-btn flat v-if="checkLogin">
          <v-icon left>insert_chart</v-icon>
          Ranking
      </v-btn>
      <v-btn flat v-if="checkLogin">
          <v-icon left>wifi_off</v-icon>
          Offline
      </v-btn>
      <v-btn flat to="/faq">
          <v-icon left>question_answer</v-icon>
          FAQ
      </v-btn>
      <v-btn flat to="/profile" v-if="checkLogin">
          <v-icon left>account_box</v-icon>
          Profile
      </v-btn>
      <v-btn flat to="/signup" v-if="!checkLogin">
          <v-icon left>person_add</v-icon>
          Sign up
      </v-btn>
    </v-toolbar-items>
    <v-spacer/>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-menu bottom left>
        <v-btn slot="activator" flat dark>
        <v-icon left>fas fa-language</v-icon>
        </v-btn>
        <v-list>
        <v-list-tile v-for="(lang, i) in languages" :key="i" @click="$emit('switchLang', i)">
            <v-list-tile-title>{{ lang.label }}</v-list-tile-title>
        </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn flat to="/login" v-if="!checkLogin">
        <v-icon left>how_to_reg</v-icon>
        Sign in
      </v-btn>
      <v-btn flat @click="$emit('switchLight')">
        <v-icon v-if="light">wb_sunny</v-icon>
        <v-icon v-if="!light">brightness_2</v-icon>
      </v-btn>
      <v-btn flat @click="$emit('logout')" v-if="checkLogin">
        <v-icon>fas fa-sign-out-alt</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    data () {
      return {
        title: 'OpenXum',
      }
    },
    props: ['light', 'languages'],
    computed: {
      checkLogin () {
        return this.$store.state.isLoggedIn;
      }
    }
  }
</script>

<style>
  .toolbar .toolbar__items .btn:not(.btn--disabled), .toolbar__title {
    color: white;
  }
</style>
