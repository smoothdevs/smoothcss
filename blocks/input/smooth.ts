import { Preset } from '../types';

const smooth: Preset = {
  id: 'smooth',
  name: 'Smooth',
  styles: {
    root: {
      'padding': '4px',
      'font-size': '16px',
      'border': '1px solid rgba(34,36,38,.15)',
      'border-radius': '.28571429rem',
      'background': '#fafafa',
    },
    hover: {},
    active: {
      'border-color': '#0fbcf9',
    },
  },
};

export default smooth;
