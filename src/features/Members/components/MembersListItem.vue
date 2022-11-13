<script setup lang="ts">
import { BrandGithubIcon } from 'vue-tabler-icons'
import { collegeManAvatar } from '../assets'
</script>

<template>
  <li>
    <ElCard class="el-card" shadow="hover">
      <div class="flex items-center gap-x-4">
        <ElAvatar
          class="ring ring-primary"
          :size="48"
          :src="collegeManAvatar" />
        <div>
          <p class="text-base">成员姓名</p>
          <p class="text-xs">2020级 Java后端</p>
        </div>
      </div>
      <ElLink href="https://github.com" :underline="false"
        ><BrandGithubIcon
          class="rounded-full bg-primary stroke-white p-1"
          size="30"
      /></ElLink>
    </ElCard>
  </li>
</template>

<style scoped>
.el-card > :deep(.el-card__body) {
  @apply flex justify-between py-2.5 px-4;
}
</style>
