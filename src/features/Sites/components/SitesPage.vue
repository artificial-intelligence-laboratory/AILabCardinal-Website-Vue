<script setup lang="ts">
import PageHeader from '@/shared/components/PageHeader.vue'
import SitesAside from './SitesAside.vue'
import SitesList from './SitesList.vue'
</script>

<template>
  <PageHeader />
  <NLayoutContent>
    <NSpace class="space-x-4" inilne :wrap-item="false" :wrap="false">
      <SitesAside />
      <SitesList /> </NSpace
  ></NLayoutContent>
</template>
