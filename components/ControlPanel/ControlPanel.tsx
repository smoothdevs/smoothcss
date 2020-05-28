import React from 'react';
import { Flex, Box } from 'reflexbox';
import set from 'lodash/set';

import { ControlPanelStyled } from './styles';
import PlaygroundStore from '../../stores/playground';
import PanelTitle from '../PanelTitle';
import Input from '../Input';
import Select from '../Select';
import { PresetSet } from '../../blocks/types';

const ControlPanel: React.FC = () => {
  const playground = PlaygroundStore.useContainer();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const temp = { ...playground.styles };
    playground.setStyles(set(temp, name, value));
  };

  const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    playground.setPreset(e.target.value as PresetSet);
  };

  if (!playground.presets) return null;

  return (
    <ControlPanelStyled>
      <Flex mb={10}>
        <Box width={1 / 2}>
          <label>Presets</label>
        </Box>
        <Box width={1 / 2}>
          <Select onChange={handlePresetChange} value={playground.preset}>
            {Object.entries(playground.presets).map((i) => {
              const key = i[0];
              const value = i[1];
              if (!value) return null;
              return (
                <option key={key} value={key}>
                  {value.name}
                </option>
              );
            })}
          </Select>
        </Box>
      </Flex>
      {Object.entries(playground.styles).map((i) => {
        const style = i[0];
        const sheet = i[1];
        return (
          <div key={style}>
            <Box>
              <PanelTitle>{style}</PanelTitle>
            </Box>
            <Box>
              {Object.entries(sheet).map((k) => {
                const key = k[0];
                const value = k[1];
                return (
                  <Flex key={key} my={10}>
                    <Box width={1 / 2}>
                      <label>{key}</label>
                    </Box>
                    <Box width={1 / 2}>
                      <Input
                        value={value as string}
                        name={`${style}.${key}`}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                      />
                    </Box>
                  </Flex>
                );
              })}
            </Box>
          </div>
        );
      })}
    </ControlPanelStyled>
  );
};

export default ControlPanel;
