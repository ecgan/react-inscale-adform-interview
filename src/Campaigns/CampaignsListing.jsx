import React from 'react'
import PropTypes from 'prop-types'
import { Empty, List } from 'antd'

import CampaignListItem from './CampaignListItem'

const grid = {
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 3,
  lg: 3,
  xl: 3,
  xxl: 4
}

const CampaignsListing = (props) => {
  const { campaigns = [] } = props

  if (campaigns.length === 0) {
    return (
      <Empty />
    )
  }

  return (
    <div>
      <List
        grid={grid}
        dataSource={campaigns}
        rowKey='id'
        renderItem={item => (
          <List.Item>
            <CampaignListItem
              campaign={item}
            />
          </List.Item>
        )}
      />,
    </div>
  )
}

CampaignsListing.propTypes = {
  campaigns: PropTypes.array
}

export default CampaignsListing
