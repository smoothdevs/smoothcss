import { useState } from 'react';
import { createContainer } from 'unstated-next';

import { Styles } from '../blocks/types';

const Playground = () => {
  const [component, setComponent] = useState<string>('button');
  const [preset, setPreset] = useState<string>('smooth');
  const [styles, setStyles] = useState<Styles>({ root: {}, hover: {} });

  return {
    styles,
    setStyles,
    preset,
    setPreset,
    component,
    setComponent,
  };
};

export default createContainer(Playground);
