import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'antd'
import Moment from 'moment'
import { extendMoment } from 'moment-range'

import CampaignList from './CampaignList'
import FilterForm from './FilterForm'

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

const CampaignFilter = (props) => {
  const { form, campaigns } = props
  const values = form.getFieldsValue(['name', 'startDate', 'endDate'])
  const filteredCampaign = filterCampaigns(campaigns, values)

  return (
    <div>
      <FilterForm
        form={form}
      />
      <CampaignList
        campaigns={filteredCampaign}
      />
    </div>
  )
}

CampaignFilter.propTypes = {
  form: PropTypes.object,
  campaigns: PropTypes.array
}

export default Form.create()(CampaignFilter)
