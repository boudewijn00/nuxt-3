<template>
    <div class="container">
        <slot></slot>
    </div>    
</template>
<script setup>
    const { isLoggedIn } = useAuth();
</script>