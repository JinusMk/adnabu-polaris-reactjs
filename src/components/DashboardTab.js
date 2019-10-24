import React from "react";
import { Stack, Heading, Banner, Page, Layout, DisplayText } from "@shopify/polaris";
import PixelDataTable from "./PixelDataTable.js";
import ActionItem from "./ActionItem";
import CommonQueries from "./CommonQueries";
import { Status } from "./index";
import SelectClientAccount from './SelectClientAccount'
const rows = [
  ["Latest sale received on (any surce)", "No data yet"],
  ["Latest sale received at Google Ads", "--"],
  ["Total save values (google ads) recorded in last 30 days", "--"],
  ["Passing sharges along with sale", "No"]
];

export default function DashboardTab(props) {
  return (
    <Page >
      <Layout>
        <Layout.Section>
            <Status />
        </Layout.Section>
        <Layout.Section>
            <Stack distribution="fill" wrap={false} alignment="center">
              <DisplayText size="small">Current client account</DisplayText>
                <SelectClientAccount />
            </Stack>
        </Layout.Section>
        <Layout.Section>
            <Banner
              title="Your Conversion Pixel is live!"
              status="success"
              onDismiss={() => {}}
            >
                Tracker (Adnabu test) has been set up or your Google Ads account
                0345645334
            </Banner>
        </Layout.Section>
        <Layout.Section>
            <PixelDataTable rows={rows} />
        </Layout.Section>
        <Layout.Section>
            <Heading>Actions</Heading>
        </Layout.Section>
        <Layout.Section>
            <ActionItem action={true} />
        </Layout.Section>
        <Layout.Section>
            <Heading>Common Queries</Heading>
        </Layout.Section>
        <Layout.Section>
            <CommonQueries/>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
