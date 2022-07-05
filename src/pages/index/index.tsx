import { Component } from "react";
import { Text } from "@tarojs/components";
import "./index.scss";
import { registerEvent } from "../../common/event";
import Api from "../../common/api";
import { openPage } from "../../common/util";
import Constant from "../../common/constant";
import ByButton from "../../component/by_btn";
import Screen from ".";

export default class Index extends Component {
  componentWillMount() {
    registerEvent("by666", {
      onEvent: (value) => {
        console.log(value);
      },
    });
    const params = {};
    Api.wxLogin(params);
  }

  openLoginPage() {
    openPage(Constant.PAGE_LOGIN);
  }

  openAboutPage() {
    openPage(Constant.PAGE_ABOUT);
  }

  render() {
    return (
      <Screen>
        <Text>1111</Text>
        <ByButton title='登录' onClick={this.openLoginPage} />
        <ByButton title='关于' onClick={this.openAboutPage} />
      </Screen>
    );
  }
}
