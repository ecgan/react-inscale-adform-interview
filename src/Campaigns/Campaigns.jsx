import React, { useReducer, useCallback, useEffect } from 'react'

import CampaignFilter from './CampaignFilter'

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

const Campaigns = () => {
  const [campaigns, dispatch] = useReducer(reducer, initialState)

  const addCampaigns = useCallback((campaigns) => {
    dispatch({
      type: 'AddCampaigns',
      data: campaigns
    })
  }, [dispatch])

  useEffect(() => {
    window.AddCampaigns = addCampaigns

    return () => {
      window.AddCampaigns = undefined
    }
  }, [addCampaigns])

  return (
    <div>
      <h1>Campaigns</h1>
      <CampaignFilter
        campaigns={campaigns}
      />
    </div>
  )
}

export default Campaigns
