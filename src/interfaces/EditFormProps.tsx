import User from "./User"

export default interface ButtonProps {
  users: Array<User>, 
  isEditing: boolean, 
  onFormSubmit: (value: Object) => void
}