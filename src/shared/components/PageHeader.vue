<script setup lang="ts">
import backIcon from './back.png'
</script>

<template>
  <NLayoutHeader>
    <NPageHeader @back="$router.push('/')">
      <template #back>
        <NButton class="h-12 w-12 p-0">
          <NImage :src="backIcon" preview-disabled width="32" />
        </NButton>
      </template>
      <template #title>
        <p class="ml-5 font-ysbth text-primary">
          <span class="text-2xl">{{ $route.meta.title }}</span>
          <span class="text-sm">/{{ $route.meta.subTitle }}</span>
        </p></template
      >
    </NPageHeader>
  </NLayoutHeader>
</template>

<style scoped></style>
