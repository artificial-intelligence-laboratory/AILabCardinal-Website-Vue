import type { GlobalThemeOverrides } from 'naive-ui'
import { borderRadius } from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

const naiveUIThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#2c3852',
    primaryColorHover: '#6b7486',
    primaryColorPressed: '#232d42'
  },
  Input: {
    borderRadius: borderRadius.full
  },
  Button: { color: colors.white },
  Layout: {
    headerColor: colors.transparent
  }
}

export default naiveUIThemeOverrides
