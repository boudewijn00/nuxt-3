import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig();
    console.log('API base URL:', config.public.apiBaseUrl);
    
    nuxtApp.provide(
        'apiFetch', 
        $fetch.create({
            baseURL: config.public.apiBaseUrl,
            credentials: 'include'
        })
    )
})