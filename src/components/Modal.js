import React, { useState, useCallback } from "react";
import {

  TextContainer,
  Button,
  Modal,
  
} from "@shopify/polaris";

export default function ModalComponent(props) {
  return (
    <div style={{height: '500px'}}>
    <Modal
      open={props.modalOpen}
      onClose={() => props.handleModalClick()}
      title="Shopping Charges"
      primaryAction={{
        content: 'NO(recommended)',
        onAction: props.handleModalClick,
      }}
      secondaryActions={[
        {
          content: 'YES',
          onAction: props.handleModalClick,
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
