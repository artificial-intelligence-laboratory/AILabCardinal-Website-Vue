import { NMessageProvider, useMessage } from 'naive-ui'
import type { MessageApiInjection } from 'naive-ui/es/message/src/MessageProvider'

declare global {
  interface Window {
    $message: MessageApiInjection
  }
}

const InjectMessage = defineComponent({
  setup(_, { slots }) {
    window.$message = useMessage()

    return () => h(() => slots.default?.())
  }
})

const AppMessageProvider = defineComponent({
  setup(_, { slots }) {
    return () =>
      h(NMessageProvider, () => [h(InjectMessage, () => slots.default?.())])
  }
})

export default AppMessageProvider
