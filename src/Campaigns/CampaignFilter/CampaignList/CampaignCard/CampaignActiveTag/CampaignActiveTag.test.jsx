import React from 'react'
import { render } from '@testing-library/react'

import CampaignActiveTag from './CampaignActiveTag'

test('inactive campaign should render null', async () => {
  const campaign = {
    id: 1,
    name: 'Old Campaign',
    startDate: '1/1/1970',
    endDate: '1/1/1971',
    Budget: 88377
  }
  const { queryByText } = render(
    <CampaignActiveTag
      campaign={campaign}
    />
  )

  const node = queryByText('Active')

  expect(node).toBeNull()
})

test('active campaign should render Active tag', async () => {
  const campaign = {
    id: 1,
    name: 'Forever Campaign',
    startDate: '1/1/1970',
    endDate: '1/1/2999',
    Budget: 88377
  }
  const { queryByText } = render(
    <CampaignActiveTag
      campaign={campaign}
    />
  )

  const node = queryByText('Active')

  expect(node).not.toBeNull()
})
