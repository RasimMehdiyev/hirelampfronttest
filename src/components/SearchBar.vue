<template>
  <div
    class="md:w-auto xl:w-auto mx-auto flex items-stretch justify-between flex-row col-end-1"
  >
    <div class="w-full xl:pl-10 items-start">
      <form @submit.prevent="searchMentor">
        <div class="flex items-stretch justify-center">
          <input
            class="p-4 sm:p-2 h-2 bg-gray-100 rounded-3xl rounded-r-none text-base leading-none text-gray-800 w-7/12 md:w-4/12 border-transparent focus:outline-none focus:border-gray-500"
            type="search"
            placeholder="Search"
            ref="search"
            :maxlength="maxChar"
            :minlength="minChar"
            v-model="search"
          />

          <button
            class="px-2 h-15 w-auto justify-center bg-gray-100 rounded-l-none rounded-3xl text-base font-medium leading-none text-gray-500 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2"
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
  </div>
</template>

<script>
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
      location.assign(`/search/${this.search}/`);
    },
  },
};
</script>

<style></style>
