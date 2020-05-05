import React from 'react';
import styled from 'styled-components';
import { Formik, Field } from 'formik';
import { rem } from 'polished';
import PropTypes from 'prop-types';

import mainTheme from '../../../helpers/mainTheme';
import i18n from '../../../i18n';

const FormBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  font-family: ${({ theme }) => theme.font.family};
`;

FormBox.defaultProps = { theme: mainTheme };

const FormLabel = styled.label`
  border-bottom: ${({ theme }) => theme.border.light};
  border-right: ${({ theme }) => theme.border.light};
`;
FormLabel.defaultProps = { theme: mainTheme };

const FormButton = styled.button`
  width: 30%;
  align-self: center;
  margin-top: ${rem(10)};
  transition: ${({ theme }) => theme.transition.standardButton};
  cursor: pointer;
  border: ${({ theme }) => theme.border.light};
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${rem(10)};
  font-size: ${({ theme }) => theme.font.sizeBig};
  font-family: ${({ theme }) => theme.font.family};
  border-radius: ${rem(10)};
  margin: ${rem(5)};

  &:hover {
    transform: scale(1.1);
    border-color: ${props => (props.save ? props.theme.colors.green : props.theme.colors.red)};

    box-shadow: ${rem(1)} ${rem(4)} ${rem(15)} rgba(150, 150, 150, 0.2);
  }
`;
FormButton.defaultProps = { theme: mainTheme };

const FormField = styled(Field)`
  position: relative;
`;

FormField.defaultProps = { theme: mainTheme };

const FormRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  padding: ${rem(5)};

  &:nth-of-type(2) {
    height: ${rem(200)};
  }

  &:nth-of-type(3) {
    justify-content: flex-end;
  }

  input,
  ${FormField} {
    width: 80%;
    border: none;
    border-bottom: ${({ theme }) => theme.border.light};
    border-left: ${({ theme }) => theme.border.light};
    margin-left: ${rem(5)};

    ::placeholder {
      text-align: center;
      font-weight: ${({ theme }) => theme.font.weightLight};
    }
  }
  input {
    font-size: ${({ theme }) => theme.font.sizeBig};
  }

  ${FormLabel} {
    font-size: ${({ theme }) => theme.font.sizeBig};
    width: 20%;
    text-align: center;
    margin-right: ${rem(5)};
    padding-right: ${rem(10)};
    box-sizing: border-box;

    &:nth-of-type(1) {
      align-self: center;
    }
  }
`;
FormRow.defaultProps = { theme: mainTheme };

const AddPostForm = ({ onSubmit, closeModal }) => (
  <Formik initialValues={{ title: '', body: '' }} onSubmit={onSubmit}>
    {({ handleSubmit, handleChange, values }) => (
      <form onSubmit={handleSubmit}>
        <FormBox>
          <FormRow>
            <FormLabel htmlFor="title">{i18n.t('posts.form.title')}</FormLabel>
            <input
              onChange={handleChange}
              value={values.title}
              type="text"
              placeholder="Title"
              name="title"
              id="title"
            />
          </FormRow>
          <FormRow>
            <FormLabel htmlFor="body">{i18n.t('posts.form.body')}</FormLabel>
            <FormField
              component="textarea"
              value={values.body}
              type="text"
              placeholder="Body"
              name="body"
              id="body"
            />
          </FormRow>
          <FormRow>
            <FormButton cancel onClick={closeModal}>
              {i18n.t('posts.form.cancel')}
            </FormButton>
            <FormButton save type="submit">
              {i18n.t('posts.form.save')}
            </FormButton>
          </FormRow>
        </FormBox>
      </form>
    )}
  </Formik>
);

AddPostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default AddPostForm;
