<script setup lang="ts">
import { inject } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const count = inject<number>('count', 0)
</script>

<template>
  <button @click="count = 0">{{ t('reset') }}</button>
</template>
