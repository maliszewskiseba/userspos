import React from "react";
import styled, { keyframes } from "styled-components";
import { rem } from "polished";

import i18n from "../../i18n";
import mainTheme from "../../helpers/mainTheme";

const LoadingSpinnerBox = styled.div`
  width: 100%;
  height: 98vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const LoadingSpinnerText = styled.span`
  position: absolute;
  display: inline-block;
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.weightBold};
  font-size: ${({ theme }) => theme.font.sizeBig};
  color: rgba(0, 0, 0, 0.6);
`;
LoadingSpinnerText.defaultProps = { theme: mainTheme };

const rotate = keyframes`
  from {
    transform: rotate(0deg);
    opacity: 0.2;
    border-top: ${rem(2)} dashed red;
    border-bottom: ${rem(2)} dashed red;
  }

  to {
    opacity:1
    transform: rotate(360deg);
    border-top: ${rem(6)} solid blue;
    border-bottom: ${rem(6)} solid blue;
  }
`;

const LoadingSpinnerInnerCircle = styled.div`
  width: ${rem(150)};
  height: ${rem(150)};
  border-radius: 50%;
  border-top: ${rem(3)} solid black;
  border-bottom: ${rem(3)} solid black;
  animation: ${rotate} 2s ease-in-out infinite;
  opacity: 0.2;
`;

const LoadingSpinner = () => (
  <LoadingSpinnerBox>
    <LoadingSpinnerInnerCircle />
    <LoadingSpinnerText>{i18n.t("custom.loading")}</LoadingSpinnerText>
  </LoadingSpinnerBox>
);

export default LoadingSpinner;
