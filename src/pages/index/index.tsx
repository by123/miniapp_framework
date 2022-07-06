import { Component } from "react";
import { Button, Text } from "@tarojs/components";
import "./index.scss";
import { registerEvent } from "../../common/event";
import Api from "../../common/api";
import { openPage } from "../../common/util";
import Constant from "../../common/constant";
import ByButton, { ByButtonStyle } from "../../component/by_btn";
import Screen from "../index";
import "../../style.scss";

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
        <ByButton title='button 1' btnStyle={ByButtonStyle.Light} onClick={this.openLoginPage} styles={{marginTop: '20px'}} />
        <ByButton title='button 2' btnStyle={ByButtonStyle.Dark} onClick={this.openAboutPage} styles={{marginTop: '20px'}} />
        <ByButton title='button 3' btnStyle={ByButtonStyle.Disable} onClick={this.openAboutPage} styles={{marginTop: '20px'}} />
        <ByButton title='button 4' btnStyle={ByButtonStyle.NoBg} onClick={this.openAboutPage} styles={{marginTop: '20px'}} />
      </Screen>
    );
  }
}
