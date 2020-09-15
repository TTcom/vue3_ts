<template>
  <div class="son">
    {{ theme }}
  </div>
</template>
<script lang="ts">
import { inject } from "vue"
export default {
  setup() {
    const theme = inject("msg")
    return {
      theme
    }
  }
}
</script>
<style lang="scss" scoped></style>
