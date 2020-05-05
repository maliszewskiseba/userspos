import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { rem } from 'polished';

import closeIcon from '../../assets/close_icon.png';
import mainTheme from '../../helpers/mainTheme';

const ModalBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ModalBoxTitle = styled.h1`
  text-align: center;
  position: relative;
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.weightBold};

  &:after {
    content: '';
    border-top: ${({ theme }) => theme.border.light};
    width: 80%;
    position: absolute;
    top: 100%;
    left: 10%;
  }
`;
ModalBoxTitle.defaultProps = { theme: mainTheme };

const ModalBoxControlRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ModalBoxExitButton = styled.button`
  background: url(${closeIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  width: ${rem(20)};
  height: ${rem(20)};
  cursor: pointer;
`;

const FormLabel = styled.label`
  border: ${({ theme }) => theme.border.light};
`;
FormLabel.defaultProps = { theme: mainTheme };

const ModalComponent = ({ closeModal, title }) => (
  <ModalBox>
    <ModalBoxControlRow>
      <ModalBoxExitButton onClick={closeModal} />
    </ModalBoxControlRow>
    <ModalBoxTitle>{title}</ModalBoxTitle>
  </ModalBox>
);

ModalComponent.propTypes = {
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default ModalComponent;
