import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'antd'

import CampaignList from './CampaignList/CampaignList'
import FilterForm from './FilterForm/FilterForm'
import filterCampaigns from './filterCampaigns'

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
