<script setup lang="ts">
import HomePageTitle from './HomePageTitle.vue'
import HomePageMenu from './HomePageMenu.vue'
import CheckInButton from '@/features/CheckIn/components/CheckInButton.vue'
import LoginModal from '@/features/Auth/components/LoginModal.vue'
</script>

<template>
  <LoginModal />
  <NLayoutHeader>
    <HomePageTitle />
  </NLayoutHeader>
  <NLayoutContent>
    <div class="mt-10 space-y-5">
      <CheckInButton />
      <HomePageMenu
    /></div>
  </NLayoutContent>
</template>
