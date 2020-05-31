import { Preset } from '../types';

const html = `
<div class="fab">
    FAB
</div>`;

const css = `
.fab {
    border-radius: 50%;
    height: 56px;
    width: 56px;
    line-height: 56px;
    box-shadow: 1px 3px 8px #dedede;
    background: #0fbcf9;
    color: #ffffff;
    text-align: center;
}
.fab:hover {
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
