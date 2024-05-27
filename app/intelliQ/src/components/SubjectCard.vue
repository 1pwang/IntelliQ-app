<template>
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <li v-for="card in cards" :key="card.id" class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
      <div class="flex w-full items-center justify-between space-x-6 p-6">
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3">
          </div>
          <p class="mt-1 truncate text-sm text-gray-500">Subject: {{ card.subject }}</p>
          <p class="mt-1 truncate text-sm text-gray-500">Module: {{ card.module }}</p>
          <p class="mt-1 truncate text-sm text-gray-500">Topic: {{ card.topic }}</p>
          <p class="mt-1 truncate text-sm text-gray-500">Notes: {{ card.notes }}</p>
        </div>
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200">
          <div class="flex w-0 flex-1">

          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  cards: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
</style>
