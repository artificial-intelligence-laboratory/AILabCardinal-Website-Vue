<script setup lang="ts">
import PageHeader from '@/shared/components/PageHeader.vue'
import SitesAside from './SitesAside.vue'
import SitesList from './SitesList.vue'
</script>

<template>
  <PageHeader />
  <NLayout has-sider>
    <SitesAside />
    <NLayoutContent><SitesList /></NLayoutContent
  ></NLayout>
</template>
