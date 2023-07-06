import { groq } from "next-sanity"
import { client as sanityClient } from '../../sanity/lib/client'

export async function fetchPodcastInfo() {
  const podcastInfoQuery = groq`
  *[_type == 'podcast'][0] {
    title, 
    subtitle,
    itunes,
    description,
    "coverArt": coverArt.asset->{url, mimeType}
  }
  `
  return await sanityClient.fetch(podcastInfoQuery)
}
