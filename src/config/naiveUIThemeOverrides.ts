import type { GlobalThemeOverrides } from 'naive-ui'
import { borderRadius } from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

const primaryColor = '#2c3852'

const naiveUIThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor,
    primaryColorHover: '#6b7486',
    primaryColorPressed: '#232d42'
  },
  Select: {
    peers: {
      InternalSelection: { borderRadius: borderRadius.full }
    }
  },
  Button: {
    color: colors.white,
    colorHover: '#eaebee',
    textColorHover: primaryColor
  },
  Layout: {
    color: colors.transparent,
    headerColor: colors.transparent
  }
}

export default naiveUIThemeOverrides
