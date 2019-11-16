import React from 'react'
import { render, fireEvent, waitForElementToBeRemoved } from '@testing-library/react'
import { Form } from 'antd'

import FilterForm from './FilterForm'

test('FilterForm should contain name, start date and end date filters', () => {
  const WrappedFilterForm = Form.create()(FilterForm)
  const { queryByLabelText } = render(
    <WrappedFilterForm />
  )

  const labelName = queryByLabelText('Name')
  const labelStartDate = queryByLabelText('Start Date')
  const labelEndDate = queryByLabelText('End Date')

  expect(labelName).not.toBeNull()
  expect(labelStartDate).not.toBeNull()
  expect(labelEndDate).not.toBeNull()
})

test('end date should not be earlier than start date', async () => {
  Date.now = jest.fn(() => new Date(Date.UTC(2019, 0, 1)).valueOf())

  const WrappedFilterForm = Form.create()(FilterForm)
  const { getByLabelText, getByText } = render(
    <WrappedFilterForm />
  )

  const startDateInput = getByLabelText('Start Date').querySelector('input')
  fireEvent.click(startDateInput)

  const startDate15node = getByText('15')
  fireEvent.click(startDate15node)

  await waitForElementToBeRemoved(() => getByText('15'))

  expect(startDateInput).toHaveValue('01/15/2019')

  const endDateInput = getByLabelText('End Date').querySelector('input')
  fireEvent.click(endDateInput)

  const endDate14node = getByText('14')
  expect(endDate14node).toHaveAttribute('aria-disabled', 'true')
})

test('start date should not be later than end date', async () => {
  Date.now = jest.fn(() => new Date(Date.UTC(2019, 0, 1)).valueOf())

  const WrappedFilterForm = Form.create()(FilterForm)
  const { getByLabelText, getByText } = render(
    <WrappedFilterForm />
  )

  const endDateInput = getByLabelText('End Date').querySelector('input')
  fireEvent.click(endDateInput)

  const endDate15node = getByText('15')
  fireEvent.click(endDate15node)

  await waitForElementToBeRemoved(() => getByText('15'))

  expect(endDateInput).toHaveValue('01/15/2019')

  const startDateInput = getByLabelText('Start Date').querySelector('input')
  fireEvent.click(startDateInput)

  const startDate16node = getByText('16')
  expect(startDate16node).toHaveAttribute('aria-disabled', 'true')
})
