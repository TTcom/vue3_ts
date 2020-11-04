<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ name }}</h1>
    <button @click="handleClick">button</button>
    <teleport to="body">
      <Dialog v-if="isShowDialog"></Dialog>
    </teleport>
  </div>
</template>
<script lang="ts">
import { reactive, onMounted, toRefs } from "vue"
import Dialog from "@/components/dialog.vue"
export default {
  components: {
    Dialog
  },
  setup() {
    const state = reactive({
      name: "check",
      isShowDialog: false
    })
    onMounted(() => {
      console.log("mounted!")
    })
    const methods = {
      handleClick() {
        state.name = "state"
        state.isShowDialog = true
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
      ...toRefs(state),
      ...methods
    }
  }
}
</script>
