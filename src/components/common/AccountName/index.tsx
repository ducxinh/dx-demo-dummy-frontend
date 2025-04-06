export function AccountName({ user }: { user: { username: string } }) {
  const getAccountName = () => {
    if (!user.username) return ''
    return user.username.charAt(0)
  }
  return <span className="truncate font-medium uppercase">{getAccountName()}</span>
}
