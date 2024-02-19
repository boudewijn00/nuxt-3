<template>
    <div>hello {{ name }}</div>
</template>
<script setup>
    import axios from 'axios';
    
    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;
    axios.defaults.baseURL = 'http://localhost:8080';

    const name = ref(null);

    onMounted(() => {
        axios.get('/sanctum/csrf-cookie').then(csrf => {
            axios.post('/login', {
                email: 'boudewijn+11@hellodata.nl',
                password: '1234567890'
            }).then(() => {
                axios.get('/api/user').then(response => {
                    name.value = response.data.user.name;
                }).catch(error => {
                    console.log('user error', error);
                });
            }).catch(error => {
                console.log('login error', error);
            })
        });
    });
</script>