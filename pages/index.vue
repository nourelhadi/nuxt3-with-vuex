<script>
  export default {
    methods: {
      increase() {
        console.log('Was Clicked!', this.$store);
        this.$store.dispatch('addCounter');
      }
    },
    computed: {
      counter() {
        return this.$store.getters.counter
      }
    }
  }
</script>

<template>
  <h1>Hello World!</h1>
  <span>Counter: {{ counter }}</span>
  <br>

  <button @click="increase">Increase Me!</button>
</template>

<style scoped>

</style>