import React from "react";
import { Stack, Avatar } from "@shopify/polaris";

//Header to be Shown in every Tabs

export default function Header(props) {
  return (
    <div
      style={{
        marginLeft: 32,
        marginRight: 32,
        paddingBottom: 18,
        borderBottom: "1px solid #DFE3E8"
      }}
    >
      <Stack alignment="center">
        <Stack.Item>
          <div
            style={{
              borderRadius: 10
            }}
          >
            <Avatar
              size="medium"
              source={require("../assets/logo.png")}
            ></Avatar>
          </div>
        </Stack.Item>
        <Stack.Item fill>
          <p style={{ fontSize: 16,maxWidth: '50vw', wordWrap: 'break-word', fontWeight: 300 }}>
            Google Adwork Conversion Pixel & Tracking Code
          </p>
        </Stack.Item>
        <Stack.Item>
          <p style={{ fontSize: 12, fontWeight: 200 }}>by Adnabu</p>
        </Stack.Item>
      </Stack>
    </div>
  );
}
