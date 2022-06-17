<template>
  <div
    class="p-6 md:w-auto xl:w-auto mx-auto flex items-stretch justify-between flex-row col-end-1"
  >
    <div class="w-full xl:w-1/2 xl:pl-10 xl:py-14 items-start">
      <!-- <button v-on:click="test">TEST v-on</button> -->
      <h1
        class="text-2xl md:text-3xl xl:text-3xl font-bold leading-10 text-gray-800 mb-2 text-center xl:text-left md:mt-0 mt-4 sm:mt-0"
      >
        Find the right mentor
      </h1>

      <p class="text-lg md:text-2xl">to crush the interview</p>
      <form @submit.prevent="searchMentor">
        <div class="flex items-stretch mt-12 justify-center">
          <input
            class="p-4 sm:p-2 h-2 bg-gray-100 rounded-3xl rounded-r-none text-base leading-none text-gray-800 w-7/12 border-transparent focus:outline-none focus:border-gray-500"
            type="search"
            placeholder="Search"
            ref="search"
            :maxlength="maxChar"
            :minLength="minChar"
            v-model="search"
          />

          <button
            class="h-15 w-auto justify-center bg-gray-100 rounded-l-none rounded-3xl text-base font-medium leading-none text-gray-500 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 px-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
    <!-- hidden md:visible lg:visible xl:visible -->
    <div
      class="w-0 md:w-full lg:w-full xl:w-1/2 md:mb-14 xl:mb-0 relative flex items-center justify-center"
    >
      <img
        src="../assets/interview.svg"
        alt=""
        class="md:h-100 lg:h-100 xl:h-100 md:w-1/2 xl:w-1/2 lg:w-1/2 md:my-10 py-10"
      />
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "Search",

  data() {
    return {
      maxChar: 50,
      minChar: 3,
      getMentorDetails: false,
      mentorDatas: [],
      search: "",
    };
  },

  methods: {
    searchMentor() {
      console.log(this.search);
      this.$router.push(`/search/${this.search}/`);
      localStorage.setItem("query", this.search);

    },
  },
};
</script>

<style></style>
