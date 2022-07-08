import { Component } from "react";
import "./index.scss";
import { registerEvent } from "../../common/event";
import Api from "../../common/api";
import { openPage, Trans } from "../../common/util";
import Constant from "../../common/constant";
import Screen from "../index";
import { FlexView, TextView, Button, ListView } from "../../component";
import P from "../../style";
import { View } from "@tarojs/components";

export default class Index extends Component {
  datas = ['', '', ''];
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

  renderItem = (item) => {
    return (
      <FlexView row justifySpaceBetween bottomLine padding={15} backgroudColor={P.c_bord_dark}  height={50}>
        <FlexView >
          <TextView title='123456778' size={Trans(P.s_noraml)}></TextView>
          <TextView title='abc' size={Trans(P.s_big_3)}></TextView>
        </FlexView>
        <Button darkStyle className='btn_commit' title='提交' width={80} height={40}></Button>
      </FlexView>
    );
  };
  render() {
    return (
      <Screen>
        <ListView datas={this.datas} renderItem={this.renderItem} />
      </Screen>
    );
  }
}
