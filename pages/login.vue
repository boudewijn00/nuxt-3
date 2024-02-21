<template>
    <h1>Login</h1>
    <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
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
    const errors = ref([]);

    const { $apiFetch } = useNuxtApp();

    async function login() {
        await $apiFetch('/sanctum/csrf-cookie', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
            }
        });

        try {
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
            })

            window.location.href = '/profile';
        } catch (error) {
            console.log('login error', error.data.errors);
            errors.value = Object.values(error.data.errors).flat();
        }

    }

</script>