import styled, { css, CSSProp } from 'styled-components';

interface IAvatarContainer {
	width: number;
	height: number;
}

export const AvatarContainer = styled.div<IAvatarContainer>`
	position: relative;
	width: ${({ width }) => width }px;
	height: ${({ height }) => height }px;

	img {
		border-radius: 100%;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.edit, .update {
		position: absolute;
		bottom: 0;
		right: 0;
		background-color: #000000;
		padding: 4px 8px;
		border: 1px solid #09090B;
		border-radius: 6px;
		color: #ffffff;
		cursor: pointer;
		font-size: 12px;
		z-index: 1;
	}
	.update {
		left: 0;
		right: initial;
	}

	.isloading-container {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: red;
		border-radius: 50%;
		background-color: rgba(255,255,255,.4);
	}

	.isloading {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		border: 3px solid transparent;
  	border-top: 3px solid #000000;
  	border-left: 3px solid #000000;
  	border-right: 3px solid #000000;
		animation: spin .8s linear infinite;
	}
	
	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
`;