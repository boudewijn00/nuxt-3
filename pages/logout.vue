<script setup>
    import Cookies from 'js-cookie';
    
    const { $apiFetch } = useNuxtApp();
    const { removeUser } = useAuth();
    
    onMounted(async() => {
        try {
            await $apiFetch('/logout', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
                }
            })
        } catch (error) {
            console.log('logout error', error);
        } finally {
            removeUser();
            window.location.href = '/';
        }
    });
</script>