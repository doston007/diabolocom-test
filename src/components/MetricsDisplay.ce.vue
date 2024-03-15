<script setup lang="ts">
import { inject } from 'vue'

const count = inject<number>('count', 0)
</script>

<template>
  <div>
    {{ count }}
  </div>
</template>
