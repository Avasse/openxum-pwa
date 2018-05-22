<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Sign up</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="signUpDetails.email"
                  required
                  id="email"
                  prepend-icon="email"
                  name="email"
                  label="Email"
                  type="email"></v-text-field>
                <v-text-field
                  v-model="signUpDetails.username"
                  required
                  prepend-icon="person"
                  name="login"
                  label="Login"
                  type="text"></v-text-field>
                <v-text-field
                  v-model="signUpDetails.password"
                  required
                  id="password"
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="signUpUser" value="login" color="primary">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  import loginService from './loginService.js';

  export default {
    name: 'SignUp',
    data() {
      return {
        signUpDetails: {
          username: '',
          password: '',
          email: ''
        }
      }
    },
    methods: {
      signUpUser: function () {
        const authUser = {};
        var app = this;

        loginService.login(this.loginDetails)
          .then(function (res) {
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
          })
          .catch(function (err) {
            console.log(err.data)
          })
      },
      loginAuth: function () {
        var app = this;
        const status = JSON.parse(window.localStorage.getItem('openXumUser'));

        if (status === null || status === undefined) {
          app.$router.push('/login');
        } else if (status.data.role === 'admin') {
          app.$router.push('/admin');
        } else {
          app.$router.push('/');
        }
      }
    },
    created: function () {
      // this.loginAuth();
    }
  }
</script>

<style lang="css">
</style>