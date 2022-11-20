<script setup lang="ts">
export interface HomePageMenuItemProps {
  name: string
  iconSrc: string
  path?: string
  isDeveloping?: true
}

withDefaults(defineProps<HomePageMenuItemProps>(), { path: '' })
</script>

<template>
  <RouterLink class="relative h-full" :to="path">
    <NCard class="menuItem" hoverable>
      <NImage :src="iconSrc" :alt="name" width="48" />
      <p class="font-ysbth text-2xl">{{ name }}</p>
      <p v-if="isDeveloping" class="absolute bottom-[10%] text-sm">正在开发</p>
    </NCard></RouterLink
  >
</template>

<style scoped>
.menuItem {
  @apply grid h-full place-items-center;
}
.menuItem > :deep(.n-card__content) {
  @apply grid place-items-center gap-y-3;
}
</style>
