<template>
    <div id="page-wrapper" class="w-screen max-h-screen overflow-y-hidden">
        <DashboardHeader v-on:logout="LogoutUser" />
        <div id="content-wrapper" class="flex justify-between gap-[1rem]">
            <SideBar :current-step="2" class="w-1/3" />
            <div id="form-section" class="relative bg-grey-7 w-2/3 pt-[7.5rem] pl-[7.5rem]">
                <form action="" class="max-w-[700px] flex flex-col gap-[12px]" @submit.prevent="submitForm">
                    <!--form heading-->
                    <div class="heading flex items-center">
                        <!--form heading icon-->
                        <div class="icon relative w-[3.25rem] h-[3.25rem]">
                            <img src="../assets/Images/Ellipse.png" alt="" class="w-full h-full absolute z-[1]">
                            <img src="../assets/Images/file.png" alt=""
                                class="absolute z-[2] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                        </div>
                        <p class="text-grey-1 text-[1.5rem] ml-[1rem]">Upload Documents</p>
                    </div>
                    <!--subheading-->
                    <p class="text-grey-3 leading-[28.8px]">
                        With this information, we confirm your identity & analyze your
                        customers in order to issue your price offer.
                    </p>
                    <!--file upload section-->
                    <div id="upload-files" class="w-full flex flex-col gap-[1rem]">
                        <div id="upload-section" class="w-full rounded-[.5px] py-[1rem] bg-white flex flex-col gap-[.5rem]">
                            <p class="ml-[1.5rem] text-[1.125rem] text-grey-2 leading-[28.8px]">Documents Upload</p>
                            <!--seperator-->
                            <hr class="w-full bg-grey-5 h-[2px] opacity-10">
                            <!--upload files-->
                            <div id="select-files" class="w-full flex justify-evenly">
                                <div id="select-file-1" class="w-[30%] bg-background-color h-[8.75rem]
                                        border-dashed border border-grey-4 rounded-[.5rem]
                                        flex flex-col items-center justify-center gap-[.5rem]">

                                    <img src="../assets/Images/upload.svg" alt="">
                                    <p class="font-[800] leading-[22.4px] text-[.875rem]">Upload your RIB</p>
                                    <!--file upload btn-->
                                    <span
                                        class="text-primary-green font-[500] text-[.75rem] flex flex-col items-center">Drop
                                        your document here,
                                        <button class="relative text-primary-1 cursor-pointer">or browse
                                            <input type="file" name="" id=""
                                                class="scale-3 opacity-0 absolute top-0 left-0 cursor-pointer"
                                                :value="filePaths.document_1">
                                        </button>
                                    </span>
                                </div>
                                <!--select file 2-->
                                <div id="select-file-2" class="w-[30%] bg-background-color h-[8.75rem]
                                border-dashed border border-grey-4 rounded-[.5rem]
                                flex flex-col items-center justify-center gap-[.5rem]">
                                    <img src="../assets/Images/upload.svg" alt="">
                                    <p class="font-[800] leading-[22.4px] text-[.875rem]">Upload your RIB</p>
                                    <!--file upload btn-->
                                    <span
                                        class="text-primary-green font-[500] text-[.75rem] flex flex-col items-center">Drop
                                        your document here,
                                        <button class="relative text-primary-1 cursor-pointer">or browse
                                            <input type="file" name="" id=""
                                                class="scale-3 opacity-0 absolute top-0 left-0 cursor-pointer"
                                                :value="filePaths.document_2">
                                        </button>
                                    </span>
                                </div>
                                <!--select file 3-->
                                <div id="select-file-3" class="w-[30%] bg-background-color h-[8.75rem]
                                        border-dashed border border-grey-4 rounded-[.5rem]
                                        flex flex-col items-center justify-center gap-[.5rem]">

                                    <img src="../assets/Images/upload.svg" alt="">
                                    <p class="font-[800] leading-[22.4px] text-[.875rem]">Upload your RIB</p>
                                    <!--file upload btn-->
                                    <span
                                        class="text-primary-green font-[500] text-[.75rem] flex flex-col items-center">Drop
                                        your document here,
                                        <button class="relative text-primary-1 cursor-pointer">or browse
                                            <input type="file" name="" id=""
                                                class="scale-3 opacity-0 absolute top-0 left-0 cursor-pointer"
                                                :value="filePaths.document_3">
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div id="button-sction" class="w-full flex justify-between items-center">
                            <input type="submit" value="Continuez" class="bg-primary-1 text-white px-[1.5rem] py-[.5rem] w-fit 
                            border border-blue-800 rounded-[.5rem] cursor-pointer text-[.875rem]">

                            <button
                                class="text-grey-1 font-[400] flex items-center gap-[.2rem] bg-transparent text-[.875rem]">Skip
                                for now <i class="fa-solid fa-chevron-right" @click.prevent="submitForm"></i></button>
                        </div>

                    </div>

                </form>

                <!--back button-->
                <router-link to="/review"
                    class="flex items-center gap-[.5rem] text-[14px] text-grey-1 absolute left-[7.5rem] top-[2.5rem]">
                    <i class="fa-solid fa-chevron-left text-[10px]"></i>
                    Retour
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import DashboardHeader from '../components/DashboardHeader.vue';
import SideBar from '../components/SideBar.vue';
import CustomAlert from '../components/CustomAlert.vue';

import { createUserStore } from '../store/User';
import { reactive } from 'vue';
import router from '../router/router';

const filePaths = {
    document_1: '',
    document_2: '',
    document_3: '',
}

const store = createUserStore();
const organizationData = store.getData


const date = new Date();

function submitForm() {
    organizationData[0].documentData = filePaths;
    organizationData[0].createdAt = `${date.getDate()}/${(date.getMonth() + 1) < 10 ? `0${(date.getMonth() + 1)}` : (date.getMonth() + 1)}/${date.getFullYear()}`;
    organizationData[0].createdBy = store.currentUserId;
    organizationData[0].id = Math.floor(Math.random() * 100000);
    store.addOrganizationData(organizationData);
    store.organizationData = [];
    router.push('/dashboard')
}


function LogoutUser() {
    store.currentUser = {}
    localStorage.removeItem('currentUser')
    router.push("/")
}



</script>

<style lang="scss" scoped></style>