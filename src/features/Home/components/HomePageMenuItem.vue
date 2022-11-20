<script setup lang="ts">
import type { Icon } from '@icon-park/vue-next/lib/runtime'
import MenuItemIcon from './MenuItemIcon'
export interface HomePageMenuItemProps {
  name: string
  icon: Icon
  path?: string
  isDeveloping?: true
}

withDefaults(defineProps<HomePageMenuItemProps>(), { path: '' })
</script>

<template>
  <RouterLink class="relative h-full" :to="path">
    <NCard class="menuItem" hoverable>
      <MenuItemIcon :icon="icon" />
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
