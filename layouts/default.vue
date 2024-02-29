<template>
    <client-only>
        <div v-if="isLoggedIn">
            <Toolbar class="bg-gray-700">
            <template #start>
                <img src="~/public/logo.svg" alt="Nuxt Logo" class="h-16 w-16" />
                <p class="text-lg ml-2 text-white font-semibold">hello {{ user?.name }}</p>
            </template>
            <template #end>
                <NuxtLink to="/logout"><Button class="text-sm h-8" label="Logout" /></NuxtLink>
                <Badge value="2" class="ml-2"></Badge>
                </template>
            </Toolbar>
        </div>
        <div>
            <slot></slot>
        </div>   
    </client-only> 
</template>
<script setup>
    const { isLoggedIn } = useAuth();

    import Cookies from 'js-cookie';

    const { $apiFetch } = useNuxtApp();
    const user = ref(null);
    
    onMounted(async() => {
        if (isLoggedIn){
            await getUser();
        }
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