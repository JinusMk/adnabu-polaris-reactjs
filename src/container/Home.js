import React, { Component } from 'react'
import { Page, Layout, Card, Tabs, DisplayText } from '@shopify/polaris'
import { tabs } from '../constants'
import { ConnectAccount, DashboardTab } from '../components'
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
        this.setState({
            trackingFlag: true,
            modalOpen: true
        })
    }
    handleModalClick = () => {
        console.log('handkeModalClick')
        this.setState((prevState) => ({
            modalOpen: false
        }))
    }
    render(){
        const { activeTab, isConnected, trackingFlag, modalOpen } = this.state
        console.log('propsHome', this.state)
        return(
            <Page>
                <Tabs tabs={tabs} selected={activeTab} onSelect={this.handleTabChange}>
                    {
                        activeTab === 0 ? (trackingFlag && !modalOpen) ? <DashboardTab handleAccountChange={this.handleAccountChange} /> 
                        : <ConnectAccount 
                            handleAccountChange={this.handleAccountChange} 
                            trackingFlag={trackingFlag} 
                            isConnected={isConnected} 
                            handleConnect={this.handleConnect} 
                            handleTracking={this.handleTracking}
                            modalOpen={modalOpen}
                            handleModalClick={this.handleModalClick}
                            /> 
                            : null

                    }
                    {

                    }
                </Tabs>
            </Page>
        )
    }
}