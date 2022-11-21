import type { SelectMixedOption } from 'naive-ui/es/select/src/interface'
import useFormRef from '@/shared/hooks/useFormRef'
import useResetReactive from '@/shared/hooks/useResetReactive'
import { useCheckIn } from '../api'
import type { CheckInDTO } from '../api/types'

const selectOptions: SelectMixedOption[] = [
  { label: '默认（3.5~4h后自动签退）', value: '4' },
  { label: '5h后自动签退）', value: '5' },
  { label: '6h后自动签退）', value: '6' },
  { label: '7h后自动签退）', value: '7' },
  { label: '8h后自动签退）', value: '8' }
]

export const useCheckInForm = () => {
  const [checkInFormModel, reset] = useResetReactive<CheckInDTO>({
    task: '',
    remark: '',
    checkOutTime: selectOptions[0].value as string
  })

  const checkInFormRef = useFormRef()

  const checkInMutation = useCheckIn()

  const isLoading = checkInMutation.isLoading

  const handleSubmit = async () => {
    await checkInFormRef.value.validate(async errors => {
      if (!errors) {
        await checkInMutation.mutateAsync(checkInFormModel)
        reset()
      }
    })
  }

  return {
    checkInFormRef,
    checkInFormModel,
    handleSubmit,
    selectOptions,
    isLoading
  }
}

export default useCheckInForm
