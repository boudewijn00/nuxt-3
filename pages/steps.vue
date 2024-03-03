<template>
    <div class="my-5">
        <p class="text-xl mb-5">Steps</p>
        <Stepper linear>
            <StepperPanel header="Header I">
                <template #content="{ nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium p-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue lorem vel nibh tincidunt, vel cursus odio tempor. 
                            Aliquam ultrices libero a mauris convallis fermentum. Sed porta, augue at tristique commodo, sapien diam sollicitudin felis, sit amet commodo lectus ipsum vel ex. 
                            Mauris in sem vel turpis elementum malesuada non non quam. Sed interdum consequat nulla, vitae rutrum erat fringilla et. 
                            Vestibulum rutrum mauris at sem cursus porttitor. 
                        </div>
                    </div>
                    <div class="flex pt-4 justify-content-end">
                        <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="nextCallback" />
                    </div>
                </template>
            </StepperPanel>
            <StepperPanel header="Header II">
                <template #content="{ prevCallback, nextCallback }">
                    <div class="flex flex-column h-12rem">
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium p-5">
                            Donec laoreet lacinia sapien sed rutrum. Quisque ullamcorper interdum nisi id ullamcorper. Proin odio nisl, viverra a dignissim nec, dignissim vel odio. 
                            Nam aliquet tortor vitae tortor volutpat malesuada. Suspendisse potenti. Cras a varius leo. Vestibulum imperdiet euismod nisi vitae ultrices. 
                            Quisque diam mauris, volutpat suscipit sapien eu, laoreet egestas eros. Sed placerat congue nibh, ut dignissim nisi porttitor ut
                        </div>
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
                        <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium p-5">
                            Fusce hendrerit, augue tempus lobortis tincidunt, leo quam vehicula mauris, non venenatis elit elit non leo. Aenean placerat suscipit dignissim. 
                            Proin pharetra dictum tortor, sed suscipit odio porttitor a. Aenean felis purus, scelerisque sed ipsum non, pulvinar mollis elit. 
                            Nullam viverra non justo eu sollicitudin. Sed in ex eget velit maximus tempor quis ut mi.
                        </div>
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