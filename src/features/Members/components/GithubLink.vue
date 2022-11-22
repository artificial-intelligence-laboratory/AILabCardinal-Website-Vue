<script setup lang="ts">
import { GithubOne } from '@icon-park/vue-next'

defineProps<{ href: string }>()
</script>

<template>
  <NA class="githubLink my-auto" :href="href" target="_blank">
    <GithubOne fill="white" size="32" />
  </NA>
</template>

<style scoped>
.githubLink > :deep(.i-icon > svg) {
  @apply rounded-full bg-primary p-1;
}
</style>
