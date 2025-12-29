<script setup>

</script>

<template>
  <div>
    <nav>
      <router-link to="/component">컴포넌트</router-link>
      <router-link to="/page98">Page98</router-link>
      <router-link to="/page103">Page103</router-link>
      <router-link to="/page108">Page108</router-link>
      <router-link to="/mission01">Mission01</router-link>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>

</style>