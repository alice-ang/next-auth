import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import { Box, Button, ListItem, UnorderedList, Image } from "@chakra-ui/react"
import { Dropdown } from "../Dropdown"

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export const Header = () => {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <Box as="header" display="flex" flexDirection="column">
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <Box as="nav">
        <UnorderedList
          display="flex"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          styleType="none"
          p="1em"
        >
          <ListItem>
            <Link href="/">
              <a>Home</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/server">
              <a>Server</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/protected">
              <a>Protected</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/api-example">
              <a>API</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/admin">
              <a>Admin</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/me">
              <a>Me</a>
            </Link>
          </ListItem>
          <ListItem>
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
              <>
                {/* {session.user.image && (
                  <Image
                    src={session.user.image}
                    alt="profilbild"
                    borderRadius="full"
                  />
                )} */}
                <Dropdown title={session.user.name ?? session.user.email}>
                  <a
                    href={`/api/auth/signout`}
                    onClick={(e) => {
                      e.preventDefault()
                      signOut()
                    }}
                  >
                    Sign out
                  </a>
                </Dropdown>
              </>
            )}
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  )
}
