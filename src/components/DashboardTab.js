import React from 'react'
import { Stack, Heading, Select, Banner, } from '@shopify/polaris'
import PixelDataTable from './PixelDataTable.js'
import ActionItem from './ActionItem'
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
            <PixelDataTable/>
            <div style={{margin: '22px 0px', borderBottom: '1px solid #DFE3E8'}}>
                <Heading>Actions</Heading>
                <ActionItem />
            </div>
        </div>
    )
}