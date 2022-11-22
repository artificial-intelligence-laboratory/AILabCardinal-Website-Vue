<script setup lang="ts">
import MembersListItem from './MembersListItem.vue'
import type { Member } from '../api/types'

interface MembersListProps {
  title: string
  members: Member[]
}

defineProps<MembersListProps>()
</script>

<template>
  <section>
    <h2 class="mb-5 text-xl">{{ title }}</h2>
    <ul class="grid grid-cols-4 gap-5">
      <MembersListItem
        v-for="member in members"
        :key="member.userInfoId"
        :member="member" />
    </ul>
  </section>
</template>
