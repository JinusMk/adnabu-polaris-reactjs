import React from "react";
import { Card, DataTable } from "@shopify/polaris";

export default function PixelDataTable(props) {
  return (
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
  );
}
