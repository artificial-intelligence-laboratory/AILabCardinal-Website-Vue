<script setup lang="ts">
import { collegeManAvatar } from '../assets'
import type { Member } from '../api/types'
import GithubLink from './GithubLink.vue'

defineProps<{ member: Member; avatar?: string }>()
</script>

<template>
  <li>
    <NCard class="listItem" hoverable>
      <div class="flex items-center gap-x-4">
        <NAvatar
          round
          class="ring ring-primary"
          :size="48"
          :src="avatar ?? collegeManAvatar" />
        <div>
          <p class="text-base">{{ member.realName }}</p>
          <p class="text-xs"
            >{{ member.grade }} {{ member.developmentDirection }}</p
          >
        </div>
      </div>
      <GithubLink :href="member.githubUrl" />
    </NCard>
  </li>
</template>

<style scoped>
.listItem > :deep(.n-card__content) {
  @apply flex justify-between py-2.5 px-4;
}
</style>
