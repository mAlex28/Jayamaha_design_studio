import { SuperSEO } from "react-super-seo"

import React from "react"

const SEO = () => {
  return (
    <SuperSEO
      title="Interior Design Firm in Sri Lanka | Jayamaha Design Studio"
      description="Jayamaha Design Studio is and architectural and design
                      firm in Sri Lanka, made up of highly creative and talented
                      designers. We specialize in architectural,interior and
                      furniture design. We have acquired extensive professional
                      expertise designing simple, advanced, complex and iconic
                      buildings regardless of its, context or scope. Our project
                      provides a new beginning and is the result of an in-depth
                      and meticulouse design process."
      lang="en"
      charset="UTF-8"
      viewport="width=device-width, initial-scale=1"
      robots="index,follow"
      openGraph={{
        ogTitle: "Jayamaha Design Studio",
        ogImage: {
          ogImage:
            "https://images.pickapic.live/get/458de256-e8d0-c96b-7b89-5bc093558043-1657815601.png",
          ogImageAlt: "Jayamaha Design Studio",
          ogImageWidth: 1200,
          ogImageHeight: 630,
          ogImageType: "image/jpeg",
        },
      }}
      twitter={{
        twitterSummaryCard: {
          summaryCardTitle: "Jayamaha Design Studio",
          summaryCardDescription:
            "Jayamaha Design Studio is and architectural and design firm in Sri Lanka, made up of highly creative and talented designers. We specialize in architectural,interior and furniture design.",
          summaryCardImage:
            "https://images.pickapic.live/get/458de256-e8d0-c96b-7b89-5bc093558043-1657815601.png",
          summaryCardImageAlt: "Jayamaha Design Studio",
        },
      }}
    />
  )
}

export default SEO
