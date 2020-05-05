import React from 'react';
import { create } from 'react-test-renderer';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

describe('Loading spinner component', () => {
  test('it matches the snapshot', () => {
    const component = create(<LoadingSpinner />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
