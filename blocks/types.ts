export enum BlocksSet {
  BUTTON = 'button',
  INPUT = 'input',
  CARD = 'card',
  FAB = 'fab',
}

export type Blocks = {
  [index in BlocksSet]: {
    name: string;
    id: string;
    presets: PresetArray;
  };
};

export interface Preset {
  id: string;
  name: string;
  html: string;
  styles: string;
}

export enum PresetSet {
  SMOOTH = 'smooth',
  MATERIAL = 'material',
  MATERIAL_OUTLINED = 'material_outlined',
  ANTD = 'antd',
  BOOTSTRAP = 'bootstrap',
}

export type PresetArray = {
  [index in PresetSet]?: Preset;
};
