import React from 'react'
import { Stack, Heading, Select } from '@shopify/polaris'
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
        </div>
    )
}