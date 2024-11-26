<script>

import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters('user', ['listing']),
  },
}
</script>

<template>
  <h1>Users with mapGetters:</h1>
  <ul>
    <li v-for="user in listing" :key="user.name">
      My Name is {{ user.name }}, and Age: {{ user.age }}
    </li>
  </ul>
</template>
