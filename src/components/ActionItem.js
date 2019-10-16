import React from "react";
import { Stack, Card, Button, Icon } from "@shopify/polaris";
import { CircleDisabledMajorMonotone } from "@shopify/polaris-icons";
export default function ActionItem(props) {
  return (
    <Card>
      <Card.Section>
        <Stack alignment="center" spacing="extraLoose">
          <Stack.Item>
            <Icon source={CircleDisabledMajorMonotone} color={"inkLight"} />
          </Stack.Item>
          <Stack.Item fill>
            Disable App’s pixel
            <br />
            Disable Tracker (Adnabu test ) on account 035645334
          </Stack.Item>
          <Stack.Item>
            <Button>Disable</Button>
          </Stack.Item>
        </Stack>
      </Card.Section>
    </Card>
  );
}
