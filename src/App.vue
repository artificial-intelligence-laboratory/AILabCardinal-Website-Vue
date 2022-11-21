<script setup lang="ts">
import useRequireAuth from './features/Auth/hooks/useRequireAuth'
import naiveUIThemeOverrides from './config/naiveUIThemeOverrides'
import AppMessageProvider from '@/shared/components/AppMessageProvider'

useRequireAuth()
</script>

<template>
  <NConfigProvider :theme-overrides="naiveUIThemeOverrides">
    <AppMessageProvider>
      <NLayout class="container mx-auto max-w-7xl"
        ><RouterView /></NLayout></AppMessageProvider
  ></NConfigProvider>
</template>
