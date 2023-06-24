<template>
    <div id="page-wrapper" class="w-screen h-screen max-h-auto">
        <DashboardHeader />
        <div id="content-wrapper" class="flex justify-between gap-[1rem]">
            <SideBar :current-step="1" class="w-1/3" />
            <div id="form-section" class="relative bg-grey-7 w-2/3 pt-[7.5rem] pl-[7.5rem]">
                <form action="" class="max-w-[700px] h-auto overflow-y-scroll" @submit.prevent="submitForm">
                    <img src="../assets/Images/Info-review.svg" alt="info-review-image" class="w-[52px] h-[52px]">
                    <p class="text-grey-1 text-[1.5rem] my-[1rem]">Information review</p>
                    <p class="text-grey-3 leading-[28.8px]">Sit tristique eget proin a sem. Dui risus ultricies at vel
                        consectetur volutpat
                        ornare netus id.Sit
                        tristique eget proin a sem. Dui risus ultricies at vel consectetur volutpat ornare netus id.</p>
                    <!--data input section-->
                    <div id="input-section" class="mt-[.5rem] w-full max-h-full flex flex-col gap-[1rem]">
                        <!--input fields-->
                        <!--input field 1-->
                        <div id="input-field" class="w-full flex items-center justify-between">
                            <label for="raison-sociale"
                                class="flex flex-col min-w-[48.5%] max-w-full font-[900] text-[14px]">
                                Raison Sociale*
                                <input type="text" id="raison-sociale" :class="inputClasses" placeholder="Tradein"
                                    v-model="formData.raison" @blur="v$.raison.$touch">
                                <span v-if="v$.raison.$errors.length > 0" class="text-[.75rem] text-[red]">
                                    {{ `${v$.raison.$errors[0].$message}*` }}
                                </span>
                            </label>
                            <label for="Siret" class="flex flex-col min-w-[48.5%] max-w-full font-[900] text-[.875rem]">
                                Siret*
                                <input type="text" id="siret" :class="inputClasses" placeholder="8301624800027"
                                    v-model="formData.siret" @blur="v$.raison.$touch">
                                <span v-if="v$.siret.$errors.length > 0" class="text-[.75rem] text-[red]">
                                    {{ `${v$.siret.$errors[0].$message}*` }}
                                </span>
                            </label>
                        </div>
                        <!--input field 2-->
                        <div id="input-field" class="w-full flex items-center justify-between">
                            <label for="adresse" class="flex flex-col min-w-[48.5%] max-w-full font-[900] text-[14px]">
                                Adresse*
                                <input type="text" id="adresse*" :class="inputClasses" placeholder="Adresse*"
                                    v-model="formData.address" @blur="v$.address.$touch">
                                <span v-if="v$.address.$errors.length > 0" class="text-[.75rem] text-[red]">
                                    {{ `${v$.address.$errors[0].$message}*` }}
                                </span>
                            </label>
                            <label for="code-postal"
                                class="flex flex-col min-w-[48.5%] max-w-full font-[900] text-[.875rem]">
                                Code postal*
                                <input type="text" id="code-postal" :class="inputClasses" placeholder="Postal Code*"
                                    v-model="formData.postal" @blur="v$.postal.$touch">
                                <span v-if="v$.postal.$errors.length > 0" class="text-[.75rem] text-[red]">
                                    {{ `${v$.postal.$errors[0].$message}*` }}
                                </span>
                            </label>
                        </div>
                        <!--input field 3-->
                        <div id="input-field" class="w-full flex items-center justify-between">
                            <label for="ville" class="flex flex-col min-w-[48.5%] max-w-full font-[900] text-[14px]">
                                Ville*
                                <input type="text" id="ville" :class="inputClasses" placeholder="Ville*"
                                    v-model="formData.ville" @blur="v$.ville.$touch">
                                <span v-if="v$.ville.$errors.length > 0" class="text-[.75rem] text-[red]">
                                    {{ `${v$.ville.$errors[0].$message}*` }}
                                </span>
                            </label>
                            <label for="pays" class="flex flex-col min-w-[48.5%] max-w-full font-[900] text-[.875rem]">
                                Pays*
                                <input type="text" id="pays" :class="inputClasses" placeholder="Pays*"
                                    v-model="formData.pays" @blur="v$.pays.$touch">
                                <span v-if="v$.pays.$errors.length > 0" class="text-[.75rem] text-[red]">
                                    {{ `${v$.pays.$errors[0].$message}*` }}
                                </span>
                            </label>
                        </div>
                        <!--input field 4-->
                        <div id="input-field" class="w-full flex items-center justify-between">
                            <label for="nom" class="flex flex-col min-w-[48.5%] max-w-full font-[900] text-[14px]">
                                Nom*
                                <input type="text" id="nom" :class="inputClasses" placeholder="Lincoln"
                                    v-model="formData.nome" @blur="v$.nome.$touch">
                                <span v-if="v$.nome.$errors.length > 0" class="text-[.75rem] text-[red]">
                                    {{ `${v$.nome.$errors[0].$message}*` }}
                                </span>
                            </label>
                            <label for="prenom" class="flex flex-col min-w-[48.5%] max-w-full font-[900] text-[.875rem]">
                                Prenom*
                                <input type="text" id="prenom" :class="inputClasses" placeholder="Gouse"
                                    v-model="formData.prenome" @blur="v$.prenome.$touch">
                                <span v-if="v$.prenome.$errors.length > 0" class="text-[.75rem] text-[red]">
                                    {{ `${v$.prenome.$errors[0].$message}*` }}
                                </span>
                            </label>
                        </div>
                        <!--input field 5-->
                        <div id="input-field" class="w-full flex items-center justify-between">
                            <label for="fonction" class="flex flex-col w-full font-[900] text-[14px]">
                                Fonction*
                                <input type="text" id="fonction" :class="inputClasses" placeholder="Directeur"
                                    v-model="formData.fonction" @blur="v$.fonction.$touch">
                                <span v-if="v$.fonction.$errors.length > 0" class="text-[.75rem] text-[red]">
                                    {{ `${v$.fonction.$errors[0].$message}*` }}
                                </span>
                            </label>
                        </div>

                        <input type="submit" value="Continuez" class="bg-primary-1 text-white px-[1.5rem] py-[.5rem] w-fit 
                            border border-blue-800 rounded-[.5rem] cursor-pointer">
                    </div>
                </form>

                <!--back button-->
                <router-link to="/dashboard"
                    class="flex items-center gap-[.5rem] text-[14px] text-grey-1 absolute left-[7.5rem] top-[2.5rem]">
                    <i class="fa-solid fa-chevron-left text-[10px]"></i>
                    Retour
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseForm from '../components/BaseForm.vue';

import DashboardHeader from '../components/DashboardHeader.vue';
import SideBar from '../components/SideBar.vue';

import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { computed, reactive } from 'vue';
import { createUserStore } from '../store/User';
import router from '../router/router';

let heading = 'Information Review';
let subHeading = 'Sit tristique eget proin a sem. Dui risus ultricies at vel consectetur volutpat ornare netus id.'

let inputClasses = ['min-h-[3rem]',
    'outline-none',
    'text-[1rem]',
    'text-grey-1',
    'px-[1.25rem]',
    'font-normal',
    'border',
    'border-grey-5',
    'rounded-[.75rem]'];

const formData = reactive({
    raison: '',
    siret: '',
    address: '',
    postal: '',
    ville: '',
    pays: '',
    nome: '',
    prenome: '',
    fonction: ''
})

const rules = computed(() => {
    return {
        raison: { required },
        siret: { required },
        address: { required },
        postal: { required },
        ville: { required },
        pays: { required },
        nome: { required },
        prenome: { required },
        fonction: { required }
    }
});

//creating validation instance
const v$ = useVuelidate(rules, formData);
const store = createUserStore();
async function submitForm() {
    const result = await v$.value.$validate();
    if (result) {
        store.organizationData.push({
            raison: formData.raison,
            siret: formData.siret,
            address: formData.address,
            postal: formData.postal,
            ville: formData.ville,
            pays: formData.pays,
            nome: formData.nome,
            prenome: formData.prenome,
            fonction: formData.fonction
        })
        Object.values(formData).forEach(value => {
            value = ''
        })
        router.push('/upload');
    }
}

console.log(store.usersList);
console.log(store.organizationData)


</script>

<style scoped></style>