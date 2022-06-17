import "bootstrap/dist/css/bootstrap.css";
import "./assets/tailwind.css";
import router from "./router";
import { createApp } from "vue";
import App from "./App.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import Vuelidate from "vuelidate";
import Vuex from "vuex";
import firebase from "firebase/compat/app";

let app = "";

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    app.use(Toast);
    app.use(Vuelidate);
    app.use(Vuex);
    app.use(router);
    app.mount("#app");
  }
});

// firebase.auth().onAuthStateChanged(function (user) {
//   if (user) {
//     app = createApp(App);
//     app.use(Toast);
//     app.use(Vuelidate);
//     app.use(Vuex);
//     app.use(router);
//     app.mount("#app");
//   } else {
//     window.location.href = "/login";
//   }
// });

// firebase.auth().onAuthStateChanged(() => {
//   if (!app) {
//     app = new createApp({
//       router,
//       Vuex,
//       Vuelidate,
//       Toast,
//       options,

//       createApp(App)mount('#app')
//   }
// });

// const app = createApp(App);

// const options = {
//   draggable: false,
// };
// app.use(Vuex);
// app.use(router);
// app.use(Toast, options);
// app.use(Vuelidate);

// app.mount("#app");
