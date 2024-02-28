export default defineNuxtRouteMiddleware((to, from) => {
    const { isLoggedIn } = useAuth()

    if(process.client && isLoggedIn.value) {
        window.location.href = '/profile'
    }
})