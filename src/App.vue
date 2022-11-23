<script setup lang="ts">
import useRequireAuth from './features/Auth/hooks/useRequireAuth'
import naiveUIThemeOverrides from './config/naiveUIThemeOverrides'
import AppMessageProvider from '@/shared/components/AppMessageProvider.vue'
import useQueryDefaultOptions from './config/useQueryDefaultOptions'

useRequireAuth()
useQueryDefaultOptions()
</script>

<template>
  <NConfigProvider :theme-overrides="naiveUIThemeOverrides">
    <AppMessageProvider>
      <NLayout class="container mx-auto max-w-7xl"
        ><RouterView /></NLayout></AppMessageProvider
  ></NConfigProvider>
</template>
