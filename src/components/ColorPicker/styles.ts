import styled, { css, CSSProp } from 'styled-components';

interface IColorPickerContainer {
	isOpen: boolean;
}

export const ColorPickerContainer = styled.div<IColorPickerContainer>`
	position: absolute;
	top: 0;
	left: 0;
	display: ${({ isOpen }) => isOpen ? 'flex' : 'none' };
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 16px;
	gap: 8px;
	background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	border-radius: 8px;

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
`;
