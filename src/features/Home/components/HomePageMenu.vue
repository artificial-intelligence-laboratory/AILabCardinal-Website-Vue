<script setup lang="ts">
import HomePageMenuItem, {
  type HomePageMenuItemProps
} from './HomePageMenuItem.vue'
import {
  CodeComputer,
  Navigation,
  Server,
  People,
  BookOne,
  CloudStorage,
  Trophy,
  Loading
} from '@icon-park/vue-next'

const menuItems: HomePageMenuItemProps[] = [
  { name: '目前', icon: CodeComputer, isDeveloping: true },
  { name: '导航', icon: Navigation, path: '/sites' },
  { name: '服务器', icon: Server, isDeveloping: true },
  { name: '成员', icon: People, path: '/members' },
  { name: '文档', icon: BookOne },
  { name: '文件仓库', icon: CloudStorage, isDeveloping: true },
  { name: '成就', icon: Trophy, isDeveloping: true },
  { name: '待扩展区域', icon: Loading }
]
</script>
<template>
  <NGrid :cols="5" :x-gap="20" :y-gap="20">
    <NGi
      class="aspect-square last:aspect-auto"
      v-for="(item, index) in menuItems"
      :key="index"
      :span="index === menuItems.length - 1 ? 3 : 1">
      <HomePageMenuItem v-bind="item" />
    </NGi>
  </NGrid>
</template>
