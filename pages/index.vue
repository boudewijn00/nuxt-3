<template>
    <div class="flex justify-center ">
    <Card class="max-w-sm mt-10 bg-gray-600">
        <template #content>
            <img src="~/public/logo.svg" alt="Nuxt Logo" class="h-16 w-32 m-auto" />
            <form @submit.prevent="login">
                <InputText type="text" class="text-sm h-10 my-2 w-full" v-model="email" placeholder="email" />
                <InputText type="password" class="text-sm h-10 my-2 w-full" v-model="password" placeholder="password" />
                <Button type="submit" class="flex justify-center text-sm h-10 my-2 w-full">login</Button>
            </form>      
        </template>
        <template #footer>
            <ul v-if="errors.length" class="mx-4 mt-0 text-white lowercase">
                <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </template>
    </Card>
    </div>
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