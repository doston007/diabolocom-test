<script setup lang="ts">
import { inject } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const count = inject<number>('count', 0)
</script>

<template>
  <div class="metrics">
    {{ t('currentCount') }}:
    <strong>{{ count }}</strong>
  </div>
</template>

<style>
.metrics {
  @apply bg-white p-2 rounded-sm border-solid;
}
</style>
