import { reactiveComputed, type MaybeRef } from '@vueuse/core'
import { useQuery } from '@tanstack/vue-query'
import { createQueryKeys } from '@lukemorales/query-key-factory'
import useAuthStore from '@/features/Auth/stores/useAuthStore'
import axios from '@/shared/axios'
import type { Member, MembersData } from './types'

const USER_API_PATH = '/user'

const membersKeys = createQueryKeys('members', {
  all: () => ({
    queryKey: ['all'],
    queryFn() {
      return axios.get<unknown, MembersData>(USER_API_PATH + '/getStuInfoList')
    }
  }),
  show: (userInfoId: Member['userInfoId']) => ({
    queryKey: [userInfoId],
    queryFn() {
      return axios.get<unknown, Member>(USER_API_PATH + '/getStuInfo', {
        params: { userInfoId }
      })
    }
  })
})

export const useMembers = () => {
  const auth = useAuthStore()

  const query = useQuery(
    reactiveComputed(() => ({
      ...membersKeys.all(),
      staleTime: Infinity,
      enabled: auth.isLoggedIn
    }))
  )

  return query
}

export const useMember = (userInfoId: MaybeRef<Member['userInfoId']>) => {
  const auth = useAuthStore()

  const query = useQuery(
    reactiveComputed(() => ({
      ...membersKeys.show(unref(userInfoId)),
      staleTime: Infinity,
      enabled: auth.isLoggedIn
    }))
  )

  return query
}
