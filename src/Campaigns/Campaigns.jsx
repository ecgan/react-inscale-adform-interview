import React from 'react'
import { Layout } from 'antd'

import useCampaignReducer from './useCampaignReducer'
import useDispatchGlobalEffect from './useDispatchGlobalEffect'
import CampaignFilter from './CampaignFilter/CampaignFilter'
import styles from './Campaigns.module.css'

const { Header, Content } = Layout

const Campaigns = () => {
  const [campaigns, dispatch] = useCampaignReducer()
  useDispatchGlobalEffect(dispatch)

  return (
    <div className={styles.layout}>
      <Layout>
        <Header>
          <h1>
            Campaigns
          </h1>
        </Header>
        <Content>
          <CampaignFilter
            campaigns={campaigns}
          />
        </Content>
      </Layout>
    </div>
  )
}

export default Campaigns
