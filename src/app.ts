import { Component } from 'react'
import './app.scss'
import { getNetworkType, getSystemInfo, byLog } from './common/util'

class App extends Component {

  componentDidMount () {
    getSystemInfo()
    getNetworkType()
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
