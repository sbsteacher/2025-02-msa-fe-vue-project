<script setup>
import { reactive } from 'vue';
const state = reactive({
    form: {
        id: 'abc',
        pw: ''
    }
});
const login = () => {
    //예외 처리
    if(state.form.id.length === 0 || !state.form.pw) {
        alert('아이디/비밀번호를 확인해 주세요.');
        return;
    }
    alert(`${state.form.id}님 환영합니다!`);
}
</script>

<template>
<h3>Page125</h3>
<!-- prevent 막는다. 원래 submit에서 하는 작업을 막는다. -->
<form @submit.prevent="login">
    <input type="text" placeholder="아이디" v-model="state.form.id">
    <input type="password" placeholder="패스워드" v-model="state.form.pw">
    <button>로그인</button>
</form>
</template>

<style scoped>

</style>