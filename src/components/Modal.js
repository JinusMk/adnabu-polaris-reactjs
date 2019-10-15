import React, { useState, useCallback } from "react";
import {

  TextContainer,
  Button,
  Modal,
  
} from "@shopify/polaris";


export default function ModalComponent(props) {
    const [active, setActive] = useState(true);

    const handleChange = useCallback(() => setActive(!active), [active]);

  return (
    <div style={{height: '500px'}}>
    <Button onClick={handleChange}>Open</Button>
    <Modal
      open={active}
      onClose={handleChange}
      title="Reach more shoppers with Instagram product tags"
      primaryAction={{
        content: 'Add Instagram',
        onAction: handleChange,
      }}
      secondaryActions={[
        {
          content: 'Learn more',
          onAction: handleChange,
        },
      ]}
    >
      <Modal.Section>
        <TextContainer>
          <p>
            Use Instagram posts to share your products with millions of
            people. Let shoppers buy from your store without leaving
            Instagram.
          </p>
        </TextContainer>
      </Modal.Section>
    </Modal>
  </div>
  );
}
