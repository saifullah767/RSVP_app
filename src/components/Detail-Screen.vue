<template>
    <TransitionRoot as="template" :show="true">
      <Dialog as="div" class="relative z-10">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </TransitionChild>
  
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative p-6 px-4 pt-5 pb-4 mx-20 my-8 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl ">
                <div class="sm:flex sm:items-start">
                    <section class="flex gap-2" aria-labelledby="applicant-information-title">
                        <div class="bg-white shadow sm:rounded-lg">
                            <div class="px-4 py-5 sm:px-6">
                                <h2 id="applicant-information-title" class="text-lg font-medium leading-6 text-gray-900">Event Information</h2>
                                <p class="max-w-2xl mt-1 text-sm text-gray-500">Details and you can reserve.</p>
                            </div>
                            <div class="px-4 py-5 border-t border-gray-200 sm:px-6">
                                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                <div class="sm:col-span-1">
                                    <dt class="text-sm font-medium text-gray-500">Title</dt>
                                    <dd class="mt-1 text-sm text-gray-900">{{store.detail_screen_data.title}}</dd>
                                </div>
                                <div class="sm:col-span-1">
                                    <dt class="flex items-center gap-1 text-sm font-medium text-gray-500"> <CalendarDaysIcon class="w-4 h-4" /> Date</dt>
                                    <dd class="mt-1 text-sm text-gray-900">  {{ store.detail_screen_data.date }}</dd>
                                </div>
                                <div class="sm:col-span-1">
                                    <dt class="flex items-center gap-1 text-sm font-medium text-gray-500"> <ClockIcon class="w-4 h-4" /> Time </dt>
                                    <dd class="mt-1 text-sm text-gray-900">{{store.detail_screen_data.time}}</dd>
                                </div>
                                <div class="sm:col-span-1">
                                    <dt class="flex items-center gap-1 text-sm font-medium text-gray-500"> <MapPinIcon class="w-4 h-4" /> Location</dt>
                                    <dd class="mt-1 text-sm text-gray-900">{{store.detail_screen_data.location}}</dd>
                                </div>
                                <div class="sm:col-span-2">
                                    <dt class="text-sm font-medium text-gray-500">Details</dt>
                                    <dd class="mt-1 text-sm text-gray-900"> {{ store.detail_screen_data.description }} </dd>
                                </div>
                                </dl>
                            </div>
                        </div>

                        <RESVPed v-if="store.detail_screen_data.attendees" />

                        <EmptyUser v-else />
                    </section>
                </div>
                <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button type="button" class="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-green-600 rounded-md shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto" @click="resvervation">Reserve</button>
                  <button type="button" class="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 rounded-md ring-0 ring-inset ring-gray-300 sm:mt-0 sm:w-auto hover:underline" @click="store.enableDisable_DetailScreen">Cancel</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
  import { ExclamationTriangleIcon,ClockIcon, CalendarDaysIcon, MapPinIcon } from '@heroicons/vue/24/outline'
  import RESVPed from './RSVPed.vue'
  import EmptyUser from './Empty-User.vue'
  import { useRsvpApp } from '../store/store.js'
  import { updateEvents } from '../api/index.js'

  const store = useRsvpApp();

    const resvervation = () => {

      const eventIndex = store.events_data.findIndex(event => event.id === store.detail_screen_data.id);

      if (eventIndex !== -1){
        store.events_data[eventIndex].attendees.push(store.user);
        store.events_data[eventIndex].rsvp = store.events_data[eventIndex].rsvp + 1 ;
        updateEvents(store.detail_screen_data.id, store.events_data[eventIndex])
        .then((response) => {
          store.enableNotification
          store.error_message = response.data
        })
        .catch((error) => {
          store.enableNotification
          store.error_message = error.data
        })
      }

    };
  
  </script>