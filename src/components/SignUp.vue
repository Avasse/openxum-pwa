<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>{{ $t('SIGNUP.SIGNUP')}}</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="signUpDetails.username"
                  id="username"
                  required
                  prepend-icon="person"
                  name="login"
                  :label="$t('SIGNUP.USERNAME')"
                  type="text"></v-text-field>
                <v-text-field
                  v-model="signUpDetails.password"
                  required
                  id="password"
                  prepend-icon="lock"
                  name="password"
                  :label="$t('SIGNUP.PASSWORD')"
                  type="password"></v-text-field>
                <v-text-field
                  v-model="signUpDetails.email"
                  required
                  id="email"
                  prepend-icon="email"
                  name="email"
                  :label="$t('SIGNUP.EMAIL')"
                  type="email"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="signUpUser" value="signup" color="primary">{{ $t('SIGNUP.REGISTER') }}</v-btn>
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

        accountService.register(this.signUpDetails).then(res => {
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