import React from "react";
import { Stack, DisplayText, Icon, Avatar } from "@shopify/polaris";
import { StarFilledMinor } from "@shopify/polaris-icons";
import AppItem from './AppItem'
export default function AppsByAdnabu(props) {
  return (
    <div>
      <div
        style={{
          marginLeft: 55,
          marginTop: 50,
          padding: 20,
          marginBottom: 50
        }}
      >
        <Stack vertical>
          <Stack.Item>
            <DisplayText size="large">Adnabu Inc</DisplayText>
          </Stack.Item>
          <Stack.Item>
            <Stack horizontal spacing="tight">
              <Stack.Item>
                <div style={{ marginRight: 42 }}>
                  <p style={{ fontSize: 16 }}>4 apps</p>
                </div>
              </Stack.Item>
              <Stack.Item>
                <p style={{ fontSize: 16 }}>Average Rating :</p>
              </Stack.Item>
              <Stack.Item>
                <Icon
                  color="yellow"
                  source={StarFilledMinor}
                />
              </Stack.Item>
              <Stack.Item>
                <p style={{ fontSize: 16 }}>4.8</p>
              </Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
      </div>
      <div
        style={{ backgroundColor: "white"}}
      >
        <Stack spacing="extraLoose" distribution="center" Vertical>
          <AppItem />
          <AppItem />
          <AppItem />
          <AppItem />
        </Stack>
      </div>
    </div>
  );
}
