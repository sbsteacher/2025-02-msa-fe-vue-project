<script setup>
let loading = false;
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
</template>

<style scoped>

</style>