import styled, { css, CSSProp } from 'styled-components';

export const ContentAccountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 100%;
  padding-top: 120px;
  background-color: #F5F5F5;

  .settings-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 560px;
  }

  .header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    background-color: #ffffff;
    padding: 24px;
    width: 100%;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  .add-link, .update-username, .update-user {
    padding: 8px 16px;
    background-color: #000000;
    width: 100%;
    border-radius: 8px;
    color: #ffffff;
    border: none;
  }

  .update-username {
    padding: 12px;
    background-color: #000000;
    width: 50%;
    border-radius: 8px;
    color: #ffffff;
    font-size: 14px;
  }

  input {
    width: 100%;
    border-radius: 6px;
    border: none;
    outline: none;
    font-size: 14px;
  }

  .username-field {
    display: flex;
    align-items: center;
    justify-content: center;
    row-gap: 8px;
    width: 100%;
    border-radius: 8px;
    background-color: #ffffff;
    gap: 16px;

    input {
      border: 1px solid #000000;
      padding: 8px;
    }
  }

  .links-container {
    width: 100%;
    border-radius: 8px;
    margin-top: 32px;
    row-gap: 8px;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
      gap: 16px;
    }

    .links-main {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .link-wrapper {
      display: grid;
      grid-template-columns: 1fr auto;
      flex-direction: column;
      padding: 24px;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

      .link-input {
        display: flex;
        flex-direction: column;
        row-gap: 16px;
      }

      span {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        font-size: 14px;
        row-gap: 16px;
      }
    }
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100%;
  background-color: rebeccapurple;

  .preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    height: 640px;
    border: 8px solid #121212;
    border-radius: 32px;
    padding: 32px;
    background-color: #000000;

    h4 {
      color: #ffffff;
      margin: 16px 0;
    }

    .preview-links {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #121212;
      padding: 8px;
      width: 100%;
      margin-bottom: 8px;
      border-radius: 8px;
      border: 1px solid #ffffff;
      overflow: hidden;

      p {
        color: #ffffff;
      }
    }
  }
`;