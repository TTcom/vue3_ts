import { defineComponent, ref } from "vue"

const MyComponent = defineComponent({
  props: ["items"],

  setup(props) {
    const count = ref<number>(2312)
    return () => {
      return (
        <div>
          <span>{count.value}</span>
          <span>{props.items}</span>
        </div>
      )
    }
  }
})
export default MyComponent
