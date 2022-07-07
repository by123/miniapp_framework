import { Component } from "react";
import "./index.scss";
import { registerEvent } from "../../common/event";
import Api from "../../common/api";
import { getStorageSync, openPage } from "../../common/util";
import Constant from "../../common/constant";
import Screen from "../index";
import {$28, $48} from "../../style.scss";
import {FlexView, TextView, Button, ListView} from '../../component'

export default class Index extends Component {
  datas = ['','','','','','','','','','','','','','','','','','','',]
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
    const screenWidth = getStorageSync(Constant.KEY_SCREEN_WIDTH)
    return (
      <FlexView row justifyCenter styles={{width: screenWidth+ 'px', height: '100px'}}>
        <FlexView>
          <TextView title='123456778' size={16}></TextView>
          <TextView title='abc' size={20}></TextView>
        </FlexView>
        <Button title='提交' darkStyle styles={{width: '200rpx', height:'80rpx'}}></Button>
      </FlexView>
    )
  }
  render() {
    return (
      <Screen>
        <ListView datas={this.datas} renderItem={this.renderItem} />
      </Screen>
    );
  }
}
