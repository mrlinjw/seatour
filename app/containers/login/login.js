import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  View
} from 'react-native';
import MyButton from '../../components/button';


export default class Login extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <View>
        <View>
          <Image  style={styles.logo} source={require('../../img/logo.png')}/>
        </View>
        <View>
          <View style={styles.textView}>
            <TextInput
              placeholder="请输入手机号"
              underlineColorAndroid='transparent'
              selectionColor='#00cfff'
              clearButtonMode='while-editing'
              style={styles.textStyle}
            />
          </View>
          <View style={[styles.textView,{flexDirection:'row', justifyContent:'space-between'}]}>
            <TextInput
              placeholder="请输入验证码"
              underlineColorAndroid='transparent'
              selectionColor='#00cfff'
              clearButtonMode='while-editing'
              style={[styles.textStyle,{flex:1}]}
            />
            <Text style={styles.pass_yzm}>获取验证码</Text>
          </View>
          <MyButton
            style = {styles.loginBtn}
            onPress = { ()=>{}}
            >
            登录
          </MyButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 30,
    marginBottom: 30,
  },
  textView: {
    borderColor:'gray',
    borderBottomWidth: 0.5,
    marginLeft:30,
    marginRight:30
  },
  textStyle: {
    height:40,
    marginTop:5,
  },
  loginBtn: {
    width: 250,
    borderRadius: 25,
    alignSelf: 'center',
  },
  pass_yzm:{
    color:'#00cfff',
    width: 80,
    textAlign:'center',
    lineHeight: Platform.OS == 'ios'?45:35,
  }
})
