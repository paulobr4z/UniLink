import styled, { css, CSSProp } from 'styled-components';

export const AccountHeaderContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 80px;
	background-color: #ffffff;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
export const AccountHeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 1400px;
	margin: 0 32px;

	ul {
		display: flex;
		align-items: center;
		gap: 32px;

		li {
			list-style: none;
		}
	}
`;