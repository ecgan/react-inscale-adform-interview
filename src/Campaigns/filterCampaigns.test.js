import moment from 'moment'

import dateFormat from '../_shared/dateFormat'
import filterCampaigns from './filterCampaigns'

test('empty campaigns should return empty', () => {
  const campaigns = []
  const filter = {}

  const result = filterCampaigns(campaigns, filter)

  expect(result).toStrictEqual([])
})

test('campaign startDate after endDate, should be filtered out', () => {
  const campaigns = [
    { id: 1, name: 'Valid', startDate: '1/1/2018', endDate: '12/31/2019', Budget: 88377 },
    { id: 2, name: 'Invalid', startDate: '1/1/2019', endDate: '1/1/1999', Budget: 88377 }
  ]
  const filter = {}

  const result = filterCampaigns(campaigns, filter)

  expect(result).toHaveLength(1)
  expect(result[0].name).toBe('Valid')
})

test('filter campaigns by name', () => {
  const campaigns = [
    { id: 1, name: 'Super Pizza', startDate: '1/1/2018', endDate: '12/31/2019', Budget: 88377 },
    { id: 2, name: 'Mac Cheese Tomato', startDate: '1/1/2018', endDate: '1/1/2019', Budget: 88377 },
    { id: 3, name: 'Fried Rice', startDate: '1/1/2018', endDate: '1/1/2019', Budget: 88377 }
  ]
  const filter = {
    name: 'cheese'
  }

  const result = filterCampaigns(campaigns, filter)

  expect(result).toHaveLength(1)
  expect(result[0].name).toBe('Mac Cheese Tomato')
})

test('filter campaigns by date', () => {
  const campaigns = [
    { id: 1, name: 'FILTERED: start date before range, end date after range', startDate: '1/1/2019', endDate: '12/31/2019', Budget: 88377 },
    { id: 2, name: 'OK: start date in range, end date after range', startDate: '1/1/2019', endDate: '11/15/2019', Budget: 88377 },
    { id: 3, name: 'OK: start date before range, end date in range', startDate: '11/16/2019', endDate: '12/31/2019', Budget: 88377 }
  ]
  const filter = {
    startDate: moment('11/01/2019', dateFormat),
    endDate: moment('11/30/2019', dateFormat)
  }

  const result = filterCampaigns(campaigns, filter)

  expect(result).toHaveLength(2)
  expect(result[0].id).toBe(2)
  expect(result[1].id).toBe(3)
})
