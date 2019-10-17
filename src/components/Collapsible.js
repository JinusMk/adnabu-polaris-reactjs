import React, { useState, useCallback } from "react";
import {
  Card,
  Heading,
  Collapsible,
  Stack,
  Icon
} from "@shopify/polaris";
import {
  ChevronRightMinor,
  ChevronDownMinor,
  DisputeMinor
} from "@shopify/polaris-icons";

//Collapsible shown for Common FAQs

export default function CollapsibleComponent(props) {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const handleToggle = useCallback(status => {
    switch (status) {
      case 1:
        setActive1(active1 => !active1);
        break;
      case 2:
        setActive2(active2 => !active2);
        break;
      case 3:
        setActive3(active3 => !active3);
        break;
      default:
        break;
    }
  }, []);

  return (
    <div
      style={{
        borderTop: "1px solid #DFE3E8",
        paddingTop: 38,
        position: "relative"
      }}
    >
      <Heading element="h1">Common Queries</Heading>
      <div className="queries" style={{ marginTop: 21 }}>
        <Card>
          <Card.Section>
            <div onClick={() => handleToggle(1)}>
              <Card.Subsection>
                <Stack spacing="tight" vertical>
                  <Stack alignment="center" spacing="fill" horizontal>
                    <Stack.Item>
                      <Icon color="inkLighter" source={DisputeMinor} />
                    </Stack.Item>
                    <Stack.Item fill>
                      <p style={{ fontSize: "16px", maxWidth: '40vw', wordWrap: 'break-word' }}>
                        Should I remove old pixels
                      </p>
                    </Stack.Item>
                    <Stack.Item>
                      {active1 ? (
                        <Icon color="inkLighter" source={ChevronDownMinor} />
                      ) : (
                        <Icon color="inkLighter" source={ChevronRightMinor} />
                      )}
                    </Stack.Item>
                  </Stack>
                  <Collapsible open={active1} id="basic-collapsible">
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
          <Card.Section>
            <div onClick={() => handleToggle(2)}>
              <Card.Subsection>
                <Stack spacing="tight" vertical>
                  <Stack alignment="center" horizontal>
                    <Stack.Item>
                      <Icon color="inkLighter" source={DisputeMinor} />
                    </Stack.Item>
                    <Stack.Item fill>
                      <p style={{ fontSize: "16px", maxWidth: '40vw', wordWrap: 'break-word' }}>
                        Should I remove old pixels
                      </p>
                    </Stack.Item>
                    <Stack.Item>
                      {active2 ? (
                        <Icon color="inkLighter" source={ChevronDownMinor} />
                      ) : (
                        <Icon color="inkLighter" source={ChevronRightMinor} />
                      )}
                    </Stack.Item>
                  </Stack>
                  <Collapsible open={active2} id="basic-collapsible">
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
          <Card.Section>
            <div onClick={() => handleToggle(3)}>
              <Card.Subsection>
                <Stack spacing="tight" vertical>
                  <Stack alignment="center" horizontal>
                    <Stack.Item>
                      <Icon color="inkLighter" source={DisputeMinor} />
                    </Stack.Item>
                    <Stack.Item fill>
                      <p style={{ fontSize: "16px", maxWidth: '40vw', wordWrap: 'break-word' }}>
                        Should I remove old pixels
                      </p>
                    </Stack.Item>
                    <Stack.Item >
                      {active3 ? (
                        <Icon color="inkLighter" source={ChevronDownMinor} />
                      ) : (
                        <Icon color="inkLighter" source={ChevronRightMinor} />
                      )}
                    </Stack.Item>
                  </Stack>
                  <Collapsible open={active3} id="basic-collapsible">
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
        </Card>
      </div>
    </div>
  );
}
