<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import type { SelectMixedOption } from 'naive-ui/es/select/src/interface'
import CheckInFormLabel from './CheckInFormLabel.vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const isDialogOpen = useVModel(props, 'modelValue', emit)

const selectModel = ref('3.5')

const options: SelectMixedOption[] = [
  { label: '默认（3.5~4h后自动签退）', value: '3.5' }
]
</script>

<template>
  <NModal v-model:show="isDialogOpen">
    <NCard class="w-[22rem]" role="dialog" aria-modal="true">
      <template #header
        ><h2 class="text-center font-ysbth text-lg">实验室签到</h2></template
      >
      <NForm class="checkInForm" size="large">
        <NFormItem>
          <template #label>
            <CheckInFormLabel>任务</CheckInFormLabel>
          </template>

          <NInput type="textarea" placeholder="输入任务" />
        </NFormItem>
        <NFormItem>
          <template #label>
            <CheckInFormLabel>备注</CheckInFormLabel>
          </template>
          <NInput type="textarea" placeholder="输入备注" />
        </NFormItem>
        <NFormItem>
          <template #label>
            <CheckInFormLabel>签退时间</CheckInFormLabel>
          </template>
          <NSelect v-model:value="selectModel" :options="options" />
        </NFormItem>
        <NFormItem :show-label="false">
          <NButton
            class="w-full"
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
