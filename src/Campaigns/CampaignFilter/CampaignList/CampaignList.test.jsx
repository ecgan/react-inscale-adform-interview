import React from 'react'
import { render } from '@testing-library/react'

import CampaignList from './CampaignList'

test('CampaignList with empty campaigns should render text "No Data"', () => {
  const campaigns = []
  const { queryByText } = render(
    <CampaignList
      campaigns={campaigns}
    />
  )

  const node = queryByText('No Data')

  expect(node).not.toBeNull()
})

test('CampaignList should render the campaigns', () => {
  const campaigns = [
    {
      id: 1,
      name: 'Campaign 1',
      startDate: '1/1/1970',
      endDate: '1/1/2999',
      Budget: 88377
    },
    {
      id: 2,
      name: 'Campaign 2',
      startDate: '1/1/1970',
      endDate: '1/1/2999',
      Budget: 88377
    }
  ]
  const { queryAllByText } = render(
    <CampaignList
      campaigns={campaigns}
    />
  )

  const nodesCampaign1 = queryAllByText('Campaign 1')
  const nodesCampaign2 = queryAllByText('Campaign 2')

  expect(nodesCampaign1).toHaveLength(1)
  expect(nodesCampaign2).toHaveLength(1)
})
