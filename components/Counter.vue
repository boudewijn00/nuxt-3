<template>
    <div>
        <div>Counter: {{ count }}</div>
        <div>Plus One: {{ plusOne }}</div>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>
<script setup>

const count = ref(0)
const plusOne = computed(() => count.value + 1)

function decrement() {
    count.value--
}

function increment() {
    count.value++
}

</script>