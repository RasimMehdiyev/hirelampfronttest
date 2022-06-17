<template>
  <body style="font-family: 'Lato', sans-serif" class="overflow-x-hidden">
    <Search />

    <div class="bg-gray-100">
      <div class="bg-white">
        <div class="flex items-center justify-center">
          <div
            class="md:grid grid-cols-1 md:px-12 md:grid-rows-3 md:grid-cols-2 grid-flow-row md:gap-4 md:justify-center md:items-center"
          >
            <div class="flex align-middle justify-center items-center">
              <img
                src="../assets/Connect.svg"
                alt=""
                class="w-1/2 md:w-1/2 lg:w-5/12"
              />
            </div>
            <div
              class="mx-8 md:mx-12 justify-content md:text-xl max-w-xl overflow-hidden"
            >
              <h1 class="md:text-lg my-4 md:mx-4 text-gray-600 font-bold">
                Connect with consultants from more than 100 companies and 14
                industries
              </h1>
            </div>

            <!-- done -->

            <div class="flex align-middle justify-center items-center">
              <img
                src="../assets/Strong.svg"
                alt=""
                class="w-1/2 md:w-1/2 lg:w-5/12"
              />
            </div>
            <div
              class="my-8 mx-8 justify-content md:text-2xl max-w-xl overflow-hidden md:mx-12 md:py-16"
            >
              <h1 class="md:text-lg my-4 md:mx-4 text-gray-600 font-bold">
                Get feedbacks from industry experts and strengthen your weak
                points
              </h1>
            </div>

            <!-- done -->
            <div class="flex align-middle justify-center items-center">
              <img
                src="../assets/Rocket.svg"
                alt=""
                class="w-1/2 md:w-1/2 lg:w-5/12"
              />
            </div>
            <div
              class="my-8 mx-8 justify-content md:text-2xl max-w-xl overflow-hidden md:mx-12"
            >
              <h1 class="md:text-lg my-4 md:mx-4 text-gray-600 font-bold">
                Maximize your success rate with us
              </h1>
            </div>

            <!-- second row -->
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </body>
</template>

<script>
// import { useGtm } from '@gtm-support/vue-gtm';
// import "vue3-carousel/dist/carousel.css";
// import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

//Content for the footer pages
//metors
//what is there for mentors
//how to become a mentor etc

import Search from "../components/Search.vue";
import Footer from "../components/Footer.vue";
// import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      email: "",
      maxChar: 50,
      mentorDatas: this.mentorDatas,
      getMentorDetails: false,
    };
  },
  components: {
    // Carousel,
    // Slide,
    // Pagination,
    // Navigation,
    Footer,
    Search,
  },
  // mounted() {
  //   this.getMentorDatas();
  // },
  // methods: {
  //   async getMentorDatas() {
  //     axios
  //       .get(
  //         "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/experts/"
  //       )
  //       .then((response) => {
  //         console.log(response);
  //         this.mentorDatas = response.data;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },

  //   async mentorDetails(mentorId) {
  //     //console.log(mentorId);
  //     axios
  //       .get(
  //         "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/expert/profile/" +
  //           mentorId +
  //           "/"
  //       )
  //       .then((response) => {
  //         console.log(response);
  //         this.mentorDatas = response.data;
  //         console.log(this.currentMentorId);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //     //console.log("jajajajjaja");
  //     this.$router.push("/mentordetails/" + mentorId);
  //   },
};
</script>
