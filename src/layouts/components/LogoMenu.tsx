import { Image } from '@/components/common/Image'
import { InternalLink as Link } from '@/components/common/InternalLink'
import { siteMetadata } from '@/data/siteMetadata'

export function LogoMenu() {
  return (
    <Link href="/" className="flex gap-1 items-center">
      <span className="sr-only">Logo</span>
      <Image
        alt="Nix"
        className="rounded h-8 sm:h-10 w-auto"
        src="/assets/images/logo.png"
        height={42}
        width={42}
      />
      <span className="">{siteMetadata.title}</span>
    </Link>
  )
}
