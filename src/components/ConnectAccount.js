import React from 'react'
import { Page, Card, DisplayText, Layout, TextContainer, Heading, Button, Banner, Select, Stack, EmptyState } from '@shopify/polaris'
import CollapsibleComponent from '../components/Collapsible'
export default function ConnectAccount (props){
    return(
        <div className="connect-account">
            {
                props.isConnected ?<div className="start-tracking-wrapper">
                        <Banner
                                title="You have successfully logged into test@gmail.com"
                                status="success"
                                onDismiss={() => {}}
                        />
                        <DisplayText size="medium">Let's get started, </DisplayText>
                        <DisplayText size="small">To create a tracker, select your account and click start .</DisplayText>
                        {/* <Layout > */}
                        <Stack>
                            <Select
                                label="Select your account"
                                options={["Test Account 1"]}
                                onChange={props.handleAccountChange}
                                // value={selected}
                            />
                        </Stack>
                         {/* </Layout> */}
                         <Button primary onClick={props.handleTracking}>Start Tracking</Button>
                </div> : 
                <div>
                <EmptyState
                    heading="Welcome,"
                    action={{content: 'Connect', onAction: () => props.handleConnect()}}
                    image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
                    >
                    <p>Connect your google Ads account to get started </p>
                </EmptyState>
                <CollapsibleComponent/>
                </div>
            }
            
        </div>
    )
}