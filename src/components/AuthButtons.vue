<template>
    <button type="submit" class="w-full bg-primary-1 py-[.75rem] rounded-[.5rem] text-[#FFFFFF] text-[400] capitalize">{{
        buttonValue }}</button>
    <!--google button-->
    <button type="submit" @click.prevent=""
        class="w-full bg-white rounded-[.5rem] py-[10px] text-[1rem]
         text-grey-700 font-[600] border-[1px] border-grey-300 mt-[1rem]
         flex items-center justify-center gap-[.5rem]">
        <img src="../assets/Images/google.png" alt="" class="w-[24px] h-[24px]">
        Sign in with Google
    </button>
</template>

<script setup>

defineProps({
    buttonValue: {
        type: String,
        required: true,
    }
})
</script>

