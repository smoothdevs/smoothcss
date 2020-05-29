import { Preset } from '../types';

const material_outlined: Preset = {
  id: 'material_outlined',
  name: 'Material UI Outlined',
  styles: {
    root: {
      'background': 'transparent',
      'padding': '5px 15px',
      'color': '#1976d2',
      'font-weight': '500',
      'line-height': '1.75',
      'border-radius': '4px',
      'letter-spacing': '0.02857em',
      'border': '1px solid rgba(25, 118, 210, 0.5)',
    },
    hover: {
      border: '1px solid #1976d2',
    },
    active: {},
  },
};

export default material_outlined;
