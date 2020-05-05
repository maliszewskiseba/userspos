import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import PropTypes from 'prop-types';

import mainTheme from '../../../helpers/mainTheme';

const ButtonBox = styled.button`
  width: ${props => props.width};
  border: ${({ theme }) => theme.border.light};
  font-size: ${props => (props.fontSize ? props.fontSize : rem(14))};
  padding: ${rem(5)};
  border-radius: ${rem(5)};
  background-color: transparent;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.family};
  transition: ${({ theme }) => theme.transition.standardButton};
  outline: none;

  &:hover {
    transform: scale(1.2);
  }
`;

ButtonBox.defaultProps = { theme: mainTheme };

const GenericButton = ({ onClickFunc, width, fontSize, text }) => (
  <ButtonBox onClick={onClickFunc} width={width} fontSize={fontSize}>
    <span>{text}</span>
  </ButtonBox>
);

GenericButton.defaultProps = {
  onClickFunc: null,
  width: '150px',
  fontSize: '14px',
  text: 'Button'
};

GenericButton.propTypes = {
  onClickFunc: PropTypes.func,
  width: PropTypes.string,
  fontSize: PropTypes.string,
  text: PropTypes.string
};
export default GenericButton;
