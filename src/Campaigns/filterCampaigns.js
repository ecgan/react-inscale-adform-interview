import Moment from 'moment'
import { extendMoment } from 'moment-range'

import dateFormat from '../_shared/dateFormat'

const moment = extendMoment(Moment)

const filterCampaigns = (campaigns, filter) => {
  const filterStartDate = filter.startDate && filter.startDate.startOf('day')
  const filterEndDate = filter.endDate && filter.endDate.endOf('day')

  return campaigns.filter(c => {
    if (
      filter.name &&
      !c.name.toLowerCase().includes(filter.name.toLowerCase())
    ) {
      return false
    }

    const campStartDate = moment(c.startDate, dateFormat).startOf('day')
    const campEndDate = moment(c.endDate, dateFormat).endOf('day')

    if (campEndDate < campStartDate) {
      return false
    }

    if (filterStartDate && filterEndDate) {
      const range = moment.range(filterStartDate, filterEndDate)

      if (
        !range.contains(campStartDate) &&
        !range.contains(campEndDate)
      ) {
        return false
      }
    }

    return true
  })
}

export default filterCampaigns
