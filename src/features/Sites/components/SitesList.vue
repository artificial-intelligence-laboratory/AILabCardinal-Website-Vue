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
      class="flex flex-wrap"
      v-if="sitesData"
      :cols="5"
      :x-gap="6"
      :y-gap="6">
      <NGi v-for="item in sitesData" :key="item.siteId">
        <SitesListItem :site="item"
      /></NGi>
    </NGrid>
    <div class="grid min-h-[20rem] place-items-center" v-else>
      <NEmpty size="large" description="这个网站类型还没有录入任何网站" />
    </div>
  </NCard>
</template>
