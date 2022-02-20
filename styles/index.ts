import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    primary: "#6B63F3",
    primaryDark: "#4C4AA0",
    complementary: "#EBF363",
    monochromatic: "#3E34EF",
    700: "#2a69ac",
    purple: "#8842e1",
  },
}

export const breakpoints = createBreakpoints({
  sm: "@media (min-width: 576px)",
  md: "@media (min-width: 768px)",
  lg: "@media (min-width: 992px)",
  xl: "@media (min-width: 1200px)",
  xxl: "@media (min-width: 1440px)",
})

export const theme = extendTheme({ colors })
