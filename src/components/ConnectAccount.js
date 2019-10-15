import React from 'react'
import { Page, Card, DisplayText, Layout, TextContainer, Heading, Button, Banner, Select, Stack, EmptyState } from '@shopify/polaris'
import CollapsibleComponent from '../components/Collapsible'
export default function ConnectAccount (props){
    return(
        <div className="connect-account">
            {
                props.isConnected ?  <Banner
                title="You have successfully logged into test@gmail.com"
                status="success"
                onDismiss={() => {}} 
                />: null
            }
            <EmptyState
                    heading={props.isConnected ? "Let's get started" : "Welcome,"}
                    action={props.isConnected ? {content: 'Start Tracking', onAction: () => props.handleTracking()}:{content: 'Connect', onAction: () => props.handleConnect()}}
                    image={require('../assets/bg.svg')}
                    >
                <Heading>{props.isConnected ? "To create a tracker, select your account and click start . ": "Connect your google Ads account to get started "}</Heading>
                {props.isConnected ? <Select
                    label="Select your account"
                    options={["Test Account 1"]}
                    onChange={props.handleAccountChange}
                    // value={selected}
                /> : null}
            </EmptyState>
            <CollapsibleComponent/>
        </div>
    )
}