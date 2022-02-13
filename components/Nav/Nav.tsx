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
  Stack,
} from "@chakra-ui/react"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"

const Links = [
  { title: "Server", url: "server" },
  { title: "Protected", url: "protected" },
  { title: "API", url: "api-example" },
]

const DropDownLinks = [
  { title: "Profile", url: "profile" },
  { title: "Admin", url: "admin" },
]

export const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data: session, status } = useSession()

  return (
    <>
      <Box p={4}>
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
                    bg="brand.primary"
                    color="white"
                    _hover={{ bg: "brand.primaryDark" }}
                  >
                    <a href={`/api/auth/signin`}>Sign in</a>
                  </Button>
                )}
                {session?.user && (
                  <MenuButton>
                    {session.user.image && (
                      <Avatar size="sm" src={session.user.image} />
                    )}
                    <br />
                    <small>{session.user.name ?? session.user.email}</small>
                  </MenuButton>
                )}
              </>
              {session?.user && (
                <MenuList>
                  {DropDownLinks.map((link) => (
                    <MenuItem>
                      <Link href={`/${link.url}`}>{link.title}</Link>
                    </MenuItem>
                  ))}
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
                <Link href={`/${link.url}`}>{link.title}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  )
}
