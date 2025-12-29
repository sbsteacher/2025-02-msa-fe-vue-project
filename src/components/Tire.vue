<script setup>
//props 부모 컴포넌트로부터 데이터를 전달받고 싶을 때 사용
const props = defineProps({
    color: String
});
</script>

<template>
    <div :style="{ color: props.color }">{{ props.color || 'BLACK' }} TIRE</div>
</template>