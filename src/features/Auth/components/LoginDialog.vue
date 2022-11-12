<script setup lang="ts">
const isLoggedIn = ref(true)
</script>

<template>
  <ElDialog
    v-model="isLoggedIn"
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
    <ElForm>
      <ElFormItem><el-input placeholder="输入学号" size="large" /></ElFormItem>
      <ElFormItem>
        <el-input type="password" placeholder="输入密码" size="large"
      /></ElFormItem>
      <ElFormItem>
        <ElButton
          native-type="submit"
          class="w-full"
          type="primary"
          size="large"
          round
          >登录</ElButton
        ></ElFormItem
      >
      <p class="text-zinc-400 text-xs"
        >本系统仅限模式识别与人工智能实验室成员使用</p
      >
    </ElForm>
  </ElDialog>
</template>

<style>
.el-dialog > .el-dialog__header {
  margin-right: 0;
}
</style>
