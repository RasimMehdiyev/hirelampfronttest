<template>
  <div class="bg-gray-100">
    <nav class="px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <router-link to="/" class="text-blue-600 font-bold">
          <img
            class="relative w-auto h-8 md:h-10 md:w-10"
            src="../../public/hirelamp_logo_navbar.png"
        /></router-link>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-5 md:mt-0"
      >
        <li class="nav-item text-left">
          <a class="nav-link" href="#"
            ><router-link
              to="/howitworks"
              @click="showMenu = !showMenu"
              class="text-gray-800 hover:text-custom-blue md:text-md truncate"
              >How it works</router-link
            >
          </a>
        </li>
        <li class="nav-item text-left">
          <a class="nav-link" href="#"
            ><router-link
              to="/subscribe"
              @click="showMenu = !showMenu"
              class="text-gray-800 hover:text-custom-blue md:text-md"
              >Subscribe</router-link
            >
          </a>
        </li>

        <li class="nav-item text-left">
          <a class="nav-link" href="#"
            ><router-link
              to="/mentorpage"
              @click="showMenu = !showMenu"
              class="text-gray-800 hover:text-custom-blue md:text-md truncate"
              >Our mentors</router-link
            >
          </a>
        </li>

        <li class="nav-item text-left" v-if="isLoggedIn == false">
          <a class="nav-link" href="#"
            ><router-link
              to="/login"
              @click="showMenu = !showMenu"
              class="text-gray-800 hover:text-custom-blue md:text-md"
              >Login</router-link
            >
          </a>
        </li>
        <li class="nav-item text-left" v-if="isLoggedIn == false">
          <a class="nav-link" href="#"
            ><router-link
              to="/signup"
              @click="showMenu = !showMenu"
              class="text-custom-blue hover:text-custom-blue md:text-md"
              >Signup</router-link
            >
          </a>
        </li>
        <li class="nav-item text-left" v-if="isLoggedIn">
          <a class="nav-link" href="#"
            ><router-link
              v-if="isLoggedIn"
              @click="handleSignOut"
              to="/"
              class="text-gray-800 hover:text-custom-blue md:text-md"
              >Logout</router-link
            >
          </a>
        </li>
        <!-- <button @click="$store.dispatch('logout')">Logout</button> -->
        <!-- <li class="nav-item text-left">
          <a class="nav-link" href="#"
            ><router-link
              to="/contact"
              class="text-gray-800 hover:text-custom-blue md:text-xl"
              >Contact</router-link
            >
          </a>
        </li> -->
        <!-- <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            About
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            Blogs
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            Contact Us
          </li> -->
      </ul>
    </nav>
  </div>
  <router-view />
</template>
<script>
// import firebase from "firebase/app";
import firebase from "../utilities/firebase";

export default {
  props: { isLoggedIn: Boolean },

  data() {
    return {
      showMenu: false,
      // isLoggedIn: false,
    };
  },

  // watch: {
  //   if($router.push()){
  //     this.showMenu = false;
  //   }
  // },

  methods: {
    handleSignOut() {
      if (this.isLoggedIn) {
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.push("/");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
