<template>
    <div v-if="user?.name"><p>hello {{ user?.name }}</p></div>
</template>
<script setup>
    definePageMeta({
        middleware: ['auth']
    });

    import Cookies from 'js-cookie';

    const { $apiFetch } = useNuxtApp();
    const user = ref(null);
    
    onMounted(async() => {
        getUser();
    });

    async function getUser() {
        await $apiFetch('/api/user', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
            }
        }).then(response => {
            user.value = response.user;
        }).catch(error => {
            console.log('getUser error', error);
        });
    }
</script>