import buttonPresets from './button';
import inputPresets from './input';
import cardPresets from './card';
import fabPresets from './fab';
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
  card: {
    name: 'Card',
    id: 'card',
    presets: cardPresets,
  },
  fab: {
    name: 'Floating Action Button',
    id: 'fab',
    presets: fabPresets,
  },
};

export default blocks;
