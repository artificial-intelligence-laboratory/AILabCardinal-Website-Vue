<script setup lang="ts">
import useSiteTypeCode from '../hooks/useSiteTypeCode'
import type { SiteLabelData } from '../api/types'

export interface SiteItemProps {
  siteLabel: SiteLabelData
}

const props = defineProps<SiteItemProps>()
const siteTypeCode = useSiteTypeCode()

const isActive = computed(
  () => siteTypeCode.value === props.siteLabel.siteTypeCode
)
</script>

<template>
  <RouterLink :to="`/sites/${siteLabel.siteTypeCode}`">
    <NButton
      class="w-full"
      :type="isActive ? 'primary' : 'tertiary'"
      :bordered="isActive"
      size="large"
      >{{ siteLabel.siteType }}</NButton
    ></RouterLink
  >
</template>

<style scoped></style>
