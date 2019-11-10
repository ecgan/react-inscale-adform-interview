import React from 'react'
import PropTypes from 'prop-types'
import { Empty, List } from 'antd'

import CampaignCard from './CampaignCard'

const grid = {
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 3,
  lg: 3,
  xl: 3,
  xxl: 4
}

const CampaignList = (props) => {
  const { campaigns = [] } = props

  if (campaigns.length === 0) {
    return (
      <Empty />
    )
  }

  return (
    <List
      grid={grid}
      dataSource={campaigns}
      rowKey='id'
      renderItem={item => (
        <List.Item>
          <CampaignCard
            campaign={item}
          />
        </List.Item>
      )}
    />
  )
}

CampaignList.propTypes = {
  campaigns: PropTypes.array
}

export default CampaignList
