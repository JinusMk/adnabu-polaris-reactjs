import React from 'react'
import { Stack, Icon, Avatar, TextStyle, Caption } from "@shopify/polaris";
import { StarFilledMinor } from "@shopify/polaris-icons";

export default function AppItem(props){
    return(
            <Stack.Item>
                <Stack wrap={false}>
                    <Stack.Item>
                        <Avatar
                          size="large"
                          source={require("../assets/logo.png")}
                        ></Avatar>
                    </Stack.Item>
                    <Stack.Item>
                    <Stack spacing="extraTight" vertical wrap={false}>
                            <Stack.Item>
                                <TextStyle variation="strong">Google Ads Conversion Tracking</TextStyle>
                            </Stack.Item>
                            <Stack.Item>
                                <Caption>Free to Install</Caption>
                            </Stack.Item>
                            <Stack.Item>
                                <TextStyle variation="subdued">Best Google Adwords <br/>Conversion Pixel & AdWords <br/>Tracking Apps</TextStyle>
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
                                        <TextStyle variation="subdued"> 4.8 (86)</TextStyle>
                                    </Stack.Item>
                                </Stack>
                            </Stack.Item>
                    </Stack>
                    </Stack.Item>
                </Stack>
            </Stack.Item>
    )
}