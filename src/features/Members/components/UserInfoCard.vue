<script setup lang="ts">
import useAuthStore from '@/features/Auth/stores/useAuthStore'
import { collegeManAvatar } from '../assets'
import GithubLink from './GithubLink.vue'

const auth = useAuthStore()
</script>

<template>
  <NCard v-if="auth.loginInfo" class="userInfoCard w-72" hoverable>
    <div class="flex items-center gap-x-4">
      <NAvatar
        round
        class="ring ring-primary"
        :src="collegeManAvatar"
        :size="48" />
      <p class="text-base">{{ auth.loginInfo.user.nickname }}</p>
    </div>
    <GithubLink :href="auth.loginInfo.user.githubUrl" />
  </NCard>
</template>

<style scoped>
.userInfoCard > :deep(.n-card__content) {
  @apply flex justify-between py-2.5 px-4;
}
</style>
