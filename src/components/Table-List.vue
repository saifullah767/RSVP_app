<template>
    <div class="px-4 sm:px-6 lg:px-8">
        <PageHeading
        heading="Events"
        details="A list of all the events including their name, title, RSVP and location."
        />
      <div class="flow-root mt-8">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Title</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Time</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">RSVPs</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Location</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Action</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="event in store.events_data" :key="event">
                    <td class="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">{{ event.title }}</td>
                    <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{{ event.date }}</td>
                    <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{{ event.time }}</td>
                    
                    <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <span class="inline-flex items-center px-2 py-1 text-xs font-medium text-green-700 rounded-md bg-green-50 ring-1 ring-inset ring-green-600/20">{{ event.rsvp }}</span>
                    </td>
                    <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">{{ event.location }}</td>

                    <td class="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">  

                        <button
                            
                        @click="store.enableDisable_DetailScreen(event)"
                            type="button" 
                            class="block px-3 py-2 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            View Details
                        </button>

                    </td>
            
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

  import { defineProps } from 'vue';
  import PageHeading from './Page-Heading.vue'
  import { useRsvpApp } from '../store/store.js'

  const store = useRsvpApp();
    
  </script>