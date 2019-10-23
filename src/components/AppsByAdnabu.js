import React from "react";
import { Stack, DisplayText, Icon, Page, Layout, Card } from "@shopify/polaris";
import { StarFilledMinor } from "@shopify/polaris-icons";
import AppItem from './AppItem'
export default function AppsByAdnabu(props) {
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Page>
              <Layout>
                <Layout.Section>
                    <DisplayText size="large">Adnabu Inc</DisplayText>
                </Layout.Section>
                <Layout.Section>
                    <Stack vertical>
                      <Stack.Item>
                        <Stack horizontal spacing="tight">
                          <Stack.Item>
                            <p>4 apps</p>
                          </Stack.Item>
                          <Stack.Item>
                            <p>Average Rating :</p>
                          </Stack.Item>
                          <Stack.Item>
                            <Icon
                              color="yellow"
                              source={StarFilledMinor}
                            />
                          </Stack.Item>
                          <Stack.Item>
                            <p>4.8</p>
                          </Stack.Item>
                        </Stack>
                      </Stack.Item>
                    </Stack>
                </Layout.Section>
              </Layout>
          </Page>
        </Layout.Section>
        <Layout.Section>
            <Card sectioned>
              <Stack distribution="fillEvenly">
                <AppItem />
                <AppItem />
                <AppItem />
                <AppItem />
              </Stack>
            </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
