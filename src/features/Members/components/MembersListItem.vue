<script setup lang="ts">
import { GithubOne } from '@icon-park/vue-next'
import { collegeManAvatar } from '../assets'
</script>

<template>
  <li>
    <NCard class="listItem" hoverable>
      <div class="flex items-center gap-x-4">
        <NAvatar
          round
          class="ring ring-primary"
          :size="48"
          :src="collegeManAvatar" />
        <div>
          <p class="text-base">成员姓名</p>
          <p class="text-xs">2020级 Java后端</p>
        </div>
      </div>
      <NA class="my-auto" href="https://github.com">
        <GithubOne fill="white" size="32" />
      </NA>
    </NCard>
  </li>
</template>

<style scoped>
.listItem > :deep(.n-card__content) {
  @apply flex justify-between py-2.5 px-4;
}
.listItem :deep(.i-icon > svg) {
  @apply rounded-full bg-primary p-1;
}
</style>
