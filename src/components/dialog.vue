!<template>
  <div class="dialog">
    一个dialog
  </div>
</template>
<script lang="ts">
import { reactive } from "vue"
export default {
  setup() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 100px;
  width: 300px;
  height: 300px;
  z-index: 999;
  border: 1px solid black;
}
</style>
