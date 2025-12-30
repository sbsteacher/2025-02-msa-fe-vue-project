<script setup>
import { globalState } from '@/globalState';
</script>

<template>
  <div>
    <nav>
      <router-link v-for="item in globalState" :to="`/${item}`" :key="item">{{ item }}</router-link>
      <!-- <router-link to="/component">component</router-link>
      <router-link to="/page98">page98</router-link>
      <router-link to="/page103">page103</router-link>
      <router-link to="/page108">page108</router-link>
      <router-link to="/page110">page110</router-link>
      <router-link to="/mission01">mission01</router-link> -->
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
nav > a { display: inline-block; }
</style>