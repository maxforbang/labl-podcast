import {
  categories,
  itunes,
  itunesEpisodeSettings,
  linkListItem,
  owner,
  podcast as podcastPluginValue,
  schedule,
  sponsor,
  sponsorRead,
} from 'sanity-plugin-podcast'

const podcast = { ...podcastPluginValue, title: 'Podcast Info' }

export default podcast