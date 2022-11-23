import { reactiveComputed, type MaybeRef } from '@vueuse/core'
import { useQuery } from '@tanstack/vue-query'
import { createQueryKeys } from '@lukemorales/query-key-factory'
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
  const query = useQuery(
    reactiveComputed(() => ({
      ...membersKeys.all(),
      staleTime: Infinity
    }))
  )

  return query
}

export const useMember = (userInfoId: MaybeRef<Member['userInfoId']>) => {
  const query = useQuery(
    reactiveComputed(() => ({
      ...membersKeys.show(unref(userInfoId)),
      staleTime: Infinity
    }))
  )

  return query
}
