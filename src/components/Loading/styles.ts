import styled, { css, CSSProp } from 'styled-components';

interface ILoadingContainer {
	isLoading?: boolean
}

export const LoadingContainer = styled.div<ILoadingContainer>`
	position: absolute;
	top: 0;
	left: 0;
	display: ${({ isLoading }) => isLoading ? 'flex' : 'none' };
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: #ebeef1;
	z-index: 99;

	span {
		border: 5px solid transparent;
		border-top: 5px solid #000000;
		border-left: 5px solid #000000;
		border-right: 5px solid #000000;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		border-radius: 100%;
		animation: spin .6s linear infinite;
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
`;