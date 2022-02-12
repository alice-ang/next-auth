import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

export const breakpoints = createBreakpoints({
  sm: "@media (min-width: 576px)",
  md: "@media (min-width: 768px)",
  Large: "@media (min-width: 992px)",
  lg: "@media (min-width: 1200px)",
  xl: "@media (min-width: 1400px)",
})

export const theme = extendTheme({ colors })
