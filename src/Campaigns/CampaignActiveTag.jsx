import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'antd'
import Moment from 'moment'
import { extendMoment } from 'moment-range'

const moment = extendMoment(Moment)

const CampaignActiveTag = (props) => {
  const { campaign } = props

  const start = moment(campaign.startDate)
  const end = moment(campaign.endDate).endOf('day')
  const range = moment.range(start, end)
  const current = moment()

  if (!range.contains(current)) {
    return null
  }

  return (
    <Tag color='#87d068'>Active</Tag>
  )
}

CampaignActiveTag.propTypes = {
  campaign: PropTypes.object
}

export default CampaignActiveTag
