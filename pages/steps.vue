<template>
    <div class="my-5">
        <p class="text-xl mb-5">Steps</p>
        <Stepper>
            <StepperPanel header="Header I">
                <template #content="{ nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium p-5">Content I</div>
                    </div>
                    <div class="flex pt-4 justify-content-end">
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Header II">
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium p-5">Content II</div>
                    </div>
                    <div class="flex pt-4 justify-content-between gap-2">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Header III">
                <template #content="{ prevCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium p-5">Content III</div>
                    </div>
                    <div class="flex pt-4 justify-content-start">
                        <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="prevCallback" />
                    </div>
                </template>
            </StepperPanel>
        </Stepper>
    </div>
</template>
<style scoped>
.p-stepper {
    flex-basis: 50rem;
}
</style>
<script setup>
import { RouterLink } from 'vue-router';

    definePageMeta({
        middleware: ['auth']
    });

    const router = useRoute();
    const value = ref([{ label: 'Space used', value: 15 }]);
</script>