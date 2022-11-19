<script setup lang="ts">
import useRequireAuth from './features/Auth/hooks/useRequireAuth'
import naiveUIThemeOverrides from './config/naiveUIThemeOverrides'

useRequireAuth()
</script>

<template>
  <NConfigProvider :theme-overrides="naiveUIThemeOverrides">
    <ElContainer class="container mx-auto max-w-7xl" direction="vertical"
      ><RouterView /></ElContainer
  ></NConfigProvider>
</template>
