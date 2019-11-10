import React from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, Typography } from 'antd'

import CampaignActiveTag from './CampaignActiveTag'

const CampaignListItem = (props) => {
  const { campaign } = props

  return (
    <Card>
      <Row
        type='flex'
        justify='space-between'
        align='middle'
        style={{ marginBottom: '12px', height: '24px' }}
      >
        <Col>
          <Typography.Text>
            {campaign.startDate} - {campaign.endDate}
          </Typography.Text>
        </Col>
        <Col>
          <CampaignActiveTag campaign={campaign} />
        </Col>
      </Row>
      <h3>
        <Typography.Text
          ellipsis
        >
          {campaign.name}
        </Typography.Text>
      </h3>
      <Typography.Text
        type='secondary'
      >
        {campaign.Budget} USD
      </Typography.Text>
    </Card>
  )
}

CampaignListItem.propTypes = {
  campaign: PropTypes.object
}

export default CampaignListItem
