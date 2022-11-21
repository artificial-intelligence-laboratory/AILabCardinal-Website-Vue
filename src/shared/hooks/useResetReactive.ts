export const useResetReactive = <T extends Object>(value: T) => {
  const raw = { ...value }

  const reactiveValue = reactive(value)

  const reset = () => {
    Object.assign(reactiveValue, raw)
  }

  return [reactiveValue, reset] as const
}

export default useResetReactive
