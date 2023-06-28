<template>

<div>

    <h1> Reserved </h1>
    <ul role="list" class="overflow-y-scroll min-h-[350px] max-h-[400px] bg-white divide-y divide-gray-100 shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl min-w-[270px]">
      <li v-for="person in store.detail_screen_data.attendees" :key="person" class="relative flex justify-between px-4 py-5 gap-x-6 hover:bg-gray-50 sm:px-6 bg-gray-100">
        <div class="flex gap-x-4 border-b border-gray-600">
          <div class="flex-auto min-w-0">
            <p class="text-sm font-semibold text-gray-900">
                {{ person.name }}
            </p>
            <p class="flex mt-1 text-xs leading-5 text-gray-500">
                {{ person.email }}
            </p>
          </div>
        </div>
      </li>
    </ul>

</div>
</template>

<script setup>

    import { useRsvpApp } from '../store/store.js';
    const store = useRsvpApp();

</script>