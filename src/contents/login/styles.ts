import styled, { css, CSSProp } from 'styled-components';

export const ContentLoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 0 16px;

  .login-wrapper {
    max-width: 560px;
    width: 100%;

    h1 {
      width: 100%;
      text-align: center;
      font-size: 48px;
      margin-bottom: 32px;

      @media (max-width: 560px) {
        font-size: 40px;
        line-height: 48px;
      }
    }

    p {
      margin-top: 16px;
      width: 100%;
      text-align: center;
    }

    a {
      color: #000000;
      text-decoration: underline;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    .password-input {
      position: relative;
      display: flex;
      align-items: center;

      svg {
        position: absolute;
        right: 16px;
        cursor: pointer;
      }
    }

    
    span {
      width: 100%;
    }

    input {
      width: 100%;
      padding: 18px;
      border-radius: 8px;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

      ::placeholder {
        color: #77838f;
      }
    }
    
    button {
      width: 100%;
      padding: 16px;
      background-color: #000000;
      color: #ffffff;
      border-radius: 8px;
      margin-top: 16px;
      border: none;
    }
  }

  .forgot-password {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      width: fit-content;
      text-align: initial;
    }
  }
`;