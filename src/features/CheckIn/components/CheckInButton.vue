<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import { useIsCheckIn } from '../api'
import CheckInModal from './CheckInModal.vue'

const [isDialogOpen, toggle] = useToggle()

const { isSuccess } = useIsCheckIn()
</script>

<template>
  <CheckInModal v-model="isDialogOpen" />

  <NButton
    v-if="isSuccess"
    class="font-ysbth text-base"
    size="large"
    @click="toggle()">
    实验室签到
  </NButton>
  <NButton v-else class="font-ysbth text-base" size="large"
    >正在签到时间内</NButton
  >
</template>
