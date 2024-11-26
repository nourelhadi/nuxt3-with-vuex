<script>
export default {
  name: "navbar",
  props: {
    links: Array,
  },
  //computed: {
  //  links() {
  //    return this.$store.getters['link/getLinks'];
  //  },
  //},
}
</script>
<template>
  <ul class="space-y-1 list-disc list-inside mb-3">
    <li v-for="link in links" :key="links.id">
      <NuxtLink :to="link.href"> {{ link.label }}</NuxtLink>
    </li>
  </ul>
</template>
