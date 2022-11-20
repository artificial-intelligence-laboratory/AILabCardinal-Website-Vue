<script setup lang="ts">
import { BrandGithubIcon } from 'vue-tabler-icons'
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
      <a class="my-auto" href="https://github.com"
        ><BrandGithubIcon
          class="rounded-full bg-primary stroke-white p-1"
          size="30"
      /></a>
    </NCard>
  </li>
</template>

<style scoped>
.listItem > :deep(.n-card__content) {
  @apply flex justify-between py-2.5 px-4;
}
</style>
