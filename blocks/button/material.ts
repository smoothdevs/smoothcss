import { Preset } from '../types';

const material: Preset = {
  id: 'material',
  name: 'Material UI',
  styles: {
    root: {
      'background': '#1976d2',
      'padding': '6px 16px',
      'cursor': 'pointer',
      'color': '#ffffff',
      'font-size': '32px',
      'box-shadow':
        '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
      'border': 'none',
      'font-weight': '500',
      'line-height': '1.75',
      'border-radius': '4px',
      'letter-spacing': '0.02857em',
    },
    hover: {
      background: '#1976d2',
    },
  },
};

export default material;
