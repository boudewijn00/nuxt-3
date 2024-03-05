<template>
    <div class="my-5">
        <div class="card flex flex-col gap-3 md:flex-row">
            <InputGroup>
                <InputGroupAddon>
                    <i class="pi pi-user"></i>
                </InputGroupAddon>
                <InputText placeholder="Username" />
            </InputGroup>
            <InputGroup>
                <InputGroupAddon>$</InputGroupAddon>
                <InputNumber placeholder="Price" />
                <InputGroupAddon>.00</InputGroupAddon>
            </InputGroup>
            <InputGroup>
                <InputGroupAddon>www</InputGroupAddon>
                <InputText placeholder="Website" />
            </InputGroup>
        </div>
        <div class="flex justify-content-center my-5 gap-3">
            <div class="w-2/4">
                <Calendar v-model="date" placeholder="Select a Date" class="w-full md:w-20rem" />
            </div>
            <div class="w-2/4">
                <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" placeholder="Select Cities" :maxSelectedLabels="3" class="w-full md:w-20rem" />
            </div>
        </div>
        <div class="flex justify-content-center my-5 gap-3">
            <div class="w-2/4">
                <SelectButton v-model="value" :options="options" aria-labelledby="basic" class="text-xs" />
            </div>
            <div class="w-2/4 mt-2">
                <div class="flex flex-col md:flex-row gap-3">
                    <div class="flex">
                        <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
                        <label for="ingredient1" class="ml-2">Cheese</label>
                    </div>
                    <div class="flex">
                        <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom" />
                        <label for="ingredient2" class="ml-2">Mushroom</label>
                    </div>
                    <div class="flex">
                        <RadioButton v-model="ingredient" inputId="ingredient3" name="pizza" value="Pepper" />
                        <label for="ingredient3" class="ml-2">Pepper</label>
                    </div>
                    <div class="flex">
                        <RadioButton v-model="ingredient" inputId="ingredient4" name="pizza" value="Onion" />
                        <label for="ingredient4" class="ml-2">Onion</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card flex justify-content-center">
            <Knob v-model="knob" />
        </div>
        <div class="card flex justify-content-center mt-10">
                <Slider v-model="slider" class="w-full" />
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

const date = ref(null);
const value = ref('One-Way');
const knob = ref(0);
const options = ref(['One-Way', 'Return']);
const ingredient = ref('');
const slider = ref(50);

definePageMeta({
    middleware: ['auth']
});
</script>