import styled, { css, CSSProp } from 'styled-components';

export const ContentSignupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  min-height: 100vh;
  margin: 0 auto;

  .leftContent {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;

    .formContent {
      display: flex;
      flex-direction: column;      
      align-items: center;
      justify-content: center;
      width: 100%;

      h1 {
        font-size: 48px;
        margin-bottom: 32px;
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
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

          ::placeholder {
            color: #77838f;
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
  }
`;