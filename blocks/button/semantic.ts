import { Preset } from '../types';

const html = `
<button class="button">
    Button
</button>`;

const css = `
.button {
    box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset;
    background-color: #2185d0;
    color: #ffffff;
    text-shadow: none;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    padding: .78571429em 1.5em .78571429em;
    outline: 0;
    vertical-align: baseline;
    font-weight: 700;
    border-radius: .28571429rem;
}
`;

const semantic: Preset = {
  id: 'semantic',
  name: 'Semantic',
  html: html,
  styles: css,
};

export default semantic;
