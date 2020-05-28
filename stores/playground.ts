import { useState } from 'react';
import { createContainer } from 'unstated-next';

import { Styles, PresetSet } from '../blocks/types';

const Playground = () => {
  const [component, setComponent] = useState<string>('button');
  const [preset, setPreset] = useState<string>('smooth');
  const [styles, setStyles] = useState<Styles>({ root: {}, hover: {} });
  const [presets, setPresets] = useState<PresetSet>();

  return {
    styles,
    setStyles,
    preset,
    setPreset,
    component,
    setComponent,
    presets,
    setPresets,
  };
};

export default createContainer(Playground);
