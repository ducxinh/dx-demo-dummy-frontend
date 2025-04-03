export type FormOption = {
  value: string | number
  label: string
}

export type IFormModal = {
  title: string
  isOpen: boolean
  onClose: () => void
}
