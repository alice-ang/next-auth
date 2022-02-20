import React, { ReactNode } from "react"
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
  Select,
} from "@chakra-ui/react"
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi"
import Link from "next/link"
import { IconType } from "react-icons"
import { ReactText } from "react"
import { signIn, signOut, useSession } from "next-auth/react"
import { useTranslation } from "react-i18next"
import i18n from "../../i18n"
import { useRouter } from "next/router"

type LinkItemProps = {
  name: string
  icon?: IconType
  url: string
}

const Links: Array<LinkItemProps> = [
  { name: "Server", url: "server", icon: FiHome },
  { name: "Protected", url: "protected", icon: FiTrendingUp },
  { name: "API", url: "api-example", icon: FiCompass },
]

const DropDownLinks: Array<LinkItemProps> = [
  { name: "Profile", url: "profile" },
  { name: "Admin", url: "admin" },
]

export const Sidebar = ({ children }: { children: ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="fit-content" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>{children}</Box>
    </Box>
  )
}

type SidebarProps = BoxProps & {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const { locale } = useRouter()

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Link href={"/"}>
          <Text
            fontSize="2xl"
            fontFamily="monospace"
            fontWeight="bold"
            cursor="pointer"
          >
            Logo
          </Text>
        </Link>

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <VStack alignItems="start">
        <Box>
          {Links.map((link) => (
            <NavItem key={link.name} icon={link.icon} url={link.url}>
              {link.name}
            </NavItem>
          ))}
        </Box>
        <Box>
          <Flex align="center" p="4" mx="4" borderRadius="lg" role="group">
            <Select
              variant="filled"
              name="language"
              onChange={(e) => {
                i18n.changeLanguage(e.target.value)
              }}
            >
              <option value="en" selected={locale === "en"}>
                English
              </option>
              <option value="sv" selected={locale === "sv"}>
                Swedish
              </option>
            </Select>
          </Flex>
        </Box>
      </VStack>
    </Box>
  )
}

type NavItemProps = FlexProps & {
  icon?: IconType
  children: ReactText
  url: string
}
const NavItem = ({ icon, url, children, ...rest }: NavItemProps) => {
  return (
    <Link href={`/${url}`} passHref>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "brand.primary",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { data: session, status } = useSession()
  const { t } = useTranslation()

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        {session?.user && (
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
          />
        )}
        <Flex alignItems={"center"}>
          <Menu>
            <Box py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
              <HStack>
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
                      <a href={`/api/auth/signin`}>{t("sidebar.signIn")}</a>
                    </Button>
                  )}
                  {session?.user && (
                    <MenuButton>
                      <HStack>
                        {session.user.image && (
                          <Avatar size="sm" src={session.user.image} />
                        )}
                        <VStack
                          display={{ base: "none", md: "flex" }}
                          alignItems="flex-start"
                          spacing="1px"
                          ml="2"
                        >
                          <Text fontSize="sm">{session.user.name}</Text>
                          <Text fontSize="xs" color="gray.600">
                            Admin
                          </Text>
                        </VStack>
                        <Box display={{ base: "none", md: "flex" }}>
                          <FiChevronDown />
                        </Box>
                      </HStack>
                    </MenuButton>
                  )}
                </>
              </HStack>
            </Box>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              {DropDownLinks.map((link) => {
                return (
                  <Link href={`/${link.url}`} key={link.name} passHref>
                    <MenuItem>{link.name}</MenuItem>
                  </Link>
                )
              })}
              <MenuDivider />
              <a
                href={`/api/auth/signout`}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                <MenuItem>{t("sidebar.signOut")}</MenuItem>
              </a>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}
