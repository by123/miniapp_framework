import { Button, View } from "@tarojs/components";
import "./index.scss";

export enum ByButtonStyle{
  Light = 'btn_light',
  Dark = 'btn_dark',
}
interface ByButtonProps {
  title?: string;
  btnStyle: ByButtonStyle;
  corner?: number;
  onClick?: () => void;
}
const ByButton = (props: ByButtonProps) => {
  const onButtonClick = () => {
    props.onClick && props.onClick();
  };
  return (
    <View className='btn_layout'>
      <Button
        className={props.btnStyle}
        onClick={onButtonClick}
      >
        {props.title}
      </Button>
    </View>
  );
};

export default ByButton;
