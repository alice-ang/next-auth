import { Layout } from "../components/Layout"
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  IconButton,
  HStack,
  Divider,
} from "@chakra-ui/react"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { signIn, getProviders, getCsrfToken } from "next-auth/react"
import type { NextApiRequest } from "next"

type Provider = {
  id: string
  name: string
  type: string
  signinUrl: string
  callbackUrl: string
}

type LoginProps = {
  providers: {
    provider: Provider
  }
}

export default function LoginPage({ providers }: LoginProps) {
  return (
    <Layout>
      <Stack
        minH={"100vh"}
        direction={{ base: "column-reverse", md: "row" }}
        bgColor={"white"}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"} textAlign={"center"}>
              Sign in to your account
            </Heading>
            <HStack spacing={4} justifyContent={"center"}>
              {Object.values(providers).map((provider) => {
                return (
                  <IconButton
                    key={provider.name}
                    onClick={(e) => {
                      e.preventDefault()
                      signIn(provider.id, {
                        callbackUrl: `${window.location.origin}/`,
                      })
                    }}
                    colorScheme={
                      provider.name == "Facebook" ? "facebook" : undefined
                    }
                    variant={
                      provider.name == "Facebook" ? undefined : "outline"
                    }
                    aria-label={`login with ${provider.name}`}
                    icon={
                      provider.name == "Facebook" ? (
                        <FaFacebook />
                      ) : (
                        <FcGoogle />
                      )
                    }
                  />
                )
              })}
            </HStack>
            <Divider my={4} />
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              <Button
                bgColor={"brand.primary"}
                variant={"solid"}
                color={"white"}
                _hover={{
                  bg: "brand.primaryDark",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            }
          />
        </Flex>
      </Stack>
    </Layout>
  )
}

export async function getServerSideProps(req: NextApiRequest) {
  return {
    props: {
      providers: await getProviders(),
      csrfToken: await getCsrfToken(),
    },
  }
}
