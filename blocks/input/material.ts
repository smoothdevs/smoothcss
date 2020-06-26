import { Preset } from '../types';

const html = `
<input class="input" placeholder="Input" />
`;

const css = `
.input {
    height: 1.1876em;
    font-size: 1rem;
    outline: 0;
    border: none;
    padding: 6px 0 7px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
}
`;

const material: Preset = {
  id: 'material',
  name: 'Material UI',
  html: html,
  styles: css,
};

export default material;
