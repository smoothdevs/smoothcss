import { Preset } from '../types';

const html = `
<div class="card">
    Card
</div>`;

const css = `
.card {
    background: #ffffff;
    border: none;
    border-radius: .28571429rem;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    transition: box-shadow .1s ease,transform .1s ease,-webkit-box-shadow .1s ease,-webkit-transform .1s ease;
}
`;

const semantic: Preset = {
  id: 'semantic',
  name: 'Semantic',
  html: html,
  styles: css,
};

export default semantic;
