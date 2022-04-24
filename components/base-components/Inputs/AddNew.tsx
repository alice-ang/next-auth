import { forwardRef } from "react"

type Props = {
  label?: string
  placeholder: string
}

const AddNew = forwardRef<HTMLInputElement, Props>(
  ({ label, placeholder }, ref) => {
    return (
      <div>
        <label className="block">{label}</label>
        <input
          ref={ref}
          type="text"
          className="w-full border-gray-300 border-b-2 focus:to-indigo-500 pt-2"
          placeholder={placeholder}
        />
      </div>
    )
  }
)
AddNew.displayName = "AddNew"

export default AddNew
