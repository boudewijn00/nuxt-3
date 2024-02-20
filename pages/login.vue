<template>
    <h1>Login</h1>
    <form @submit.prevent="login">
        <input type="email" v-model="email" placeholder="email">
        <input type="password" v-model="password" placeholder="password">
        <button type="submit">Login</button>
    </form>
</template>
<script setup>
    import Cookies from 'js-cookie';
    
    const email = ref('');
    const password = ref('');

    const { $apiFetch } = useNuxtApp();

    async function login() {
        if (!email.value || !password.value) {
            return;
        }

        await $apiFetch('/sanctum/csrf-cookie', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
            }
        });

        await $apiFetch('/login', {
            method: 'post',
            body: {
                email: email.value,
                password: password.value
            },
            headers: {
                'Accept': 'application/json',
                'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
            }
        }).catch(error => {
            console.log('login error', error);
        })
    }

</script>