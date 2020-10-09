<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ state.name }}</h1>
    <button @click="handleClick">button</button>
  </div>
</template>
<script lang="ts">
import { reactive, onMounted } from "vue"
export default {
  setup() {
    const state = reactive({
      name: "check"
    })
    onMounted(() => {
      console.log("mounted!")
    })
    const methods = {
      handleClick() {
        console.log(123456)
        state.name = "state"
      }
    }
    let x!: number
    function initialize() {
      x = 10
    }
    initialize()
    console.log(2 * x) // Ok
    function goOn(a: any, k: number): void {
      console.log(a, k)
    }
    goOn?.(10, 25)

    return {
      state,
      ...methods
    }
  }
}
</script>
