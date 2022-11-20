<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import CheckInModal from './CheckInModal.vue'

const [isDialogOpen, toggle] = useToggle()
</script>

<template>
  <CheckInModal v-model="isDialogOpen" />
  <NButton size="large" @click="toggle">
    <p class="font-ysbth font-normal text-base">实验室签到</p>
  </NButton>
</template>
