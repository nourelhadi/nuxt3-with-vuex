<script>

import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters('user', ['listing']),
  },
}
</script>

<template>
  <h1 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Users with mapGetters:</h1>

  <div
      class="grid grid-cols-2 gap-x-2"
  >
    <div
        v-for="user in listing" :key="user.name"
        class="border-2 border-gray-200 rounded-lg mt-1.5"
    >
      <ul class="space-y-1 list-disc list-inside dark:text-gray-400 p-3">
        <li> <strong>Name:</strong> {{ user.name }}</li>
        <li> <strong>Username:</strong> {{ user.username }}</li>
        <li> <strong>Email:</strong> {{ user.email }} <span class="text-red-500">|</span> <strong>Phone:</strong> {{ user.phone }}</li>
        <li> <strong>Website:</strong> {{ user.website }}</li>
      </ul>
    </div>

  </div>

</template>
