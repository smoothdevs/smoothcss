import * as CSS from 'csstype';

export type CSSProperties = CSS.Properties<string | number>;

export interface StyleSheet {
  [key: string]: StyleSheet | string | number | undefined;
}

export interface Styles {
  root: StyleSheet;
  hover: StyleSheet;
  active: StyleSheet;
}

export enum BlocksSet {
  BUTTON = 'button',
  INPUT = 'input',
  CARD = 'card',
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
  styles: Styles;
}

export enum PresetSet {
  SMOOTH = 'smooth',
  MATERIAL = 'material',
  MATERIAL_OUTLINED = 'material_outlined',
}

export type PresetArray = {
  [index in PresetSet]?: Preset;
};
