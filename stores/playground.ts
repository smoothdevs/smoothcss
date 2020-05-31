import { useState } from 'react';
import { createContainer } from 'unstated-next';

import { BlocksSet, PresetArray, PresetSet } from '../blocks/types';

const Playground = () => {
  const [component, setComponent] = useState<string>(BlocksSet.BUTTON);
  const [preset, setPreset] = useState<PresetSet>(PresetSet.SMOOTH);
  const [html, setHtml] = useState<string>(``);
  const [styles, setStyles] = useState<string>(``);
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
    html,
    setHtml,
  };
};

export default createContainer(Playground);
