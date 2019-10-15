import React from "react";
import { DescriptionList, Heading, DisplayText } from "@shopify/polaris";

export default function HelpTab(props) {
  return (
    <div style={{ marginTop: 57, marginLeft: 33, marginRight: 33 }}>
      <Heading element="h1">Frequently asked questions</Heading>
      <div
        style={{
          marginTop: 30,
          paddingBottom: 47,
          borderBottom: "1px solid #DFE3E8"
        }}
      >
        <DescriptionList
          items={[
            {
              term: "Logistics",
              description:
                "The management of products or other resources as they travel between a point of origin and a destination."
            },
            {
              term: "Sole proprietorship",
              description:
                "A business structure where a single individual both owns and runs the company."
            },
            {
              term: "Discount code",
              description:
                "A series of numbers and/or letters that an online shopper may enter at checkout to get a discount or special offer."
            },
            {
              term: "Discount code",
              description:
                "A series of numbers and/or letters that an online shopper may enter at checkout to get a discount or special offer."
            },
            {
              term: "Discount code",
              description:
                "A series of numbers and/or letters that an online shopper may enter at checkout to get a discount or special offer."
            }
          ]}
        />
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
