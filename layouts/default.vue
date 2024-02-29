<template>
    <header>
        <nav>
            <client-only>
                <NuxtLink v-if="!isLoggedIn" to="/"><Button>Home</Button></NuxtLink>
                <NuxtLink v-if="isLoggedIn" to="/profile"><Button>Profile</Button></NuxtLink>
                <NuxtLink v-if="isLoggedIn" to="/logout"><Button>Logout</Button></NuxtLink>
            </client-only>
        </nav>
    </header>
    <div class="container">
        <slot></slot>
    </div>    
</template>
<script setup>
    const { isLoggedIn } = useAuth();
</script>