<script setup lang="ts">
import { NMessageProvider } from 'naive-ui'
import InjectMessage from './InjectMessage.vue'
</script>

<template>
  <NMessageProvider>
    <InjectMessage>
      <slot />
    </InjectMessage>
  </NMessageProvider>
</template>
