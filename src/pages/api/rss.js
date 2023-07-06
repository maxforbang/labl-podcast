import { getAllPodcasts } from 'sanity-plugin-podcast' // Import the function to fetch podcast data
import RSS from 'rss'
import { client as sanityClient } from '../../../sanity/lib/client'
import { groq } from 'next-sanity'

export default async (req, res) => {
  const podcastInfoQuery = groq`
    *[_type == 'podcast'][0] {
      // fields
  }`

  //const episodesQuery = 

  const feed = new RSS({
    title: 'Your Podcast Title',
    description: 'Your Podcast Description',
    feed_url: 'https://example.com/rss.xml', // URL to your RSS feed
    site_url: 'https://example.com', // URL to your website
    language: 'en',
  })

  // Fetch podcast data from Sanity
  const podcasts = await getAllPodcasts() // Make sure to adjust the function to match the way you fetch data in your project

  // Add each podcast episode to the RSS feed
  podcasts.forEach((podcast) => {
    feed.item({
      title: podcast.title,
      description: podcast.description,
      url: `https://example.com/podcast/${podcast.slug}`, // URL to the podcast episode
      date: podcast.date, // Date of the podcast episode
    })
  })

  // Generate the XML for the RSS feed
  const xml = feed.xml({ indent: true })

  // Set the appropriate headers and send the XML response
  res.setHeader('Content-Type', 'application/xml')
  res.send(xml)
}
