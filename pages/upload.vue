<template>
    <div class="m-5">
        <p class="text-xl mb-5">Upload</p>
        <FileUpload name="demo[]" url="/api/upload" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000">
            <template #empty>
                <p>Drag and drop files to here to upload.</p>
            </template>
        </FileUpload>
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