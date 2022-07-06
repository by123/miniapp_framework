import { View } from "@tarojs/components";
import Taro, { getStorageSync } from "@tarojs/taro";
import { Component, CSSProperties } from "react";
import { byLog, isEmpty } from "../common/util";
import Constant from "../common/constant";
import "./index.scss";

class Screen extends Component {
  componentWillMount() {
    this.showPageStack();
  }

  showPageStack() {
    const pages = Taro.getCurrentPages();
    let pageStack = "";
    if (!isEmpty(pages)) {
      pages.map((item) => {
        pageStack += item.route.split('/')[1] + "-->";
      });
      byLog("当前页面栈：" + pageStack);
    }
  }
  render() {
    const style: CSSProperties = {
      width: getStorageSync(Constant.KEY_SCREEN_WIDTH) + "px",
      height: getStorageSync(Constant.KEY_SCREEN_HEIGHT) + "px",
    };
    return (
      <View className='layout' style={style}>
        {this.props.children ? this.props.children : null}
      </View>
    );
  }
}

export default Screen
