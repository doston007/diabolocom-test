<script setup lang="ts">
import { ref, provide } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const count = ref(0)
provide('count', count)
</script>

<template>
  <div class="counter">
    <slot name="metric" />
    <div class="counter__btns">
      <button @click="count++">{{ t('plus') }}</button>
      <button @click="count--">{{ t('minus') }}</button>
    </div>
    <slot name="control" />
  </div>
</template>

<style>
b {
  @apply bg-slate-500;
}
</style>
