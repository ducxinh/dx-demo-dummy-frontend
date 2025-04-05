
export function PageWrapper({ className, children }: React.HTMLAttributes<HTMLElement>) {
  const resolveClass = () => {
    const classList = [
      'rounded-sm border border-stroke bg-box shadow-default',
      'dark:border-strokedark dark:bg-boxdark',
      'px-4 py-4',
    ]
    if (className) classList.push(className)

    return classList.join(' ')
  }
  return <div className={resolveClass()}>{children}</div>
}
