import { FC } from "react"
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"

const Links = [
  { title: "Server", url: "server" },
  { title: "Protected", url: "protected" },
  { title: "API", url: "api-example" },
  { title: "Admin", url: "admin" },
  { title: "Me", url: "me" },
]

export const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data: session, status } = useSession()

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <Link href={`/${link.url}`}>{link.title}</Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <>
                {!session && (
                  <Button
                    onClick={(e) => {
                      e.preventDefault()
                      signIn()
                    }}
                  >
                    <a href={`/api/auth/signin`}>Sign in</a>
                  </Button>
                )}
                {session?.user && (
                  <MenuButton>
                    {session.user.image && <Avatar src={session.user.image} />}
                    <br />
                    <small>{session.user.name ?? session.user.email}</small>
                  </MenuButton>
                )}
              </>
              {session?.user && (
                <MenuList>
                  <MenuItem>Link 1</MenuItem>
                  <MenuItem>Link 2</MenuItem>
                  <MenuDivider />
                  <MenuItem>
                    <a
                      href={`/api/auth/signout`}
                      onClick={(e) => {
                        e.preventDefault()
                        signOut()
                      }}
                    >
                      Sign out
                    </a>
                  </MenuItem>
                </MenuList>
              )}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  href={`/${link.url}`}
                >
                  {link.title}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  )
}
