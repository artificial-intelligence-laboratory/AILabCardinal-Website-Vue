import type { GlobalThemeOverrides } from 'naive-ui'
import { borderRadius } from 'tailwindcss/defaultTheme'

const naiveUIThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#2c3852',
    primaryColorHover: '#6b7486',
    primaryColorPressed: '#232d42'
  },
  Input: {
    borderRadius: borderRadius.full
  }
}

export default naiveUIThemeOverrides
