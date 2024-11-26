<template>
  <div class="container mx-auto">
    <h1 class="mb-2 text-lg font-semibold">With a Link (Layouts/Store): </h1>
    <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 mb-3">
      <li
          v-for="link in links"
          :key="link.id"
      >
        {{ link }}
        <a :href="link.href">{{ link.lable }}</a></li>
    </ul>
    <hr>
    <h1 class="mb-2 text-lg font-semibold">With Nuxt Link (Component/Store): </h1>
    <navbar :links="links" />
    <hr>
    <slot/>
  </div>
</template>
<script lang="ts">
import Navbar from "~/components/navbar.vue";

export default {
  components: {
    Navbar,
  },
  computed: {
    links() {
      const data = this.$store.getters['link/getLinks'];

      console.log('DATA LAYOUTS: ', typeof data);

      return data; // TODO NOT WORKING
    }
  }
}
</script>
