import { rem } from 'polished';
// eslint-disable-next-line
let modalStyle = {};

if (window.innerWidth > 500) {
  modalStyle = {
    content: {
      width: `${rem(600)}`,
      height: `${rem(500)}`,
      left: `calc(50% - ${rem(300)})`,
      top: `calc(50% - ${rem(250)})`
    }
  };
} else {
  modalStyle = {
    content: {
      width: '80%',
      height: `${rem(500)}`,
      left: '5%',
      top: `calc(50% - ${rem(250)})`,
      'max-width': `${rem(600)}`
    }
  };
}

export default modalStyle;
