import { useEffect, useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { useDebounce } from "../../hooks/useDebounce";
import {
  ColorPickerContainer,
} from './styles';

interface IColorPicker {
  title?: string;
  handleChangeColor: (color: string) => void;
  defaultColor?: string;
}

export function ColorPicker({
  title = "title",
  defaultColor,
  handleChangeColor
}:IColorPicker) {
  const [color, setColor] = useState(`${defaultColor}`);
  const [isOpen, setIsOpen] = useState(false);

  const debouncedValue = useDebounce<string>(color, 1000);

  useEffect(() => {
    handleChangeColor(color);
  }, [debouncedValue])

  return (
    <ColorPickerContainer
      isOpen={isOpen}
      defaultColor={defaultColor}
    >
      <span>
        <button onClick={() => setIsOpen(true)} />
        <p>{title}</p>
        <main>
          <HexColorPicker
            onChange={setColor}
            color={color}
          />
          <HexColorInput color={color} onChange={setColor} />
        </main>
      </span>
      <div
        className="hidden-color-picker"
        onClick={() => setIsOpen(false)}
      />
    </ColorPickerContainer>
  );
}