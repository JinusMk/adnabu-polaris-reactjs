import React from "react";
import { Stack, Card, Button, Icon } from "@shopify/polaris";
import { CircleDisabledMajorMonotone } from "@shopify/polaris-icons";

export default function ActionItem(props) {
  return (
    <Card sectioned>
        <Stack alignment="center" wrap={false}>
          <Stack.Item>
            <Icon source={CircleDisabledMajorMonotone} color={"inkLight"} />
          </Stack.Item>
          <Stack.Item fill>
              {props.action ? <p>Disable App’s pixel Disable Tracker (Adnabu test )</p> : <p>Disable Other Pixel</p>}
          </Stack.Item>
          <Stack.Item>
            <Button>Disable</Button>
          </Stack.Item>
        </Stack>
    </Card>
  );
}
