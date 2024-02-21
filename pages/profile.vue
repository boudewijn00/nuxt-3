<template>
    <div v-if="user?.name">hello {{ user?.name }}</div>
    <button @click="logout">Logout</button>
</template>
<script setup>
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

    async function logout() {
        await $apiFetch('/logout', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
            }
        }).catch(error => {
            console.log('logout error', error);
        });

        window.location.href = '/login';
    }
</script>