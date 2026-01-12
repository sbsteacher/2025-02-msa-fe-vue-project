<script setup>
import { onMounted } from 'vue'; //{ 상수,변수,함수가 넘어온다 }
import axios from 'axios'; //객체 주소값 리턴

onMounted(async () => {
  axios.get('/airbnb.json').then((res) => console.log(res.data));
});
</script>

<template></template>

<style scoped></style>
