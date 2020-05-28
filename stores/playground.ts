import { useState } from 'react';
import { createContainer } from 'unstated-next';

import { Styles, BlocksSet, PresetArray, PresetSet } from '../blocks/types';

const Playground = () => {
  const [component, setComponent] = useState<string>(BlocksSet.BUTTON);
  const [preset, setPreset] = useState<PresetSet>(PresetSet.SMOOTH);
  const [styles, setStyles] = useState<Styles>({ root: {}, hover: {} });
  const [presets, setPresets] = useState<PresetArray>();

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
