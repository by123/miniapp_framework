import { Button } from "@tarojs/components";
import { CSSProperties } from "react";
import "./index.scss";

interface ByButtonProps {
  className?: string
  styles?: CSSProperties;
  title?: string;
  lightStyle?: boolean;
  darkStyle?: boolean;
  disableStyle?: boolean;
  nobgStyle?: boolean;
  onClick?: () => void;
}
const ByButton = (props: ByButtonProps) => {
  const onButtonClick = () => {
    if (!props.nobgStyle) {
      props.onClick && props.onClick();
    }
  };

  const getButtonStyle = () => {
    const { lightStyle, darkStyle, disableStyle, nobgStyle } = props;
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
    <Button
      className={getButtonStyle()}
      style={props.styles}
      hoverClass='btn_hover'
      disabled={props.nobgStyle}
      onClick={onButtonClick}
    >
      {props.title}
    </Button>
  );
};

export default ByButton;
