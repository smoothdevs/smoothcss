import { Toast } from './styles';

interface Props {
  open: boolean;
  content: string;
}
const Snackbar = ({ open, content }: Props) => {
  return <Toast open={open}>{content}</Toast>;
};

export default Snackbar;
