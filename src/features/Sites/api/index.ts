import { reactiveComputed, type MaybeRef } from '@vueuse/core'
import { useQuery } from '@tanstack/vue-query'
import { createQueryKeys } from '@lukemorales/query-key-factory'
import axios from '@/shared/axios'
import type { SiteData, SiteLabelData } from './types'

const NAVIGATION_API_PATH = '/navigation'

type SiteTypeCode = SiteLabelData['siteTypeCode']

const sitesKeys = createQueryKeys('sites', {
  labels: () => ({
    queryKey: ['labels'],
    queryFn() {
      return axios.get<unknown, SiteLabelData[]>(
        NAVIGATION_API_PATH + '/getLabelTypeList'
      )
    }
  }),
  show: (siteTypeCode: SiteTypeCode) => ({
    queryKey: [siteTypeCode],
    queryFn() {
      return axios.get<unknown, SiteData[]>(
        NAVIGATION_API_PATH + '/siteTypeCode',
        {
          params: { code: siteTypeCode }
        }
      )
    }
  })
})

export const useSiteLabels = () => {
  const query = useQuery({
    ...sitesKeys.labels(),
    cacheTime: Infinity,
    staleTime: Infinity
  })

  return query
}

export const useSites = (siteTypeCode: MaybeRef<SiteTypeCode>) => {
  const query = useQuery(
    reactiveComputed(() => ({
      ...sitesKeys.show(unref(siteTypeCode)),
      cacheTime: Infinity,
      staleTime: Infinity
    }))
  )

  return query
}
