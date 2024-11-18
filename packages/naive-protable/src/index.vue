<template>
  <div class="n-protable">
    <div class="n-protable-search">
      <Search></Search>
    </div>
  </div>
</template>

<script setup lang="ts">
import Search from "./components/Search.vue";
defineOptions({
  name: "NProTable",
});
</script>

<style scoped lang="scss"></style>
