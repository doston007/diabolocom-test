<script lang="ts">
import { defineComponent, provide } from 'vue'
import { createI18n, I18nInjectionKey } from 'vue-i18n'
import en from '../locales/en.json'
import fr from '../locales/fr.json'

const messages = {
  en,
  fr
}

const i18n = createI18n<false>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'fr',
  allowComposition: true,
  messages
})

export default defineComponent({
  setup() {
    provide(I18nInjectionKey, i18n)
    return {}
  }
})
</script>

<template>
  <slot />
</template>
