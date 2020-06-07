import React, { useState } from 'react';
import { Flex, Box } from 'reflexbox';
import Editor from 'react-simple-code-editor';
import Highlight, { Prism, Language } from 'prism-react-renderer';
import { MdContentCopy } from 'react-icons/md';
import theme from './theme';

import { ControlPanelStyled, StyledEditor } from './styles';
import PlaygroundStore from '@stores/playground';
import Select from '../Select';
import { PresetSet } from '@blocks/types';
import Label from '../Label';
import copyToClipboard from '@utils/copyUtil';
import Toast from '@components/Toast';

const ControlPanel: React.FC = () => {
  const [toastProps, setToastProps] = useState({ open: false, content: '' });
  const playground = PlaygroundStore.useContainer();

  const EditorStyles = {
    background: '#000000',
    caretColor: '#ffffff',
  };

  const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    playground.setPreset(e.target.value as PresetSet);
  };

  const showToastMessage = (message: string) => {
    setToastProps({ open: true, content: message });
    window.setTimeout(() => {
      setToastProps({ open: false, content: message });
    }, 1000);
  };

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { styles, html } = playground;
    const { id } = e.target as HTMLButtonElement;
    copyToClipboard(id === 'copy-html' ? html : styles);
    showToastMessage('📋 Copied!');
  };

  const highlightCode = (code: string, language: Language) => (
    <Highlight Prism={Prism} code={code} theme={theme} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <>
          {tokens.map((line, i) => (
            // eslint-disable-next-line react/jsx-key
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // eslint-disable-next-line react/jsx-key
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </>
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
      <Box mb={20} maxHeight='110px'>
        <Box maxHeight='80px'>
          <StyledEditor html={true}>
            <Editor
              value={playground.html}
              padding={10}
              highlight={(code) => highlightCode(code, 'jsx')}
              onValueChange={(code) => playground.setHtml(code)}
              style={EditorStyles}
            />
          </StyledEditor>
        </Box>
        <Box mt={10}>
          <button id='copy-html' onClick={handleCopy}>
            <MdContentCopy />
            Copy HTML
          </button>
        </Box>
      </Box>
      <Box mt={20}>
        <StyledEditor html={false}>
          <Editor
            value={playground.styles}
            padding={10}
            highlight={(code) => highlightCode(code, 'css')}
            onValueChange={(code) => playground.setStyles(code)}
            style={EditorStyles}
          />
        </StyledEditor>
        <Box mt={10}>
          <button id='copy-css' onClick={handleCopy}>
            <MdContentCopy />
            Copy CSS
          </button>
        </Box>
      </Box>
      <Toast open={toastProps.open} content={toastProps.content} />
    </ControlPanelStyled>
  );
};

export default ControlPanel;
