import React from "react";
import { Stack, Heading, Select, Banner } from "@shopify/polaris";
import PixelDataTable from "./PixelDataTable.js";
import ActionItem from "./ActionItem";
import CollapsibleComponent from "./Collapsible";
import { Status } from "./index";
const rows = [
  ["Latest sale received on (any surce)", "No data yet"],
  ["Latest sale received at Google Ads", "--"],
  ["Total save values (google ads) recorded in last 30 days", "--"],
  ["Passing sharges along with sale", "No"]
];
export default function DashboardTab(props) {
  return (
    <div style={{ marginTop: 25, padding: 20 }} className="dashboard-tab">
      <Status />
      <Stack distribution="fill">
        <Heading>Current client account</Heading>
        <Select
          options={["Test Account"]}
          // value={}
          onChange={props.handleAccountChange}
        />
      </Stack>
      <div style={{ marginTop: 39, marginBottom: 32 }}>
        <Banner
          title="Your Conversion Pixel is live!"
          status="success"
          onDismiss={() => {}}
        >
          <p>
            Tracker (Adnabu test) has been set up or your Google Ads account
            0345645334
          </p>
        </Banner>
      </div>
      <div style={{ textAlign: "left" }}>
        <PixelDataTable rows={rows} />
      </div>

      <div
        style={{
          marginTop: 28,
          marginBottom: 28,
          borderTop: "1px solid #DFE3E8"
        }}
      >
        <div style={{ marginTop: 28, marginBottom: 11 }}>
          <Heading>Actions</Heading>
        </div>

        <ActionItem />
      </div>
      <CollapsibleComponent />
    </div>
  );
}
