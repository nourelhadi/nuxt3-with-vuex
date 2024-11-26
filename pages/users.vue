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
  <ul class="space-y-1 list-disc list-inside mb-3">
    <li v-for="user in users" :key="user.name">
      My name is <strong>{{ user.name }}</strong>, and my email: <strong>{{ user.email }}</strong>
    </li>
  </ul>
</template>
