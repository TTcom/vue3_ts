<template>
  <div class="home">
    msg:{{ msg }} plus：{{ plus }} count2：{{ count2 }}
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>random:{{ random() }}</div>
    <button type="button" @click="handleClick">button</button>
    <son></son>
    <HelloWorld></HelloWorld>
    <onrender :items="'dasda'"></onrender>
    <tslearn></tslearn>
  </div>
  <div class="radar">
    <div class="ripple"></div>
    <div class="ripple"></div>
    <div class="ripple"></div>
  </div>
</template>
<script lang="ts">
import { reactive, ref, computed, watch, watchEffect, provide, toRefs, unref } from "vue"
import son from "./son.vue"
import HelloWorld from "@/components/HelloWorld.vue"
import onrender from "@/components/onrender.tsx"
import tslearn from "@/views/tslearn.vue"
export default {
  components: {
    son,
    HelloWorld,
    onrender,
    tslearn
  },
  setup() {
    const state = reactive({
      msg: "aaaaaaaaaaaaaaaaaaaaaaaa"
    })
    const count = ref(1)
    const count2 = ref(12)
    provide("msg", state.msg)
    const methods = {
      random(): number {
        //state.msg = "123456"
        return Math.random() * 10
      },
      handleClick(): void {
        state.msg = "hasClick"
        count.value++
        console.log(state.msg)
        console.log(unref(count))
      }
    }
    const stop = watchEffect(() => console.log(count2.value)) //立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。
    stop() //停止侦听
    count2.value++
    const plus = computed({
      get: () => count.value + 1,
      set: val => {
        count.value = val - 1
      }
    })
    // watch(       //侦听单个响应式数据
    //   () => state.msg,
    //   (msg, prevMsg) => {
    //     //当state.msg更新，会触发此函数
    //     console.log(msg)
    //     console.log(prevMsg)
    //   }
    // )
    watch([() => state.msg, count], ([msg, count], [prevMsg, prevCount]) => {
      //侦听多个响应式数据
      // 当 count.value 或者 count2.value 更新，会触发此回调函数
      // console.log(msg)
      // console.log(count)
      // console.log(prevMsg)
      // console.log(prevCount)
    })

    type school = {
      type: string
      personNum: number
    }

    const aschool: school = {
      type: "女子高校",
      personNum: 10000,
      house: 50
    } as school //断言为school

    return {
      ...toRefs(state),
      plus,
      count2,
      ...methods
    }
  }
}
</script>
<style lang="scss" scoped>
.radar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: red;
  margin-left: 300px;
  position: relative;
  .ripple {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid red;
    animation: ripple 2s linear infinite;
  }
  @keyframes ripple {
    to {
      width: 150px;
      height: 150px;
      opacity: 0;
    }
  }
}
.radar :nth-child(1) {
  animation-delay: 0.666s;
}
.radar :nth-child(1) {
  animation-delay: 1.322s;
}
</style>
