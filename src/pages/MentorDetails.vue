<template>
  <div>
    <!-- v-for="mentorData in mentorDatas"
      :key="mentorData" -->
    <div
      class="p-6 md:w-auto xl:w-auto lg:w-auto mx-auto flex flex-row xl:items-stretch justify-between col-end-1"
    >
      <div
        class="bg-gradient-to-tl from-gray-200 to-gray-100 shadow-md rounded-2xl p-6 md:w-auto xl:w-auto lg:w-auto mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row col-end-1"
      >
        <div class="w:full md:w-full xl:w-1/3">
          <div class="flex flex-col col-span-1 align-center justify-center">
            <div class="flex justify-center">
              <img
                v-bind:src="mentorData.profileImg"
                alt=""
                class="border-custom-blue hover:border-gray-100 duration-300 border-4 rounded-full h-50 w-40 content-center flex justify-center md:h-40 md:w-100 xl:w-50 lg:w-50"
              />
            </div>

            <h1
              class="text-xl md:text-2xl xl:text-3xl font-bold leading-10 text-gray-800 text-center md:mt-0 mt-4 my-2 sm:mt-0"
            >
              {{ mentorData.firstName }} {{ mentorData.lastName }}
            </h1>
            <h1
              class="text-sm md:text-md xl:text-xl leading-10 text-gray-800 text-center md:mt-0 mt-1 sm:mt-0"
            >
              {{ mentorData.industry }}
            </h1>
            <!-- <h1
              class="text-sm md:text-md xl:text-xl leading-10 text-gray-800 text-center md:mt-0 mt-1 sm:mt-0"
            >
              * * * * *
            </h1> -->

            <div
              class="container w-full mx-auto flex items-stretch justify-between flex-row col-end-1 mt-4"
            >
              <div>
                <h1
                  class="text-sm sm:text-sm md:text-base lg:text-md xl:text-md"
                >
                  Location
                </h1>
              </div>
              <div class="flex align-left justify-end">
                <h1
                  class="flex align-left justify-end font-bold text-sm sm:text-sm md:text-base lg:text-md xl:text-md"
                >
                  {{ mentorData.location }}
                </h1>
              </div>
            </div>
            <div
              class="container w-full mx-auto flex items-stretch justify-between flex-row col-end-1"
            >
              <div>
                <h1
                  class="text-sm sm:text-sm md:text-base lg:text-md xl:text-md"
                >
                  Current company
                </h1>
              </div>
              <div class="flex align-left justify-end">
                <h1
                  class="flex align-left justify-end font-bold text-sm sm:text-sm md:text-base lg:text-md xl:text-md"
                >
                  {{ mentorData.currentCompany }}
                </h1>
              </div>
            </div>
            <div
              class="container w-full mx-auto flex items-stretch justify-between flex-row col-end-1"
            >
              <div>
                <h1
                  class="text-sm sm:text-sm md:text-base lg:text-md xl:text-md"
                >
                  Current position
                </h1>
              </div>
              <div class="flex align-left justify-end">
                <h1
                  class="flex align-left justify-end font-bold text-sm sm:text-sm md:text-base lg:text-md xl:text-md"
                >
                  {{ mentorData.position }}
                </h1>
              </div>
            </div>
            <div>
              <div class="container w-full mx-auto col-end-1 my-1 mt-4">
                <h1
                  class="flex w-full font-bold text-sm sm:text-sm md:text-base lg:text-md xl:text-md justify-start"
                >
                  Services
                </h1>
              </div>
              <div class="container mx-auto col-end-1 my-1">
                <h1
                  class="text-sm sm:text-sm md:text-base lg:text-md text-left xl:text-md pb-3"
                >
                  {{ mentorData.services }}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="w-1/12">
          <div
            class="flex flex-col align-center justify-center border-l border-gray-900"
          ></div>
        </div> -->
        <div class="w:full md:w-full xl:w-1/3 md:mx-8 lg:mx-8 xl:mx-8">
          <div class="flex flex-col align-center justify-center">
            <h1
              class="text-xl md:text-2xl xl:text-3xl font-bold leading-10 text-gray-800 text-left md:mt-0 mb-4 mt-1 sm:mt-0"
            >
              Bio
            </h1>

            <p
              class="text-sm sm:text-sm md:text-base lg:text-md text-left xl:text-md pb-3"
            >
              {{ mentorData.bio }}
            </p>
          </div>
          <div class="align-center justify-center">
            <h1
              class="text-xl md:text-2xl xl:text-3xl font-bold leading-10 text-gray-800 text-left md:mt-0 mb-4 mt-1 sm:mt-0"
            >
              Tags
            </h1>

            <ul
              class="py-2 px-2 text-sm sm:text-sm md:text-base lg:text-md xl:text-md text-left inline-flex content-start justify-start"
              v-for="tag in mentorData.tags"
              v-bind:key="tag"
            >
              <!-- class="px-4 py-2 rounded-full text-gray-500 border border-gray-300
              font-semibold text-sm flex align-center w-max cursor-pointer
              active:bg-gray-300 transition duration-300 ease"> -->

              <li
                @click="searchTag(tag)"
                class="text-sm px-3 border-gray-400 rounded-full border-2 w-max sm:text-sm md:text-base lg:text-md text-left xl:text-md hover:bg-custom-blue hover:text-blue-100 hover:border-blue-100 duration-300"
              >
                {{ tag }}
              </li>
            </ul>
          </div>
        </div>

        <div class="w:full md:w-full xl:w-1/3">
          <div class="align-center justify-center">
            <form @submit.prevent="sendContactData">
              <div class="flex flex-col align-center justify-center">
                <h1
                  class="text-xl md:text-2xl xl:text-3xl font-bold leading-10 text-gray-800 text-left md:mt-0 mb-4 mt-1 sm:mt-0"
                >
                  Contact
                </h1>
              </div>
              <div class="flex flex-col align-center justify-center">
                <input
                  type="text"
                  class="border border-gray-400 rounded-2xl p-2"
                  placeholder="Full name"
                  v-model="fullName"
                  required
                />
                <span class="py-1" />

                <input
                  type="text"
                  class="border border-gray-400 rounded-2xl p-2"
                  placeholder="Email"
                  v-model="email"
                  required
                />
                <span class="py-1" />

                <input
                  required
                  type="number"
                  class="border border-gray-400 rounded-2xl p-2"
                  placeholder="Phone"
                  v-model="phone"
                />
                <span class="py-1" />

                <input
                  type="text"
                  class="border border-gray-400 rounded-2xl p-2"
                  placeholder="Industry"
                  v-model="industry"
                />
                <span class="py-1" />
                <textarea
                  class="border border-gray-400 rounded-2xl p-2"
                  placeholder="What do you want to talk about?"
                  v-model="message"
                ></textarea>
                <span class="py-1" />
                <input
                  type="file"
                  accept="application/pdf"
                  class="border border-gray-400 bg-white text-gray-400 rounded-2xl p-2"
                  placeholder="Upload CV"
                  required
                  @change="onFileSelected"
                />
                <span class="text-gray-400 text-xs italic text-left"
                  >Upload CV (pdf)</span
                >

                <span class="py-1" />
              </div>
              <div class="w-full bottom-0 pt-2 flex justify-end">
                <button
                  type="submit"
                  class="bg-custom-blue hover:bg-blue-500 text-white px-4 py-1 rounded-3xl text-md shadow-md"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
import Footer from "../components/Footer.vue";

import axios from "axios";
export default {
  //props: { mentorData: {} },
  name: "MentorDetails",
  data() {
    // console.log(this.mentorData);
    return {
      maxChar: 50,
      mentorData: "",
      fullName: "",
      email: "",
      phone: "",
      industry: "",
      message: "",
      file: null,
    };
  },
  components: {
    Footer,
  },
  setup() {
    const toast = useToast();
    return {
      toast,
    };
  },

  beforeMount() {
    this.getMentorData();
  },

  methods: {
    searchTag(searchtag) {
      this.$router.push("/search/" + searchtag);
    },

    validateEmail() {
      const email = this.email;
      const re =
        //eslint-disable-next-line
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(email)) {
        this.toast.error("Please enter a valid email address");
      }
    },

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
      this.toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },

    getMentorData() {
      this.currentURL = window.location.href;
      let counter = 0;
      let i = 0;
      while (counter < 4) {
        i++;
        if (this.currentURL[i] === "/") {
          counter++;
        }
      }
      let str = "";
      if (this.currentURL[this.currentURL.length] === "/")
        str = this.currentURL.slice(i + 1, this.currentURL.length - 1);
      else str = this.currentURL.slice(i + 1, this.currentURL.length);

      axios
        .get(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/expert/profile/" +
            str
        )
        .then((response) => {
          console.log(response.data);
          this.mentorData = response.data;
          this.newMentorTags = this.mentorData.tags.split(",");
          for (let i = 0; i < this.newMentorTags.length; i++) {
            this.newMentorTags[i] = this.newMentorTags[i].trim();
          }
          this.mentorData.tags = this.newMentorTags;
          console.log(this.mentorData);

          // let temp_tags = [];
          // // let j = 0;
          // let temp_str = "";
          // for (const char in response.data.tags) {
          //   while (response.data.tags[char] !== ",") {
          //     temp_str = temp_str + response.data.tags[char];
          //   }
          //   temp_str = "";
          //   temp_tags.push(temp_str);
          //   console.log(temp_tags);
          // }
        });
    },

    onFileSelected(event) {
      this.file = event.target.files[0];
    },

    async sendContactData() {
      this.validateEmail();
      //eslint-disable-next-line
      // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
      //   this.showErrorToast("Email is not valid");
      // }
      if (this.fullName === "" || this.email === "" || this.phone === "") {
        this.showErrorToast("Invalid request");
      } else {
        const formData = new FormData();
        formData.append("fullName", this.fullName);
        formData.append("email", this.email);
        formData.append("mobilePhone", this.phone);
        formData.append("industry", this.industry);
        formData.append("talksAbout", this.message);
        formData.append("file", this.file);
        console.log(formData);

        await axios.post(
          "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/contactForm/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        this.showToast();
        this.fullName = "";
        this.email = "";
        this.phone = "";
        this.industry = "";
        this.message = "";
        this.file = null;
      }
    },
  },
};
</script>

<style></style>
