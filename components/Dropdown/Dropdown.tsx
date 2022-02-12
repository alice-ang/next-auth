import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { FC } from "react"

type Props = {
  title?: string | null
}

export const Dropdown: FC<Props> = ({ title, children }) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {title ?? "login"}
      </MenuButton>
      <MenuList>
        <MenuItem>{children}</MenuItem>
      </MenuList>
    </Menu>
  )
}
