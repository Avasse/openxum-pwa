<template>
  <v-app :dark="!light" :light="light">
    <toolbar
      :light="light"
      :languages="languages"
      @logout="logout"
      @switchLang="switchLang"
      @switchLight="switchLight"/>
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
  import i18n from './i18n'

  export default {
    data () {
      return {
        title: 'OpenXum',
        light: true,
        languages: {
          fr: {
            label: 'TRADUCTION.FRENCH',
            src: require('./assets/flags/fr.png')
          },
          en: {
            label: 'TRADUCTION.ENGLISH',
            src: require('./assets/flags/en.png')
          }
        }
      }
    },
    components: {
      Toolbar
    },
    created () {
      this.initLight();
      this.initLang();
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

      initLight () {
        if (localStorage.getItem('light') === null) {
          this.light = true;
          localStorage.setItem('light', 'true');
        } else {
          this.light = localStorage.getItem('light') === 'true';
        }
      },

      switchLang (id) {
        if (id === 'fr') {
          i18n.locale = 'fr';
          localStorage.setItem('lang', 'fr');
        }
        else if (id === 'en') {
          i18n.locale = 'en';
          localStorage.setItem('lang', 'en');
        }
      },

      initLang () {
        if (localStorage.getItem('lang') === null) {
          localStorage.setItem('lang', 'fr');
        } else {
          i18n.lang = localStorage.getItem('lang');
        }
      },
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
