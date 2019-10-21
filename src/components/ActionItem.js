import React from "react";
import { Stack, Card, Button, Icon } from "@shopify/polaris";
import { CircleDisabledMajorMonotone } from "@shopify/polaris-icons";

export default function ActionItem(props) {
  return (
    <Card>
      <Card.Section>
        <Stack alignment="center" >
          <Stack.Item>
            <Icon source={CircleDisabledMajorMonotone} color={"inkLight"} />
          </Stack.Item>
          <Stack.Item fill>
            <p style={{ fontSize: 16,maxWidth: '30vw', wordWrap: 'break-word', fontWeight: 300 }}>
            Disable App’s pixel <br/>Disable Tracker (Adnabu test ) on account 035645334
            </p>
          </Stack.Item>
          <Stack.Item>
            <Button>Disable</Button>
          </Stack.Item>
        </Stack>
      </Card.Section>
    </Card>
  );
}
