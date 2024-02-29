<template>
    <Toolbar v-if="isLoggedIn">
    <template #start>
        <NuxtLink to="/logout"><Button label="Logout" /></NuxtLink>
    </template>
    <template #end>
        <Badge value="2"></Badge>
        </template>
    </Toolbar>
    <div class="container">
        <slot></slot>
    </div>    
</template>
<script setup>
    import 'primevue/resources/themes/aura-light-green/theme.css'
    const { isLoggedIn } = useAuth();
</script>