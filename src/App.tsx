import React, { useState } from "react";
import { Modal } from "./Modal";

export function App(): React.ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button role="button" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>

      <Modal isOpen={isModalOpen}>I am Modal</Modal>
    </div>
  );
}
