<template>
    <img src="../assets/Images/LOGO.png" alt="">
    <div id="main-wrapper" class="w-full max-h-[100vh] overflow-y-hidden flex justify-between relative">
        <BaseForm :form-heading="formHeading" :form-sub-heading='formSubHeading' :place-center="true"
            v-on:submit-form="ValidateUser">
            <span class="flex items-center justify-center gap-[.75rem]
            box-border px-[1.5rem] py-[.75rem]
            text-[.875rem] text-[red] font-[500] bg-grey-7 border-[.1rem] border-[red] rounded-[.5rem]
              " v-if="errors.length > 0">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <span class="text-red-500">Invalid username or password</span>
            </span>
            <!--input fields-->
            <div id="input-field">
                <input :class="inputClass" type="text" placeholder="Enter your email" autocomplete="off"
                    v-model="userCredentials.email">
            </div>
            <div id="input-field" class="relative">
                <input :class="inputClass" type="password" placeholder="Enter your password" autocomplete="off"
                    v-model="userCredentials.password">
                <i
                    class="fa-solid fa-eye absolute top-[50%] translate-y-[-50%] right-[1.75%] cursor-pointer text-grey-3"></i>
            </div>
            <div id="input-field" class="flex justify-between">
                <span class="flex items-center gap-[.25rem]"> <input type="checkbox" name="remember" id=""
                        v-model="userCredentials.rememberMe">
                    <label for="remember" class="text-grey-1 font-normal text-[14px]">Remember for 30 days</label>
                </span>

                <router-link to="" class="text-primary-1 font-medium text-[14px]">Forgot Password?</router-link>
            </div>
            <div id="input-field">
                <AuthButtons button-value="GET STARTED" />
            </div>
            <!--redirect to signup page-->
            <span class="flex items-center gap-[.5rem] text-[14px] text-grey-2 justify-center   ">
                Don't have an account?
                <router-link to="/register" class="text-primary-1 font-[900] hover:underline">Sign Up</router-link>
            </span>

        </BaseForm>
        <InfographSection class="relative">
            <!--langauge dropdown-->
            <LanguageDropdown class="absolute top-[5%] right-[50%]" />
        </InfographSection>
        <CopyrightContent />



    </div>
</template>

<script setup>
import AuthButtons from '../components/AuthButtons.vue';
import BaseForm from '../components/BaseForm.vue';
import InfographSection from '../components/InfographSection.vue';
import CopyrightContent from '../components/CopyrightContent.vue';
import { createUserStore } from "../store/User";
import LanguageDropdown from "../components/LnaguageDropdown.vue";

import router from '../router/router';
import { RouterLink } from 'vue-router';
import { ref, reactive, onMounted } from 'vue';

import { useVuelidate } from '@vuelidate/core'
import { required, minLength, sameAs, email } from '@vuelidate/validators';



/*variables*/
const formHeading = 'Welcome Back';
const formSubHeading = `${formHeading}! Please Enter your details`;

//user credentials
const userCredentials = reactive({
    email: '',
    password: '',
    rememberMe: null
})

//let errors
let errors = ref([]);
const rememberMe = ref(null);
const errorMessage = ref('');


onMounted(() => {
    errors.value = [];
})

//classes for input fields
let inputClass = [
    'w-full',
    'border-solid',
    'border-[.1rem]',
    'border-grey-3',
    'rounded-md',
    'py-[.5rem]',
    'px-[1.15rem]',
    'outline-none',
    'bg-grey-6'
]

//accessing store
const store = createUserStore();

let matchingUser;
function ValidateUser() {
    //finding user
    try {
        matchingUser = store.allUsers.filter(user => user.email == userCredentials.email)
        console.log(matchingUser, matchingUser[0].password)
        //checking password
        if (matchingUser.length > 0) {
            matchingUser[0].password == userCredentials.password ?
                Signin(matchingUser) : errors.value.push('err');
        }
        else {
            errors.value.push('err');
        }
    }
    catch (err) {
        alert('Something went wrong!');
    }
}

//date for cookie settings
let expirationDate = new Date();
let daysToLive;

function Signin(user) {
    alert('clicked');
    userCredentials.rememberMe ? daysToLive = 60 * 60 * 24 * 1000 * 30 : daysToLive = 60 * 60 * 24 * 1000;
    expirationDate.setTime(expirationDate.getTime() + daysToLive);
    document.cookie = `${true}; expires = ${expirationDate.toUTCString()};SameSite=None;`;
    user.loggedIn = Boolean(document.cookie);
    store.currentUser = user;
    store.saveCurrentUserData();
    router.push('/dashboard');
}


onMounted(() => {
    //checking on cookie to login user
    if (Boolean(document.cookie)) {
        let newUser = JSON.parse(localStorage.getItem('currentUser'));
        Signin(newUser);
    }
})



</script>

<style scoped>
img {
    position: absolute;
    width: 117.21px;
    height: 60px;
    left: calc(45% - 117.21px/2 - 494.29px);
    top: calc(5% - 50px/2);
}

#input-field {
    min-width: 25rem;
}
</style>