import { Component } from 'react'
import { Text } from "@tarojs/components";
import './index.scss'
import Screen from "../index";

export default class Index extends Component {  
  componentWillMount () { 

  }

  render () {
    return (
      <Screen >
        <Text>关于</Text>
      </Screen>
    )
  }
}
