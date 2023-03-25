import styled, { css, CSSProp } from 'styled-components';

export const HeaderDefaultContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 80px;
	z-index: 99;

	.header-default-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1400px;
		width: 100%;
		padding: 0 32px;

		@media (max-width: 560px) {
      padding: 16px;
    }

		a {
			font-weight: bold;
    	font-size: 18px;
			color: #000000;
		}

		.logo {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 18px;
      gap: 16px;

      img {
        width: 32px;
        border-radius: 6px;
      }
    }
	}
`;