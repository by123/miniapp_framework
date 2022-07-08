import { Text, View } from "@tarojs/components";
import { CSSProperties } from "react";
import "./index.scss";

interface ByButtonProps {
  className?: string
  styles?: CSSProperties;
  title: string;
  lightStyle?: boolean;
  darkStyle?: boolean;
  disableStyle?: boolean;
  nobgStyle?: boolean;
  width?: number;
  height?: number;
  onClick?: () => void;
}
const ByButton = (props: ByButtonProps) => {

  const { lightStyle, darkStyle, disableStyle, nobgStyle, width, height} = props;

  const onButtonClick = () => {
    if (!props.nobgStyle) {
      props.onClick && props.onClick();
    }
  };

  const getButtonStyle = () => {
    if (lightStyle) {
      return "btn_light";
    }
    if (darkStyle) {
      return "btn_dark";
    }
    if (disableStyle) {
      return "btn_disable";
    }
    if (nobgStyle) {
      return "btn_nobg";
    }
    return "btn_dark";
  };

  return (
    <View
      className={getButtonStyle()}
      style={{
          ...props.styles,
          width: width ,
          height: height ,
          textAlign: 'center',
          borderRadius: 8,
          display: "flex",
          alignItems: 'center',
          justifyContent: 'center',
      }}
      hoverClass='btn_hover'
      onClick={onButtonClick}
    >
      <Text >{props.title}</Text>
    </View>
  );
};

export default ByButton;
