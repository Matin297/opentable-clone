"use client";

import { useRef, useEffect } from "react";

type DialogProps = {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

function Dialog({ children, isOpen, onClose }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      if (isOpen) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }
  }, [isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  return (
    <dialog
      className="border-0 rounded-md w-[80%] max-w-xl p-6 backdrop:bg-black/60"
      ref={dialogRef}
      onKeyDown={handleKeyDown}
    >
      {children}
    </dialog>
  );
}

export default Dialog;
