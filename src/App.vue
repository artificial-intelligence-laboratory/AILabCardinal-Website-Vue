<script setup lang="ts">
import useRequireAuth from './features/Auth/hooks/useRequireAuth'
import naiveUIThemeOverrides from './config/naiveUIThemeOverrides'

useRequireAuth()
</script>

<template>
  <NConfigProvider :theme-overrides="naiveUIThemeOverrides">
    <NLayout class="container mx-auto max-w-7xl"><RouterView /></NLayout
  ></NConfigProvider>
</template>
