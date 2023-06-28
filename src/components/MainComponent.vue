<template>

<section for="table-list-of-events" class="h-screen py-10 bg-gray-200">
  
  <TableList
    :event="events"
  />

  <DetailScreen v-if="store.is_detail_sceen" />

</section>
</template>

<script setup>

import { ref } from 'vue';
import TableList from './Table-List.vue'
import DetailScreen from './Detail-Screen.vue';
import { useRsvpApp } from '../store/store.js'

const store = useRsvpApp();
const events = ref([]);

const fetchEventData = async () => {
  try {
    const response = await fetch('/cardsdetails.js'); // Replace with the actual path to your JSON file
    const data = await response.json();
    events.value = data;
  } catch (error) {
    console.error(error);
  }
};

fetchEventData();

console.log(events.value)


</script>