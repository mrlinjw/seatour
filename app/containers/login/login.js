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
import Tool from '../../utils/tool';

export default class Login extends Component{
  constructor(props) {
    super(props);
    //1验证码登录，2密码登录
    this.state = {
      loginType: 1,
      showLoginName: '密码登录',
      isGetYzm: false,
      second: 30,
    }
  }
  changeLoginType(){
    let { loginType } = this.state;
    if( loginType == 1){
      this.setState({
        loginType: 2,
        showLoginName: '验证码登录',
      });
    }else{
      this.setState({
        loginType: 1,
        showLoginName: '密码登录',
      });
    }
  }
  getYzm(){
    let me = this;
    me.setState({isGetYzm: true});
    let interval = setInterval(()=>{
      let{ second } = me.state;
      console.log(second);
      if(second>0){
        let s = second -1;
        me.setState({second: s});
      }else if(second==0){
        clearInterval(interval);
        me.setState({
          second: 30,
          isGetYzm: false,
        })
      }
    },1000);
  }
  getYzmCotent(){
    let { isGetYzm, second } = this.state;
    if(isGetYzm){
      return <Text style={[styles.pass_yzm,{color:'gray'}]} >{ second+'秒后重发' }</Text>;
    }else{
      return <Text style={styles.pass_yzm} onPress={ this.getYzm.bind(this) }>获取验证码</Text>;
    }
  }

  getContent(){
    let { loginType } = this.state;
    let content = null;
    if( loginType==1 ){
      content = (
        <View style={[styles.textView,{flexDirection:'row', justifyContent:'space-between'}]}>
          <TextInput
            placeholder="请输入验证码"
            underlineColorAndroid='transparent'
            selectionColor='#00cfff'
            clearButtonMode='while-editing'
            style={[styles.textStyle,{flex:1}]}
          />
          { this.getYzmCotent() }
        </View>
      )
    }else{
      content = (
        <View style={[styles.textView,{flexDirection:'row', justifyContent:'space-between'}]}>
          <TextInput
            placeholder="请输入密码"
            secureTextEntry = {true}
            underlineColorAndroid='transparent'
            selectionColor='#00cfff'
            clearButtonMode='while-editing'
            style={[styles.textStyle,{flex:1}]}
          />
          <Text style={styles.pass_yzm} onPress={ ()=>{ Tool.to('resetPass') } }>忘记密码</Text>
        </View>
      )
    }
    return content;
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
          { this.getContent() }
          <Text onPress={ this.changeLoginType.bind(this) } style={ styles.changeLoginType} >{this.state.showLoginName}</Text>
        </View>
        <MyButton
          style = {styles.loginBtn}
          onPress = { ()=>{}}
          >
          登录
        </MyButton>
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
  },
  changeLoginType:{
    alignSelf:'flex-end',
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
  }
})
