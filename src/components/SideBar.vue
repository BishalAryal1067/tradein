<template>
    <div class="h-screen w-[32.625rem] flex items-center pt-[7.5rem] pl-[7.5rem] flex-col">
        <div id="information-review" class="flex items-start gap-[.95rem]">
            <!--page / step count and status-->
            <div id="indicator" class="flex flex-col justify-center items-center">
                <span id="step-count" class="flex justify-center items-center w-[4.375rem] h-[4.375rem]  rounded-[50%]"
                    :class="{ 'bg-blue-200': currentStep == 1 }">
                    <span id="step" class="flex justify-center items-center w-[3.125rem] h-[3.125rem]
                        rounded-[50%] text-white font-[500] text-[20px]" :class="{
                            'bg-primary-1': currentStep == 1, 'bg-blue-200': currentStep == 2,
                            'border-2': currentStep == 2, 'border-primary-1': currentStep == 2
                        }">
                        <span v-if="currentStep == 2" :class="{'text-primary-1': currentStep == 2}"><i class="fa-solid fa-check"></i></span>
                        <span v-else>1</span>
                    </span>
                </span>
                <span class="block w-[0.065rem] h-[6.375rem] bg-blue-200 border-2 border-blue-200">
                </span>
            </div>
            <div id="content" class="w-[19.375rem]">
                <p class="text-[1.25rem] text-primary-1 font-[500] ">Information Review</p>
                <p class="text-[1.125rem] text-grey-1" :class="{ 'text-grey-2': currentStep == 2 }">
                    Sit tristique eget proin a sem. Dui risus ultricies at vel consectetur
                    volutpat ornare netus id.
                </p>
            </div>
        </div>
        <div id="upload-docs" class="flex items-start gap-[.95rem]">
            <!--page / step count and status-->
            <div id="indicator" class="flex flex-col justify-center items-center">
                <span id="step-count" class="flex justify-center items-center w-[4.375rem] h-[4.375rem] rounded-[50%]"
                    :class="{ 'bg-blue-200': currentStep == 2 }">

                    <span id="step" class="flex justify-center items-center w-[3.125rem] h-[3.125rem]
                         rounded-[50%] text-[20px]"
                        :class="{ ' bg-primary-1': currentStep == 2 }, { 'bg-blue-200': currentStep == 1 }">
                        <span v-if="stepStatus" class=" text-white font-[500]"><i class="fa-solid fa-check"></i></span>
                        <span :class="{ 'text-primary-1': currentStep == 1, 'text-white': currentStep == 2 }">2</span>

                    </span>
                </span>
            </div>
            <div id="content" class="w-[19.375rem]">
                <p class="text-[1.25rem] font-[500]" :class="{
                    'text-grey-2': currentStep == 1,
                    'text-primary-1': currentStep == 2
                }">
                    Upload Documents
                </p>
                <p class="text-[1.125rem] text-grey-1">
                    Vel consectetur ut enim eu amet cras non risus pellentesque. Faucibus sagittis et facilisi tristique
                    quam id.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    currentStep: String
})

</script>

<style lang="scss" scoped></style>