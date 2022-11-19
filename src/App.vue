<script setup lang="ts">
import useRequireAuth from './features/Auth/hooks/useRequireAuth'

useRequireAuth()
</script>

<template>
  <NConfigProvider>
    <ElContainer class="container mx-auto max-w-7xl" direction="vertical"
      ><RouterView /></ElContainer
  ></NConfigProvider>
</template>
