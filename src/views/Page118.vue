<script setup>
import { computed, reactive } from 'vue';

const state = reactive({
    mvpId: 7,
    players: [
        { id: 7, name: 'John Doe' }
        , { id: 9, name: 'Jane Lee' }
        , { id: 12, name: 'James Park' }
    ]
});

const getMvpName = () => {
    // if(state.mvpId) {
    //     const player = state.players.find(item => item.id === state.mvpId);
    //     if(player) {
    //         return player.name;
    //     }
    // }
    // return '없음';
    console.log('call getMvpName');
    return state.players.find(item => item.id === state.mvpId)?.name || '없음';
}

const computedMvpName = computed( () => {
    console.log('call computedMvpName');
    return state.players.find(item => item.id === state.mvpId)?.name || '없음';
} );

</script>

<template>
<h3>Page118</h3>
<div>
    <h1>오늘의 MVP</h1>
    <div>
        <template v-if="state.mvpId">
            {{ state.players.find(item => item.id === state.mvpId)?.name || '없음1' }}
        </template>
        <template v-else>없음2</template>
        <hr>
        <!-- 함수는 호출할 때마다 함수 안의 코드가 실행이 된다. -->
        <div>{{ getMvpName() }}</div>
        <div>{{ getMvpName() }}</div>
        <div>{{ getMvpName() }}</div>
        <hr>
        <!-- 컴퓨티드는 보낸 콜백함수가 딱 한번만 실행이되고 결과가 return -->
        <div>{{ computedMvpName }}</div>
        <div>{{ computedMvpName }}</div>
        <div>{{ computedMvpName }}</div>
    </div>
    <!-- 미니 미션 -->
    
</div>
</template>

<style scoped>

</style>