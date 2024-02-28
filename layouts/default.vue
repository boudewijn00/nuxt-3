<template>
    <header>
            <nav>
                <ul>
                    <li><nuxt-link to="/"><button>Home</button></nuxt-link></li>
                    <li v-if="isLoggedIn"><nuxt-link to="/logout"><button>logout</button></nuxt-link></li>
                </ul>
            </nav>
        </header>
    <div class="container">
        
        <slot></slot>
    </div>
</template>
<script setup>
    const { isLoggedIn } = useAuth();
</script>