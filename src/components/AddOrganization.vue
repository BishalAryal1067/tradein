<template>
    <div class="content-wrapper 
        mx-auto mt-[1.25rem] bg-white py-[1.5rem] px-[3rem]
        min-w-[56.25rem] max-w-[60rem] min-h-[6.5rem] max-h-fit flex flex-col justify-center">
        <!--add organization section-->
        <div class="min-h-[5rem] flex justify-between items-center">
            <div class="text-section flex flex-col justify-center gap-[1rem]">
                <p class="heading text-[1.5rem] leading-[.5px]">My Enterprises</p>
                <p class="sub-heading text-grey-2 text-[1rem]">Manage and access your enterprises</p>
            </div>
            <!--add an organization-->
            <button @click.prevent="router.push('/review')" class="bg-primary-1 text-white py-[.5rem] px-[1.5rem] 
                flex items-center justify-center gap-[.265rem] 
                text-[.875rem] rounded-[.5rem]">
                <i class="fa-solid fa-plus text-[.85rem]"></i>
                Add new organization
            </button>
        </div>
        <!--seperator-->
        <hr class="my-[.5rem] w-[100%] bg-grey-2 opacity-[.2]">

        <!--list of data-->
        <slot></slot>
    </div>
</template>

<script setup>
import router from '../router/router';
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.content-wrapper {
    box-shadow: 0px 2px 8px rgba(45, 62, 80, 0.12);
}
</style>