import type { FormInstance } from 'element-plus'

const useFormRef = () => {
  const formRef = ref<FormInstance>(null!)

  return formRef
}

export default useFormRef
