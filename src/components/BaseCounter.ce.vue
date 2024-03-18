<script setup lang="ts">
import { ref, provide } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  initialCount: {
    type: Number,
    default: 0
  }
})

const { t } = useI18n()

const count = ref(Number(props.initialCount))

provide('count', count)
provide('initialCount', props.initialCount)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}
</script>

<template>
  <div class="counter">
    <div class="counter__metrics">
      <slot name="metric" />
    </div>
    <div class="counter__btns">
      <button class="plus" @click="increment">{{ t('plus') }}</button>
      <button class="minus" @click="decrement">{{ t('minus') }}</button>
    </div>
    <div class="counter__control">
      <slot name="control" />
    </div>
  </div>
</template>

<style>
.counter {
  @apply shadow-md rounded-md inline-flex p-4 flex-col bg-slate-100;
  min-width: 300px;
}

.counter__btns {
  @apply flex gap-1;
}

.counter__btns button {
  @apply border-none p-2 bg-slate-500 text-white rounded-sm hover:bg-slate-600 hover:cursor-pointer transition-colors w-full;
}

.counter__control {
  @apply mt-1;
}

.counter__metrics {
  @apply mb-1;
}
</style>
