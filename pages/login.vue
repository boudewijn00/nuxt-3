<template>
    <form @submit.prevent="login">
        <InputText type="email" v-model="email" placeholder="email" />
        <InputText type="password" v-model="password" placeholder="password" />
        <Button label="login" icon="pi pi-check" type="submit" />
        <ul class="login-errors">
            <li style="color: var(--red-600)" v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
    </form>
</template>
<script setup>
    definePageMeta({
        middleware: ['guest']
    });

    import Cookies from 'js-cookie';
    
    const email = ref('');
    const password = ref('');
    const errors = ref([]);

    const { $apiFetch } = useNuxtApp();
    const { setUser } = useAuth();

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

            const response = await $apiFetch('/api/user', {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
            }});

            setUser(response.user.name);
            window.location.href = '/profile';
        } catch (error) {
            console.log('login error', error.data.errors);
            errors.value = Object.values(error.data.errors).flat();
        }

    }

</script>