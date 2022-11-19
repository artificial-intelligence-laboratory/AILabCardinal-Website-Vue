<script setup lang="ts">
import backIcon from './back.png'
</script>

<template>
  <ElHeader>
    <ElPageHeader class="font-ysbth" @back="$router.back">
      <template #icon>
        <ElButton class="backButton">
          <ElImage :src="backIcon" class="w-8" />
        </ElButton>
      </template>
      <template #title>
        <p class="ml-6 font-normal">
          <span class="text-2xl">{{ $route.meta.title }}</span>
          <span class="text-sm">/{{ $route.meta.subTitle }}</span>
        </p>
      </template>
    </ElPageHeader></ElHeader
  >
</template>

<style scoped>
.backButton {
  @apply aspect-square p-6;
}
</style>
