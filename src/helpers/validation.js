import { ToastsStore } from 'react-toasts';

export const validateEmail = (value) => {
  if (!value) {
    ToastsStore.error('Email is required');
    return false;
  } if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    ToastsStore.error('Invalid email address');
    return false;
  }
  return true;
};

export const validateName = (value) => {
  if (!value) {
    ToastsStore.error('You need to pass your name');
    return false;
  }
  return true;
};

export const validateTitle = (value) => {
  if (!value) {
    ToastsStore.error("You need to pass post's title");
    return false;
  }
  return true;
};

export const validateBody = (value) => {
  if (!value) {
    ToastsStore.error('You need to type something in body section');
    return false;
  }
  return true;
};
