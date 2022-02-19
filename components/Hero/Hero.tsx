import { Flex, Container, Heading, Stack, Text, Button } from "@chakra-ui/react"
import { Illustration } from "../Illustration"

export const Hero = () => {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 14 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Meeting scheduling{" "}
          <Text as={"span"} color={"brand.primary"}>
            made easy
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Never miss a meeting. Never be late for one too. Keep track of your
          meetings and receive smart reminders in appropriate times. Read your
          smart “Daily Agenda” every morning.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            colorScheme={"brand.primary"}
            bg={"brand.primary"}
            _hover={{ bg: "brand.primaryDark" }}
          >
            Get started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={"full"}>
          <Illustration height={{ sm: "24rem", lg: "28rem" }} />
        </Flex>
      </Stack>
    </Container>
  )
}
