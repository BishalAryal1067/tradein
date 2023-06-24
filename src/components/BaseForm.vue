<template>
  <div :class="{ 'justify-center': placeCenter }" class="w-1/2 h-screen flex flex-col" id="form-wrapper">
    <h2 class="text-[2.125rem] leading-[46px] text-grey-1">{{ formHeading }}</h2>
    <h4 class="text-[1rem] font-normal text-grey-2"> {{ formSubHeading }} </h4>
    <form class="w-fit flex flex-col gap-4 mt-[1rem]" @submit.prevent="$emit('submitForm')">
      <slot></slot>
    </form>
  </div>
</template>

<script setup>
import AuthButtons from './AuthButtons.vue';

defineEmits([
  'submitForm'
])

defineProps({
  formHeading: String,
  formSubHeading: String,
  placeCenter: {
    type: Boolean,
    default: false,
    required: false
  }
})





</script>

<style scoped>
#form-wrapper {
  box-sizing: border-box;
  padding-left: calc(45% - 117.21px/2 - 494.29px);
}
</style>