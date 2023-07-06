import {schedule as schedulePluginValue} from 'sanity-plugin-podcast'

const schedule = {
  ...schedulePluginValue,
  fields: schedulePluginValue.fields.map((field) => {
    if (field.name === 'unpublish') {
      return {
        ...field,
        hidden: true,
      }
    }
    return field
  }),
}

export default schedule;