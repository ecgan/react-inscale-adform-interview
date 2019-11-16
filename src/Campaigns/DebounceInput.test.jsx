import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import DebounceInput from './DebounceInput'

test('DebounceInput should call onChange with value after 300ms', async () => {
  let value = null
  const { container } = render(
    <DebounceInput
      onChange={(v) => {
        value = v
      }}
    />
  )
  const input = container.querySelector('input')

  fireEvent.change(input, { target: { value: 'abc' } })

  expect(value).toBeNull()

  await new Promise((resolve) => setTimeout(resolve, 301))

  expect(value).toBe('abc')
})
