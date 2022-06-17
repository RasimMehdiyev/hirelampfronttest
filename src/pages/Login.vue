<template>
  <!-- component -->

  <div class="flex items-center justify-center">
    <div
      class="bg-gray-200 text-gray-500 h-screen shadow-xl w-full overflow-hidden"
    >
      <div class="md:flex w-full">
        <!-- <img
          src="../assets/decoration.png"
          alt=""
          class="h-100 w-100 md:h-50 md:w-50 xl:w-50 xl:h-50 lg:w-50 lg:h-50"
        /> -->
        <!-- <div class="md:flex justify-center hidden md:visible"> -->

        <div
          class="hidden md:visible md:block w-1/2 py-10 px-10 justify-center items-center align-middle"
        >
          <img
            src="../assets/SignUp.svg"
            alt=""
            class="h-100 w-100 md:h-50 md:w-50 xl:w-50 xl:h-50 lg:w-50 lg:h-50"
          />
        </div>
        <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
          <div class="text-center mb-4">
            <h1 class="font-bold text-3xl text-gray-900">LOGIN</h1>
            <p>Enter your information to login</p>
          </div>
          <div>
            <div class="flex -mx-3">
              <div class="w-full px-3 mb-10">
                <!-- <label for="" class="text-xs font-semibold px-1">Email</label> -->
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                  >
                    <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="email"
                    class="w-full -ml-10 pl-5 pr-3 py-2 shadow-md rounded-2xl border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="Email"
                    required
                    v-model="email"
                  />
                </div>
              </div>
            </div>
            <div class="flex -mx-3">
              <div class="w-full px-3 mb-10">
                <!-- <label for="" class="text-xs font-semibold px-1"
                  >Password</label
                > -->
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                  >
                    <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <input
                    type="password"
                    class="w-full -ml-10 pl-5 pr-3 py-2 shadow-md rounded-2xl border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="Password"
                    required
                    v-model="password"
                  />
                </div>
              </div>
            </div>
            <p v-if="errMsg">{{ errMsg }}</p>

            <!-- <div class="form-group">
              <label for="role">Role</label>
              <select
                class="form-control rounded-2xl"
                id="role"
                name="role"
                required
              >
                <option value="">Select role</option>
                <option value="mentor">Mentor</option>
                <option value="mentee">Mentee</option>
              </select>
            </div> -->

            <div class="flex -mx-3">
              <div class="w-full px-3 mb-4">
                <button
                  @click="login"
                  type="submit"
                  value="Login"
                  class="block w-full shadow-md border-3 border-blue-400 max-w-xs mx-auto bg-custom-blue hover:bg-blue-500 focus:bg-blue-700 text-white rounded-2xl px-3 py-2 font-semibold"
                >
                  LOGIN
                </button>
              </div>
            </div>

            <div class="flex -mx-3">
              <div class="w-full px-3 mb-4">
                <button
                  class="block w-full max-w-xs mx-auto hover:text-custom-blue px-3 py-2 font-semibold"
                >
                  <a href="/signup">Don't have an account? Register</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router"; // import router
import { useToast } from "vue-toastification";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  name: "HomePage",
  data() {
    return {
      role: "",
      toastMessage: "",
      toastColor: "",
    };
  },
  setup() {
    const toast = useToast();
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const errMsg = ref("");

    return {
      toast,
      router,
      email,
      password,
      errMsg,
    };
  },

  // methods: {
  //     registerUser() {
  //     firebase
  //         .auth()
  //         .createUserWithEmailAndPassword(this.email, this.password)
  //         .then(() => {
  //         this.showToast = true;
  //         this.toastMessage = "Registration successful";
  //         this.toastColor = "green";
  //         this.register = true;
  //         })
  //         .catch(error => {
  //         this.showToast = true;
  //         this.toastMessage = error.message;
  //         this.toastColor = "red";
  //         });
  //     },
  //     showToast() {
  //     this.showToast = true;
  //     this.toastMessage = "Registration successful";
  //     this.toastColor = "green";
  //     },
  // },

  // computed: {
  //   comparePasswords() {
  //     return this.password !== this.comparePasswords
  //       ? "Passwords do not match"
  //       : true;
  //   },
  // },

  methods: {
    showErrorToast(message) {
      this.toast.error(message, {
        position: "top-right",
        duration: 3000,
        action: {
          text: "Dismiss",
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          },
        },
      });
    },

    showToast() {
      this.toast.success("Logged in successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },

    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.showToast();
          this.$router.push("/mentorpage");
        })
        .catch((error) => {
          this.showErrorToast(error.message);
          // switch (error.message) {
          //   case "auth/user-not-found":
          //     error.message = "User not found";
          //     break;
          //   case "auth/wrong-password":
          //     error.message = "Wrong password";
          //     break;
          //   case "auth/invalid-email":
          //     error.message = "Invalid email";
          //     break;
          //   case "auth/user-disabled":
          //     error.message = "User disabled";
          //     break;
          //   case "auth/too-many-requests":
          //     error.message = "Too many requests";
          //     break;
          //   case "auth/email-already-in-use":
          //     error.message = "Email already in use";
          //     break;
          //   case "auth/weak-password":
          //     error.message = "Weak password";
          //     break;
          //   default:
          //     error.message = "Something went wrong";
          //     break;
          // }
        });
      // .catch((error) => {
      //   this.$toast.open({
      //     message: error.message,
      //     type: "error",
      //     position: "top-right",
      //     duration: 3000,
      //   });
      // });
    },
  },
};
// get a reference to our vue router
</script>

<style></style>
