import { Preset } from '../types';

const html = `
<input class="input" placeholder="Input" />
`;

const css = `
.input {
    background: #ffffff;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.input:focus {
    outline: 0;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
}
`;

const bootstrap: Preset = {
  id: 'bootstrap',
  name: 'Bootstrap',
  html: html,
  styles: css,
};

export default bootstrap;
