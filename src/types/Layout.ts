export interface IBaseMenuItem {
  label: string
  to: string
  menuIcon?: any
}

export interface IMenuItem extends IBaseMenuItem {
  items?: IBaseMenuItem[]
}
