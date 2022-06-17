<template>
  <div class="bg-gray-200">
    <div
      class="flex md:flex-row lg:flex-row xl:flex-row flex-col w-full justify-center"
    >
      <div class="p-10 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
        <div class="flex flex-col items-center justify-center">
          <img
            src="../../public/hirelamp_logo_navbar.png"
            alt=""
            class="h-10 md:h-auto xl:h-1/2 lg:h-auto"
          />
          <!-- <h1
                class="text-md md:text-md lg:text-lg xl:text-lg py-2 font-bold"
              >
                Hirelamp
              </h1> -->
          <div>
            <p class="text-sm md:text-sm lg:text-md xl:text-md py-3">
              Hirelamp is a personalized interview preparation assistant. We
              help you to prepare for interviews by connecting you with industry
              experts.
            </p>
          </div>
        </div>
      </div>
      <!-- done -->

      <div class="p-10 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
        <div class="flex flex-col items-center justify-center">
          <h1
            class="text-md md:text-md lg:text-lg xl:text-lg py-2 font-bold text-custom-blue"
          >
            Company
          </h1>
          <div>
            <p class="text-sm md:text-base lg:text-md xl:text-md pb-3">
              About us
            </p>
            <router-link to="/howitworks">
              <p
                class="text-sm md:text-base lg:text-md xl:text-md pb-3 hover:text-custom-blue"
              >
                How it works
              </p>
            </router-link>

            <!-- <p
              class="text-sm md:text-base lg:text-md xl:text-md pb-3 hover:text-custom-blue"
            >
              Contact
            </p> -->
            <router-link to="/subscribe">
              <p
                class="text-sm md:text-base lg:text-md xl:text-md pb-3 hover:text-custom-blue"
              >
                Subscribe
              </p>
            </router-link>
          </div>
        </div>
      </div>
      <!-- done -->

      <div class="p-10 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
        <div class="flex flex-col items-center justify-center">
          <h1
            class="text-md md:text-md lg:text-lg xl:text-lg py-2 font-bold text-custom-blue"
          >
            Useful links
          </h1>
          <div>
            <p class="text-sm md:text-base lg:text-md xl:text-md pb-3">
              Mentors
            </p>
            <p class="text-sm md:text-base lg:text-md xl:text-md pb-3">
              Industries
            </p>
            <p class="text-sm md:text-base lg:text-md xl:text-md pb-3">
              Vacancies
            </p>
          </div>
        </div>
      </div>

      <div class="p-10 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
        <div class="flex flex-col items-center justify-center">
          <h1
            class="text-md md:text-md lg:text-lg xl:text-lg py-2 font-bold text-custom-blue"
          >
            Contact
          </h1>
          <div>
            <p
              class="text-sm md:text-base lg:text-md xl:text-md pb-3 hover:text-custom-blue"
            >
              +994554308506
            </p>
            <p
              class="text-sm md:text-base lg:text-md xl:text-md pb-3 hover:text-custom-blue"
            >
              info@hirelamp.co
            </p>
            <p
              class="text-sm md:text-base lg:text-md xl:text-md pb-3 hover:text-custom-blue"
            >
              Uzeyir Hajibeyov 57
            </p>
            <!-- <button class="bg-custom-blue text-white p-2 rounded-2xl">
                  Become a mentor
                </button> -->
          </div>
        </div>
      </div>

      <!-- <div class="p-10 w-1/3">
            <div class="flex flex-col items-center justify-center">
               <h1
                class="text-md md:text-md lg:text-lg xl:text-lg py-2 font-bold text-custom-blue"
              >
                Socials
              </h1>
              <div class="flex flex-col justify-center items-center">
                <a href="https://www.linkedin.com/company/hirelampco/" target="_blank" class="flex justify-center items-center">
                <img
          src="../assets/linkedin.svg"
          alt=""
          class="md:h-10 md:w-1/2 xl:w-1/2 lg:w-1/2 h-10 w-1/2" 
        />
        </a>
        <a href="https://instagram.com/hirelampco?igshid=YmMyMTA2M2Y=" target="_blank" class="flex justify-center items-center">
                <img
          src="../assets/instagram.svg"
          alt=""
          class="md:h-10 md:w-1/2 xl:w-1/2 lg:w-1/2 h-10 w-1/2" 
        /></a>
        <a href="https://www.facebook.com/hirelampco/" target="_blank" class="flex justify-center items-center">
                 <img
          src="../assets/facebook.svg"
          alt=""
          class="md:h-10 md:w-1/2 xl:w-1/2 lg:w-1/2 h-10 w-1/2" 
        />
        </a>
              </div>
            </div>
          </div> -->

      <!-- <carousel :items-to-show="1.5">
            <slide v-for="slide in 10" :key="slide">
              {{ slide }}
            </slide>

            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel> -->
      <!-- done -->
      <!-- <div>
            <div class="flex flex-col items-center justify-center">
              <h1
                class="text-md md:text-md lg:text-lg xl:text-lg py-2 font-bold"
              >
                Nihat Muradzade
              </h1>
              <div>
                <p class="text-sm md:text-base lg:text-md xl:text-md pb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque euismod
                </p>
              </div>
            </div>
          </div> -->
      <!-- done -->
    </div>
    <div class="bg-gray-400">
      <div
        class="md:w-auto xl:w-auto mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row col-end-1"
      >
        <div class="flex flex-row justify-start items-center">
          <p class="text-sm md:text-base lg:text-md xl:text-md px-5">
            © 2022 Hirelamp. All rights reserved.
          </p>
        </div>
        <div class="p-3 flex justify-end px-5">
          <div class="flex flex-row justify-center items-center">
            <a
              href="https://www.linkedin.com/company/hirelampco/"
              target="_blank"
              class="flex justify-center items-center"
            >
              <img
                src="../assets/linkedin.svg"
                alt=""
                class="md:h-10 md:w-1/2 xl:w-1/2 lg:w-1/2 h-10 w-1/2"
              />
            </a>
            <a
              href="https://instagram.com/hirelampco?igshid=YmMyMTA2M2Y="
              target="_blank"
              class="flex justify-center items-center"
            >
              <img
                src="../assets/instagram.svg"
                alt=""
                class="md:h-10 md:w-1/2 xl:w-1/2 lg:w-1/2 h-10 w-1/2"
            /></a>
            <a
              href="https://www.facebook.com/hirelampco/"
              target="_blank"
              class="flex justify-center items-center"
            >
              <img
                src="../assets/facebook.svg"
                alt=""
                class="md:h-10 md:w-1/2 xl:w-1/2 lg:w-1/2 h-10 w-1/2"
              />
            </a>
            <a
              href="https://twitter.com/hirelampco/status/1515974250414604294"
              target="_blank"
              class="flex justify-center items-center"
            >
              <img
                src="../assets/twitter.svg"
                alt=""
                class="md:h-10 md:w-1/2 xl:w-1/2 lg:w-1/2 h-10 w-1/2"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
