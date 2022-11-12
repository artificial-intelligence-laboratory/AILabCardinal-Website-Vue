<script setup lang="ts">
import PageHeader from '@/shared/components/PageHeader.vue'
import SitesAside from './SitesAside.vue'
import SitesList from './SitesList.vue'
</script>

<template>
  <PageHeader />
  <ElContainer>
    <SitesAside />
    <ElMain><SitesList /></ElMain
  ></ElContainer>
</template>
