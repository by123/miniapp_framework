import { Button, View } from "@tarojs/components";
import "./index.scss";

interface ByButtonProps {
  title?: string;
  titleColor?: string;
  bgColor?: string;
  corner?: number;
  isBottom?: boolean;
  onClick?: () => void;
}
const ByButton = (props: ByButtonProps) => {
  const onButtonClick = () => {
    props.onClick && props.onClick();
  };
  return (
    <View className='btn_layout'>
      <Button className='btn' onClick={onButtonClick}>
        {props.title}
      </Button>
    </View>
  );
};

export default ByButton;
