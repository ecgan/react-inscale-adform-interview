import { useReducer } from 'react'

const initialState = []

const reducer = (state, action) => {
  switch (action.type) {
    case 'AddCampaigns':
      return [
        ...state,
        ...action.data
      ]
    default:
      throw new Error()
  }
}

const useCampaignReducer = () => {
  return useReducer(reducer, initialState)
}

export default useCampaignReducer
