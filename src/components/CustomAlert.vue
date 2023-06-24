<template>
    <div class="alert-wrapper w-screen h-screen bg-grey-4 absolute left-0 top-0 z-10 grid place-items-center"
        v-if="alertMessage.length > 0">
        <div class="content-wrapper 
     w-fit h-fit box-border px-[3rem] py-[1.5rem] 
     flex flex-col gap-[.75rem] justify-center items-center
     bg-white shadow rounded-[.5rem]">
            <i class="fa-solid fa-circle-check text-primary-1 text-[2.5rem]"></i>
            <span class="text-primary-1 font-[1.25rem]">{{ alertMessage }}</span>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import router from '../router/router';

defineProps({
    alertMessage: {
        type: String
    },
    nextPath: {
        type: String
    }
})

defineEmits(['click-alert'])
</script>

<style lang="scss" scoped></style>