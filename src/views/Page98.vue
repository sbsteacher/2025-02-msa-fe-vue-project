<script setup>
let loading = false;

const parent = ['fruits', 'abc'];
const child = 'item';
/* class 바인딩과 배열의 조합은 배열의 아이템이 클래스에 무조건 추가가 되지만
class 바인딩과 객체의 조합은 객체의 속성마다 추가가 될지 무시할지 결정할 수 있다.
속성명:boolean  (속성명을 클래스값으로 false면 무시, true면 추가)
 
 */
const visible = { fruit: true, abc: true };
const hidden = { fruit: false, abc: false };

const rect = {
    backgroundColor: 'red',
    width: '200px',
    height: '100px'
};
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
    <hr>
    <div :class="visible">사과</div>
    <div :class="hidden">오이</div>
    <div :class="{fruit: true}">배</div>
    <hr>
    <div :style="rect"></div>
</template>

<style scoped>
.fruit { color: red; }
</style>