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
    const authenticated = ref(false);

    const { $apiFetch } = useNuxtApp();

    async function login() {
        if (!email.value || !password.value) {
            return;
        }

        await $apiFetch('/sanctum/csrf-cookie', {
            method: 'get'
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

    async function logout() {
        await $apiFetch('/logout', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
            }
        }).then(() => {
            userLoggedOut();
        }).catch(error => {
            console.log('logout error', error);
        });
    }

</script>