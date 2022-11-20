import type { PropType } from 'vue'
import type { Icon } from '@icon-park/vue-next/lib/runtime'

const MenuItemIcon = defineComponent({
  props: {
    icon: { type: Object as PropType<Icon>, required: true }
  },
  render() {
    const { $props } = this

    return h($props.icon, { theme: 'filled', size: 48 })
  }
})

export default MenuItemIcon
