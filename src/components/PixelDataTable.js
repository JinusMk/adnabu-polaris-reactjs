import React from "react";
import { Card, DataTable } from "@shopify/polaris";
export default function PixelDataTable(props) {
  return (
    <div style={{ borderBottom: "1px solid #DFE3E8" }}>
      <Card>
        <DataTable
          columnContentTypes={[
            "text",
            "numeric",
            "numeric",
            "numeric",
            "numeric"
          ]}
          headings={props.headings ? props.headings : []}
          rows={props.rows}
        />
      </Card>
    </div>
  );
}
