<script setup lang="ts">
import { useSites } from '../api'
import useSiteTypeCode from '../hooks/useSiteTypeCode'
import SitesListItem from './SitesListItem.vue'

const siteTypeCode = useSiteTypeCode()

const { data: sitesData } = useSites(siteTypeCode)
</script>
<template>
  <NCard size="small">
    <NGrid
      v-if="sitesData?.length"
      class="flex flex-wrap"
      :cols="5"
      :x-gap="6"
      :y-gap="6">
      <NGi v-for="item in sitesData" :key="item.siteId">
        <SitesListItem :site="item"
      /></NGi>
    </NGrid>
    <main v-else class="grid h-full place-items-center">
      <NEmpty size="large" description="这个网站类型还没有录入任何网站" />
    </main>
  </NCard>
</template>
