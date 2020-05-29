import { Preset } from '../types';

const material: Preset = {
  id: 'material',
  name: 'Material UI',
  styles: {
    root: {
      'background': '#1976d2',
      'padding': '6px 16px',
      'color': '#ffffff',
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
    active: {
      'box-shadow':
        '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
      'border': 'none',
    },
  },
};

export default material;
