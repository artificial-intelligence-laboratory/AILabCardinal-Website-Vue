<script setup lang="ts">
import PageHeader from '@/shared/components/PageHeader.vue'
import MembersList from './MembersList.vue'
</script>

<template>
  <PageHeader />
  <ElMain>
    <div class="space-y-14">
      <MembersList title="本届" />
      <MembersList title="往届"
    /></div>
  </ElMain>
</template>
