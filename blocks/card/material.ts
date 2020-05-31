import { Preset } from '../types';

const html = `
<div class="card">
    Card
</div>`;

const css = `
.card {
    background: #ffffff;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    border-radius: 4px;
}
`;

const material: Preset = {
  id: 'material',
  name: 'Material UI',
  html: html,
  styles: css,
};

export default material;
