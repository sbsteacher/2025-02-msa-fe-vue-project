<!-- 로직 담당 -->
<script setup>
import FrontWheel from '@/components/FrontWheel.vue';
import RearWheel from '@/components/RearWheel.vue';
const message = 'There';
const message2 = {
    name: 'Hong',
    age: 20
};
</script>

<!-- 화면 (View) 담당 -->
<template>
    <div>Hello {{ message2.name }} </div>
    <hr>
    <!-- 객체 주소값을 표시하라고 하면 안 된다! 이렇게 쓰는 경우는 없다! -->
    <div>Hello {{ message2 }}</div>
    <div>
        <span>Hello </span>    
        <span v-text="message2"></span>
    </div>
    <hr>
    <div>Hello {{ message }}</div>
    <div>
        <span>Hello </span>
        <!-- v-로 시작하는 속성을 디렉티브, vue 문법  -->
        <span v-text="message"></span>
    </div>
    <front-wheel></front-wheel>
    <rear-wheel />
</template>

<!--
컴포넌트(Component): 재사용 가능한 요소

쉽게 생각해 자동차 부품이라고 봐도 된다. 

-->