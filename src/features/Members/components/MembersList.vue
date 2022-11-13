<script setup lang="ts">
import MembersListItem from './MembersListItem.vue'
interface MembersListProps {
  title: string
}

defineProps<MembersListProps>()
</script>

<template>
  <section>
    <h2 class="mb-5 text-xl">{{ title }}</h2>
    <ul class="grid grid-cols-4 gap-5">
      <MembersListItem v-for="item in 12" :key="item" />
    </ul>
  </section>
</template>
