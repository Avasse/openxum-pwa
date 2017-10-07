<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xl2 lg2 md8 sm10 xs12 offset-xl5 offset-lg5 offset-md2 offset-sm1>
        <v-card class="grey lighten-4 elevation-0">
          <v-card-text>
            <v-container fluid>
              <v-layout row>
                <v-flex xs4>
                  <v-subheader>Username</v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field placeholder="enter username" v-model="loginDetails.username" required/>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs4>
                  <v-subheader>Password</v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field type="password" placeholder="enter password" v-model="loginDetails.password" required />
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs4>
                  <v-btn @click="loginUser" value="login">LOGIN</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import loginService from './loginService.js';

  export default {
    name: 'Login',
    data() {
      return {
        loginDetails: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      loginUser: function () {
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
      this.loginAuth();
    }
  }
</script>

<style lang="css">
</style>