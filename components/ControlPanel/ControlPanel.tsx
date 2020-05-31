import React from 'react';
import { Flex, Box } from 'reflexbox';
import Editor from 'react-simple-code-editor';
import Highlight, { Prism, defaultProps, Language } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';

import { ControlPanelStyled } from './styles';
import PlaygroundStore from '../../stores/playground';
import Select from '../Select';
import { PresetSet } from '../../blocks/types';
import Label from '../Label';

const ControlPanel: React.FC = () => {
  const playground = PlaygroundStore.useContainer();

  const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    playground.setPreset(e.target.value as PresetSet);
  };

  const highlightCode = (code: string, language: Language) => (
    <Highlight {...defaultProps} Prism={Prism} code={code} theme={theme} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} key={i}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} key={key} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );

  if (!playground.presets) return null;

  return (
    <ControlPanelStyled>
      <Flex mb={20}>
        <Box width={1 / 2}>
          <Label>Presets</Label>
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
      <Box mb={20}>
        <Editor
          value={playground.html}
          highlight={(code) => highlightCode(code, 'jsx')}
          onValueChange={(code) => playground.setHtml(code)}
        />
      </Box>
      <Box>
        <Editor
          value={playground.styles}
          highlight={(code) => highlightCode(code, 'css')}
          onValueChange={(code) => playground.setStyles(code)}
        />
      </Box>
    </ControlPanelStyled>
  );
};

export default ControlPanel;
