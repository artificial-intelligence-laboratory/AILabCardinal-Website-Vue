import { reactiveComputed, type MaybeRef } from '@vueuse/core'
import { useQuery } from '@tanstack/vue-query'
import { createQueryKeys } from '@lukemorales/query-key-factory'
import useAuthStore from '@/features/Auth/stores/useAuthStore'
import axios from '@/shared/axios'
import type { SiteData } from './types'

const NAVIGATION_API_PATH = '/navigation'

type SiteTypeCode = string

const sitesKeys = createQueryKeys('sites', {
  show: (siteTypeCode: SiteTypeCode) => ({
    queryKey: [siteTypeCode],
    queryFn() {
      return axios.get<unknown, SiteData[]>(
        NAVIGATION_API_PATH + '/siteTypeCode',
        {
          params: { siteTypeCode: siteTypeCode }
        }
      )
    }
  })
})

export const useSites = (siteTypeCode: MaybeRef<SiteTypeCode>) => {
  const auth = useAuthStore()

  const query = useQuery(
    reactiveComputed(() => ({
      ...sitesKeys.show(unref(siteTypeCode)),
      enabled: auth.isLoggedIn
    }))
  )

  return query
}
