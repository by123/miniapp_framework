import { View, Text, Image } from "@tarojs/components";
import { CSSProperties } from "react";
import "./index.scss";

interface ByTextProps {
  className?: string;
  styles?: CSSProperties;
  //文字
  title: string;
  size: number;
  //图片
  imgSrc?: string;
  imageSize?: number;
  onClick?: () => void;
  //需要图片和文字，定义图片方向
  imageLeft?: boolean;
  imageRight?: boolean;
  imageTop?: boolean;
  imageBottom?: boolean;
  imageNone?: boolean;
}

const renderImage = (props: ByTextProps) => {
  return (
    <Image
      src={props.imgSrc || ""}
      style={{ width: props.imageSize || 20, height: props.imageSize || 20 }}
    ></Image>
  );
};

const ByText = (props: ByTextProps) => {
  const { imageLeft, imageRight, imageTop, imageBottom } = props;
  const getImageDirector = () => {
    if (imageLeft) {
      return "image_left";
    }
    if (imageRight) {
      return "image_right";
    }
    if (imageTop) {
      return "image_top";
    }
    if (imageBottom) {
      return "image_bottom";
    }
    return "image_none";
  };

  return (
    <View className={getImageDirector()}>
      {(imageLeft || imageTop) && renderImage(props)}
      <Text
        style={{
          fontSize: props.size,
          ...props.styles,
        }}
        className={props.className}
      >
        {props.title}
      </Text>
      {(imageRight || imageBottom) && renderImage(props)}
    </View>
  );
};

export default ByText;
