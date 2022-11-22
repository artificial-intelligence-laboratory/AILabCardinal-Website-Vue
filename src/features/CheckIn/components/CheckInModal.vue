<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import CheckInFormLabel from './CheckInFormLabel.vue'
import useCheckInForm from '../hooks/useCheckInForm'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const isDialogOpen = useVModel(props, 'modelValue', emit)

const {
  checkInFormRef,
  checkInFormModel,
  handleSubmit,
  selectOptions,
  isLoading
} = useCheckInForm({
  onSuccess() {
    isDialogOpen.value = false
  }
})
</script>

<template>
  <NModal v-model:show="isDialogOpen">
    <NCard class="w-[22rem]" role="dialog" aria-modal="true">
      <template #header
        ><h2 class="text-center font-ysbth text-lg">实验室签到</h2></template
      >
      <NForm
        ref="checkInFormRef"
        class="checkInForm"
        :model="checkInFormModel"
        size="large"
        @submit.prevent="handleSubmit">
        <NFormItem>
          <template #label>
            <CheckInFormLabel>任务</CheckInFormLabel>
          </template>

          <NInput
            v-model:value="checkInFormModel.task"
            type="textarea"
            placeholder="输入任务" />
        </NFormItem>
        <NFormItem>
          <template #label>
            <CheckInFormLabel>备注</CheckInFormLabel>
          </template>
          <NInput
            v-model:value="checkInFormModel.remark"
            type="textarea"
            placeholder="输入备注" />
        </NFormItem>
        <NFormItem>
          <template #label>
            <CheckInFormLabel>签退时间</CheckInFormLabel>
          </template>
          <NSelect
            v-model:value="checkInFormModel.checkOutTime"
            :options="selectOptions" />
        </NFormItem>
        <NFormItem :show-label="false">
          <NButton
            class="w-full"
            :loading="isLoading"
            type="primary"
            size="large"
            round
            attr-type="submit"
            >签到</NButton
          ></NFormItem
        >
      </NForm>
    </NCard>
  </NModal>
</template>

<style scoped></style>
