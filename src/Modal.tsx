import React from "react";

interface ModalProps {
  /* Required. Boolean describing if the modal should be shown or not. */
  isOpen: Boolean;

  /* React children of the modal*/
  children?: React.ReactNode;
}

export function Modal({
  isOpen = false,
  children,
}: ModalProps): React.ReactElement {
  return <div style={{ display: isOpen ? "block" : "none" }}>{children}</div>;
}
