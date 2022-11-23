import { useRouteParams } from '@vueuse/router'

const useSiteTypeCode = () => {
  const siteTypeCode = useRouteParams<string>('siteTypeCode')

  return computed(() => Number(siteTypeCode.value) || 1)
}

export default useSiteTypeCode
