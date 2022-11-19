<script setup lang="ts">
import HomePageTitle from './HomePageTitle.vue'
import HomePageMenu from './HomePageMenu.vue'
import CheckInButton from '@/features/CheckIn/components/CheckInButton.vue'
import LoginModal from '@/features/Auth/components/LoginModal.vue'
</script>

<template>
  <LoginModal />
  <ElHeader>
    <HomePageTitle />
  </ElHeader>
  <ElMain>
    <div class="mt-8 space-y-5">
      <CheckInButton />
      <HomePageMenu
    /></div>
  </ElMain>
</template>
