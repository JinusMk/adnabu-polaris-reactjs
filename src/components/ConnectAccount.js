import React from "react";
import { Heading, Banner, Select, EmptyState} from "@shopify/polaris";
import ModalComponent from "./Modal";
import CommonQueries from "./CommonQueries";

export default function ConnectAccount(props) {
  return (
    <div style={{ padding: "20px", borderBottom: "1px solid #DFE3E8" }}>
      {props.modalOpen ? (
        <ModalComponent
          modalOpen={props.modalOpen}
          handleModalClick={props.handleModalClick}
        />
      ) : null}
      {!props.modalOpen && props.isConnected ? (
        <div style={{ marginTop: 39, marginBottom: 32 }}>
          <Banner
            title="You have successfully logged into test@gmail.com"
            status="success"
            onDismiss={() => {}}
          />
        </div>
      ) : null}
      <EmptyState
        heading={props.isConnected ? "Let's get started" : "Welcome,"}
        action={
          props.isConnected
            ? {
                content: "Start Tracking",
                onAction: () => props.handleTracking()
              }
            : { content: "Connect", onAction: () => props.handleConnect() }
        }
        image={require("../assets/bg.svg")}
      >
        <Heading>
          {props.isConnected
            ? "To create a tracker, select your account and click start . "
            : "Connect your google Ads account to get started "}
        </Heading>
        {props.isConnected ? (
          <Select
            label="Select your account"
            options={["Test Account 1"]}
            onChange={props.handleAccountChange}
            // value={selected}
          />
        ) : null}
      </EmptyState>
      <CommonQueries/>
    </div>
  );
}
