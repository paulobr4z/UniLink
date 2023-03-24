import styled, { css, CSSProp } from 'styled-components';

export const ContentAccountContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 48px;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 100%;
  padding-top: 120px;
  background-color: #F5F5F5;

  @media (max-width: 992px) {
    width: 100%;
    padding: 120px 16px 0;
  }

  .settings-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 560px;
    padding-bottom: 48px;

    @media (max-width: 992px) {
      width: 100%;
      padding-bottom: 0;
    }
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

    @media (max-width: 560px) {
      width: 100%;
    }
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

    @media (max-width: 560px) {
      flex-direction: column;
    }

    input {
      border: 1px solid #000000;
      padding: 8px;
    }
  }

  .links-container {
    width: 100%;
    border-radius: 8px;
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

interface IPreviewContainer {
  bg_color?: string;
  bg_color_link?: string;
  text_color?: string;
  border_color?: string;
}

export const PreviewContainer = styled.div<IPreviewContainer>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 40%;
  height: 100%;

  .share {
    position: fixed;
    top: 80px;
    padding: 8px 16px;
    margin: 32px;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 8px;
    cursor: pointer;

    @media (max-width: 992px) {
      position: initial;
    }
    
    a {
      color: #000000;
    }
  }

  .preview {
    position: fixed;
    top: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    height: 640px;
    border: 8px solid #121212;
    border-radius: 32px;
    padding: 32px;
    background-color: ${({bg_color}) => bg_color};

    @media (max-width: 992px) {
      position: initial;
    }

    h4 {
      color: ${({text_color}) => text_color};
      margin: 16px 0;
    }

    .preview-links {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({bg_color_link}) => bg_color_link};
      padding: 8px;
      width: 100%;
      margin-bottom: 8px;
      border-radius: 8px;
      border: 1px solid ${({border_color}) => border_color};
      overflow: hidden;

      p {
        color: ${({text_color}) => text_color};
      }
    }
  }
`;

export const ColorPalette = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background-color: #ffffff;
  margin-top: 16px;
  padding: 24px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  gap: 16px;

  h4 {
    font-size: 18px;
  }

  main {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    gap: 16px;

    @media (max-width: 992px) {
      flex-wrap: wrap;
    }
  }

  .teste {
    position: relative;
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
      margin-bottom: 8px;
    }
  }

  button {
    width: 94px;
    height: 94px;
    border-radius: 50%;
    background-color: #000000;
    border: 1px solid #bdbdbd;
  }
`;