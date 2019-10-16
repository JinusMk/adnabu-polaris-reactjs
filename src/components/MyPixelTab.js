import React from "react";
import { Heading, Badge, Button } from "@shopify/polaris";
import PixelDataTable from "./PixelDataTable.js";
import ActionItem from "./ActionItem";
const pixelTabRows = [
  [
    <p>Test Account 1</p>,
    <Badge status="success">Active</Badge>,
    <Button>Enable</Button>
  ],
  [
    <p>Test Account 3</p>,
    <Badge status="success">Active</Badge>,
    <Button>Enable</Button>
  ],
  [<p>Test Account 2</p>, <Badge>Disabled</Badge>, <Button>Disable</Button>]
];
export default function MyPixelTab(props) {
  return (
    <div className="myPixel-tab">
      <Heading>My Pixels</Heading>
      <div
        className="myPixel-table-wrapper"
        style={{
          marginTop: "14px",
          paddingBottom: "34px",
          marginBottom: "34px",
          borderBottom: "1px solid #DFE3E8"
        }}
      >
        <PixelDataTable
          rows={pixelTabRows}
          headings={["Client Account", "Status", "Action"]}
        ></PixelDataTable>
      </div>
      <ActionItem />
    </div>
  );
}
