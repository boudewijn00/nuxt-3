<template>
    <div>
        this is a dynamic route: {{ $route.params.id }}
    </div>
</template>
<script>
export default {
    async asyncData({ params }) {
        return { id: params.id }
    }
}
</script>