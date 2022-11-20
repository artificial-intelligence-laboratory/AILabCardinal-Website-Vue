import type { FormInst } from 'naive-ui'

const useFormRef = () => {
  const formRef = ref<FormInst>(null!)

  return formRef
}

export default useFormRef
