<script setup lang="ts">
import SitesAsideItem from './SitesAsideItem.vue'
import siteItems from '../utils/siteItems'
</script>

<template>
  <NCard class="h-min w-48" size="small" hoverable>
    <NSpace vertical>
      <SitesAsideItem
        v-for="(item, index) in siteItems"
        :key="index"
        v-bind="item" /></NSpace
  ></NCard>
</template>
