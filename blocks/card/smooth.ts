import { Preset } from '../types';

const smooth: Preset = {
  id: 'smooth',
  name: 'Smooth',
  styles: {
    root: {
      'background': '#ffffff',
      'cursor': 'pointer',
      'box-shadow': '1px 3px 8px #dedede',
    },
    hover: {
      'box-shadow': '3px 5px 12px #dedede',
    },
  },
};

export default smooth;
