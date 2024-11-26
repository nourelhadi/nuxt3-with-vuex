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
  <h1>Users with this.$store.getters['user/users']:</h1>
  <ul>
    <li v-for="user in users" :key="user.name">
      My Name is {{ user.name }}, and Age: {{ user.age }}
    </li>
  </ul>
</template>
