<template>
  <v-app :dark="!light" :light="light">
    <toolbar
      :light="light"
      :languages="languages"
      @logout="logout()"
      @switchLang="switchLang()"
      @switchLight="switchLight()"/>
    <div class="main">
      <router-view></router-view>
    </div>
    <v-footer fixed v-if="!isHomePage">
      <span>&copy; 2014-2017 OpenXum</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Toolbar from './components/Toolbar.vue'

  export default {
    data () {
      return {
        title: 'OpenXum',
        light: true,
        languages: {
          en: {
            label: 'English',
            src: require('./assets/flags/en.png')
          },
          fr: {
            label: 'French',
            src: require('./assets/flags/fr.png')
          }
        }
      }
    },
    components: {
      Toolbar
    },
    created () {
      if (localStorage.getItem('light') === null) {
        this.light = true;
        localStorage.setItem('light', true);
      } else {
        this.light = localStorage.getItem('light') === 'true' ? true : false
      }
    },
    methods: {
      logout () {
        var app = this;

        localStorage.removeItem("openXumUser");
        app.$router.push({ name: 'Home'});
        app.$store.state.isLoggedIn = false;
      },

      switchLight () {
        this.light = !this.light;
        localStorage.setItem('light', this.light);
      },

      switchLang () {}
    },
    computed: {
      isHomePage () {
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
