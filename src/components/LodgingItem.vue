<script setup>
const props = defineProps({
    picture: String,
    alt: String,
    title: String,
    period: String,
    price: String,
    rating: Number,
    badge: String
});
</script>

<template>
    <div class="item po-rel">
        <img :src="props.picture" :alt="props.alt">
        <div>{{ props.title }}</div>
        <div>{{ props.period }}</div>
        <div>{{ props.price }} 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 8px; width: 8px; fill: currentcolor;"><path fill-rule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path></svg>
            {{ props.rating }}
        </div>
        <div v-if="props.badge" class="badge">{{ props.badge }}</div>
    </div>
</template>

<style scoped>
.po-rel { position: relative; }
.po-rel .badge { position: absolute; top: 10px; left: 10px; 
    background-color: #ffffffab; padding: 5px 8px; 
    border-radius: 10%;
}
.item { width: 200px; }
.item:not(:first-child) { margin-left: 10px; }
.item img { width: 200px; }
svg { display: inline !important; }
div.sections { width: 80vw; }
div.sections:not(:first-child) { margin-top: 30px; }
</style>