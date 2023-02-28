import styled, { css, CSSProp } from 'styled-components';

export const AvatarContainer = styled.div`
	width: 40px;
	height: 40px;

	img {
		border-radius: 100%;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;