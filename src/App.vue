<template>
  <v-app dark>
    <v-toolbar dense class="primary">
      <v-toolbar-items class="hidden-md-and-up">
        <v-toolbar-side-icon></v-toolbar-side-icon>
      </v-toolbar-items>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">
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
        <v-btn flat to="/mygames" v-if="checkLogin">
          <v-icon left>wifi_off</v-icon>
          Offline
        </v-btn>
        <v-btn flat v-if="checkLogin">
          <v-icon left>account_box</v-icon>
          Profile
        </v-btn>
        <v-btn flat>
          <v-icon left>question_answer</v-icon>
          FAQ
        </v-btn>
        <v-btn flat to="/signup" v-if="!checkLogin">
          <v-icon left>person_add</v-icon>
          Sign up
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu :nudge-width="100">
          <v-btn flat slot="activator">
            Languages
            <v-icon right>arrow_drop_down</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="item in items" :key="item">
              <v-list-tile-title v-text="item"></v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn flat to="/login" v-if="!checkLogin">
          <v-icon left>how_to_reg</v-icon>
          Sign in
        </v-btn>
        <v-btn flat v-on:click="logout()" v-if="checkLogin">
          <v-icon>power_settings_new</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <div class="main">
      <router-view></router-view>
    </div>
    <v-footer :fixed="fixed" v-if="!isHomePage">
      <span>&copy; 2014-2017 OpenXum</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        fixed: true,
        items: [
          'English', 'French'
        ],
        title: 'OpenXum'
      }
    },
    methods: {
      logout:function() {
        var app = this;

        localStorage.removeItem("openXumUser");
        app.$router.push({ name: 'Home'});
        app.$store.state.isLoggedIn = false;
      }
    },
    computed: {
      checkLogin() {
        return this.$store.state.isLoggedIn;
      },
      isHomePage() {
        return this.$route.name === "Home";
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main';
</style>

<style>
  .toolbar .toolbar__items .btn:not(.btn--disabled), .toolbar__title {
    color: white;
  }
</style>
