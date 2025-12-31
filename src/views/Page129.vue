<script setup>
import { onMounted, onUpdated, onUnmounted, reactive } from 'vue';
onMounted( () => console.log('onMounted') );
onUpdated(() => console.log('onUpdated') );
onUnmounted(() => console.log('onUnmounted') );
const state = reactive({
    val: 0
});
const increseVal = () => state.val++;
</script>

<template>
<h3>Page129</h3>
<div>{{ state.val }}</div>
<div><button @click="increseVal">증가</button></div>
</template>

<style scoped>

</style>