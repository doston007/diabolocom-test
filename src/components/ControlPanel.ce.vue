<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { inject } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const count = inject<Ref<number>>('count', ref(0))
const initialCount = inject<number>('initialCount', 0)

const reset = () => {
  count.value = 0
}

const resetInitial = () => {
  count.value = initialCount
}
</script>

<template>
  <div class="control">
    <button class="reset-initial" @click="resetInitial">{{ t('resetInitial') }}</button>
    <button class="reset" @click="reset">{{ t('reset') }}</button>
  </div>
</template>

<style>
.control {
  @apply flex flex-row gap-1;
}

.control button {
  @apply w-full bg-red-400 text-white hover:bg-red-500 transition-colors hover:cursor-pointer rounded-sm border-none p-1;
}
</style>
