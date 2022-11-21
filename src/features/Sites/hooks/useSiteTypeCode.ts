import { useRouteParams } from '@vueuse/router'
import siteItems from '../utils/siteItems'

const useSiteTypeCode = () => {
  const siteTypeCode = useRouteParams<string>('siteTypeCode')

  return computed(() => siteTypeCode.value || siteItems[0].siteTypeCode)
}

export default useSiteTypeCode
