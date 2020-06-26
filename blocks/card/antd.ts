import { Preset } from '../types';

const html = `
<div class="card">
    Card
</div>`;

const css = `
.card {
    background: #ffffff;
    color: rgba(0,0,0,.65);
    border: 1px solid #f0f0f0;
    border-radius: 2px;
}
`;

const antd: Preset = {
  id: 'antd',
  name: 'Ant Design',
  html: html,
  styles: css,
};

export default antd;
