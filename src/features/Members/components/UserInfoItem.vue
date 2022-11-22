<script setup lang="ts">
import MembersListItem from './MembersListItem.vue'
import useAuthStore from '@/features/Auth/stores/useAuthStore'
import { useMember } from '../api'

const auth = useAuthStore()

const { data: member } = useMember(auth.loginInfo?.user.userId!)
</script>

<template>
  <ul v-if="member">
    <MembersListItem class="min-w-[18rem]" :member="member" />
  </ul>
</template>
