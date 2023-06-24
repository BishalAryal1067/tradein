<template>
    <div class="w-full box-border px-[3.5rem] flex items-center h-[60px]" id="header-wrapper">
        <button class="w-[30px] h-[30px] overflow-hidden" id="menu-btn"><img src="../assets/Images/menu.png"
                alt=""></button>
        <div id="organization" class="flex items-center ml-[5rem]">
            <div class="organization-nam flex items-center gap-[1rem] text">
                <img src="../assets/Images/company-profile.png" alt="" class="w-[40px] h-[40px]">
                <p class="text-white font-[900] uppercase" id="org-name">sobem scame</p>
            </div>
            <i class="fa-solid fa-chevron-down ml-[6.5rem] text-white"></i>
        </div>
        <!--search section-->
        <div id="search" class="w-[55%] mx-[3.5rem] px-[2.5rem]  h-full flex items-center">
            <div id="input-field" class="w-[500px] relative h-[40px] flex items-center">
                <img src="../assets/Images/Vector.png" class="absolute left-[2.5%]">
                <input
                    class="w-full h-full relative outline-none rounded-[55px] pl-[2.5rem] bg-input-grey px-[1.25rem] text-[14px] font-normal text-grey-5 "
                    type="text" placeholder="Research a client or an invoice">
            </div>
        </div>
        <!--user profile-->
        <div id="user-profile" class="flex items-center">
            <div class="notification-bar flex items-center gap-[.45rem] text-[1rem] text-white">
                <img src="../assets/Images/bell.png" alt="">
                <span>Alerts {{ `(${alertCount})` }} </span>
                <i class="fa-solid fa-chevron-down text-white ml-[.75rem] text-[12px] cursor-pointer"></i>
            </div>

            <div class="profile h-full flex items-center ml-[5rem] cursor-pointer relative" @click="toggleLogOutButton">
                <img src="../assets/Images/Avatar.png">
                <span v-if="showLogoutButton" @click="$emit('logout')" class="absolute flex min-w-[7.5rem] justify-center bottom-[-110%] left-[50%] 
                text-[red] font-bold drop-shadow-lg border-[.5px] border-grey-5 text-[.875rem] bg-grey-7 
                px-[1.5rem] py-[.5rem] rounded-lg translate-x-[-50%]">
                    Sign out
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import router from '../router/router';

let alertCount = ref(0);
let showLogoutButton = ref(false)

let toggleLogOutButton = () => {
    showLogoutButton.value = !showLogoutButton.value;
}

defineEmits(['logout'])
</script>

<style scoped>
#header-wrapper {
    background: linear-gradient(90deg, #59A4DE -4.44%, #183EA0 115.09%);
}

#search>#input-field>input::placeholder {
    color: #E7E7E7 !important;
}
</style>