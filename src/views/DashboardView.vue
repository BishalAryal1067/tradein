<template>
  <DashboardHeader v-on:logout="LogoutUser" />
  <AddOrganization>
    <div id="organization-list" v-if="organizationList" class="w-full flex flex-col">
      <div v-for="(organization, index) in listByCurrentUser" :key="index" class="list-items w-full box-border px-[1.125rem] py-[1.5rem]
      flex items-center justify-between
      border-b-[.1rem] border-b-grey-5">
        <img src="../assets/Images/company-profile.png" alt="">
        <div id="information-section" class="w-3/4">
          <p class="text-[.875rem] text-grey-1 leading-[19.12px] font-medium">{{ organization.raison.toUpperCase() }}</p>
          <p class="text-[.75rem] text-grey-3 font-medium"> {{ organization.createdAt }} </p>
          <p class="text-[.75rem] text-grey-3 font-medium">ID : {{ organization.id }}</p>
        </div>
        <div id="button-section" class="w-[17%] flex justify-between items-center">
          <button class="text-primary-1 text-[.875rem]
            py-[.5rem] px-[1rem] border-[1px] border-blue-800 rounded-[.5rem]">
            Manage
          </button>
          <button class="text-primary-1 text-[.875rem]
          py-[.5rem] px-[1rem] border-[1px] border-blue-800 rounded-[.5rem]">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
        </div>
      </div>
    </div>
  </AddOrganization>
</template>

<script setup>
import DashboardHeader from '../components/DashboardHeader.vue';
import AddOrganization from '../components/AddOrganization.vue';
import { createUserStore } from '../store/User';

import { onMounted } from 'vue';
import router from '../router/router';



const store = createUserStore();

onMounted(() => {
  if (store.currentUserId.length < 0) {
    store.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    localStorage.removeItem("currentUser");
  }
})

let organizationList;
JSON.parse(localStorage.getItem('organizationData')) ?
  organizationList = Object.values(JSON.parse(localStorage.getItem('organizationData'))) : organizationList = [];

let listByCurrentUser = organizationList.filter(organization => {
    if (organization.createdBy == store.currentUserId) {
      return organization
    }
  })

function LogoutUser() {
    store.currentUser = {}
    localStorage.removeItem('currentUser')
    router.push("/")
  }

</script>

<style scoped></style> 