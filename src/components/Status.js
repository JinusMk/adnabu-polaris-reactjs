import React from "react";
import { Stack } from "@shopify/polaris";
//Status Component to Show LoggedIn/ LoggedOut Status

export default function Status(props) {
  return (
    <div style={{ marginBottom: 26 }}>
      <Stack horizontal distribution="trailing">
        <Stack.Item>
          <p style={{ fontSize: 12, fontWeight: 200 }}>
            test@test.com <span
            //  onClick={} Use Onclick to change action
             >(change)</span>
          </p>
        </Stack.Item>
      </Stack>
    </div>
  );
}
