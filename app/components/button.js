import React, { Component } from 'react';
import {
  StyleSheet
}from 'react-native';
import Button from 'apsl-react-native-button'

/**
*type:按钮样式
*1: 蓝底白字，2白底黑字
*
*/
export default class MyButton extends Component{
  render(){
    let{
      onPress,
      onPressIn,
      onPressOut,
      onLongPress,
      textStyle,
      isLoading,
      isDisabled,
      activeOpacity,
      style,
      type,
    } = this.props,
    s = styles.btnStyle_blue,
    ts = styles.btnTextStyle_white ;
    if(type == 2){
      s = styles.btnStyle_gray,
      ts = styles.btnTextStyle_gray ;
    }

    return(
      <Button
        onPress = { onPress }
        onPressIn = { onPressIn }
        onPressOut = { onPressOut }
        onLongPress = { onLongPress }
        style = { [styles.btnStyle, style, s] }
        textStyle = { [textStyle, ts] }
        isLoading = { isLoading }
        isDisabled = { isDisabled }
        activeOpacity = { 0.7 }
      >
        {this.props.children}
      </Button>
    )
  }
}

let styles = StyleSheet.create({
  btnStyle:{
    marginTop:10,
    marginLeft:20,
    marginRight:20,
  },
  btnStyle_blue:{
    backgroundColor:'#00cfff',
    borderColor:'#00bbe6'
  },
  btnTextStyle_white:{
    color: '#fff',
    fontSize: 14,
  },
  btnStyle_gray:{
    backgroundColor:'#fff',
    borderColor:'#eeeeee'
  },
  btnTextStyle_gray:{
    color: '#353535',
    fontSize: 14,
  }
})
