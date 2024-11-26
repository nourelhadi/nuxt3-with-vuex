<script>
import Navbar from "~/components/navbar.vue";
export default {
  components: {Navbar},
  computed: {
    links() {
      return this.$store.getters['link/getLinks'];
    },
  },
}
</script>

<template>
  <h1 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">All Links on the Store:</h1>
  <navbar />
</template>
