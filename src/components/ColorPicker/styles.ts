import styled, { css, CSSProp } from 'styled-components';

interface IColorPickerContainer {
	isOpen: boolean;
	defaultColor?: string;
}

export const ColorPickerContainer = styled.div<IColorPickerContainer>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	p {
		font-size: 14px;
		margin-top: 8px;
	}

	input {
		display: block;
		box-sizing: border-box;
		width: 90px;
		padding: 6px;
		border: 1px solid #ddd;
		border-radius: 4px;
		background: #eee;
		outline: none;
		font: inherit;
		text-transform: uppercase;
		text-align: center;
	}

	span {
		position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

		main {
			position: absolute;
    	display: ${({ isOpen }) => isOpen ? 'flex' : 'none' };
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 16px;
			border-radius: 8px;
			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
			gap: 16px;
			background-color: #ffffff;
			width: 232px;
			z-index: 2;
		}
  }

  button {
    width: 88px;
    height: 88px;
    border-radius: 50%;
    background-color: ${({ defaultColor }) => defaultColor };
    border: 1px solid #bdbdbd;
  }

	.hidden-color-picker {
		display: ${({ isOpen }) => isOpen ? 'block' : 'none' };
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: 1;
	}
`;
