import React from 'react';
import { mount } from '../../../../enzyme';
import AddCommentForm from './AddCommentForm';

const onSubmit = jest.fn();
const closeModal = false;

const wrapper = mount(<AddCommentForm onSubmit={onSubmit} closeModal={closeModal} />);

describe('<AddCommentForm />', () => {
  it('should render Formik form component properly', () => {
    expect(wrapper.find('Formik').exists()).toBe(true);
  });

  it('should correctly shows empty initialValue in form input', () => {
    expect(
      wrapper.find('[data-test="addCommentInput"]').simulate('change', { target: { value: '' } })
    );
  });

  it('should render exact number of form rows', () => {
    expect(wrapper.find('[data-test="FormRow"]')).toHaveLength(12);
  });
});
