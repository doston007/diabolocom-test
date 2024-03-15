<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, availableLocales } = useI18n()
</script>

<template>
  <div>
    <select v-model="locale">
      <option v-for="l in availableLocales" :key="l" :value="l">{{ l }}</option>
    </select>
  </div>
</template>

<style>
b {
  @apply bg-slate-500;
}
</style>
