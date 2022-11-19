<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import CheckInDialog from './CheckInDialog.vue'

const [isDialogOpen, toggle] = useToggle()
</script>

<template>
  <CheckInDialog v-model="isDialogOpen" />
  <ElButton size="large" @click="toggle">
    <p class="font-ysbth font-normal text-base">实验室签到</p>
  </ElButton>
</template>
