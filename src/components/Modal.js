import React from "react";
import { Modal } from "@shopify/polaris";

export default function ModalComponent(props) {
  return (
      <Modal
        open={props.modalOpen}
        onClose={() => props.handleModalClick()}
        title="Shopping Charges"
        primaryAction={{
          content: "NO(recommended)",
          onAction: props.handleModalClick
        }}
        secondaryActions={[
          {
            content: "YES",
            onAction: props.handleModalClick
          }
        ]}
      >
        <Modal.Section>
            <p>Do you want to include shopping charges in your conversion/sale value?</p>
        </Modal.Section>
      </Modal>
  );
}
