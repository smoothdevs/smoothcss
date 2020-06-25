import { Preset } from '../types';

const html = `
<input class="input" placeholder="Input" />
`;

const css = `
.input {
    font-size: 1rem;
    outline: 0;
    line-height: 1.21428571em;
    padding: .67857143em 1em; 
    background: #ffffff;
    border: 1px solid rgba(34,36,38,.15);
    color: rgba(0, 0, 0, 0.87);
    border-radius: 1px solid rgba(34,36,38,.15);
}
`;

const semantic: Preset = {
  id: 'semantic',
  name: 'Semantic',
  html: html,
  styles: css,
};

export default semantic;
