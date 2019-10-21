import React from 'react'
import { Stack, DisplayText, Icon, Avatar } from "@shopify/polaris";
import { StarFilledMinor } from "@shopify/polaris-icons";

export default function AppItem(props){
    return(
        <Stack.Item>
            <Stack distribution="equalSpacing" horizontal>
              <div style={{ width: 350, height: 150 }}>
                <Stack.Item>
                  <Stack horizontal>
                    <Stack.Item>
                      <div
                        style={{
                          marginLeft: 10,
                          marginRight: 10,
                          borderRadius: 10,
                          backgroundColor: "white",
                          boxShadow: "1px 1px 6px 2px #D3D3D3"
                        }}
                      >
                        <Avatar
                          size="large"
                          source={require("../assets/logo.png")}
                        ></Avatar>
                      </div>
                    </Stack.Item>
                    <Stack.Item>
                      <Stack spacing="extraTight" vertical>
                        <Stack.Item>
                          <p style={{ fontSize: 16, fontWeight: 500 }}>
                            Google Ads Conversion Tracking
                          </p>
                        </Stack.Item>
                        <Stack.Item>
                          <p style={{ fontSize: 10, fontWeight: 200 }}>
                            Free to Install
                          </p>
                        </Stack.Item>
                        <Stack.Item>
                          <p
                            style={{
                              fontSize: 12,
                              fontWeight: 100,
                              maxWidth: 250,
                              wordWrap: "break-word"
                            }}
                          >
                            Best Google Adwords Conversion Pixel & AdWords
                            Tracking Apps{" "}
                        </p>
                        </Stack.Item>
                        <Stack.Item>
                          <Stack horizontal spacing="extraTight">
                            <Stack.Item>
                              <Icon
                                color="yellow"
                                source={StarFilledMinor}
                              />
                            </Stack.Item>
                            <Stack.Item>
                              <p style={{ fontSize: 10, fontWeight: 200 }}>
                                4.8 (86)
                              </p>
                            </Stack.Item>
                          </Stack>
                        </Stack.Item>
                      </Stack>
                    </Stack.Item>
                  </Stack>
                </Stack.Item>
              </div>
            </Stack>
          </Stack.Item>
    )
}