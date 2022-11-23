<script setup lang="ts">
import SitesAsideItem from './SitesAsideItem.vue'
import { useSiteLabels } from '../api'

const { data: siteLabels } = useSiteLabels()
</script>

<template>
  <NCard class="h-min w-48" size="small" hoverable>
    <NSpace vertical>
      <SitesAsideItem
        v-for="siteLabel in siteLabels"
        :key="siteLabel.siteTypeId"
        :site-label="siteLabel" /></NSpace
  ></NCard>
</template>
