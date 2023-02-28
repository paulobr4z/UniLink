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
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100%;
  background-color: royalblue;
`;

export const PreviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100%;
  background-color: rebeccapurple;

  .preview {
    width: 320px;
    height: 640px;
    border: 8px solid #000000;
    border-radius: 32px;
  }
`;