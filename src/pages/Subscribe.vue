<template>
  <body style="font-family: 'Lato', sans-serif" class="overflow-x-hidden">
    <div
      class="p-6 container md:w-4/5 xl:w-4/5 mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row pb-16"
    >
      <div class="w-full xl:w-1/2 xl:pl-10 xl:py-4 items-start">
        <h1
          class="text-sm md:text-md xl:text-lg font-bold leading-10 text-gray-800 mb-1 text-center xl:text-left md:mt-0 mt-4 sm:mt-0"
        >
          There are still more to come
        </h1>
        <h1
          class="text-sm md:text-md xl:text-lg font-bold leading-10 text-gray-800 mb-4 text-center md:mt-0 mt-1"
        >
          Subscribe to our newsletter to stay up-to-date
        </h1>

        <form ref="emailForm" @submit.prevent="newsletterPost()">
          <div class="flex items-stretch justify-center">
            <input
              class="p-4 sm:p-2 h-2 bg-gray-100 rounded-3xl rounded-r-none text-base leading-none text-gray-800 w-7/12 md:w-11/12 border-transparent focus:outline-none focus:border-gray-500"
              type="email"
              placeholder="Email"
              ref="email_newsletter"
              :maxlength="maxChar"
              required
            />
            <button
              class="px-2 h-15 w-auto justify-center bg-gray-100 rounded-l-none rounded-3xl text-base font-medium leading-none text-gray-500 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2"
              stroke-width="100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 px-2"
                viewBox="0 0 24 24"
                fill="#0096ff"
              >
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                />
              </svg>
            </button>
          </div>
        </form>

        <div class="w-full py-14 items-start">
          <!-- <button v-on:click="test">TEST v-on</button> -->
          <h1
            class="text-sm md:text-md xl:text-lg font-bold leading-10 text-gray-800 mb-4 text-center md:mt-0 mt-4 sm:mt-0"
          >
            Who would you like to see as a mentor in our platform?
          </h1>

          <form ref="mentorForm" @submit.prevent="mentorRequest()">
            <div class="flex items-stretch justify-center">
              <input
                class="p-4 sm:p-2 h-2 bg-gray-100 rounded-3xl rounded-r-none text-base leading-none text-gray-800 w-7/12 md:w-11/12 border-transparent focus:outline-none focus:border-gray-500"
                type="url"
                placeholder="Linkedin URL"
                ref="mentor_newsletter"
                :maxlength="maxChar"
                required
              />
              <button
                class="px-2 h-15 w-auto justify-center bg-gray-100 rounded-l-none rounded-3xl text-base font-medium leading-none text-gray-500 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2"
                stroke-width="100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 px-2"
                  viewBox="0 0 24 24"
                  fill="#0096ff"
                >
                  <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        class="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center"
      >
        <img
          src="../assets/newsletter1.svg"
          alt="Envelope with a newsletter"
          role="img"
          class="h-80 w-1/2 xl:w-1/2 lg:w-1/2"
        />
      </div>
    </div>
    <Footer />
  </body>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";
// import { useGtm } from '@gtm-support/vue-gtm';
import Footer from "../components/Footer.vue";

export default {
  name: "HomePage",
  data() {
    return {
      email: "",
      maxChar: 50,
      mentor: "",
      linkedinURL: "",
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

  methods: {
    newsletterPost() {
      axios.post(
        "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/welcome/",
        {
          email: this.$refs.email_newsletter.value,
        }
      );
      this.$refs.emailForm.reset();
      //this.$refs.form.$el.submit();
      this.showToast();
      console.log(this.$refs.email_newsletter.value);

      this.$gtm.enabled();

      // console.log(this.email);
    },

    mentorRequest() {
      axios.post(
        "https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/futureMentors/",
        {
          linkedinURL: this.$refs.mentor_newsletter.value,
        }
      );
      this.$refs.mentorForm.reset();
      //this.$refs.form.$el.submit();
      this.showToast();
      console.log(this.$refs.mentor_newsletter.value);

      this.$gtm.enabled();

      // console.log(this.email);
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

    onClick() {
      this.$gtm.trackEvent({
        event: null, // Event type [default = 'interaction'] (Optional)
        category: "Calculator",
        action: "click",
        label: "Home page SIP calculator",
        value: 1,
        noninteraction: false, // Optional
      });
    },
    mounted() {
      this.$gtm.enabled();
      this.$gtm.trackView("HomePage", "currentPath");
    },
  },
};
</script>
