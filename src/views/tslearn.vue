!<template>
  <div>{{ arr }}</div>
</template>
<script lang="ts">
import { reactive } from "vue"
export default {
  setup() {
    //泛型可以捕获用户传入的类型
    function createarr<T>(len: number, value: T): T[] {
      const arr = []
      for (let i = 0; i < len; i++) {
        arr.push(value)
      }
      return arr
    }
    const arr = createarr(3, "llo")

    //声明一个类型接口可以通过type或者interface(首字母需要大写不然会报错)
    //区别interface可以继承 可以被类来实现 type可以定义联合类型
    // interface Fsum {
    //   (a: number, b: number): number
    // }
    type Fsum = ((a: number, b: number) => number) | string //联合类型

    const yysum: Fsum = (a, b) => {
      return a + b
    }
    console.log(yysum(3, 12))

    const strfsum: Fsum = "oppo"

    interface StringArray {
      [index: number]: string
    }
    const heArray: StringArray = ["bob"]
    const myStr: string = heArray[0]

    interface Addtop extends StringArray {
      name: string
    }

    const littleboy: Addtop = {
      0: "bude",
      name: "peter"
    }

    console.log("littleboy", littleboy)

    //多个泛型 元祖交换
    const swap = <T, K>(tuple: [T, K]): [K, T] => {
      return [tuple[1], tuple[0]]
    }
    console.log(
      swap<number, number>([1, 2])
    )
    return {
      arr
    }
  }
}
</script>
<style lang="scss" scoped></style>
