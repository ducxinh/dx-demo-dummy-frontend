// import { Helmet } from "react-helmet-async";
import { siteMetadata } from '@/data/siteMetadata'

interface SeoProps {
  title: string
  description?: string
  keywords?: string
  image?: string
  url?: string
}

export const Seo = ({
  title,
  description = 'Default description',
  keywords = 'default, keywords',
  image = '/default-og-image.jpg',
  url = 'https://yourdomain.com',
}: SeoProps) => {
  const getTitle = () => {
    return `${title} | ${siteMetadata.title}`
  }
  return (
    // <Helmet>
    <>
      <title>{getTitle()}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
    // </Helmet>
  )
}
