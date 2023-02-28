import styled, { css, CSSProp } from 'styled-components';

interface ILinkContainer {
	bg_color_link?: string;
	text_color_link?: string;
}

export const LinkContainer = styled.div<ILinkContainer>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-bottom: 16px;
	border-radius: 8px;
	background-color: ${({ bg_color_link }) => bg_color_link };

	a {
		width: 100%;
		padding: 18px 20px;
		color: ${({ text_color_link }) => text_color_link };

		p {
			font-size: 16px;
			font-weight: 500;
			line-height: 1.5;
			text-align: center;
		}
	}
`;