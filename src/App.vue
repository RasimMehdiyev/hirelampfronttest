<template>
  <NavBar :isLoggedIn="isLoggedIn" />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import firebase from "./utilities/firebase";

export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      isLoggedIn: false,
      authUser: {},
    };
  },

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.authUser = user;
        this.uid = user.uid;
        // User is signed in.
      } else {
        this.isLoggedIn = false;
        this.authUser = {};
        // No user is signed in.
      }
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
