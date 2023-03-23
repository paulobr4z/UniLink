import { useState } from "react";
import { ColorPicker } from "../components/ColorPicker";

export default function Test() {
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: "center",
      justifyContent: "center"
    }}>
      <ColorPicker />
    </div>
  )  
}