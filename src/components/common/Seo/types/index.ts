export type SEOProps = {
  title: string
  description?: string
  canonical?: string
  openGraph?: {
    title?: string
    description?: string
    url?: string
    type?: string
    image?: string
    siteName?: string
  }
  twitter?: {
    cardType?: 'summary' | 'summary_large_image' | 'app' | 'player'
    site?: string
    handle?: string
    title?: string
    description?: string
    image?: string
  }
  additionalMetaTags?: Array<{
    name?: string
    content?: string
    property?: string
  }>
  additionalLinkTags?: Array<{
    rel: string
    href: string
    sizes?: string
    type?: string
  }>
}
