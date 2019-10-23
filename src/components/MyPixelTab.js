import React from "react";
import { Heading, Badge, Button, Layout, Page } from "@shopify/polaris";
import PixelDataTable from "./PixelDataTable.js";
import ActionItem from "./ActionItem";
const pixelTabRows = [
  [<p>Test Account 1</p>, <Badge status="success">Active</Badge>, <Button>Enable</Button>],
  [<p>Test Account 3</p>, <Badge status="success">Active</Badge>, <Button>Enable</Button>],
  [<p>Test Account 2</p>, <Badge>Disabled</Badge>, <Button>Disable</Button>]
];
export default function MyPixelTab(props) {
  return (
    <Page>
        <Layout>
            <Layout.Section>
                <Heading>My Pixels</Heading>
            </Layout.Section>
            <Layout.Section>
                <PixelDataTable
                  rows={pixelTabRows}
                  headings={["Client Account", "Status", "Action"]}
                />
            </Layout.Section>
            <Layout.Section>
                <Heading>Actions</Heading>
            </Layout.Section>
            <Layout.Section>
                <ActionItem />
            </Layout.Section>
        </Layout>
    </Page>
  );
}
