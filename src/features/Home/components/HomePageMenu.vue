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
  { name: '目前', iconSrc: codeComputerIcon },
  { name: '导航', iconSrc: navigationIcon },
  { name: '服务器', iconSrc: serverIcon },
  { name: '成员', iconSrc: peoplesIcon },
  { name: '文档', iconSrc: bookIcon },
  { name: '文件仓库', iconSrc: cloudStorageIcon },
  { name: '成就', iconSrc: trophyIcon },
  { name: '待扩展区域', iconSrc: loadingIcon }
]
</script>
<template>
  <ul class="grid grid-cols-5 gap-5">
    <HomePageMenuItem
      v-for="(item, index) in menuItems"
      :key="index"
      v-bind="item"
  /></ul>
</template>
