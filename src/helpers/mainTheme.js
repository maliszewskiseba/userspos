import { rem } from 'polished';

const mainTheme = {
  font: {
    family: '"Montserrat", sans-serif',
    sizeSm: `${rem(12)}`,
    sizeNormal: `${rem(14)}`,
    sizeBig: `${rem(18)}`,
    sizeLarge: `${rem(24)}`,
    weightLight: '300',
    weightNormal: '400',
    weightBold: '600',
    weightFat: '800'
  },
  border: {
    light: `${rem(1)} solid rgba(0,0,0,0.1)`,
    normal: `${rem(1)} solid rgba(0,0,0,0.4)`,
    bold: `${rem(1)} solid rgba(0,0,0,0.9)`
  },
  shadow: {
    light: `${rem(5)} ${rem(5)} ${rem(15)} rgba(138, 106, 108, 0.1)`,
    normal: `${rem(1)} ${rem(4)} ${rem(15)} rgba(150, 150, 150, 0.2);`
  },
  colors: {
    blue: '#3498DB',
    red: '#e05353',
    green: '#00bf00',
    white: 'white'
  },
  transition: { standardButton: 'all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1)' },
  width: { max: `${rem(1200)}` }
};

export default mainTheme;
