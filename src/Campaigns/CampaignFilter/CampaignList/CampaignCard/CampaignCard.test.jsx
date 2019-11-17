import React from 'react'
import { render } from '@testing-library/react'

import CampaignCard from './CampaignCard'

test('Campaign card should render campaign name', () => {
  const campaignName = 'Forever Campaign'
  const campaign = {
    id: 1,
    name: campaignName,
    startDate: '1/1/1970',
    endDate: '1/1/2999',
    Budget: 88377
  }
  const { queryByText } = render(
    <CampaignCard
      campaign={campaign}
    />
  )

  const node = queryByText(campaignName)

  expect(node).not.toBeNull()
})

test('Campaign card should render dates in "startdate - enddate" format', () => {
  const startDate = '1/1/1970'
  const endDate = '1/1/2999'
  const campaign = {
    id: 1,
    name: 'Forever Campaign',
    startDate: startDate,
    endDate: endDate,
    Budget: 88377
  }
  const { queryByText } = render(
    <CampaignCard
      campaign={campaign}
    />
  )

  const node = queryByText(`${startDate} - ${endDate}`)

  expect(node).not.toBeNull()
})

test('Active campaign card should render Active tag', () => {
  const campaign = {
    id: 1,
    name: 'Forever Campaign',
    startDate: '1/1/1970',
    endDate: '1/1/2999',
    Budget: 88377
  }
  const { queryByText } = render(
    <CampaignCard
      campaign={campaign}
    />
  )

  const node = queryByText('Active')

  expect(node).toBeInTheDocument()
})

test('Inactive campaign card should not render Active tag', () => {
  const campaign = {
    id: 1,
    name: 'Old Campaign',
    startDate: '1/1/1970',
    endDate: '1/1/1979',
    Budget: 88377
  }
  const { queryByText } = render(
    <CampaignCard
      campaign={campaign}
    />
  )

  const node = queryByText('Active')

  expect(node).not.toBeInTheDocument()
})

test('Campaign card should render abbreviated budget with USD suffix', () => {
  const campaign = {
    id: 1,
    name: 'Forever Campaign',
    startDate: '1/1/1970',
    endDate: '1/1/2999',
    Budget: 88377
  }
  const { queryByText } = render(
    <CampaignCard
      campaign={campaign}
    />
  )

  const node = queryByText('88k USD')

  expect(node).not.toBeNull()
})
