import { Preset } from '../types';

const html = `
<div class="card">
    Card
</div>`;

const css = `
.card {
    background: #ffffff;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
    padding: 1.25rem;
}
`;

const bootstrap: Preset = {
  id: 'bootstrap',
  name: 'Bootstrap',
  html: html,
  styles: css,
};

export default bootstrap;
