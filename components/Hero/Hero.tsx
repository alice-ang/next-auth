import { Flex, Container, Heading, Stack, Text, Button } from "@chakra-ui/react"
import { HouseReview } from "../Graphics"

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
          Finding your student housing{" "}
          <Text as={"span"} color={"brand.primary"}>
            made easy
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          New to the area? Perhaps new to the country? Don&#39;t stress! Keep up
          with reviews from current and old students to make it easier for you
          to find YOUR perfect housing.
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
          <Button
            rounded={"full"}
            px={6}
            variant={"outline"}
            colorScheme={"yellow"}
          >
            Learn more
          </Button>
        </Stack>
        <Flex w={"full"}>
          <HouseReview height={{ sm: "24rem", lg: "28rem" }} />
        </Flex>
      </Stack>
    </Container>
  )
}
