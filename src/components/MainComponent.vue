<template>

<section for="table-list-of-events" class="h-screen py-10 bg-gray-200">
  
  <div v-if="!store.user.name && !store.user.name">
    <UserCheckin/>
  </div>

  <div v-else>

    <TableList/>
    <DetailScreen v-if="store.is_detail_sceen" />

  </div>

  <Notification />

</section>
</template>

<script setup>

    import TableList from './Table-List.vue'
    import DetailScreen from './Detail-Screen.vue';
    import UserCheckin from './User-Checkin.vue';
    import Notification from './Notification.vue';
    import { useRsvpApp } from '../store/store.js'
    import { getEvents } from '../api/index.js'

    const store = useRsvpApp();

    getEvents()
      .then(response => {
        
        store.events_data = response.data
      
      })
      .catch(error => {
      
        store.enableNotification
        store.error_message = error.data
      
      });

</script>
