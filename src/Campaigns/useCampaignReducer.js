import { useReducer } from 'react'

const initialState = []

const reducer = (state, action) => {
  return [
    ...state,
    ...action.data
  ]
}

const useCampaignReducer = () => {
  return useReducer(reducer, initialState)
}

export default useCampaignReducer
