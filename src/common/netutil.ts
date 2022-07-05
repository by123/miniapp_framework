import Taro from "@tarojs/taro";
import Constant from "./constant";
import {
  byLog,
  getStorageSync,
  hideLoading,
  isEmpty,
  showLoading,
} from "./util";

const HTTP_TIMEOUT = 5000;
const getToken = () => {
  return getStorageSync(Constant.KEY_TOKEN);
};
const HTTP_HEADER = {
  "content-type": "application/json",
  authorization: getToken(),
};
const HTTP_GET = "GET";
const HTTP_POST = "POST";

export interface HttpCallback {
  success: (data) => void;
  fail: (errorMsg: string) => void;
}

const get = (url: string, params?: any, callback?: HttpCallback) => {
  return new Promise((resolve, reject) => {
    showLoading();
    if (checkEnv()) {
      Taro.request({
        url: url,
        method: HTTP_GET,
        data: params,
        header: HTTP_HEADER,
        timeout: HTTP_TIMEOUT,
        success: (res) => {
          hideLoading();
        },
      });
    } else {
      callback && callback.fail(Constant.MSG_NET_ERROR);
    }
  })
};

const post = (url: string, params?: any, callback?: HttpCallback) => {
  showLoading();
  if (checkEnv()) {
    Taro.request({
      url: url,
      method: HTTP_POST,
      data: params,
      header: HTTP_HEADER,
      timeout: HTTP_TIMEOUT,
      success: (res) => {},
    });
  } else {
    callback && callback.fail(Constant.MSG_NET_ERROR);
  }
  hideLoading();
};

const checkEnv = () => {
  const token = getStorageSync(Constant.KEY_TOKEN);
  if (isEmpty(token)) {
    byLog("token不存在，重新登录");
    return false;
  }
  return true;
};


export {
  get, //get请求
  post, //post请求
  checkEnv, //检查环境
  getToken, //获取token
};
