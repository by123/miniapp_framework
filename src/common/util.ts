import Taro from "@tarojs/taro"
import P from "../style"
import Constant from "./constant"

/**
 * 轻提示
 * @param title
 * @param statuIcon
 */
const showToast = (
  title: string,
  statuIcon?: "success" | "error" | "loading" | "none"
) => {
  var icon: "success" | "error" | "loading" | "none" = "none"
  if (statuIcon) {
    icon = statuIcon
  }
  Taro.showToast({
    title: title,
    icon: icon,
  })
}

/**
 * 显示加载中
 * @param title
 */
const showLoading = (title?: string) => {
  Taro.showLoading({ title: title || "" })
}

/**
 * 隐藏加载中
 */
const hideLoading = () => {
  Taro.hideLoading()
}

/**
 * 同步存储数据
 * @param key 
 * @param value 
 */
const setStorageSync = (key, value) => {
  Taro.setStorageSync(key, value)
}

/**
 * 同步获取存储数据
 * @param key 
 * @returns 
 */
const getStorageSync = (key) => {
  return Taro.getStorageSync(key);
}

/**
 * 时间戳转日期时间
 * @param number 
 * @returns 
 */
const formatTime = (number) => {
  const date = new Date(number)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

/**
 * 时间的加0处理
 */
const  formatNumber = (n) => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/*获取设备信息*/
const getSystemInfo = () => {
  setStorageSync(Constant.KEY_BUILD_TYPE, Constant.BUILD_TYPE)
  Taro.getSystemInfo({
    success(res) {
      setStorageSync(Constant.KEY_BRAND, res.brand)
      setStorageSync(Constant.KEY_MODEL, res.model)
      setStorageSync(Constant.KEY_VERSION, res.version)
      setStorageSync(Constant.KEY_SYSTEM, res.system)
      setStorageSync(Constant.KEY_PLATFORM, res.platform)
      setStorageSync(Constant.KEY_PIXELRATIO, res.pixelRatio)
      setStorageSync(Constant.KEY_SCREEN_WIDTH, res.windowWidth)
      setStorageSync(Constant.KEY_SCREEN_HEIGHT, res.windowHeight)
    },
  })
}

/**获取位置信息 */
const getLocation = () => {
  Taro.getLocation({
    type: 'gcj02', //地理编码格式
    success: function(res) {
      setStorageSync(Constant.KEY_LATITUDE, res.latitude)
      setStorageSync(Constant.KEY_LONGITUDE, res.longitude)
    },
  })
}

/**分享**/
const share = () => {
  return {
    title: Constant.MINIAPP_NAME,
    path: 'pages/index/index',
    success: function(res) {
      console.log(res)
    },
    fail: function(res) {
      console.log(res)
    },
  }
}

/**
 * 是否为空字符串或数组
 */
const isEmpty = (str) => {
  if (Object.prototype.toString.call(str) === '[object Undefined]') {
    //空
    return true
  } else if (
    Object.prototype.toString.call(str) === '[object String]' ||
    Object.prototype.toString.call(str) === '[object Array]'
  ) {
    //字条串或数组
    return str.length == 0 ? true : false
  } else if (Object.prototype.toString.call(str) === '[object Object]') {
    return JSON.stringify(str) == '{}' ? true : false
  } else {
    return true
  }
}

/**跳转方法**/
const buildUrl = (url, params) => {
  if (isEmpty(params)) {
    return url
  }
  url = url + '?'
  for (const index in params) {
    const item = params[index]
    url = url + item.key + '=' + item.value + '&'
  }
  url = url.slice(0, url.length - 1)
  console.log('跳转链接：' + url)
  return url
}

/**跳转到下一页*/
const openPage = function(url, params?) {
  Taro.navigateTo({
    url: buildUrl(url, params),
  })
}

/**跳转到下一页，不需要返回*/
const openPageWithoutBack = function(url, params?) {
  Taro.redirectTo({
    url: buildUrl(url, params),
  })
}

/**打开当前页，清除所有页*/
const reLunchPage = function(url, params) {
  setTimeout(function() {
    Taro.reLaunch({
      url: buildUrl(url, params),
    })
  }, 200)
}
/**返回上一页**/
const backLastPage = function() {
  Taro.navigateBack()
}


// array转base64
const arrayToBase64 = (array) => {
  const arrayBuffer = new Uint8Array(array)
  const base64 = Taro.arrayBufferToBase64(arrayBuffer)
  return base64
}

// base64转array
const base64ToArray = (base64) => {
  return Taro.base64ToArrayBuffer(base64)
}

// 扫码
const scan = (result) => {
  Taro.scanCode({
    success(res) {
      result(res.result)
    },
  })
}

//小程序码验证，并取得参数
const checkScanCode = (snStr) => {
  if (snStr.startsWith(Constant.SCAN_URL)) {
    return snStr.slice(Constant.SCAN_URL.length)
  } else {
    showToast('该二维码无效，请扫描商品外包装二维码')
    return Constant.MSG_RETURN_ERROR
  }
}

//查找参数
const getUrlParams = (params, key) => {
  const vars = params.split('&')
  for (let i = 0 ; i < vars.length ; i++) {
    const pair = vars[i].split('=')
    if (pair[0] == key) {
      return pair[1]
    }
  }
  return false
}

//当前网络环境
const getNetworkType = () => {
  Taro.getNetworkType().then((res) => {
    setStorageSync(Constant.KEY_NETWORK_TYPE, res.networkType)
    byLog("当前网络环境:" + res.networkType);
  });
};

const Trans = (value: number) => {
  // const pixo = getStorageSync(Constant.KEY_PIXELRATIO)
  const screenWidth = getStorageSync(Constant.KEY_SCREEN_WIDTH)
  return screenWidth  * value / P.designWidth
}

//调试
const byLog = (msg) => {
  Constant.IS_DEV && console.log('by666 => ' + msg)
}

export {
  showToast,
  showLoading,
  hideLoading,
  formatTime,
  getSystemInfo,
  getLocation,
  share,
  isEmpty,
  buildUrl,
  openPage,
  openPageWithoutBack,
  reLunchPage,
  backLastPage,
  base64ToArray,
  arrayToBase64,
  scan,
  checkScanCode,
  getUrlParams,
  setStorageSync,
  getStorageSync,
  getNetworkType,
  byLog,
  Trans,
}