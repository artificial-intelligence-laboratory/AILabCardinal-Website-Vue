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
  await loginFormRef.value.validate(async errors => {
    if (!errors) {
      await loginMutation.mutateAsync(loginFormModel)
      loginFormModel.studentNumber = ''
      loginFormModel.password = ''
    }
  })
}
</script>

<template>
  <NModal v-model:show="isDialogOpen">
    <NCard class="w-[22rem] text-center" role="dialog" aria-modal="true">
      <p class="font-ysbth text-lg">模式识别与人工智能实验室</p>
      <p class="break-normal font-ysbth text-xs"
        >(AILab) Pattern Recognition and artificial intelligence Laboratory</p
      >
      <p
        class="my-8 underline decoration-primary decoration-4 underline-offset-8 text-sm"
        >登录账号</p
      >
      <NForm
        class="loginForm"
        size="large"
        :show-label="false"
        ref="loginFormRef"
        :model="loginFormModel"
        :rules="loginFormRules"
        @submit.prevent="handleSubmit">
        <NFormItem path="studentNumber">
          <NInput
            v-model:value="loginFormModel.studentNumber"
            placeholder="输入学号" />
        </NFormItem>
        <NFormItem path="password">
          <NInput
            v-model:value="loginFormModel.password"
            type="password"
            placeholder="输入密码" />
        </NFormItem>
        <NFormItem>
          <NButton
            class="w-full"
            type="primary"
            size="large"
            round
            attr-type="submit"
            :loading="isLoading"
            >登录</NButton
          ></NFormItem
        >
        <p class="font-deng text-zinc-400"
          >本系统仅限模式识别与人工智能实验室成员使用</p
        >
      </NForm>
    </NCard>
  </NModal>
</template>

<style scoped></style>
