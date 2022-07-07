import { View } from "@tarojs/components";
import { CSSProperties } from "react";
import "./index.scss";

interface ByListViewProps {
  className?: string;
  styles?: CSSProperties;
  datas: any[];
  renderItem: (item) => JSX.Element;
}

const ByListView = (props: ByListViewProps) => {
  return (
    <View className={props.className} style={props.styles}>
      {props.datas.map((item) => {
        return props.renderItem(item);
      })}
    </View>
  );
};

export default ByListView;
