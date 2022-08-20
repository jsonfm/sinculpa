import React from "react"
import { useSiteMetadata } from "@/hooks/use-site-metadata";


export const SEO = ({ title, description, pathname, children }: SEOProps) => {
  console.log("seo: ");
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata();
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:title" content={seo.title}/>
      <meta property="og:url" content="https://sinculpaloja.com/" />
      {children}
    </>
  )
}
