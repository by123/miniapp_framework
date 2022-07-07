import { Component } from "react";
import "./index.scss";
import { registerEvent } from "../../common/event";
import Api from "../../common/api";
import { openPage } from "../../common/util";
import Constant from "../../common/constant";
import Screen from "../index";
import "../../style.scss";
import ByText, { ByTextDirect, ByTextStyle } from "../../component/by_text";

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
        <ByText title='测试' director={ByTextDirect.ImageTop} imgSrc={Constant.IMG_2} styles={{color: '#ff00ff'}}></ByText>
      </Screen>
    );
  }
}
