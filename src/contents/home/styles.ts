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

    .logo {
      font-weight: bold;
      font-size: 18px;
    }

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

  main {
    display: flex;
    width: 100%;

    .main-title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      width: 50%;
      height: 90vh;
      gap: 32px;
  
      h1 {
        font-size: 80px;
        font-weight: bold;
        line-height: 88px;
      }
  
      button {
        padding: 16px 32px;
        background-color: #000000;
        color: #ffffff;
        border: none;
        border-radius: 100px;
        font-size: 20px;
      }
    }
  
    .main-ilustra {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      width: 50%;
      height: 90vh;
    }
  }
`;