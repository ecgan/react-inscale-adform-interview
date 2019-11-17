import React from 'react'
import { render, waitForElementToBeRemoved } from '@testing-library/react'

import Campaigns from './Campaigns'

test('should render empty campaigns list with title Campaigns', () => {
  const { queryByText } = render(
    <Campaigns />
  )

  const node = queryByText('Campaigns')

  expect(node).toBeInTheDocument()
})

test('should render empty campaigns list with "No Data"', () => {
  const { queryByText } = render(
    <Campaigns />
  )

  const node = queryByText('No Data')

  expect(node).toBeInTheDocument()
})

test('render empty campaigns, call global AddCampaigns, should render the campaign list', () => {
  const { getByText, queryByText } = render(
    <Campaigns />
  )
  const campaigns = [
    { id: 1, name: 'Campaign 1', startDate: '9/19/2017', endDate: '3/9/2020', Budget: 88377 },
    { id: 2, name: 'Campaign 2', startDate: '11/21/2017', endDate: '2/21/2018', Budget: 608715 },
    { id: 3, name: 'Campaign 3', startDate: '11/1/2017', endDate: '6/20/2020', Budget: 239507 }
  ]

  waitForElementToBeRemoved(() => {
    return getByText('No Data')
  })
  global.AddCampaigns(campaigns)

  const node = queryByText('Campaign 1')
  expect(node).toBeInTheDocument()
})
