<script setup lang="ts">
import HomePageTitle from './HomePageTitle.vue'
import HomePageMenu from './HomePageMenu.vue'
import CheckInButton from '@/features/CheckIn/components/CheckInButton.vue'
import LoginModal from '@/features/Auth/components/LoginModal.vue'
import useAuthStore from '@/features/Auth/stores/useAuthStore'

const auth = useAuthStore()
</script>

<template>
  <LoginModal />
  <NLayoutHeader>
    <HomePageTitle />
  </NLayoutHeader>
  <NLayoutContent>
    <div class="mt-10 space-y-5">
      <CheckInButton v-if="auth.isLoggedIn" />
      <HomePageMenu
    /></div>
  </NLayoutContent>
</template>
