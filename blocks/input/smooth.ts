import { Preset } from '../types';

const html = `
<input class="input" placeholder="Input" />
`;

const css = `
.input {
    background: #fafafa;
    padding: 4px;
    font-size: 16px;
    border: 1px solid rgba(34, 36, 38, 0.15);
    border-radius: 0.28rem;
}
`;

const smooth: Preset = {
  id: 'smooth',
  name: 'Smooth',
  html: html,
  styles: css,
};

export default smooth;
