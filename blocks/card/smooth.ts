import { Preset } from '../types';

const html = `
<div class="card">
    Card
</div>`;

const css = `
.card {
    background: #ffffff;
    color: rgba(0,0,0,.65);
    box-shadow: 1px 3px 8px #dedede;
}
.card:hover {
    box-shadow: 3px 5px 12px #dedede;
}
`;

const smooth: Preset = {
  id: 'smooth',
  name: 'Smooth',
  html: html,
  styles: css,
};

export default smooth;
