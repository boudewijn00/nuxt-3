<template>
    <client-only>
        <div v-if="isLoggedIn">
            <Toolbar class="bg-gray-700 rounded-none">
            <template #start>
                <img src="~/public/logo.svg" alt="Nuxt Logo" class="h-16 w-16" />
                <p class="text-lg ml-2 text-white font-semibold">hello {{ user?.name }}</p>
            </template>
            <template #end>
                <Badge value="2" class="mr-2"></Badge>
                <NuxtLink to="/logout"><Button class="text-sm h-8" label="Logout" /></NuxtLink>
                </template>
            </Toolbar>
        </div>
        <div v-if="isLoggedIn" class="flex flex-col mx-auto sm:flex-row justify-center">
            <div class="md:w-2/12 max-w-lg my-5 mx-2">
                <Menu :model="items" />
            </div>
            <div class="md:w-10/12 max-w-4xl mx-2 my-5 border-x border-y">
                <slot></slot>
            </div>
        </div>
        <div v-else>
            <slot></slot>
        </div>
    </client-only> 
</template>
<script setup>
    const { isLoggedIn } = useAuth();

    import Cookies from 'js-cookie';

    const { $apiFetch } = useNuxtApp();
    const user = ref(null);

    const items = [
        { label: 'profile', icon: 'pi pi-fw pi-user', command: () => navigateTo('/profile')},
        { label: 'steps', icon: 'pi pi-fw pi-map', command: () => navigateTo('/steps')},
        { label: 'upload', icon: 'pi pi-fw pi-upload', command: () => navigateTo('/upload')},
        { label: 'accordeon', icon: 'pi pi-fw pi-list', command: () => navigateTo('/accordeon')},
        { label: 'data view', icon: 'pi pi-fw pi-database', command: () => navigateTo('/data')},
        { label: 'form', icon: 'pi pi-fw pi-pencil', command: () => navigateTo('/form')},
        { label: 'chart', icon: 'pi pi-fw pi-chart-bar', command: () => navigateTo('/chart')}
    ];
    
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