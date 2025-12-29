<script setup>
let loading = false;
const parent = ['fruits', 'abc'];
const child = 'item';
</script>

<template>
    <h3>Page98.vue</h3>
    <input type="text" placeholder="아이디" v-bind:readonly="loading"> 
    <input type="password" placeholder="비밀번호" :readonly="loading"> 
    <button :disabled="loading">로그인</button>
    <hr>
    <ul :class="parent" class="fruit">
        <li :class="child">사과</li>
        <li :class="child">바나나</li>
        <li :class="child">딸기</li>
        <li :class="child">배</li>
    </ul>
</template>

<style scoped>

</style>