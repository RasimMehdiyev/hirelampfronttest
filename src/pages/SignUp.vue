<template>
  <!-- component -->

  <div class="flex items-center justify-center">
    <div
      class="bg-gray-200 text-gray-500 shadow-xl w-full h-screen overflow-hidden md:pt-10"
    >
      <div class="md:flex w-full justify-center">
        <!-- <img
          src="../assets/decoration.png"
          alt=""
          class="h-100 w-100 md:h-50 md:w-50 xl:w-50 xl:h-50 lg:w-50 lg:h-50"
        /> -->
        <!-- <div class="md:flex justify-center hidden md:visible"> -->

        <!-- <div class="hidden md:visible md:block w-1/2 py-10 px-10">
          <img
            src="../assets/SignUp.svg"
            alt=""
            class="h-100 w-100 md:h-50 md:w-50 xl:w-50 xl:h-50 lg:w-50 lg:h-50"
          />
        </div> -->

        <div class="w-full md:w-1/2 py-3 px-5 md:px-10">
          <div class="text-center mb-4">
            <h1 class="font-bold text-3xl text-gray-900">REGISTER</h1>
            <p>Enter your information to register</p>
          </div>
          <div>
            <div class="flex -mx-3">
              <div class="w-1/2 px-3 mb-4">
                <!-- <label for="" class="text-xs font-semibold px-1"
                  >First name</label
                > -->
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                  >
                    <i
                      class="mdi mdi-account-outline text-gray-400 text-lg"
                    ></i>
                  </div>
                  <input
                    type="text"
                    v-model="firstName"
                    class="w-full -ml-10 pl-5 pr-3 py-2 shadow-md rounded-2xl border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="First name"
                    required
                  />
                </div>
              </div>
              <div class="w-1/2 px-3 mb-4">
                <!-- <label for="" class="text-xs font-semibold px-1"
                  >Last name</label
                > -->
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                  >
                    <i
                      class="mdi mdi-account-outline text-gray-400 text-lg"
                    ></i>
                  </div>
                  <input
                    type="text"
                    v-model="lastName"
                    class="w-full -ml-10 pl-5 pr-3 py-2 shadow-md rounded-2xl border-2 border-gray-200 outline-none focus:border-indigo-500"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="flex -mx-3">
              <div class="w-full px-3 mb-4">
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
              <div class="w-full px-3 mb-4">
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

            <div class="flex -mx-3">
              <div class="w-full px-3 mb-4">
                <!-- <label for="" class="text-xs font-semibold px-1"
                  >Confirm Password</label
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
                    placeholder="Confirm Password"
                    required
                    v-model="confirmPassword"
                    :rules="[comparePasswords]"
                  />
                </div>
              </div>
            </div>

            <div class="flex -mx-3 form-group">
              <div class="w-full px-3 mb-8">
                <div class="flex">
                  <div
                    class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                  >
                    <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                  </div>
                  <select
                    class="form-control rounded-2xl w-full shadow-md -ml-10 pl-5 pr-3 py-2 border-2 border-gray-200 text-gray-400 outline-none focus:border-indigo-500"
                    id="role"
                    name="role"
                    required
                    v-model="role"
                  >
                    <option value="">Select role</option>
                    <option value="Mentor">Mentor</option>
                    <option value="candidate">Candidate</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- <div class="form-group">
              <label for="role">Role</label>
              <select
                class="form-control rounded-2xl"
                id="role"
                name="role"
                required
                v-model="role"
              >
                <option value="">Select role</option>
                <option value="mentor">Mentor</option>
                <option value="mentee">Mentee</option>
              </select>
            </div> -->

            <div class="flex -mx-3">
              <div class="w-full px-3 mb-4">
                <button
                  @click="register"
                  type="submit"
                  value="Register"
                  class="block w-full shadow-md border-3 border-blue-400 max-w-xs mx-auto bg-custom-blue hover:bg-blue-500 focus:bg-blue-700 text-white rounded-2xl px-3 py-2 font-semibold"
                >
                  REGISTER NOW
                </button>
              </div>
            </div>

            <div class="flex -mx-3">
              <div class="w-full px-3 mb-4">
                <button
                  class="block w-full max-w-xs mx-auto hover:text-custom-blue px-3 py-2 font-semibold"
                >
                  <a href="/login">Already have an account? Login</a>
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
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router"; // import router
import { useToast } from "vue-toastification";
import firebase from "firebase/compat/app";

export default {
  name: "HomePage",
  data() {
    return {
      toastMessage: "",
      toastColor: "",
      firstName: "",
      lastName: "",
    };
  },
  setup() {
    const toast = useToast();
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const role = ref("");
    const confirmPassword = ref("");

    return {
      role,
      toast,
      router,
      email,
      password,
      confirmPassword,
    };
  },

  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match"
        : true;
    },
  },

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
      this.toast.success("Account created successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },

    register() {
      if (this.password !== this.confirmPassword) {
        this.showErrorToast("Passwords do not match");
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((user) => {
            this.showToast();
            this.register = true;
            this.createUser();
            this.$root.uid = user.uid;
            this.$router.push("/mentorpage");
          })
          .catch((error) => {
            this.showErrorToast(error.message);
          });
      }
    },
    createUser() {
      const user = {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        userID: this.$root.uid,
        role: this.role,
      };
      axios
        .post(
          "https://hirelamp.herokuapp.com/mentees/",
          user
        )
        .then(() => {
          this.router.push("/mentorpage");
        })
        .catch((error) => {
          this.showErrorToast(error.response.data.message);
        });
    },
  },
};
// get a reference to our vue router
</script>

<style></style>
