import styled, { css, CSSProp } from 'styled-components';

export const ContentForgotPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 120px;

  h2 {
    margin-bottom: 16px;
  }

  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 560px;
    background-color: #ffffff;
    padding: 32px;
    border-radius: 8px;
    gap: 16px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

    p {
      text-align: center;
      font-size: 14px;
      font-weight: bold;
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

  .email-sent {
    max-width: 560px;
    background-color: #ffffff;
    padding: 16px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    margin-top: 16px;

    p {
      text-align: center;
    }
  }
`