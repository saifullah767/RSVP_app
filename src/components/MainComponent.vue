<template>

<section for="table-list-of-events" class="h-screen py-10 bg-gray-200">
  
  <TableList/>

  <DetailScreen v-if="store.is_detail_sceen" />

</section>
</template>

<script setup>

    import { ref, onMounted } from 'vue';
    import TableList from './Table-List.vue'
    import DetailScreen from './Detail-Screen.vue';
    import { useRsvpApp } from '../store/store.js'
    import { getEvents } from '../api/index.js'

    const store = useRsvpApp();

    getEvents()
        .then(response => {
            store.events_data = response.data
      })
      .catch(error => {
        console.error(error);
      });

</script>
