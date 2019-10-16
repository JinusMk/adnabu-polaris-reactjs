import React, { Component } from "react";
import { Page, Tabs } from "@shopify/polaris";
import { tabs } from "../constants";
import {
  ConnectAccount,
  DashboardTab,
  HelpTab,
  MyPixelTab,
  AppsByAdnabu,
  Header
} from "../components";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      isConnected: false,
      trackingFlag: false,
      modalOpen: false
    };
  }
  //HandleTab Change
  handleTabChange = activeTab => {
    this.setState({
      activeTab
    });
  };
  //Handle Connect Button Action
  handleConnect = () => {
    this.setState({
      isConnected: true
    });
  };
  //Handle Account Change Action
  handleAccountChange = () => {
    console.log("Account change clicked");
  };
  //Handle Tracking Button Action
  handleTracking = () => {
    this.setState({
      trackingFlag: true,
      modalOpen: true
    });
  };
  //Handle Prop to Show/Hide Modal
  handleModalClick = () => {
    this.setState(() => ({
      modalOpen: false
    }));
  };
  render() {
    const { activeTab, isConnected, trackingFlag, modalOpen } = this.state;
    console.log("propsHome", this.state);
    return (
      <Page>
        <Header />
        <div style={{ marginLeft: 32, marginRight: 32 }}>
          <Tabs
            tabs={tabs}
            selected={activeTab}
            onSelect={this.handleTabChange}
          >
            {activeTab === 0 ? (
              trackingFlag && !modalOpen ? (
                <DashboardTab handleAccountChange={this.handleAccountChange} />
              ) : (
                <ConnectAccount
                  handleAccountChange={this.handleAccountChange}
                  trackingFlag={trackingFlag}
                  isConnected={isConnected}
                  handleConnect={this.handleConnect}
                  handleTracking={this.handleTracking}
                  modalOpen={modalOpen}
                  handleModalClick={this.handleModalClick}
                />
              )
            ) : null}
            {activeTab == 3 && <AppsByAdnabu />}
            {activeTab == 1 && <MyPixelTab />}
            {activeTab == 2 && <HelpTab />}
          </Tabs>
        </div>
      </Page>
    );
  }
}
