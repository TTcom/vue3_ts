<template>
  <div class="home">
    {{ state.msg }}
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>
<script lang="ts">
import { reactive } from "vue"
export default {
  setup() {
    const state = reactive({
      msg: "msg reactive"
    })

    const random = function(): void {
      state.msg = Math.random()
    }

    return {
      random,
      state
    }
  }
}
</script>
