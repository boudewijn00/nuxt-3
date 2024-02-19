import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(nuxtApp => {
    const config = nuxtApp.$config
    
    nuxtApp.provide(
        'apiFetch', 
        $fetch.create({
            baseURL: 'http://localhost:8080',
            credentials: 'include'
        })
    )
})