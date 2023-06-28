<template>

<section for="table-list-of-events" class="h-screen py-10 bg-gray-200">
  
  <Notification v-if="store.is_notification" />

  <div v-if="!store.user.name && !store.user.email">
    <UserCheckin/>
  </div>

  <div v-else>

    <TableList/>
    <DetailScreen v-if="store.is_detail_sceen" />

  </div>


</section>
</template>

<script setup>

    import TableList from './Table-List.vue'
    import DetailScreen from './Detail-Screen.vue';
    import UserCheckin from './User-Checkin.vue';
    import Notification from './Notification.vue';
    import { useRsvpApp } from '../store/store.js'

    const store = useRsvpApp();

</script>
