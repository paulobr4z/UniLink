import styled, { css, CSSProp } from 'styled-components';

export const ButtonDefaultContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: 16px;
		background-color: #000000;
		color: #ffffff;
		border-radius: 8px;
		margin-top: 16px;
		border: none;
	}

	.spinner {
		border: 3px solid transparent;
		border-top: 3px solid #ffffff;
		border-left: 3px solid #ffffff;
		border-right: 3px solid #ffffff;
		border-radius: 50%;
		width: 24px;
		height: 24px;
		border-radius: 100%;
		animation: spin .6s linear infinite;
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
`;
