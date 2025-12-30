<script setup>
import { ref } from 'vue';
let pushUp = 0; //변수일 뿐 반응형 상태는 아니다.
let sitUp = 0; //변수일 뿐 반응형 상태는 아니다.

const refPushUp = ref(0); //초기값 0을 가지고 있는 ref 반응형 상태 객체 주소값이 넘어간다.
const refSitUp = ref(0); //초기값 0을 가지고 있는 ref 반응형 상태 객체 주소값이 넘어간다.
//반응형 상태란 자신의 값이 변하면 화면을 다시 그리는 변수 or 속성이다.

//반응형 상태를 만드는 방법 2가지 ref, reactive 를 이용해서 만들 수 있다.

const increasePushUp = () => {    
    console.log(`pushUp: ${++pushUp}, refPushUp: ${++refPushUp.value}`);
    //re 반응형 상태 객체의 값을 변경할 때는 value속성값을 변경하면 된다.
};
const increaseSitUp = () => { 
    console.log(`sitUp: ${++sitUp}, refSitUp: ${++refSitUp.value}`);
};
</script>

<template>
<h3>Page110</h3>
<h3>체력 검사</h3>
<br>
<hr>
<ul>
    <li>팔 굽혀 펴기: {{ pushUp }}</li>
    <li>윗몸 일으키기: {{ sitUp }}</li>
</ul>
<ul>
    <li>ref 팔 굽혀 펴기: {{ refPushUp }}</li>
    <li>ref윗몸 일으키기: {{ refSitUp }}</li>
</ul>
<hr>
<br>
<button @click="increasePushUp">팔 굽혀 펴기 증가</button>
<button @click="increaseSitUp">윗몸 일으키기 증가</button>
</template>

<style scoped>

</style>