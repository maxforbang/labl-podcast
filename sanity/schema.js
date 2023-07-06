import {
  categories,
  itunes,
  itunesEpisodeSettings,
  linkListItem,
  owner,
  sponsor,
  sponsorRead,
} from 'sanity-plugin-podcast'

import episode from './schemas/episode'
import podcast from './schemas/podcast'
import schedule from './schemas/schedule'

const sponsorInfo = {...sponsor, hidden: true}

export const schema = {
  types: [
    podcast,
    episode,
    schedule,
    linkListItem,
    itunesEpisodeSettings,
    itunes,
    owner,
    categories,
    // sponsorRead,
    // sponsor, // episode.js comments
  ],
}
