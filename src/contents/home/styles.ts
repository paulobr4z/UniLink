import styled, { css, CSSProp } from 'styled-components';

export const ContentHomeContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 16px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;

    nav {
      display: flex;
      align-items: center;
      gap: 32px;

      a {
        padding: 12px 24px;
        background-color: #0C0C0C;
        border-radius: 8px;
        color: #ffffff;
      }
    }
  }
`;