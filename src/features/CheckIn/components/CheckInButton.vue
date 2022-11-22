<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import useCheckOutTimeStore from '../hooks/useCheckOutTimeStore'
import CheckInModal from './CheckInModal.vue'

const [isDialogOpen, toggle] = useToggle()

const checkOutTimeStore = useCheckOutTimeStore()
</script>

<template>
  <CheckInModal v-model="isDialogOpen" />

  <NButton
    v-if="checkOutTimeStore.checkOutTime > 0"
    class="text-base"
    size="large"
    >正在签到时间内，大约 {{ checkOutTimeStore.checkOutTime.toFixed(1) }}h
    后将会自动签退</NButton
  >
  <NButton v-else class="font-ysbth text-base" size="large" @click="toggle()">
    实验室签到
  </NButton>
</template>
