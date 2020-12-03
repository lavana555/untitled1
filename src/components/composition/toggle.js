import {reactive, ref} from "@vue/composition-api";


export function useToggle()
{
    let visible = ref(true)
    const toggle = () => {
        visible.value = !visible.value
    }
    return {visible,toggle}
}
