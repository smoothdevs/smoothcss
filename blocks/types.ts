import * as CSS from 'csstype';

export type CSSProperties = CSS.Properties<string | number>;

export interface StyleSheet {
  [key: string]: StyleSheet | string | number | undefined;
}

export interface Styles {
  root: StyleSheet;
  hover: StyleSheet;
}

export interface Blocks {
  [index: string]: {
    name: string;
    id: string;
    presets: PresetSet;
  };
}

export interface Preset {
  id: string;
  name: string;
  styles: Styles;
}

export interface PresetSet {
  [index: string]: Preset;
}
