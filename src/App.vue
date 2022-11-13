<script setup lang="ts">
import useRequireAuth from './features/Auth/hooks/useRequireAuth'

useRequireAuth()
</script>

<template>
  <ElContainer class="container mx-auto max-w-7xl" direction="vertical"
    ><RouterView
  /></ElContainer>
</template>
