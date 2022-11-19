<script setup lang="ts">
import { useVModel } from '@vueuse/core'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const isDialogOpen = useVModel(props, 'modelValue', emit)

const selectModel = ref('3.5')
</script>

<template>
  <ElDialog v-model="isDialogOpen" center width="22rem">
    <template #header>
      <h2 class="font-ysbth text-lg">实验室签到</h2>
    </template>
    <ElForm class="checkInForm" size="large" label-position="top">
      <ElFormItem label="任务"
        ><ElInput rows="3" type="textarea" placeholder="输入任务"
      /></ElFormItem>
      <ElFormItem label="备注">
        <el-input type="textarea" placeholder="输入备注"
      /></ElFormItem>
      <ElFormItem label="签退时间">
        <ElSelect v-model="selectModel" class="w-full">
          <ElOption label="默认（3.5~4h后自动签退）" :value="selectModel" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem>
        <ElButton native-type="submit" class="w-full" type="primary" round>
          <p class="text-sm">签到</p>
        </ElButton></ElFormItem
      >
    </ElForm>
  </ElDialog>
</template>

<style scoped>
.checkInForm :deep(.el-form-item__label) {
  @apply ml-2 border-l-4 border-primary pl-2 text-sm;
}

.checkInForm :deep(.el-textarea__inner) {
  @apply px-4 pt-4;
}
</style>
