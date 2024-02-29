<template>
    <client-only>
        <Card>
            <template #content>
                <h3>login</h3>
                <form @submit.prevent="login">
                    <InputText type="text" v-model="email" placeholder="email" />
                    <InputText type="password" v-model="password" placeholder="password" />
                    <Button type="submit">Login</Button>
                </form>
                    
            </template>
            <template #footer>
                <ul v-if="errors.length">
                        <li v-for="error in errors" :key="error">{{ error }}</li>
                    </ul>
            </template>
        </Card>
    </client-only>
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