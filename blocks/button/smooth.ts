import { Preset } from '../types';

const smooth: Preset = {
  id: 'smooth',
  name: 'Smooth',
  styles: {
    root: {
      'background': '#2ecc71',
      'padding': '10px',
      'color': '#ffffff',
      'box-shadow': '3px 3px 8px #dedede',
      'border': 'none',
    },
    hover: {
      background: '#27ae60',
    },
    active: {},
  },
};

export default smooth;
