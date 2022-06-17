<template>
  <div>
    <h2 class="text-3xl md:text-3xl font-bold md:mt-10 my-6">How it works?</h2>
    <!-- md:justify-center md:grid-cols-1 md:grid-rows-1 md:gap-0 md:my-10 -->
    <div class="flex items-center justify-center">
      <div
        class="grid grid-cols-1 md:px-12 md:grid-rows-3 md:grid-cols-2 grid-flow-row md:gap-4 md:justify-center md:items-center"
      >
        <div
          class="my-8 mx-8 md:mx-12 justify-content md:text-xl max-w-xl border-solid rounded-2xl border-4 border-custom-blue overflow-hidden shadow-lg"
        >
          <h1 class="text-2xl my-4 font-extrabold md:text-2xl">Sign up</h1>
          <h1 class="md:text-lg my-4 md:mx-4 text-gray-600">
            Quick. Easy. Totally free. You will only pay when you book a
            session.
          </h1>
        </div>
        <div class="md:flex justify-center hidden md:visible">
          <img
            src="../assets/SignUp.svg"
            alt=""
            class="h-80 md:w-1/2 xl:w-1/2 lg:w-1/2"
          />
        </div>

        <!-- done -->

        <div
          class="my-8 mx-8 justify-content md:text-2xl max-w-xl border-solid rounded-2xl border-4 border-custom-blue overflow-hidden shadow-lg md:mx-12"
        >
          <h1 class="text-2xl my-4 font-extrabold md:text-2xl">Surf</h1>

          <h1 class="md:text-lg my-4 md:mx-4 text-gray-600">
            Once signed up, you can search for the experts you want to talk to.
          </h1>
          <h1 class="md:text-lg my-4 md:mx-4 text-gray-600">
            Different companies. Hundreds of professionals.
          </h1>
        </div>
        <div class="md:flex justify-center hidden md:visible">
          <img
            src="../assets/SelectExpert.svg"
            alt=""
            class="h-80 md:w-1/2 xl:w-1/2 lg:w-1/2"
          />
        </div>
        <!-- done -->

        <div
          class="my-8 mx-8 justify-content md:text-2xl max-w-xl border-solid rounded-2xl border-4 border-custom-blue overflow-hidden shadow-lg md:mx-12"
        >
          <h1 class="text-2xl my-4 font-extrabold md:text-2xl">Book</h1>
          <h1 class="md:text-lg my-4 md:mx-4 text-gray-600">
            Check the expert's availability and book the time slot and service
            fitting you.
          </h1>
        </div>
        <div class="md:flex justify-center hidden md:visible">
          <img
            src="../assets/BookTime.svg"
            alt=""
            class="h-80 md:w-1/2 xl:w-1/2 lg:w-1/2"
          />
        </div>

        <!-- second row -->

        <div
          class="my-8 mx-8 justify-content md:text-2xl max-w-xl border-solid rounded-2xl border-4 border-custom-blue overflow-hidden shadow-lg md:mx-12"
        >
          <h1 class="text-2xl my-4 font-extrabold md:text-2xl">Pay</h1>
          <h1 class="md:text-lg my-4 md:mx-4 text-gray-600">
            Proceed with card payment. It should not be much of a trouble.
          </h1>
        </div>
        <div class="md:flex justify-center hidden md:visible">
          <img
            src="../assets/Payment.svg"
            alt=""
            class="h-80 md:w-1/2 xl:w-1/2 lg:w-1/2"
          />
        </div>

        <div class="justify-center md:my-20">
          <div
            class="my-8 mx-8 justify-content md:text-2xl max-w-xl border-solid rounded-2xl border-4 border-custom-blue overflow-hidden shadow-lg md:mx-12"
          >
            <h1 class="text-2xl my-4 font-extrabold md:text-2xl">
              Ready to go
            </h1>
            <h1 class="md:text-lg my-4 md:mx-4 text-gray-600">
              Hop on and have a timed session with expert.
            </h1>
            <h1 class="md:text-lg my-4 md:mx-4 text-gray-600">
              Make sure you fully utilize it.
            </h1>
          </div>
        </div>
        <div class="md:flex justify-center hidden md:visible">
          <img
            src="../assets/Session.svg"
            alt=""
            class="h-80 md:w-1/2 xl:w-1/2 lg:w-1/2"
          />
        </div>

        <div class="justify-center md:my-20">
          <div
            class="my-8 mx-8 justify-content md:text-2xl max-w-xl border-solid rounded-2xl border-4 border-custom-blue overflow-hidden shadow-lg md:mx-12"
          >
            <h1 class="text-2xl my-4 font-extrabold md:text-2xl">
              Is that all?
            </h1>
            <h1 class="md:text-lg my-4 md:mx-4 text-gray-600">
              No way! We will have the expert providing feedback to you
              regarding your performance & next steps for the future.
            </h1>
          </div>
        </div>

        <div class="md:flex justify-center hidden md:visible">
          <img
            src="../assets/Review.svg"
            alt=""
            class="h-80 md:w-1/2 xl:w-1/2 lg:w-1/2"
          />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "MyComponent",
  components: {
    Footer,
  },
};
</script>
