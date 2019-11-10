import { useCallback, useEffect } from 'react'

const useDispatchGlobalEffect = (dispatch) => {
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
}

export default useDispatchGlobalEffect
