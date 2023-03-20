import { ButtonHTMLAttributes } from "react";
import {
  ButtonDefaultContainer,
} from './styles';

interface IButtonDefault extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  isLoading?: boolean;
}

export function ButtonDefault({
  title = "button",
  isLoading,
  ...rest
}: IButtonDefault) {
  return (
    <ButtonDefaultContainer>
      <button {...rest}>
        {!isLoading ? title : <div className="spinner"/>}
      </button>
    </ButtonDefaultContainer>
  );
}