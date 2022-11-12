<script setup lang="ts">
import SitesAsideItem from './SitesAsideItem.vue'

const siteItems = [
  { name: '常用' },
  { name: '学术' },
  { name: '学校' },
  { name: '比赛' },
  { name: '工具' },
  { name: '设计' },
  { name: '信息源' },
  { name: '其他' }
]
</script>

<template>
  <ElAside class="p-4" width="12.5rem">
    <ElCard shadow="hover">
      <ElSpace class="w-full" fill direction="vertical">
        <SitesAsideItem v-for="(item, index) in siteItems" :key="index">{{
          item.name
        }}</SitesAsideItem>
      </ElSpace></ElCard
    >
  </ElAside>
</template>
