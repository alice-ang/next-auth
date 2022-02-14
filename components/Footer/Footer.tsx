import * as React from "react"
import { Box, Stack, StackDivider } from "@chakra-ui/react"
import { Copyright } from "../Copyright"
import { LinkGrid } from "../LinkGrid"
import { Logo } from "../Logo"
import { SocialMediaLinks } from "./SocialMediaLinks"

export const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    mx="auto"
    maxW="7xl"
    pt="12"
    bgColor="white"
    px={{ sm: "4", md: "8" }}
  >
    <Stack spacing="10" divider={<StackDivider />}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "10", lg: "28" }}
      >
        <Box flex="1">
          <Logo />
        </Box>
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ sm: "10", md: "20" }}
        >
          <LinkGrid spacing={{ sm: "10", md: "20", lg: "28" }} flex="1" />
        </Stack>
      </Stack>
      <Stack
        direction={{ md: "row-reverse" }}
        justifyContent={{ sm: "center", md: "space-between" }}
        alignItems="center"
        flexWrap="wrap"
      >
        <SocialMediaLinks />
        <Copyright />
      </Stack>
    </Stack>
  </Box>
)
