import { groq } from 'next-sanity'
import { client as sanityClient } from '../../sanity/lib/client'

export async function fetchEpisodes() {
  const episodesQuery = groq`
    *[_type == 'episode'] {
      slug,
      title,
      subtitle,
      'audio': file.asset->{url, mimeType},
      'published': schedule.publish
    }`
    
  return await sanityClient.fetch(episodesQuery)
}
