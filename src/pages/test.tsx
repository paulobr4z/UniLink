import { useState } from "react";
import { ColorPicker } from "../components/ColorPicker";

export default function Test() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ColorPicker
        isOpen={isOpen}
      />
      <button
        onClick={() => setIsOpen(!isOpen)}
      >
        open color picker
      </button>
    </>
  )  
}