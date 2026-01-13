<script setup>
import { onMounted, reactive } from 'vue';
import LodgingItem from '@/components/LodgingItem.vue';
import axios from 'axios';

const state = reactive({
  sections: [],
});

onMounted(async () => {
  axios.get('/airbnb.json').then((res) => {
    state.sections = res.data.sections;
    console.log(res.data.sections);
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
          <lodging-item v-for="subItem in item.sectionData.items" 
              :key="subItem.demandStayListing.id"
              :picture="subItem.contextualPictures[0].picture" 
              :alt="subItem.title"
              :title="subItem.title"
              :period="subItem.structuredContent.primaryLine[0].body"
              :price="subItem.structuredDisplayPrice.primaryLine.price"
              :rating="subItem.avgRatingLocalized"
              :badge="subItem.badges.length ? subItem.badges[0].text: ''"
          />
          <!-- 
          <div v-for="subItem in item.sectionData.items" :key="subItem.demandStayListing.id" class="item po-rel">
            <img :src="subItem.contextualPictures[0].picture" alt="">
            <div>{{ subItem.title }}</div>
            <div>{{ subItem.structuredContent.primaryLine[0].body }}</div>
            <div>{{ subItem.structuredDisplayPrice.primaryLine.price }} 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 8px; width: 8px; fill: currentcolor;"><path fill-rule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path></svg>
                  {{ subItem.avgRatingLocalized }}
            </div>
            <div v-if="subItem.badges.length" class="badge">{{ subItem.badges[0].text }}</div>
          </div>          
          -->
        </div>   
    </div>
  </div>
</template>

<style scoped>
.d-flex { display: flex; overflow-x: scroll; }
</style>
