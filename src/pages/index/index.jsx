import {Component} from 'react'
import {View, Text, OpenData} from '@tarojs/components'
import {AtButton} from 'taro-ui'
import Taro from '@tarojs/taro'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.css'

export default class Index extends Component {

  componentWillMount() {
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  login(e) {
    console.log(e.detail.userInfo, "go")
    Taro.login({
      success: function (res) {
        if (res.code) {
          //发起网络请求
          Taro.request({
            url: 'http://127.0.0.1:8081/login',
            data: {
              code: res.code
            }
          }).then((data) => {
            console.log(data.data)
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }

  render() {
    return (
      <View className='index'>
        <AtButton type='primary' openType="getUserInfo" onGetUserInfo={this.login}>登录</AtButton>
        <OpenData type='userAvatarUrl'/>
        <OpenData type='userAvatarUrl'/>
      </View>
    )
  }
}
