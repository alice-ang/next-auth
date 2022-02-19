import { Select } from "@chakra-ui/react"
import * as React from "react"

type OptionItem = {
  value: string
  name: string
}

type SelectProps = {
  options: OptionItem[]
}

export const LanguageSelect: React.FC<SelectProps> = ({ options }) => {
  return (
    <Select placeholder="Select option">
      {options.map((option) => {
        return (
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        )
      })}
    </Select>
  )
}
