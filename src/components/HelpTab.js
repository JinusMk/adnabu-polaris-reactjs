import React from "react";
import { DescriptionList, Heading } from "@shopify/polaris";
import { FAQs } from "../constants";

//Help Tab Component

export default function HelpTab(props) {
  return (
    <div style={{ marginTop: 30,padding: 20 }}>
      <Heading element="h1">Frequently asked questions</Heading>
      <div
          style={{
            marginTop: 30,
            paddingBottom: 47,
            borderBottom: "1px solid #DFE3E8"
          }}
        >
        <DescriptionList items={FAQs} />
      </div>
      <div style={{ marginTop: 30 }}>
        <Heading element="h1">Reach Us</Heading>
        <div style={{ marginTop: 30 }}>
          <p style={{ fontSize: 16 }}>
            Send us your valuable suggestions and queries to{" "}
            <span style={{ color: "blue" }}>contact@adnabu.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
