<script setup lang="ts">
import type { SiteData } from '../api/types'

defineProps<{
  site: SiteData
}>()
</script>

<template>
  <NA :href="site.siteUrl" target="_blank">
    <NCard
      class="group hover:bg-primary"
      size="small"
      hoverable
      :bordered="false">
      <NEllipsis class="font-bold text-sm group-hover:text-white">{{
        site.siteName
      }}</NEllipsis>
      <NEllipsis class="group-hover:text-white" :line-clamp="2">
        {{ site.siteIntro }}
      </NEllipsis>
    </NCard></NA
  >
</template>
