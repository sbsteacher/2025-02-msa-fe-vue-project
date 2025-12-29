<script setup>
let loading = false;

const fruits = [ 'apple', 'banana', 'pear', 'pear' ];
</script>

<template>
    <h3>Page103 답답하네 답답해</h3>
    <!-- v-if 디렉티브 -->
    <template v-if="loading">로딩 중</template>
    <div v-else>로딩 완료</div>
    <div>{{ loading ? '로딩 중' : '로딩 완료' }}</div>
    <hr>
    <div v-show="loading">show 로딩 중</div>
    <div v-show="!loading">show 로딩 완료</div>
    <hr>
    <!-- v-for 사용할 때 주의사항이 있다. 항상 key 속성을 주셔야 하며 유일값이어야 한다.-->
    <div v-for="(item, idx) in fruits" :key="idx">{{idx + 1}}. {{ item }}</div>

</template>

<style scoped>

</style>