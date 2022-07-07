import { View, Text, Image, ImageProps } from "@tarojs/components";
import { CSSProperties } from "react";
import "./index.scss";

export enum ByTextDirect {
  ImageLeft = "image_left",
  ImageRight = "image_right",
  ImageTop = "image_top",
  ImageBottom = "image_bottom",
  ImageNone = 'image_none'
}
interface ByTextProps {
  className?: string,
  title?: string;
  imageSize?: number;
  //需要图片和文字，定义图片方向
  director?: ByTextDirect;
  imgSrc?: string;
  styles?: CSSProperties;
  onClick?: () => void;
}

const renderImage = (props: ByTextProps) => {
  return (
    <Image
      src={props.imgSrc || ''}
      style={{ width: props.imageSize || 20, height: props.imageSize || 20}}
    ></Image>
  );
};
const ByText = (props: ByTextProps) => (
  <View className={props.director}>
    {(props.director === ByTextDirect.ImageLeft ||
      props.director === ByTextDirect.ImageTop) &&
      renderImage(props)}
    <Text style={props.styles} className={props.className}>{props.title}</Text>
    {(props.director === ByTextDirect.ImageRight ||
      props.director === ByTextDirect.ImageBottom) &&
      renderImage(props)}
  </View>
);

export default ByText;
