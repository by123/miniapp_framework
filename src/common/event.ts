import Taro from "@tarojs/taro";

export interface EventCallback {
  onEvent: (value) => void;
}

const registerEvent = (key, callback?: EventCallback) => {
  Taro.eventCenter.on(key, (arg) => {
    callback && callback.onEvent(arg);
  });
};

const removeEvent = (key) => {
  Taro.eventCenter.off(key);
};

const sendEvent = (key, data) => {
  Taro.eventCenter.trigger(key, data);
};

export { registerEvent, removeEvent, sendEvent };
