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
      title="Shopping Charges"
      primaryAction={{
        content: 'NO(recommended)',
        onAction: handleChange,
      }}
      secondaryActions={[
        {
          content: 'YES',
          onAction: handleChange,
        },
      ]}
    >
      <Modal.Section>
        <TextContainer>
          <p>
           Do you want to include shopping charges in your conversion/sale value?
          </p>
        </TextContainer>
      </Modal.Section>
    </Modal>
  </div>
  );
}
