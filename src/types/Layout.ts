export interface IBaseMenuItem {
  label: string
  to: string
  menuIcon?: React.ReactNode
}

export interface IMenuItem extends IBaseMenuItem {
  items?: IBaseMenuItem[]
}
