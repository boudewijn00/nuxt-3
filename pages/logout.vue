<template>
    <h1>Logout</h1>
    <button @click="logout">Logout</button>
</template>
<script setup>
    import Cookies from 'js-cookie';
    
    const { $apiFetch } = useNuxtApp();
    
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
    }
</script>