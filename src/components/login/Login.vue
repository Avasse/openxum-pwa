<template>
  <div class="login">
    <h1>Login Page</h1>
    <form v-on:submit.prevent="loginUser()">
      <input type="text" placeholder="enter username" v-model="loginDetails.username">
      <input type="password" placeholder="enter password" v-model="loginDetails.password">
      <button type="submit" value="login" >LOGIN</button>
    </form>
  </div>
</template>

<script>
  import loginService from './loginService.js';
  export default {
    data() {
      return {
        loginDetails: {
          username: '',
          password: ''
        },
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