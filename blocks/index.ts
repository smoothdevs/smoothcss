import buttonPresets from './button';
import inputPresets from './input';
import { Blocks } from './types';

const blocks: Blocks = {
  button: {
    name: 'Button',
    id: 'button',
    presets: buttonPresets,
  },
  input: {
    name: 'Input',
    id: 'input',
    presets: inputPresets,
  },
};

export default blocks;
