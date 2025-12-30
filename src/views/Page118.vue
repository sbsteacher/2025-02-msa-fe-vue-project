<script setup>
import { reactive } from 'vue';

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
        <div>{{ getMvpName() }}</div>
    </div>
</div>
</template>

<style scoped>

</style>