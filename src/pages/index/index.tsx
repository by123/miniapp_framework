import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import {get, post} from '../../common/netutil'
import Constant from '../../common/constant'
import { byLog } from '../../common/util'
import ByButton from '../../component/by_btn/index'

export default class Index extends Component {  
  componentWillMount () { 
    get(Constant.URL_LOGIN_WECHAT,{
      success: ()=> {
        byLog('成功')
      },
      fail: ()=> {
        byLog('失败')
      }
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <ByButton user='by'></ByButton>
      </View>
    )
  }
}
