import { Preset } from '../types';

const html = `
<button class="button">
    Button
</button>`;

const css = `
.button {
    background: #0fbcf9;
    color: #ffffff;
    padding: 10px;
    font-size: 24px;
    border: none;
}
.button:hover {
    background: #27ae60;
}
`;

const smooth: Preset = {
  id: 'smooth',
  name: 'Smooth',
  html: html,
  styles: css,
};

export default smooth;
