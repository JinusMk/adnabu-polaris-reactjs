import React, { Component } from 'react'
import { Page, Layout, Card, Tabs, DisplayText } from '@shopify/polaris'
import { tabs } from '../constants'
import { ConnectAccount, DashboardTab, HelpTab, AppsByAdnabu } from '../components'
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab: 0,
            isConnected: false,
            trackingFlag: false,
            modalOpen: false
        }
    }
    handleTabChange = (activeTab) => {
        this.setState({
            activeTab
        })
    }
    handleConnect = () => {
        this.setState({
            isConnected: true
        })
    }
    handleAccountChange = () => {
        console.log('Account change clicked')
    }
    handleTracking = () => {
        console.log('Handle Tracking clicked')
        this.setState({
            trackingFlag: true,
        })
    }
   
    render(){
        const { activeTab, isConnected, trackingFlag } = this.state
        return(
            <Page>
                <Tabs tabs={tabs} selected={activeTab} onSelect={this.handleTabChange}>
                        {activeTab == 0 && trackingFlag && <DashboardTab handleAccountChange={this.handleAccountChange} /> }
                       { activeTab == 0 && !trackingFlag && <ConnectAccount 
                            handleAccountChange={this.handleAccountChange} 
                            trackingFlag={trackingFlag} 
                            isConnected={isConnected} 
                            handleConnect={this.handleConnect} 
                            handleTracking={this.handleTracking}/> }
                    {
                        activeTab==2 && <HelpTab/>

                    }
                    {
                        activeTab==3 && <AppsByAdnabu/>

                    }
                </Tabs>
            </Page>
        )
    }
}