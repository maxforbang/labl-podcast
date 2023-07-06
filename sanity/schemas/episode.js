import { episode as episodePluginValue } from 'sanity-plugin-podcast'

const episode = {
  ...episodePluginValue,
  title: 'Episodes',
  fields: episodePluginValue.fields.map((field) => {
    if (field.name === 'podcast') {
      return {
        ...field,
        hidden: true,
        of: [
          {
            type: 'reference',
            weak: false,
            to: [{ type: 'podcast' }],
          },
        ],
        initialValue: [
          { _type: 'reference', _ref: 'e23efe97-08f6-468c-9a4d-286903d7f560' },
        ], // Set your desired initial value here
      }
    } else if (
      ['fileUrl', 'content', 'description', 'duration'].includes(
        field.name
      )
    ) {
      return {
        ...field,
        hidden: true,
      }
    } else if (field.name === 'title') {
      return {
        ...field,
        description: 'Brief title. Long titles may be cut off in many podcast apps',
      }
    } else if (field.name === 'linkList') {
      return {
        ...field,
        description:
          'Optional - Plug any socials or any links to resources you mention during the episode',
      }
    } else if (field.name === 'tags') {
      return {
        ...field,
        description:
          'Optional - For grouping episodes together on the website later',
      }
    } else if (field.name === 'coverArt') {
      return {
        ...field,
        description: 'Optional',
      }
    } else if (field.name === 'slug') {
      return {
        ...field,
        description:
          'How the episode appears in the url e.g. liveabeautifullifepodcast.com/who-is-adam-williams',
      }
    } else if (field.name === 'sponsors') {
      return {
        name: 'sponsors',
        type: 'array',
        title: 'Sponsors',
        of: [{
          type: 'string' // sponsorRead
        }],
        hidden: true // false
      }
    }
    return field
  }),
}

const episodeFieldsOrder = [
  'title',
  'subtitle',
  'file',
  'slug',
  'summary',
  'description',
  'podcast',
  'schedule',
  'fileUrl',
  'duration',
  'explicit',
  'content',
  'linkList',
  'itunes',
  'coverArt',
  'sponsors',
  'tags',
]

episode.fields = sortFieldsByArrayOrder(episode.fields, episodeFieldsOrder)

export default episode

function sortFieldsByArrayOrder(fields, sortOrder) {
  return fields.sort((a, b) => {
    const indexA = sortOrder.indexOf(a.name)
    const indexB = sortOrder.indexOf(b.name)

    if (indexA < indexB) {
      return -1
    } else if (indexA > indexB) {
      return 1
    }

    return 0
  })
}
