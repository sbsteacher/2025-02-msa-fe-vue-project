<script setup>
import { onMounted, reactive } from 'vue'; //{ 상수,변수,함수가 넘어온다 }
import axios from 'axios'; //객체 주소값 리턴

const state = reactive({
    imgList: []
})

onMounted(() => {
    console.log('onMounted');
    axios.get('https://picsum.photos/v2/list')
            .then( res => {
                state.imgList = res.data
                console.log(res.data);
            } );
});
</script>

<template>
<h3>Page126</h3>
<!-- state.imgList에 있는 자료로 img를 화면에 뿌려주세요. 
src로 쓸 데이터는 각 객체의 download_url 속성에 있습니다. -->

</template>

<style scoped>

</style>