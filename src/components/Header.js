import React from "react";
import { Stack, Avatar, TextStyle, Layout } from "@shopify/polaris";

export default function Header(props) {
  return (
      <Layout.Section>
          <Stack alignment="center" wrap={false}>
            <Stack.Item>
                <Avatar
                  size="medium"
                  source={require("../assets/logo.png")}
                />
            </Stack.Item>
            <Stack.Item fill>
                {/* <TextStyle variation="subdued">Google Adwork <br/> Conversion Pixel & <br/> Tracking Code</TextStyle> */}
                <TextStyle variation="subdued">Google Adwork  Conversion Pixel & Tracking Code</TextStyle>
            </Stack.Item>
            <Stack.Item>
                <TextStyle variation="subdued">by Adnabu</TextStyle>
            </Stack.Item>
          </Stack>
      </Layout.Section>
  );
}
