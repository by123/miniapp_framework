import { View } from "@tarojs/components";
import { Component, CSSProperties } from "react";
import P from "../../style";
import "./index.scss";

export interface ByFlexViewProps {
  className?: string;
  styles?: CSSProperties;
  row?: boolean;
  backgroudColor?: string;
  alignCenter?: boolean;
  alignFlexStart?: boolean;
  alignFlexEnd?: boolean;
  alignBaseline?: boolean;
  justifyCenter?: boolean;
  justifySpaceBetween?: boolean;
  justifySpaceAround?: boolean;
  justifyFlexStart?: boolean;
  justifyFlexEnd?: boolean;
  marginTop?: number;
  marginLeft?: number;
  marginBottom?: number;
  marginRight?: number;
  margin?: number;
  paddingTop?: number;
  paddingLeft?: number;
  paddingBottom?: number;
  paddingRight?: number;
  padding?: number;
  topLine?: boolean;
  bottomLine?: boolean;
  width?: number;
  height?: number;
}

class ByFlexView extends Component<ByFlexViewProps> {
  alignItemsValue = (props: ByFlexViewProps) => {
    const { alignBaseline, alignCenter, alignFlexEnd, alignFlexStart } = props;
    if (alignCenter) {
      return "center";
    }
    if (alignFlexStart) {
      return "flex-start";
    }
    if (alignFlexEnd) {
      return "flex-end";
    }
    if (alignBaseline) {
      return "baseline";
    }
    return "";
  };

  justifyContentValue = (props: ByFlexViewProps) => {
    const {
      justifySpaceBetween,
      justifySpaceAround,
      justifyFlexStart,
      justifyFlexEnd,
      justifyCenter,
    } = props;
    if (justifySpaceBetween) {
      return "space-between";
    }
    if (justifySpaceAround) {
      return "space-around";
    }
    if (justifyFlexStart) {
      return "flex-start";
    }
    if (justifyFlexEnd) {
      return "flex-end";
    }
    if (justifyCenter) {
      return "center";
    }
    return "";
  };

  bottomLineValue = (props: ByFlexViewProps) => {
    const { bottomLine } = props;
    if (bottomLine) {
      return P.w_line + "rpx " + P.c_line + " solid";
    }
  };

  topLineValue = (props: ByFlexViewProps) => {
    const { topLine } = props;
    if (topLine) {
      return P.w_line + "rpx " + P.c_line + " solid";
    }
  };

  render() {
    const {
      row,
      className,
      backgroudColor,
      styles,
      children,
      marginLeft,
      marginRight,
      marginBottom,
      marginTop,
      margin,
      padding,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingBottom,
      width,
      height,
    } = this.props;
    return (
      <View
        className={className}
        style={{
          display: "flex",
          alignItems: this.alignItemsValue(this.props),
          justifyContent: this.justifyContentValue(this.props),
          backgroundColor: backgroudColor,
          flexDirection: row ? "row" : "column",
          borderBottom: this.bottomLineValue(this.props),
          borderTop: this.topLineValue(this.props),
          marginLeft: marginLeft,
          marginRight: marginRight,
          marginTop: marginTop,
          marginBottom: marginBottom,
          margin: margin,
          paddingLeft: paddingLeft,
          paddingRight: paddingRight,
          paddingTop: paddingTop,
          paddingBottom: paddingBottom,
          padding: padding,
          width: width,
          height: height,
          ...styles,
        }}
      >
        {children}
      </View>
    );
  }
}

export default ByFlexView;
