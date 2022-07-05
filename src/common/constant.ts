export default class Constant {
  /************************************************ 基本参数 ************************************************/
  static MINIAPP_NAME = "小程序名称"
  static APP_ID = "appid"  
  static BUILD_TYPE = 0   //0 微信  1 支付宝
  static SCAN_URL = 'https://www.by.com'    //小程序码url
  static IS_DEV = true //是否开发环境

  /************************************************ 存储key ************************************************/
  static KEY_SCREEN_WIDTH = "screen_width"
  static KEY_SCREEN_HEIGHT = "screen_height"
  static KEY_LATITUDE = 'latitude'
  static KEY_LONGITUDE = 'longitude'
  static KEY_BUILD_TYPE = 'build_type'
  static KEY_BRAND = 'brand'
  static KEY_MODEL = 'model'
  static KEY_VERSION= 'version'
  static KEY_SYSTEM = 'system'
  static KEY_PLATFORM = 'platform'
  static KEY_PIXELRATIO = 'pixelRatio'
  static KEY_NETWORK_TYPE = 'network_type'
  static KEY_TOKEN = 'token'


  /************************************************ 页面URL ************************************************/
  static PAGE_HOME = "/pages/HomePage"
  static PAGE_ABOUT = "/pages/AboutPage"

  /************************************************ 常用文案 ************************************************/
  static MSG_SUCCESS = "请求成功"
  static MSG_ERROR = "网络错误码:%d"
  static MSG_CANCEL = "取消"
  static MSG_CONFIRM = "确定"
  static MSG_DELETE = "删除"
  static MSG_WARN = "警告"
  static MSG_PROMPT = "提示"
  static MSG_COMMIT = "提交"
  static MSG_SEARCH = "搜索"
  static MSG_MORE = "更多"
  static MSG_FINISH = "结束"
  static MSG_DATE_FORMAT_ZH = "yyyy年MM月dd日"
  static MSG_DATE_FORMAT_POINT = "yyyy.MM.dd"
  static MSG_DATE_FORMAT_ALL = "yyyy-MM-dd HH:mm:ss"
  static MSG_TIME_FORMAT = "yyyy-MM-dd HH:mm:ss"
  static MSG_NET_ERROR = "网络连接失败，请检查您的网络"
  static MSG_INPUT = "请输入"
  static MSG_SAVE = "保存"
  static MSG_PIC_SAVE_SUCCESS = "图片保存成功"
  static MSG_PIC_SAVE_FAIL = "图片保存失败"
  static MSG_PHOTO_LIBRARY = "图片已保存至您的相册"
  static MSG_UPDATE_SUCCESS = "修改成功"
  static MSG_UPDATE = "修改"
  static MSG_SELECT = "请选择"
  static MSG_YUAN = "元"
  static MSG_EMPTY = ""
  static MSG_BLANK = " "
  static MSG_ZERO = "0"
  static MSG_RETURN_ERROR = "error"

  static MSG_DLG_AUTH_TITLE = "需要您的授权"
  static MSG_DLG_AUTH_CONTENT =
    "为了提供很好的服务\n请在稍后的提示框中点击“允许”"
  static MSG_DLG_AUTH_BTN = "我知道了"

  /************************************************ 网络请求 ************************************************/
  static MAX_REQ_SIZE = 10 //每页最大请求数量
  static STATU_SUCCESS = 0 //成功返回数据
  static STATU_FAIL = -1 //失败返回数据
  static STATU_EROOR = -2 //失败请求
  static STATU_REQUEST_SUCCESS = 200 //请求成功
  static STATU_REDIRECT_ERROR = 302 //服务临时重定向
  static STATU_SERVER_REJECT = 403 //服务器拒绝
  static STATU_NOT_FOUND = 404 //页面无法找到
  static STATU_INNER_ERROR = 500 //服务器内部错误
  static STATU_SERVER_EROOR = 502 //服务器网关错误
  static ROOT_URL = "" //域名
  static URL_LOGIN_WECHAT = "/wechat/login" //微信登录
  static URL_LOGIN_ALI = "/alipay/login" //支付宝登录

  /************************************************ 资源文件 ************************************************/
  static IMG_BACK = "../../imgs/ic_back.png"
}
