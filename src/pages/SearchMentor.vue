<template>
  <div>
    <h1 class="flex justify-center md:text-3xl p-4 font-bold">
      {{ searchResults }}
    </h1>
    <SearchBar />

    <ul
      class="flex md:flex-nowrap lg:flex-nowrap xl:flex-nowrap flex-wrap justify-center pb-14 px-1 pt-4"
    >
      <li
        v-for="mentorData in mentorDatas"
        :key="mentorData.userID"
        :currentMentorId="mentorData.userID"
        class="bg-gradient-to-tl from-gray-300 to-gray-100 rounded-3xl p-2 shadow-md my-4 md:my-2 lg:my-8 xl:my-4 mx-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4"
      >
        <div
          class="container w-full mx-auto flex items-stretch justify-between col-end-1"
        >
          <div class="flex">
            <img
              v-bind:src="mentorData.profileImg"
              alt=""
              class="h-20 w-20 md:h-20 md:w-20 xl:w-20 lg:w-30 border-3 border-custom-blue rounded-full"
            />
          </div>

          <div class="flex flex-col truncate align-center justify-center">
            <h1
              class="flex justify-end text-sm md:text-sm xl:text-sm lg:text-lg font-bold leading-1 text-gray-800 mb-2 md:mt-0 mt-1 sm:mt-0"
            >
              {{ mentorData.currentCompany }}
            </h1>
            <h1
              class="flex justify-end text-sm md:text-sm xl:text-sm lg:text-lg font-bold leading-1 text-gray-800 mb-2 md:mt-0 mt-1 sm:mt-0"
            >
              $ {{ mentorData.price }}
            </h1>
            <h1
              class="flex justify-end text-sm md:text-sm xl:text-sm lg:text-lg font-bold leading-1 text-gray-800 mb-2 md:mt-0 mt-1 sm:mt-0"
            >
              {{ mentorData.industry }}
            </h1>
            <h1
              class="flex justify-end text-sm md:text-sm xl:text-sm lg:text-lg font-bold leading-1 text-gray-800 mb-2 md:mt-0 mt-1 sm:mt-0"
            >
              {{ mentorData.location }}
            </h1>
          </div>
        </div>

        <div>
          <div class="flex flex-col">
            <h1
              class="text-md md:text-lg lg:text-xl xl:text-2xl py-2 font-bold"
            >
              {{ mentorData.firstName }} {{ mentorData.lastName }}
            </h1>
            <div class="h-20 flex justify-center align-middle">
              <p
                class="text-sm sm:text-sm md:text-base lg:text-md xl:text-md pb-3"
              >
                {{ mentorData.services }}
              </p>
            </div>
            <div class="justify-between">
              <button
                @click="mentorDetails(mentorData.userID)"
                class="mt-auto bg-custom-blue hover:bg-blue-500 text-white px-3 py-1 rounded-3xl text-xl shadow-sm"
              >
                More
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <Footer />
</template>

<script>
import axios from "axios";
import Footer from "../components/Footer.vue";
import SearchBar from "../components/SearchBar.vue";

export default {
  name: "MentorPage",
  data() {
    return {
      email: "",
      maxChar: 50,
      minChar: 3,
      mentorDatas: [],
      getMentorDetails: false,
      search: "",
      searchResults: "No results",
    };
  },
  mounted() {
    this.searchMentor();
  },
  methods: {
    async mentorDetails(mentorId) {
      axios
        .get(
          "https://hirelamp.herokuapp.com/expert/profile/" +
            mentorId +
            "/"
        )
        .then((response) => {
          console.log(response);
          this.mentorDatas = response.data;
          console.log(this.currentMentorId);
        })
        .catch((error) => {
          console.log(error);
        });
      this.$router.push("/mentordetails/" + mentorId);
    },

    searchMentor() {
      this.currentURL = window.location.href;
      console.log(this.currentURL);
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
          `https://hirelamp.herokuapp.com/search/` +
            str
        )
        .then((res) => {
          this.mentorDatas = res.data.query;
          if (res.data.query.length > 0)
            this.searchResults = "Search results: " + res.data.query.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  components: {
    Footer,
    SearchBar,
  },
};
</script>

<style></style>
