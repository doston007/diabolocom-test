<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, availableLocales, t } = useI18n()
</script>

<template>
  <label class="locale-picker">
    <span>{{ t('selectLocale') }}:</span>
    <select v-model="locale">
      <option v-for="lang in availableLocales" :key="lang" :value="lang">
        {{ lang }}
      </option>
    </select>
  </label>
</template>

<style>
.locale-picker {
  @apply shadow-md rounded-md inline-flex p-4 flex-col bg-slate-100;
}
</style>
