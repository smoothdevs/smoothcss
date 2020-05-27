import React from 'react';

import { PanelTitleStyled } from './styles';

const PanelTitle: React.FC = ({ children }) => {
  return <PanelTitleStyled>{children}</PanelTitleStyled>;
};

export default PanelTitle;
