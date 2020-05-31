import { Preset } from '../types';

const html = `
<button class="button">
    Button
</button>`;

const css = `
.button {
  background: transparent;
  padding: 5px 15px;
  color: #1976d2;
  border: 1px solid rgba(25, 118, 210, 0.5);
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
}
.button:hover {
  border: 1px solid #1976d2;
}
`;

const material_outlined: Preset = {
  id: 'material_outlined',
  name: 'Material UI Outlined',
  html: html,
  styles: css,
};

export default material_outlined;
