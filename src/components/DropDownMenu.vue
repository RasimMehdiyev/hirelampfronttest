<template>
  <div class="relative flex flex-wrap justify-left border-2 shadow-sm">
    <ul class="w-auto flex flex-wrap md:ml-12 lg:ml-12 xl:lg-12 ml-10">
      <li
        v-for="(topFilter, key) in this.topFilters"
        :key="key"
        class="group relative dropdown px-8 py-2 hover:text-custom-blue cursor-pointer font-bold text-base tracking-wide"
      >
        <span>{{ topFilter.name }}</span>

        <div class="group-hover:block dropdown-menu absolute hidden h-auto">
          <ul class="top-0 bg-white shadow px-2 py-2">
            <li
              v-for="(filter, key) in topFilter.filters"
              :key="key"
              class="group relative dropdown px-4 py-4 hover:text-custom-blue cursor-pointer font-bold text-base tracking-wide"
            >
              <a
                class="block font-bold text-base hover:text-custom-blue cursor-pointer"
                >{{ filter.name }}</a
              >
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      topFilters: [
        {
          name: "Role",
          filters: [
            {
              name: "Mentor",
              id: 1,
            },
            {
              name: "Mentee",
              id: 2,
            },
          ],
        },
        {
          name: "Industry",
          filters: [
            {
              name: "jaja1",
              id: 1,
            },
            {
              name: "jaja2",
              id: 2,
            },
          ],
        },
        {
          name: "Seniority",
          filters: [
            {
              name: "Mentor",
              id: 1,
            },
            {
              name: "Mentee",
              id: 2,
            },
          ],
        },
        {
          name: "Country",
          filters: [
            {
              name: "Mentor",
              id: 1,
            },
            {
              name: "Mentee",
              id: 2,
            },
          ],
        },
        {
          name: "Service Types",
          filters: [
            {
              name: "Mentor",
              id: 1,
            },
            {
              name: "Mentee",
              id: 2,
            },
          ],
        },
      ],
    };
  },
};
</script>
