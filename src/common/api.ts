import Constant from "./constant"
import { post } from "./netutil"

const Api = {
    //微信登录
    wxLogin: (params) => post(Constant.URL_LOGIN_WECHAT, params),
    //支付宝登录
    aliLogin: (params) => post(Constant.URL_LOGIN_ALI, params)
}


export default Api;