<script setup lang="ts">
import LoginDialog from './features/Auth/components/LoginDialog.vue'
</script>

<template>
  <LoginDialog />
  <ElContainer class="container mx-auto max-w-7xl" direction="vertical"
    ><RouterView
  /></ElContainer>
</template>

<style scoped></style>
