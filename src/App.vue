<template>
  <v-app>
    <v-toolbar fixed>
      <v-toolbar-items class="hidden-md-and-up">
        <v-toolbar-side-icon></v-toolbar-side-icon>
      </v-toolbar-items>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/games">Games</v-btn>
        <v-btn flat>Ranking</v-btn>
        <v-btn flat>FAQ</v-btn>
        <v-btn flat>Sign up</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu :nudge-width="100">
          <v-btn flat slot="activator">
            Languages
            <v-icon>arrow_drop_down</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="item in items" :key="item" @click="">
              <v-list-tile-title v-text="item"></v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn flat>Sign in</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
    <v-footer :fixed="fixed">
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
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main';
</style>
