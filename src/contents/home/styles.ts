import styled, { css, CSSProp } from 'styled-components';

export const ContentHomeContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: 560px) {
    padding: 0 16px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;

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

    nav {
      display: flex;
      align-items: center;
      gap: 32px;

      a {
        padding: 12px 24px;
        background-color: #0C0C0C;
        border-radius: 8px;
        color: #ffffff;
        border: none;
      }
    }
  }

  main {
    display: flex;
    width: 100%;

    @media (max-width: 992px) {
      flex-direction: column;
    }

    .main-title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      width: 50%;
      height: 90vh;

      @media (max-width: 992px) {
        align-items: center;
        width: 100%;
        height: initial;
        padding: 120px 0;
      }
  
      h1 {
        font-size: 74px;
        font-weight: bold;
        line-height: 88px;
        margin-bottom: 16px;

        @media (max-width: 1024px) {
          font-size: 64px;
          line-height: 76px;
        }

        @media (max-width: 992px) {
          text-align: center;
        }

        @media (max-width: 560px) {
          font-size: 48px;
          line-height: 58px;
        }
      }

      h3 {
        font-size: 24px;
        font-weight: bold;
        line-height: 28px;
        color: #0C0C0C;
        margin-bottom: 32px;

        @media (max-width: 992px) {
          text-align: center;
        }

        @media (max-width: 560px) {
          font-size: 16px;
        }
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
      align-items: center;
      justify-content: center;
      width: 50%;
      height: 90vh;

      @media (max-width: 992px) {
        width: 100%;
        height: initial;
      }
    }

    img {
      width: 100%;

      @media (max-width: 992px) {
        width: 60%;
      }
    }
  }

  @media (max-width: 560px) {
    .menu {
      gap: 8px;

      a {
        font-size: 12px;
        padding: 8px 16px;
      }
    }
  }
`;