<script setup lang="ts">
import useAuthStore from '../stores/useAuthStore'
import loginFormRules from '../utils/loginFormRules'
import useFormRef from '@/shared/hooks/useFormRef'
import { useLogin } from '../api'
import type { LoginDTO } from '../api/types'

const auth = useAuthStore()

const isDialogOpen = computed(() => !auth.isLoggedIn)

const loginFormModel = reactive<LoginDTO>({
  studentNumber: '',
  password: ''
})

const loginFormRef = useFormRef()

const loginMutation = useLogin()

const isLoading = loginMutation.isLoading

const handleSubmit = async () => {
  await loginFormRef.value.validate(async valid => {
    if (valid) {
      loginMutation.mutate(loginFormModel)
    }
  })
}
</script>

<template>
  <ElDialog
    class="loginDialog"
    v-model="isDialogOpen"
    center
    width="22rem"
    :show-close="false"
    :close-on-click-modal="false">
    <template #header>
      <p class="text-lg">模式识别与人工智能实验室</p>
      <p class="break-normal text-xs"
        >(AILab) Pattern Recognition and artificial intelligence Laboratory</p
      >
    </template>

    <p
      class="mb-8 text-center underline decoration-primary decoration-4 underline-offset-8 text-base"
      >登录账号</p
    >
    <ElForm
      ref="loginFormRef"
      :model="loginFormModel"
      :rules="loginFormRules"
      @submit.prevent="handleSubmit"
      size="large">
      <ElFormItem prop="studentNumber"
        ><ElInput v-model="loginFormModel.studentNumber" placeholder="输入学号"
      /></ElFormItem>
      <ElFormItem prop="password">
        <ElInput
          v-model="loginFormModel.password"
          type="password"
          placeholder="输入密码"
      /></ElFormItem>
      <ElFormItem>
        <ElButton
          :loading="isLoading"
          native-type="submit"
          class="w-full"
          type="primary"
          round
          >登录</ElButton
        ></ElFormItem
      >
      <p class="font-deng text-zinc-400 text-sm"
        >本系统仅限模式识别与人工智能实验室成员使用</p
      >
    </ElForm>
  </ElDialog>
</template>

<style>
.loginDialog > .el-dialog__header {
  @apply mr-0 font-ysbth;
}
</style>
