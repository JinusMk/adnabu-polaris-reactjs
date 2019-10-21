import React from 'react'
import { Card, Collapsible, Stack, Icon, PopoverCloseSource } from '@shopify/polaris'
import {
    ChevronRightMinor, ChevronDownMinor, DisputeMinor} from "@shopify/polaris-icons";
export default function QueryItem(props){
    return(
        <Card.Section>
            <div onClick={() => props.handleToggle(props.id)}>
              <Card.Subsection>
                <Stack spacing="tight" vertical>
                  <Stack alignment="center" spacing="fill" horizontal>
                    <Stack.Item>
                      <Icon color="inkLighter" source={DisputeMinor} />
                    </Stack.Item>
                    <Stack.Item fill>
                      <p style={{ fontSize: "16px",maxWidth: '40vw', wordWrap: 'break-word' }}>
                        Should I remove old pixels
                      </p>
                    </Stack.Item>
                    <Stack.Item>
                      {props.open ? (
                        <Icon color="inkLighter" source={ChevronDownMinor} />
                      ) : (
                        <Icon color="inkLighter" source={ChevronRightMinor} />
                      )}
                    </Stack.Item>
                  </Stack>
                  <Collapsible open={props.open} id="basic-collapsible">
                    <p style={{ marginBottom: "10px" }}>
                      Your mailing list lets you contact customers or visitors
                      who have shown an interest in your store. Reach out to
                      them with exclusive offers or updates about your products.
                    </p>
                  </Collapsible>
                </Stack>
              </Card.Subsection>
            </div>
        </Card.Section>
    )
}