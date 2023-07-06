import { podcast as podcastPluginValue } from 'sanity-plugin-podcast'

const podcast = {
  ...podcastPluginValue,
  title: 'Podcast Info',
  fields: podcastPluginValue.fields.map((field) => {
    if (['slug', 'copyright', 'language'].includes(field.name)) {
      return {
        ...field,
        hidden: true,
      }
    }
    return field
  }),
}

export default podcast
