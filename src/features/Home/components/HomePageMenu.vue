<script setup lang="ts">
import HomePageMenuItem, {
  type HomePageMenuItemProps
} from './HomePageMenuItem.vue'
import {
  bookIcon,
  cloudStorageIcon,
  codeComputerIcon,
  loadingIcon,
  navigationIcon,
  peoplesIcon,
  serverIcon,
  trophyIcon
} from '../assets'

const menuItems: HomePageMenuItemProps[] = [
  { name: '目前', iconSrc: codeComputerIcon, isDeveloping: true },
  { name: '导航', iconSrc: navigationIcon, path: '/sites' },
  { name: '服务器', iconSrc: serverIcon, isDeveloping: true },
  { name: '成员', iconSrc: peoplesIcon, path: '/members' },
  { name: '文档', iconSrc: bookIcon },
  { name: '文件仓库', iconSrc: cloudStorageIcon, isDeveloping: true },
  { name: '成就', iconSrc: trophyIcon, isDeveloping: true },
  { name: '待扩展区域', iconSrc: loadingIcon }
]
</script>
<template>
  <NGrid :cols="5" :x-gap="20" :y-gap="20">
    <NGi
      class="aspect-square last:aspect-auto"
      v-for="(item, index) in menuItems"
      :key="index"
      :span="index === menuItems.length - 1 ? 3 : 1">
      <HomePageMenuItem v-bind="item"
    /></NGi>
  </NGrid>
</template>
