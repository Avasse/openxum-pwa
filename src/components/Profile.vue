<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>{{ $t('PROFILE.PROFILE') }}</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="userDetails.username"
                  id="username"
                  required
                  prepend-icon="person"
                  name="login"
                  :label="$t('PROFILE.USERNAME')"
                  type="text"></v-text-field>
                <v-text-field
                  v-model="userDetails.password"
                  required
                  id="password"
                  prepend-icon="lock"
                  name="password"
                  :label="$t('PROFILE.PASSWORD')"
                  type="password"></v-text-field>
                <v-text-field
                  v-model="userDetails.email"
                  required
                  id="email"
                  prepend-icon="email"
                  name="email"
                  :label="$t('PROFILE.EMAIL')"
                  type="email"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="updateUser" value="updateUser" color="primary">{{ $t('PROFILE.UPDATE') }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  import accountService from '../services/AccountService.js';

  export default {
    name: 'Profile',
    data() {
      return {
        userDetails: {
          username: '',
          password: '',
          email: ''
        }
      }
    },
    created () {
      var user = JSON.parse(window.localStorage.getItem('openXumUser'));
      this.userDetails = user.data;
    },
    methods: {
      updateUser: function () {
        const authUser = {};
        var app = this;

        accountService.updateUser(this.userDetails).then(res => {
          if (res.status === 200) {
            authUser.data = res.data.user;
            authUser.token = res.data.token;
            app.$store.state.isLoggedIn = true;
            window.localStorage.setItem('openXumUser', JSON.stringify(authUser));
            if (authUser.data.role === 'admin') {
              app.$router.push('/admin');
            } else {
              app.$router.push('/');
            }
          } else {
            app.$store.state.isLoggedIn = false;
          }
        }).catch(function (err) {
          console.log(err.data)
        })
      }
    }
  }
</script>

<style lang="css">
</style>