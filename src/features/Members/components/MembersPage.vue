<script setup lang="ts">
import PageHeader from '@/shared/components/PageHeader.vue'
import MembersList from './MembersList.vue'
import { useMembers } from '../api'

const { data: membersData } = useMembers()
</script>

<template>
  <PageHeader />
  <NLayoutContent>
    <div v-if="membersData" class="space-y-14">
      <MembersList title="本届" :members="membersData.currentStudent" />
      <MembersList title="往届" :members="membersData.previousStudents"
    /></div>
  </NLayoutContent>
</template>
