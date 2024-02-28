<style>
    @import url("primevue/resources/themes/aura-light-green/theme.css");
</style>
<template>
<TabMenu :model="items" v-if="isClient && isLoggedIn">
    <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span v-bind="props.icon" />
                <span v-bind="props.label">{{ item.label }}</span>
            </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ item.label }}</span>
        </a>
    </template>
</TabMenu>
    <div class="container">
        <slot></slot>
    </div>
</template>
<script setup>
const { isLoggedIn } = useAuth();
const items = ref([
    { label: 'Profile', icon: 'pi pi-fw pi-user', route: '/profile' },
    { label: 'Logout', icon: 'pi pi-fw pi-power-off', route: '/logout' }
]);
const isClient = computed(() => process.client);
</script>