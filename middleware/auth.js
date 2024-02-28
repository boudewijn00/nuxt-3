export default defineNuxtRouteMiddleware((to, from) => {
    const { isLoggedIn } = useAuth()
    console.log('auth middleware', isLoggedIn.value)

    if(process.client && !isLoggedIn.value) {
        window.location.href = '/'
    }
})