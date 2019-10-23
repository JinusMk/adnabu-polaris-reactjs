import React from "react";
import { DescriptionList, Heading, Page, Layout } from "@shopify/polaris";
import { FAQs } from "../constants";

export default function HelpTab(props) {
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
            <Heading element="h1">Frequently asked questions</Heading>
        </Layout.Section>
        <Layout.Section>
            <DescriptionList items={FAQs} />
        </Layout.Section>
        <Layout.Section>
            <Heading element="h1">Reach Us</Heading>
        </Layout.Section>
        <Layout.Section>
            <p>
                Send us your valuable suggestions and queries to{" "}
                <span style={{ color: "blue" }}>contact@adnabu.com</span>
            </p>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
