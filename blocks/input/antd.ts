import { Preset } from '../types';

const html = `
<input class="input" placeholder="Input" />
`;

const css = `
.input {
    background: #ffffff;
    padding: 4px 11px;
    font-size: 14px;
    line-height: 1.5715;
    color: rgba(0,0,0,.65);
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all .3s;
}
.input:focus {
    outline: 0;
    border-color: #40a9ff;
    border-right-width: 1px!important;
    box-shadow: 0 0 0 2px rgba(24,144,255,.2);
}
`;

const antd: Preset = {
  id: 'antd',
  name: 'Ant Design',
  html: html,
  styles: css,
};

export default antd;
