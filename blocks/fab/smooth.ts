import { Preset } from '../types';

const smooth: Preset = {
  id: 'smooth',
  name: 'Smooth',
  styles: {
    root: {
      'border-radius': '50%',
      'height': '56px',
      'width': '56px',
      'line-height': '56px',
      'box-shadow': '1px 3px 8px #dedede',
      'background': '#0fbcf9',
      'color': '#ffffff',
    },
    hover: {
      'box-shadow': '3px 5px 12px #dedede',
    },
    active: {},
  },
};

export default smooth;
