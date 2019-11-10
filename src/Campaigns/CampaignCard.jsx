import React from 'react'
import PropTypes from 'prop-types'
import { Card, Descriptions, Statistic, Row, Col } from 'antd'

import CampaignActiveTag from './CampaignActiveTag'

const CampaignListItem = (props) => {
  const { campaign } = props

  return (
    <Card
      title={campaign.name}
      extra={
        <CampaignActiveTag campaign={campaign} />
      }
    >
      <Row
        type='flex'
        justify='space-between'
      >
        <Col span={10}>
          <Descriptions
            size='middle'
            layout='horizontal'
            column={1}
          >
            <Descriptions.Item label='Start'>{campaign.startDate}</Descriptions.Item>
            <Descriptions.Item label='End'>{campaign.endDate}</Descriptions.Item>
          </Descriptions>
        </Col>
        <Col span={10}>
          <Statistic
            title='Budget'
            value={campaign.Budget}
            suffix='USD'
          />
        </Col>
      </Row>
    </Card>
  )
}

CampaignListItem.propTypes = {
  campaign: PropTypes.object
}

export default CampaignListItem
