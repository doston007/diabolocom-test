<script setup lang="ts">
import I18nHost from '../I18nHost.ce.vue'
import BaseCounter from '../BaseCounter.ce.vue'
import MetricsDisplay from '../MetricsDisplay.ce.vue'
import ControlPanel from '../ControlPanel.ce.vue'
import LocalePicker from '../LocalePicker.ce.vue'
</script>

<template>
  <I18nHost>
    <BaseCounter>
      <template v-slot:metric>
        <MetricsDisplay />
      </template>
      <template v-slot:control>
        <ControlPanel />
      </template>
    </BaseCounter>
    <LocalePicker />
  </I18nHost>
</template>
