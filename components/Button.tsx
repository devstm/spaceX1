import { Button } from 'antd';

interface IProps {
  text: string;
  icon: any;
  onClick: () => void;
}
  
function MyButton({text, icon, onClick}: IProps) {
  return (
    <Button type='primary' onClick={onClick} icon={icon} size='large'>
      {text}
    </Button>
  );
}

export default MyButton;
