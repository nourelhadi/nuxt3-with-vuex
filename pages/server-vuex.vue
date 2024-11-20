<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    username() {
      return this.$store.getters.username;
    }
  }
}
</script>

<template>
  <h1>Hello Word!</h1>
  <p>My name is {{ username }}</p>
</template>
