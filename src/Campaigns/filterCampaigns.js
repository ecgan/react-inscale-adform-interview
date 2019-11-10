import Moment from 'moment'
import { extendMoment } from 'moment-range'

const moment = extendMoment(Moment)

const filterCampaigns = (campaigns, filter) => {
  const filterStartDate = filter.startDate && filter.startDate
  const filterEndDate = filter.endDate && filter.endDate.endOf('day')

  return campaigns.filter(c => {
    if (
      filter.name &&
        !c.name.includes(filter.name)
    ) {
      return false
    }

    const campStartDate = moment(c.startDate)
    const campEndDate = moment(c.endDate).endOf('day')

    if (filterStartDate) {
      if (campEndDate < filterStartDate) {
        return false
      }
    }

    if (filterEndDate) {
      if (campStartDate > filterEndDate) {
        return false
      }
    }

    if (campEndDate < campStartDate) {
      return false
    }

    return true
  })
}

export default filterCampaigns
