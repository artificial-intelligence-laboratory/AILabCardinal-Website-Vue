<script setup lang="ts"></script>

<template>
  <RouterLink to="/">
    <ElButton class="sitesAsideItem" size="large">
      <p class="text-base"><slot /></p> </ElButton
  ></RouterLink>
</template>

<style scoped>
.sitesAsideItem {
  @apply w-full border-0;
}
</style>
