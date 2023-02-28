import styled, { css, CSSProp } from 'styled-components';

interface IProfileContainer {
	bgColor?: string;
}

export const ProfileContainer = styled.div<IProfileContainer>`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	padding: 0 16px;
	background-color: ${({ bgColor }) => bgColor ? bgColor : "#121212" };

	h2 {
		margin-top: 32px;
		margin-bottom: 16px;
	}

`;
export const ProfileContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 600px;
	margin-top: 65px;
`;
export const ProfileTitle = styled.h1`
	width: 100%;
	margin: 0px;
	color: #ffffff;
	font-weight: 700;
	font-size: 20px;
	line-height: 1.5;
	text-overflow: ellipsis;
	max-width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-align: center;
	margin-top: 16px;
`;
export const ProfileBio = styled.p`
	width: 100%;
	margin: 0px;
	color: #ffffff;
	font-size: 16px;
	line-height: 1.5;
	text-overflow: ellipsis;
	max-width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-align: center;
	margin-top: 16px;
`;
export const ProfileLinks = styled.div`
	width: 100%;
	margin-top: 32px;
`;
export const ProfileNotFound = styled.p`
	width: 100%;
	margin: 0px;
	color: #000000;
	font-size: 18px;
	line-height: 1.5;
	text-overflow: ellipsis;
	max-width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-align: center;
	margin-top: 50px;
`;