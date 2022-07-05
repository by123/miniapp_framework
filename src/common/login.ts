import Taro from "@tarojs/taro";
import showToast from 'util/util'

    const doLogin = () => {
       requestCode()
    }

    /**
     * 请求微信/支付宝code
     */
     const requestCode = () => {
        Taro.login({
            success: function(res){
                this.loading(res.code)
            },
            fail: function(res: TaroGeneral.CallbackResult){
                showToast(res.errMsg)
            }
        })
    }

    /**
     * 登录
     * @param code 
     */
    const login = (code)  => {
       
    }
