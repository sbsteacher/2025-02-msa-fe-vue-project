<script setup>
import { reactive } from 'vue';
const state = reactive({
    form: {
        id: '',
        pw: ''
    }
});
const login = () => alert(`${state.form.id}님 환영합니다!`) ;
</script>

<template>
<h3>Page125</h3>
<form @submit.prevent="login">
    <input type="text" placeholder="아이디" v-model="state.form.id">
    <input type="password" placeholder="패스워드" v-model="state.form.pw">
    <button>로그인</button>
</form>
</template>

<style scoped>

</style>