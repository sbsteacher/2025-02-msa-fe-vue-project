<!-- 로직 담당 -->
<script setup>
import FrontWheel from '@/components/FrontWheel.vue';
import RearWheel from './components/RearWheel.vue';
</script>

<!-- 화면 (View) 담당 -->
<template>
  <FrontWheel></FrontWheel>
  <RearWheel />
</template>

<!--
컴포넌트(Component): 재사용 가능한 요소

쉽게 생각해 자동차 부품이라고 봐도 된다. 

-->