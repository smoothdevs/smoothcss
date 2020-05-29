import { Preset } from '../types';

const material: Preset = {
  id: 'material',
  name: 'Material UI',
  styles: {
    root: {
      'border-radius': '50%',
      'height': '56px',
      'width': '56px',
      'line-height': '56px',
      'font-weight': '500',
      'box-shadow':
        '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
      'background': '#1976d2',
      'color': '#ffffff',
    },
    hover: {
      'box-shadow': '3px 5px 12px #dedede',
    },
    active: {
      'box-shadow':
        '0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12)',
    },
  },
};

export default material;
