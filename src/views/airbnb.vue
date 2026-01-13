<script setup>
import { onMounted, reactive } from 'vue';
import axios from 'axios';

const state = reactive({
  sections: [],
});

onMounted(async () => {
  axios.get('/airbnb.json').then((res) => {
    state.sections = res.data.sections;
    console.log(state.sections);
  });
});
</script>

<template>
  <div v-for="(item, idx) in state.sections" :key="idx" class="sections">
    <div>
      {{ item.sectionData.title }}
      <span class="right">
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
          <path fill="none"d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path></svg>
        </span>
        <div class="d-flex">
          <div v-for="subItem in item.sectionData.items" :key="subItem.demandStayListing.id" class="item">
            <img :src="subItem.contextualPictures[0].picture" alt="">
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.d-flex { display: flex; overflow-x: scroll; }
.d-flex .item { width: 200px; }
.d-flex .item img { width: 200px; }
.right svg {
  display: inline !important;
}
div.sections { width: 80vw; }
div.sections:not(:first-child) {
  margin-top: 30px;
}
</style>
