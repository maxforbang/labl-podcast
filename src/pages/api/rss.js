// import { getAllPodcasts } from 'sanity-plugin-podcast' // Import the function to fetch podcast data
import RSS from 'rss'
import { fetchPodcastInfo } from '@/utils/fetchPodcastInfo'
import { fetchEpisodes } from '@/utils/fetchEpisodes'

export default async (req, res) => {
  // const podcastInfo = await fetchPodcastInfo()
  // const episodes = await fetchEpisodes()

  // const {
  //   title = '', 
  //   // subtitle = '',
  //   // itunes = {},
  //   description = '',
  //   // coverArt = {}
  // } = podcastInfo

  // const feed = new RSS({
  //   title,
  //   description,
  //   feed_url: 'https://liveabeautifullifepodcast.com/rss.xml', // URL to your RSS feed
  //   site_url: 'https://liveabeautifullifepodcast.com', // URL to your website
  //   language: 'en',
  // })

  // // Add each podcast episode to the RSS feed
  // episodes.forEach((podcast) => {
  //   feed.item({
  //     title: podcast.title,
  //     description: podcast.summary,
  //     url: `https://liveabeautifullifepodcast.com/${podcast.slug.current}`, // URL to the podcast episode
  //     date: podcast.schedule?.publish, // Date of the podcast episode
  //   })
  // })

  // // Generate the XML for the RSS feed
  // const xml = feed.xml({ indent: true })

  // Pull directly from libsyn
  const response = await fetch('https://feeds.libsyn.com/480843/rss')
  const xmlContent = await response.text()


  res.setHeader('Content-Type', 'application/xml')
  res.send(xmlContent)
}
