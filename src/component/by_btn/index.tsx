import { Button, View } from "@tarojs/components";
import { CSSProperties } from "react";
import "./index.scss";

export enum ByButtonStyle {
  Light = 'btn_light',
  Dark = 'btn_dark',
  Disable = 'btn_disable',
  NoBg = 'btn_nobg',
}
interface ByButtonProps {
  title?: string;
  btnStyle: ByButtonStyle;
  corner?: number;
  onClick?: () => void;
  styles?: CSSProperties;
}
const ByButton = (props: ByButtonProps) => {
  const onButtonClick = () => {
    if (props.btnStyle !== ByButtonStyle.Disable) {
      props.onClick && props.onClick();
    }
  };
  return (
    <Button
      className={props.btnStyle}
      style={props.styles}
      hoverClass='btn_hover'
      disabled={props.btnStyle === ByButtonStyle.Disable}
      onClick={onButtonClick}
    >
      {props.title}
    </Button>
  );
};

export default ByButton;
