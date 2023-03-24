import styled, { css, CSSProp } from 'styled-components';

export const ContentSignupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 88px 16px 32px;

  .leftContent {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;

    @media (max-width: 560px) {
      width: 100%;
    }

    .formContent {
      display: flex;
      flex-direction: column;      
      align-items: center;
      justify-content: center;
      width: 100%;

      h1 {
        font-size: 48px;
        line-height: 58px;
        margin-bottom: 32px;

        @media (max-width: 560px) {
          font-size: 40px;
          line-height: 48px;
        }
      }
    
      form {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        max-width: 560px;

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

        button {
          background-color: #000000;
          color: #ffffff;
          padding: 16px;
          border-radius: 8px;
          margin-top: 16px;
          border: none;
        }

        .username {
          position: relative;
          width: 100%;

          .inputUsername {
            padding-left: 84px;
          }

          .prefix {
            position: absolute;
            top: 50%;
            left: 16px;
            transform: translateY(-50%);
          }
        }
      }
    }
  }

  .rightContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;

    @media (max-width: 992px) {
      display: none;
    }
  }
`;