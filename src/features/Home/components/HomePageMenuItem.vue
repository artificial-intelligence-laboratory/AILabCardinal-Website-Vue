<script setup lang="ts">
export interface HomePageMenuItemProps {
  name: string
  iconSrc: string
}

defineProps<HomePageMenuItemProps>()
</script>

<template>
  <li class="relative aspect-square last:col-span-3 last:aspect-auto">
    <ElCard class="el-card" shadow="hover">
      <ElImage :src="iconSrc" :alt="name" class="h-12 w-12" />
      <p class="text-2xl">{{ name }}</p>
      <p class="absolute bottom-4 text-sm">正在开发</p>
    </ElCard>
  </li>
</template>

<style scoped>
.el-card {
  @apply grid h-full place-items-center;
}

.el-card > :deep(.el-card__body) {
  @apply grid place-items-center gap-y-3;
}
</style>
