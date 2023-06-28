<template>

    <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{{ props.heading }}</h2>

        <p class="mt-2 text-sm text-gray-700">{{ props.details }}</p>
        </div>
    </div>

</template>

<script setup>

    import { defineProps } from 'vue';

    const props = defineProps({
        heading: String,
        details: String
    });

</script>
