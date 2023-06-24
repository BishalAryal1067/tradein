<template>
    <img src="../assets/Images/LOGO.png" alt="">
    <div id="main-wrapper" class="w-full max-h-[100vh] overflow-y-hidden flex justify-between">
        <BaseForm :form-heading="formHeading" :form-sub-heading='formSubHeading' v-on:submitForm="regsiterUser"
            class="mt-[120px]">
            <!--input fields-->
            <!--name-->
            <div id="input-field" class="flex justify-between">
                <span :class="halfSizeElements">
                    <input :class="inputClass" type="text" placeholder="First Name*" v-model="inputFields.firstName"
                        @input="v$.firstName.$touch">
                    <span v-if="v$.firstName.$error" class="text-[.75rem] text-[red]">This field is required*</span>
                </span>
                <span :class="halfSizeElements">
                    <input :class="inputClass" type="text" placeholder="Last Name*" v-model="inputFields.lastName"
                        @blur="v$.lastName.$touch">
                    <span v-if="v$.firstName.$errors.length > 0" class="text-[.75rem] text-[red]">This field is
                        required*</span>
                </span>
            </div>
            <!--email-->
            <div id="input-field">
                <span class="">
                    <input :class="inputClass" type="text
                " placeholder="Enter your email*" v-model="inputFields.email" @blur="v$.email.$touch">
                    <span v-if="v$.email.$errors.length > 0" class="text-[.75rem] text-[red]">{{
                        `${v$.email.$errors[0].$message}*` }}</span>
                </span>
            </div>
            <!--phone number-->
            <div id=" input-field">
                <span class="w-full">
                    <input :class="inputClass" type="text" placeholder="Enter your phone number*"
                        v-model="inputFields.phoneNumber" @blur="v$.phoneNumber.$touch">
                    <span v-if="v$.phoneNumber.$errors.length > 0" class="text-[.75rem] text-[red]">
                        {{ `${v$.phoneNumber.$errors[0].$message}*` }}
                    </span>
                </span>
            </div>
            <!--password-->
            <div id="input-field" class="relative">
                <span class="w-full">
                    <input :class="inputClass" type="password" placeholder="Create a password*"
                        v-model="inputFields.password" @blur="v$.password.$touch">
                    <i class="fa-solid fa-eye 
                    absolute top-[50%] translate-y-[-125%] right-[1.75%] 
                    cursor-pointer text-grey-3">
                    </i>
                    <span v-if="v$.password.$errors.length > 0" class="text-[.75rem] text-[red]">{{
                        `${v$.password.$errors[0].$message}*` }}</span>
                    <span class="text-[12px] text-grey-2" v-else>Must be at least 8 characters.</span>
                </span>
            </div>
            <div id="input-field" class="flex justify-between">
                <span class="flex items-start gap-[.5rem]"> <input type="checkbox" name="remember" id=""
                        v-model="inputFields.policyAgreement" @blur="v$.policyAgreement.$touch">
                    <label for="remember" class="text-grey-1 font-normal text-[12px] max-h-full">By clicking, I agree to
                        TradeIn's
                        terms and conditions and acknowledge that I have read and understood TradeIn's privacy
                        statement. <span v-if="v$.policyAgreement.$errors.length > 0"
                            class="text-[.75rem] text-[red]">(*)</span></label>
                </span>
            </div>
            <div id="input-field" class="flex justify-between">
                <span class="flex items-start gap-[.5rem]"> <input type="checkbox" name="remember" id=""
                        v-model="inputFields.stayInTouch">
                    <label for="remember" class="text-grey-1 font-normal text-[12px] max-h-full">
                        Yes, I want to stay in touch</label>
                </span>
            </div>
            <div id="input-field">
                <AuthButtons button-value="GET STARTED" />
            </div>
            <span class="flex items-center gap-[.5rem] text-[14px] text-grey-2 justify-center">
                Already have an account?
                <router-link to="/" class="text-primary-1 font-[900] hover:underline tracking-[.1px]">Sign in</router-link>
            </span>

        </BaseForm>
        <InfographSection />
        <CopyrightContent />
    </div>
    <CustomAlertVue :alertMessage='alertMessage'>
        <router-link to="/"
            class="bg-primary-1 border-1 border-blue-200 text-white text-[1rem] px-[1.5rem] py-[.75rem] rounded-[.5rem]">Proceed</router-link>
    </CustomAlertVue>
</template>

<script setup>
import AuthButtons from '../components/AuthButtons.vue';
import BaseForm from '../components/BaseForm.vue';
import InfographSection from '../components/InfographSection.vue';
import CopyrightContent from '../components/CopyrightContent.vue';
import { createUserStore } from '../store/User';
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, sameAs, email } from '@vuelidate/validators'


import router from '../router/router';
import { RouterLink } from 'vue-router';
import { ref, reactive, computed } from 'vue';
import CustomAlertVue from '../components/CustomAlert.vue';

/*form heading and subheading*/
const formHeading = 'Sign Up';
const formSubHeading = `Create your account for free`


/*tailwind classes for inputs*/
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

/*adjusting class for half-length inpust*/
let halfSizeElements = 'w-[47.5%]'

//input fields
const inputFields = reactive({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    policyAgreement: null,
    stayInTouch: ''
})

//validation
const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
//checking if the phone nymber is valid
const isValidPhoneNumber = () => {
    return inputFields.phoneNumber.match(phoneRegex) ? true : false;
}
//setting up validators and validation rules
const validationRules = computed(() => {
    return {
        firstName: { required },
        lastName: { required },
        email: { required, email },
        password: { required, minLength: minLength(8) },
        phoneNumber: { required, isValidPhoneNumber },
        policyAgreement: { sameAs: sameAs(true) },
        stayInTouch: {},
    }
})
//using validators
const v$ = useVuelidate(validationRules, inputFields)

let user = ref({});

//using pinia store
const store = createUserStore();

//alert message
let alertMessage = ref('');
let nextPath = ref('');

//registering user
const regsiterUser = async () => {
    try {
        const result = await v$.value.$validate()
        if (result) {
            user = {
                'firstname': inputFields.firstName,
                'lastname': inputFields.lastName,
                'email': inputFields.email,
                'phone': inputFields.phoneNumber,
                'password': inputFields.password,
                'isPolicyAgreed': inputFields.policyAgreement,
                'stayInTouch': inputFields.stayInTouch,
                'isLoggedIn': false,
            }
            store.addUser(user)
            alertMessage.value = 'Account SuccessFully Created !';
        }
        else {
            return;
        }
    } catch (err) {
        console.log(err)
    }
    emptyFields();
}

//emptying input fields
function emptyFields() {
    inputFields.firstName = '';
    inputFields.lastName = '';
    inputFields.email = '';
    inputFields.phoneNumber = '';
    inputFields.password = '';
    inputFields.policyAgreement = null;
    inputFields.stayInTouch = '';
}

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
    max-width: 25rem;
}
</style>