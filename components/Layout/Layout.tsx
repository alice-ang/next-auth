import { Header } from "../Header"
import { Footer } from "../Footer"
import { Box } from "@chakra-ui/react"

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <Box width={{ sm: "100%", lg: "70%" }} mx="auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  )
}
