<script setup>
import { reactive } from 'vue';

const state = reactive({ 
    player: 'Kim',
    name: 'Hong'
})
</script>

<template>
<h3>Page123</h3>
<div>
    <!-- 단방향 데이터 바인딩 -->
    <div>{{ state.player }}</div>   
    <div><input type="text" :value="state.player"></div>
    
    <!-- 양방향 데이터 바인딩 -->
    <div>{{ state.name }}</div>
    <div><input type="text" v-model="state.name"></div>
</div>
</template>

<style scoped>

</style>