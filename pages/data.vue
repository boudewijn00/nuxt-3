<template>
    <div class="m-5">
        <p class="text-xl mb-5">Data</p>
        <DataView :value="products">
            <template #list="slotProps">
                <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                    <div class="flex flex-column sm:flex-row sm:align-items-center py-4 gap-2" :class="{ 'border-top-1 surface-border': index !== 0 }">
                        <div class="relative">
                            <img class="md:block sm:hidden mx-auto border-round w-full" :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`" :alt="item.name" />
                        </div>
                        <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
                            <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                                <div class="my-1">
                                    <span class="font-medium text-secondary text-sm">{{ item.category }}</span>
                                    <div class="text-lg font-medium text-900 mt-2">{{ item.name }}</div>
                                </div>
                                <div class="surface-100 p-1" style="border-radius: 30px">
                                    <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                        <span class="text-900 font-medium text-sm">{{ item.rating }}</span>
                                        <i class="pi pi-star-fill text-yellow-500"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-column md:align-items-end gap-5">
                                <span class="text-xl font-semibold text-900 my-1">${{ item.price }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row-reverse md:flex-row gap-2 h-10 w-44">
                                    <Button icon="pi pi-heart" outlined></Button>
                                    <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial white-space-nowrap"></Button>
                                </div>
                </div>
            </template>
        </DataView>
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

    const products = ref([
        {
            'image': 'bamboo-watch.jpg',
            'name': 'Bamboo Watch',
            'price': 65,
            'category': 'Accessories',
            'inventoryStatus': 'INSTOCK',
            'rating': 5
        },
        {
            'image': 'black-watch.jpg',
            'name': 'Black Watch',
            'price': 72,
            'category': 'Accessories',
            'inventoryStatus': 'INSTOCK',
            'rating': 4
        }
    ]);
    const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};
</script>