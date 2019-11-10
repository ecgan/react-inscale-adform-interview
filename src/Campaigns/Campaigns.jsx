import React from 'react'

import useCampaignReducer from './useCampaignReducer'
import useDispatchGlobalEffect from './useDispatchGlobalEffect'
import CampaignFilter from './CampaignFilter'

const Campaigns = () => {
  const [campaigns, dispatch] = useCampaignReducer()
  useDispatchGlobalEffect(dispatch)

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
