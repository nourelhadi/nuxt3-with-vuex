<script>
  export default {
    computed: {
      users() {
        return this.$store.getters['user/users'];
      },
    },
  }
</script>

<template>
  <h1 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Users with this.$store.getters['user/users']:</h1>
  <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 mb-3">
    <li v-for="user in users" :key="user.name">
      My Name is {{ user.name }}, and Age: {{ user.age }}
    </li>
  </ul>
</template>
