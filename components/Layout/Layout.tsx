import { Footer } from "../Footer"
import { Box } from "@chakra-ui/react"
import { Sidebar } from "../Sidebar"

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <Box width={{ sm: "100%", xxl: "70%" }} mx="auto">
      <Sidebar>
        <main>{children}</main>
        <Footer />
      </Sidebar>
    </Box>
  )
}
