import { useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";
import {
  ColorPickerContainer,
} from './styles';

interface IColorPicker {
  isOpen: boolean;
}

export function ColorPicker({
  isOpen
}: IColorPicker) {
  const [color, setColor] = useState("#121212");

  const handleChange = (color: string) => {
    setColor(color)
  }; 


  return (
    <ColorPickerContainer
      isOpen={isOpen}
    >
      <HexColorPicker    
        onChange={(color) => handleChange(color)}
        color={color}
      />

      <HexColorInput color={color} onChange={setColor} />
    </ColorPickerContainer>
  );
}