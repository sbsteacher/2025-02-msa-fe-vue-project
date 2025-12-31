<script setup>
import Tire from './Tire.vue';
import { useCounterStore } from '@/stores/counter';
const page = 'history';

//counterStore에는 { count, doubleCount, increment } 객체 주소값이 넘어온다.
const counterStore = useCounterStore();
</script>

<template>
    <div class="front-wheel">        
        <span :id="page">FRONT WHEEL</span>
        <tire color="RED" />
        <div>TIMES: {{ counterStore.count }}</div>
    </div>
</template>

<style scoped>
#history { text-decoration: underline; }    
.front-wheel {
    border: 1px solid black;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
}
</style>