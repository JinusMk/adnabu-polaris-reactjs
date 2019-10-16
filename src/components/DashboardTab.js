import React from 'react'
import { Stack, Heading, Select, Banner, } from '@shopify/polaris'
import PixelDataTable from './PixelDataTable.js'
import ActionItem from './ActionItem'
import CollapsibleComponent from './Collapsible'
  const rows = [
        ['Latest sale received on (any surce)', 'No data yet'],
        ['Latest sale received at Google Ads', '--'],
        ['Total save values (google ads) recorded in last 30 days', '--'],
        ['Passing sharges along with sale', 'No'],
      ];
export default function DashboardTab(props){
    return(
        <div className="dashboard-tab">
            <Stack distribution="fill">
                <Heading>Current client account</Heading>
                <Select
                    options={['Test Account']}
                    // value={}
                    onChange={props.handleAccountChange}
                />
            </Stack>
            <Banner
                title="Your Conversion Pixel is live!"
                status="success"
                onDismiss={() => {}}
                >
                <p>Tracker (Adnabutest) has beenset up or your Google Ads account 0345645334</p>
            </Banner>
            <PixelDataTable rows={rows}/>
            <div style={{margin: '22px 0px'}}>
                <Heading>Actions</Heading>
                <ActionItem />
            </div>
            <CollapsibleComponent/>
        </div>
    )
}