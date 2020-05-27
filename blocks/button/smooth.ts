import { Preset } from '../types';

const smooth: Preset = {
  id: 'smooth',
  name: 'smooth',
  styles: {
    root: {
      'background': '#2ecc71',
      'padding': '10px',
      'cursor': 'pointer',
      'color': '#ffffff',
      'font-size': '32px',
      'box-shadow': '3px 3px 8px #dedede',
      'border': 'none',
    },
    hover: {
      background: '#27ae60',
    },
  },
};

export default smooth;
