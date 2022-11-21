<script setup lang="ts">
import useSiteTypeCode from '../hooks/useSiteTypeCode'

export interface SiteItemProps {
  name: string
  siteTypeCode: string
}

const props = defineProps<SiteItemProps>()
const currentSiteTypeCode = useSiteTypeCode()

const isActive = computed(
  () => currentSiteTypeCode.value === props.siteTypeCode
)
</script>

<template>
  <RouterLink :to="`/sites/${siteTypeCode}`">
    <NButton
      class="w-full"
      :type="isActive ? 'primary' : 'tertiary'"
      :bordered="isActive"
      size="large"
      >{{ name }}</NButton
    ></RouterLink
  >
</template>

<style scoped></style>
